import type { Metadata } from 'next'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hubcheck',
  description: 'Privacy Policy and data security guidelines for Hubcheck. Learn how we handle information securely in compliance with ISO 27001 and SOC 2.',
}

export default function PrivacyPolicyPage() {
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
              Security & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Privacy <span className="text-[#15803d]">Policy</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 font-light font-sans">
              Last updated: June 30, 2026. This policy describes how Hubcheck collects, uses, protects, and handles data in accordance with our ISO 27001 and SOC 2 security framework.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="prose prose-green max-w-none space-y-10 font-sans font-light text-gray-650 leading-relaxed">

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">1. Introduction</h2>
              <p>
                Hubcheck (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and security of your information. This Privacy Policy explains how we collect, store, process, and protect your data when you visit our website, use our warehouse audit services, or communicate with us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">2. Information We Collect</h2>
              <p>
                To provide quality warehouse audit, stock verification, and due diligence services, we may collect the following categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, business email address, phone number, company name, and job title.</li>
                <li><strong>Audit & Facility Data:</strong> Warehouse locations, operational logs, stock records, and facility images required to execute audit scopes.</li>
                <li><strong>Technical Usage:</strong> IP address, browser type, device information, and interaction history on our website.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">3. How We Use Your Information</h2>
              <p>
                We process your data strictly to fulfill our services and maintain operational standards, specifically for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and executing warehouse inspection, stock audit, and verification services.</li>
                <li>Delivering secure, evidence-backed reports to client banks, NBFCs, and financial institutions.</li>
                <li>Responding to inquiries, service requests, and technical support.</li>
                <li>Ensuring security, compliance, and preventing potential operational risks.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">4. Data Security (ISO 27001 & SOC 2 Compliance)</h2>
              <p>
                As an ISO 27001-certified and SOC 2 audited company, Hubcheck implements stringent administrative, physical, and technical safeguards. All data is encrypted in transit and at rest, and access is restricted exclusively to authorized personnel required to perform services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">5. Data Sharing and Third Parties</h2>
              <p>
                We do not sell, rent, or trade your personal or business data. Information is shared only with client-approved financial institutions (such as lending banks or NBFCs) as specified in our engagement contracts, or where required under applicable laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">6. Cookies and Tracking</h2>
              <p>
                Our website uses basic, secure cookies to enhance navigation and understand user preferences. You can manage or disable cookies in your web browser settings.
              </p>
            </div>

            <div className="space-y-4 border-t border-gray-150 pt-8">
              <h2 className="text-2xl font-bold text-gray-950">7. Contact Information</h2>
              <p>
                If you have questions about this Privacy Policy or our security practices, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-150 p-6 rounded-lg space-y-1 font-semibold text-sm">
                <p>Hubcheck Security and Compliance Office</p>
                <p>Email: <a href="mailto:info@hubcheck.com" className="text-[#15803d]">info@hubcheck.com</a></p>
                <p>Call: +91-7838484441</p>
                <p>Address: C-83, Sector-2, Noida, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
