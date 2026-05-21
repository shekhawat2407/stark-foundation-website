import {
  ArrowRight,
  Laptop,
  Smartphone,
  Tablet,
  Monitor,
  Camera,
  Scissors,
  ShieldCheck,
  Truck,
  Wrench,
  GraduationCap,
} from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { DeviceDonationForm } from './DeviceDonationForm'

const accepted = [
  {
    icon: Laptop,
    label: 'Laptops',
    note: 'Working or repairable. Any OS.',
  },
  {
    icon: Monitor,
    label: 'Desktop PCs · Monitors',
    note: 'Complete sets or individual parts.',
  },
  {
    icon: Tablet,
    label: 'Tablets · iPads',
    note: 'For digital literacy at govt schools.',
  },
  {
    icon: Smartphone,
    label: 'Smartphones',
    note: 'Android phones for school workshops.',
  },
  {
    icon: Camera,
    label: 'Cameras · Webcams',
    note: 'Documentation, online classes.',
  },
  {
    icon: Scissors,
    label: 'Sewing machines',
    note: 'Working or repairable. Singer / Usha / others.',
  },
]

const steps = [
  {
    icon: Truck,
    title: '1 · Reach out',
    desc: 'Email or call us with what you want to donate. We confirm what we can use, then arrange pickup or drop-off.',
  },
  {
    icon: Wrench,
    title: '2 · We refurbish',
    desc: 'Devices are tested, cleaned, repaired if needed, and configured for our centre or partner schools. Sewing machines get serviced.',
  },
  {
    icon: GraduationCap,
    title: '3 · A student learns on it',
    desc: 'Every device goes directly into a learner’s hands. At our centre, at a college partner, at a govt school, or at the Pundalsar centre.',
  },
]

export default function DigitalDaan() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved · Campaign"
        title="Digital Pahel: give your old device a second life as a student’s first."
        description="STARK Foundation is collecting laptops, desktops, smartphones, sewing machines and books to put directly into our vocational and school programs."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#pledge"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
          >
            I want to donate <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+917014237837"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold hover:bg-muted"
          >
            +91-7014237837
          </a>
        </div>
      </PageHeader>

      {/* Trust statement — front and centre, before anything else */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-accent shrink-0" />
            <div className="text-base md:text-lg font-semibold">
              None of the items donated will be sold.
            </div>
          </div>
          <p className="mt-2 text-sm md:text-base text-white/85 md:pl-9">
            Every donation goes directly into our centre, our college
            partnerships, or a govt school program, and we share back where
            each donation ended up.
          </p>
        </div>
      </section>

      {/* What we accept */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          What we accept
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 max-w-3xl">
          Working, partly working, or repairable. We take it all.
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-10">
          If it can run a typing lesson, a Tally tutorial, a stitching class or a science workshop, we’ll find a home for it.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {accepted.map(({ icon: Icon, label, note }) => (
            <div
              key={label}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="inline-flex rounded-md bg-primary/10 p-2.5 text-primary mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold">{label}</div>
              <p className="mt-1 text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            How it works
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-3xl">
            From your shelf to a student’s desk. Three steps.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="inline-flex rounded-md bg-accent/10 p-2.5 text-accent mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-base font-semibold mb-1">{title}</div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — short */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Common questions
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Before you donate.
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Where do I drop off the items?',
                a: 'Our centre: Behind Sardar Hall, Mehron Ka Mohalla, Bikaner. For larger donations (multiple devices or sewing machines), we can pick up anywhere in Bikaner city, or schedule something outside Bikaner.',
              },
              {
                q: 'My laptop is 8 years old / has issues. Worth donating?',
                a: 'Yes. We refurbish before deployment. A working keyboard and screen are usually enough. A device that runs a browser can teach typing, MS Office and basic AI tools.',
              },
              {
                q: 'What happens to data on my device?',
                a: 'We securely wipe every storage drive before refurbishment. You can also wipe it yourself and bring it; we’ll confirm before deploying.',
              },
              {
                q: 'Do I get a tax receipt?',
                a: 'STARK Foundation is registered under Section 12A and 80G of the Income Tax Act. For in-kind donations like devices, sewing machines and books, we issue an acknowledgement letter on STARK Foundation letterhead listing the items received and their assessed value. Under current tax rules the 80G deduction applies to monetary donations; for a tax-deductible cash donation, see Donate Now.',
              },
              {
                q: 'I’m outside Bikaner. Can I still donate?',
                a: 'Yes. Email us. We can advise on shipping or arrange a courier pickup. Donors from Delhi, Mumbai and Jaipur have already participated.',
              },
            ].map((f) => (
              <div key={f.q} className="border-b border-border pb-6 last:border-0">
                <div className="text-base md:text-lg font-semibold">{f.q}</div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section id="pledge" className="bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Pledge a donation
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Tell us what you&apos;d like to donate.
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Fill in the form and we&apos;ll be in touch to confirm the fit
              and arrange pickup or drop-off.
            </p>
            <p className="text-sm text-muted-foreground max-w-md mt-3">
              Prefer to reach out directly? Email{' '}
              <a className="underline" href="mailto:hello@starkfoundation.in">
                hello@starkfoundation.in
              </a>{' '}
              or WhatsApp <strong>+91 70142 37837</strong>.
            </p>
          </div>
          <DeviceDonationForm />
        </div>
      </section>
    </>
  )
}
