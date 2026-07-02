
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Warehouse Audit Services for Better Lending Confidence | Hubcheck',
  description: "Since 2015, Hubcheck has delivered independent Warehouse Audit Services that help banks, NBFCs, and financial institutions strengthen warehouse verification through physical inspections, documentation reviews, and structured reporting.",
  keywords: 'Warehouse Audit Services, Stock Verification, Inventory Verification, Warehouse Inspection, Collateral Assessment Support, Warehouse Due Diligence, Hubcheck',
}

const auditServiceIncludes = [
  'Physical Warehouse Verification',
  'Stock Verification',
  'Inventory Verification',
  'Warehouse Inspection',
  'Documentation Review',
  'Collateral Assessment Support',
  'Warehouse Due Diligence',
  'Audit Reporting'
]

const servicesList = [
  {
    title: 'Physical Warehouse Audit',
    desc: 'We support warehouse monitoring through structured physical audits that validate conditions, operational practices, inventory observations, and other information required by financial institutions.'
  },
  {
    title: 'Stock Verification',
    desc: 'We independently check physical stock against warehouse records and documents to improve stock visibility, collateral monitoring, and internal review processes.'
  },
  {
    title: 'Inventory Verification',
    desc: 'We validate inventory records through clear inventory verification activities that support accuracy, warehouse monitoring, and operational assessments.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We conduct systematic warehouse inspections to review storage conditions, infrastructure, inventory handling, and operational practices through independent verification.'
  },
  {
    title: 'Documentation Review',
    desc: 'We examine warehouse documents, inventory records, stock registers, and supporting information to help strengthen warehouse information validation.'
  },
  {
    title: 'Collateral Assessment Support',
    desc: 'We help with collateral monitoring through structured warehouse verification, stock observations, document review, and reporting that fits operational and lending review needs.'
  },
  {
    title: 'Warehouse Due Diligence',
    desc: 'We provide warehouse due diligence support through operational assessments, document reviews, physical verification, and information validation prior to important business or lending decisions.'
  },
  {
    title: 'Audit Reporting',
    desc: 'We deliver clear audit reports that document warehouse observations, verification findings, supporting details, and assessment outcomes to help with internal review and decision-making.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Warehouse Audit Specialists',
    desc: 'We focus on warehouse audits, stock verification, inventory verification, warehouse inspections, and collateral management audits for financial institutions.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Audit Team',
    desc: 'Our professionals follow structured warehouse audit methodologies to deliver consistent verification, inspection, and reporting services.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Structured Audit Methodology',
    desc: 'Every warehouse audit follows defined procedures that support transparency, consistency, and proper validation of information.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Operations',
    desc: 'Hubcheck handles warehouse audit requirements across multiple locations through a well-coordinated network.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Independent Reporting',
    desc: 'We provide structured audit reports that clearly document observations, verification findings, and supporting information for easy client review.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Technology-Driven Processes',
    desc: 'We use technology-enabled workflows to make warehouse audits, documentation, verification, and reporting more efficient while maintaining consistency.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'We support warehouse audits, collateral verification, stock assessment, and warehouse monitoring through structured verification, physical inspections, and independent reporting tailored for banking institutions.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured Warehouse Audit Services that help NBFCs strengthen warehouse verification, inventory validation, collateral monitoring, and internal review processes through independent assessments.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent warehouse verification, stock audits, warehouse inspections, and due diligence services designed to strengthen warehouse information validation, operational oversight, and lending review requirements.'
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

import ServicePageTemplate from '../ServicePageTemplate'

const faqItems = [
  {
    question: 'Why do financial institutions require warehouse audits?',
    answer: 'Financial institutions use warehouse audits to support collateral monitoring, warehouse verification, inventory validation, and internal review requirements for secured lending and commodity finance.'
  },
  {
    question: 'What activities are included in a warehouse audit?',
    answer: 'Warehouse audits may include physical warehouse verification, stock assessment, inventory verification, documentation review, warehouse inspections, collateral assessment support, and structured reporting.'
  },
  {
    question: 'Does Hubcheck provide stock verification services?',
    answer: 'Yes. Hubcheck provides independent stock verification services to support warehouse audits, inventory validation, and warehouse monitoring requirements.'
  },
  {
    question: 'Can warehouse audits support collateral monitoring?',
    answer: 'Yes. Warehouse audits may support collateral monitoring by independently reviewing warehouse information, stock records, inventory observations, and supporting documentation within the agreed scope.'
  },
  {
    question: 'Do you provide warehouse audit services across India?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, subject to project scope and operational requirements.'
  },
  {
    question: 'Do you provide Warehouse Audit Services for commodity finance?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements for commodity finance through structured warehouse verification, stock assessment, inventory validation, documentation review, and reporting, in line with the agreed scope.'
  },
  {
    question: 'Which commodities can be covered under Warehouse Audit Services?',
    answer: 'Hubcheck supports warehouse audits across a wide range of commodity storage facilities, including agricultural and other commodities, in line with client requirements and the agreed scope of work.'
  }
]

export default function WarehouseAuditServicesPage() {
  return (
    <ServicePageTemplate
      heroBadge="Secured Lending Confidence"
      heroTitle={
        <>
          Warehouse Audit Services for <br />
          <span className="text-[#001c55]">Better Lending Confidence</span>
        </>
      }
      heroDesc="Inaccurate warehouse records, stock mismatches, and poor collateral visibility can create real problems in lending, monitoring, and risk assessment. Since 2015, Hubcheck has delivered independent Warehouse Audit Services that help banks, NBFCs, and financial institutions strengthen warehouse verification through physical inspections, documentation reviews, and structured reporting."
      heroImg="/images/about/warehouse_inspection_about.png"
      heroImgAlt="Hubcheck Professional Warehouse Audit and Stock Verification"
      aboutBadge="ISO 27001 & SOC 2 Certified"
      aboutTitle="About Hubcheck: Leading Warehouse Audit Service Company"
      aboutTexts={[
        "Hubcheck works with banks, NBFCs, and financial institutions by delivering structured Warehouse Audit Services that strengthen warehouse verification, stock assessment, collateral monitoring, and information validation.",
        "As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we provide warehouse audits, stock audits, inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence services. This helps organizations build consistent warehouse review systems.",
        "Through independent checks, on-ground physical inspections, document reviews, and straightforward reporting, Hubcheck helps clients get better warehouse visibility and supports smarter operational and lending decisions."
      ]}
      aboutImages={[
        "/images/about/scanner_check.png",
        "/images/about/audit_files.png",
        "/images/about/stock_verification_about.png",
        "/images/about/why_choose_hubcheck.png"
      ]}
      oversightTitle="Strengthen Warehouse Oversight Through Independent Warehouse Audit Services"
      oversightTexts={[
        "Warehouses play a key role in secured lending, collateral management, and inventory monitoring. Maintaining accurate warehouse information is crucial for teams that review pledged assets, track inventory, and conduct internal risk assessments.",
        "Hubcheck’s Warehouse Audit Services focus on structured physical inspections, stock validation, documentation reviews, inventory assessment, and clear reporting. Our independent approach helps financial institutions strengthen warehouse information validation and meet their internal monitoring and operational review needs.",
        "Whether you work with banks, NBFCs, or other financial institutions, Hubcheck delivers practical warehouse audit services that match your operational requirements and audit goals."
      ]}
      oversightCardTitle="What are Warehouse Audit Services?"
      oversightCardTexts={[
        "Warehouse Audit Services mean a thorough assessment of warehouse operations, physical inventory, supporting documents, storage conditions, and records to validate information and support internal reviews.",
        "Warehouse audits enable organizations to independently verify warehouse details through physical verification, inventory validation, document assessment, and structured reporting. Financial institutions often use these services for warehouse monitoring, collateral oversight, and operational reviews."
      ]}
      oversightListTitle="Warehouse Audit Services may include the following:"
      oversightList={auditServiceIncludes}
      servicesTitle="Our Warehouse Audit Services"
      services={servicesList}
      serviceSlug="warehouse-audit"
      whyChooseUsTitle="Why Choose Hubcheck as your Trusted Warehouse Audit Company?"
      whyChooseUs={whyChooseUsList}
      industriesTitle="Industries We Serve"
      industries={industriesList}
      commoditiesTitle="Warehouse Audit Expertise Across Commodity Storage Facilities"
      commoditiesDesc="Commodity-backed lending depends on reliable warehouse information, independent verification, and effective warehouse oversight. Hubcheck supports commodity storage facilities with independent Warehouse Audit Services that improve warehouse verification, collateral monitoring, and information validation."
      commodities={commoditiesList}
      ctaTitle="Let’s Discuss Your Warehouse Audit Requirements"
      ctaDesc="Whether you need warehouse audits, stock verification, inventory verification, warehouse inspections, collateral management audits, or warehouse due diligence services, our team can recommend the right approach to meet your operational and business needs."
      faqs={faqItems}
    />
  )
}
