'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/site/page-header'
import { Mail, Phone, MapPin } from 'lucide-react'

const ENDPOINT = 'https://formspree.io/f/mzdolbvz'

export default function ContactPage() {
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
        eyebrow="Contact"
        title="Get in touch"
        description="Reach us by phone, email, or send a message through the form. We typically respond within 2-3 days."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <ContactRow icon={Phone} label="Phone" value="+91-6377730336" href="tel:+916377730336" />
          <ContactRow icon={Mail} label="Email" value="hello@starkfoundation.in" href="mailto:hello@starkfoundation.in" />
          <ContactRow icon={MapPin} label="Address" value="Bikaner, Rajasthan, India" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border bg-card p-6 space-y-4"
        >
          <div className="text-lg font-semibold">Send us a message</div>
          <input type="hidden" name="_subject" value="New contact form submission - starkfoundation.in" />
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className="text-sm text-emerald-700">
              Thanks. We&apos;ve received your message and will reply soon.
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

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
      <div className="rounded-md bg-primary/10 p-2 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium mt-0.5">{value}</div>
      </div>
    </div>
  )
  return href ? <a href={href}>{content}</a> : content
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
