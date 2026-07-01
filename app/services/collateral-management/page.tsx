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
    { src: 'collateral_management_hero_1782796320221.png', dest: 'collateral_management_hero.png' },
    { src: 'collateral_management_site_visit_1782796344418.png', dest: 'collateral_management_site_visit.png' },
    { src: 'collateral_management_document_1782796333177.png', dest: 'collateral_management_document.png' },
    { src: 'collateral_management_cta_1782796357087.png', dest: 'collateral_management_cta.png' }
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
  title: 'Collateral Management Audit Services | Protect Every Lending Decision | Hubcheck',
  description: 'Hubcheck provides independent Collateral Management Audit Services that improve collateral visibility, warehouse monitoring, and information validation through structured audits.',
  keywords: 'Collateral Management Audit, Collateral Verification, Physical Stock Observation, Inventory Validation, Warehouse Inspection, Hubcheck',
}

const collateralIncludes = [
  'Collateral Verification',
  'Warehouse Assessment',
  'Physical Stock Observation',
  'Documentation Review',
  'Inventory Validation',
  'Warehouse Inspection',
  'Information Validation',
  'Audit Reporting'
]

const servicesList = [
  {
    title: 'Collateral Verification',
    desc: 'We validate collateral-backed assets through independent warehouse verification, physical observations, documentation reviews, and structured reporting to support collateral monitoring and information validation.'
  },
  {
    title: 'Warehouse Collateral Assessment',
    desc: 'We assess warehouse-stored collateral through structured warehouse verification, operational observations, and documentation checks that follow the agreed audit goals.'
  },
  {
    title: 'Physical Stock Assessment',
    desc: 'We conduct independent physical checks of stock held as collateral to support warehouse monitoring, information validation, and internal review processes.'
  },
  {
    title: 'Inventory Validation',
    desc: 'We review inventory details using structured verification methods to improve collateral visibility and the accuracy of warehouse information.'
  },
  {
    title: 'Documentation Review',
    desc: 'We conduct independent reviews of warehouse records, collateral documents, inventory records, and supporting information.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We conduct warehouse inspections to examine storage conditions, operational practices, and warehouse infrastructure, as well as observations related to collateral monitoring.'
  },
  {
    title: 'Information Validation',
    desc: 'We independently validate collateral-related information through structured warehouse assessments, physical checks, and documentation reviews.'
  },
  {
    title: 'Audit Reporting',
    desc: 'We deliver structured audit reports that document collateral observations, verification findings, and supporting information to help internal review and monitoring processes.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Collateral Verification',
    desc: 'Every collateral audit happens independently through warehouse verification and physical assessment within the agreed scope of work.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Warehouse-Based Assessment',
    desc: 'Our audit method checks warehouse conditions, inventory observations, and collateral-related information using structured procedures.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Structured Documentation Review',
    desc: 'We independently review collateral records and supporting documents to improve information validation and report quality.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Audit Methodology',
    desc: 'We use standardized audit procedures that support transparency, consistent operations, and reliable collateral checks.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Actionable Audit Reporting',
    desc: 'You receive structured reports that document collateral observations, verification findings, and supporting information for internal review.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Audit Network',
    desc: 'Hubcheck provides Collateral Management Audit Services across multiple warehouse locations through a coordinated operational network.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'We support secured lending with independent collateral verification, warehouse assessments, and structured audit reporting.'
  },
  {
    name: 'NBFCs',
    desc: 'We strengthen collateral monitoring and warehouse verification through independent audit services tailored to lending operations.'
  },
  {
    name: 'Financial Institutions',
    desc: 'We offer independent collateral management audits that improve information validation, warehouse oversight, and portfolio review processes.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand collateral monitoring objectives, warehouse information, operational requirements, and the agreed audit scope.'
  },
  {
    title: 'Audit Planning',
    desc: 'We plan verification activities, documentation reviews, and collateral assessment steps.'
  },
  {
    title: 'Warehouse Verification',
    desc: 'We visit warehouses to verify pledged inventory and note relevant warehouse observations.'
  },
  {
    title: 'Physical Assessment',
    desc: 'We check warehouse conditions, pledged inventory, and operational observations within the agreed scope.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review collateral records, warehouse documents, inventory information, and supporting documents.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured collateral management audit reports with observations, verification findings, and supporting information for client review.'
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

export default function CollateralManagementPage() {
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
                Lending Portfolio Protection
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Collateral Management{' '}
                <span className="text-[#15803d]">Audit Services</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                Protect Every Lending Decision with Independent Collateral Management Audits. Hidden risks in collateral can affect lending choices and the quality of loan portfolios. Hubcheck provides independent Collateral Management Audit Services. We use clear warehouse verification, physical verification, document reviews, and reports to get the job done.
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
                src="/images/about/collateral_management_hero.png"
                alt="Hubcheck Professional Collateral Management Audit Services"
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
                    src="/images/about/collateral_management_document.png"
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
                    src="/images/about/collateral_management_site_visit.png"
                    alt="Physical collateral inspection"
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
                About Hubcheck: Ideal Choice for Collateral Management Audit Partners
              </h2>

              <div className="space-y-5 text-gray-600 font-sans font-light">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
                  Hubcheck is a trusted Collateral Management Audit partner. As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we help banks, NBFCs, and financial institutions gain better collateral visibility through independent warehouse verification, physical inspections, documentation reviews, and structured audit methodologies.
                </p>
                <p className="text-base leading-relaxed">
                  Our team covers collateral management audits, warehouse audits, stock audits, inventory verification, warehouse inspections, and warehouse due diligence. This helps organizations build stronger collateral monitoring and internal review processes.
                </p>
                <p className="text-base leading-relaxed">
                  We mix warehouse verification, physical assessments, documentation reviews, and process-driven reporting. This enables Hubcheck to deliver Collateral Management Audit Services that are tailored to secured lending and commodity-backed financing setups.
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
                Strengthen Collateral Visibility Through Independent Audit Services
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Collateral is key to secured lending and risk management. Independent collateral audits help organizations verify warehouse details, review documents, assess stock levels, and build confidence in collateral information through structured verification.
                </p>
                <p>
                  Hubcheck has been delivering independent Collateral Management Audit Services since 2015. Our approach combines warehouse verification, stock assessments, physical inspections, documentation reviews, and structured reporting to help financial institutions strengthen collateral visibility while supporting lending reviews, warehouse monitoring, and internal review processes.
                </p>
                <p>
                  Whether we audit collateral in commodity warehouses or other storage locations, Hubcheck provides process-driven audit services that align with operational needs and the agreed scope of work.
                </p>
              </div>
            </div>

            {/* Right lists card (col-span-5) */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">What are Collateral Management Audit Services?</h4>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                &ldquo;Collateral Management Audit Services&rdquo; means the independent review of collateral-backed inventory, warehouse information, supporting documents, and operational observations. This supports collateral monitoring and internal review processes.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Collateral management audits enable organizations to review pledged assets independently, confirm available details, verify warehouse observations, and document findings in structured reports. These services commonly support secured lending, warehouse monitoring, commodity finance, and collateral oversight work.
              </p>

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#15803d] mb-4">Collateral Management Audit Services may include the following:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {collateralIncludes.map((item, idx) => (
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
              Our Collateral Management Audit Services
            </h2>
          </div>

          <ServicesGrid services={servicesList} serviceSlug="collateral-management" />

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Audit Walkthrough</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Our Collateral Management Audit Process
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck uses a step-by-step audit method that combines warehouse verification, physical assessments, documentation reviews, and structured reporting to boost collateral visibility and support monitoring needs.
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
              Why Choose Hubcheck for Collateral Management Audit Services?
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck is an independent Collateral Management Audit company. We deliver structured verification services that improve collateral visibility, warehouse monitoring, and information validation. Our process-driven approach mixes warehouse verification, physical assessments, documentation reviews, and structured reporting. This helps financial institutions keep strong collateral monitoring practices.
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
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Collateral Expertise</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Collateral Expertise Across Commodity Assets
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Good collateral management starts with clear visibility into pledged assets. Hubcheck runs independent collateral management audits in warehouses that store agricultural and industrial commodities. This helps financial institutions review pledged inventory, validate supporting information, and improve collateral oversight.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FRAMEWORK DISCLAIMER */}
      <section className="py-10 bg-[#fafafa] border-y border-gray-200/60 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-2">Our Collateral Management Audits Framework</h4>
          <p className="text-[11px] leading-relaxed text-gray-400 font-sans font-light">
            Hubcheck’s Collateral Management Audit Services run based on information available during the audit and within the agreed scope of work. Audit observations, verification findings, and supporting information help the client review processes. They should be reviewed along with internal policies, operational procedures, collateral management frameworks, and decision-making requirements.
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
              Secure Better Visibility into Your Collateral
            </h2>
            <p className="text-sm md:text-base text-green-50/90 leading-relaxed font-medium">
              Independent collateral audits help strengthen collateral monitoring and support smart lending decisions through structured verification and reporting. Contact Hubcheck today to discuss your collateral management audit requirements.
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
              src="/images/about/collateral_management_cta.png"
              alt="Secure Better Visibility into Your Collateral"
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
