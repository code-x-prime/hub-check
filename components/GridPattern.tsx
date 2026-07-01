'use client'

import { Plus } from 'lucide-react'

interface GridPatternProps {
  isDark?: boolean
}

export default function GridPattern({ isDark = false }: GridPatternProps) {
  const gridCells = Array.from({ length: 72 }, (_, i) => i)
  const borderColor = isDark ? 'border-white/10' : 'border-gray-200'
  const plusColor = isDark ? 'text-white/20' : 'text-gray-300'

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-8 gap-0 hidden md:grid">
        {gridCells.map((i) => (
          <div key={i} className={`border-l border-b last:border-r aspect-square ${borderColor}`} />
        ))}
      </div>

      {/* Radial gradient blob */}
      <div
        className="absolute -z-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark
            ? 'radial-gradient(80% 100% at 0% 100%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(80% 100% at 0% 100%, #3b82f6 0%, transparent 70%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
        }}
      />

      {/* Corner plus icons */}
      <div className={`absolute top-8 left-8 ${plusColor}`}>
        <Plus size={24} strokeWidth={1} />
      </div>
      <div className={`absolute top-8 right-8 ${plusColor}`}>
        <Plus size={24} strokeWidth={1} />
      </div>
      <div className={`absolute bottom-8 left-8 ${plusColor}`}>
        <Plus size={24} strokeWidth={1} />
      </div>
      <div className={`absolute bottom-8 right-8 ${plusColor}`}>
        <Plus size={24} strokeWidth={1} />
      </div>
    </div>
  )
}
