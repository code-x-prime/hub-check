import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'


const manrope = localFont({
  src: '../public/fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-manrope',
  weight: '100 900',
})

const jost = localFont({
  src: '../public/fonts/Jost-VariableFont_wght.ttf',
  variable: '--font-jost',
  weight: '100 900',
})

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ErrorBoundary from '@/components/ErrorBoundary'



export const metadata: Metadata = {
  title: 'Hubcheck | India Trusted Warehouse Audit & Verification Partner',
  description: 'Independent warehouse audit services for banks, NBFCs, and MNCs. Stock verification, inventory audits, collateral monitoring, and more.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jost.variable}`}>
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
