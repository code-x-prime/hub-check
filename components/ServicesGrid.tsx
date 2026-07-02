'use client'

import Image from 'next/image'

interface ServiceItem {
  title: string
  desc: string
  imageSrc?: string // Optional custom image path override
}

interface ServicesGridProps {
  services: ServiceItem[]
  serviceSlug: string // Slug used to construct image paths (e.g. 'stock-audit', 'warehouse-audit')
}

export default function ServicesGrid({ services, serviceSlug }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
      {services.map((service, index) => {
        const isIllustrationTop = index < 4
        // Path naming convention: /[serviceSlug]/s-[1-8].png
        const imagePath = service.imageSrc || `/${serviceSlug}/s-${index + 1}.png`

        return (
          <div
            key={index}
            className="bg-[#fdfefe] border border-gray-150 p-6 rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-500 group hover:border-[#ff6b00] hover:bg-white min-h-[330px]"
          >
            {isIllustrationTop ? (
              <div className="flex flex-col h-full justify-between gap-4">
                <div className="w-full h-36 flex items-center justify-center bg-gray-50/50 rounded-lg group-hover:bg-orange-50/10 transition-all duration-500 relative overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>

                <div className="space-y-2 flex-grow flex flex-col justify-end">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-orange-50 text-[10px] font-black text-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 group-hover:text-[#001c55] transition-colors duration-300 pt-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-orange-50 text-[10px] font-black text-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 group-hover:text-[#001c55] transition-colors duration-300 pt-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                    {service.desc}
                  </p>
                </div>

                <div className="w-full h-36 flex items-center justify-center bg-gray-50/50 rounded-lg group-hover:bg-orange-50/10 transition-all duration-500 relative overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
