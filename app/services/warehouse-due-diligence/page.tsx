import type { Metadata } from 'next'
import Image from 'next/image'
import FancyButton from '@/components/ui/fancy-button'
import { Shield, Users, BarChart3, Globe, Cpu, Clock, Check } from 'lucide-react'
import FAQAccordion from './FAQAccordion'
import HeroCanvas from '../warehouse-audit/HeroCanvas'
import ServicesGrid from '@/components/ServicesGrid'
import fs from 'fs'
import path from 'path'

// Dynamic file-copier to move generated images to public folder when server renders/compiles
try {
  const sourceDir = 'C:/Users/welcome/.gemini/antigravity-ide/brain/e3192219-eef0-4a4c-9b73-7aaf6308fe2c'
  const targetDir = 'c:/Users/welcome/Downloads/hub-check/public/images/about'

  const filesToCopy = [
    { src: 'due_diligence_hero_1782796033414.png', dest: 'due_diligence_hero.png' },
    { src: 'due_diligence_site_visit_1782796046596.png', dest: 'due_diligence_site_visit.png' },
    { src: 'due_diligence_compliance_1782796059442.png', dest: 'due_diligence_compliance.png' },
    { src: 'due_diligence_cta_1782796075064.png', dest: 'due_diligence_cta.png' }
  ]

  filesToCopy.forEach(f => {
    const srcPath = path.join(sourceDir, f.src)
    const destPath = path.join(targetDir, f.dest)
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath)
      console.log(`[Auto-copy] Copied ${f.src} to ${f.dest}`)
    }
  })
} catch (e) {
  console.error('[Auto-copy] Failed to copy files:', e)
}

export const metadata: Metadata = {
  title: 'Warehouse Due Diligence Services | India’s Trusted Partner | Hubcheck',
  description: 'Hubcheck provides independent Warehouse Due Diligence Services that bring together physical verification, infrastructure checks, and operational reviews before lending and business decisions.',
  keywords: 'Warehouse Due Diligence, Warehouse Assessment, Infrastructure Review, Physical Verification, Documentation Review, Inventory Assessment, Warehouse Inspection, Hubcheck',
}

const dueDiligenceIncludes = [
  'Warehouse Assessment',
  'Infrastructure Review',
  'Physical Verification',
  'Documentation Review',
  'Inventory Assessment',
  'Warehouse Inspection',
  'Information Validation',
  'Due Diligence Reporting'
]

const servicesList = [
  {
    title: 'Warehouse Assessment',
    desc: 'Structured checks are conducted to evaluate the warehouse\'s readiness and infrastructure, as well as its storage practices and operations.'
  },
  {
    title: 'Infrastructure Review',
    desc: 'We examine warehouse buildings, storage areas, layouts, and support systems through detailed independent assessments.'
  },
  {
    title: 'Physical Verification',
    desc: 'Warehouse information is verified through methods such as on-site checks, operational observations, and physical inspections.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, operational documents, inventory details, agreements, and other supporting documents.'
  },
  {
    title: 'Inventory Assessment',
    desc: 'We review inventory handling and available stock information to support due diligence and operational reviews.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'Independent warehouse inspections are conducted to check the storage environment, daily operations, and overall condition.'
  },
  {
    title: 'Information Validation',
    desc: 'We reinforce the due diligence process by cross-checking information, reviewing documents, and independently observing operations.'
  },
  {
    title: 'Due Diligence Reporting',
    desc: 'Clear reports are provided to you that show your observations, verification results and supporting details for review.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Due Diligence Expertise',
    desc: 'Every project runs independently and follows the agreed scope of work.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Comprehensive Warehouse Assessments',
    desc: 'We evaluate infrastructure, operational practices, inventory conditions, and supporting documents using clear review methods.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Operational & Documentation Review',
    desc: 'We examine operations, records, and documents to improve information validation.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Due Diligence Methodology',
    desc: 'All assessments are conducted in accordance with standard assessment procedures to ensure transparency, consistency, and reliable reporting.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Actionable Due Diligence Reports',
    desc: 'You get well-organized reports with observations, findings, and supporting information for easy internal review.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Assessment Network',
    desc: 'Hubcheck provides Warehouse Due Diligence Services across multiple locations through a well-coordinated network.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'Support for warehouse financing, collateral reviews, and lending assessment processes.'
  },
  {
    name: 'NBFCs',
    desc: 'Independent assessments that help with operational reviews, warehouse verification, and financing activities.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Services designed to strengthen warehouse information validation and business review processes.'
  }
]

