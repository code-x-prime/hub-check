'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Counter from '@/components/ui/Counter'

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  }

  return (
    <section id="why" className="py-12 md:py-16 px-6 bg-[#f0fbf4] border-y border-green-150/40 relative overflow-hidden">

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title & Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Choose Hubcheck for Warehouse Audit Services?
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-medium max-w-2xl leading-relaxed">
            Decades of combined expertise in warehouse audits, collateral validation, and independent stock verification services.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >

          {/* Dashboard - Left (col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between">

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 1: Brand Green Stat Card (Specialists) */}
              <motion.div
                variants={itemVariants}
                className="bg-[#15803d] text-white p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-lg shadow-green-700/5 relative overflow-hidden text-left"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-green-600 rounded-full blur-xl opacity-50" />
                <div className="space-y-2 z-10">
                  <h4 className="text-lg font-bold tracking-tight text-white">Warehouse Audit Specialists</h4>
                  <p className="text-sm text-green-100 leading-relaxed font-light font-sans">
                    We focus on warehouse audits, stock and inventory verifications, and collateral assessments.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 mt-6 z-10 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wider text-green-200">Accuracy</span>
                  <span className="text-3xl font-black leading-none"><Counter value="98%" /></span>
                </div>
              </motion.div>

              {/* Card 2: Light Gray Stat Card (Pan India) */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 border border-gray-100 text-gray-900 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-sm text-left"
              >
                <div className="space-y-2">
                  <h4 className="text-lg font-bold tracking-tight text-gray-900">Pan India Operations</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light font-sans">
                    We handle warehouse audit requirements across many locations through a well-coordinated network.
                  </p>
                </div>
                <div className="border-t border-gray-200/60 pt-4 mt-6 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Audited Sites</span>
                  <span className="text-3xl font-black text-[#15803d] leading-none"><Counter value="500+" /></span>
                </div>
              </motion.div>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-6">

              {/* Card 3: 24/7 Light Gray/Blue Card (Methodology) (col-span-3) */}
              <motion.div
                variants={itemVariants}
                className="sm:col-span-4 bg-gray-50 border border-gray-100 text-gray-900 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-sm text-left"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-bold tracking-tight text-gray-900 leading-snug">Structured Audit Methodology</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light font-sans">
                    Clear audit processes that ensure consistency, transparency, and proper validation of information.
                  </p>
                </div>
                <div className="border-t border-gray-200/60 pt-3 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Monitoring</span>
                  <span className="text-xl font-black text-[#15803d] leading-none"><Counter value="24/7" /></span>
                </div>
              </motion.div>

              {/* Card 4: Quote Card (Experienced Team) (col-span-5) */}
              <motion.div
                variants={itemVariants}
                className="sm:col-span-4 bg-white border border-gray-100 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-sm text-left"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-bold tracking-tight text-gray-900 leading-snug">Experienced Audit Team</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light font-sans">
                    Skilled professionals who follow structured methods for warehouse verification, inspection, and reporting.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#15803d]">
                    Specialist Officers
                  </span>
                </div>
              </motion.div>

              {/* Card 5: Light Green Stat Card (Tech Processes) (col-span-3) */}
              <motion.div
                variants={itemVariants}
                className="sm:col-span-4 bg-green-50/60 border border-green-100 text-gray-900 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-sm text-left"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-bold tracking-tight text-gray-900 leading-snug">Technology-Driven Processes</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-light font-sans">
                    We use technology to make warehouse audits, documentation, and reporting more efficient.
                  </p>
                </div>
                <div className="border-t border-green-200/50 pt-3 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803d]">Verification</span>
                  <span className="text-xl font-black text-[#15803d] leading-none"><Counter value="100%" /></span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Tall Image Pane - Right (col-span-4) (Independent Reporting) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 relative rounded-lg overflow-hidden min-h-[360px] lg:min-h-full w-full bg-green-50 border border-gray-100 shadow-md flex flex-col justify-end group text-left"
          >
            <Image
              src="/images/about/why_choose_hubcheck.png"
              alt="Hubcheck Professional Client Relations"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8 text-white space-y-2 mt-auto">
              <h4 className="font-bold text-lg text-white">Independent Reporting</h4>
              <p className="text-sm text-green-100 leading-relaxed font-light font-sans">
                Structured reports that clearly document observations and supporting details for easy client review.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs
