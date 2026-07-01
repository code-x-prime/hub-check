import type { Metadata } from 'next'
import Image from 'next/image'
import FancyButton from '@/components/ui/fancy-button'
import FAQAccordion from './FAQAccordion'
import HeroCanvas from '../../services/warehouse-audit/HeroCanvas'

export const metadata: Metadata = {
  title: 'Warehouse Audit Partner for Financial Institutions | Hubcheck',
  description: 'Hubcheck serves as a trusted Warehouse Audit partner for financial institutions, banks, and NBFCs. We provide independent assessments that strengthen warehouse visibility and validate information.',
  keywords: 'Financial Institutions Audit, Warehouse Audit, Stock Verification, Collateral Monitoring, Hubcheck',
}

const solutionsList = [
  {
    title: 'Warehouse Audit',
    desc: 'We conduct independent warehouse audits that strengthen oversight, operational visibility, and collateral-backed financing reviews.',
    img: '/warehouse-audit/s-1.png'
  },
  {
    title: 'Stock Verification',
    desc: 'We validate physical stock against records to improve collateral monitoring and support financing decisions.',
    img: '/stock-audit/s-1.png'
  },
  {
    title: 'Inventory Verification',
    desc: 'We review inventory information through independent verification, enhancing warehouse visibility and operational assessments.',
    img: '/inventory-verification/s-1.png'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We evaluate infrastructure, storage practices, and operational conditions through independent inspections.',
    img: '/warehouse-inspection/s-1.png'
  },
  {
    title: 'Collateral Management Audit',
    desc: 'We support collateral monitoring with warehouse verification, documentation reviews, and structured audit reporting.',
    img: '/collateral-management/s-1.png'
  },
  {
    title: 'Warehouse Due Diligence',
    desc: 'We assess operations, infrastructure, and documentation before financing, acquisitions, or major commercial decisions.',
    img: '/warehouse-due-diligence/s-1.png'
  }
]

