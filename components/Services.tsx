'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, BarChart3, CheckCircle2, ClipboardList, Lock, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      svgPath: '/icons/warehouse-audit-services.svg',
      title: 'Warehouse Audit Services',
      description: 'Independent warehouse audit services that help financial institutions improve warehouse verification, collateral visibility, stock assessment, and internal reviews through careful inspections and proper reporting.',
      image: '/images/about/warehouse_inspection_about.png',
      overlay: {
        title: 'Inspection Logs',
        badge: 'Audit Active',
        items: [
          { label: 'On-Ground Inspection', value: '100% Done' },
          { label: 'Verification Officer', value: 'Assigned' },
          { label: 'GPS Geotagging', value: 'Verified' }
        ]
      }
    },
    {
      id: 1,
      svgPath: '/icons/stock-audit-services.svg',
      title: 'Stock Audit Services',
      description: 'Structured stock audit services that support physical stock verification, quantity checks, document reviews, and reporting needs across different warehouse operations.',
      image: '/images/about/stock_verification_about.png',
      overlay: {
        title: 'Verified Stocks',
        badge: 'Count Verified',
        items: [
          { label: 'Rice Silos Count', value: '2,450 MT' },
          { label: 'Wheat Bags Count', value: '1,890 MT' },
          { label: 'Record Discrepancy', value: '0.00%' }
        ]
      }
    },
    {
      id: 2,
      svgPath: '/icons/inventory-verification.svg',
      title: 'Inventory Verification',
      description: 'Independent inventory verification services that validate inventory records, check actual physical stock, and confirm warehouse information using clear verification methods.',
      image: '/images/about/collateral_monitoring_about.png',
      overlay: {
        title: 'Inventory Stats',
        badge: 'Validated',
        items: [
          { label: 'Active Records', value: 'Verified' },
          { label: 'Physical Check', value: 'Approved' },
          { label: 'Data Discrepancy', value: 'None' }
        ]
      }
    },
    {
      id: 3,
      svgPath: '/icons/warehouse-inspection.svg',
      title: 'Warehouse Inspection',
      description: 'Independent warehouse inspections that evaluate storage conditions, storage setup, documents, and overall warehouse verification requirements.',
      image: '/images/about/due_diligence_about.png',
      overlay: {
        title: 'Inspection Check',
        badge: 'Certified',
        items: [
          { label: 'Storage Setup', value: 'Optimal' },
          { label: 'Documents Check', value: 'Complete' },
          { label: 'Safety Guidelines', value: 'Passed' }
        ]
      }
    },
    {
      id: 4,
      svgPath: '/icons/collateral-management-audit.svg',
      title: 'Collateral Management Audit',
      description: 'Collateral management audit services support collateral verification, warehouse monitoring, and information validation for financial institutions.',
      image: '/images/about/scanner_check.png',
      overlay: {
        title: 'Collateral Stats',
        badge: 'LTV Monitored',
        items: [
          { label: 'Active LTV Ratio', value: '72%' },
          { label: 'Collateral Value', value: 'Monitored' },
          { label: 'Risk Rating', value: 'Low Risk' }
        ]
      }
    },
    {
      id: 5,
      svgPath: '/icons/warehouse-due-diligence.svg',
      title: 'Warehouse Due Diligence',
      description: 'Independent warehouse due diligence services that help with warehouse assessments, operational reviews, document checks, and validation before important business decisions.',
      image: '/images/about/audit_files.png',
      overlay: {
        title: 'Compliance Checklist',
        badge: 'Approved',
        items: [
          { label: 'Land Registry Check', value: 'Clear Title' },
          { label: 'Structural Safety', value: 'Certified' },
          { label: 'Fire Safety NOC', value: 'Active' }
        ]
      }
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeTab, services.length])

  return (
    <section id="services" className="py-12 md:py-16 px-6 bg-[#e8f7ed] border-y border-green-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-1 bg-[#15803d]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#15803d]">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-4">
            Our Warehouse Audit Services
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
            Independent inspections and physical stock verification protecting assets and lending values.
          </p>
        </div>

        {/* Interactive Timeline Switcher Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT: Dynamic Image Showcase & Floating Stats Overlay (col-span-6) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[460px] w-full">

            {/* Background Blob decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-50 rounded-full blur-3xl -z-10 opacity-70" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative w-full aspect-[1/1] rounded-lg overflow-hidden shadow-xl border border-gray-100 bg-green-50/50"
              >
                {/* Main Showcase Image */}
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />

                {/* Soft gradient overlay inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Floating Overlay Detail Card inside the Image Frame */}
                <motion.div
                  className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-64 bg-white/90 backdrop-blur-md rounded-lg p-5 border border-white/60 shadow-lg text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="flex items-center justify-between border-b border-gray-150/50 pb-2 mb-3">
                    <span className="text-sm font-extrabold uppercase tracking-wider text-gray-400">
                      {services[activeTab].overlay.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-[#15803d] rounded-full">
                      {services[activeTab].overlay.badge}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {services[activeTab].overlay.items.map((stat, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-sm font-semibold">
                        <span className="text-gray-500">{stat.label}</span>
                        <span className="text-gray-900 font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT: Switchable Timeline Steps List (col-span-6) */}
          <div className="lg:col-span-6 flex gap-6 relative">

            {/* Vertical timeline line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100 -z-10" />

            <div className="space-y-8 w-full">
              {services.map((item, index) => {
                const isActive = activeTab === index

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setActiveTab(index)}
                    className="flex gap-6 items-start group cursor-pointer text-left"
                  >
                    {/* Circle icon marker on the timeline */}
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 z-10 transition-all duration-300 ${isActive
                      ? 'bg-[#15803d] text-white shadow-md shadow-green-700/20 scale-110'
                      : 'bg-white border border-gray-200 text-gray-400 group-hover:border-gray-300'
                      }`}>
                      <Image
                        src={item.svgPath}
                        alt={item.title}
                        width={35}
                        height={35}
                        className={`transition-all duration-300 object-contain ${isActive ? 'brightness-0 invert' : ''}`}
                      />
                    </div>

                    {/* Content text block */}
                    <div className="space-y-1.5 pt-1 flex-grow border-b border-gray-50 pb-6 group-hover:border-gray-100 transition-colors">
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-200 ${isActive ? 'text-gray-900 font-extrabold' : 'text-gray-500 group-hover:text-gray-800'
                        }`}>
                        {item.title}
                      </h3>

                      <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive
                        ? 'text-gray-600 font-medium max-h-[80px] opacity-100 mt-2'
                        : 'text-gray-400 max-h-0 sm:max-h-[80px] opacity-80 group-hover:text-gray-500'
                        }`}>
                        {item.description}
                      </p>
                    </div>

                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
