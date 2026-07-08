'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerColumns = [
    {
      socialName: 'LinkedIn',
      socialLink: 'https://linkedin.com',
      title: 'ABOUT US',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Why Us', href: '/#why' },
        { label: 'For Banks', href: '/industries/banks' },
        { label: 'For NBFCs', href: '/industries/nbfcs' },
        { label: 'For MNCs', href: '/industries/mnc' },
        { label: 'FAQ', href: '/faq' }
      ]
    },
    {
      socialName: 'Facebook',
      socialLink: 'https://facebook.com',
      title: 'SERVICES',
      links: [
        { label: 'Warehouse Audit', href: '/services/warehouse-audit' },
        { label: 'Stock Audit', href: '/services/stock-audit' },
        { label: 'Warehouse Inspection', href: '/services/warehouse-inspection' },
        { label: 'Inventory Verification', href: '/services/inventory-verification' },
        { label: 'Collateral Management', href: '/services/collateral-management' },
        { label: 'Due Diligence', href: '/services/warehouse-due-diligence' }
      ]
    },
    {
      socialName: 'Twitter',
      socialLink: 'https://twitter.com',
      title: 'CONTACT INFO',
      links: [
        { label: 'Call: +91-7838484441', href: 'tel:+917838484441' },
        { label: 'Email: info@hubcheck.com', href: 'mailto:info@hubcheck.com' },
        { label: 'Location: C-83, Sector-2, Noida', href: '/contact' }
      ]
    },
    {
      socialName: 'Instagram',
      socialLink: 'https://instagram.com',
      title: 'LEGAL',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Use', href: '/terms-of-use' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'Audit Guidelines', href: '/audit-guidelines' }
      ]
    }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">

      {/* 4-Column Grid with vertical/horizontal borders */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {footerColumns.map((col, index) => (
          <div key={index} className="flex flex-col">

            {/* Social Header */}
            <a
              href={col.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between font-bold text-gray-900 hover:text-[#15803d] px-6 py-6 border-b border-gray-200 group transition-colors duration-200 cursor-pointer"
            >
              <span className="text-base font-semibold">{col.socialName}</span>
              <ArrowUpRight
                size={18}
                className="text-gray-400 group-hover:text-[#15803d] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Links Content */}
            <div className="p-6 flex-grow bg-[#fafafa]/30">
              <h4 className="font-extrabold text-sm uppercase tracking-widest text-gray-400 mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-gray-500 hover:text-gray-950 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Bar: Copyright and Credits */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center text-sm text-gray-500">
          <div className="relative h-12 w-48 mb-2">
            <Image
              src="/logo.png"
              alt="Hubcheck Logo"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
          <p>&copy; {currentYear} Hubcheck. All rights reserved.</p>
          <p className="text-sm font-medium text-gray-400">
            Design & Developed by{' '}
            <a
              href="https://groxmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-800 hover:text-[#15803d] underline decoration-dotted transition-colors duration-200"
            >
              Grox Media
            </a>
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
