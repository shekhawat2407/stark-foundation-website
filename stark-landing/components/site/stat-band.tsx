type Stat = { v: string; l: string }

export function StatBand({
  eyebrow,
  heading,
  stats,
  variant = 'primary',
}: {
  eyebrow?: string
  heading?: string
  stats: Stat[]
  variant?: 'primary' | 'light'
}) {
  const isPrimary = variant === 'primary'
  const sectionClass = isPrimary
    ? 'bg-primary text-primary-foreground'
    : 'border-y border-border bg-surface'
  const eyebrowClass = isPrimary
    ? 'text-xs font-semibold uppercase tracking-wider text-white/70 mb-3'
    : 'text-xs font-semibold uppercase tracking-wider text-accent mb-3'
  const numberClass = isPrimary
    ? 'text-4xl md:text-6xl font-semibold text-accent tracking-tight'
    : 'text-3xl md:text-5xl font-semibold text-primary tracking-tight'
  const labelClass = isPrimary
    ? 'mt-2 text-sm md:text-base text-white/80'
    : 'mt-2 text-sm md:text-base text-muted-foreground'

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        {eyebrow && <div className={eyebrowClass}>{eyebrow}</div>}
        {heading && (
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.l}>
              <div className={numberClass}>{s.v}</div>
              <div className={labelClass}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
