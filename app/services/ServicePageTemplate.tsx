"use client"
import React from 'react'
import Image from 'next/image'

import { Check } from 'lucide-react'
import FancyButton from '@/components/ui/fancy-button'
import HeroCanvas from './warehouse-audit/HeroCanvas'
import ServicesGrid from '@/components/ServicesGrid'
import FAQ from '@/components/FAQ'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'

interface SolutionItem {
  title: string
  desc: string
  imageSrc?: string
}

interface WhyChooseUsItem {
  svgPath: string
  title: string
  desc: string
}

interface IndustryItem {
  name: string
  desc: string
}

interface CommodityItem {
  title: string
  svgPath: string
}

interface FAQItem {
  question: string
  answer: string
}

interface ServicePageTemplateProps {
  heroBadge: string
  heroTitle: React.ReactNode
  heroDesc: string
  heroImg: string
  heroImgAlt: string
  aboutBadge: string
  aboutTitle: string
  aboutTexts: string[]
  aboutImages: string[]
  oversightTitle: string
  oversightTexts: string[]
  oversightCardTitle: string
  oversightCardTexts: string[]
  oversightListTitle: string
  oversightList: string[]
  servicesTitle: string
  services: SolutionItem[]
  serviceSlug?: string
  whyChooseUsTitle: string
  whyChooseUs: WhyChooseUsItem[]
  industriesTitle: string
  industries: IndustryItem[]
  commoditiesTitle: string
  commoditiesDesc: string
  commodities: CommodityItem[]
  ctaTitle: string
  ctaDesc: string
  faqs: FAQItem[]
}

