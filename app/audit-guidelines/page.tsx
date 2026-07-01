import type { Metadata } from 'next'
import HeroCanvas from '../services/warehouse-audit/HeroCanvas'


export const metadata: Metadata = {
  title: 'Audit Guidelines | Hubcheck',
  description: 'Learn about Hubcheck\'s standard audit procedures, physical verification guidelines, and reporting compliance framework.',
}

const operationalSteps = [
  {
    title: '1. Standard Physical Verification',
    desc: 'Conducting physical counts, volumetric calculations, scale reviews, and silo assessments according to predefined commodity protocols.'
  },
  {
    title: '2. Document Validation',
    desc: 'Reviewing pledge records, gate passes, warehouse registers, insurance cover notes, and ownership or lease records.'
  },
  {
    title: '3. Infrastructure & Storage Assessment',
    desc: 'Inspecting security systems, fire safety equipment, structural integrity, stack spacing, moisture levels, and pest control logs.'
  },
  {
    title: '4. Independent Operational Audits',
    desc: 'Verifying on-ground warehouse operations, security logs, access control cards, and verification of key personnel.'
  }
]

export default function AuditGuidelinesPage() {
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
              Auditing Standards
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Audit <span className="text-[#15803d]">Guidelines</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 font-light font-sans">
              Hubcheck strictly adheres to structured verification standards to deliver reliable reports for banks, NBFCs, and financial institutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-left">

          <div className="prose prose-green max-w-none space-y-10 font-sans font-light text-gray-650 leading-relaxed">

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">Overview</h2>
              <p>
                To maintain transparency, security, and accuracy, our audit teams follow a consistent set of guidelines during every on-ground audit and facility inspection. This document outlines the general operational guidelines we follow.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-950">Core Verification Protocols</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {operationalSteps.map((step, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-150 p-6 rounded-lg space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-550 leading-relaxed font-light">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">Ethical Conduct & Independence</h2>
              <p>
                Our auditors maintain strict independence. We do not participate in commodity trading, warehouse management, or lending decisions. Reports are generated objectively based on observed facts and documents, ensuring unbiased data for credit committees.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">Reporting Timelines & Evidence</h2>
              <p>
                All audit reports must include physical evidence, such as GPS-geotagged and timestamped photographs, scale receipts, moisture logs, and signed verification statements. Final reports are submitted securely to authorized stakeholders within the agreed operational turnaround time (TAT).
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
