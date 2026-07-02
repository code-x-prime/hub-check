import type { Metadata } from 'next'
import ServicePageTemplate from '../ServicePageTemplate'


export const metadata: Metadata = {
  title: 'Warehouse Due Diligence Services | India’s Trusted Partner | Hubcheck',
  description: 'Hubcheck provides independent Warehouse Due Diligence Services that bring together physical verification, infrastructure checks, and operational reviews before lending and business decisions.',
  keywords: 'Warehouse Due Diligence, Warehouse Assessment, Infrastructure Review, Physical Verification, Documentation Review, Inventory Assessment, Warehouse Inspection, Hubcheck',
}

const dueDiligenceIncludes = [
  'Warehouse Assessment',
  'Infrastructure Review',
  'Physical Verification',
  'Documentation Review',
  'Inventory Assessment',
  'Warehouse Inspection',
  'Information Validation',
  'Due Diligence Reporting'
]

const servicesList = [
  {
    title: 'Warehouse Assessment',
    desc: 'Structured checks are conducted to evaluate the warehouse\'s readiness and infrastructure, as well as its storage practices and operations.'
  },
  {
    title: 'Infrastructure Review',
    desc: 'We examine warehouse buildings, storage areas, layouts, and support systems through detailed independent assessments.'
  },
  {
    title: 'Physical Verification',
    desc: 'Warehouse information is verified through methods such as on-site checks, operational observations, and physical inspections.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, operational documents, inventory details, agreements, and other supporting documents.'
  },
  {
    title: 'Inventory Assessment',
    desc: 'We review inventory handling and available stock information to support due diligence and operational reviews.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'Independent warehouse inspections are conducted to check the storage environment, daily operations, and overall condition.'
  },
  {
    title: 'Information Validation',
    desc: 'We reinforce the due diligence process by cross-checking information, reviewing documents, and independently observing operations.'
  },
  {
    title: 'Due Diligence Reporting',
    desc: 'Clear reports are provided to you that show your observations, verification results and supporting details for review.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Due Diligence Expertise',
    desc: 'Every project runs independently and follows the agreed scope of work.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Comprehensive Warehouse Assessments',
    desc: 'We evaluate infrastructure, operational practices, inventory conditions, and supporting documents using clear review methods.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Operational & Documentation Review',
    desc: 'We examine operations, records, and documents to improve information validation.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Due Diligence Methodology',
    desc: 'All assessments are conducted in accordance with standard assessment procedures to ensure transparency, consistency, and reliable reporting.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Actionable Due Diligence Reports',
    desc: 'You get well-organized reports with observations, findings, and supporting information for easy internal review.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Assessment Network',
    desc: 'Hubcheck provides Warehouse Due Diligence Services across multiple locations through a well-coordinated network.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'Support for warehouse financing, collateral reviews, and lending assessment processes.'
  },
  {
    name: 'NBFCs',
    desc: 'Independent assessments that help with operational reviews, warehouse verification, and financing activities.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Services designed to strengthen warehouse information validation and business review processes.'
  }
]

const commoditiesList = [
  { title: 'Rice', svgPath: '/icons/rice.svg' },
  { title: 'Wheat', svgPath: '/icons/wheat.svg' },
  { title: 'Cotton', svgPath: '/icons/cotton.svg' },
  { title: 'Sugar', svgPath: '/icons/sugar.svg' },
  { title: 'Pulses', svgPath: '/icons/pulses.svg' },
  { title: 'Oilseeds', svgPath: '/icons/oilseeds.svg' },
  { title: 'Maize', svgPath: '/icons/maize.svg' },
  { title: 'Spices', svgPath: '/icons/spices.svg' },
  { title: 'Fertilizers', svgPath: '/icons/fertilizers.svg' }
]

