'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Why do banks require warehouse audits?',
    answer: 'Warehouse audits help banks strengthen collateral monitoring, validate warehouse information, and support lending review processes through independent verification.'
  },
  {
    question: 'How do warehouse audits support collateral monitoring?',
    answer: 'Independent warehouse audits validate stock levels, warehouse conditions, and supporting documentation used in collateral review activities.'
  },
  {
    question: 'Can Hubcheck conduct warehouse audits across India?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    question: 'Which commodities can be covered during warehouse audits?',
    answer: 'We conduct warehouse audits for rice, wheat, cotton, sugar, pulses, oilseeds, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    question: 'Can warehouse audits support commodity finance?',
    answer: 'Yes. Warehouse audits can support commodity finance by delivering independent verification, stock validation, documentation review, and reporting within the agreed scope of work.'
  },
  {
    question: 'What information is included in warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
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
