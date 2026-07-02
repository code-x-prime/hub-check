'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FancyButton from '@/components/ui/fancy-button'

const CTABanner = () => {
  return (
    <section className="relative py-12 md:py-16 px-6 bg-white border-y border-gray-100 overflow-hidden">
      {/* Soft top/bottom gradients */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-orange-100/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-orange-100/10 via-transparent to-transparent pointer-events-none" />

      {/* Outer Card Wrapper */}
      <div className="max-w-7xl mx-auto bg-[#001c55] rounded-lg p-8 md:p-12  text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-blue-900/15">

        {/* Subtle decorative circles inside card */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#ff6b00] rounded-full blur-2xl opacity-35 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500 rounded-full blur-2xl opacity-35 pointer-events-none" />

        {/* Content - Left */}
        <div className="flex-grow space-y-6 lg:max-w-xl relative z-10">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Build Greater Confidence in Every Warehouse Audit
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-blue-50/90 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Independent warehouse audits provide valuable visibility into warehouse operations, stock information, and collateral-backed assets. Contact Hubcheck today to discuss your warehouse audit requirements and discover an approach aligned with your operational and lending objectives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FancyButton
              href="#contact"
              variant="secondary"
            >
              Contact Hubcheck Today
            </FancyButton>
          </motion.div>
        </div>

        {/* Image Card - Right */}
        <motion.div
          className="flex-grow w-full lg:max-w-[45%] h-64 md:h-80 lg:h-[340px] relative rounded-lg overflow-hidden border border-white/10 shadow-xl bg-[#001c55]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about/cta_warehouse_audit.png"
            alt="Hubcheck Professional Warehouse Inspection"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
          {/* Subtle blue overlay to mesh with styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  )
}

export default CTABanner
