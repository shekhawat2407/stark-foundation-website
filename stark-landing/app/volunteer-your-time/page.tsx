'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/site/page-header'

const ENDPOINT = 'https://formspree.io/f/mdabrajn'

const areas = [
  'Social Media & Content Creation',
  'Public Relations & Collaboration',
  'Fundraising & Grants',
  'Strategy & Vision',
  'Operations',
  'Other',
]

export default function VolunteerPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Get Involved · Volunteer"
        title="Volunteer your time"
        description="We welcome self-motivated individuals who are passionate enough to make a difference. Internships include a monthly stipend; full-time roles are paid monthly."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Where you can contribute</h2>
          <ul className="space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a} className="rounded-md border border-border bg-card px-4 py-3">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border bg-card p-6 space-y-4"
        >
          <div className="text-lg font-semibold">Application form</div>
          <input type="hidden" name="_subject" value="New volunteer application - starkfoundation.in" />
          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
          <Field label="Date of birth" name="dob" type="date" required />
          <div>
            <label htmlFor="area" className="block text-sm font-medium mb-1.5">
              Preferred area <span className="text-destructive">*</span>
            </label>
            <select
              id="area"
              name="area"
              required
              defaultValue=""
              className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
            >
              <option value="" disabled>
                Select...
              </option>
              {areas.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="about" className="block text-sm font-medium mb-1.5">
              Tell us about yourself
            </label>
            <textarea
              id="about"
              name="about"
              rows={4}
              className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Submitting...' : status === 'sent' ? 'Submitted ✓' : 'Submit application'}
          </button>
          {status === 'sent' && (
            <p className="text-sm text-emerald-700">
              Thanks. We&apos;ve received your application and will be in
              touch.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-destructive">
              Something went wrong. Please email{' '}
              <a className="underline" href="mailto:hello@starkfoundation.in">
                hello@starkfoundation.in
              </a>{' '}
              directly.
            </p>
          )}
        </form>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
      />
    </div>
  )
}
