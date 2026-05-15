'use client'

import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/xnjwkyqb'

const courses = [
  'Basic Computer Course / बेसिक कंप्यूटर कोर्स (3 months)',
  'Stitching & Advanced Dress Designing / सिलाई एवं एडवांस ड्रेस डिज़ाइनिंग (3 or 6 months)',
  'Tally & Basic Computer Course / टैली एवं बेसिक कंप्यूटर कोर्स (3 months)',
]

const sources = [
  { en: 'Facebook', hi: 'फेसबुक' },
  { en: 'Instagram', hi: 'इंस्टाग्राम' },
  { en: 'WhatsApp', hi: 'व्हाट्सप्प' },
  { en: 'Friend / family', hi: 'दोस्त / परिवार' },
  { en: 'Other', hi: 'अन्य' },
]

export function StudentApplicationForm() {
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
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 space-y-4"
    >
      <input
        type="hidden"
        name="_subject"
        value="New student application: Vocational Training Program"
      />

      <BilingualField label="Full name" hindi="पूरा नाम" name="name" required />
      <BilingualField label="Father's name" hindi="पिता का नाम" name="fathers_name" required />
      <BilingualField label="Date of birth" hindi="जन्म तिथि" name="dob" type="date" required />
      <BilingualField
        label="Mobile number"
        hindi="मोबाइल नंबर"
        name="mobile"
        type="tel"
        required
        pattern="[0-9]{10}"
      />
      <BilingualField label="Address" hindi="पता" name="address" required textarea />

      <div>
        <label htmlFor="course" className="block text-sm font-medium mb-1.5">
          Select the course <span className="text-muted-foreground">/ कोर्स का चयन करें</span>{' '}
          <span className="text-destructive">*</span>
        </label>
        <select
          id="course"
          name="course"
          required
          defaultValue=""
          className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
        >
          <option value="" disabled>
            Select... / चुनें...
          </option>
          {courses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <BilingualField
        label="Annual family income (₹)"
        hindi="वार्षिक पारिवारिक आय (₹)"
        name="annual_income"
        type="text"
      />

      <BilingualField
        label="Any other course you'd be interested in?"
        hindi="यदि किसी अन्य कोर्स में रुचि हो तो लिखें"
        name="other_course_interest"
        textarea
      />

      <div>
        <div className="block text-sm font-medium mb-2">
          How did you hear about us?{' '}
          <span className="text-muted-foreground">/ आपको इस पहल के बारे में कैसे पता चला?</span>
        </div>
        <div className="space-y-2">
          {sources.map((s) => (
            <label key={s.en} className="flex items-center gap-2 text-sm">
              <input type="radio" name="source" value={s.en} className="accent-accent" />
              <span>
                {s.en} <span className="text-muted-foreground">/ {s.hi}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending'
          ? 'Submitting...'
          : status === 'sent'
            ? 'Submitted ✓'
            : 'Submit application / आवेदन भेजें'}
      </button>

      {status === 'sent' && (
        <p className="text-sm text-emerald-700">
          Thanks. We&apos;ve received your application. Our team will contact you on the mobile number you provided. /
          धन्यवाद। आपका आवेदन प्राप्त हो गया है, हमारी टीम जल्द ही आपसे संपर्क करेगी।
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-destructive">
          Something went wrong. Please WhatsApp / call <strong>+91 70142 37837</strong> or email{' '}
          <a className="underline" href="mailto:hello@starkfoundation.in">
            hello@starkfoundation.in
          </a>{' '}
          directly.
        </p>
      )}
    </form>
  )
}

function BilingualField({
  label,
  hindi,
  name,
  type = 'text',
  required,
  textarea,
  pattern,
}: {
  label: string
  hindi: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
  pattern?: string
}) {
  const id = name
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label} <span className="text-muted-foreground">/ {hindi}</span>
        {required && <span className="text-destructive"> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={3}
          className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          pattern={pattern}
          className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
        />
      )}
    </div>
  )
}
