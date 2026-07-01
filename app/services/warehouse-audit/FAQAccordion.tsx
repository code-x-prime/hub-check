'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Why do financial institutions require warehouse audits?',
    answer: 'Financial institutions use warehouse audits to support collateral monitoring, warehouse verification, inventory validation, and internal review requirements for secured lending and commodity finance.'
  },
  {
    question: 'What activities are included in a warehouse audit?',
    answer: 'Warehouse audits may include physical warehouse verification, stock assessment, inventory verification, documentation review, warehouse inspections, collateral assessment support, and structured reporting.'
  },
  {
    question: 'Does Hubcheck provide stock verification services?',
    answer: 'Yes. Hubcheck provides independent stock verification services to support warehouse audits, inventory validation, and warehouse monitoring requirements.'
  },
  {
    question: 'Can warehouse audits support collateral monitoring?',
    answer: 'Yes. Warehouse audits may support collateral monitoring by independently reviewing warehouse information, stock records, inventory observations, and supporting documentation within the agreed scope.'
  },
  {
    question: 'Do you provide warehouse audit services across India?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, subject to project scope and operational requirements.'
  },
  {
    question: 'Do you provide Warehouse Audit Services for commodity finance?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements for commodity finance through structured warehouse verification, stock assessment, inventory validation, documentation review, and reporting, in line with the agreed scope.'
  },
  {
    question: 'Which commodities can be covered under Warehouse Audit Services?',
    answer: 'Hubcheck supports warehouse audits across a wide range of commodity storage facilities, including agricultural and other commodities, in line with client requirements and the agreed scope of work.'
  }
]

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 text-left">
      <div className="text-center mb-12">
        <span className="text-sm font-bold uppercase tracking-wider text-[#15803d]">Common Inquiries</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = activeIndex === idx
          return (
            <div
              key={idx}
              className="border border-gray-150 rounded-lg overflow-hidden bg-white shadow-xs"
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900 hover:text-[#15803d] transition-colors focus:outline-none"
              >
                <span className="text-base sm:text-lg pr-4">{item.question}</span>
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
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
