import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PrintButton } from '../report-2026/PrintButton'

export const metadata: Metadata = {
  title: 'STARK Foundation — An Overview',
  description:
    'A general overview of S.T.A.R.K. Foundation: programs, centres, partnerships, transparency, and how to engage. Section-8 NGO based in Bikaner since 2019.',
}

const PAGES = [
  { n: '01', title: 'Skill Development Center' },
  { n: '02', title: 'Bachpan — Children' },
  { n: '03', title: 'Higher-Ed Partnerships' },
  { n: '04', title: 'C.S.R. Projects' },
  { n: '05', title: 'Disaster Relief' },
  { n: '06', title: 'Digital Pahel' },
  { n: '07', title: 'Targets Ahead' },
  { n: '08', title: 'Compliance & Transparency' },
]

export default function TheFoundation() {
  return (
    <div className="bg-white">
      {/* Top control bar — not printed */}
      <div className="print:hidden border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-muted-foreground">
            STARK Foundation — Overview (printable). Save to PDF for stakeholder share.
          </div>
          <PrintButton />
        </div>
      </div>

      {/* ============== COVER ============== */}
      <Page bg="cover">
        <CoverAccents />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/gallery/adhigam-2023.jpg"
            alt="STARK Foundation gathering"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-16 text-white">
          <div>
            <div className="text-sm md:text-base tracking-widest opacity-90 mb-2">
              S.T.A.R.K.
            </div>
            <div className="h-1 w-24 bg-accent mb-6" />
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              The Foundation
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg opacity-95">
              An overview of who we are, what we do, and where we work.
            </p>
          </div>
          <div className="bg-white/95 text-foreground rounded-md p-4 md:p-5 max-w-md shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/ebeb61_602706572e3e4b1f9343ca4d617325fb_mv2.png"
                alt="STARK Foundation logo"
                width={36}
                height={36}
                priority
              />
              <div className="text-sm font-semibold">STARK Foundation</div>
            </div>
            <div className="text-xs text-muted-foreground space-y-0.5">
              <div>📞 +91-7014237837</div>
              <div>✉ hello@starkfoundation.in</div>
              <div>🌐 www.starkfoundation.in</div>
            </div>
          </div>
        </div>
      </Page>

      {/* ============== LETTER FROM LEADERSHIP ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="01" />
        <div className="px-6 md:px-16 py-12 md:py-16 max-w-3xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed mb-5">
            <strong>Dear Stakeholder,</strong>
          </p>
          <div className="text-sm md:text-base leading-relaxed space-y-4 text-foreground/85">
            <p>
              If you&apos;re reading this, you already know us, or you&apos;re
              about to. Either way, thank you for the few minutes you&apos;re
              giving to a document that tries to explain what STARK Foundation
              actually does on the ground.
            </p>
            <p>
              Being part of a non-profit is harder than it looks. From being
              answerable to many people you interact with (often about
              what&apos;s in it for them), to occasional self-doubt about
              whether we&apos;re really adding any value. The pages that
              follow are our attempt to answer that question, with examples
              instead of slogans.
            </p>
            <p>
              When it comes to adding value, there&apos;s no shortage of
              schemes or organisations claiming to help the underprivileged.
              But the gap between what&apos;s promised and what actually
              reaches the ground is wide. The reason we started STARK was to
              shrink that gap. If a credible organisation, public or private,
              is already solving the problem we see, our first move is to
              connect the beneficiary to them. Only when nothing exists do we
              allocate our own time and money.
            </p>
            <p>
              On the operational side, the team has matured. What started as
              a few volunteers is now a small full-time team across two
              centres in Bikaner and Pundalsar. From running batches and
              college MOUs to facilitating placements and onboarding CSR
              partners, the foundation isn&apos;t just surviving on
              enthusiasm anymore. It&apos;s being run as an institution.
            </p>
            <p>
              Some of what follows will, we hope, bring a smile. None of it
              would have been possible without people like you, who showed up
              with moral, operational, or financial support, and stayed.
            </p>
            <p className="mt-6">Thank you for everything. Upwards & onwards. 🙂</p>
            <p className="mt-8 leading-tight">
              Yours,
              <br />
              <strong>Pradhyumn Singh</strong>
              <br />
              <span className="text-xs text-muted-foreground">
                Treasurer · STARK Foundation
              </span>
            </p>
          </div>
        </div>
      </Page>

      {/* ============== TABLE OF CONTENTS ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="02" />
        <div className="px-6 md:px-16 py-12 md:py-16 grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          <div className="relative">
            <div className="flex items-stretch gap-2">
              <div className="w-0.5 bg-foreground/80" />
              <div className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.9] text-foreground/85 [writing-mode:vertical-rl] rotate-180">
                Table of
                <br />
                Contents
              </div>
              <div className="w-0.5 bg-foreground/80" />
            </div>
          </div>
          <ol className="space-y-7">
            {PAGES.map((p) => (
              <li key={p.n}>
                <div className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
                  {p.n}.
                </div>
                <div className="text-sm md:text-base text-foreground/80 mt-1">
                  {p.title}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Page>

      {/* ============== 01 — SKILL DEVELOPMENT CENTER ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="03" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Overview</SectionEyebrow>
          <SectionTitle>SKILL DEVELOPMENT<br />CENTER</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                STARK Foundation&apos;s flagship program is the{' '}
                <strong>vocational training centre</strong>, run in
                collaboration with certified institutes and under the guidance
                of highly reputed faculties in Bikaner.
              </p>
              <p>
                The courses offered are <strong>free of cost</strong> for the
                selected candidates, along with complete placement support or
                in-house opportunities (for the &lsquo;Clothing &
                Designing&rsquo; vertical).
              </p>
              <p>
                The admission process involves rigorous screening &
                background verification, followed by an in-person interview.
                We have two operational centres — Bikaner (since June 2021)
                and Pundalsar (since February 2025) — covering both urban and
                rural Rajasthan.
              </p>
              <p className="pt-2">
                <strong>Skill partners:</strong> Tally Education · Singer
                India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-muted col-span-2">
                <Image
                  src="/images/gallery/vocational-training-class.jpg"
                  alt="Students at the STARK Foundation Bikaner centre during a vocational training class"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-muted">
                <Image
                  src="/images/gallery/batch-computer-bikaner.jpg"
                  alt="Basic Computer batch at the Bikaner centre"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-muted">
                <Image
                  src="/images/gallery/batch-stitching-bikaner.jpg"
                  alt="Stitching batch at the Bikaner centre"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed">
            <div>
              <p className="font-semibold mb-2 text-foreground">
                &lsquo;Computer & I.T.&rsquo; vertical
              </p>
              <p className="text-foreground/80">
                Each batch starts with a core competency (Typing or Tally),
                then builds adjacent skill sets — MS applications, web
                browsing, applying for jobs online. Soft-skill prep is woven
                in: resume building, mock interviews, communication
                fundamentals. Where vacancies open up in the local market, we
                connect students directly.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2 text-foreground">
                &lsquo;Clothing & Designing&rsquo; vertical
              </p>
              <p className="text-foreground/80">
                Two-tier program: a 3-month certificate course and a 6-month
                diploma. Beyond training, the centre operates as a small
                workshop — students take work orders, mentor newer students,
                and learn the working dynamics of supplying to local vendors
                and clothing brands.
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* ============== 02 — BACHPAN ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="04" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Children</SectionEyebrow>
          <SectionTitle>BACHPAN</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-muted">
              <Image
                src="/images/gallery/hero-bachpan.jpg"
                alt="Children at a Bachpan program"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                <strong>Bachpan</strong> is our work with children in
                government schools and slum areas around Bikaner. The format
                is intentionally flexible — summer learning camps in govt
                schools, weekend workshops, study-kit drives, distribution
                drives, Children&apos;s Day events.
              </p>
              <p>
                The flagship initiative under this banner is{' '}
                <strong>Adhigam</strong> — a summer learning camp launched in
                2023 across 4 government schools, now running an expanded
                second edition.
              </p>
              <p>
                The thesis: kids in govt schools often don&apos;t need a
                replacement system; they need an extra month of structured
                exposure with people who&apos;ve done what they want to do.
                Adhigam pairs school timetables with mentorship and creative
                workshops.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-md border-l-4 border-accent bg-muted/40 p-5 md:p-6">
            <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-1">
              On record
            </p>
            <p className="text-sm md:text-base text-foreground/85">
              Children&apos;s Day 2021: 150 kids from 5 slum areas, sports
              events, education kits, frocks stitched by women in our
              stitching program. Distribution drives at MP Colony Govt School
              (books and learning material). Stationery distribution at
              Gharsisar area schools.
            </p>
          </div>
        </div>
      </Page>

      {/* ============== 03 — HIGHER-ED PARTNERSHIPS ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="05" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Colleges</SectionEyebrow>
          <SectionTitle>HIGHER-ED<br />PARTNERSHIPS</SectionTitle>

          <p className="mt-6 max-w-3xl text-sm md:text-base text-foreground/85 leading-relaxed">
            We partner with colleges to revive under-used facilities and run
            free, future-facing courses. Two case studies show the model:
          </p>

          <div className="mt-8 space-y-6">
            <CaseBlock
              tag="Concluded"
              title="Maharani Sudarshan College for Women"
              when="February 2024 – February 2026 · 2-year MOU"
              body="In February 2024 we partnered with the college administration to revive their computer lab, dormant for 10 years. We transferred computers from our Bikaner centre and launched Computer-based Skill Development and Stitching & Fashion Designing programs. ~210 students trained across multiple batches at zero fees to students."
              photo="/images/gallery/maharani-mou-2024.jpg"
              alt="Maharani Sudarshan College MOU"
            />
            <CaseBlock
              tag="Active"
              title="Engineering College Bikaner — AI Workshops"
              when="Since May 2026 · expanding"
              body="A new partnership with the EICE Department under HOD Ms. Pooja Bhardwaj. Phase 1 introductory session covered AI in industry, the shift from chatbots to autonomous agents, hallucination risks, and tools like Claude Code and Copilot. VLSI segment covered hardware design tools and how AI is starting to influence hardware design. A hands-on Phase 2 project in collaboration with the Foundation has been announced."
              photo="/images/gallery/ai-workshop-ecb-2026.jpg"
              alt="AI Workshop at ECB"
            />
          </div>
        </div>
      </Page>

      {/* ============== 04 — CSR PROJECTS (text) ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="06" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · CSR</SectionEyebrow>
          <SectionTitle>C.S.R. PROJECTS</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                Our embarkment into the world of corporate partnerships began
                with a pilot project with{' '}
                <strong>Bikaner Electricity Supply Limited (Bk.E.S.L)</strong>
                , itself a result of contributions made during the second
                wave of COVID.
              </p>
              <p>
                After the pilot, the leadership team at Bk.E.S.L. entrusted
                us with five more projects across health, eye-care and
                school infrastructure. The continued momentum echoes a quote
                from C.S. Lewis: &ldquo;if you do one good deed, your reward
                usually is to be set to do another and harder and better
                one.&rdquo;
              </p>
              <p>
                For every project, we follow a systematic approach: identify
                the right area and beneficiaries via on-ground surveys and
                conversations with local authorities, generate a brief, plan
                in detail, then execute. The core themes have been{' '}
                <strong>accessible healthcare</strong>,{' '}
                <strong>sanitation</strong>, and{' '}
                <strong>infrastructure support for schools</strong>.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-muted">
              <Image
                src="/images/gallery/hero-camps.jpg"
                alt="STARK Foundation community camp"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Page>

      {/* ============== 04b — CSR NUMBERS ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="07" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · CSR Numbers</SectionEyebrow>
          <SectionTitle>C.S.R. PROJECTS</SectionTitle>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <StatCard
              n="1"
              title="Health Check-up Camp"
              subtitle="Vaishno Dham slums"
              stats={[
                ['130', 'Total beneficiaries'],
                ['55', 'People tested (CBC, T3, T4, TSH, etc.)'],
              ]}
            />
            <StatCard
              n="2"
              title="Eye Check-up Camp"
              subtitle="Udasar village"
              stats={[
                ['290', 'Total beneficiaries'],
                ['97', 'Eyeglasses distributed'],
                ['13', 'Patients treated with surgeries'],
              ]}
            />
          </div>
          <div className="mt-5">
            <StatCard
              n="3"
              title="School Infrastructure & Sports"
              subtitle="Pemasar & Udairamsar villages"
              wide
              stats={[
                ['3', 'Schools'],
                ['1,700', 'Total beneficiaries'],
                ['2', 'Water coolers installed'],
                ['55', 'Sports equipment sets'],
                ['100', 'Furniture sets distributed'],
                ['2', 'Computer systems installed'],
                ['25', 'Classrooms equipped with power'],
              ]}
            />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Health camp was followed up with post-diagnostic consultations and medicine distributions.
          </p>
        </div>
      </Page>

      {/* ============== 05 — DISASTER RELIEF ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="08" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Emergency</SectionEyebrow>
          <SectionTitle>DISASTER RELIEF</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-muted">
              <Image
                src="/images/12a/image18.jpg"
                alt="COVID meal box distribution in Bikaner, 2021"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                <strong>When the pandemic hit.</strong> Our disaster-relief
                muscle was forged through the COVID response in Bikaner —
                six weeks, ₹6.58 lakh in spend, around 1,500 families served.
              </p>
              <p>
                We delivered <strong>6,000+ meal boxes</strong> to COVID
                patients at their doorstep, <strong>4,000+ ration kits</strong>{' '}
                to families whose livelihood was impacted, free home{' '}
                <strong>RT-PCR sample collection</strong> for residents aged
                60+ in coordination with the Central Medical Health Office,
                and <strong>rent-free oxygen concentrators</strong> for
                discharged patients managing recovery at home.
              </p>
              <p>
                STARK Foundation continues to maintain disaster-response
                readiness. If a future emergency arises, the same playbook
                gets activated.
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* ============== 06 — DIGITAL PAHEL ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="09" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Drive</SectionEyebrow>
          <SectionTitle>DIGITAL PAHEL</SectionTitle>

          <div className="grid md:grid-cols-[1fr_280px] gap-8 mt-8 items-start">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                <strong>Digital Pahel</strong> (pahel = &lsquo;initiative&rsquo;
                in Hindi) is our in-kind donation campaign — we collect
                laptops, desktops, tablets, smartphones, cameras, and sewing
                machines, refurbish them, and deploy them directly to
                students at our centres, partner colleges, and government
                schools we work with.
              </p>
              <p>
                <strong>None of the items donated will be sold.</strong>{' '}
                Every device is tested, cleaned, repaired if needed, and
                configured for our centre or a partner school. Sewing
                machines are serviced before deployment. We share back, with
                the donor, where each item ended up.
              </p>
              <p>
                The campaign accepts donations from Bikaner and across India
                — donors from Delhi, Mumbai and Jaipur have participated in
                the past.
              </p>
            </div>
            <div className="rounded-md border border-border bg-muted/30 p-5">
              <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-2">
                What we accept
              </p>
              <ul className="text-xs space-y-1.5">
                <li>· Laptops (working or repairable)</li>
                <li>· Desktops & monitors</li>
                <li>· Tablets · iPads</li>
                <li>· Android smartphones</li>
                <li>· Cameras · webcams</li>
                <li>· Sewing machines (Singer / Usha)</li>
              </ul>
            </div>
          </div>
        </div>
      </Page>

      {/* ============== 07 — TARGETS AHEAD ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="10" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Looking Ahead</SectionEyebrow>
          <SectionTitle>TARGETS AHEAD</SectionTitle>

          <div className="mt-8 grid md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed text-foreground/85">
            <div className="space-y-3">
              <p>
                <strong>Coverage in rural Rajasthan.</strong> Increase the
                reach of our skill development programs through mobile setups
                in remote tehsils around Bikaner and Dungargarh. Strike a
                tighter balance between training supply and market demand.
              </p>
              <p>
                <strong>Higher-ed partnerships at scale.</strong> Build on
                the Maharani and ECB engagements with one new college tie-up
                per academic year, focused on reviving under-used computer
                labs.
              </p>
              <p>
                <strong>Niche product training.</strong> Train students in
                niche product lines (uniforms, lifestyle accessories), set up
                Self-Help Groups, and guide them to sell on e-commerce
                platforms.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <strong>Project-based learning.</strong> Integrate soft-skill
                training more deeply into the &lsquo;Computer & I.T.&rsquo;
                vertical. Add project-based learning (in-house or external)
                for technical growth.
              </p>
              <p>
                <strong>Funding mix.</strong> Gradually shift from individual
                contributors to government-sponsored schemes and more CSR
                partners. The infrastructure work with Bk.E.S.L. is the
                template.
              </p>
              <p>
                <strong>Off-school coaching pilot.</strong> Launch
                supplementary education through mentorship and off-school
                coaching at selected govt schools.
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* ============== 08 — COMPLIANCE & TRANSPARENCY ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="11" />
        <div className="px-6 md:px-16 py-10 md:py-14">
          <SectionEyebrow>The Foundation · Governance</SectionEyebrow>
          <SectionTitle>COMPLIANCE &<br />TRANSPARENCY</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-sm md:text-base leading-relaxed text-foreground/85">
            <div className="space-y-3">
              <p>
                S.T.A.R.K. (Stratifying and Advancing Rural Knowledge)
                Foundation is a <strong>Section 8 registered firm</strong>{' '}
                and, under M.C.A. guidelines, we go through{' '}
                <strong>annual auditing and I.T.R. filing</strong>.
              </p>
              <p>
                We hold <strong>12A and 80G approvals</strong>, so monetary
                contributions qualify for income tax exemption. A certificate
                is issued to every contributor.
              </p>
              <p>
                We are M.C.A.-compliant for C.S.R. activities and registered
                on portals such as <strong>Benevity</strong> and{' '}
                <strong>Razorpay</strong> for fundraising campaigns.
              </p>
              <p>
                Active profiles maintained on government-regulated portals
                including <strong>NGO Darpan</strong> and{' '}
                <strong>Gyan Sankalp</strong>.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <strong>Flow of funds.</strong> 100% of donations come
                through online transfers (Razorpay subscriptions, direct bank
                transfer). ~98% of expenses are paid digitally.
              </p>
              <p>
                <strong>Real-time ledger.</strong> Every employee records
                their expenses on a shared internal ledger as incurred.
                Records are validated and approved by one of our directors on
                a monthly basis.
              </p>
              <p>
                <strong>Stakeholder access.</strong> Any stakeholder can be
                added on request to inspect monthly expense records. We
                share the full P&L breakup with active CSR partners and
                significant donors as part of standard reporting.
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-md border border-border bg-muted/30 p-5">
              <p className="text-center text-base font-semibold mb-3">
                Funding Mix (historical)
              </p>
              <p className="text-xs text-center text-muted-foreground mb-4">
                Indicative breakdown
              </p>
              <BreakdownBar
                items={[
                  { label: 'CSR Partners', pct: 66, color: '#16a34a' },
                  { label: 'Directors', pct: 16, color: '#0e7490' },
                  { label: 'Other contributors', pct: 18, color: '#facc15' },
                ]}
              />
            </div>
            <div className="rounded-md border border-border bg-muted/30 p-5">
              <p className="text-center text-base font-semibold mb-3">
                Expenditure Mix (historical)
              </p>
              <p className="text-xs text-center text-muted-foreground mb-4">
                Indicative breakdown
              </p>
              <BreakdownBar
                items={[
                  { label: 'CSR Projects', pct: 60, color: '#1e3a8a' },
                  { label: 'Employee Salaries', pct: 16, color: '#ea580c' },
                  { label: 'Trainer Cost', pct: 11, color: '#94a3b8' },
                  { label: 'Capital Expenditure', pct: 4, color: '#facc15' },
                  { label: 'Other Operating', pct: 3, color: '#10b981' },
                  { label: 'Other Activities', pct: 3, color: '#0e7490' },
                  { label: 'Rent & Utilities', pct: 2, color: '#a855f7' },
                  { label: 'Auditing & Compliance', pct: 1, color: '#64748b' },
                ]}
              />
            </div>
          </div>
        </div>
      </Page>

      {/* ============== THANK YOU ============== */}
      <Page bg="thanks">
        <CornerAccents />
        <div className="relative h-full flex flex-col justify-between p-8 md:p-16">
          <div className="grid grid-cols-3 gap-3 md:gap-5 mt-8">
            {[
              '/images/gallery/recent-stitching-2026.jpg',
              '/images/gallery/water-cooler-bhim-vridha-2026.jpg',
              '/images/gallery/maharani-computer.jpg',
              '/images/gallery/recent-mp-colony-2025.jpg',
              '/images/gallery/ai-workshop-ecb-2026.jpg',
              '/images/gallery/eye-camp-composite.jpg',
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-square rounded-md overflow-hidden border-4 border-primary/20 bg-muted"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mt-8">
            <div className="flex items-center gap-4">
              <Image
                src="/images/ebeb61_602706572e3e4b1f9343ca4d617325fb_mv2.png"
                alt="STARK Foundation logo"
                width={56}
                height={56}
                priority
              />
              <div className="text-xs space-y-0.5">
                <div>📞 +91-7014237837</div>
                <div>✉ hello@starkfoundation.in</div>
                <div>🌐 www.starkfoundation.in</div>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-semibold tracking-tight text-primary">
              THANK
              <br />
              YOU !
            </div>
          </div>
        </div>
      </Page>

      <div className="print:hidden bg-surface border-t border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-6 flex flex-wrap gap-3 justify-between items-center">
          <PrintButton />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

// =================== Components ===================

function Page({ children, bg }: { children: React.ReactNode; bg?: 'cover' | 'thanks' }) {
  return (
    <section
      className={`relative w-full mx-auto max-w-[210mm] min-h-[297mm] overflow-hidden bg-white shadow-sm print:shadow-none print:break-after-page ${
        bg === 'cover' ? 'bg-primary' : ''
      } ${bg === 'thanks' ? 'bg-white' : ''}`}
    >
      {children}
    </section>
  )
}

function CornerAccents() {
  // Mirrors the orange + blue diagonal chevron accents from the 2022 PDF.
  return (
    <>
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-28 h-28 md:w-36 md:h-36"
        viewBox="0 0 144 144"
      >
        <polygon points="0,0 50,0 14,40 0,40" fill="#ea580c" />
        <polygon points="58,0 110,0 60,60 14,60" fill="#1e3a8a" />
      </svg>
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36"
        viewBox="0 0 144 144"
      >
        <polygon points="144,144 94,144 130,104 144,104" fill="#ea580c" />
        <polygon points="86,144 34,144 84,84 130,84" fill="#1e3a8a" />
      </svg>
      {/* Subtle background flourish */}
      <svg
        aria-hidden
        className="absolute -z-0 inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 600 800"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <path
            key={i}
            d={`M 0 ${100 + i * 35} Q 300 ${50 + i * 30} 600 ${120 + i * 38}`}
            stroke="#1e3a8a"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
    </>
  )
}

function CoverAccents() {
  return (
    <>
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 z-10"
        viewBox="0 0 224 224"
      >
        <polygon points="0,0 80,0 24,60 0,60" fill="#ea580c" />
        <polygon points="92,0 170,0 90,90 14,90" fill="#1e3a8a" opacity="0.7" />
      </svg>
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 z-10"
        viewBox="0 0 224 224"
      >
        <polygon points="224,224 144,224 200,164 224,164" fill="#ea580c" />
        <polygon points="132,224 54,224 134,134 210,134" fill="#1e3a8a" opacity="0.7" />
      </svg>
    </>
  )
}

function PageFooter({ n }: { n: string }) {
  return (
    <div className="absolute bottom-6 right-12 md:right-20 text-[10px] md:text-xs tracking-widest text-foreground/60 z-10">
      STARK FOUNDATION &nbsp;|&nbsp; PAGE {n}
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3 border-b border-foreground/15 pb-3 max-w-md">
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-foreground/90">
      {children}
    </h2>
  )
}

function CaseBlock({
  tag,
  title,
  when,
  body,
  photo,
  alt,
}: {
  tag: string
  title: string
  when: string
  body: string
  photo: string
  alt: string
}) {
  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-5 rounded-md border border-border overflow-hidden bg-card">
      <div className="relative aspect-[4/3] md:aspect-auto bg-muted">
        <Image src={photo} alt={alt} fill priority sizes="(max-width: 768px) 100vw, 280px" className="object-cover" />
      </div>
      <div className="p-5 md:py-6 md:pr-6">
        <div className="inline-flex text-[10px] uppercase tracking-wider font-semibold bg-accent/15 text-accent px-2 py-0.5 rounded-full mb-2">
          {tag}
        </div>
        <div className="text-lg md:text-xl font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground mt-1 mb-3">{when}</div>
        <p className="text-sm text-foreground/85 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function StatCard({
  n,
  title,
  subtitle,
  stats,
  wide,
}: {
  n: string
  title: string
  subtitle: string
  stats: [string, string][]
  wide?: boolean
}) {
  return (
    <div className="rounded-md border border-border bg-card overflow-hidden">
      <div className="bg-foreground/85 text-white px-4 py-2 flex items-center gap-3">
        <div className="text-xs font-semibold rounded bg-white/15 px-2 py-0.5">
          {n}
        </div>
        <div className="text-sm md:text-base font-semibold leading-tight">
          {title}
          <div className="text-xs text-white/75 font-normal">{subtitle}</div>
        </div>
      </div>
      <div className={`p-4 grid gap-4 ${wide ? 'sm:grid-cols-3 md:grid-cols-4' : 'sm:grid-cols-2'}`}>
        {stats.map(([v, l]) => (
          <div key={l}>
            <div className="text-2xl md:text-3xl font-semibold text-primary leading-none">
              {v}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BreakdownBar({ items }: { items: { label: string; pct: number; color: string }[] }) {
  return (
    <div>
      <div className="h-3 w-full rounded-full overflow-hidden flex">
        {items.map((it) => (
          <div
            key={it.label}
            style={{ width: `${it.pct}%`, backgroundColor: it.color }}
            title={`${it.label}: ${it.pct}%`}
          />
        ))}
      </div>
      <ul className="mt-3 text-xs space-y-1">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: it.color }} />
            <span className="text-foreground/80 flex-1">{it.label}</span>
            <span className="font-semibold tabular-nums">{it.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
