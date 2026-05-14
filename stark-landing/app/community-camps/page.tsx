import Link from 'next/link'
import { ArrowRight, Building2, Stethoscope, Users, Hand } from 'lucide-react'
import { ProgramPageHero } from '@/components/site/program-page-hero'
import { ActivityCard } from '@/components/site/activity-card'
import {
  activitiesForBucket,
  programForBucket,
} from '@/lib/programs'

const playbook = [
  {
    icon: Building2,
    title: 'CSR partner approves',
    desc: 'A corporate sponsor commits a project budget. We share scope, beneficiary count, and impact targets up front.',
  },
  {
    icon: Hand,
    title: 'Local NGO ties form',
    desc: 'We coordinate with local Bikaner partners to identify the camp location and target community.',
  },
  {
    icon: Stethoscope,
    title: 'Specialists deploy',
    desc: 'Doctors, optometrists, counsellors or trainers, sourced from local hospitals and govt bodies, arrive on-site for the day.',
  },
  {
    icon: Users,
    title: 'Outcomes documented',
    desc: 'Beneficiaries served, supplements distributed, follow-up notes. Photos and metrics shared back to the CSR partner.',
  },
]

export default function CommunityCamps() {
  const program = programForBucket('community-camps')
  const activities = activitiesForBucket('community-camps')

  return (
    <>
      <ProgramPageHero
        heroImage="/images/gallery/hero-camps.jpg"
        imageAlt="STARK Foundation community camp in Bikaner"
        eyebrow="Programs"
        title="CSR projects that meet Bikaner where it needs us."
        tagline={program.intro}
      />

      {/* Playbook — how a community camp comes together */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          How it works
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 max-w-3xl">
          From CSR commitment to camp day, in four steps.
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-10">
          We scope every camp around what the local community actually needs,
          deliver with specialists, and document outcomes back to the funder.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {playbook.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-card p-6 relative"
            >
              <div className="absolute top-4 right-5 text-3xl font-serif font-semibold text-accent/30 leading-none">
                {i + 1}
              </div>
              <div className="inline-flex rounded-md bg-primary/10 p-2.5 text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-base font-semibold mb-1 pr-6">{title}</div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured story — Eye Camp Udasar */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 text-center">
            Featured Camp · March 2022
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center max-w-3xl mx-auto leading-snug">
            290 people at Udasar got an eye check-up. Many for the first time.
          </h2>
          <p className="mt-6 text-base text-muted-foreground max-w-3xl mx-auto text-center">
            Our Eye Check-Up Camp at Udasar was a mobile clinic focused on
            cataract identification, the leading cause of blindness in the
            area. Funded by BkESL, run with local optometrists, documented for
            follow-up care. The kind of project we can replicate for any CSR
            partner with a community-health mandate.
          </p>
        </div>
      </section>

      {activities.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Camps on record
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
            Health & welfare camps we've run for the community.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
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
              Partner with us on a camp.
            </h2>
            <p className="mt-3 text-white/90 max-w-xl">
              If your company has a CSR mandate and wants to fund a focused
              community drive (health, eye care, women &amp; children, drug
              awareness), we can scope and deliver.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              CSR enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
