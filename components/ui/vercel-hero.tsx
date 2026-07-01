"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// Inline implementation of SVG icons to avoid external package dependencies
const PlusIcon = ({ size = 20, strokeWidth = 0.8, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);



export function Hero() {
  return (
    <div className="pt-24 pb-12 px-4 lg:px-0 flex mx-auto max-w-6xl flex-col items-center justify-center text-center bg-white relative z-10">
      <div className="grid w-full border-0 border-b border-gray-200/80 md:border md:border-gray-200/80 relative grid-cols-10">
        <div
          className="absolute inset-0 -z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 100% at 50% 100%, #f0fdf4 0%, rgba(255,255,255,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 80%)",
            maskImage:
              "linear-gradient(to top, black 0%, transparent 80%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        <PlusIcon size={30} strokeWidth={0.8} className="absolute -top-4 -left-4 text-green-600" />
        <PlusIcon
          size={30}
          strokeWidth={0.8}
          className="absolute -bottom-4 -right-4 text-green-600"
        />

        {/* Left column grid lines */}
        <div className="md:grid hidden w-full col-span-1 border-r border-gray-200/80">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200/80 last:border-0 flex-1 aspect-square"
            />
          ))}
        </div>

        {/* Center content */}
        <div className="md:col-span-8 col-span-10">
          <div className="md:flex hidden">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="border-l border-gray-200/80 last:border-r flex-1 aspect-square"
              />
            ))}
          </div>

          <div className="relative w-full border-t border-gray-200/80 -mt-0.5 flex items-center flex-col justify-center p-6 md:p-16">

            {/* Custom green pill badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100 text-sm font-semibold text-[#15803d] uppercase tracking-wider animate-pulse">
              <Sparkles size={14} />
              India’s Trusted Partner
            </div>

            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight text-gray-900">
              India’s Trusted Partner for <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-[#15803d] to-amber-700 bg-clip-text text-transparent">
                Warehouse Audit Services
              </span>
            </h1>

            <p className="text-gray-600 max-w-2xl py-6 text-base md:text-lg leading-relaxed">
              Hidden warehouse risks can affect lending decisions, collateral monitoring, and operational oversight. As India&apos;s trusted partner for Warehouse Audit Services, Hubcheck delivers independent warehouse inspections, physical verification, documentation reviews, and structured reporting to help financial institutions strengthen warehouse visibility and information validation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href={"#contact"}>
                <button
                  className="cursor-pointer rounded-full px-8 h-12 bg-[#15803d] hover:bg-[#166534] text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-700/20"
                >
                  Book an Consultation
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href={"#services"}>
                <button
                  className="cursor-pointer rounded-full px-8 h-12 border border-gray-300 hover:border-[#15803d] hover:text-[#15803d] bg-white text-gray-800 font-semibold transition-all flex items-center justify-center"
                >
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full h-full border-t border-gray-200/80">


            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l border-gray-200/80 last:border-r border-b flex-1 aspect-square"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l border-gray-200/80 border-b last:border-r flex-1 aspect-square"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l border-gray-200/80 last:border-r flex-1 aspect-square"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column grid lines */}
        <div className="md:grid hidden col-span-1 border-l border-gray-200/80">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200/80 last:border-b-0 flex-1 aspect-square"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
