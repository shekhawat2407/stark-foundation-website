import Link from 'next/link'
import { PageHeader } from '@/components/site/page-header'

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved · Partner"
        title="Partner with us"
        description="We work with CSR teams, NGOs across Rajasthan, and individuals running self-designed initiatives."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-lg font-semibold mb-2">CSR partnerships</div>
          <p className="text-sm text-muted-foreground">
            For corporate teams with a CSR mandate. We scope and deliver
            focused community drives and report outcomes back through a
            documented impact report.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-lg font-semibold mb-2">NGO partnerships</div>
          <p className="text-sm text-muted-foreground">
            We collaborate with NGOs providing training and education across
            the state. If your organisation works in the same space,
            we&apos;d love to talk.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="text-lg font-semibold mb-2">Individual projects</div>
          <p className="text-sm text-muted-foreground">
            We encourage individuals to design their own initiatives. Define
            your area of interest with a well-drafted purpose statement and
            reach out.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 text-center">
          <h2 className="text-2xl font-semibold mb-3">Get in touch</h2>
          <p className="text-muted-foreground mb-6">
            Send your collaboration proposal to our team.
          </p>
          <Link
            href="mailto:hello@starkfoundation.in"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
          >
            hello@starkfoundation.in
          </Link>
        </div>
      </section>
    </>
  )
}
