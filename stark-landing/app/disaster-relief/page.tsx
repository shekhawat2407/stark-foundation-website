import { ProgramPageHero } from '@/components/site/program-page-hero'
import { ActivityCard } from '@/components/site/activity-card'
import { Utensils, Stethoscope, Wind } from 'lucide-react'
import { activitiesForBucket, programForBucket } from '@/lib/programs'

const deliverables = [
  {
    icon: Utensils,
    title: 'Meal & Ration Drive',
    desc: '6,000+ meal boxes delivered to COVID patients at their doorstep. 4,000+ ration kits to families whose livelihood was impacted.',
  },
  {
    icon: Stethoscope,
    title: 'RT-PCR for the elderly',
    desc: 'Free home sample collection for residents aged 60+, under the guidance of the Central Medical Health Office, Bikaner.',
  },
  {
    icon: Wind,
    title: 'Rent-free oxygen',
    desc: 'Oxygen concentrators distributed rent-free to discharged patients managing recovery at home.',
  },
]

export default function DisasterRelief() {
  const program = programForBucket('disaster-relief')
  const activities = activitiesForBucket('disaster-relief')

  return (
    <>
      <ProgramPageHero
        heroImage="/images/12a/image18.jpg"
        imageAlt="STARK Foundation volunteers distributing meals during the 2021 COVID response in Bikaner"
        eyebrow="Programs"
        title="When the pandemic hit."
        tagline={program.intro}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          What we did
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
          Three deliverables over six weeks.
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {deliverables.map(({ icon: Icon, title, desc }) => (
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

      {/* CMHO credit */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Coordinated with
          </div>
          <div className="text-lg font-semibold text-foreground/80">
            Central Medical Health Office, Bikaner
          </div>
        </div>
      </section>

      {activities.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            On record
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
            The full case file.
          </h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 max-w-4xl">
            {activities.map((a) => (
              <ActivityCard key={a.id} activity={a} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-surface border-t border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 text-center text-sm text-muted-foreground">
          STARK Foundation continues to maintain disaster-response readiness.
          If a future emergency arises, we activate the same playbook.
        </div>
      </section>
    </>
  )
}
