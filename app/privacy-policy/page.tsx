import type { Metadata } from 'next'
import Link from 'next/link'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hubcheck',
  description: 'Privacy Policy for Hubcheck - How we collect, use, protect, and process your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act).',
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
              Last updated: July 17, 2026. This policy describes how Hubcheck collects, uses, protects, and processes your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act).
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
                Hubcheck (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, store, process, and protect your information when you visit our website, use our services, or communicate with us.
              </p>
              <p>
                This policy is designed to comply with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India and other applicable data protection regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">2. Data Fiduciary</h2>
              <p>
                For the purposes of the DPDP Act, 2023, Hubcheck acts as a <strong>Data Fiduciary</strong>. We determine the purpose and means of processing your personal data.
              </p>
              <div className="bg-gray-50 border border-gray-150 p-6 rounded-lg space-y-1 font-semibold text-sm">
                <p><strong>Company Name:</strong> Brighto Credit Information Pvt. Ltd. (operating as Hubcheck)</p>
                <p><strong>Registered Address:</strong> C-83, 1st Floor, Sector-2, Noida, India</p>
                <p><strong>Contact Email:</strong> <a href="mailto:Support@brightoindia.com" className="text-[#15803d]">Support@brightoindia.com</a></p>
                <p><strong>Contact Phone:</strong> +91-9311463901</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">3. Personal Data We Collect</h2>
              <p>
                We collect the following categories of personal data based on your interaction with us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company/organization name, and job title.</li>
                <li><strong>Professional Information:</strong> Resume/CV, work experience, education details, and professional references (for job applications).</li>
                <li><strong>Service Data:</strong> Warehouse locations, operational logs, stock records, and facility information required to execute audit scopes.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and interaction history on our website.</li>
                <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence sent through our website forms.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">4. Purpose of Data Collection</h2>
              <p>
                We process your personal data for the following purposes, each supported by valid legal bases under the DPDP Act:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide warehouse audit, stock verification, collateral monitoring, and due diligence services (Contract Performance).</li>
                <li><strong>Communication:</strong> To respond to inquiries, service requests, and provide technical support (Legitimate Interest).</li>
                <li><strong>Employment:</strong> To process job applications and evaluate candidates (Consent).</li>
                <li><strong>Compliance:</strong> To meet legal and regulatory obligations, including ISO 27001 and SOC 2 compliance (Legal Obligation).</li>
                <li><strong>Security:</strong> To ensure platform security, prevent fraud, and protect against operational risks (Legitimate Interest).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">5. Legal Basis for Processing</h2>
              <p>
                Under the DPDP Act, 2023, we process your personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> Where you have given explicit, informed, and free consent for specific purposes (e.g., job applications, marketing communications).</li>
                <li><strong>Contract Performance:</strong> Where processing is necessary to fulfill a contract with you or your organization.</li>
                <li><strong>Legitimate Interest:</strong> Where processing is necessary for our legitimate business interests, such as improving our services and ensuring security.</li>
                <li><strong>Legal Obligation:</strong> Where processing is required by applicable laws, regulations, or court orders.</li>
              </ul>
              <p>
                You may withdraw your consent at any time by contacting us at <a href="mailto:Support@brightoindia.com" className="text-[#15803d]">Support@brightoindia.com</a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inquiry Data:</strong> Retained for 12 months from the date of submission or until the inquiry is resolved, whichever is later.</li>
                <li><strong>Job Application Data:</strong> Retained for 24 months from the date of application. Unsuccessful applications are deleted after this period.</li>
                <li><strong>Service Data:</strong> Retained for the duration of the service contract plus 7 years as required by Indian law.</li>
                <li><strong>Technical Data:</strong> Retained for 12 months for security purposes.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">7. Data Security (ISO 27001 & SOC 2 Compliance)</h2>
              <p>
                As an ISO 27001-certified and SOC 2 audited company, Hubcheck implements stringent administrative, physical, and technical safeguards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                <li>Access is restricted exclusively to authorized personnel on a need-to-know basis.</li>
                <li>Regular security audits, penetration testing, and vulnerability assessments are conducted.</li>
                <li>Multi-factor authentication (MFA) is enforced for all internal systems.</li>
                <li>Incident response procedures are in place to address any data breaches within 72 hours.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">8. Data Sharing and Third Parties</h2>
              <p>
                We do not sell, rent, or trade your personal data. Information is shared only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With client-approved financial institutions (banks, NBFCs) as specified in engagement contracts.</li>
                <li>With trusted service providers who assist in our operations (hosting), bound by Data Processing Agreements.</li>
                <li>Where required under applicable laws, regulations, or court orders.</li>
              </ul>
              <p className="font-semibold">Third-Party Services Used:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel:</strong> Website hosting and deployment.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">9. Your Rights Under the DPDP Act</h2>
              <p>
                As a Data Principal under the DPDP Act, 2023, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> You may request a copy of all personal data we hold about you.</li>
                <li><strong>Right to Correction:</strong> You may request correction of inaccurate or incomplete personal data.</li>
                <li><strong>Right to Erasure:</strong> You may request deletion of your personal data when it is no longer necessary for the purpose it was collected.</li>
                <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent at any time, and we will cease processing your data.</li>
                <li><strong>Right to Grievance Redressal:</strong> You may file a complaint with our Grievance Officer if you believe your data protection rights have been violated.</li>
                <li><strong>Right to Nominate:</strong> You may nominate another individual to exercise your rights in the event of your death or incapacity.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">10. Cookies and Tracking</h2>
              <p>
                Our website uses only essential cookies required for core website functionality. We do not use any analytics, advertising, or tracking cookies.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for core website functionality and security.</li>
              </ul>
              <p>
                You can manage or disable cookies through your browser settings.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">11. Data Deletion</h2>
              <p>
                You may request deletion of your personal data at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Emailing us at <a href="mailto:Support@brightoindia.com?subject=Data%20Deletion%20Request" className="text-[#15803d]">Support@brightoindia.com</a> with subject line &ldquo;Data Deletion Request&rdquo;.</li>
                <li>Include your full name, email address, and the specific data you wish to have deleted.</li>
              </ul>
              <p>
                We will process your deletion request within <strong>30 days</strong> and confirm completion via email. Some data may be retained if required by applicable law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">12. Grievance Officer</h2>
              <p>
                In accordance with the DPDP Act, 2023 and the Information Technology Act, 2000, the name and contact details of our Grievance Officer are:
              </p>
              <div className="bg-gray-50 border border-gray-150 p-6 rounded-lg space-y-1 font-semibold text-sm">
                <p><strong>Grievance Officer</strong></p>
                <p>Hubcheck Data Protection Team</p>
                <p>Email: <a href="mailto:Support@brightoindia.com" className="text-[#15803d]">Support@brightoindia.com</a></p>
                <p>Phone: +91-9311463901</p>
                <p>Address: C-83, 1st Floor, Sector-2, Noida, India</p>
                <p className="text-xs text-gray-400 mt-2">We will acknowledge your grievance within 24 hours and resolve it within 30 days.</p>
              </div>
            </div>

            <div className="space-y-4 border-t border-gray-150 pt-8">
              <h2 className="text-2xl font-bold text-gray-950">13. Contact Information</h2>
              <p>
                For any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-150 p-6 rounded-lg space-y-1 font-semibold text-sm">
                <p>Hubcheck Data Protection Office</p>
                <p>Email: <a href="mailto:Support@brightoindia.com" className="text-[#15803d]">Support@brightoindia.com</a></p>
                <p>Call: +91-9311463901</p>
                <p>Address: C-83, 1st Floor, Sector-2, Noida, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Material changes will be communicated via email or prominent notice on our website.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
