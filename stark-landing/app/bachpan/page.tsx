import Link from 'next/link'
import { ArrowRight, Sparkles, BookOpen, Package, Heart } from 'lucide-react'
import { ProgramPageHero } from '@/components/site/program-page-hero'
import { ActivityCard } from '@/components/site/activity-card'
import { activitiesForBucket, programForBucket, activeNow } from '@/lib/programs'

const strands = [
  {
    icon: Sparkles,
    title: 'Adhigam',
    desc: 'Flagship summer learning camp. 1st edition 2023, 2nd edition launching this month.',
  },
  {
    icon: BookOpen,
    title: 'School Workshops',
    desc: 'Ad-hoc workshops at govt schools: computer basics, career options, digital learning, practical science.',
  },
  {
    icon: Package,
    title: 'Study Kits & Infrastructure',
    desc: 'Opportunistic kits (notebooks, supplies) and school infra upgrades (water, furniture, computers).',
  },
  {
    icon: Heart,
    title: 'Slum-Children Initiatives',
    desc: "Distribution drives, school-admission help, sports camps, and the Children's Day flagship event.",
  },
]

export default function Bachpan() {
  const program = programForBucket('bachpan')
  const activities = activitiesForBucket('bachpan')
  const adhigam2026 = activeNow.find((a) => a.id === 'adhigam-2026')

  return (
    <>
      <ProgramPageHero
        heroImage="/images/gallery/hero-bachpan.jpg"
        imageAlt="STARK Foundation Bachpan programmes with kids in Bikaner"
        eyebrow="Programs"
        title="Bachpan, wherever the children are."
        tagline={program.intro}
      />

      {adhigam2026 && (
        <section className="bg-accent/10 border-y border-accent/20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 uppercase tracking-wider">
                {adhigam2026.status}
              </span>
              <div>
                <div className="text-sm font-semibold">{adhigam2026.title}</div>
                <div className="text-xs text-muted-foreground">
                  {adhigam2026.period}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          How we work
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
          Four strands, all under Bachpan.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strands.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="inline-flex rounded-md bg-primary/10 p-2.5 text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-base font-semibold mb-1">{title}</div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 text-center">
            Featured Story
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center max-w-3xl mx-auto leading-snug">
            On Children&apos;s Day 2021, women in our stitching program stitched
            frocks for 150 kids, overnight.
          </h2>
          <p className="mt-6 text-base text-muted-foreground max-w-3xl mx-auto text-center">
            150 kids from 5 slum areas brought together for sports and cultural
            competitions, in collaboration with Robin Hood Army, Youth Against
            Illiteracy and Vrikshit Foundation. Each child received sports
            shoes, a jersey, a bag, education material and food. The girl
            participants received frocks made by women in our stitching &amp;
            fashion designing training. A quiet cross-program moment that
            captures what Bachpan is.
          </p>
        </div>
      </section>


      {activities.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Activities & milestones
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
            Dated work on record.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <ActivityCard key={a.id} activity={a} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Help us reach more children this year.
            </h2>
            <p className="mt-3 text-white/90 max-w-xl">
              A modest contribution funds meals for a classroom of children,
              or sponsors a child&apos;s annual education including uniforms,
              transport, and materials.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/donate-now"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Donate now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
