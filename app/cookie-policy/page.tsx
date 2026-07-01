import type { Metadata } from 'next'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

export const metadata: Metadata = {
  title: 'Cookie Policy | Hubcheck',
  description: 'Cookie Policy explaining how Hubcheck uses cookies and tracking technologies to ensure site security and optimize performance.',
}

export default function CookiePolicyPage() {
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
              Web Technologies
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Cookie <span className="text-[#15803d]">Policy</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 font-light font-sans">
              Last updated: June 30, 2026. This policy explains what cookies are, how we use them, and your choices regarding cookies.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="prose prose-green max-w-none space-y-10 font-sans font-light text-gray-650 leading-relaxed">

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your computer or mobile device by your web browser when you visit a website. They are widely used to make websites work, improve navigation speed, and provide analytics information to website owners.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">2. How We Use Cookies</h2>
              <p>
                Hubcheck uses cookies for the following operational needs:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required to enable standard core features, such as page navigation, secure access, and system loading.</li>
                <li><strong>Security Cookies:</strong> Help identify and prevent potential security risks, protecting the integrity of our platform.</li>
                <li><strong>Performance & Analytics:</strong> Allow us to monitor site speed, loading diagnostics, and aggregate page views to optimize website design.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">3. Third-Party Cookies</h2>
              <p>
                We do not allow third-party advertising cookies or trackers on our site. Any analytical tools we run collect anonymous, aggregate usage data that is not shared with external entities.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">4. Your Cookie Choices</h2>
              <p>
                You can configure your browser to block all cookies, accept only certain cookies, or delete cookies that have already been saved. Please consult your browser&apos;s Help menu to manage cookie preferences. Note that blocking essential cookies may affect some core functions of the website.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
