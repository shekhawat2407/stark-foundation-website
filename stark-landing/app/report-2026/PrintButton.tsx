'use client'

import { Printer } from 'lucide-react'
import { useState } from 'react'

async function ensureImagesLoaded() {
  const imgs = Array.from(document.images)
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalWidth > 0
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener('load', () => resolve(), { once: true })
            img.addEventListener('error', () => resolve(), { once: true })
            // Nudge browser to actually fetch lazy-loaded images.
            img.loading = 'eager'
            if (!img.src && img.dataset.src) img.src = img.dataset.src
          }),
    ),
  )
}

export function PrintButton() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')
  async function handleClick() {
    setStatus('loading')
    try {
      await ensureImagesLoaded()
      // small RAF wait so the layout reflows with loaded images before printing
      await new Promise((r) => requestAnimationFrame(() => r(null)))
    } finally {
      setStatus('idle')
      window.print()
    }
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={status === 'loading'}
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60"
    >
      <Printer className="h-4 w-4" />
      {status === 'loading' ? 'Preparing PDF...' : 'Print / Save as PDF'}
    </button>
  )
}
