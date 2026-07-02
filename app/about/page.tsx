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
    year: 'Quality & Information Security',
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
    svgPath: '/icons/soc.svg',
    title: 'SOC 2 Audited',
    desc: 'Confirms we maintain strong controls around data security and operations.'
  }
]

export default function AboutPage() {
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
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200/50 bg-orange-50/50 text-sm font-semibold uppercase tracking-wider text-[#ff6b00]">
              About Hubcheck
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Trusted Warehouse Audit <br />
              <span className="text-[#001c55]">Partner Since 2015</span>
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
      <section className="relative py-12 md:py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left image block */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-blue-50">
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
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">
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
      <section className="relative py-16 md:py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Side: Title & Underline (col-span-4) */}
            <div className="lg:col-span-4 text-left space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.05]">
                Our Mission <br />& Vision
              </h2>
              {/* Double underline decoration */}
              <div className="space-y-1 pt-2 w-32">
                <div className="h-1.5 bg-[#001c55] w-full rounded" />
                <div className="h-1.5 bg-[#ff6b00] w-2/3 rounded" />
              </div>
            </div>

            {/* Right Side: Process Blocks (col-span-8) */}
            <div className="lg:col-span-8 space-y-8">

              {/* Row 1: Mission */}
              <div className="bg-[#f0f4fa] border border-blue-50/50 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow pr-8 rounded-2xl md:rounded-full">
                {/* Circle Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white bg-blue-100 flex-shrink-0 relative overflow-hidden shadow-sm">
                  <Image
                    src="/images/about/why_choose_hubcheck.png"
                    alt="Hubcheck Mission"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div className="text-left space-y-1">
                  <h3 className="text-xl font-extrabold text-[#001c55]">Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans font-light">
                    To make warehouse-backed lending stronger and more trustworthy by providing independent verification, structured audit processes, and clear reporting that help banks and NBFCs make decisions with greater confidence.
                  </p>
                </div>
              </div>

              {/* Row 2: Vision */}
              <div className="bg-[#f5f2e6]/60 border border-orange-50/50 p-6 flex flex-col md:flex-row-reverse items-center gap-6 shadow-sm hover:shadow-md transition-shadow pl-8 rounded-2xl md:rounded-full">
                {/* Circle Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white bg-orange-100 flex-shrink-0 relative overflow-hidden shadow-sm">
                  <Image
                    src="/images/about/due_diligence_about.png"
                    alt="Hubcheck Vision"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div className="text-left space-y-1 flex-grow">
                  <h3 className="text-xl font-extrabold text-[#ff6b00]">Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans font-light">
                    To become India’s most trusted warehouse audit and verification company — known for high standards in independent assessments, operational excellence, strong information security, and practical technology-enabled solutions for the financial sector.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE / HISTORY */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden border-y border-gray-100">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">Our Growth</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
              Our Journey
            </h2>
            <p className="text-sm text-gray-500 mt-4 font-sans font-light">
              We’ve come a long way since 2015, but our focus has stayed the same: delivering dependable independent warehouse verification for India’s financial sector.
            </p>
          </div>

          {/* Quadrant layout container */}
          <div className="relative min-h-[500px] flex items-center justify-center">

            {/* Desktop Crosshairs & Center Circle */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
              {/* Vertical line */}
              <div className="absolute h-full w-[1px] bg-gray-250" />
              {/* Horizontal line */}
              <div className="absolute w-full h-[1px] bg-gray-250" />
              {/* Center Circle */}
              <div className="absolute w-44 h-44 rounded-full bg-[#001c55] border-8 border-white shadow-xl flex items-center justify-center z-20">
                <span className="text-white text-center font-bold text-sm tracking-widest px-4 uppercase">
                  Hubcheck<br />Journey
                </span>
              </div>
            </div>

            {/* Grid of 4 Quadrants */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-24 relative z-10">

              {/* Quadrant 1: Top-Left */}
              <div className="flex flex-col justify-end md:text-right space-y-2 max-w-md md:ml-auto pr-0 md:pr-10">
                <div className="flex items-center md:justify-end gap-2">
                  <span className="text-xs font-black px-2.5 py-1 bg-orange-50 text-[#ff6b00] rounded-full uppercase tracking-wider">
                    {milestones[0].year}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{milestones[0].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">{milestones[0].desc}</p>
              </div>

              {/* Quadrant 2: Top-Right */}
              <div className="flex flex-col justify-end text-left space-y-2 max-w-md md:mr-auto pl-0 md:pl-10">
                <div className="flex items-center justify-start gap-2">
                  <span className="text-xs font-black px-2.5 py-1 bg-blue-50 text-[#001c55] rounded-full uppercase tracking-wider">
                    {milestones[1].year}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{milestones[1].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">{milestones[1].desc}</p>
              </div>

              {/* Quadrant 3: Bottom-Left */}
              <div className="flex flex-col justify-start md:text-right space-y-2 max-w-md md:ml-auto pr-0 md:pr-10 md:pt-4">
                <div className="flex items-center md:justify-end gap-2">
                  <span className="text-xs font-black px-2.5 py-1 bg-blue-50 text-[#001c55] rounded-full uppercase tracking-wider">
                    {milestones[2].year}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{milestones[2].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">{milestones[2].desc}</p>
              </div>

              {/* Quadrant 4: Bottom-Right */}
              <div className="flex flex-col justify-start text-left space-y-2 max-w-md md:mr-auto pl-0 md:pl-10 md:pt-4">
                <div className="flex items-center justify-start gap-2">
                  <span className="text-xs font-black px-2.5 py-1 bg-orange-50 text-[#ff6b00] rounded-full uppercase tracking-wider">
                    {milestones[3].year}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{milestones[3].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">{milestones[3].desc}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="relative py-20 md:py-28 bg-white border-y border-gray-100 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Left Side: 9:16 Aspect Ratio Banner Block (col-span-4) */}
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[350px] lg:min-h-full shadow-xl bg-[#001c55] text-white p-8 flex flex-col justify-end group">
              <Image
                src="/images/about/nbfc_officer.png"
                alt="Corporate Strength"
                fill
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#001c55]/80 pointer-events-none -z-10" />

              <div className="relative z-10 space-y-4">
                <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
                  Corporate Strength
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Certifications <br />& Compliance
                </h2>
                <p className="text-sm text-blue-100/80 leading-relaxed font-sans font-light">
                  We take our standards seriously because our clients do too. These certifications reflect the way we work:
                </p>
              </div>
            </div>

            {/* Right Side: Horizontal Stack of Cards (col-span-8) */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-6">
              {certifications.map((item, idx) => {
                const colors = idx % 2 === 0 ? 'text-[#ff6b00]' : 'text-[#001c55]';
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-150 rounded-2xl p-6 md:p-8 flex flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow text-left"
                  >
                    {/* Giant Number */}
                    <div className={`font-black text-5xl md:text-7xl select-none font-sans ${colors} w-16 md:w-24 flex-shrink-0 text-center`}>
                      {`0${idx + 1}`}
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <Image src={item.svgPath} alt={item.title} fill className="object-contain" />
                        </div>
                        <h3 className="font-extrabold text-lg md:text-xl text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-550 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-12 md:py-16 bg-white border-y border-gray-100 overflow-hidden" id="contact">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center bg-[#001c55] rounded-lg p-12  text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Let’s Build Your Confidence in Warehouse Verification
            </h2>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed font-sans font-light">
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
