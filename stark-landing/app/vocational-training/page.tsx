import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ProgramPageHero } from '@/components/site/program-page-hero'
import { ActivityCard } from '@/components/site/activity-card'
import { StudentApplicationForm } from './StudentApplicationForm'
import {
  centres,
  skillPartners,
  activitiesForBucket,
  programForBucket,
} from '@/lib/programs'

export default function VocationalTraining() {
  const program = programForBucket('vocational-training')
  const activities = activitiesForBucket('vocational-training')

  return (
    <>
      <ProgramPageHero
        heroImage="/images/12a/image32.jpg"
        imageAlt="The computer training room at the STARK Foundation Bikaner centre"
        eyebrow="Programs"
        title="250+ trained. Free. With placements."
        tagline={program.intro}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          Our centres
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
          Where we work, what we teach.
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {centres.map((c) => (
            <div
              key={c.name}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                {c.name === 'Bikaner' ? 'Centre 1' : 'Centre 2'}
              </div>
              <div className="text-xl font-semibold">{c.name}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {c.location}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>
                  <span className="font-medium text-foreground/80">Opened:</span>{' '}
                  {c.opened}
                </span>
                <span>
                  <span className="font-medium text-foreground/80">Trained:</span>{' '}
                  {c.trained}
                </span>
                {c.runBy && (
                  <span>
                    <span className="font-medium text-foreground/80">Run by:</span>{' '}
                    {c.runBy}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="text-xs font-semibold text-foreground/80 mb-2">
                  Courses
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.tracks.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 border-b border-border">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center mb-6">
          Skill partners
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {skillPartners.map((p) => (
            <div
              key={p.name}
              className="relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              style={{ width: '180px', height: '100px' }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {activities.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Activities & milestones
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl">
            Specific work on record.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <ActivityCard key={a.id} activity={a} />
            ))}
          </div>
        </section>
      )}

      <section id="apply" className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Apply / आवेदन करें
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Register for a course.
              <span className="block text-base text-muted-foreground mt-1 font-normal">
                कोर्स के लिए पंजीकरण करें।
              </span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              All courses are free for selected candidates and include a STARK Foundation certificate plus placement support.
              Our team will call you on the mobile number you provide.
            </p>
            <p className="text-sm text-muted-foreground max-w-md mt-3">
              सभी कोर्स चयनित उम्मीदवारों के लिए नि:शुल्क हैं। प्रमाणपत्र एवं प्लेसमेंट सहायता दी जाती है।
              हमारी टीम आपके द्वारा दिए गए मोबाइल नंबर पर संपर्क करेगी।
            </p>
            <div className="mt-6 text-sm">
              <div className="font-medium">Questions? / कोई प्रश्न?</div>
              <div className="text-muted-foreground mt-1">
                Call / WhatsApp <strong>+91 70142 37837</strong>
                <br />
                Email{' '}
                <a className="underline" href="mailto:hello@starkfoundation.in">
                  hello@starkfoundation.in
                </a>
              </div>
            </div>
          </div>
          <StudentApplicationForm />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Sponsor a student.
            </h2>
            <p className="mt-3 text-white/90 max-w-xl">
              A small contribution covers a full course for one student,
              including trainer fee, certification, and centre infrastructure.
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
