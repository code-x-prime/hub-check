'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Why do financial institutions require stock audits?',
    answer: 'Financial institutions use stock audits to support collateral monitoring, inventory validation, warehouse oversight, and internal review requirements linked to lending activities.'
  },
  {
    question: 'Do you provide Stock Audit Services for commodity storage facilities?',
    answer: 'Yes, Hubcheck provides Stock Audit Services across many commodity storage facilities, depending on the agreed scope and client needs.'
  },
  {
    question: 'Which commodities can be covered during a stock audit?',
    answer: 'Our Stock Audit Services support warehouses that store agricultural and industrial commodities, including rice, wheat, cotton, sugar, pulses, oilseeds, spices, fertilizers, and more.'
  },
  {
    question: 'What activities are included in a stock audit?',
    answer: 'Stock audits may include physical stock verification, inventory validation, stock record review, documentation assessment, warehouse observations, and structured reporting.'
  },
  {
    question: 'Do you provide Stock Audit Services across India?',
    answer: 'Yes. Hubcheck supports stock audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    question: 'How can I get started with Hubcheck’s Stock Audit Services?',
    answer: 'Reach out to our team to discuss your stock audit requirements, objectives, and scope. We will recommend an audit approach aligned with your operational requirements and the agreed scope of work.'
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
