
import type { Metadata } from 'next'
import Image from 'next/image'
import FancyButton from '@/components/ui/fancy-button'
import { Shield, Users, BarChart3, Globe, Cpu, Clock, Check } from 'lucide-react'
import FAQAccordion from './FAQAccordion'
import HeroCanvas from './HeroCanvas'
import ServicesGrid from '@/components/ServicesGrid'


export const metadata: Metadata = {
  title: 'Warehouse Audit Services for Better Lending Confidence | Hubcheck',
  description: "Since 2015, Hubcheck has delivered independent Warehouse Audit Services that help banks, NBFCs, and financial institutions strengthen warehouse verification through physical inspections, documentation reviews, and structured reporting.",
  keywords: 'Warehouse Audit Services, Stock Verification, Inventory Verification, Warehouse Inspection, Collateral Assessment Support, Warehouse Due Diligence, Hubcheck',
}

const auditServiceIncludes = [
  'Physical Warehouse Verification',
  'Stock Verification',
  'Inventory Verification',
  'Warehouse Inspection',
  'Documentation Review',
  'Collateral Assessment Support',
  'Warehouse Due Diligence',
  'Audit Reporting'
]

const servicesList = [
  {
    title: 'Physical Warehouse Audit',
    desc: 'We support warehouse monitoring through structured physical audits that validate conditions, operational practices, inventory observations, and other information required by financial institutions.'
  },
  {
    title: 'Stock Verification',
    desc: 'We independently check physical stock against warehouse records and documents to improve stock visibility, collateral monitoring, and internal review processes.'
  },
  {
    title: 'Inventory Verification',
    desc: 'We validate inventory records through clear inventory verification activities that support accuracy, warehouse monitoring, and operational assessments.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We conduct systematic warehouse inspections to review storage conditions, infrastructure, inventory handling, and operational practices through independent verification.'
  },
  {
    title: 'Documentation Review',
    desc: 'We examine warehouse documents, inventory records, stock registers, and supporting information to help strengthen warehouse information validation.'
  },
  {
    title: 'Collateral Assessment Support',
    desc: 'We help with collateral monitoring through structured warehouse verification, stock observations, document review, and reporting that fits operational and lending review needs.'
  },
  {
    title: 'Warehouse Due Diligence',
    desc: 'We provide warehouse due diligence support through operational assessments, document reviews, physical verification, and information validation prior to important business or lending decisions.'
  },
  {
    title: 'Audit Reporting',
    desc: 'We deliver clear audit reports that document warehouse observations, verification findings, supporting details, and assessment outcomes to help with internal review and decision-making.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Warehouse Audit Specialists',
    desc: 'We focus on warehouse audits, stock verification, inventory verification, warehouse inspections, and collateral management audits for financial institutions.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Audit Team',
    desc: 'Our professionals follow structured warehouse audit methodologies to deliver consistent verification, inspection, and reporting services.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Structured Audit Methodology',
    desc: 'Every warehouse audit follows defined procedures that support transparency, consistency, and proper validation of information.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Operations',
    desc: 'Hubcheck handles warehouse audit requirements across multiple locations through a well-coordinated network.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Independent Reporting',
    desc: 'We provide structured audit reports that clearly document observations, verification findings, and supporting information for easy client review.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Technology-Driven Processes',
    desc: 'We use technology-enabled workflows to make warehouse audits, documentation, verification, and reporting more efficient while maintaining consistency.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'We support warehouse audits, collateral verification, stock assessment, and warehouse monitoring through structured verification, physical inspections, and independent reporting tailored for banking institutions.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured Warehouse Audit Services that help NBFCs strengthen warehouse verification, inventory validation, collateral monitoring, and internal review processes through independent assessments.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent warehouse verification, stock audits, warehouse inspections, and due diligence services designed to strengthen warehouse information validation, operational oversight, and lending review requirements.'
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

export default function WarehouseAuditServicesPage() {
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
                Secured Lending Confidence
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Warehouse Audit Services for{' '}
                <span className="text-[#15803d]">Better Lending Confidence</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                Inaccurate warehouse records, stock mismatches, and poor collateral visibility can create real problems in lending, monitoring, and risk assessment. Since 2015, Hubcheck has delivered independent Warehouse Audit Services that help banks, NBFCs, and financial institutions strengthen warehouse verification through physical inspections, documentation reviews, and structured reporting.
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
                src="/images/about/warehouse_inspection_about.png"
                alt="Hubcheck Professional Warehouse Audit and Stock Verification"
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
                    alt="Hubcheck Barcode Audit Scanner"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-150 h-44 w-full bg-green-50">
                  <Image
                    src="/images/about/audit_files.png"
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
                    alt="Physical verification audit"
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
                About Hubcheck: Leading Warehouse Audit Service Company
              </h2>

              <div className="space-y-5 text-gray-600 font-sans font-light">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
                  Hubcheck works with banks, NBFCs, and financial institutions by delivering structured Warehouse Audit Services that strengthen warehouse verification, stock assessment, collateral monitoring, and information validation.
                </p>
                <p className="text-base leading-relaxed">
                  As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we provide warehouse audits, stock audits, inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence services. This helps organizations build consistent warehouse review systems.
                </p>
                <p className="text-base leading-relaxed">
                  Through independent checks, on-ground physical inspections, document reviews, and straightforward reporting, Hubcheck helps clients get better warehouse visibility and supports smarter operational and lending decisions.
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
                Strengthen Warehouse Oversight Through Independent Warehouse Audit Services
              </h3>

              <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Warehouses play a key role in secured lending, collateral management, and inventory monitoring. Maintaining accurate warehouse information is crucial for teams that review pledged assets, track inventory, and conduct internal risk assessments.
                </p>
                <p>
                  Hubcheck’s Warehouse Audit Services focus on structured physical inspections, stock validation, documentation reviews, inventory assessment, and clear reporting. Our independent approach helps financial institutions strengthen warehouse information validation and meet their internal monitoring and operational review needs.
                </p>
                <p>
                  Whether you work with banks, NBFCs, or other financial institutions, Hubcheck delivers practical warehouse audit services that match your operational requirements and audit goals.
                </p>
              </div>
            </div>

            {/* Right lists card (col-span-5) */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-lg p-8 shadow-sm text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">What are Warehouse Audit Services?</h4>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Warehouse Audit Services mean a thorough assessment of warehouse operations, physical inventory, supporting documents, storage conditions, and records to validate information and support internal reviews.
              </p>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                Warehouse audits enable organizations to independently verify warehouse details through physical verification, inventory validation, document assessment, and structured reporting. Financial institutions often use these services for warehouse monitoring, collateral oversight, and operational reviews.
              </p>

              <h5 className="text-sm font-bold uppercase tracking-widest text-[#15803d] mb-4">Warehouse Audit Services may include the following:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {auditServiceIncludes.map((item, idx) => (
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
              Our Warehouse Audit Services
            </h2>
          </div>

          <ServicesGrid services={servicesList} serviceSlug="warehouse-audit" />

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-100/40">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Corporate Strength</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
              Why Choose Hubcheck as your Trusted Warehouse Audit Company?
            </h2>
            <p className="text-base text-gray-500 font-sans font-light mt-4">
              Hubcheck is a specialized Warehouse Audit company that provides independent warehouse verification, stock audit, inventory verification, collateral management audit, and warehouse due diligence services for banks, NBFCs, and financial institutions across India.
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
                  <span className="text-sm font-bold uppercase tracking-widest text-[#15803d]">Audits Active</span>
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
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Warehouse Oversight</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Warehouse Audit Expertise Across Commodity Storage Facilities
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Commodity-backed lending depends on reliable warehouse information, independent verification, and effective warehouse oversight. Hubcheck supports commodity storage facilities with independent Warehouse Audit Services that improve warehouse verification, collateral monitoring, and information validation.
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
              Let’s Discuss Your Warehouse Audit Requirements
            </h2>
            <p className="text-sm md:text-base text-green-50/90 leading-relaxed font-medium">
              Whether you need warehouse audits, stock verification, inventory verification, warehouse inspections, collateral management audits, or warehouse due diligence services, our team can recommend the right approach to meet your operational and business needs.
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
              alt="Discussing Warehouse Audit Services"
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
