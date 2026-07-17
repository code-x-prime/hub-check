'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'
import { contactFormSchema } from '@/lib/validation'

const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'http://localhost:3001'

type FormErrors = Partial<Record<keyof typeof form, string>>

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Warehouse Audit Services',
    message: '',
    consent: false,
    website: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({})

  const validateField = (name: string, value: string | boolean) => {
    try {
      const result = contactFormSchema.shape[name as keyof typeof contactFormSchema.shape]?.safeParse(value)
      if (result && !result.success) {
        setFieldErrors((prev) => ({ ...prev, [name]: result.error.issues[0]?.message }))
      } else {
        setFieldErrors((prev) => {
          const next = { ...prev }
          delete next[name as keyof typeof next]
          return next
        })
      }
    } catch {
      // Field not in schema, skip
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setForm((prev) => ({ ...prev, consent: checked }))
    if (!checked) {
      setFieldErrors((prev) => ({ ...prev, consent: 'You must agree to the Privacy Policy' }))
    } else {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next.consent
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Honeypot check
    if (form.website) {
      return
    }

    // Validate entire form
    const result = contactFormSchema.safeParse(form)
    if (!result.success) {
      const errors: FormErrors = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string
        errors[field as keyof typeof form] = issue.message
      })
      setFieldErrors(errors)
      return
    }

    setSubmitting(true)
    setSuccess(false)

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        subject: `[Hubcheck] Inquiry for ${form.service}`,
        message: `Organization: ${form.organization || 'Not Specified'}\nService: ${form.service}\nSource Site: Hubcheck\n\nMessage:\n${form.message.trim()}`
      }

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        setForm({ name: '', organization: '', email: '', phone: '', service: 'Warehouse Audit Services', message: '', consent: false, website: '' })
      } else {
        setError(data.error || 'Failed to send message. Please try again later.')
      }
    } catch {
      setError('Unable to connect. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-orange-100/40 via-blue-50/50 to-[#fdfbf7]">
        <div className="absolute inset-0 -z-30 bg-gradient-to-br from-orange-100/20 via-blue-50/30 to-[#fdfbf7] pointer-events-none" />
        <HeroCanvas />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200/50 bg-orange-50/50 text-sm font-semibold uppercase tracking-wider text-[#ff6b00]">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Contact <span className="text-[#001c55]">Hubcheck</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans">
              Have questions about our warehouse audit, physical verification, stock reconciliation, or collateral monitoring services? Contact our Noida office to discuss your operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="relative py-12 md:py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left Column (Info Details) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Office
              </h2>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
                Connect with our stock validation and warehouse audit experts. We assist banks, NBFCs, and financial institutions across multiple locations from our corporate office.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Address</h4>
                    <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
                      C-83, 1st Floor, Sector-2,<br />
                      Noida, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Contact Number</h4>
                    <a href="tel:+919311463901" className="text-sm text-[#ff6b00] hover:underline font-semibold">
                      +91-9311463901
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Email Address</h4>
                    <a href="mailto:Support@brightoindia.com" className="text-sm text-[#ff6b00] hover:underline font-semibold font-sans">
                      Support@brightoindia.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Working Hours</h4>
                    <p className="text-sm text-gray-500 font-sans font-light">
                      Mon - Sat: 9:30 AM to 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="lg:col-span-7 bg-[#f5f2e6]/50 border border-[#e8e4d5] rounded-lg p-8 shadow-xs text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Fill in the details below, and our warehouse diligence team will contact you within 24 business hours.
              </p>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Inquiry Submitted Successfully!</h4>
                  <p className="text-sm text-emerald-700 font-sans">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 text-xs font-bold text-[#001c55] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  {error && (
                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-800 text-xs font-semibold flex items-start gap-2.5" role="alert">
                      <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div>{error}</div>
                    </div>
                  )}

                  {/* Honeypot - hidden from real users */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-sm font-bold uppercase text-gray-400">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                        className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans ${fieldErrors.name ? 'border-rose-300' : 'border-gray-250'}`}
                        placeholder="John Doe"
                      />
                      {fieldErrors.name && (
                        <p id="contact-name-error" className="text-xs text-rose-600 mt-1" role="alert">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-org" className="text-sm font-bold uppercase text-gray-400">Organization</label>
                      <input
                        id="contact-org"
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                        placeholder="Bank / Institution Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-sm font-bold uppercase text-gray-400">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                        className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans ${fieldErrors.email ? 'border-rose-300' : 'border-gray-250'}`}
                        placeholder="john@organization.com"
                      />
                      {fieldErrors.email && (
                        <p id="contact-email-error" className="text-xs text-rose-600 mt-1" role="alert">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-sm font-bold uppercase text-gray-400">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-service" className="text-sm font-bold uppercase text-gray-400">Service Required</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                    >
                      <option>Warehouse Audit Services</option>
                      <option>Stock Audit Services</option>
                      <option>Inventory Verification</option>
                      <option>Warehouse Inspection</option>
                      <option>Collateral Management Audit</option>
                      <option>Warehouse Due Diligence</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-sm font-bold uppercase text-gray-400">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                      rows={4}
                      className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans ${fieldErrors.message ? 'border-rose-300' : 'border-gray-250'}`}
                      placeholder="Provide details about your audit or inspection requirements..."
                    ></textarea>
                    {fieldErrors.message && (
                      <p id="contact-message-error" className="text-xs text-rose-600 mt-1" role="alert">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* DPDP Consent Checkbox */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <input
                        id="contact-consent"
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleConsentChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#15803d] focus:ring-[#15803d] cursor-pointer"
                        aria-describedby="contact-consent-desc"
                      />
                      <label htmlFor="contact-consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                        I agree to the{' '}
                        <Link href="/privacy-policy" className="text-[#15803d] hover:underline font-semibold" target="_blank">Privacy Policy</Link>
                        {' '}and consent to the collection and processing of my personal information in accordance with the Digital Personal Data Protection Act, 2023. I understand that my data will be used solely to respond to my inquiry.
                      </label>
                    </div>
                    {fieldErrors.consent && (
                      <p className="text-xs text-rose-600 ml-7" role="alert">{fieldErrors.consent}</p>
                    )}
                    <p id="contact-consent-desc" className="text-xs text-gray-400 ml-7">
                      You may request data deletion at any time by contacting{' '}
                      <a href="mailto:Support@brightoindia.com" className="text-[#15803d] hover:underline">Support@brightoindia.com</a>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <Link href="/privacy-policy" className="hover:text-[#15803d] transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-use" className="hover:text-[#15803d] transition-colors">Terms of Use</Link>
                    <Link href="/cookie-policy" className="hover:text-[#15803d] transition-colors">Cookie Policy</Link>
                    <a href="mailto:Support@brightoindia.com?subject=Data%20Deletion%20Request" className="hover:text-[#15803d] transition-colors">Request Data Deletion</a>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !form.consent}
                    className="w-full bg-[#001c55] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#ff6b00] disabled:opacity-50 disabled:hover:bg-[#001c55] transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
