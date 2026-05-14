import Image from 'next/image'
import { ReactNode } from 'react'

export function ProgramPageHero({
  heroImage,
  imageAlt,
  eyebrow,
  title,
  tagline,
  children,
}: {
  heroImage: string
  imageAlt: string
  eyebrow?: string
  title: string
  tagline?: string
  children?: ReactNode
}) {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-center text-white overflow-hidden">
      <Image
        src={heroImage}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="relative mx-auto max-w-7xl w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-block rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium mb-5 border border-white/25">
              {eyebrow}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-semibold leading-[1.05]">
            {title}
          </h1>
          {tagline && (
            <p className="mt-5 text-base md:text-lg text-white/90 max-w-2xl">
              {tagline}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}