const challengesList = [
  {
    title: 'Collateral Visibility',
    desc: 'We improve visibility into warehouse-backed assets through independent verification and structured assessments.'
  },
  {
    title: 'Warehouse Monitoring',
    desc: 'We strengthen oversight with independent audits, inspections, and verification activities.'
  },
  {
    title: 'Stock Validation',
    desc: 'We confirm warehouse stock through physical verification and documentation reviews.'
  },
  {
    title: 'Information Validation',
    desc: 'We enhance financing reviews by independently validating warehouse information.'
  },
  {
    title: 'Operational Risk Visibility',
    desc: 'We identify observations that may need further attention before financing decisions.'
  },
  {
    title: 'Independent Assessments',
    desc: 'We support financing and operational reviews with objective verification and reporting.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Audit Methodology',
    desc: 'We provide objective warehouse assessments designed to strengthen financing and operational review processes.'
  },
  {
    svgPath: '/icons/experience-in-warehouse-finance.svg',
    title: 'Experience Across Warehouse Finance',
    desc: 'We support warehouse financing, commodity-backed lending, and collateral monitoring requirements.'
  },
  {
    svgPath: '/icons/pan-india-operational-network.svg',
    title: 'Pan-India Operational Network',
    desc: 'We offer warehouse audit capabilities across multiple locations through a coordinated network.'
  },
  {
    svgPath: '/icons/reporting-designed-for-financial-reviews.svg',
    title: 'Reporting Designed for Financial Reviews',
    desc: 'We deliver clear reports that document observations, verification findings, and supporting information.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Industry-Focused Expertise',
    desc: 'We bring experience supporting warehouse verification needs across diverse financial institutions.'
  },
  {
    svgPath: '/icons/consistent-assessment-framework.svg',
    title: 'Consistent Assessment Framework',
    desc: 'We use defined methodologies that promote consistency across verification and reporting activities.'
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

const processList = [
  { step: '01', title: 'Understand Requirements', desc: 'We learn about your financing objectives, warehouse details, audit scope, and operational needs before starting the assessment.' },
  { step: '02', title: 'Plan Assessment', desc: 'We develop a structured plan covering warehouse visits, verification activities, documentation reviews, and reporting.' },
  { step: '03', title: 'Warehouse Visit', desc: 'We conduct independent visits to assess facilities, inventory conditions, operational practices, and supporting documentation.' },
  { step: '04', title: 'Verification & Review', desc: 'We verify information, review stock records, validate observations, and assess documents within the agreed scope.' },
  { step: '05', title: 'Reporting', desc: 'We provide organized audit reports with observations, verification findings, and supporting information for your internal review.' }
]

export default function FinancialInstitutionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-green-100/80 via-emerald-50/40 to-white">
        <HeroCanvas />
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-emerald-500/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200/50 bg-green-50/50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
                Corporate Strength
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
                India’s Finest Warehouse Audit <br />
                <span className="text-[#15803d]">Partner for Financial Institutions</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans max-w-2xl">
                Since 2015, Hubcheck has been a trusted Warehouse Audit partner for banks, NBFCs, and financial institutions. We deliver independent Warehouse Audit Services covering warehouse verification, stock verification, documentation reviews, physical inspections, and structured reporting to support informed operational and lending decisions.
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

            {/* Right Image */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <Image
                src="/images/industries/financial_institutions_hero.png"
                alt="Hubcheck Warehouse Audit for Financial Institutions"
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-50 rounded-full blur-3xl -z-10 opacity-70" />
              <div className="bg-green-50/60 border border-green-100 p-8 rounded-lg text-left space-y-2">
                <h4 className="text-4xl font-black text-[#15803d]">2015</h4>
                <p className="text-sm text-gray-500 font-medium">Serving Financial Sectors Since</p>
              </div>
              <div className="bg-gray-50 border border-gray-150 p-8 rounded-lg text-left space-y-2">
                <h4 className="text-4xl font-black text-gray-900">SOC 2</h4>
                <p className="text-sm text-gray-500 font-medium">Audited & Certified Security</p>
              </div>
              <div className="bg-gray-50 border border-gray-150 p-8 rounded-lg text-left space-y-2 col-span-2">
                <h4 className="text-lg font-bold text-gray-900">ISO 27001 & ISO 9001</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Our operations meet strict international quality and security standards.
                </p>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">
                Warehouse Audits Partner That Streamlines Modern Financial Operations
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                About Hubcheck
              </h2>
              <div className="space-y-5 text-gray-650 font-sans font-light">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
                  When it comes to financing, collateral management, and proper decision-making, good warehouse information is essential. Hubcheck serves as a trusted Warehouse Audit partner for financial institutions, providing independent assessments that strengthen warehouse visibility and validate information.
                </p>
                <p className="text-base leading-relaxed">
                  As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we specialize in Warehouse Audits, Stock Verification, Inventory Verification, Warehouse Inspections, Collateral Management Audits, and Warehouse Due Diligence.
                </p>
                <p className="text-base leading-relaxed">
                  We perform physical verification, document reviews, operational assessment and structured reporting. This helps financial institutions improve collateral monitoring, warehouse finance operations, and internal review processes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-150/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Secure Lending Support</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Warehouse Audit Solutions for Financial Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {solutionsList.map((sol, idx) => (
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
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Risk Mitigation</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Financial Challenges We Help Address
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {challengesList.map((ch, idx) => (
              <div key={idx} className="bg-gray-50/50 border border-gray-150 p-8 rounded-lg space-y-4 hover:border-green-300 transition-colors">
                <div className="h-8 w-8 rounded-full bg-green-50 text-[#15803d] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-900">{ch.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-150/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Why Hubcheck</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Why Financial Institutions Choose Hubcheck
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {whyChooseUsList.map((item, idx) => {
              return (
                <div key={idx} className="bg-white border border-gray-150 p-8 rounded-lg space-y-4 hover:shadow-md transition-shadow">
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

      {/* COMMODITIES WE SUPPORT */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Comprehensive Scope</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Commodities We Audit for Financial Institutions
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-sans font-light">
                Hubcheck conducts Warehouse Audit Services across a wide range of commodity storage facilities. We support financial institutions with independent verification and collateral monitoring.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {commoditiesList.map((com, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-lg hover:border-green-200 transition-colors"
                  >
                    <div className="h-6 w-6 relative overflow-hidden flex-shrink-0">
                      <Image src={com.svgPath} alt={com.title} fill className="object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{com.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ENGAGEMENT PROCESS */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-150/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Execution Method</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Our Engagement Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {processList.map((p, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-6 rounded-lg relative shadow-xs space-y-4">
                <span className="text-[10px] font-black px-2 py-1 bg-green-50 text-[#15803d] rounded-full">
                  Step {p.step}
                </span>
                <h3 className="font-bold text-base text-gray-900 pt-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <FAQAccordion />
      </section>

      {/* CTA BANNER */}
      <section className="py-12 md:py-16 bg-[#f8fcf9]" id="contact">
        <div className="max-w-5xl mx-auto px-6 text-center bg-gradient-to-br from-green-900 to-emerald-950 rounded-lg p-12 md:p-16 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800/30 via-transparent to-transparent" />

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Build Greater Confidence in Warehouse-Backed Finance
            </h2>
            <p className="text-sm md:text-base text-green-100 leading-relaxed font-sans font-light">
              Independent warehouse audits strengthen collateral visibility, warehouse monitoring, and operational confidence. Contact Hubcheck to discuss your warehouse audit requirements and develop an assessment approach aligned with your financing objectives.
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
