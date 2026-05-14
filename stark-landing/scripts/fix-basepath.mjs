// Rewrites unprefixed /images/ and /screenshots/ refs in exported HTML to include
// NEXT_PUBLIC_BASE_PATH. Needed because next/image with `output: 'export'` +
// `unoptimized: true` does not apply basePath to <img src>. No-op when the env
// var is empty (custom-domain build).
import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
if (!basePath) {
  console.log('[fix-basepath] NEXT_PUBLIC_BASE_PATH empty — nothing to do')
  process.exit(0)
}

const ROOTS = ['/images/', '/screenshots/']
const OUT_DIR = new URL('../out/', import.meta.url).pathname

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (entry.isFile() && /\.(html|txt)$/.test(entry.name)) yield path
  }
}

let edited = 0
for await (const file of walk(OUT_DIR)) {
  const original = await readFile(file, 'utf8')
  let next = original
  for (const root of ROOTS) {
    // Match the root path only when NOT already prefixed by basePath.
    const re = new RegExp(`(?<!${basePath.replace(/[/]/g, '\\/')})${root}`, 'g')
    next = next.replace(re, `${basePath}${root}`)
  }
  if (next !== original) {
    await writeFile(file, next)
    edited++
  }
}
console.log(`[fix-basepath] rewrote ${edited} file(s) under ${OUT_DIR}`)
