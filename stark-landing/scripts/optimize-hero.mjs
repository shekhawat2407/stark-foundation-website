// One-shot: shrink the homepage hero so it loads fast on slow connections.
// Replaces the JPG in place (1920px wide, quality 72, progressive, mozjpeg).
import sharp from 'sharp'
import { stat, rename, unlink } from 'node:fs/promises'

const src = 'public/images/gallery/adhigam-2023.jpg'
const tmp = src + '.tmp'

const before = (await stat(src)).size
await sharp(src)
  .resize({ width: 1920, withoutEnlargement: true })
  .jpeg({ quality: 72, progressive: true, mozjpeg: true })
  .toFile(tmp)
await unlink(src)
await rename(tmp, src)
const after = (await stat(src)).size

const pct = ((1 - after / before) * 100).toFixed(0)
console.log(`${src}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (-${pct}%)`)
