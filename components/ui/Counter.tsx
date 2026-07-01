'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface CounterProps {
  value: string
  duration?: number
}

export default function Counter({ value, duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  // Parse target number and suffix (e.g. 98% -> 98 and %, 500+ -> 500 and +)
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value

  useEffect(() => {
    if (isInView && target > 0) {
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setCount(Math.round(latest))
        }
      })
      return () => controls.stop()
    }
  }, [isInView, target, duration])

  if (!match) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}
