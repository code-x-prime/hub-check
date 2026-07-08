'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'http://localhost:3001'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Warehouse Audit Services',
    message: ''
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      // Map inputs to Brighto API expectations
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: `[Hubcheck] Inquiry for ${form.service}`,
        message: `Organization: ${form.organization || 'Not Specified'}\nService: ${form.service}\nSource Site: Hubcheck\n\nMessage:\n${form.message}`
      }

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        setForm({
          name: '',
          organization: '',
          email: '',
          phone: '',
          service: 'Warehouse Audit Services',
          message: ''
        })
      } else {
        setError(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
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

                {/* Address */}
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

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Contact Number</h4>
                    <a href="tel:+917838484441" className="text-sm text-[#ff6b00] hover:underline font-semibold">
                      783 - 848 - 4441
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Email Address</h4>
                    <a href="mailto:info@hubcheck.com" className="text-sm text-[#ff6b00] hover:underline font-semibold font-sans">
                      info@hubcheck.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-800 text-xs font-semibold flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div>{error}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold uppercase text-gray-400">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold uppercase text-gray-400">Organization</label>
                      <input
                        type="text"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                        placeholder="Bank / Institution Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold uppercase text-gray-400">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                        placeholder="john@organization.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold uppercase text-gray-400">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold uppercase text-gray-400">Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
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
                    <label className="text-sm font-bold uppercase text-gray-400">Your Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff6b00] font-sans"
                      placeholder="Provide details about your audit or inspection requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
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