export default function ServicePageTemplate({
  heroBadge,
  heroTitle,
  heroDesc,
  heroImg,
  heroImgAlt,
  aboutBadge,
  aboutTitle,
  aboutTexts,
  aboutImages,
  oversightTitle,
  oversightTexts,
  oversightCardTitle,
  oversightCardTexts,
  oversightListTitle,
  oversightList,
  servicesTitle,
  services,
  serviceSlug,
  whyChooseUsTitle,
  whyChooseUs,
  industriesTitle,
  industries,
  commoditiesTitle,
  commoditiesDesc,
  commodities,
  ctaTitle,
  ctaDesc,
  faqs
}: ServicePageTemplateProps) {



  const sanitizeImage = (url: string) => {
    if (!url) return ''
    if (url.includes('stock_verification_about.png') || url.includes('stock_audit_hero.png')) {
      return '/images/about/cta_warehouse_audit.png'
    }
    if (url.includes('warehouse_inspection_about.png') || url.includes('warehouse_inspection_hero.png')) {
      return '/images/about/nbfc_officer.png'
    }
    return url
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-orange-100/40 via-blue-50/50 to-[#fdfbf7]">
        <div className="absolute inset-0 -z-30 bg-gradient-to-br from-orange-100/20 via-blue-50/30 to-[#fdfbf7] pointer-events-none" />

        <HeroCanvas />

        {/* Extra soft orange/blue glow blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/[0.05] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200/50 bg-orange-50/50 text-sm font-semibold uppercase tracking-wider text-[#ff6b00]">
                {heroBadge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                {heroTitle}
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                {heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <FancyButton href="#contact" className="px-8 py-3.5">
                  Request Consultation
                </FancyButton>
                <FancyButton href="#contact" variant="secondary" className="px-8 py-3.5">
                  Talk to Our Experts
                </FancyButton>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-gray-100 bg-[#f5f2e6]">
              {heroImg && (
                <Image
                  src={sanitizeImage(heroImg)}
                  alt={heroImgAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT HUBCHECK SECTION */}
      <section className="relative py-12 md:py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Column (Images) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-50 rounded-full blur-3xl -z-10 opacity-70" />
              {aboutImages && aboutImages.length >= 4 && (
                <>
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-56 w-full bg-blue-50">
                      <Image
                        src={sanitizeImage(aboutImages[0])}
                        alt="Hubcheck image 1"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-44 w-full bg-blue-50">
                      <Image
                        src={sanitizeImage(aboutImages[1])}
                        alt="Hubcheck image 2"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-44 w-full bg-blue-50">
                      <Image
                        src={sanitizeImage(aboutImages[2])}
                        alt="Hubcheck image 3"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-56 w-full bg-blue-50">
                      <Image
                        src={sanitizeImage(aboutImages[3])}
                        alt="Hubcheck image 4"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Column (Copy) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">
                {aboutBadge}
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                {aboutTitle}
              </h2>

              <div className="space-y-5 text-gray-600 font-sans font-light">
                {aboutTexts.map((text, idx) => (
                  <p key={idx} className={idx === 0 ? "text-base md:text-lg leading-relaxed font-medium text-gray-700" : "text-base leading-relaxed"}>
                    {text}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STRENGTHEN OVERSIGHT SECTION */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        {/* Soft top/bottom gradients */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left text pane */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                {oversightTitle}
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                {oversightTexts.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>

            {/* Right lists card */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{oversightCardTitle}</h4>
              {oversightCardTexts.map((text, idx) => (
                <p key={idx} className="text-sm text-gray-550 font-sans font-light leading-relaxed mb-6">
                  {text}
                </p>
              ))}

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
                {oversightListTitle}
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {oversightList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <Check className="h-4 w-4 text-[#ff6b00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES LIST SECTION */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">Comprehensive Support</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              {servicesTitle}
            </h2>
          </div>

          {serviceSlug ? (
            <ServicesGrid services={services} serviceSlug={serviceSlug} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/50 border border-gray-150 p-8 rounded-lg space-y-4 hover:border-orange-355 hover:bg-white hover:shadow-md transition-all duration-300 min-h-[220px]"
                >
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-555 leading-relaxed font-sans font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        {/* Soft top/bottom gradients */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">Why Hubcheck</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              {whyChooseUsTitle}
            </h2>
          </div>

          <FeaturesSectionWithHoverEffects
            features={whyChooseUs.map((w) => ({
              title: w.title,
              desc: w.desc,
              svgPath: w.svgPath
            }))}
          />
        </div>
      </section>

      {/* INDUSTRIES SECTION (Timeline Layout) */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-y border-gray-100">
        {/* Top/Bottom Orange & Blue gradient blend */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-100/10 via-blue-50/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-orange-100/10 via-blue-50/5 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-20 text-left">
            <div className="md:col-span-6">
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">Industries We Support</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] mt-2">
                {industriesTitle}
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed max-w-lg">
                We work closely with various sectors to customize our warehouse audit frameworks and provide validation checks that address specific secured lending guidelines.
              </p>
            </div>
          </div>

          {/* Timeline container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical line (Desktop only) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-16 relative">
              {industries.map((ind, idx) => {
                const isEven = idx % 2 === 1
                return (
                  <div key={idx} className="flex flex-col md:flex-row items-center relative">
                    
                    {/* Left Column (Desktop) */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-12 text-left md:text-right hidden md:block">
                      {!isEven && (
                        <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-xs inline-block w-full max-w-md hover:border-[#ff6b00] hover:shadow-md transition-all duration-300 relative">
                          <div className="flex items-center justify-between gap-4 mb-4">
                            <h3 className="font-bold text-xl text-gray-900 text-left">{ind.name}</h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-gradient-to-r from-orange-100 to-orange-50 text-[#ff6b00] rounded-full border border-orange-200/40">
                              Active Partner
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed font-sans font-light text-left">
                            {ind.desc}
                          </p>
                          {/* Connection indicator */}
                          <div className="absolute right-0 top-1/2 translate-x-1/2 w-4 h-[1px] bg-gray-200" />
                        </div>
                      )}
                    </div>

                    {/* Timeline Node (Center) */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm font-bold text-gray-900 font-sans my-4 md:my-0 flex-shrink-0">
                      {idx + 1}
                    </div>

                    {/* Right Column (Desktop) */}
                    <div className="w-full md:w-1/2 pl-0 md:pl-12 text-left hidden md:block">
                      {isEven && (
                        <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-xs inline-block w-full max-w-md hover:border-[#ff6b00] hover:shadow-md transition-all duration-300 relative">
                          <div className="flex items-center justify-between gap-4 mb-4">
                            <h3 className="font-bold text-xl text-gray-900">{ind.name}</h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-gradient-to-r from-blue-100 to-blue-50 text-[#001c55] rounded-full border border-blue-200/40">
                              Active Partner
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                            {ind.desc}
                          </p>
                          {/* Connection indicator */}
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 w-4 h-[1px] bg-gray-200" />
                        </div>
                      )}
                    </div>

                    {/* MOBILE CARD (Visible on mobile/tablet) */}
                    <div className="w-full block md:hidden">
                      <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-xs text-left">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <h3 className="font-bold text-lg text-gray-900">{ind.name}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-orange-50 text-[#ff6b00] rounded-full">
                            Active
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                          {ind.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* COMMODITIES WE SUPPORT */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        {/* Soft top/bottom gradients */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">Comprehensive Scope</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                {commoditiesTitle}
              </h2>
              <p className="text-base text-gray-650 leading-relaxed font-sans font-light">
                {commoditiesDesc}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {commodities.map((com, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg hover:border-orange-200 transition-colors text-left"
                  >
                    <div className="h-6 w-6 relative overflow-hidden flex-shrink-0">
                      <Image src={com.svgPath} alt={com.title} fill className="object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 font-sans">{com.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {faqs && faqs.length > 0 && (
        <FAQ items={faqs} badge="Common Inquiries" title="Frequently Asked Questions" />
      )}

      {/* CTA BANNER */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden" id="contact">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center bg-[#001c55] rounded-lg p-12 md:p-16 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {ctaTitle}
            </h2>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed font-sans font-light">
              {ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <FancyButton href="#contact" variant="secondary" className="px-8 py-3.5">
                Request Consultation
              </FancyButton>
              <FancyButton href="#contact" variant="secondary" className="px-8 py-3.5">
                Contact Our Team
              </FancyButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