const commoditiesList = [
  { title: 'Rice', svgPath: '/icons/rice.svg' },
  { title: 'Wheat', svgPath: '/icons/wheat.svg' },
  { title: 'Cotton', svgPath: '/icons/cotton.svg' },
  { title: 'Sugar', svgPath: '/icons/sugar.svg' },
  { title: 'Pulses', svgPath: '/icons/pulses.svg' },
  { title: 'Oilseeds', svgPath: '/icons/oilseeds.svg' },
  { title: 'Maize', svgPath: '/icons/maize.svg' },
  { title: 'Spices', svgPath: '/icons/spices.svg' },
  { title: 'Fertilizers', svgPath: '/icons/fertilizers.svg' }
]

export default function WarehouseDueDiligencePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-green-100/80 via-emerald-50/40 to-white">
        <div className="absolute inset-0 -z-30 bg-gradient-to-br from-green-150/20 via-emerald-50/10 to-white pointer-events-none" />

        <HeroCanvas />

        {/* Extra soft green/emerald glow blobs for styling */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-emerald-500/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Hero copy) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200/50 bg-green-50/50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
                India’s Trusted Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Warehouse Due{' '}
                <span className="text-[#15803d]">Diligence Services</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                What if the biggest risks in a warehouse go undetected during routine inspections? Issues such as hidden gaps in operations, missing paperwork, or infrastructure problems can affect financing, collateral checks, and key business decisions. Hubcheck provides independent Warehouse Due Diligence Services that give you a clearer picture before making important decisions.
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

            {/* Right Column (Hero image frame) */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-gray-100 bg-green-50">
              <Image
                src="/images/about/due_diligence_hero.png"
                alt="Hubcheck Professional Warehouse Due Diligence Services"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-950/15 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT HUBCHECK SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Column (Images) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-50 rounded-full blur-3xl -z-10 opacity-70" />
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-56 w-full bg-green-50">
                  <Image
                    src="/images/about/scanner_check.png"
                    alt="Hubcheck Scanner Check"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-44 w-full bg-green-50">
                  <Image
                    src="/images/about/due_diligence_compliance.png"
                    alt="Hubcheck Compliance Documents"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-44 w-full bg-green-50">
                  <Image
                    src="/images/about/due_diligence_site_visit.png"
                    alt="Physical verification site visit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-56 w-full bg-green-50">
                  <Image
                    src="/images/about/why_choose_hubcheck.png"
                    alt="Hubcheck Auditors Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Copy) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">
                ISO 27001 & SOC 2 Certified
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                About Hubcheck
              </h2>

              <div className="space-y-5 text-gray-600 font-sans font-light">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
                  Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that focuses on Warehouse Due Diligence Services, bringing together independent warehouse checks, physical verification, documentation reviews, and operational evaluations. This helps financial institutions get better warehouse visibility.
                </p>
                <p className="text-base leading-relaxed">
                  Our experience in Warehouse Due Diligence since 2015 includes warehouse audits, stock audits, inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence. This enables organizations to establish strong review mechanisms prior to operational, commercial, and lending decisions.
                </p>
                <p className="text-base leading-relaxed">
                  We use independent verification, on-site assessment, documentation review, and clear reporting. Hubcheck helps organizations improve warehouse visibility and make better-informed business and lending decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STRENGTHEN OVERISGHT & DETAILS */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left text pane (col-span-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Make Better Business Decisions Through Independent Warehouse Due Diligence
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Warehouse due diligence gives useful insights into operations, infrastructure, inventory practices, documentation, and overall readiness before big decisions. Independent checks help organizations verify key details, assess warehouse conditions, and strengthen internal reviews.
                </p>
                <p>
                  Hubcheck delivers Warehouse Due Diligence Services with independent assessments, physical verification, documentation reviews, operational observations, and structured reporting. Our approach helps financial institutions gain stronger warehouse visibility while supporting operational reviews, collateral checks, and business evaluations.
                </p>
                <p>
                  Whether for warehouse financing, commodity-backed lending, business deals, or operational reviews, Hubcheck provides Warehouse Due Diligence Services that align with your needs and the agreed scope of work.
                </p>
              </div>
            </div>

            {/* Right lists card (col-span-5) */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">What are Warehouse Due Diligence Services?</h4>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Warehouse Due Diligence Services involve the independent verification of warehouse operations, infrastructure, inventory management, supporting documents, working conditions, and more before entering into any significant business, lending, or investment transactions.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                These services enable organizations to verify warehouse information, review operational procedures and available documentation, and document the results in clear reports. They support warehouse financing, collateral-backed lending, acquisitions, operational reviews, and risk assessments.
              </p>

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#15803d] mb-4">Warehouse Due Diligence Services may include the following:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dueDiligenceIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <Check className="h-4 w-4 text-[#15803d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* OUR SERVICES GRID */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Hubcheck Scope</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Our Warehouse Due Diligence Services
            </h2>
          </div>

          <ServicesGrid services={servicesList} serviceSlug="warehouse-due-diligence" />

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Corporate Strength</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Why Choose Hubcheck for Warehouse Due Diligence Services?
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck is a specialized Warehouse Due Diligence company that helps financial institutions strengthen their assessments through independent verification, operational reviews, documentation checks, and structured reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {whyChooseUsList.map((item, idx) => {
              return (
                <div key={idx} className="bg-white border border-gray-150 p-8 rounded-lg shadow-xs space-y-4 hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-green-50 text-[#15803d] relative overflow-hidden">
                    <Image src={item.svgPath} alt={item.title} fill className="object-contain p-2" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-555 leading-relaxed font-sans font-light">{item.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Strategic Sectors</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {industriesList.map((ind, idx) => (
              <div key={idx} className="bg-green-50/20 border border-green-100 p-8 rounded-lg flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{ind.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{ind.desc}</p>
                </div>
                <div className="border-t border-green-200/40 pt-4 mt-6">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#15803d]">Assessments Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMODITIES WE SUPPORT */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-t border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              {commoditiesList.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-150 p-5 rounded-lg flex items-center gap-3 shadow-xs">
                  <div className="h-6 w-6 relative overflow-hidden flex-shrink-0">
                    <Image src={item.svgPath} alt={item.title} fill className="object-contain" />
                  </div>
                  <span className="text-sm font-bold text-gray-800">{item.title}</span>
                </div>
              ))}
            </div>

            {/* Right Column (Text Copy) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Commodity Due Diligence</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Warehouse Due Diligence Across Commodity Storage Facilities
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Warehouse due diligence is important when evaluating commodity storage facilities before financing, reviews, or business decisions. Hubcheck conducts independent assessments at various commodity storage sites through physical verification, documentation reviews, operational observations, and structured reporting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <FAQAccordion />
      </section>

      {/* CTA BANNER */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#15803d] rounded-lg p-8 md:p-12 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-green-900/15 text-left">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-600 rounded-full blur-2xl opacity-40 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500 rounded-full blur-2xl opacity-40 pointer-events-none" />

          <div className="flex-1 space-y-6 lg:max-w-xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Make Informed Warehouse Decisions with Hubcheck
            </h2>
            <p className="text-sm md:text-base text-green-50/90 leading-relaxed font-medium">
              Make smarter business and lending choices with independent Warehouse Due Diligence. Contact our Due Diligence experts at Hubcheck about your warehouse assessment requirements and how you can meet your operational aims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <FancyButton href="#contact" variant="secondary">
                Request a Consultation
              </FancyButton>
              <FancyButton href="#contact" variant="primary" className="border-white bg-green-700/80">
                Contact Our Team
              </FancyButton>
            </div>
          </div>

          <div className="flex-grow w-full lg:max-w-[45%] h-64 md:h-80 lg:h-[340px] relative rounded-lg overflow-hidden border border-white/10 shadow-xl bg-green-800">
            <Image
              src="/images/about/due_diligence_cta.png"
              alt="Discussing Warehouse Due Diligence Services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

    </main>
  )
}
