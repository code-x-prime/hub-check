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
    { src: 'inventory_verification_hero_1782796945871.png', dest: 'inventory_verification_hero.png' },
    { src: 'inventory_verification_about_compliance_1782796960581.png', dest: 'inventory_verification_about_compliance.png' },
    { src: 'inventory_verification_site_visit_1782796974775.png', dest: 'inventory_verification_site_visit.png' },
    { src: 'inventory_verification_cta_1782796988414.png', dest: 'inventory_verification_cta.png' }
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
  title: 'Inventory Verification Services | Better Inventory Visibility | Hubcheck',
  description: 'Hubcheck delivers independent Inventory Verification Services that combine physical verification, documentation review, and structured reporting to strengthen inventory visibility.',
  keywords: 'Inventory Verification Services, Physical Inventory Verification, Stock Reconciliation, Inventory Record Validation, Hubcheck',
}

const verificationIncludes = [
  'Physical Inventory Verification',
  'Inventory Record Validation',
  'Warehouse Inventory Assessment',
  'Stock Reconciliation Support',
  'Documentation Review',
  'Information Validation',
  'Collateral Monitoring Support',
  'Verification Reporting'
]

const servicesList = [
  {
    title: 'Physical Inventory Verification',
    desc: 'We validate available inventory through independent physical checks and documented observations to improve inventory visibility and warehouse monitoring.'
  },
  {
    title: 'Inventory Record Validation',
    desc: 'We review inventory records and supporting information to strengthen inventory validation and internal verification processes.'
  },
  {
    title: 'Warehouse Inventory Assessment',
    desc: 'We assess inventory stored in warehouse environments through structured verification methods and operational observations.'
  },
  {
    title: 'Stock Reconciliation Support',
    desc: 'We support inventory reconciliation by comparing physical stock with records and documenting observations for your review.'
  },
  {
    title: 'Documentation Review',
    desc: 'We examine inventory registers, warehouse documents, and supporting records to strengthen the validation of inventory information.'
  },
  {
    title: 'Information Validation',
    desc: 'We independently validate inventory-related information through structured verification activities and documentation assessment.'
  },
  {
    title: 'Collateral Monitoring Support',
    desc: 'We support collateral-backed lending through inventory verification, warehouse observations, and organized reporting within the agreed scope.'
  },
  {
    title: 'Verification Reporting',
    desc: 'We deliver structured reports that document verification findings, inventory observations, and supporting information for internal review processes.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Inventory Verification',
    desc: 'Every verification assignment uses independent physical verification and structured documentation review.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Verification Team',
    desc: 'Our professionals follow defined verification methodologies to deliver consistent inventory assessment and reporting.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Process-Driven Methodology',
    desc: 'Standardized verification procedures support operational consistency, transparency, and information validation.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Operations',
    desc: 'We support inventory verification requirements across multiple warehouse locations through a coordinated operational network.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Structured Reporting',
    desc: 'You receive organized reports that document inventory observations, verification findings, and supporting information.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Technology-Enabled Processes',
    desc: 'Technology-supported workflows improve verification efficiency, documentation management, and reporting consistency.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'Independent inventory verification supporting warehouse monitoring, collateral validation, and operational review processes.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured inventory verification services designed to strengthen inventory visibility and lending-related review activities.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent inventory assessment services supporting warehouse verification, information validation, and operational oversight.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand verification objectives, inventory requirements, warehouse information, and the agreed scope of work.'
  },
  {
    title: 'Verification Planning',
    desc: 'We prepare the verification methodology, documentation requirements, and operational approach.'
  },
  {
    title: 'Physical Inventory Verification',
    desc: 'We conduct independent verification of available inventory inside the warehouse environment.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review inventory records, warehouse documentation, and supporting information.'
  },
  {
    title: 'Assessment & Validation',
    desc: 'We compare physical observations with available inventory records and document verification findings.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured inventory verification reports for client review and internal assessment processes.'
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

export default function InventoryVerificationPage() {
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
                Better Inventory Visibility
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Inventory Verification{' '}
                <span className="text-[#15803d]">Services</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                Is your inventory information ready for important lending and review processes? Since 2015, Hubcheck has had a team of experts helping financial institutions strengthen inventory validation through independent Inventory Verification Services. We combine physical verification, documentation review, and structured reporting to strengthen inventory visibility and support informed operations.
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
                src="/images/about/inventory_verification_hero.png"
                alt="Hubcheck Professional Inventory Verification Services"
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
                    src="/images/about/inventory_verification_about_compliance.png"
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
                    src="/images/about/inventory_verification_site_visit.png"
                    alt="Physical inventory verification site visit"
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
                About Hubcheck: Leading Inventory Verification Partner
              </h2>

              <div className="space-y-5 text-gray-600 font-sans font-light">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
                  Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited Inventory Verification partner that helps banks, NBFCs, and financial institutions strengthen inventory validation through independent warehouse verification and structured reporting.
                </p>
                <p className="text-base leading-relaxed">
                  Our expertise covers inventory verification, warehouse audits, stock audits, warehouse inspections, collateral management audits, and warehouse due diligence. This helps organizations improve inventory visibility and support better operational and lending review processes.
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
                Strengthen Inventory Visibility Through an Independent Verification Partner
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Accurate inventory information is very important for warehouse monitoring, operational oversight, and collateral-backed lending. Sometimes inventory records alone don’t give the full picture of what’s actually in the warehouse. Independent inventory verification helps organizations verify available inventory, review supporting documents, and build greater confidence in their inventory data.
                </p>
                <p>
                  Hubcheck brings together physical inventory verification, documentation assessment, warehouse observations, and structured reporting to deliver independent Inventory Verification Services. Our approach is designed to improve inventory visibility while supporting warehouse monitoring, internal reviews, and operational decision-making.
                </p>
                <p>
                  Whether you’re working with commodity storage facilities or regular warehouse setups, Hubcheck delivers practical Inventory Verification Services that match the agreed scope of work.
                </p>
              </div>
            </div>

            {/* Right lists card (col-span-5) */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">What is Inventory Verification?</h4>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Inventory Verification is the process of independently checking available inventory through physical verification, documentation assessment, and comparison with inventory records. The goal is to improve inventory visibility and support internal review processes using structured verification methods.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Inventory Verification Services commonly help with warehouse monitoring, collateral assessment, inventory control, operational reviews, and information validation by providing independently verified observations and clear reporting.
              </p>

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#15803d] mb-4">Inventory Verification Services may include:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {verificationIncludes.map((item, idx) => (
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
              Our Inventory Verification Services
            </h2>
          </div>

          <ServicesGrid services={servicesList} serviceSlug="inventory-verification" />

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Verification Walkthrough</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Our Inventory Verification Process
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck follows a systematic verification methodology that combines planning, physical verification, documentation assessment, and structured reporting to improve inventory visibility and support warehouse monitoring.
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
              Why Choose Hubcheck for Inventory Verification Services?
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light mt-4">
              Hubcheck is an independent Inventory Verification company committed to delivering structured verification services that improve inventory visibility, warehouse monitoring, and information validation. Our practical approach combines physical verification, documentation assessment, operational expertise, and structured reporting to help financial institutions keep consistent inventory verification practices.
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
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Commodity Verification</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Inventory Verification Across Commodity Storage Facilities
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Hubcheck provides Inventory Verification Services across different commodity storage facilities, helping financial institutions validate inventory through physical verification, documentation assessment, and structured reporting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FRAMEWORK DISCLAIMER */}
      <section className="py-10 bg-[#fafafa] border-y border-gray-200/60 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-2">Our Verification Framework</h4>
          <p className="text-sm leading-relaxed text-gray-400 font-sans font-light">
            Hubcheck’s Inventory Verification Services are carried out based on the information available during the verification and within the agreed scope of work. Verification findings, observations, and supporting information are intended to assist client review processes and should be evaluated alongside your internal policies, operational procedures, and decision-making frameworks.
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
              Let’s Build an Inventory Verification Approach That Works for You
            </h2>
            <p className="text-sm md:text-base text-green-50/90 leading-relaxed font-medium">
              Whether you need inventory verification, warehouse assessments, documentation reviews, stock reconciliation support, or collateral monitoring, Hubcheck can recommend a verification approach that aligns with your operational requirements and agreed scope of work.
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
              src="/images/about/inventory_verification_cta.png"
              alt="Let’s Build an Inventory Verification Approach That Works for You"
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
