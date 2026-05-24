import Link from 'next/link'
import { PageHeader } from '@/components/site/page-header'
import { Heart } from 'lucide-react'

type Bucket = 'vocational-training' | 'bachpan'

const bucketLabel: Record<Bucket, string> = {
  'vocational-training': 'Vocational Training',
  bachpan: 'Bachpan',
}

const tiers: { amount: string; title: string; desc: string; bucket?: Bucket }[] = [
  {
    amount: '₹5,000',
    title: 'Sponsor a Tally student',
    desc: 'Covers trainer fees, certification, and infrastructure.',
    bucket: 'vocational-training',
  },
  {
    amount: '₹2,000',
    title: 'Sponsor a typing student',
    desc: 'Covers trainer fees and infrastructure.',
    bucket: 'vocational-training',
  },
  {
    amount: '₹1,000',
    title: 'Sponsor a stitching student',
    desc: 'Covers trainer fees and infrastructure.',
    bucket: 'vocational-training',
  },
  {
    amount: '₹8,000',
    title: 'Annual education for one child',
    desc: 'Transportation, materials, and uniforms for a year.',
    bucket: 'bachpan',
  },
  {
    amount: '₹3,000',
    title: 'Meals for 100 children',
    desc: '₹30 per plate × 100 children.',
    bucket: 'bachpan',
  },
  {
    amount: 'Custom',
    title: 'Any amount you choose',
    desc: 'We accept any contribution towards our programs.',
  },
]

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved · Donate"
        title="Fund the next student"
        description="Your donation directly funds free courses, learning materials, meals, and emergency relief in Bikaner."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.title}
              className="rounded-lg border border-border bg-card p-6 flex flex-col"
            >
              <div className="text-3xl font-semibold text-primary">{t.amount}</div>
              <div className="mt-2 text-base font-semibold">{t.title}</div>
              <p className="mt-1 text-sm text-muted-foreground flex-1">{t.desc}</p>
              {t.bucket && (
                <Link
                  href={`/${t.bucket}`}
                  className="mt-3 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent hover:bg-accent/20 w-fit"
                >
                  Funds: {bucketLabel[t.bucket]}
                </Link>
              )}
              <a
                href="https://pages.razorpay.com/starkfoundationdonatenow"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                <Heart className="h-4 w-4" /> Contribute
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-6 text-sm text-muted-foreground">
          Prefer to talk before donating? Email{' '}
          <a className="underline text-foreground" href="mailto:hello@starkfoundation.in">
            hello@starkfoundation.in
          </a>{' '}
          or call{' '}
          <a className="underline text-foreground" href="tel:+916377730336">
            +91-6377730336
          </a>
          .
        </div>
      </section>
    </>
  )
}
