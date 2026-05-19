import type { Metadata } from 'next'
import Link from 'next/link'
import { Printer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stakeholder Report 2026 | STARK Foundation',
  description:
    "STARK Foundation's 2026 stakeholder report. Mission, programs, impact, team, partners and how to engage. Bikaner-based Section-8 NGO since 2019.",
}

export default function Report2026() {
  return (
    <div className="bg-background">
      {/* Print/download controls — hidden on print */}
      <div className="print:hidden border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-muted-foreground">
            Stakeholder Report — printable. Use your browser&apos;s Print →
            Save as PDF to download.
          </div>
          <div className="flex items-center gap-2">
            <PrintButton />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 print:py-6">
        {/* Cover */}
        <section className="border-b border-border pb-10 mb-10 print:break-after-page">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            Stakeholder Report · 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-primary mb-4">
            STARK Foundation
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            <span className="font-medium text-foreground">
              S.T.A.R.K. Foundation
            </span>{' '}
            (Stratifying And Advancing Rural Knowledge). Registered Section-8
            non-profit working in skill development, education and disaster
            relief across rural and underserved Rajasthan. Headquartered in
            Bikaner. Operating since 2019.
          </p>
          <div className="mt-6 text-sm text-muted-foreground flex flex-wrap gap-x-6 gap-y-1">
            <span>hello@starkfoundation.in</span>
            <span>+91-7014237837</span>
            <span>starkfoundation.in</span>
          </div>
        </section>

        {/* At a glance — stats grid */}
        <Section title="At a glance" eyebrow="Section 01">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-6">
            {[
              { v: '470+', l: 'Students trained vocational (₹0 fee)' },
              { v: '25+', l: 'Training batches run' },
              { v: '4,200+', l: 'Served via camps & drives' },
              { v: '7 yrs', l: 'On the ground since 2019' },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="text-3xl font-semibold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <FactGrid
            rows={[
              ['Founded', '2019'],
              [
                'Legal status',
                'Section-8 Non-Profit, registered under Sections 12A & 80G of the Income Tax Act',
              ],
              ['Headquarters', 'Bikaner, Rajasthan'],
              ['Centres', '2 (Bikaner, Pundalsar)'],
              ['Core team', '8 members'],
              ['Advisory board', '4 members'],
            ]}
          />
        </Section>

        {/* Mission */}
        <Section title="Mission" eyebrow="Section 02">
          <p className="text-base md:text-lg leading-relaxed mb-4">
            STARK Foundation works in{' '}
            <strong>rural and underserved Rajasthan</strong> to remove the gap
            between potential and opportunity. We do this by running
            fully-funded skill development programs, supporting government
            schools, and stepping up during community emergencies.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Our work is anchored on four principles:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base">
            <li>
              <strong>Free at the point of delivery.</strong> No fees from
              students.
            </li>
            <li>
              <strong>Partner over duplicate.</strong> We work with schools,
              colleges and government bodies rather than building parallel
              systems.
            </li>
            <li>
              <strong>Measured in placements, not enrolments.</strong> Success
              is post-program employability.
            </li>
            <li>
              <strong>Transparent and on the record.</strong> Every project has
              a date, venue, beneficiary count, and spend recorded.
            </li>
          </ol>
        </Section>

        {/* Programs */}
        <Section title="What we do — five programs" eyebrow="Section 03">
          <div className="space-y-5">
            <ProgramCard
              n="01"
              title="Vocational Training"
              tag="Flagship"
              body="Free certified courses in computer skills, accounting, and stitching & fashion design. Two centres in Bikaner and Pundalsar with placement support for selected candidates."
              extras={[
                'Courses: Basic Computer · Hindi/English Typing · MS Excel & Office · Tally & Accounting · Stitching (certificate + diploma) · Fashion Designing',
                'Skill partners: Tally Education · Singer India',
              ]}
            />
            <ProgramCard
              n="02"
              title="Bachpan — Children's Education"
              tag="Children"
              body="Summer learning camps in government schools, weekend workshops, study-kit drives, and ongoing work with kids in slum areas and government schools."
              extras={[
                'Flagship initiative: Adhigam — summer learning camp launched 2023, second edition running May–June 2026 across a broader school list.',
              ]}
            />
            <ProgramCard
              n="03"
              title="Higher-Ed Partnerships"
              tag="Colleges"
              body="We partner with colleges to revive dormant facilities and run free, future-facing courses."
              extras={[
                'Maharani Sudarshan College for Women — 2-year vocational training MOU (Feb 2024 – Feb 2026), ~210 students trained',
                'Engineering College Bikaner — AI Workshops (May 2026 onwards). Phase 1 delivered; hands-on Phase 2 project in scoping.',
              ]}
            />
            <ProgramCard
              n="04"
              title="Community Camps"
              tag="CSR"
              body="Mobile health camps, eye check-ups, and community welfare drives funded by our CSR partners."
              extras={[
                'Examples: Eye Check-Up Camp at Udasar (290 beneficiaries) · Health Camp at Vaishno Dham (130) · Water cooler donation at Bhim Vridha Ashram, May 2026',
              ]}
            />
            <ProgramCard
              n="05"
              title="Disaster Relief"
              tag="Emergency"
              body="COVID-19 response, 2021: 6,000+ meal boxes delivered to patients, 4,000+ ration kits to families with disrupted livelihoods, free home RT-PCR sample collection for residents aged 60+ (coordinated with the Central Medical Health Office, Bikaner), and rent-free oxygen concentrators for discharged patients."
            />
          </div>
        </Section>

        {/* Centres */}
        <Section title="Where we work — our centres" eyebrow="Section 04">
          <div className="grid gap-4 md:grid-cols-2">
            <CentreCard
              tag="Centre 1"
              name="Bikaner"
              location="Behind Sardar Hall, Mehron Ka Mohalla"
              opened="June 2021"
              trained="250+"
              tracks={[
                'Basic Computer',
                'Hindi/English Typing',
                'MS Excel & Office',
                'Tally & Accounting',
                'Stitching: Certificate',
                'Stitching: Diploma',
                'Fashion Designing',
              ]}
              note="Currently running two live cohorts (May 2026): Basic Computer (12 students) and Stitching & Dress Designing (12 students)."
            />
            <CentreCard
              tag="Centre 2"
              name="Pundalsar"
              location="Pundalsar Village, Dungargarh District"
              opened="February 2025"
              trained="10+"
              tracks={['Stitching: Certificate', 'Fashion Designing']}
              note="Run directly by STARK Foundation."
            />
          </div>
        </Section>

        {/* Timeline */}
        <Section title="Seven years, many milestones" eyebrow="Section 05">
          <Timeline
            items={[
              { y: '2019', t: 'Founded', d: 'Registered as a Section-8 non-profit in Bikaner' },
              { y: '2020', t: 'COVID response', d: 'Pandemic response across Bikaner: meals, rations, RT-PCR support and oxygen' },
              { y: '2021', t: 'Bikaner centre', d: 'First training centre opened in Old Ginnani' },
              { y: '2022', t: 'CSR camps', d: 'First CSR-funded health, eye-care and welfare camps' },
              { y: '2023', t: 'Adhigam launches', d: 'Inaugural summer learning camp across 4 govt schools' },
              { y: '2024', t: 'Maharani College MOU', d: '2-year vocational training tie-up; dormant computer lab revived' },
              { y: '2025', t: 'Pundalsar centre', d: 'Second centre opens in Dungargarh District' },
              { y: '2026', t: 'AI Workshops + Adhigam edition 2', d: 'New higher-ed partnership at ECB; broader Adhigam reach' },
            ]}
          />
        </Section>

        {/* Case studies */}
        <Section title="Featured case studies" eyebrow="Section 06">
          <div className="space-y-6">
            <CaseStudy
              n="Case 01"
              title="COVID-19 Response"
              when="May – June 2021"
              spend="₹6.58 lakh"
              beneficiaries="~1,500 families"
              body="A six-week, full-scale emergency response in Bikaner. 6,000+ meal boxes to COVID patients at their doorstep. 4,000+ ration kits to families with disrupted livelihoods. Free home RT-PCR sample collection for residents aged 60+ coordinated with the Central Medical Health Office, Bikaner. Oxygen concentrators distributed rent-free to discharged patients recovering at home."
            />
            <CaseStudy
              n="Case 02"
              title="Maharani Sudarshan College — 2-year MOU"
              when="February 2024 – February 2026"
              spend="₹1.13 lakh"
              beneficiaries="~210 students trained"
              body="A 2-year academic partnership that revived a 10-year-dormant computer lab. We transferred computers from our Bikaner centre to launch Computer-based Skill Development and Stitching & Fashion Designing programs at zero fees to students. First cohort (Mar–Jul 2024): 60 computer/typing + 45 stitching students. Multiple batches followed."
            />
            <CaseStudy
              n="Case 03"
              title="AI Workshops at Engineering College Bikaner"
              when="13 May 2026 (Phase 1)"
              spend="—"
              beneficiaries="Engineering students, EICE Dept"
              body="New higher-ed partnership with the EICE Department under HOD Ms. Pooja Bhardwaj. Phase 1 introductory session covered AI in industry, the shift from chatbots to autonomous agents, hallucination risks, and tools like Claude Code and Copilot. VLSI segment covered hardware design tools and how AI is starting to influence hardware design. Phase 2 hands-on project in scoping."
            />
            <CaseStudy
              n="Case 04"
              title="Eye Check-Up Camp at Udasar"
              when="March 2022"
              spend="₹1.16 lakh"
              beneficiaries="290"
              body="Mobile camp delivering low-cost eye care to rural communities, with primary emphasis on cataract identification and treatment. Funded by our CSR partner BkESL (Bikaner Electricity Supply)."
            />
          </div>
        </Section>

        {/* Currently active */}
        <Section title="Currently active (May 2026)" eyebrow="Section 07">
          <ul className="space-y-3 text-sm md:text-base">
            <ActiveItem
              title="Adhigam 2026"
              detail="Second-edition summer learning camp launching this month with a broader school list than the 2023 inaugural edition."
            />
            <ActiveItem
              title="AI Workshops at ECB"
              detail="Phase 1 delivered. Phase 2 hands-on project in scoping."
            />
            <ActiveItem
              title="Bikaner centre cohorts"
              detail="Basic Computer (12 students) + Stitching (12 students), both May 2026 cohorts, mid-session."
            />
            <ActiveItem
              title="Pundalsar centre"
              detail="Stitching cohorts running directly under STARK."
            />
          </ul>
        </Section>

        {/* Partners */}
        <Section title="Partners" eyebrow="Section 08">
          <div className="grid gap-4 md:grid-cols-2">
            <PartnerBlock
              heading="Skill Partners"
              items={['Tally Education', 'Singer India']}
            />
            <PartnerBlock
              heading="CSR Partners"
              items={[
                'BkESL (Bikaner Electricity Supply)',
                'Confluxsys Private Limited',
              ]}
            />
            <PartnerBlock
              heading="NGO Collaborators"
              items={[
                'Robin Hood Army',
                'Youth Against Illiteracy (YAI)',
                'Vrikshit Foundation',
              ]}
            />
            <PartnerBlock
              heading="Academic Partners"
              items={[
                'Maharani Sudarshan College for Women',
                'Engineering College Bikaner — EICE Dept',
              ]}
            />
          </div>
        </Section>

        {/* Team */}
        <Section title="Team & governance" eyebrow="Section 09">
          <div className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-3">
            Core team
          </div>
          <FactGrid
            rows={[
              ['Gautam Pandey', 'Senior Operations Coordinator'],
              ['Meenu Modi', 'Trainer'],
              ['Ishu Solanki', 'Operations Coordinator'],
              ['Radhika Meena', 'Trainer'],
              ['Madhavi Joshi', 'Outreach'],
              ['Mohit Gaba', 'Hardware Lead'],
              ['Aashima Rathore', 'Partnerships'],
              ['Pradhyumn Singh', 'Treasurer'],
            ]}
          />
          <div className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mt-8 mb-3">
            Advisory board
          </div>
          <FactGrid
            rows={[
              ['Mohit Khatri', 'Advisor'],
              ['Ankita Shukla', 'Advisor'],
              ['Pranvendra Chaturvedi', 'Advisor'],
              ['Samar Haldey', 'Advisor'],
            ]}
          />
        </Section>

        {/* Note from foundation */}
        <Section title="A note from the foundation" eyebrow="Section 10">
          <div className="prose-blockquote text-base md:text-lg leading-relaxed space-y-4 text-foreground/85">
            <p>
              Every line in this document — every batch number, every camp
              date — started as someone in our Bikaner team knocking on a
              door, calling a parent, or staying late at the centre to finish
              a fix.
            </p>
            <p>
              The numbers matter. But the work is, finally, hand-to-hand. A
              trainer who shows up for the third batch this year. A student
              who passes the Tally exam and gets her first job. A donor who
              funds a water cooler for an old age home and asks us not to name
              them.
            </p>
            <p>
              We&apos;ve kept records of all of it. We share them
              transparently because{' '}
              <strong>
                we&apos;d rather be a small organisation that&apos;s been
                honest about every rupee for seven years, than a big one that
                lost track of what it stands for
              </strong>
              .
            </p>
            <p>
              If you&apos;re reading this as a CSR partner, a potential donor,
              or a fellow NGO — there is genuine work to do together, in this
              town, this year. Reach out.
            </p>
          </div>
        </Section>

        {/* How to engage */}
        <Section title="How to engage" eyebrow="Section 11">
          <EngageBlock
            heading="1. Donate"
            body="Razorpay (one-time/recurring) at starkfoundation.in/donate-now. 80G tax deduction applies on monetary donations. In-kind donations of devices, sewing machines, books — through Digital Pahel (starkfoundation.in/digital-pahel)."
            sponsors={[
              { label: 'Tally student sponsorship', val: '₹5,000' },
              { label: 'Typing student sponsorship', val: '₹2,000' },
              { label: 'Stitching student sponsorship', val: '₹1,000' },
              { label: "Child's annual education", val: '₹8,000' },
              { label: 'Meal program for 100 kids', val: '₹3,000' },
            ]}
          />
          <EngageBlock
            heading="2. Volunteer"
            body="Areas open: Social Media & Content · Public Relations & Collaboration · Fundraising & Grants · Strategy & Vision · Operations. Internships include a monthly stipend; full-time roles are paid monthly. Apply at starkfoundation.in/volunteer-your-time."
          />
          <EngageBlock
            heading="3. Partner with us"
            body="NGOs working in skill development or education in Rajasthan. Colleges with under-used facilities open to collaboration. CSR teams looking for ground-level execution partners with transparent reporting. Reach out at hello@starkfoundation.in."
          />
        </Section>

        {/* Contact */}
        <Section title="Contact" eyebrow="Section 12" last>
          <FactGrid
            rows={[
              ['Address', 'Behind Sardar Hall, Mehron Ka Mohalla, Bikaner, Rajasthan'],
              ['Phone / WhatsApp', '+91-7014237837'],
              ['Email', 'hello@starkfoundation.in'],
              ['Website', 'starkfoundation.in'],
              ['LinkedIn', 'linkedin.com/company/starkfndn'],
            ]}
          />
          <p className="mt-8 text-xs text-muted-foreground italic">
            This report was prepared for stakeholder distribution. Numbers
            reflect cumulative on-ground delivery from 2019 through May 2026
            and are documented in our 12A/80G filings.
          </p>
        </Section>

        <div className="print:hidden border-t border-border pt-6 mt-10 flex flex-wrap gap-3">
          <PrintButton />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

function Section({
  title,
  eyebrow,
  children,
  last,
}: {
  title: string
  eyebrow: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <section
      className={`py-8 md:py-10 ${
        last ? '' : 'border-b border-border mb-2'
      } print:break-inside-avoid`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
        {eyebrow}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  )
}

function FactGrid({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 py-3"
        >
          <dt className="text-sm font-semibold text-foreground/80">{k}</dt>
          <dd className="md:col-span-2 text-sm">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

function ProgramCard({
  n,
  title,
  tag,
  body,
  extras,
}: {
  n: string
  title: string
  tag: string
  body: string
  extras?: string[]
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 md:p-6 print:break-inside-avoid">
      <div className="flex items-baseline justify-between mb-2">
        <div className="text-xs font-semibold text-muted-foreground">{n}</div>
        <div className="text-xs rounded-full bg-muted px-2 py-0.5">{tag}</div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{body}</p>
      {extras && extras.length > 0 && (
        <ul className="mt-3 space-y-1 text-xs text-foreground/75 list-disc pl-5">
          {extras.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function CentreCard({
  tag,
  name,
  location,
  opened,
  trained,
  tracks,
  note,
}: {
  tag: string
  name: string
  location: string
  opened: string
  trained: string
  tracks: string[]
  note?: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 print:break-inside-avoid">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
        {tag}
      </div>
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-muted-foreground mt-1">{location}</div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span>
          <span className="font-medium text-foreground/80">Opened:</span>{' '}
          {opened}
        </span>
        <span>
          <span className="font-medium text-foreground/80">Trained:</span>{' '}
          {trained}
        </span>
      </div>
      <div className="mt-3 text-xs font-semibold text-foreground/80">
        Courses
      </div>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {tracks.map((t) => (
          <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs">
            {t}
          </span>
        ))}
      </div>
      {note && <p className="mt-3 text-xs text-foreground/75">{note}</p>}
    </div>
  )
}

function Timeline({ items }: { items: { y: string; t: string; d: string }[] }) {
  return (
    <ol className="space-y-3 print:break-inside-avoid">
      {items.map((it) => (
        <li
          key={it.y}
          className="grid grid-cols-[60px_1fr] gap-3 md:gap-5 items-start border-b border-border pb-3 last:border-0"
        >
          <div className="text-xl md:text-2xl font-bold text-primary">
            {it.y}
          </div>
          <div>
            <div className="text-base font-semibold">{it.t}</div>
            <div className="text-sm text-muted-foreground">{it.d}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

function CaseStudy({
  n,
  title,
  when,
  spend,
  beneficiaries,
  body,
}: {
  n: string
  title: string
  when: string
  spend: string
  beneficiaries: string
  body: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 md:p-6 print:break-inside-avoid">
      <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent">
          {n}
        </div>
        <div className="text-xs text-muted-foreground">{when}</div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
        <div className="rounded-md bg-muted px-3 py-2">
          <div className="font-semibold">Spend</div>
          <div className="text-foreground/75">{spend}</div>
        </div>
        <div className="rounded-md bg-muted px-3 py-2">
          <div className="font-semibold">Beneficiaries</div>
          <div className="text-foreground/75">{beneficiaries}</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{body}</p>
    </div>
  )
}

function ActiveItem({ title, detail }: { title: string; detail: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span
        aria-hidden
        className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0"
      />
      <div>
        <span className="font-semibold">{title}.</span>{' '}
        <span className="text-muted-foreground">{detail}</span>
      </div>
    </li>
  )
}

function PartnerBlock({
  heading,
  items,
}: {
  heading: string
  items: string[]
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
        {heading}
      </div>
      <ul className="space-y-1 text-sm">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}

function EngageBlock({
  heading,
  body,
  sponsors,
}: {
  heading: string
  body: string
  sponsors?: { label: string; val: string }[]
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 mb-4 last:mb-0 print:break-inside-avoid">
      <div className="text-base font-semibold mb-2">{heading}</div>
      <p className="text-sm text-muted-foreground">{body}</p>
      {sponsors && (
        <div className="mt-3 grid sm:grid-cols-2 gap-1.5 text-xs">
          {sponsors.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline justify-between border-b border-border py-1.5"
            >
              <span>{s.label}</span>
              <span className="font-semibold">{s.val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function PrintButton() {
  return (
    <form action="javascript:window.print()">
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
      >
        <Printer className="h-4 w-4" />
        Print / Save as PDF
      </button>
    </form>
  )
}
