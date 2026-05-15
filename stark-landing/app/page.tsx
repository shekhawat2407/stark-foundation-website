import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Sparkles } from 'lucide-react'
import { StatBand } from '@/components/site/stat-band'
import {
  programs,
  activeNow,
  skillPartners,
  csrPartners,
  ngoCollaborators,
} from '@/lib/programs'

export default function Home() {
  return (
    <>
      <section className="relative min-h-[560px] md:min-h-[680px] flex items-center text-white overflow-hidden">
        <Image
          src="/images/gallery/adhigam-2023.jpg"
          alt="Hundreds of govt school students gathered for the Adhigam summer learning camp organised by STARK Foundation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/20" />
        <div className="relative mx-auto max-w-7xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-block rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium mb-5 border border-white/25">
              Section-8 Non-Profit · Bikaner, Rajasthan · Since 2019
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05]">
              Skills.
              <br />
              Schools.
              <br />
              Communities.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-xl">
              Working since 2019 through centre-based vocational training,
              school workshops, college partnerships, CSR camps, and emergency
              relief.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/donate-now"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 shadow-lg"
              >
                Donate now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/vocational-training"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-white/20"
              >
                Explore programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/5 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-6 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Running this month
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {activeNow.map((a) => (
              <Link
                key={a.id}
                href={`/${a.bucket}`}
                className="group rounded-lg border border-border bg-card p-5 hover:border-accent/40 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-base font-semibold leading-snug">
                    {a.title}
                  </div>
                  <span className="shrink-0 rounded-full bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 uppercase tracking-wider">
                    {a.status}
                  </span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {a.period}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {a.description}
                </p>
                <div className="mt-3 text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  See program <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we do — featured + 4 mosaic */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                What we do
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight">
                Five ways we show up.
              </h2>
            </div>
            <Link
              href="/about-us"
              className="text-sm text-primary hover:underline"
            >
              Read our story →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {programs.map((p, idx) => {
              const isFeatured = idx === 0
              return (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className={`group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-md transition flex flex-col ${
                    isFeatured ? 'md:col-span-2 md:row-span-1' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-muted ${
                      isFeatured ? 'aspect-[16/9]' : 'aspect-square'
                    }`}
                  >
                    <Image
                      src={p.cardPhoto}
                      alt={p.cardPhotoAlt}
                      fill
                      sizes={
                        isFeatured
                          ? '(max-width: 768px) 100vw, 66vw'
                          : '(max-width: 768px) 100vw, 33vw'
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-md">
                        ★ Flagship
                      </div>
                    )}
                  </div>
                  <div
                    className={`flex-1 flex flex-col ${
                      isFeatured ? 'p-6 md:p-8' : 'p-5'
                    }`}
                  >
                    <h3
                      className={`font-semibold ${
                        isFeatured
                          ? 'text-2xl md:text-3xl'
                          : 'text-lg'
                      }`}
                    >
                      {p.label}
                    </h3>
                    <p
                      className={`mt-2 text-muted-foreground flex-1 ${
                        isFeatured
                          ? 'text-base md:text-lg leading-relaxed'
                          : 'text-sm line-clamp-3'
                      }`}
                    >
                      {p.intro}
                    </p>
                    <div className="mt-4 text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* From the field — recent activity, 3 photos with dates */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                From the field
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Recently, on the ground.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: '/images/gallery/ai-workshop-ecb-2026.jpg',
                date: 'May 13, 2026',
                caption:
                  'AI Workshop (Phase 1): introductory session at Engineering College Bikaner on AI agents, hallucinations, and VLSI hardware.',
                href: '/higher-ed-partnerships',
              },
              {
                src: '/images/gallery/water-cooler-bhim-vridha-2026.jpg',
                date: 'May 8, 2026',
                caption:
                  'Water Cooler Donation: installed at Bhim Vridha Ashram, Rani Bazar — safe cold drinking water through the Rajasthan summer.',
                href: '/community-camps',
              },
              {
                src: '/images/gallery/recent-stitching-2026.jpg',
                date: 'March 2026',
                caption:
                  'Stitching Batch: 2nd cohort of 2025–26 mid-session at the Bikaner centre.',
                href: '/vocational-training',
              },
            ].map((item) => (
              <Link
                key={item.src}
                href={item.href}
                className="group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-md transition flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {item.date}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatBand
        eyebrow="Impact on the ground"
        heading="Our work, in numbers."
        stats={[
          { v: '470+', l: 'Students trained vocational' },
          { v: '25+', l: 'Training batches run' },
          { v: '4,200+', l: 'Served via camps & drives' },
          { v: '6+ yrs', l: 'Working since 2019' },
        ]}
        variant="primary"
      />

      {/* Featured story — split layout */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 md:items-center">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-lg overflow-hidden bg-muted self-stretch">
            <Image
              src="/images/gallery/frocks-childrens-day-2021.jpg"
              alt="Slum kids holding up colourful frocks stitched by women in the STARK Foundation stitching program, on Children's Day 2021"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Featured Story · November 2021
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Frocks stitched overnight, for 150 kids the next morning.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              150 kids from 5 slum areas, brought together for sports and
              cultural competitions on Children's Day. In collaboration with
              Robin Hood Army, Youth Against Illiteracy and Vrikshit
              Foundation. Sports shoes, jerseys, bags, education
              material, food.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              The girl participants received frocks stitched, that same week,
              by women in our stitching &amp; fashion designing program. One
              program looping back into another. That's what Bachpan is.
            </p>
            <Link
              href="/bachpan"
              className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Read more in Bachpan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 pt-8 pb-12 md:pt-10 md:pb-16">
          <PartnerRow label="Skill partners" items={skillPartners} />
          <div className="mt-10 md:mt-12">
            <PartnerRow label="CSR partners" items={csrPartners} />
          </div>
          <div className="mt-10 md:mt-12">
            <PartnerRow label="NGO collaborators" items={ngoCollaborators} />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Help us reach more students this year.
            </h2>
            <p className="mt-3 text-white/90 max-w-xl">
              Donate, volunteer your time, or partner with us on a project.
              Every rupee and every hour is accountable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/donate-now"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Donate now
            </Link>
            <Link
              href="/volunteer-your-time"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
            >
              <Users className="h-4 w-4" /> Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function PartnerRow({
  label,
  items,
}: {
  label: string
  items: { name: string; logo: string }[]
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center mb-8">
        {label}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {items.map((p) => (
          <div
            key={p.name}
            className="relative transition hover:scale-105"
            style={{ width: '200px', height: '150px' }}
          >
            <Image
              src={p.logo}
              alt={p.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