const faqItems = [
  {
    question: 'What are Warehouse Due Diligence Services?',
    answer: 'Warehouse Due Diligence Services encompass the independent evaluation of the warehouse\'s operations, infrastructure, record-keeping, and conditions prior to any business or financing transactions or lending decisions.'
  },
  {
    question: 'Why is Warehouse Due Diligence important?',
    answer: 'It makes information more visible, enhances information validation, and contributes to improved business, financing, and operational decisions.'
  },
  {
    question: 'Who uses Warehouse Due Diligence Services?',
    answer: 'Banks, NBFCs, financial institutions, and those engaged in warehouse financing, commodity lending, operational assessments, and acquisitions.'
  },
  {
    question: 'What activities are included in Warehouse Due Diligence?',
    answer: 'Our services include assessments of warehouses, infrastructure, and documentation; warehouse inspections; inventory assessments; and due diligence reporting.'
  },
  {
    question: 'Do you provide Warehouse Due Diligence Services across India?',
    answer: 'Yes. Depending on the project scope and requirements, due diligence can be addressed at multiple locations in India with Hubcheck.'
  },
  {
    question: 'Can Warehouse Due Diligence support commodity finance?',
    answer: 'Yes. It can support commodity finance through independent assessments, information validation, documentation reviews, and operational observations within the agreed scope of work.'
  }
]

export default function WarehouseDueDiligencePage() {
  return (
    <ServicePageTemplate
      heroBadge="India’s Trusted Partner"
      heroTitle={
        <>
          Warehouse Due Diligence <br />
          <span className="text-[#001c55]">Services</span>
        </>
      }
      heroDesc="Are you looking to validate warehouse operations and storage infrastructure before making key lending or business decisions? Hubcheck provides independent Warehouse Due Diligence Services that bring together physical verification, infrastructure checks, and operational reviews."
      heroImg="/images/about/due_diligence_hero.png"
      heroImgAlt="Hubcheck Professional Warehouse Due Diligence Services"
      aboutBadge="ISO 27001 & SOC 2 Certified"
      aboutTitle="About Hubcheck: Leading Warehouse Due Diligence Partner"
      aboutTexts={[
        "Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that serves as a trusted Warehouse Due Diligence partner for banks, NBFCs, and financial institutions.",
        "We help organizations strengthen warehouse verification, stock assessment, and collateral monitoring through structured due diligence assessments and clear reporting.",
        "Our structured assessment procedures, experienced professionals, and independent reports help clients build better operational visibility and support informed lending and monitoring decisions."
      ]}
      aboutImages={[
        "/images/about/scanner_check.png",
        "/images/about/due_diligence_compliance.png",
        "/images/about/due_diligence_site_visit.png",
        "/images/about/why_choose_hubcheck.png"
      ]}
      oversightTitle="Strengthen Warehouse Oversight Through Independent Due Diligence Services"
      oversightTexts={[
        "Warehouse infrastructure, operational conditions, and inventory records are critical factors to consider before warehouse financing, acquisition, or internal reviews. Standard reports may lack key details.",
        "Hubcheck’s Warehouse Due Diligence Services assist financial institutions with physical assessments, infrastructure reviews, documentation audits, and organized reporting. Our independent approach improves warehouse visibility and supports warehouse monitoring, risk assessment, and operational reviews.",
        "Whether you work with agricultural storage setups or industrial warehouses, Hubcheck delivers process-driven Warehouse Due Diligence Services that match your operational requirements."
      ]}
      oversightCardTitle="What are Warehouse Due Diligence Services?"
      oversightCardTexts={[
        "Warehouse Due Diligence Services involve independently assessing warehouse facilities, infrastructure, operational practices, and records to validate information and support internal reviews.",
        "Warehouse due diligence enables organizations to verify warehouse conditions, review infrastructure adequacy, check operational records, and record observations through clear reporting. Financial institutions commonly use these services for warehouse monitoring, collateral assessment, and operational reviews."
      ]}
      oversightListTitle="Warehouse Due Diligence Services may include:"
      oversightList={dueDiligenceIncludes}
      servicesTitle="Our Warehouse Due Diligence Services"
      services={servicesList}
      whyChooseUsTitle="Why Choose Hubcheck for Warehouse Due Diligence Services?"
      whyChooseUs={whyChooseUsList}
      industriesTitle="Industries We Serve"
      industries={industriesList}
      commoditiesTitle="Warehouse Due Diligence Expertise Across Commodity Storage Facilities"
      commoditiesDesc="Commodity-backed lending depends on reliable warehouse due diligence and storage conditions. Hubcheck provides Warehouse Due Diligence Services across a range of commodity storage facilities, helping financial institutions with structured physical checks, operational reviews, and reporting."
      commodities={commoditiesList}
      ctaTitle="Let’s Discuss Your Warehouse Due Diligence Requirements"
      ctaDesc="Whether you need warehouse due diligence, warehouse audits, stock audits, inventory verification, or warehouse inspections, our team can recommend the right approach to meet your operational requirements."
      faqs={faqItems}
    />
  )
}
