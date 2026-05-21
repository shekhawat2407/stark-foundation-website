'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const ENDPOINT = 'https://formspree.io/f/xgoqabpv'

const DEVICE_TYPES = [
  'Laptop',
  'Desktop / PC',
  'Monitor',
  'Tablet / iPad',
  'Smartphone',
  'Camera / Webcam',
  'Sewing machine',
  'Other',
]

const CONDITIONS = ['Working', 'Partly working', 'Repairable / Not working']

type Device = { type: string; make: string; year: string; condition: string }

const blank = (): Device => ({ type: '', make: '', year: '', condition: '' })

export function DeviceDonationForm() {
  const [devices, setDevices] = useState<Device[]>([blank()])
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function updateDevice(i: number, patch: Partial<Device>) {
    setDevices((arr) => arr.map((d, idx) => (idx === i ? { ...d, ...patch } : d)))
  }
  function addDevice() {
    setDevices((arr) => [...arr, blank()])
  }
  function removeDevice(i: number) {
    setDevices((arr) => (arr.length > 1 ? arr.filter((_, idx) => idx !== i) : arr))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (devices.every((d) => !d.type)) return
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    // Encode the devices array as a single human-readable field for the
    // notification email, plus a JSON field for structured access.
    const validDevices = devices.filter((d) => d.type)
    const summary = validDevices
      .map(
        (d, i) =>
          `${i + 1}. ${d.type}${d.make ? ` — ${d.make}` : ''}${
            d.year ? ` (${d.year})` : ''
          }${d.condition ? ` · ${d.condition}` : ''}`,
      )
      .join('\n')
    data.set('devices_summary', summary)
    data.set('devices_json', JSON.stringify(validDevices))

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setDevices([blank()])
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
      className="rounded-lg border border-border bg-card p-6 space-y-5"
    >
      <input
        type="hidden"
        name="_subject"
        value="New device donation pledge — Digital Pahel"
      />

      <div className="text-lg font-semibold">Pledge your donation</div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required pattern="[0-9 +()-]{10,15}" />
        <Field label="City" name="city" required placeholder="Bikaner, Mumbai, ..." />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1.5">
          Full address <span className="text-destructive">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={2}
          className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
          placeholder="Pickup or drop-off address with landmark"
        />
      </div>

      <div>
        <div className="block text-sm font-medium mb-2">
          Pickup or drop-off? <span className="text-destructive">*</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {['Please pick up from my address', 'I will drop off at the centre', 'Either works'].map(
            (opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="logistics" value={opt} required className="accent-accent" />
                <span>{opt}</span>
              </label>
            ),
          )}
        </div>
      </div>

      {/* Devices */}
      <div className="pt-2 border-t border-border">
        <div className="flex items-baseline justify-between mb-3">
          <div className="text-sm font-semibold">Devices to donate</div>
          <div className="text-xs text-muted-foreground">
            {devices.filter((d) => d.type).length} added
          </div>
        </div>
        <div className="space-y-3">
          {devices.map((d, i) => (
            <div
              key={i}
              className="rounded-md border border-border bg-muted/30 p-3 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-foreground/70">
                  Device {i + 1}
                </div>
                {devices.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDevice(i)}
                    className="text-xs text-muted-foreground hover:text-destructive inline-flex items-center gap-1"
                  >
                    <X className="h-3.5 w-3.5" /> Remove
                  </button>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <SelectField
                  label="Type"
                  value={d.type}
                  options={DEVICE_TYPES}
                  required
                  onChange={(v) => updateDevice(i, { type: v })}
                />
                <TextField
                  label="Make / Brand"
                  placeholder="Dell, Lenovo, Singer, ..."
                  value={d.make}
                  onChange={(v) => updateDevice(i, { make: v })}
                />
                <TextField
                  label="Purchase year"
                  placeholder="e.g. 2018"
                  value={d.year}
                  onChange={(v) => updateDevice(i, { year: v.replace(/[^0-9]/g, '').slice(0, 4) })}
                />
                <SelectField
                  label="Condition"
                  value={d.condition}
                  options={CONDITIONS}
                  onChange={(v) => updateDevice(i, { condition: v })}
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addDevice}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          <Plus className="h-4 w-4" /> Add another device
        </button>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-1.5">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
          placeholder="Accessories included (chargers, mouse, ...), preferred pickup time, anything special."
        />
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
            : 'Submit donation pledge'}
      </button>

      {status === 'sent' && (
        <p className="text-sm text-emerald-700">
          Thank you. We&apos;ve received your pledge and will respond within
          48 hours to confirm next steps.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-destructive">
          Something went wrong. Please email{' '}
          <a className="underline" href="mailto:hello@starkfoundation.in">
            hello@starkfoundation.in
          </a>{' '}
          or WhatsApp +91 70142 37837 directly.
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  pattern,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  pattern?: string
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
        placeholder={placeholder}
        pattern={pattern}
        className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
      />
    </div>
  )
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1 text-foreground/75">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      />
    </div>
  )
}

function SelectField({
  label,
  value,
  options,
  required,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  required?: boolean
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1 text-foreground/75">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <select
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
