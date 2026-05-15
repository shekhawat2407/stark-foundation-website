// One-shot: shrink hero images so pages load fast on slow connections.
// Replaces JPGs in place (max 1920px wide, quality 72, progressive, mozjpeg).
import sharp from 'sharp'
import { stat, rename, unlink } from 'node:fs/promises'

const targets = [
  'public/images/gallery/adhigam-2023.jpg',
  'public/images/gallery/hero-bachpan.jpg',
  'public/images/gallery/hero-camps.jpg',
  'public/images/gallery/team-picture.jpg',
  'public/images/12a/image32.jpg',
  'public/images/12a/image19.jpg',
  'public/images/12a/image18.jpg',
]

let totalBefore = 0
let totalAfter = 0
for (const src of targets) {
  try {
    const before = (await stat(src)).size
    const tmp = src + '.tmp'
    await sharp(src)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 72, progressive: true, mozjpeg: true })
      .toFile(tmp)
    await unlink(src)
    await rename(tmp, src)
    const after = (await stat(src)).size
    totalBefore += before
    totalAfter += after
    const pct = ((1 - after / before) * 100).toFixed(0)
    console.log(`${(before / 1024).toFixed(0).padStart(4)} KB → ${(after / 1024).toFixed(0).padStart(4)} KB (-${pct.padStart(2)}%)  ${src}`)
  } catch (e) {
    console.log(`SKIP  ${src} (${e.message})`)
  }
}
console.log(`\nTotal: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB (saved ${((totalBefore - totalAfter) / 1024).toFixed(0)} KB)`)
