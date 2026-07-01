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
    { src: 'warehouse_inspection_hero_1782796620876.png', dest: 'warehouse_inspection_hero.png' },
    { src: 'warehouse_inspection_about_compliance_1782796632247.png', dest: 'warehouse_inspection_about_compliance.png' },
    { src: 'warehouse_inspection_site_visit_1782796646924.png', dest: 'warehouse_inspection_site_visit.png' },
    { src: 'warehouse_inspection_cta_1782796659647.png', dest: 'warehouse_inspection_cta.png' }
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
  title: 'Warehouse Inspection Services | Better Warehouse Oversight | Hubcheck',
  description: 'Hubcheck delivers independent Warehouse Inspection Services that help financial institutions assess warehouse conditions, operational practices, and supporting documentation.',
  keywords: 'Warehouse Inspection Services, Storage Condition Assessment, Operational Observation, Inventory Handling, Warehouse Infrastructure Review, Hubcheck',
}

const inspectionIncludes = [
  'Warehouse Facility Inspection',
  'Storage Condition Assessment',
  'Operational Observation',
  'Inventory Handling Assessment',
  'Documentation Review',
  'Warehouse Infrastructure Review',
  'Information Validation',
  'Inspection Reporting'
]

const servicesList = [
  {
    title: 'Warehouse Facility Inspection',
    desc: 'We conduct independent inspections of warehouse facilities to assess infrastructure, operational conditions, storage practices, and overall warehouse environments using structured inspection methodologies.'
  },
  {
    title: 'Storage Condition Assessment',
    desc: 'We assess storage conditions and make observations about warehouse environments, inventory storage practices, and operational arrangements.'
  },
  {
    title: 'Warehouse Operations Review',
    desc: 'We review warehouse operations through independent inspections that support operational visibility, process evaluation, and warehouse monitoring requirements.'
  },
  {
    title: 'Inventory Handling Assessment',
    desc: 'We watch inventory handling practices to back warehouse inspections, operational assessments, and internal review processes.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, operational documentation, and supporting information to improve warehouse information validation and inspection reporting.'
  },
  {
    title: 'Warehouse Infrastructure Assessment',
    desc: 'Warehouse infrastructure is evaluated using structured inspections and documentation of facility conditions, observations, and supporting information.'
  },
  {
    title: 'Information Validation',
    desc: 'We conduct independent warehouse checks, perform on-site audits, review warehouse documents, and use structured verification methods to validate warehouse-related information.'
  },
  {
    title: 'Inspection Reporting',
    desc: 'Our structured inspection reports include observations of warehouses, premises inspections, supporting information, and inspection findings for the client to review.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Site Inspection',
    desc: 'All warehouse inspections are conducted separately and include on-site observations, facility assessments, and documentation reviews.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Inspection Professionals',
    desc: 'Our inspection team applies consistent procedures to inspect warehouse conditions, storage methods, and warehouse operations.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Comprehensive Facility Assessment',
    desc: 'The inspection scope includes a review of the internal warehouse infrastructure, storage conditions, operational procedures, and supporting documentation.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Inspection Framework',
    desc: 'Every inspection adheres to standardized procedures to ensure consistency, transparency, and reliable reporting.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Actionable Inspection Reporting',
    desc: 'You get structured inspection reports that document observations and supporting information to help internal review processes.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Inspection Network',
    desc: 'Hubcheck provides Warehouse Inspection Services across multiple locations through a coordinated operational network.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'Independent warehouse inspections that support warehouse monitoring, collateral verification, operational assessments, and lending-related review processes.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured Warehouse Inspection Services built to improve warehouse visibility, operational oversight, and information validation across lending operations.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent warehouse inspection and assessment services that support warehouse monitoring, documentation review, and operational decision-making.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand inspection objectives, warehouse details, operational requirements, and the agreed scope of work.'
  },
  {
    title: 'Inspection Planning',
    desc: 'We plan inspection activities and review parameters and documentation requirements ahead of the warehouse visit.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We perform independent inspections to examine warehouse infrastructure, storage conditions, operational practices, and facility observations.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, operational documents, and supporting information that fit the inspection scope.'
  },
  {
    title: 'Assessment & Observation',
    desc: 'We document inspection observations and validate available information with structured inspection procedures.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured warehouse inspection reports, including observations and supporting information, for client review.'
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
  { title: 'Fertilizers', svgPath: '/icons/fertilizers.svg' },
  { title: 'Other Agricultural & Industrial Commodities', svgPath: '/icons/other-commodities.svg' }
]

export default function WarehouseInspectionPage() {
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
                Better Warehouse Oversight
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Warehouse Inspection{' '}
                <span className="text-[#15803d]">Services</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                Every warehouse operates differently, making independent inspections essential for better operational visibility and informed lending decisions. Since 2015, Hubcheck has delivered independent Warehouse Inspection Services that help financial institutions assess warehouse conditions, operational practices, and supporting documentation through inspections and reporting.
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
                src="/images/about/warehouse_inspection_hero.png"
                alt="Hubcheck Professional Warehouse Inspection Services"
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
                    src="/images/about/warehouse_inspection_about_compliance.png"
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
                    src="/images/about/warehouse_inspection_site_visit.png"
                    alt="Physical warehouse inspection site visit"
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
                About Hubcheck: Warehouse Inspection Partner
              </h2>

              <div className="space-y-5 text-gray-600 font-sans font-light">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
                  Hubcheck serves as a certified Warehouse Inspection partner, supporting banks, NBFCs, and financial institutions in achieving better warehouse visibility through independent inspections and structured reporting.
                </p>
                <p className="text-base leading-relaxed">
                  As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, our team conducts warehouse inspections, warehouse audits, stock audits, inventory verification, collateral management audits, and warehouse due diligence. We help organizations build stronger warehouse monitoring and information validation processes.
                </p>
                <p className="text-base leading-relaxed">
                  We bring together physical inspections, operational observations, documentation reviews, and process-driven reporting. This way, Hubcheck offers Warehouse Inspection Services that fit warehouse operations and commodity-backed lending environments.
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
                Improve Warehouse Visibility Through Independent Warehouse Inspections
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Warehouse inspections provide valuable insights into warehouse management, inventory control, warehouse infrastructure, and warehouse operations. Independent inspections allow organizations to review warehouse environments and operational observations and to enhance their internal monitoring through structured assessments.
                </p>
                <p>
                  Hubcheck puts together physical warehouse inspections, operational observations, documentation reviews, and structured reporting to provide independent Warehouse Inspection Services. Our approach boosts warehouse visibility and backs up operational reviews, warehouse monitoring, and collateral assessment needs.
                </p>
                <p>
                  Whether we are checking commodity storage facilities or regular warehouse environments, Hubcheck provides Warehouse Inspection Services that meet operational requirements and the agreed scope of work.
                </p>
              </div>
            </div>

            {/* Right lists card (col-span-5) */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">What are Warehouse Inspection Services?</h4>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Warehouse Inspection Services involve conducting a comprehensive evaluation of warehouse facilities, storage conditions, warehouse operations, inventory handling practices, and supporting documentation using a structured approach.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Warehouse inspections allow organizations to review warehouse conditions, make operational observations, review and validate available information, and support warehouse monitoring through independent reporting.
              </p>

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#15803d] mb-4">Warehouse Inspection Services may include:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inspectionIncludes.map((item, idx) => (
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
              Our Warehouse Inspection Services
            </h2>
          </div>

          <ServicesGrid services={servicesList} serviceSlug="warehouse-inspection" />

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Inspection Walkthrough</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Our Warehouse Inspection Process
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck utilizes a step-by-step inspection methodology that combines site inspections, operational observations, documentation reviews, and structured reporting to enhance warehouse visibility and align with monitoring requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {processList.map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-8 rounded-lg shadow-xs space-y-4">
                <span className="text-sm font-black px-3 py-1 bg-green-50 text-[#15803d] rounded-full">
                  Step 0{idx + 1}
                </span>
                <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Corporate Strength</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Why Choose Hubcheck for Warehouse Inspection Services?
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck is an independent Warehouse Inspection Company providing structured inspections to enhance warehouse visibility and operational oversight. The process-driven approach combines physical inspections, documentation review, operational observations, and structured reporting to ensure that financial institutions maintain consistent warehouse inspection practices.
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
                  <p className="text-sm text-gray-550 leading-relaxed font-sans font-light">{item.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-b border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Strategic Sectors</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {industriesList.map((ind, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-8 rounded-lg flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{ind.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{ind.desc}</p>
                </div>
                <div className="border-t border-green-200/40 pt-4 mt-6">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#15803d]">Audits Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMODITIES WE SUPPORT */}
      <section className="py-12 md:py-16 bg-white">
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
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Commodity Inspections</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Warehouse Inspection Capabilities Across Commodity Storage Facilities
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Commodity-backed lending needs solid warehouse infrastructure, proper storage conditions, and operational transparency. Hubcheck runs Warehouse Inspection Services at different commodity storage facilities. This helps financial institutions check warehouse environments through independent inspections, documentation reviews, operational observations, and structured reporting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FRAMEWORK DISCLAIMER */}
      <section className="py-10 bg-[#fafafa] border-y border-gray-200/60 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-2">Our Warehouse Inspection Framework</h4>
          <p className="text-sm leading-relaxed text-gray-400 font-sans font-light">
            Hubcheck&apos;s Warehouse Inspection Services are conducted based on the information available at the time of inspection and within the agreed scope of work. Inspection observations, supporting information, and documented findings support client review processes and should be reviewed alongside internal policies, operational procedures, and decision-making frameworks.
          </p>
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
              Build Warehouse Inspection Approach Around Your Requirements
            </h2>
            <p className="text-sm md:text-base text-green-50/90 leading-relaxed font-medium">
              Whether you need warehouse inspections, facility assessments, storage condition reviews, documentation assessments, or operational observations, Hubcheck can recommend an inspection approach that aligns with your operational and business requirements.
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
              src="/images/about/warehouse_inspection_cta.png"
              alt="Build Warehouse Inspection Approach Around Your Requirements"
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
