'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Commodities = () => {
  const commodities = [
    {
      svgPath: '/icons/rice.svg',
      title: 'Rice',
      description: 'Warehouse audits for stored rice, including stock records, inventory checks, and collateral-backed operations.',
      highlight: true
    },
    {
      svgPath: '/icons/wheat.svg',
      title: 'Wheat',
      description: 'Independent warehouse verification for wheat storage facilities, supporting inventory validation and warehouse monitoring.',
      highlight: false
    },
    {
      svgPath: '/icons/cotton.svg',
      title: 'Cotton',
      description: 'Warehouse audit services for cotton storage, stock verification, and information validation.',
      highlight: false
    },
    {
      svgPath: '/icons/sugar.svg',
      title: 'Sugar',
      description: 'Structured warehouse verification for sugar warehouses with physical stock assessment, document review, and reporting.',
      highlight: false
    },
    {
      svgPath: '/icons/pulses.svg',
      title: 'Pulses',
      description: 'Independent warehouse audits for pulse storage that cover stock verification, inventory validation, and warehouse reviews.',
      highlight: false
    },
    {
      svgPath: '/icons/other-commodities.svg',
      title: 'Other Commodities',
      description: 'Warehouse Audit Services for oilseeds, maize, spices, fertilizers, and other commodities through proper verification and reporting.',
      highlight: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  }

  return (
    <section id="commodities" className="relative py-12 md:py-16 px-6 bg-white border-y border-gray-100 overflow-hidden">
      {/* Soft top/bottom gradients */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Panel: Outside Title & Badges (col-span-4) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Commodities We Support
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Independent verification and auditing across multi-grade agricultural and industrial inventory.
              </p>
            </div>

            {/* Status Pills */}
            <div className="flex flex-col gap-3 max-w-xs">
              <div className="bg-gray-900 text-white rounded-lg px-5 py-3 font-semibold text-sm tracking-wider flex items-center gap-2.5 shadow-sm">
                <Check size={14} className="text-[#ff6b00]" />
                AGRICULTURAL STOCK
              </div>
              <div className="bg-gray-900 text-white rounded-lg px-5 py-3 font-semibold text-sm tracking-wider flex items-center gap-2.5 shadow-sm">
                <Check size={14} className="text-[#ff6b00]" />
                SECURED COLLATERAL
              </div>
              <div className="bg-gray-900 text-white rounded-lg px-5 py-3 font-semibold text-sm tracking-wider flex items-center gap-2.5 shadow-sm">
                <Check size={14} className="text-[#ff6b00]" />
                PAN-INDIA VERIFICATION
              </div>
            </div>

            {/* Stamp Logo Badges */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm relative overflow-hidden">
                <Image src="/icons/wheat.svg" alt="Wheat badge" fill className="object-contain p-2" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm relative overflow-hidden">
                <Image src="/icons/rice.svg" alt="Rice badge" fill className="object-contain p-2" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm relative overflow-hidden">
                <Image src="/icons/cotton.svg" alt="Cotton badge" fill className="object-contain p-2" />
              </div>
            </div>
          </div>

          {/* Right Panel: White Card Container with Grid (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-lg p-6 sm:p-10 lg:p-12 shadow-xl shadow-gray-100/40 relative overflow-hidden">

            {/* Header inside the white card */}
            <div className="max-w-xl mb-12">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug">
                Inventory Audits For Varied Grains & Crops
              </h3>
              <p className="text-sm text-gray-500 mt-3 font-medium leading-relaxed">
                We handle physical stock verification, documentation checks, and quality-grade reporting to help lenders mitigate risk.
              </p>
            </div>

            {/* 1px Blueprint Grid of Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {commodities.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href="/contact"
                    className="block focus:outline-none"
                  >
                    <motion.div
                      variants={itemVariants}
                      className={`p-8 flex flex-col justify-between min-h-[220px] h-full transition-all duration-300 group cursor-pointer ${item.highlight
                        ? 'bg-[#001c55] text-white'
                        : 'bg-white hover:bg-[#001c55] text-gray-900 hover:text-white'
                        }`}
                    >
                      <div>
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${item.highlight
                          ? 'bg-green-600'
                          : 'bg-green-50 group-hover:bg-green-600'
                          }`}>
                          <Image
                            src={item.svgPath}
                            alt={item.title}
                            width={35}
                            height={35}
                            className={`transition-all duration-300 object-contain ${item.highlight
                              ? 'brightness-0 invert'
                              : 'group-hover:brightness-0 group-hover:invert'
                              }`}
                          />
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-bold tracking-tight mb-2">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className={`text-sm leading-relaxed font-sans transition-colors duration-300 ${item.highlight ? 'text-green-100' : 'text-gray-500 group-hover:text-green-100'
                          }`}>
                          {item.description}
                        </p>
                      </div>

                      {/* Learn More link */}
                      <div className="pt-6">
                        <div className={`inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${item.highlight
                          ? 'text-white hover:text-green-200'
                          : 'text-[#15803d] group-hover:text-white hover:text-green-200'
                          }`}>
                          <span>Verify Stock</span>
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                        </div>
                      </div>

                    </motion.div>
                  </Link>
                )
              })}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Commodities
