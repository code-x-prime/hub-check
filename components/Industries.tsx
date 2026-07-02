'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Counter from '@/components/ui/Counter'

const Industries = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const }
    }
  }

  return (
    <section id="industries" className="relative py-12 md:py-16 px-6 bg-white border-y border-gray-100 overflow-hidden">
      {/* Soft top/bottom gradients */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header - Staggered Bento style */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff6b00]">The Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6">
            Independent Verification for Secured Lending
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Providing banks, NBFCs, and financial institutions with structured warehouse audit services to strengthen risk monitoring.
          </p>
        </div>

        {/* Staggered Horizontal line divider */}
        <div className="border-t border-gray-200/60 my-10 max-w-4xl mx-auto" />

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >

          {/* COLUMN 1: Banks & Scanner Image */}
          <div className="space-y-6 lg:space-y-8 flex flex-col">

            {/* Box 1: Banks Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-orange-50/20 border border-orange-100 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-sm flex-grow"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Banks</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                  We provide warehouse audits, collateral verification, and stock assessment support designed to support collateral monitoring, warehouse verification, and lending review requirements.
                </p>
              </div>
              <div className="border-t border-orange-200/40 pt-4 mt-6">
                <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">
                  <Counter value="25+" /> Commercial Banks
                </span>
              </div>
            </motion.div>

            {/* Box 2: Scanner Image */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden min-h-[260px] shadow-md border border-gray-200/50 bg-orange-50/10"
            >
              <Image
                src="/images/about/scanner_check.png"
                alt="Hubcheck Barcode Scanner Verification"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </motion.div>

          </div>

          {/* COLUMN 2: Tall Central Card (NBFCs) */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-lg overflow-hidden min-h-[380px] lg:h-full w-full bg-[#001c55] p-8 md:p-10 flex flex-col justify-between text-white shadow-xl lg:min-h-[500px]"
          >
            {/* Background Image underlay */}
            <Image
              src="/images/about/nbfc_officer.png"
              alt="Hubcheck Auditor Inspection"
              fill
              className="object-cover opacity-35"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            {/* Dark navy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#001c55]/95 via-[#001c55]/85 to-[#001c55]/95 pointer-events-none" />

            {/* Top Stat */}
            <div className="relative z-10">
              <span className="text-5xl md:text-6xl font-black tracking-tight leading-none text-white block">
                <Counter value="99%" />
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-orange-400 mt-2 block">
                LTV Verification Rate
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-3 mt-12">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                NBFCs
              </h3>
              <p className="text-sm md:text-sm text-blue-100/80 leading-relaxed font-sans font-light">
                Structured warehouse verification and audit services that help with lending, monitoring, and collateral review processes.
              </p>
            </div>
          </motion.div>

          {/* COLUMN 3: Document Image & Financial Institutions */}
          <div className="space-y-6 lg:space-y-8 flex flex-col">

            {/* Box 4: Office Files Image */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden min-h-[260px] shadow-md border border-gray-200/50 bg-orange-50/10"
            >
              <Image
                src="/images/about/audit_files.png"
                alt="Hubcheck Verification Documents"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </motion.div>

            {/* Box 5: Financial Institutions Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 border border-gray-100 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-sm flex-grow"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Institutions</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                  Independent warehouse audit and verification services that strengthen information validation and risk review frameworks.
                </p>
              </div>
              <div className="border-t border-gray-200/80 pt-4 mt-6">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  <Counter value="100%" /> Independent Audits
                </span>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Industries
