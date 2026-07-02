"use client"
import React, { useState, useRef } from 'react'
import Image from 'next/image'

import FancyButton from '@/components/ui/fancy-button'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import FAQ from '@/components/FAQ'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Solution {
  title: string
  desc: string
  img: string
}

interface Challenge {
  title: string
  desc: string
}

interface WhyChooseUs {
  svgPath: string
  title: string
  desc: string
}

interface Commodity {
  title: string
  svgPath: string
}

interface ProcessStep {
  step: string
  title: string
  desc: string
}

interface FAQItem {
  question: string
  answer: string
}

interface IndustryPageTemplateProps {
  heroBadge: string
  heroTitle: React.ReactNode
  heroDesc: string
  heroImg: string
  heroImgAlt: string
  statsYear: string
  statsYearLabel: string
  statsPercent: string
  statsPercentLabel: string
  statsCertTitle: string
  statsCertDesc: string
  aboutBadge: string
  aboutTitle: string
  aboutTexts: string[]
  solutionsBadge: string
  solutionsTitle: string
  solutions: Solution[]
  challengesBadge: string
  challengesTitle: string
  challenges: Challenge[]
  whyChooseUsBadge: string
  whyChooseUsTitle: string
  whyChooseUs: WhyChooseUs[]
  commoditiesBadge: string
  commoditiesTitle: string
  commoditiesDesc: string
  commodities: Commodity[]
  processBadge: string
  processTitle: string
  process: ProcessStep[]
  ctaTitle: string
  ctaDesc: string
  faqs: FAQItem[]
}

