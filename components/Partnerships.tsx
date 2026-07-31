'use client'

import Image from 'next/image'

const partnerLogos = [
  { name: 'Aditya Birla Capital', src: '/logos/Aditya Birla Housing Finance.png' },
  { name: 'Ambit Finvest', src: '/logos/Ambit Finvest.png' },
  { name: 'AU Small Finance Bank', src: '/logos/AU Small Finance Bank.png' },
  { name: 'Authum Finance', src: '/logos/Authum Finance.png' },
  { name: 'Electronica Finance', src: '/logos/Electronica Finance.png' },

  { name: 'Equitas Small Finance Bank', src: '/logos/Equitas Small Finance Bank.png' },
  { name: 'ESAF Small Finance Bank', src: '/logos/ESAF Small Finance Bank.png' },
  { name: 'HDFC Bank', src: '/logos/HDFC Bank.png' },
  { name: 'Hinduja Housing Finance', src: '/logos/Hinduja Housing Finance.png' },
  { name: 'ICICI Bank', src: '/logos/ICICI Bank.png' },

  { name: 'IDBI Bank', src: '/logos/IDBI Bank.png' },
  { name: 'IndusInd Bank', src: '/logos/IndusInd Bank.png' },
  { name: 'Kotak Mahindra Bank', src: '/logos/Kotak Mahindra Bank.png' },
  { name: 'L&T Finance', src: '/logos/L&T Finance.jpeg' },
  { name: 'Maxemo Capital', src: '/logos/Maxemo Capital.png' },

  { name: 'Poonawalla Fincorp', src: '/logos/Poonawalla Fincorp.png' },
  { name: 'SMFG India Credit', src: '/logos/SMFG India Credit.png' },
  { name: 'TVS Credit', src: '/logos/TVS Credit.png' },
  { name: 'Ujjivan Small Finance Bank', src: '/logos/Ujjivan Small Finance Bank.png' },
  { name: 'YES BANK', src: '/logos/YES BANK.png' },
]

export default function Partnerships() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header matching reference image */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-700 tracking-tight">
            Your favorite financial institutions are <span className="font-extrabold text-gray-950">our partners.</span>
          </h2>
        </div>

        {/* Outer Premium Container Card */}
        <div className="bg-[#f8f9fa] border border-gray-200/80 rounded-[32px] md:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-5">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                Our Partnerships
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Dynamic Teams, Trusted Partnerships, Lasting Impact. Powering high-growth sales and support teams globally.
              </p>

              <div className="pt-6 border-t border-gray-200 mt-6 space-y-1.5 text-xs text-gray-400">
                <p className="leading-relaxed">
                  Hubcheck is a product of Brighto Credit Information Private Limited.
                </p>
                <p>
                  © {currentYear} Brighto Credit Information Private Limited. All Rights Reserved.
                </p>
              </div>
            </div>

            {/* Right Logos Grid (5 columns x 4 rows) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200/70 rounded-2xl p-4 flex items-center justify-center h-24 sm:h-28 md:h-32 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={160}
                      height={80}
                      className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
