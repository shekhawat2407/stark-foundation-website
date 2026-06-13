import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ProgramPageHero } from '@/components/site/program-page-hero'

const values = [
  {
    title: 'Free always',
    desc: 'No fees, ever. Selected students pay nothing for our courses.',
  },
  {
    title: 'Local first',
    desc: 'Bikaner-grown. We work where we live, where we know the gaps.',
  },
  {
    title: 'Accountable',
    desc: 'Every rupee maps to a real outcome, every batch to a real person.',
  },
  {
    title: 'Beneficiary-led',
    desc: 'Programs designed around what students actually need.',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Founded',
    body: 'Registered as a Section-8 non-profit in Bikaner.',
  },
  {
    year: '2020',
    title: 'COVID response',
    body: 'Pandemic response across Bikaner: meals, rations, RT-PCR support and oxygen.',
  },
  {
    year: '2021',
    title: 'Bikaner centre',
    body: 'First training centre opens in Old Ginnani. Several projects to uplift kids from Bikaner slum areas.',
  },
  {
    year: '2022',
    title: 'CSR camps',
    body: 'First CSR-funded health, eye-care and welfare camps.',
  },
  {
    year: '2023',
    title: 'Adhigam launches',
    body: 'Inaugural Adhigam summer camp across 4 govt schools.',
  },
  {
    year: '2024',
    title: 'Maharani College MOU',
    body: 'College tie-up with Maharani Sudarshan College.',
  },
  {
    year: '2025',
    title: 'Pundalsar centre',
    body: 'Second centre opens in Dungargarh district.',
  },
]

type Person = { name: string; role?: string; photo?: string }

const team: Person[] = [
  { name: 'Gautam Pandey', role: 'Senior Operations Coordinator', photo: '/images/team/gautam-pandey.jpg' },
  { name: 'Meenu Modi', role: 'Trainer', photo: '/images/team/meenu-modi.jpg' },
  { name: 'Ishu Solanki', role: 'Operations Coordinator', photo: '/images/team/ishu-solanki.jpg' },
  { name: 'Radhika Meena', role: 'Trainer', photo: '/images/team/radhika-meena.jpg' },
  { name: 'Madhavi Joshi', role: 'Outreach', photo: '/images/team/madhavi-joshi.jpg' },
  { name: 'Mohit Gaba', role: 'Hardware Lead', photo: '/images/team/mohit-gaba.jpg' },
  { name: 'Aashima Rathore', role: 'Partnerships', photo: '/images/team/aashima-rathore.jpg' },
  { name: 'Pradhyumn Singh', role: 'Tech Lead', photo: '/images/team/pradhyumn-singh.jpg' },
]

const advisors: Person[] = [
  { name: 'Mohit Khatri', photo: '/images/directors/mohit-khatri.jpg' },
  { name: 'Ankita Shukla', photo: '/images/directors/ankita-shukla.jpg' },
  { name: 'Pranvendra Chaturvedi', photo: '/images/directors/pranvendra-chaturvedi.jpg' },
  { name: 'Samar Haldey', photo: '/images/directors/samar-haldey.jpg' },
]

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function PersonCard({ p }: { p: Person }) {
  return (
    <div>
      <div className="relative aspect-square rounded-md overflow-hidden bg-muted">
        {p.photo ? (
          <Image
            src={p.photo}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-muted-foreground/70 tracking-wide">
            {initialsOf(p.name)}
          </div>
        )}
      </div>
      <div className="mt-3 text-sm font-semibold text-foreground leading-tight">
        {p.name}
      </div>
      {p.role && (
        <div className="mt-0.5 text-xs text-muted-foreground">{p.role}</div>
      )}
    </div>
  )
}

export default function AboutUs() {
  return (
    <>
      <ProgramPageHero
        eyebrow="About"
        title="Skills, schools, communities, for the long run."
        tagline="Serving the city since 2019."
        heroImage="/images/gallery/team-picture.jpg"
        imageAlt="The STARK Foundation team"
      />

      <section className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          Our story
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Stratifying And Advancing Rural Knowledge.
        </h2>
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-4">
          <p>
            STARK Foundation is a non-profit based in Bikaner. We were set up
            in 2019 to provide free, certified vocational training to young
            people in Rajasthan, and opened our first centre in 2021. The idea
            was simple: practical training that leads to a job, taught well,
            kept free.
          </p>
          <p>
            The work has since grown to include school programmes, college
            partnerships, CSR camps and disaster relief. But the centres are
            still the heart of it. The team is small, mostly local, and the
            work is hands-on. Teaching batches, running camps, taking study
            materials to government schools, turning up in the first few days
            when something goes wrong locally.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            How we got here
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-2xl">
            Seven years, many milestones.
          </h2>
          <div className="relative">
            <div
              aria-hidden
              className="hidden md:block absolute left-0 right-0 top-10 border-t-2 border-dashed border-accent/40"
            />
            <div
              aria-hidden
              className="md:hidden absolute left-10 top-10 bottom-10 border-l-2 border-dashed border-accent/40"
            />
            <ol className="relative grid gap-10 md:gap-3 md:grid-cols-7">
              {milestones.map((m) => (
                <li
                  key={m.year}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center"
                >
                  <div className="relative shrink-0 h-20 w-20 rounded-full bg-card border-2 border-accent shadow-md flex items-center justify-center">
                    <span className="text-base font-bold text-accent">{m.year}</span>
                  </div>
                  <div className="md:px-1">
                    <div className="text-sm font-semibold text-primary">{m.title}</div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            What we believe
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
            Four principles, every project.
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="text-base font-semibold mb-2 text-primary">
                  {v.title}
                </div>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People — Team first, Advisory Board second */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 space-y-16 md:space-y-20">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              The team
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
              Programs &amp; operations
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {team.map((p) => (
                <div
                  key={p.name}
                  className="w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)]"
                >
                  <PersonCard p={p} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Governance
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
              Advisory Board
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {advisors.map((p) => (
                <PersonCard key={p.name} p={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          Visit · Call · Write
        </div>
        <p className="text-base text-muted-foreground mb-2">
          Behind Sardar Hall, Mehron Ka Mohalla, Bikaner, Rajasthan
        </p>
        <p className="text-base text-muted-foreground">
          +91-6377730336 · hello@starkfoundation.in
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
