'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, ClipboardCheck, BarChart3, CheckCircle2, Lock, ShieldCheck, ClipboardList, Building2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const servicesDropdown = [
    {
      label: 'Warehouse Audit Services',
      href: '/services/warehouse-audit',
      svgPath: '/icons/warehouse-audit-services.svg',
      desc: 'Independent inspections & physical verification since 2015.'
    },
    {
      label: 'Stock Audit Services',
      href: '/services/stock-audit',
      svgPath: '/icons/stock-audit-services.svg',
      desc: 'Quantity checks and physical stock reviews.'
    },
    {
      label: 'Inventory Verification',
      href: '/services/inventory-verification',
      svgPath: '/icons/inventory-verification.svg',
      desc: 'Checking records against physical inventory.'
    },
    {
      label: 'Warehouse Inspection',
      href: '/services/warehouse-inspection',
      svgPath: '/icons/warehouse-inspection.svg',
      desc: 'Checking conditions, storage setup, and operations.'
    },
    {
      label: 'Collateral Management',
      href: '/services/collateral-management',
      svgPath: '/icons/collateral-management-audit.svg',
      desc: 'Security reviews and collateral-backed auditing.'
    },
    {
      label: 'Warehouse Due Diligence',
      href: '/services/warehouse-due-diligence',
      svgPath: '/icons/warehouse-due-diligence.svg',
      desc: 'Pre-lending operational and Title verification.'
    }
  ]

  const industriesDropdown = [
    {
      label: 'Banks',
      href: '/industries/banks',
      svgPath: '/icons/banking-industry-understanding.svg',
      desc: 'Secured lending, warehouse financing, and risk assessments.'
    },
    {
      label: 'NBFCs',
      href: '/industries/nbfcs',
      svgPath: '/icons/understanding-of-asset-backed-lending.svg',
      desc: 'Tailored warehouse monitoring and secured financing reviews.'
    },
    {
      label: 'MNCs',
      href: '/industries/mnc',
      svgPath: '/icons/experience-in-warehouse-finance.svg',
      desc: 'Warehouse audits and collateral management for MNCs.'
    }
  ]

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', isDropdown: true, dropdownItems: servicesDropdown },
    { label: 'Industries', isDropdown: true, dropdownItems: industriesDropdown },
    { label: 'Career', href: '/career' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 max-w-7xl mx-auto z-50 transition-all duration-300"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`w-full border rounded-lg md:rounded-lg px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled
          ? 'bg-white/85 backdrop-blur-lg border-white/50 shadow-lg shadow-green-700/[0.04] py-2.5'
          : 'bg-white/75 backdrop-blur-md border-white/40 shadow-md shadow-gray-200/10'
          }`}
      >
        {/* Logo - Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="cursor-pointer relative h-12 w-36">
            <Image
              src="/logo.png"
              alt="Hubcheck Logo"
              fill
              sizes="144px"
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu - Right */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div key={item.label} className="relative group/nav-item py-2">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-[#15803d] transition-colors  text-base  cursor-pointer">
                    {item.label}
                    <ChevronDown size={14} className="group-hover/nav-item:rotate-180 transition-transform duration-300 text-gray-400" />
                  </button>

                  {/* Dropdown Menu Panel */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 opacity-0 invisible group-hover/nav-item:opacity-100 group-hover/nav-item:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-lg border border-gray-100 shadow-xl p-4 space-y-2 text-left">
                      {item.dropdownItems?.map((dropdownItem) => {
                        return (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-green-50/50 transition-colors group/item"
                          >
                            <div className="mt-0.5 p-1 rounded-lg bg-green-50 text-[#15803d] group-hover/item:bg-[#15803d] transition-colors relative h-10 w-10 flex-shrink-0 flex items-center justify-center">
                              <Image
                                src={dropdownItem.svgPath}
                                alt={dropdownItem.label}
                                width={25}
                                height={25}
                                className="object-contain group-hover/item:brightness-0 group-hover/item:invert transition-all duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm  text-gray-900 group-hover/item:text-[#15803d] transition-colors">
                                {dropdownItem.label}
                              </h4>
                              <p className="text-sm text-gray-400 leading-tight mt-0.5 font-light">
                                {dropdownItem.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="text-gray-600 hover:text-[#15803d] transition-colors  text-base relative py-1 group"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-[#15803d] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className={`absolute left-0 right-0 top-16 bg-white border border-gray-100 shadow-2xl rounded-lg md:hidden overflow-hidden ${isOpen ? 'pointer-events-auto block' : 'pointer-events-none hidden'
          }`}
      >
        <div className="flex flex-col gap-4 p-6 text-left">
          {navItems.map((item) => {
            if (item.isDropdown) {
              const isSubOpen = item.label === 'Services' ? isMobileServicesOpen : isMobileIndustriesOpen
              const setSubOpen = item.label === 'Services' ? setIsMobileServicesOpen : setIsMobileIndustriesOpen
              return (
                <div key={item.label} className="border-b border-gray-50 pb-2">
                  <button
                    onClick={() => setSubOpen(!isSubOpen)}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-[#15803d]  text-sm"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isSubOpen ? 'rotate-180 text-[#15803d]' : ''}`} />
                  </button>

                  {isSubOpen && (
                    <div className="pl-4 mt-2 space-y-3 pt-2">
                      {item.dropdownItems?.map((dropdownItem) => {
                        return (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 text-sm  text-gray-500 hover:text-[#15803d]"
                            onClick={() => {
                              setIsOpen(false)
                              setSubOpen(false)
                            }}
                          >
                            <div className="relative h-4 w-4 flex-shrink-0">
                              <Image src={dropdownItem.svgPath} alt={dropdownItem.label} fill className="object-contain" />
                            </div>
                            <span>{dropdownItem.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="text-gray-700 hover:text-[#15803d]  text-sm border-b border-gray-50 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
