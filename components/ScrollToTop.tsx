'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

  // Smoothly trigger button visibility
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 300)
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Circular progress dimensions
  const radius = 20
  const circumference = 2 * Math.PI * radius
  
  // Transform scroll percentage (0 to 1) directly to strokeDashoffset (circumference to 0)
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 bg-white rounded-full border border-gray-150 shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95 transition-transform"
          aria-label="Scroll to top"
        >
          {/* SVG Progress Circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-gray-100 fill-none"
              strokeWidth="3.5"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-[#ff6b00] fill-none"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>

          {/* Inner Arrow Icon */}
          <ArrowUp 
            size={18} 
            className="text-[#ff6b00] group-hover:-translate-y-0.5 transition-transform duration-300 z-10" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
