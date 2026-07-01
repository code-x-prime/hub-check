'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'What are Collateral Management Audit Services?',
    answer: 'Collateral Management Audit Services involve independently reviewing pledged assets, warehouse information, supporting documentation, and operational observations through structured audit methodologies.'
  },
  {
    question: 'Why are Collateral Management Audits important?',
    answer: 'They improve collateral visibility, strengthen information validation, support warehouse monitoring, and help financial institutions manage collateral-backed lending.'
  },
  {
    question: 'Do you provide Collateral Management Audit Services for commodity storage facilities?',
    answer: 'Yes. Hubcheck conducts collateral management audits for many types of commodity storage facilities, in accordance with the agreed scope of work and client requirements.'
  },
  {
    question: 'Which commodities can be covered during collateral audits?',
    answer: 'Our services cover warehouses storing rice, wheat, cotton, sugar, pulses, oilseeds, spices, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    question: 'What activities are included in a Collateral Management Audit?',
    answer: 'Services may include collateral verification, warehouse assessments, physical stock verification, documentation reviews, inventory validation, warehouse inspections, and structured reporting.'
  },
  {
    question: 'Do you provide Collateral Management Audit Services across India?',
    answer: 'Yes. Hubcheck supports collateral management audit requirements across different locations in India, depending on project scope and operational requirements.'
  },
  {
    question: 'How can I get started with Hubcheck’s Collateral Management Audit Services?',
    answer: 'Reach out to our team to talk about your collateral monitoring needs, operational goals, and service scope. We will suggest a suitable audit approach that fits your business requirements.'
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
