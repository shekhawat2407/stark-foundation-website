import { ReactNode } from 'react'

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-semibold text-foreground max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  )
}
