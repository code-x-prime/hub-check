'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FancyButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  variant?: 'primary' | 'secondary' // primary = green bg (hover turns white), secondary = white bg (hover turns green)
  showArrow?: boolean
}

export default function FancyButton({
  children,
  href,
  onClick,
  type = 'button',
  className,
  variant = 'primary',
  showArrow = true,
}: FancyButtonProps) {
  
  const [isHovered, setIsHovered] = useState(false)
  const isPrimary = variant === 'primary'

  const content = (
    <>
      {/* Three sliding layered backgrounds */}
      {isPrimary ? (
        <>
          <span className="absolute w-[250%] h-48 -top-12 -left-[75%] bg-[#ff6b00] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right -z-10" />
          <span className="absolute w-[250%] h-48 -top-12 -left-[75%] bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right -z-10" />
          <span className="absolute w-[250%] h-48 -top-12 -left-[75%] bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right -z-10" />
        </>
      ) : (
        <>
          <span className="absolute w-[250%] h-48 -top-12 -left-[75%] bg-orange-50 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right -z-10" />
          <span className="absolute w-[250%] h-48 -top-12 -left-[75%] bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right -z-10" />
          <span className="absolute w-[250%] h-48 -top-12 -left-[75%] bg-[#ff6b00] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right -z-10" />
        </>
      )}

      {/* Button Content */}
      <span 
        className="relative z-10 flex items-center gap-2 transition-colors duration-500 font-semibold tracking-wide select-none pointer-events-none"
        style={{
          color: isHovered 
            ? (isPrimary ? '#001c55' : '#ffffff') 
            : (isPrimary ? '#ffffff' : '#374151')
        }}
      >
        {children}
      </span>

      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 19"
          className={cn(
            "w-7 h-7 justify-end rounded-full border p-1.5 rotate-45 relative z-10 flex-shrink-0 transition-all ease-linear duration-300 select-none pointer-events-none",
            "group-hover:rotate-90"
          )}
          style={{
            backgroundColor: isHovered 
              ? (isPrimary ? '#001c55' : '#ffffff') 
              : (isPrimary ? '#ffffff' : '#ff6b00'),
            borderColor: isHovered 
              ? (isPrimary ? '#001c55' : '#ffffff') 
              : (isPrimary ? '#e5e7eb' : 'transparent'),
          }}
        >
          <path
            style={{
              fill: isHovered 
                ? (isPrimary ? '#ffffff' : '#1f2937') 
                : (isPrimary ? '#1f2937' : '#ffffff')
            }}
            className="transition-colors duration-300"
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          ></path>
        </svg>
      )}
    </>
  )

  const commonClasses = cn(
    "font-sans inline-flex justify-center gap-3 items-center shadow-lg text-sm sm:text-base font-bold w-fit",
    "overflow-hidden relative z-10 px-6 py-2.5 cursor-pointer rounded-lg group transition-all duration-300 select-none border-2",
    isPrimary 
      ? "bg-[#001c55] border-transparent hover:border-white/20" 
      : "bg-white border-gray-200 hover:border-[#001c55]",
    className
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className={commonClasses} 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button 
      type={type} 
      className={commonClasses} 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  )
}
