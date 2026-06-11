import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PrintButton } from '../report-2026/PrintButton'
import { Download } from 'lucide-react'

function DownloadPdfButton() {
  return (
    <a
      href="/stark-foundation-overview.pdf"
      download="STARK-Foundation-Overview.pdf"
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </a>
  )
}

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
  { n: '07', title: 'Compliance & Transparency' },
]

export default function TheFoundation() {
  return (
    <div className="bg-white">
      {/* Override the site-wide @page rules: this report owns its own page
          margins via the <Page> component, so the PDF needs 0 page margin. */}
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 0 !important; }
          html, body { margin: 0 !important; padding: 0 !important; }
        }
      `}</style>
      {/* Top control bar — not printed */}
      <div className="print:hidden border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-muted-foreground">
            STARK Foundation — Overview. Pre-rendered PDF below; print fallback also available.
          </div>
          <div className="flex items-center gap-2">
            <DownloadPdfButton />
            <PrintButton />
          </div>
        </div>
      </div>

      {/* ============== COVER ============== */}
      <Page fixed>
        {/* Background photo, full bleed, heavily tinted */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/gallery/adhigam-2023.jpg"
            alt="STARK Foundation gathering"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          {/* Strong blue tint over the photo (multiply blend) so it reads as
              a backdrop, not the subject. Matches the 2022 cover treatment. */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#1e3a8a', mixBlendMode: 'multiply', opacity: 0.78 }}
          />
          {/* Soft directional gradient for extra depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-primary/55" />
        </div>

        {/* Big diagonal chevrons — top-left and bottom-right */}
        <BigCoverChevrons />

        {/* Title block — upper left over the photo */}
        <div className="absolute top-24 md:top-32 left-10 md:left-16 max-w-md text-white z-20">
          <div className="text-[11px] md:text-sm tracking-[0.4em] opacity-90 mb-3">
            S.T.A.R.K.&nbsp;FOUNDATION
          </div>
          <div className="h-1 w-20 bg-accent mb-5" />
          <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
            The
            <br />
            Foundation
          </h1>
          <p className="text-sm md:text-base opacity-90 mt-5 max-w-sm leading-relaxed">
            An overview of who we are, what we do, and where we work.
          </p>
        </div>

        {/* Bottom-left identity block — logo, name, contact */}
        <div className="absolute bottom-10 md:bottom-14 left-10 md:left-16 text-white z-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white rounded-md p-1.5">
              <Image
                src="/images/ebeb61_602706572e3e4b1f9343ca4d617325fb_mv2.png"
                alt="STARK Foundation logo"
                width={44}
                height={44}
                priority
                className="h-10 w-10 md:h-11 md:w-11 object-contain"
              />
            </div>
            <div className="text-base md:text-lg font-semibold">
              STARK Foundation
            </div>
          </div>
          <div className="text-xs md:text-sm space-y-0.5 opacity-90 pl-1">
            <div>+91-6377730336</div>
            <div>hello@starkfoundation.in</div>
            <div>www.starkfoundation.in</div>
          </div>
        </div>
      </Page>

      {/* ============== LETTER FROM LEADERSHIP ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="01" />
        <div className="px-8 md:px-16 py-14 md:py-20 max-w-3xl mx-auto">
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
            <p className="mt-6">Thank you for everything. Upwards & onwards.</p>
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
        <div className="px-8 md:px-16 py-14 md:py-20">
          <div className="border-b-2 border-foreground/80 pb-3 mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-2">
              The Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Table of Contents
            </h2>
          </div>
          <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
            {PAGES.map((p) => (
              <li
                key={p.n}
                className="flex items-baseline gap-4 border-b border-border pb-3"
              >
                <div className="text-3xl md:text-4xl font-semibold text-primary tracking-tight tabular-nums">
                  {p.n}
                </div>
                <div className="text-sm md:text-base text-foreground/80">
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
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Overview</SectionEyebrow>
          <SectionTitle>SKILL DEVELOPMENT CENTER</SectionTitle>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 mt-8 items-start">
            <div className="space-y-3 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                STARK Foundation&apos;s flagship program is the{' '}
                <strong>vocational training centre</strong>, run in
                collaboration with certified institutes and reputed faculties
                in Bikaner. Courses are <strong>free of cost</strong> for
                selected candidates, with placement support or in-house work
                opportunities (Clothing &amp; Designing vertical).
              </p>
              <p>
                Admissions follow rigorous screening and background
                verification, then an in-person interview. We operate two
                centres: <strong>Bikaner</strong> (since June 2021) and{' '}
                <strong>Pundalsar</strong> (since February 2025), covering
                both urban and rural Rajasthan.
              </p>
              <p className="pt-1 text-foreground/70 text-sm">
                Skill partners: Tally Education · Singer India.
              </p>
            </div>

            <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-muted">
              <Image
                src="/images/gallery/vocational-training-class.jpg"
                alt="Vocational training class at the Bikaner centre"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
            <div className="rounded-md border border-border bg-muted/30 p-5">
              <p className="font-semibold mb-2 text-foreground">
                &lsquo;Computer &amp; I.T.&rsquo; vertical
              </p>
              <p className="text-foreground/80">
                Batches start with a core competency (Typing or Tally), then
                build adjacent skills: MS apps, web browsing, applying for
                jobs online. Soft-skill prep is woven in: resume building,
                mock interviews, communication fundamentals. We connect
                students to local vacancies directly.
              </p>
            </div>
            <div className="rounded-md border border-border bg-muted/30 p-5">
              <p className="font-semibold mb-2 text-foreground">
                &lsquo;Clothing &amp; Designing&rsquo; vertical
              </p>
              <p className="text-foreground/80">
                Two-tier program: 3-month certificate and 6-month diploma.
                The centre operates as a small workshop where students take
                work orders, mentor newer students, and learn the dynamics
                of supplying to local vendors and clothing brands.
              </p>
            </div>
          </div>

        </div>
      </Page>

      {/* ============== 02 — BACHPAN (intro) ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="04" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Children</SectionEyebrow>
          <SectionTitle>BACHPAN</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 mt-8 items-start">
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
            <div className="space-y-3 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                <strong>Bachpan</strong> is our work with children in
                government schools and slum areas around Bikaner. The format
                is intentionally flexible: summer learning camps in govt
                schools, weekend workshops, study-kit drives, and
                Children&apos;s Day events.
              </p>
              <p>
                The flagship initiative is <strong>Adhigam</strong>, a summer
                learning camp launched in 2023 across 4 government schools,
                now running an expanded second edition.
              </p>
              <p>
                The thesis: kids in govt schools don&apos;t need a
                replacement system; they need an extra month of structured
                exposure with people who&apos;ve done what they want to do.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-4 border-b border-foreground/15 pb-2">
              Activities on record
            </div>
            <div className="space-y-3">
              <ActivityRow
                year="2021"
                date="14 Nov"
                title="Children's Day Activities"
                venue="5 slum areas, Bikaner"
                ben="150 kids"
                spend="₹78,000"
                desc="Sports and cultural events. Each child received a kit (shoes, jersey, bag, study material, packaged food). Frocks stitched by women in our stitching program. Partners: Robin Hood Army, YAI, Vrikshit Foundation."
              />
              <ActivityRow
                year="2022"
                date="2 Mar"
                title="Enhanced Learning Environment: Pemasar"
                venue="Govt Sr Sec School, Pemasar"
                ben="700 students"
                spend="₹1.0L"
                desc="Electricity fittings and sports equipment. Funded via BkESL."
              />
            </div>
          </div>
        </div>
      </Page>

      {/* ============== 02b — BACHPAN (continued) ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="05" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Children · Activities</SectionEyebrow>
          <SectionTitle>BACHPAN, CONTINUED</SectionTitle>

          <div className="mt-8 space-y-3">
            <ActivityRow
              year="2022"
              date="28 Mar"
              title="Enhanced Learning Environment: Udairamsar"
              venue="Govt Girls + Sr Sec Schools, Udairamsar"
              ben="968 students"
              spend="₹4.23L"
              desc="Water coolers + RO systems, 100 desks/furniture sets, two computers, storage almirahs. Benefits 500 girls + 468 students. Funded via BkESL."
            />
            <ActivityRow
              year="2022"
              date="20 Sep"
              title="Study Kit Distribution: Bhagwanpur"
              venue="Govt Girls Sr Sec School, Bhagwanpur"
              ben="200 students"
              spend="₹40,000"
              desc="Notebooks, pens, pencils, erasers and basic supplies — easing the cost burden on families and equipping students for the term."
            />
            <ActivityRow
              year="2023"
              date="18 May – 2 Jun"
              title="Adhigam: Computer Learning Camp (1st edition)"
              venue="NGO Office · 4 govt schools"
              ben="90 students"
              spend="₹52,000"
              desc="Flagship 2-week summer camp on digital education, science workshops and guest speakers. Schools: Maharani Govt Girls · Ganga Bal · SMJT · Haldiram Sursagar."
              highlight
            />
            <ActivityRow
              year="2024"
              date="14 Feb"
              title="Study Kit Distribution: Pemasar"
              venue="Govt Higher Sec School, Pemasar"
              ben="140 students"
              spend="₹46,290"
              desc="Study kits distributed to support student learning."
            />
            <ActivityRow
              year="2025"
              date="Jul"
              title="MP Colony Distribution Drive"
              venue="MP Colony Govt School, Bikaner"
              desc="Books and learning material distributed as part of ongoing engagement with the school."
            />
            <ActivityRow
              year="2026"
              date="May – 3 Jun"
              title="Adhigam 2.0: Computer Learning Camp"
              venue="Udasar, near Bikaner"
              ben="35 students"
              desc="Free one-month computer course for 35 govt school students. Most were using a computer for the first time. The school had a computer lab set up with public money that sat unused for lack of a teacher — our team rented a hall, brought our own machines, and ran the program. All 35 students certified on completion."
              highlight
            />
          </div>
        </div>
      </Page>

      {/* ============== 03 — HIGHER-ED PARTNERSHIPS ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="06" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Colleges</SectionEyebrow>
          <SectionTitle>
            HIGHER-ED
            <br />
            PARTNERSHIPS
          </SectionTitle>

          <p className="mt-6 max-w-3xl text-sm md:text-base text-foreground/85 leading-relaxed">
            We partner with colleges to revive under-used facilities and run
            free, future-facing courses. Two case studies show the model:
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <CompactCase
              tag="Concluded"
              title="Maharani Sudarshan College for Women"
              when="Feb 2024 – Feb 2026 · 2-year MOU"
              body="Revived a 10-year-dormant computer lab. Transferred computers from our Bikaner centre and launched free Computer-based Skill Development and Stitching & Fashion Designing programs. ~210 students trained across multiple batches."
              photo="/images/gallery/maharani-mou-2024.jpg"
              alt="Maharani Sudarshan College MOU"
            />
            <CompactCase
              tag="Active"
              title="Engineering College Bikaner: AI Workshops"
              when="Since May 2026 · expanding"
              body="Partnership with the EICE Department under HOD Ms. Pooja Bhardwaj. Phase 1: AI in industry, agents vs chatbots, hallucination risks, Claude Code & Copilot, plus VLSI hardware design. Phase 2 hands-on project announced."
              photo="/images/gallery/ai-workshop-ecb-2026.jpg"
              alt="AI Workshop at ECB"
            />
          </div>

        </div>
      </Page>

      {/* ============== 04 — CSR PROJECTS (text) ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="07" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · CSR</SectionEyebrow>
          <SectionTitle>C.S.R. PROJECTS</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                Our entry into the world of corporate partnerships began with
                a pilot project with{' '}
                <strong>
                  Bikaner Electricity Supply Limited (Bk.E.S.L)
                </strong>
                , itself a result of contributions made during the second
                wave of COVID.
              </p>
              <p>
                After the pilot, the leadership team at Bk.E.S.L. entrusted
                us with five more projects across health, eye-care and school
                infrastructure. The continued momentum echoes a quote from
                C.S. Lewis: &ldquo;if you do one good deed, your reward
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
        <PageFooter n="08" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · CSR Numbers</SectionEyebrow>
          <SectionTitle>C.S.R. PROJECTS</SectionTitle>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
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
            Health camp was followed up with post-diagnostic consultations
            and medicine distributions.
          </p>
        </div>
      </Page>

      {/* ============== 05 — DISASTER RELIEF ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="09" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Emergency</SectionEyebrow>
          <SectionTitle>DISASTER RELIEF</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
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
                muscle was forged through the COVID response in Bikaner: six
                weeks, ₹6.58 lakh in spend, around 1,500 families served.
              </p>
              <p>
                We delivered <strong>6,000+ meal boxes</strong> to COVID
                patients at their doorstep,{' '}
                <strong>4,000+ ration kits</strong> to families whose
                livelihood was impacted, free home{' '}
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
        <PageFooter n="10" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Drive</SectionEyebrow>
          <SectionTitle>DIGITAL PAHEL</SectionTitle>

          <div className="grid md:grid-cols-[1fr_280px] gap-10 mt-10 items-start">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
              <p>
                <strong>Digital Pahel</strong> (pahel = &lsquo;initiative&rsquo;
                in Hindi) is our in-kind donation campaign. We collect
                laptops, desktops, tablets, smartphones, cameras, and sewing
                machines, refurbish them, and deploy them directly to
                students at our centres, partner colleges, and government
                schools we work with.
              </p>
              <p>
                <strong>None of the items donated will be sold.</strong>{' '}
                Every device is tested, cleaned, repaired if needed, and
                configured for our centre or a partner school. Sewing
                machines are serviced before deployment. We share back with
                the donor where each item ended up.
              </p>
              <p>
                The campaign accepts donations from Bikaner and across India.
                Donors from Delhi, Mumbai and Jaipur have participated in the
                past.
              </p>
            </div>
            <div className="rounded-md border border-border bg-muted/30 p-5">
              <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                What we accept
              </p>
              <ul className="text-xs space-y-1.5 text-foreground/80">
                <li>· Laptops (working or repairable)</li>
                <li>· Desktops &amp; monitors</li>
                <li>· Tablets · iPads</li>
                <li>· Android smartphones</li>
                <li>· Cameras · webcams</li>
                <li>· Sewing machines (Singer / Usha)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-muted">
              <Image
                src="/images/gallery/maharani-computer.jpg"
                alt="Refurbished devices in use at Maharani College computer lab"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-muted">
              <Image
                src="/images/gallery/batch-computer-bikaner.jpg"
                alt="Computer batch at the Bikaner centre using deployed hardware"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-3 text-xs text-muted-foreground italic">
            Where donated devices end up: at our centre and partner colleges.
          </p>
        </div>
      </Page>

      {/* ============== 07 — COMPLIANCE & TRANSPARENCY ============== */}
      <Page>
        <CornerAccents />
        <PageFooter n="11" />
        <div className="px-8 md:px-16 py-10 md:py-12">
          <SectionEyebrow>The Foundation · Governance</SectionEyebrow>
          <SectionTitle>
            COMPLIANCE &amp;
            <br />
            TRANSPARENCY
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 mt-10 text-sm md:text-base leading-relaxed text-foreground/85">
            <div className="space-y-4">
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
                <strong>Razorpay</strong> for fundraising campaigns. Active
                profiles maintained on government portals including{' '}
                <strong>NGO Darpan</strong> and <strong>Gyan Sankalp</strong>.
              </p>
            </div>
            <div className="space-y-4">
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
                added on request to inspect monthly expense records. We share
                the full P&amp;L breakup with active CSR partners and
                significant donors as part of standard reporting.
              </p>
            </div>
          </div>

        </div>
      </Page>

      {/* ============== THANK YOU ============== */}
      <Page fixed>
        <CornerAccents />
        <div className="absolute inset-0 px-10 md:px-16 py-14 md:py-20 flex flex-col">
          <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            With gratitude
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-5 mt-10 mb-auto">
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
                className="relative aspect-square rounded-md overflow-hidden border-2 border-primary/15 bg-muted"
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

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end mt-10">
            <div className="flex items-center gap-4">
              <Image
                src="/images/ebeb61_602706572e3e4b1f9343ca4d617325fb_mv2.png"
                alt="STARK Foundation logo"
                width={56}
                height={56}
                priority
              />
              <div className="text-xs space-y-0.5 text-foreground/75">
                <div className="font-semibold text-foreground text-sm">
                  STARK Foundation
                </div>
                <div>+91-6377730336</div>
                <div>hello@starkfoundation.in</div>
                <div>www.starkfoundation.in</div>
              </div>
            </div>
            <div className="text-5xl md:text-7xl font-semibold tracking-tight text-primary leading-[0.9] md:text-right">
              THANK
              <br />
              YOU
            </div>
          </div>
        </div>
      </Page>

      <div className="print:hidden bg-surface border-t border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-6 flex flex-wrap gap-3 justify-between items-center">
          <div className="flex items-center gap-2">
            <DownloadPdfButton />
            <PrintButton />
          </div>
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

function Page({
  children,
  fixed,
}: {
  children: React.ReactNode
  fixed?: boolean
}) {
  // `fixed` pages have explicit A4 height — used for cover & thank-you, where
  // the layout needs the children to fill the page. Content pages use
  // `min-height` so they grow with content.
  return (
    <section
      className={`relative w-full mx-auto max-w-[210mm] overflow-hidden bg-white shadow-sm print:shadow-none print:break-after-page ${
        fixed ? 'h-[297mm]' : 'min-h-[297mm]'
      }`}
    >
      {children}
    </section>
  )
}

function CornerAccents() {
  return (
    <>
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-28 h-28 md:w-36 md:h-36 pointer-events-none"
        viewBox="0 0 144 144"
      >
        <polygon points="0,0 50,0 14,40 0,40" fill="#ea580c" />
        <polygon points="58,0 110,0 60,60 14,60" fill="#1e3a8a" />
      </svg>
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36 pointer-events-none"
        viewBox="0 0 144 144"
      >
        <polygon points="144,144 94,144 130,104 144,104" fill="#ea580c" />
        <polygon points="86,144 34,144 84,84 130,84" fill="#1e3a8a" />
      </svg>
    </>
  )
}

function BigCoverChevrons() {
  // Larger overlapping diagonal chevrons inspired by the 2022 annual report
  // cover. Top-left stack tilts towards the title; bottom-right anchors the
  // opposite corner. Strong colours so they read over the tinted photo.
  return (
    <>
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-[42%] h-[42%] z-10 pointer-events-none"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMinYMin meet"
      >
        <polygon points="0,0 120,0 36,90 0,90" fill="#ea580c" />
        <polygon points="135,0 250,0 165,135 50,135" fill="#1e3a8a" />
        <polygon points="60,160 165,160 115,260 10,260" fill="#ea580c" opacity="0.9" />
      </svg>
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 w-[42%] h-[42%] z-10 pointer-events-none"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMaxYMax meet"
      >
        <polygon points="320,320 200,320 284,230 320,230" fill="#ea580c" />
        <polygon points="185,320 70,320 155,185 270,185" fill="#1e3a8a" />
        <polygon points="260,160 155,160 205,60 310,60" fill="#ea580c" opacity="0.9" />
      </svg>
    </>
  )
}

function CoverAccents() {
  // Larger accents for the cover, layered above the photo.
  return (
    <>
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none"
        viewBox="0 0 224 224"
      >
        <polygon points="0,0 80,0 24,60 0,60" fill="#ea580c" />
        <polygon points="92,0 170,0 90,90 14,90" fill="#1e3a8a" opacity="0.85" />
      </svg>
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none"
        viewBox="0 0 224 224"
      >
        <polygon points="224,224 144,224 200,164 224,164" fill="#ea580c" />
        <polygon
          points="132,224 54,224 134,134 210,134"
          fill="#1e3a8a"
          opacity="0.85"
        />
      </svg>
    </>
  )
}

function PageFooter({ n }: { n: string }) {
  return (
    <div className="absolute bottom-5 right-12 md:right-20 text-[10px] md:text-xs tracking-widest text-foreground/60 z-10">
      STARK FOUNDATION &nbsp;|&nbsp; PAGE {n}
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-foreground/60 mb-3 border-b border-foreground/15 pb-3 max-w-md">
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
    <div className="grid md:grid-cols-[260px_1fr] gap-0 rounded-md border border-border overflow-hidden bg-card">
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[180px] bg-muted">
        <Image
          src={photo}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 260px"
          className="object-cover"
        />
      </div>
      <div className="p-5 md:p-6">
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

function ActivityRow({
  year,
  date,
  title,
  venue,
  ben,
  spend,
  desc,
  highlight,
  upcoming,
}: {
  year: string
  date: string
  title: string
  venue: string
  ben?: string
  spend?: string
  desc: string
  highlight?: boolean
  upcoming?: boolean
}) {
  return (
    <div
      className={`grid grid-cols-[60px_1fr] gap-4 md:gap-6 border-l-4 pl-4 md:pl-5 py-3 ${
        highlight
          ? 'border-accent bg-accent/5'
          : upcoming
            ? 'border-foreground/30 bg-muted/30'
            : 'border-primary/40'
      } rounded-r-md print:break-inside-avoid`}
    >
      <div className="text-base md:text-lg font-semibold text-primary leading-tight tabular-nums">
        {year}
        <div className="text-[10px] text-muted-foreground font-normal mt-0.5">
          {date}
        </div>
      </div>
      <div>
        <div className="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-1">
          <div className="text-sm md:text-base font-semibold leading-tight">
            {title}
            {upcoming && (
              <span className="ml-2 text-[10px] uppercase tracking-wider font-semibold bg-foreground/10 text-foreground/70 px-1.5 py-0.5 rounded">
                upcoming
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground flex flex-wrap gap-x-3">
            {ben && <span>{ben}</span>}
            {spend && <span>· {spend}</span>}
          </div>
        </div>
        <div className="text-[11px] text-muted-foreground mt-0.5">{venue}</div>
        <p className="text-xs md:text-sm text-foreground/80 mt-2 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

function CompactCase({
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
    <div className="rounded-md border border-border overflow-hidden bg-card flex flex-col">
      <div className="relative aspect-[16/9] bg-muted">
        <Image
          src={photo}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 md:p-5">
        <div className="inline-flex text-[10px] uppercase tracking-wider font-semibold bg-accent/15 text-accent px-2 py-0.5 rounded-full mb-2">
          {tag}
        </div>
        <div className="text-base md:text-lg font-semibold leading-tight">
          {title}
        </div>
        <div className="text-xs text-muted-foreground mt-1 mb-2">{when}</div>
        <p className="text-xs md:text-sm text-foreground/85 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  )
}

function StatBand({ items }: { items: { v: string; l: string }[] }) {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-y-2 border-foreground/85 py-5 print:break-inside-avoid">
      {items.map((it) => (
        <div key={it.l}>
          <div className="text-2xl md:text-3xl font-semibold text-primary leading-tight tabular-nums">
            {it.v}
          </div>
          <div className="text-xs text-muted-foreground mt-1 leading-snug">
            {it.l}
          </div>
        </div>
      ))}
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
      <div className="bg-foreground/85 text-white px-4 py-2.5 flex items-center gap-3">
        <div className="text-xs font-semibold rounded bg-white/20 px-2 py-0.5">
          {n}
        </div>
        <div className="text-sm md:text-base font-semibold leading-tight">
          {title}
          <div className="text-xs text-white/75 font-normal">{subtitle}</div>
        </div>
      </div>
      <div
        className={`p-5 grid gap-4 ${
          wide ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4' : 'grid-cols-2'
        }`}
      >
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
