// Generates a static PDF of /the-foundation using headless Chrome.
// Output: out/stark-foundation-overview.pdf
//
// Boots a tiny static file server over the exported `out/` directory,
// loads /the-foundation in headless Chrome, then prints to A4 portrait.
import http from 'node:http'
import { createReadStream, existsSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import puppeteer from 'puppeteer'

const ROOT = 'out'
const ROUTE = '/the-foundation'
const OUT_PDF = `${ROOT}/stark-foundation-overview.pdf`

if (!existsSync(ROOT)) {
  console.error(`[generate-pdf] '${ROOT}/' not found — run \`next build\` first`)
  process.exit(1)
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
}

async function tryServe(res, path) {
  try {
    const s = await stat(path)
    if (!s.isFile()) return false
    res.setHeader(
      'Content-Type',
      MIME[extname(path).toLowerCase()] || 'application/octet-stream',
    )
    res.setHeader('Cache-Control', 'no-store')
    createReadStream(path).pipe(res)
    return true
  } catch {
    return false
  }
}

const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent((req.url || '/').split('?')[0])
  if (p === '/') p = '/index.html'

  // Try the path as-is, then with .html, then as a directory with /index.html.
  const candidates = [
    join(ROOT, p),
    join(ROOT, p + '.html'),
    join(ROOT, p, 'index.html'),
  ]
  for (const c of candidates) {
    if (await tryServe(res, c)) return
  }
  res.statusCode = 404
  res.end('Not found: ' + p)
})

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const port = server.address().port
const baseUrl = `http://127.0.0.1:${port}`
console.log(`[generate-pdf] serving ${ROOT}/ on ${baseUrl}`)

let browser
try {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  })
  const page = await browser.newPage()
  // High-DPI render for sharp photos at print resolution.
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 })
  page.on('pageerror', (err) => console.warn('[page error]', err.message))
  page.on('requestfailed', (req) =>
    console.warn('[req failed]', req.url(), req.failure()?.errorText),
  )

  await page.goto(baseUrl + ROUTE, { waitUntil: 'networkidle0', timeout: 60_000 })

  // Make sure every <img> is fully loaded and decoded before printing.
  await page.evaluate(async () => {
    const imgs = Array.from(document.images)
    await Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalWidth > 0
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true })
              img.addEventListener('error', resolve, { once: true })
              if (img.loading === 'lazy') img.loading = 'eager'
            }),
      ),
    )
    // give one paint frame so layout reflows with loaded images
    await new Promise((r) => requestAnimationFrame(() => r(null)))
  })

  await page.emulateMediaType('print')

  await page.pdf({
    path: OUT_PDF,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  console.log(`[generate-pdf] wrote ${OUT_PDF}`)
} finally {
  if (browser) await browser.close()
  server.close()
}
