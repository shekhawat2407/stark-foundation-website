import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProgramPageHero } from '@/components/site/program-page-hero'
import { ActivityCard } from '@/components/site/activity-card'
import { activitiesForBucket, programForBucket, activeNow } from '@/lib/programs'

export default function HigherEdPartnerships() {
  const program = programForBucket('higher-ed-partnerships')
  const activities = activitiesForBucket('higher-ed-partnerships')
  const ecbWorkshops = activeNow.find((a) => a.id === 'ecb-ai-workshops')

  return (
    <>
      <ProgramPageHero
        heroImage="/images/12a/image19.jpg"
        imageAlt="Students training on sewing machines at Maharani Sudarshan College, Bikaner"
        eyebrow="Programs"
        title="We revived a dormant computer lab. 210 students trained. Free."
        tagline={program.intro}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          Our partnership playbook
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 max-w-3xl">
          Find a dormant or under-used facility. Plug in our training. Scale to a college population.
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-10">
          Two case studies: one concluded (Maharani Sudarshan College) and one
          just beginning (Engineering College Bikaner).
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2 rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Case study · Concluded
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Maharani Sudarshan College for Women, Bikaner
            </h3>
            <div className="mt-2 text-sm text-muted-foreground">
              February 2024 – February 2026 · 2-year MOU
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              In February 2024 we partnered with the administration of Maharani
              Sudarshan College to revive their computer lab, which had been
              inactive for 10 years. We transferred computers from our centre to
              launch Computer-based Skill Development programs. The MOU also
              covered Stitching &amp; Fashion Designing courses at the college, all
              at zero fees to students. ~210 students trained across multiple
              batches before the MOU concluded.
            </p>
          </article>

          <article className="rounded-lg border border-accent/30 bg-accent/5 p-6">
            {ecbWorkshops && (
              <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 uppercase tracking-wider mb-3">
                {ecbWorkshops.status}
              </div>
            )}
            <h3 className="text-lg md:text-xl font-semibold">
              Engineering College Bikaner: AI Workshops
            </h3>
            <div className="mt-2 text-sm text-muted-foreground">
              Since May 2026, expanding
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Free workshops for engineering students on the skills the next
              decade will demand.
            </p>

            <div className="mt-4 text-xs font-semibold text-foreground/80 mb-2">
              Curriculum
            </div>
            <div className="flex flex-wrap gap-2">
              {['Intro to AI', 'Prompt Engineering', 'Building AI Tools'].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-full bg-muted px-3 py-1 text-xs"
                  >
                    {c}
                  </span>
                )
              )}
            </div>

            <div className="mt-4 text-sm">
              <span className="font-semibold text-primary">20+</span>{' '}
              <span className="text-muted-foreground">students so far · expanding to other engineering colleges</span>
            </div>
          </article>
        </div>
      </section>

      {activities.length > 0 && (
        <section className="bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Activities & milestones
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
              On the record.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {activities.map((a) => (
                <ActivityCard key={a.id} activity={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Partner with us on a college program.
            </h2>
            <p className="mt-3 text-white/90 max-w-xl">
              We're looking to expand the AI workshop model to more engineering
              colleges. If you can connect us with a campus, we'd love to talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
