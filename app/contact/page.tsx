'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-green-100/80 via-emerald-50/40 to-white">
        <div className="absolute inset-0 -z-30 bg-gradient-to-br from-green-150/20 via-emerald-50/10 to-white pointer-events-none" />

        <HeroCanvas />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200/50 bg-green-50/50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Contact <span className="text-[#15803d]">Hubcheck</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans">
              Have questions about our warehouse audit, physical verification, stock reconciliation, or collateral monitoring services? Contact our Noida office to discuss your operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
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
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Contact Number</h4>
                    <a href="tel:+917838484441" className="text-sm text-[#15803d] hover:underline font-semibold">
                      783 - 848 - 4441
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Email Address</h4>
                    <a href="mailto:info@hubcheck.com" className="text-sm text-[#15803d] hover:underline font-semibold font-sans">
                      info@hubcheck.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
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
            <div className="lg:col-span-7 bg-[#f8fcf9] border border-green-100 rounded-lg p-8 shadow-xs text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Fill in the details below, and our warehouse diligence team will contact you within 24 business hours.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold uppercase text-gray-400">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] font-sans"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold uppercase text-gray-400">Organization</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] font-sans"
                      placeholder="Bank / Institution Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold uppercase text-gray-400">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] font-sans"
                      placeholder="john@organization.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold uppercase text-gray-400">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] font-sans"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold uppercase text-gray-400">Service Required</label>
                  <select
                    className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] font-sans"
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
                  <label className="text-sm font-bold uppercase text-gray-400">Your Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-gray-250 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] font-sans"
                    placeholder="Provide details about your audit or inspection requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#15803d] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#166534] transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