export default function IndustryPageTemplate({
  heroBadge,
  heroTitle,
  heroDesc,
  heroImg,
  heroImgAlt,
  statsYear,
  statsYearLabel,
  statsPercent,
  statsPercentLabel,
  statsCertTitle,
  statsCertDesc,
  aboutBadge,
  aboutTitle,
  aboutTexts,
  solutionsBadge,
  solutionsTitle,
  solutions,
  challengesBadge,
  challengesTitle,
  challenges,
  whyChooseUsBadge,
  whyChooseUsTitle,
  whyChooseUs,
  commoditiesBadge,
  commoditiesTitle,
  commoditiesDesc,
  commodities,
  processBadge,
  processTitle,
  process,
  ctaTitle,
  ctaDesc,
  faqs
}: IndustryPageTemplateProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
  }

  useGSAP(() => {
    if (!containerRef.current || !leftColRef.current) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top+=100',
        end: 'bottom bottom',
        pin: leftColRef.current,
        pinSpacing: true,
        anticipatePin: 1,
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-orange-100/40 via-blue-50/50 to-[#fdfbf7]">
        <HeroCanvas />
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/[0.05] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Copy */}
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
                  Contact Our Team
                </FancyButton>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <Image
                src={heroImg}
                alt={heroImgAlt}
                fill
                priority
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-12 md:py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-50 rounded-full blur-3xl -z-10 opacity-70" />
              <div className="bg-orange-50/60 border border-orange-100/60 p-8 rounded-lg text-left space-y-2">
                <h4 className="text-4xl font-black text-[#ff6b00]">{statsYear}</h4>
                <p className="text-sm text-gray-555 font-medium">{statsYearLabel}</p>
              </div>
              <div className="bg-[#f0f4fa]/60 border border-blue-100 p-8 rounded-lg text-left space-y-2">
                <h4 className="text-4xl font-black text-[#001c55]">{statsPercent}</h4>
                <p className="text-sm text-gray-555 font-medium">{statsPercentLabel}</p>
              </div>
              <div className="bg-gray-50 border border-gray-150 p-8 rounded-lg text-left space-y-2 col-span-2">
                <h4 className="text-lg font-bold text-gray-900">{statsCertTitle}</h4>
                <p className="text-sm text-gray-555 leading-relaxed font-light">
                  {statsCertDesc}
                </p>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">
                {aboutBadge}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                {aboutTitle}
              </h2>
              <div className="space-y-5 text-gray-650 font-sans font-light">
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

      {/* SOLUTIONS SECTION */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">{solutionsBadge}</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              {solutionsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-150 p-6 rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 min-h-[350px]"
              >
                <div className="space-y-4">
                  <div className="w-full h-36 flex items-center justify-center bg-gray-50/50 rounded-lg relative overflow-hidden">
                    <Image
                      src={sol.img}
                      alt={sol.title}
                      fill
                      className="object-contain p-2 mix-blend-multiply"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 pt-2">{sol.title}</h3>
                  <p className="text-sm text-gray-555 leading-relaxed font-sans font-light">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION (Risk Mitigation) */}
      <section ref={containerRef} className="relative py-20 lg:py-28 bg-white overflow-hidden border-y border-gray-100">
        {/* Soft orange gradient at the top */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-orange-100/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-orange-100/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column (Sticky info block pinned by GSAP ScrollTrigger on desktop) */}
            <div ref={leftColRef} className="lg:col-span-5 space-y-6 text-left">
              <span className="inline-block px-3 py-1 bg-orange-50 border border-orange-200/50 text-xs font-bold uppercase tracking-wider text-[#ff6b00] rounded-md">
                {challengesBadge}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.12]">
                {challengesTitle}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-sans font-light">
                We have established a comprehensive risk mitigation framework to address critical warehouse lending challenges, ensuring that every asset and transaction is thoroughly verified, monitored, and documented.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light">
                Our structured physical verification, record checks, and due diligence activities help financial institutions mitigate operational, document-related, and credit risks.
              </p>
            </div>

            {/* Right Column (Alternating Timeline) */}
            <div className="lg:col-span-7 relative min-h-[600px] mt-8 lg:mt-0">
              {/* Vertical timeline center line for Desktop (lg) */}
              <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200/30 transform -translate-x-1/2" />

              {/* Vertical timeline left line for Mobile/Tablet (<lg) */}
              <div className="block lg:hidden absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200/30" />

              <div className="space-y-12 lg:space-y-16">
                {challenges.map((ch, idx) => {
                  const isEven = idx % 2 === 0
                  return (
                    <div key={idx} className="relative flex flex-col lg:flex-row items-stretch">

                      {/* Desktop layout: alternating left and right content */}
                      <div className="hidden lg:flex w-full items-center">
                        {/* Left Side Container */}
                        <div className="w-[45%] text-right pr-8 flex flex-col items-end justify-center">
                          {!isEven && (
                            <div className="space-y-2">
                              <span className="text-2xl font-black text-[#ff6b00]">
                                0{idx + 1}
                              </span>
                              <h3 className="font-bold text-lg text-[#001c55]">
                                {ch.title}
                              </h3>
                              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
                                {ch.desc}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Center Timeline Node Dot */}
                        <div className="w-[10%] flex justify-center z-10">
                          <div className="h-6 w-6 rounded-full bg-white border-4 border-[#ff6b00] shadow-md flex items-center justify-center relative group">
                            <div className="absolute h-2.5 w-2.5 rounded-full bg-[#ff6b00] scale-100 group-hover:scale-125 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Right Side Container */}
                        <div className="w-[45%] text-left pl-8 flex flex-col items-start justify-center">
                          {isEven && (
                            <div className="space-y-2">
                              <span className="text-2xl font-black text-[#ff6b00]">
                                0{idx + 1}
                              </span>
                              <h3 className="font-bold text-lg text-[#001c55]">
                                {ch.title}
                              </h3>
                              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
                                {ch.desc}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Mobile/Tablet layout: left-aligned stacked timeline */}
                      <div className="flex lg:hidden items-start gap-6 text-left pl-2">
                        {/* Timeline Dot */}
                        <div className="relative z-10 flex-shrink-0 h-5 w-5 rounded-full bg-white border-4 border-[#ff6b00] shadow-xs flex items-center justify-center mt-1.5" />
                        {/* Card Content */}
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-[#ff6b00]">Step 0{idx + 1}</span>
                          <h3 className="font-bold text-base text-gray-900">{ch.title}</h3>
                          <p className="text-sm text-gray-550 font-sans font-light leading-relaxed">{ch.desc}</p>
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">{whyChooseUsBadge}</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              {whyChooseUsTitle}
            </h2>
          </div>

          <div className="border border-gray-200/50 rounded-2xl bg-white/70 backdrop-blur-xs shadow-xs overflow-hidden">
            <FeaturesSectionWithHoverEffects features={whyChooseUs} />
          </div>
        </div>
      </section>

      {/* COMMODITIES WE SUPPORT */}
      <section className="relative py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">{commoditiesBadge}</span>
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
                    className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-lg hover:border-orange-200 transition-colors text-left"
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

      {/* ENGAGEMENT PROCESS (Execution Method) */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-y border-gray-100">
        {/* Top and Bottom Gradients */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-orange-150/20 via-orange-50/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-orange-150/20 via-orange-50/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <span className="inline-block px-3 py-1 bg-orange-50 border border-orange-200/50 text-xs font-bold uppercase tracking-wider text-[#ff6b00] rounded-md mb-3">
              {processBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              {processTitle}
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Here is how we ensure every project delivers structured, objective, and reliable audit results.
            </p>
          </div>

          {/* DESKTOP STAGGERED PATHWAY GRID (lg and above) */}
          <div className="hidden lg:grid grid-cols-5 gap-y-0 relative max-w-5xl mx-auto text-left">
            {/* Step 1: Center-Right (Col 3) */}
            <div className="col-span-5 grid grid-cols-5 border-b border-gray-150/60">
              <div className="col-start-3 col-span-2 p-8 pb-12 relative border-l border-gray-150/60">
                <span className="text-xs font-black text-[#ff6b00] uppercase tracking-wider">Step 01</span>
                <h3 className="text-xl font-bold text-[#001c55] mt-1 mb-2">{process[0].title}</h3>
                <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">{process[0].desc}</p>
              </div>
            </div>

            {/* Step 2: Left (Col 2) */}
            <div className="col-span-5 grid grid-cols-5 border-b border-gray-150/60">
              <div className="col-start-2 col-span-2 p-8 py-12 relative border-r border-gray-150/60">
                <span className="text-xs font-black text-[#ff6b00] uppercase tracking-wider">Step 02</span>
                <h3 className="text-xl font-bold text-[#001c55] mt-1 mb-2">{process[1].title}</h3>
                <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">{process[1].desc}</p>
              </div>
            </div>

            {/* Step 3: Center-Right (Col 3) */}
            <div className="col-span-5 grid grid-cols-5 border-b border-gray-150/60">
              <div className="col-start-3 col-span-2 p-8 py-12 relative border-l border-gray-150/60">
                <span className="text-xs font-black text-[#ff6b00] uppercase tracking-wider">Step 03</span>
                <h3 className="text-xl font-bold text-[#001c55] mt-1 mb-2">{process[2].title}</h3>
                <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">{process[2].desc}</p>
              </div>
            </div>

            {/* Step 4: Left (Col 2) */}
            <div className="col-span-5 grid grid-cols-5 border-b border-gray-150/60">
              <div className="col-start-2 col-span-2 p-8 py-12 relative border-r border-gray-150/60">
                <span className="text-xs font-black text-[#ff6b00] uppercase tracking-wider">Step 04</span>
                <h3 className="text-xl font-bold text-[#001c55] mt-1 mb-2">{process[3].title}</h3>
                <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">{process[3].desc}</p>
              </div>
            </div>

            {/* Step 5: Center-Right (Col 3) */}
            <div className="col-span-5 grid grid-cols-5">
              <div className="col-start-3 col-span-2 p-8 pt-12 relative border-l border-gray-150/60">
                <span className="text-xs font-black text-[#ff6b00] uppercase tracking-wider">Step 05</span>
                <h3 className="text-xl font-bold text-[#001c55] mt-1 mb-2">{process[4].title}</h3>
                <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">{process[4].desc}</p>
              </div>
            </div>
          </div>

          {/* RESPONSIVE MOBILE STACK (<lg) */}
          <div className="block lg:hidden space-y-6 text-left max-w-xl mx-auto">
            {process.map((p, idx) => (
              <div key={idx} className="bg-white border border-gray-150/80 p-6 rounded-2xl shadow-xs space-y-3">
                <span className="inline-block text-[10px] font-black px-2 py-0.5 bg-orange-50 text-[#ff6b00] rounded-md">
                  Step {p.step}
                </span>
                <h3 className="font-bold text-lg text-[#001c55]">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{p.desc}</p>
              </div>
            ))}
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
