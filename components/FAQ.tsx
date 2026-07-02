'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import Link from 'next/link'

export interface FAQItem {
  question: string
  answer: string
}

const defaultItems: FAQItem[] = [
  {
    question: 'Why do banks require warehouse audits?',
    answer: 'Banks use warehouse audits to monitor collateral, verify stock, validate warehouse information, and meet internal review needs for secured lending.'
  },
  {
    question: 'What is stock verification?',
    answer: 'Stock verification means checking the actual physical stock and quantities against records and supporting documents.'
  },
  {
    question: 'What is inventory verification?',
    answer: 'Inventory verification involves reviewing inventory records against physical stock to validate information and support warehouse assessments.'
  },
  {
    question: 'How often should warehouse audits be conducted?',
    answer: 'It depends on your organization\'s policies, operational needs, lending rules, and internal monitoring practices.'
  },
  {
    question: 'Which industries does Hubcheck serve?',
    answer: 'Hubcheck supports banks, NBFCs, and financial institutions that need independent warehouse audit and verification services.'
  },
  {
    question: 'Do you provide Pan-India warehouse audit services?',
    answer: 'Yes. Hubcheck offers warehouse audit services across multiple locations through our operational network, depending on project scope and availability.'
  },
  {
    question: 'How can I get started with Hubcheck?',
    answer: 'Just reach out to our team to discuss your warehouse audit requirements, objectives, and scope. We will suggest the right approach that fits your business needs.'
  }
]

interface FAQProps {
  badge?: string
  title?: string
  items?: FAQItem[]
}

export default function FAQ({
  badge = "010 / FAQS",
  title = "Common Questions",
  items = defaultItems
}: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
  }

  if (!items || items.length === 0) return null

  return (
    <section id="faq" className="relative py-16 md:py-24 px-6 bg-white border-y border-gray-100 overflow-hidden text-center">
      {/* Soft top/bottom gradients */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-100/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-150 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
          {badge}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-12">
          {title}
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, idx) => {
            const isOpen = activeIndex === idx
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden bg-white text-left transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#ff6b00] shadow-md shadow-orange-500/[0.04]' 
                    : 'border-gray-150 hover:border-gray-200 shadow-xs'
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-4"
                >
                  <div className="flex items-center gap-4 flex-grow">
                    {/* Index Number */}
                    <span className="text-sm font-semibold text-gray-400 font-sans w-6 flex-shrink-0">
                      {idx + 1}
                    </span>
                    {/* Question text */}
                    <span className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Circular Button */}
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <div className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors duration-200 shadow-xs">
                        <X className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-neutral-800 transition-colors duration-200">
                        <Plus className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Expandable Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed pl-16 border-t border-gray-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-sm text-gray-500 font-sans font-medium">
          Have any other questions?{' '}
          <Link href="/contact" className="text-[#ff6b00] hover:underline font-bold inline-flex items-center gap-1">
            Contact Us <span className="text-xs">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
