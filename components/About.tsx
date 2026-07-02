'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import FancyButton from '@/components/ui/fancy-button'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const highlights = ['Independent Verification', 'On-Ground Inspections', 'Clear Reporting']

  useGSAP(
    () => {
      gsap.from('.section-heading', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out'
      })

      gsap.from('.about-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.2
      })

      gsap.from('.highlight-pill', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.4
      })

      gsap.from('.staggered-image', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="about" className="relative py-12 md:py-16 px-6 bg-white border-y border-gray-100 overflow-hidden" ref={sectionRef}>
      {/* Soft top/bottom gradients */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Content - Left (col-span-5) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#ff6b00] animate-pulse">
              Certified Partner
            </span>

            <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.05]">
              About Hubcheck: India&apos;s Trusted Warehouse Audit & Verification Partner
            </h2>

            <div className="about-content space-y-6 mb-8">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                Inaccurate warehouse records, inconsistent stock information, and limited collateral visibility can create problems in lending, monitoring, and risk assessment.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company offering Warehouse Audit & Verification Partner services that work with banks, NBFCs, and financial institutions, providing structured Warehouse Audit Services focused on stock and inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We combine independent verification, on-ground physical inspections, document reviews, and clear reports to help organizations gain better visibility and strengthen their internal review systems through consistent, process-driven warehouse audit services.
              </p>
            </div>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="highlight-pill flex items-center gap-2 px-4 py-2.5 bg-orange-50 rounded-full border border-orange-100 hover:border-orange-300 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-[#ff6b00] flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <FancyButton href="#contact">
              Book a Consultation
            </FancyButton>
          </div>

          {/* Staggered Grid of 4 Images - Right (col-span-7) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-50 rounded-full blur-3xl -z-10 opacity-70" />

            {/* Column 1 */}
            <div className="space-y-4">
              <div className="staggered-image relative rounded-lg overflow-hidden shadow-md border border-gray-100 h-64 sm:h-72 w-full bg-orange-50/10">
                <Image
                  src="/images/about/nbfc_officer.png"
                  alt="On-ground Warehouse Inspection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <div className="staggered-image relative rounded-lg overflow-hidden shadow-md border border-gray-100 h-80 sm:h-96 w-full bg-orange-50/10">
                <Image
                  src="/images/about/cta_warehouse_audit.png"
                  alt="Stock Verification"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 pt-12">
              <div className="staggered-image relative rounded-lg overflow-hidden shadow-md border border-gray-100 h-80 sm:h-80 w-full bg-orange-50/10">
                <Image
                  src="/images/about/why_choose_hubcheck.png"
                  alt="Collateral Management Audit"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <div className="staggered-image relative rounded-lg overflow-hidden shadow-md border border-gray-100 h-64 sm:h-72 w-full bg-orange-50/10">
                <Image
                  src="/images/about/due_diligence_about.png"
                  alt="Warehouse Due Diligence"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
