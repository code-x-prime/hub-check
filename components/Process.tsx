'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FancyButton from '@/components/ui/fancy-button'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Requirement Assessment',
      description: 'We first understand your audit goals, operational needs, and exact scope of work.',
      image: '/images/process/step1_planning.png'
    },
    {
      number: '02',
      title: 'Audit Planning',
      description: 'We plan the activities, required documents, and verification approach.',
      image: '/images/about/why_choose_hubcheck.png'
    },
    {
      number: '03',
      title: 'Warehouse Visit',
      description: 'We conduct warehouse visits in accordance with the agreed audit scope.',
      image: '/images/about/warehouse_inspection_about.png'
    },
    {
      number: '04',
      title: 'Physical Verification',
      description: 'We check stock, inventory, warehouse conditions, and other operational details on site.',
      image: '/images/process/step3_verification.png'
    },
    {
      number: '05',
      title: 'Documentation Review',
      description: 'We examine warehouse records, supporting papers, and available information.',
      image: '/images/about/audit_files.png'
    },
    {
      number: '06',
      title: 'Reporting',
      description: 'We deliver clear audit reports with observations and supporting details for your review.',
      image: '/images/process/step4_reporting.png'
    }
  ]

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
    <section id="process" className="py-12 md:py-16 px-6 bg-[#f3faf5] border-y border-green-100/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header - 2 Column Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-gray-100 pb-12 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-[#15803d]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#15803d]">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
              Our Audit Process
            </h2>
          </div>
          <div className="mt-6 lg:mt-0 lg:max-w-md">
            <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
              A structured, transparent, and process-driven approach to every warehouse audit engagement.
            </p>
          </div>
        </div>

        {/* 3 Column Grid of Rounded Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden min-h-[220px] sm:min-h-[280px] flex items-center justify-between p-8 md:p-10 text-white shadow-lg group bg-green-950"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${step.image})` }}
              />

              {/* Tint overlay for readability */}
              <div className="absolute inset-0 bg-[#0c2214]/80 group-hover:bg-[#0c2214]/75 transition-colors duration-300 pointer-events-none" />

              {/* Giant Outline/Translucent Number - Left (1/3 size) */}
              <div className="text-7xl sm:text-9xl font-black text-white/10 select-none relative z-10 font-sans tracking-tighter leading-none pr-4">
                {step.number}
              </div>

              {/* Step Info Content - Right (2/3 size) */}
              <div className="relative z-10 flex-grow space-y-3 max-w-[70%] text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-sm text-green-50/80 leading-relaxed font-light font-sans">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 pt-12 gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#15803d]">Ready to get started?</h4>
            <p className="text-sm text-gray-500 font-medium">
              Simple onboarding, direct communication, and rapid turnaround.
            </p>
          </div>
          <FancyButton href="#contact">
            Book a Consultation
          </FancyButton>
        </div>

      </div>
    </section>
  )
}

export default Process
