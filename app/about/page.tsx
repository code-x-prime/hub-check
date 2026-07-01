import type { Metadata } from 'next'
import Image from 'next/image'
import FancyButton from '@/components/ui/fancy-button'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

export const metadata: Metadata = {
  title: 'About Us | Trusted Warehouse Audit Partner Since 2015 | Hubcheck',
  description: 'Learn about Hubcheck, an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company providing independent warehouse inspections and audit services since 2015.',
}

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    desc: 'Started with a clear goal to provide independent warehouse audit and verification services that financial institutions could actually trust.'
  },
  {
    year: 'Growth & Expansion',
    title: 'Nationwide Reach',
    desc: 'We’ve grown our team and expanded our reach to support warehouse-backed lending portfolios across the country.'
  },
  {
    year: 'Quality & Security',
    title: 'Industry Certifications',
    desc: 'We achieved ISO 9001 for quality management, ISO 27001 for information security, and completed SOC 2 Audit requirements to maintain high standards in everything we do.'
  },
  {
    year: '2026 & Beyond',
    title: 'Methodology Evolution',
    desc: 'We’re continuing to evolve our methods and support more financial institutions with independent, reliable warehouse verification across India.'
  }
]

const certifications = [
  {
    svgPath: '/icons/9001.svg',
    title: 'ISO 9001 Certified',
    desc: 'Shows our commitment to consistent quality in every service we deliver.'
  },
  {
    svgPath: '/icons/27001.svg',
    title: 'ISO 27001 Certified',
    desc: 'Proves we handle information securely and responsibly.'
  },
  {
    svgPath: '/icons/soc-2.svg',
    title: 'SOC 2 Audited',
    desc: 'Confirms we maintain strong controls around data security and operations.'
  }
]

export default function AboutPage() {
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
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200/50 bg-green-50/50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
              About Hubcheck
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Trusted Warehouse Audit <br />
              <span className="text-[#15803d]">Partner Since 2015</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans">
              Warehouse-backed lending only works well when the underlying information is solid. That’s where independent checks, proper verification, and trustworthy reports come in. Since 2015, Hubcheck has been helping banks, NBFCs, and financial institutions get clear visibility into their warehouse operations through independent assessments and structured verification processes.
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
        </div>
      </section>

      {/* CORE VALUE & DETAILS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left image block */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-green-50">
              <Image
                src="/images/about/why_choose_hubcheck.png"
                alt="Hubcheck Professional Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right text block */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">
                Independent Verification Experts
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Independent Warehouse Audit & <br />Verification Experts
              </h2>
              <div className="space-y-4 text-gray-655 font-sans font-light leading-relaxed">
                <p>
                  We started Hubcheck in 2015 to give banks and NBFCs reliable support for warehouse-backed lending, collateral monitoring, and inventory checks. As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we bring together real industry experience, clear methodologies, and professional reporting.
                </p>
                <p>
                  Our work covers everything from Warehouse Audits, Stock Audits, and Inventory Verification to Warehouse Inspections, Collateral Management Audits, and full Warehouse Due Diligence.
                </p>
                <p>
                  We always work independently, reviewing documents, conducting on-site physical verifications, and delivering clear, organized reports. This helps our clients strengthen their oversight, support internal reviews, and make better-informed lending and business decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-150/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Mission Card */}
            <div className="bg-white border border-gray-150 rounded-lg p-8  space-y-6 shadow-xs text-left">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-green-50 text-[#15803d] relative overflow-hidden">
                <Image src="/icons/our-mission.svg" alt="Our Mission" fill className="object-contain p-2" />
              </div>
              <h3 className="text-lg font-black text-gray-900">Our Mission</h3>
              <p className="text-base text-gray-700 font-sans font-light leading-relaxed">
                To make warehouse-backed lending stronger and more trustworthy by providing independent verification, structured audit processes, and clear reporting that help banks and NBFCs make decisions with greater confidence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-gray-150 rounded-lg p-8  space-y-6 shadow-xs text-left">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-green-50 text-[#15803d] relative overflow-hidden">
                <Image src="/icons/our-vision.svg" alt="Our Vision" fill className="object-contain p-2" />
              </div>
              <h3 className="text-lg font-black text-gray-900">Our Vision</h3>
              <p className="text-base text-gray-700 font-sans font-light leading-relaxed">
                To become India’s most trusted warehouse audit and verification company — known for high standards in independent assessments, operational excellence, strong information security, and practical technology-enabled solutions for the financial sector.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE / HISTORY */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-left">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Our Growth</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Our Journey
            </h2>
            <p className="text-sm text-gray-500 mt-4 font-sans font-light">
              We’ve come a long way since 2015, but our focus has stayed the same: delivering dependable independent warehouse verification for India’s financial sector.
            </p>
          </div>

          <div className="relative border-l border-gray-250 pl-6 ml-4 space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full border-4 border-white bg-[#15803d]" />
                <div className="space-y-1">
                  <span className="text-sm font-black px-2 py-0.5 bg-green-50 text-[#15803d] rounded-full">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                  <p className="text-sm text-gray-550 font-sans font-light leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-12 md:py-16 bg-[#f8fcf9] border-y border-green-150/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Corporate Strength</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Certifications & Compliance
            </h2>
            <p className="text-sm text-gray-500 mt-4 font-sans font-light">
              We take our standards seriously because our clients do too. These certifications reflect the way we work:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
            {certifications.map((item, idx) => {
              return (
                <div key={idx} className="bg-white border border-gray-150 p-8 rounded-lg shadow-xs space-y-4">
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

      {/* CTA BANNER */}
      <section className="py-12 md:py-16 bg-white" id="contact">
        <div className="max-w-5xl mx-auto px-6 text-center bg-gradient-to-br from-green-900 to-emerald-950 rounded-lg p-12  text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800/30 via-transparent to-transparent" />

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Let’s Build Your Confidence in Warehouse Verification
            </h2>
            <p className="text-sm md:text-base text-green-100 leading-relaxed font-sans font-light">
              Whether you need better warehouse visibility, stronger collateral monitoring, accurate inventory validation, or solid operational reviews, Hubcheck is here to help through independent assessments and professional monitoring you can count on.
            </p>
            <div className="pt-4">
              <FancyButton href="/contact" variant="secondary" className="px-8 py-3.5">
                Contact Our Team
              </FancyButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
