import type { Metadata } from 'next'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

export const metadata: Metadata = {
  title: 'Terms of Use | Hubcheck',
  description: 'Terms of Use and conditions for using Hubcheck website and independent warehouse audit services.',
}

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-green-100/80 via-emerald-50/40 to-white">
        <HeroCanvas />
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-500/[0.04] blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200/50 bg-green-50/50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
              Legal Terms
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Terms of <span className="text-[#15803d]">Use</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 font-light font-sans">
              Last updated: June 30, 2026. Please read these Terms of Use carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="prose prose-green max-w-none space-y-10 font-sans font-light text-gray-650 leading-relaxed">

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">2. Service Scope & Independence</h2>
              <p>
                Hubcheck provides independent warehouse audits, stock verification, collateral monitoring, and due diligence services. Our reports and assessments are based on objective observations, on-site checks, and document reviews within the specific scope agreed upon in client contracts.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">3. Intellectual Property Rights</h2>
              <p>
                All content on this website—including text, graphics, logos, images, code, and design—is the intellectual property of Hubcheck and is protected by applicable copyright and trademark laws. Unauthorized copying, modification, or distribution is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">4. Limitations of Liability</h2>
              <p>
                The information provided on this website is for general guidance and informational purposes. In no event shall Hubcheck or its officers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">5. User Conduct & Security</h2>
              <p>
                Users agree not to use the website to transmit malicious software, execute unauthorized access, or disrupt the website services. Any attempt to compromise database systems or site security will result in termination of access and legal action.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">6. Governing Law</h2>
              <p>
                Any claim relating to Hubcheck&apos;s website or services shall be governed by the laws of India, without regard to its conflict of law provisions, and shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
