'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  title: string
  items: FAQItem[]
}

interface ReusableFAQProps {
  title?: string
  subtitle?: string
  categories?: FAQCategory[]
}

const defaultCategories: FAQCategory[] = [
  {
    title: 'Audit & Verification Services',
    items: [
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
      }
    ]
  },
  {
    title: 'Hubcheck Information & Operations',
    items: [
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
  }
]

export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services',
  categories = defaultCategories
}: ReusableFAQProps) {
  // Store expanded state using a composite key: "categoryIndex-itemIndex"
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const handleToggle = (key: string) => {
    setActiveKey(activeKey === key ? null : key)
  }

  return (
    <section id="faq" className="py-12 md:py-16 px-6 bg-gradient-to-b from-white via-[#f4fbf6] to-[#ebf7ef] overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl  font-extrabold text-gray-900 tracking-tight mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-gray-500 font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* Categories Loop */}
        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="w-full">

              {/* Category Header */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Accordion List */}
              <div className="divide-y divide-gray-100">
                {category.items.map((item, itemIndex) => {
                  const itemKey = `${catIndex}-${itemIndex}`
                  const isOpen = activeKey === itemKey

                  return (
                    <div key={itemIndex} className="py-5 w-full">
                      <button
                        onClick={() => handleToggle(itemKey)}
                        className="w-full flex items-center justify-between text-left group gap-4 py-2 cursor-pointer"
                      >
                        <span className="font-semibold text-gray-900 text-base md:text-lg leading-snug group-hover:text-[#15803d] transition-colors duration-200">
                          {item.question}
                        </span>

                        {/* Rounded Box Wrapper for Chevron */}
                        <div className={`w-10 h-10 border rounded-lg flex items-center justify-center flex-shrink-0 bg-white transition-all duration-300 ${isOpen
                          ? 'border-[#15803d]/40 shadow-sm bg-green-50/20'
                          : 'border-gray-200 hover:border-gray-300 shadow-sm'
                          }`}>
                          <ChevronDown
                            size={18}
                            className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#15803d]' : 'group-hover:text-gray-900'
                              }`}
                          />
                        </div>
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pb-2 pr-12">
                              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  )
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
