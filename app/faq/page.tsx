'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const masterFAQs: FAQItem[] = [
  {
    category: 'Warehouse Audit & Verification',
    question: 'Why do banks and financial institutions require warehouse audits?',
    answer: 'Banks and financial institutions use warehouse audits to monitor collateral, verify stock quantity and quality, validate warehouse operations, and meet internal review guidelines for secured lending.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'What is stock verification?',
    answer: 'Stock verification means checking the actual physical stock and quantities against warehouse registers, registers of pledges, and supporting logistics documentation.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'What is inventory verification?',
    answer: 'Inventory verification involves independently reviewing inventory records against physical stock to validate information and support warehouse operational assessments.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'How often should warehouse audits be conducted?',
    answer: 'It depends on your organization\'s policies, operational needs, lending guidelines, commodity types, and risk tolerance standards.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'What activities are included in a warehouse audit?',
    answer: 'Warehouse audits may include physical warehouse verification, stock assessment, inventory verification, documentation review, warehouse inspections, collateral assessment support, and structured reporting.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'Does Hubcheck provide stock verification services?',
    answer: 'Yes. Hubcheck provides independent stock verification services to support warehouse audits, inventory validation, and warehouse monitoring requirements.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'Can warehouse audits support collateral monitoring?',
    answer: 'Yes. Warehouse audits support collateral monitoring by independently reviewing warehouse information, stock records, inventory observations, and supporting documentation.'
  },
  {
    category: 'Warehouse Audit & Verification',
    question: 'Do you provide Warehouse Audit Services for commodity finance?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements for commodity finance through structured warehouse verification, stock assessment, inventory validation, documentation review, and reporting.'
  },
  {
    category: 'Warehouse Due Diligence',
    question: 'What are Warehouse Due Diligence Services?',
    answer: 'Warehouse Due Diligence Services involve the independent verification of warehouse operations, infrastructure, inventory management, supporting documents, working conditions, and structural readiness before entering into business, lending, or investment transactions.'
  },
  {
    category: 'Warehouse Due Diligence',
    question: 'Why is Warehouse Due Diligence important?',
    answer: 'It enhances information validation, identifies operational risk gaps, verifies facility ownership or lease records, and contributes to improved business, financing, and lending decisions.'
  },
  {
    category: 'Warehouse Due Diligence',
    question: 'Who uses Warehouse Due Diligence Services?',
    answer: 'Banks, NBFCs, financial institutions, and organizations engaged in warehouse financing, commodity lending, operational assessments, and acquisitions.'
  },
  {
    category: 'Warehouse Due Diligence',
    question: 'What activities are included in Warehouse Due Diligence?',
    answer: 'Our due diligence services include assessments of warehouses infrastructure, land registry and ownership checks, physical verification of storage conditions, operational reviews, inventory assessments, and reporting.'
  },
  {
    category: 'Collateral Management',
    question: 'What are Collateral Management Audit Services?',
    answer: 'Collateral Management Audit Services involve independently reviewing pledged assets, warehouse information, supporting documentation, and operational observations to protect lending decisions and mitigate risk.'
  },
  {
    category: 'Collateral Management',
    question: 'Why are Collateral Management Audits important?',
    answer: 'They improve collateral visibility, validate pledge registers, support warehouse monitoring, and help financial institutions verify backing assets value for commodity-backed lending.'
  },
  {
    category: 'Collateral Management',
    question: 'Do you provide Collateral Management Audit Services for commodity storage facilities?',
    answer: 'Yes. Hubcheck conducts collateral management audits for a wide range of commodity storage facilities, in accordance with the agreed scope of work and client requirements.'
  },
  {
    category: 'Collateral Management',
    question: 'Which commodities can be covered during collateral audits?',
    answer: 'Our services cover warehouses storing rice, wheat, cotton, sugar, pulses, oilseeds, spices, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    category: 'Collateral Management',
    question: 'What activities are included in a Collateral Management Audit?',
    answer: 'Services include collateral verification, warehouse assessments, physical stock verification, documentation reviews, inventory validation, warehouse inspections, and structured reporting.'
  },
  {
    category: 'Warehouse Inspection',
    question: 'Why are Warehouse Inspections important?',
    answer: 'Warehouse inspections increase visibility into warehouse operations, check safety regulations and fire NOC status, support information validation, and strengthen warehouse monitoring processes.'
  },
  {
    category: 'Warehouse Inspection',
    question: 'What does a warehouse inspection include?',
    answer: 'A warehouse inspection involves facility inspections, storage condition assessments, operational observations, documentation reviews, infrastructure assessments, and structured reporting.'
  },
  {
    category: 'Stock Audit',
    question: 'Why do financial institutions require stock audits?',
    answer: 'Financial institutions use stock audits to support collateral monitoring, inventory validation, warehouse oversight, and internal review requirements linked to lending activities.'
  },
  {
    category: 'Stock Audit',
    question: 'What activities are included in a stock audit?',
    answer: 'Stock audits include physical stock verification, inventory validation, stock record reviews, documentation assessments, warehouse observations, and structured reporting.'
  },
  {
    category: 'Banking Audits',
    question: 'Why do banks require warehouse audits?',
    answer: 'Warehouse audits help banks strengthen collateral monitoring, validate warehouse information, and support lending review processes through independent verification.'
  },
  {
    category: 'Banking Audits',
    question: 'How do warehouse audits support collateral monitoring?',
    answer: 'Independent warehouse audits validate stock levels, warehouse conditions, and supporting documentation used in collateral review activities.'
  },
  {
    category: 'Banking Audits',
    question: 'Can Hubcheck conduct warehouse audits across India for banks?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    category: 'Banking Audits',
    question: 'Which commodities can be covered during banking warehouse audits?',
    answer: 'We conduct warehouse audits for rice, wheat, cotton, sugar, pulses, oilseeds, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    category: 'Banking Audits',
    question: 'Can warehouse audits support commodity finance for banks?',
    answer: 'Yes. Warehouse audits can support commodity finance by delivering independent verification, stock validation, documentation review, and reporting within the agreed scope of work.'
  },
  {
    category: 'Banking Audits',
    question: 'What information is included in bank warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
  },
  {
    category: 'Financial Institutions',
    question: 'Why do financial institutions require warehouse audits?',
    answer: 'Warehouse audits strengthen collateral monitoring, warehouse verification, and operational reviews through independent assessments.'
  },
  {
    category: 'Financial Institutions',
    question: 'How do warehouse audits support warehouse financing?',
    answer: 'Independent warehouse audits validate warehouse information, stock observations, and supporting documentation relevant to financing decisions.'
  },
  {
    category: 'Financial Institutions',
    question: 'Can Hubcheck conduct warehouse audits across India for financial institutions?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    category: 'Financial Institutions',
    question: 'Which commodities can be covered during financial institutions warehouse audits?',
    answer: 'We conduct audits across agricultural and industrial commodity storage facilities based on client requirements.'
  },
  {
    category: 'Financial Institutions',
    question: 'Can warehouse audits support commodity finance for financial institutions?',
    answer: 'Yes. Independent warehouse audits support commodity finance by verifying stock, validating stock, reviewing documentation, and providing structured reporting.'
  },
  {
    category: 'Financial Institutions',
    question: 'What information is included in financial institutions warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
  },
  {
    category: 'NBFCs Audits',
    question: 'Why do NBFCs require warehouse audits?',
    answer: 'Warehouse audits help NBFCs strengthen collateral monitoring, validate warehouse information, and support lending review processes through independent verification.'
  },
  {
    category: 'NBFCs Audits',
    question: 'How do warehouse audits support asset-backed lending for NBFCs?',
    answer: 'They provide independent verification of warehouse information, stock observations, and supporting documentation relevant to collateral-backed financing.'
  },
  {
    category: 'NBFCs Audits',
    question: 'Can Hubcheck conduct warehouse audits across India for NBFCs?',
    answer: 'Yes. We support warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    category: 'NBFCs Audits',
    question: 'Which commodities can be covered during warehouse audits for NBFCs?',
    answer: 'We cover rice, wheat, cotton, sugar, pulses, oilseeds, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    category: 'NBFCs Audits',
    question: 'Can warehouse audits support collateral monitoring for NBFCs?',
    answer: 'Yes. Independent warehouse audits strengthen collateral monitoring through verification, stock validation, documentation review, and structured reporting.'
  },
  {
    category: 'NBFCs Audits',
    question: 'What information is included in NBFC warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
  },
  {
    category: 'General Operations',
    question: 'Which industries does Hubcheck serve?',
    answer: 'Hubcheck supports banks, NBFCs, and financial institutions that need independent warehouse audit, due diligence, and collateral verification services.'
  },
  {
    category: 'General Operations',
    question: 'Do you provide warehouse audit and due diligence services across India?',
    answer: 'Yes. Depending on the project scope and client requirements, our services can be addressed at multiple locations in India through Hubcheck\'s coordinated network.'
  },
  {
    category: 'General Operations',
    question: 'How can I get started with Hubcheck\'s services?',
    answer: 'Reach out to our team via phone at 783-848-4441 or email at info@hubcheck.com to discuss your objectives and service scope. We will recommend an approach that fits your business requirements.'
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'services' | 'industries' | 'general'>('all')

  const serviceCategories = [
    'Warehouse Audit & Verification',
    'Warehouse Due Diligence',
    'Collateral Management',
    'Warehouse Inspection',
    'Stock Audit'
  ]

  const industryCategories = [
    'Banking Audits',
    'Financial Institutions',
    'NBFCs Audits'
  ]

  const generalCategories = [
    'General Operations'
  ]

  // Debouncing logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
      setActiveIndex(null) // Reset active accordion on search
    }, 300)
    return () => clearTimeout(handler)
  }, [searchQuery])

  const filteredFAQs = masterFAQs.filter((faq) => {
    // Category filter logic
    if (selectedFilter === 'services' && !serviceCategories.includes(faq.category)) return false
    if (selectedFilter === 'industries' && !industryCategories.includes(faq.category)) return false
    if (selectedFilter === 'general' && !generalCategories.includes(faq.category)) return false

    // Search filter logic
    return (
      faq.question.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
  })

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-green-100/80 via-emerald-50/40 to-white">
        <div className="absolute inset-0 -z-30 bg-gradient-to-br from-green-150/20 via-emerald-50/10 to-white pointer-events-none" />

        <HeroCanvas />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200/50 bg-green-50/50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
              Support Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Frequently Asked <span className="text-[#15803d]">Questions</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light font-sans">
              Search through our master collection of FAQs regarding warehouse audits, stock audits, collateral management, due diligence, and inventory verification.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH & ACCORDION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => { setSelectedFilter('all'); setActiveIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-sm font-semibold border transition-all cursor-pointer ${selectedFilter === 'all'
                ? 'bg-[#15803d] text-white border-transparent'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'
                }`}
            >
              All FAQs
            </button>
            <button
              onClick={() => { setSelectedFilter('services'); setActiveIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-sm font-semibold border transition-all cursor-pointer ${selectedFilter === 'services'
                ? 'bg-[#15803d] text-white border-transparent'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'
                }`}
            >
              Services FAQs
            </button>
            <button
              onClick={() => { setSelectedFilter('industries'); setActiveIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-sm font-semibold border transition-all cursor-pointer ${selectedFilter === 'industries'
                ? 'bg-[#15803d] text-white border-transparent'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'
                }`}
            >
              Industries FAQs
            </button>
            <button
              onClick={() => { setSelectedFilter('general'); setActiveIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-sm font-semibold border transition-all cursor-pointer ${selectedFilter === 'general'
                ? 'bg-[#15803d] text-white border-transparent'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'
                }`}
            >
              General Operations
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-250 rounded-lg pl-12 pr-6 py-4 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] shadow-sm font-sans"
              placeholder="Search questions, categories, or keywords..."
            />
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, idx) => {
                const isOpen = activeIndex === idx
                return (
                  <div
                    key={idx}
                    className="border border-gray-150 rounded-lg overflow-hidden bg-white shadow-xs text-left"
                  >
                    <button
                      onClick={() => handleToggle(idx)}
                      className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900 hover:text-[#15803d] transition-colors focus:outline-none"
                    >
                      <div className="space-y-1 pr-4">
                        <span className="text-[10px] font-black tracking-wider uppercase text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg mt-1">{faq.question}</h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#15803d]' : ''}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-gray-500 font-sans font-light leading-relaxed border-t border-gray-100/60">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-12 text-gray-400 font-sans font-light">
                No matching questions found. Try searching for other terms like &ldquo;audit&rdquo;, &ldquo;collateral&rdquo;, or &ldquo;commodities&rdquo;.
              </div>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
