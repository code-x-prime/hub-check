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
    { src: 'stock_audit_hero_1782797296400.png', dest: 'stock_audit_hero.png' }
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
  title: 'Stock Audit Services | Partner That Builds Business Confidence | Hubcheck',
  description: 'Hubcheck offers independent Stock Audit Services that help financial institutions with physical stock verification, quantity checks, inventory validation, and reporting.',
  keywords: 'Stock Audit Services, Stock Verification, Physical stock review, Inventory validation, Hubcheck',
}

const auditIncludes = [
  'Physical Stock Verification',
  'Inventory Validation',
  'Stock Record Review',
  'Warehouse Stock Assessment',
  'Documentation Review',
  'Collateral Monitoring Support',
  'Inventory Reconciliation Support',
  'Audit Reporting'
]

const servicesList = [
  {
    title: 'Physical Stock Verification',
    desc: 'We independently verify physical stock against warehouse records and documents to improve inventory visibility, collateral monitoring, and warehouse review processes.'
  },
  {
    title: 'Inventory Validation',
    desc: 'We validate inventory information through structured physical checks and document reviews to support inventory validation and warehouse monitoring.'
  },
  {
    title: 'Stock Record Review',
    desc: 'We examine stock registers, inventory records, and supporting documents to help strengthen stock information validation and internal reviews.'
  },
  {
    title: 'Warehouse Stock Assessment',
    desc: 'We assess warehouse stock conditions through structured physical verification, inventory observations, and independent reporting aligned with operational requirements and the agreed scope of work.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, inventory documents, stock statements, and supporting information to improve validation and reporting consistency.'
  },
  {
    title: 'Collateral Monitoring Support',
    desc: 'We support collateral-backed lending through structured stock verification, warehouse observations, document reviews, and reporting within the agreed audit scope.'
  },
  {
    title: 'Inventory Reconciliation Support',
    desc: 'We help with inventory reconciliation by comparing physical stock to warehouse records and documenting findings for client review.'
  },
  {
    title: 'Audit Reporting',
    desc: 'We deliver structured stock audit reports that document verification findings, inventory observations, supporting details, and assessment outcomes to support internal review processes.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Stock Audit Specialists',
    desc: 'We bring dedicated expertise in stock verification, inventory validation, warehouse assessments, and collateral monitoring for financial institutions.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Audit Professionals',
    desc: 'Our team follows structured stock audit methodologies to deliver consistent verification, documentation review, and reporting services.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Independent Verification Approach',
    desc: 'Every stock audit uses independent physical verification and documentation assessment within the agreed scope.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Operations',
    desc: 'We support stock audit requirements across multiple warehouse locations through a coordinated network.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Structured Reporting',
    desc: 'We provide organized reports that clearly document stock observations, verification findings, and supporting information for easy client review.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Technology-Enabled Audit Processes',
    desc: 'Technology-supported workflows help make stock audit activities more efficient, consistent, and well-documented while maintaining high reporting standards.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'We support banks with independent stock audits, inventory verification, collateral monitoring, and warehouse stock assessments that improve lending review and operational monitoring.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured Stock Audit Services designed to help NBFCs with inventory validation, stock verification, collateral assessment, and warehouse monitoring through independent checks.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent stock verification and warehouse stock assessment services that help financial institutions strengthen information validation, inventory oversight, and internal review frameworks.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand your audit objectives, inventory details, warehouse information, and the agreed scope of work.'
  },
  {
    title: 'Audit Planning',
    desc: 'We plan verification activities, documentation needs, and the stock assessment approach.'
  },
  {
    title: 'Physical Stock Verification',
    desc: 'We carry out independent physical verification of the available stock and inventory.'
  },
  {
    title: 'Documentation Review',
    desc: 'We examine stock registers, inventory records, and supporting warehouse documents.'
  },
  {
    title: 'Assessment & Validation',
    desc: 'We compare physical observations with records and document the verification findings.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured stock audit reports, including observations and supporting information, for your review.'
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

export default function StockAuditPage() {
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
                Builds Business Confidence
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Stock Audit{' '}
                <span className="text-[#15803d]">Services</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                Stock mismatches, inconsistent inventory records, and poor visibility into stored goods can create issues in lending, warehouse monitoring, and collateral assessment. Since 2015, Hubcheck has offered independent Stock Audit Services that help banks, NBFCs, and financial institutions with structured physical verification, inventory validation, and clear reporting.
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
                src="/images/about/stock_audit_hero.png"
                alt="Hubcheck Professional Stock Audit Services"
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
                    src="/images/about/stock_verification_about.png"
                    alt="Physical stock verification"
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
                  Hubcheck is a specialized Stock Audit company established in 2015, providing banks, NBFCs, and financial institutions with structured Stock Audit Services designed to improve stock verification, inventory validation, collateral monitoring, and warehouse information review.
                </p>
                <p className="text-base leading-relaxed">
                  As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, our expertise includes warehouse audits, stock audits, inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence. This helps organizations build consistent stock assessment and verification frameworks.
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
                Strengthen Stock Visibility Through Independent Stock Audit Services
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Accurate stock information is crucial for warehouse monitoring, collateral-backed lending, and inventory management. Independent stock audits help organizations check actual stock, review inventory records, and strengthen internal verification through proper physical assessments.
                </p>
                <p>
                  Hubcheck’s Stock Audit Services support financial institutions with independent stock verification, inventory validation, documentation reviews, and organized reporting. Our practical approach improves information visibility while supporting warehouse monitoring, collateral assessment, and operational review.
                </p>
                <p>
                  Whether you work with banks, NBFCs, or other financial institutions, Hubcheck delivers process-driven Stock Audit Services that match your operational requirements and agreed scope of work.
                </p>
              </div>
            </div>

            {/* Right lists card (col-span-5) */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">What are Stock Audit Services?</h4>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Stock Audit Services involve independently assessing physical stock, inventory records, supporting documents, and warehouse information to validate and support internal reviews.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Stock audits help organizations compare actual inventory with warehouse records, check stock-related documents, review and validate available inventory information, and record observations through clear reporting. Financial institutions commonly use these services for warehouse monitoring, collateral assessment, inventory reviews, and operational oversight.
              </p>

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#15803d] mb-4">Stock Audit Services may include:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {auditIncludes.map((item, idx) => (
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
              Our Stock Audit Services
            </h2>
          </div>

          <ServicesGrid services={servicesList} serviceSlug="stock-audit" />

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Audit Walkthrough</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Our Stock Audit Process
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Every stock audit follows a clear step-by-step method to support inventory validation, warehouse monitoring, and information review. Hubcheck combines physical stock verification, documentation reviews, and structured reporting to help financial institutions improve stock visibility and collateral monitoring.
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
              Why Choose Hubcheck for Stock Audit Services?
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              We bring dedicated expertise in stock verification, inventory validation, warehouse assessments, and collateral monitoring for financial institutions.
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
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Commodity Audits</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Stock Audit Expertise Across Commodity Storage Facilities
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Accurate stock information is essential for commodity-backed lending and warehouse monitoring. Hubcheck provides Stock Audit Services across many commodity storage facilities, helping financial institutions with structured stock verification, inventory validation, physical assessments, documentation reviews, and reporting.
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
              Bring Greater Confidence to Every Stock Assessment with Hubcheck
            </h2>
            <p className="text-sm md:text-base text-green-50/90 leading-relaxed font-medium">
              Independent Stock Audit Services designed to strengthen inventory validation, stock visibility, and collateral monitoring through structured verification and reporting.
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
              src="/images/about/cta_warehouse_audit.png"
              alt="Bring Greater Confidence to Every Stock Assessment with Hubcheck"
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
