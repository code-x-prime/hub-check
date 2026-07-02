import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warehouse Inspection Services | Better Warehouse Oversight | Hubcheck',
  description: 'Hubcheck delivers independent Warehouse Inspection Services that help financial institutions assess warehouse conditions, operational practices, and supporting documentation.',
  keywords: 'Warehouse Inspection Services, Storage Condition Assessment, Operational Observation, Inventory Handling, Warehouse Infrastructure Review, Hubcheck',
}

const inspectionIncludes = [
  'Warehouse Facility Inspection',
  'Storage Condition Assessment',
  'Operational Observation',
  'Inventory Handling Assessment',
  'Documentation Review',
  'Warehouse Infrastructure Review',
  'Information Validation',
  'Inspection Reporting'
]

const servicesList = [
  {
    title: 'Warehouse Facility Inspection',
    desc: 'We conduct independent inspections of warehouse facilities to assess infrastructure, operational conditions, storage practices, and overall warehouse environments using structured inspection methodologies.'
  },
  {
    title: 'Storage Condition Assessment',
    desc: 'We assess storage conditions and make observations about warehouse environments, inventory storage practices, and operational arrangements.'
  },
  {
    title: 'Warehouse Operations Review',
    desc: 'We review warehouse operations through independent inspections that support operational visibility, process evaluation, and warehouse monitoring requirements.'
  },
  {
    title: 'Inventory Handling Assessment',
    desc: 'We watch inventory handling practices to back warehouse inspections, operational assessments, and internal review processes.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, operational documentation, and supporting information to improve warehouse information validation and inspection reporting.'
  },
  {
    title: 'Warehouse Infrastructure Assessment',
    desc: 'Warehouse infrastructure is evaluated using structured inspections and documentation of facility conditions, observations, and supporting information.'
  },
  {
    title: 'Information Validation',
    desc: 'We conduct independent warehouse checks, perform on-site audits, review warehouse documents, and use structured verification methods to validate warehouse-related information.'
  },
  {
    title: 'Inspection Reporting',
    desc: 'Our structured inspection reports include observations of warehouses, premises inspections, supporting information, and inspection findings for the client to review.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Site Inspection',
    desc: 'All warehouse inspections are conducted separately and include on-site observations, facility assessments, and documentation reviews.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Inspection Professionals',
    desc: 'Our inspection team applies consistent procedures to inspect warehouse conditions, storage methods, and warehouse operations.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Comprehensive Facility Assessment',
    desc: 'The inspection scope includes a review of the internal warehouse infrastructure, storage conditions, operational procedures, and supporting documentation.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Inspection Framework',
    desc: 'Every inspection adheres to standardized procedures to ensure consistency, transparency, and reliable reporting.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Actionable Inspection Reporting',
    desc: 'You get structured inspection reports that document observations and supporting information to help internal review processes.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Inspection Network',
    desc: 'Hubcheck provides Warehouse Inspection Services across multiple locations through a coordinated operational network.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'Independent warehouse inspections that support warehouse monitoring, collateral verification, operational assessments, and lending-related review processes.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured Warehouse Inspection Services built to improve warehouse visibility, operational oversight, and information validation across lending operations.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent warehouse inspection and assessment services that support warehouse monitoring, documentation review, and operational decision-making.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand inspection objectives, warehouse details, operational requirements, and the agreed scope of work.'
  },
  {
    title: 'Inspection Planning',
    desc: 'We plan inspection activities and review parameters and documentation requirements ahead of the warehouse visit.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We perform independent inspections to examine warehouse infrastructure, storage conditions, operational practices, and facility observations.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, operational documents, and supporting information that fit the inspection scope.'
  },
  {
    title: 'Assessment & Observation',
    desc: 'We document inspection observations and validate available information with structured inspection procedures.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured warehouse inspection reports, including observations and supporting information, for client review.'
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
  { title: 'Fertilizers', svgPath: '/icons/fertilizers.svg' },
  { title: 'Other Agricultural & Industrial Commodities', svgPath: '/icons/other-commodities.svg' }
]

import ServicePageTemplate from '../ServicePageTemplate'

const faqItems = [
  {
    question: 'Why are Warehouse Inspections important?',
    answer: 'Warehouse inspections increase visibility into warehouse operations, support information validation, and help organizations strengthen warehouse monitoring and operational review processes.'
  },
  {
    question: 'Do you provide Warehouse Inspection Services for commodity storage facilities?',
    answer: 'Yes, Hubcheck provides Warehouse Inspection Services for a wide range of commodity storage facilities, in accordance with the agreed scope of work and client requirements.'
  },
  {
    question: 'What does a warehouse inspection include?',
    answer: 'The inspection of a warehouse may involve facility inspections, storage condition assessments, operational observations, documentation reviews, infrastructure assessments, and structured reporting.'
  },
  {
    question: 'Do you provide Warehouse Inspection Services across India?',
    answer: 'Yes. Hubcheck handles warehouse inspection needs across different locations in India, depending on project scope and operational requirements.'
  }
]

export default function WarehouseInspectionPage() {
  return (
    <ServicePageTemplate
      heroBadge="Better Warehouse Oversight"
      heroTitle={
        <>
          Warehouse Inspection <br />
          <span className="text-[#001c55]">Services</span>
        </>
      }
      heroDesc="Are you looking for independent warehouse inspections to assess storage conditions, operational practices, and facility infrastructure? Hubcheck provides independent Warehouse Inspection Services to support warehouse monitoring, information validation, and operational reviews."
      heroImg="/images/about/warehouse_inspection_hero.png"
      heroImgAlt="Hubcheck Professional Warehouse Inspection Services"
      aboutBadge="ISO 27001 & SOC 2 Certified"
      aboutTitle="About Hubcheck: Dedicated Warehouse Inspection Partner"
      aboutTexts={[
        "Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that serves as an independent Warehouse Inspection partner for banks, NBFCs, and financial institutions.",
        "We help organizations strengthen warehouse verification, stock assessment, and collateral monitoring through structured physical inspections and clear reporting.",
        "Our structured inspection procedures, experienced professionals, and independent reports help clients build better operational visibility and support informed lending and monitoring decisions."
      ]}
      aboutImages={[
        "/images/about/scanner_check.png",
        "/images/about/warehouse_inspection_about_compliance.png",
        "/images/about/warehouse_inspection_site_visit.png",
        "/images/about/why_choose_hubcheck.png"
      ]}
      oversightTitle="Strengthen Warehouse Oversight Through Independent Warehouse Inspection Services"
      oversightTexts={[
        "Storage conditions, operational practices, and facility infrastructure can affect warehouse monitoring, collateral-backed lending, and stock management. Standard reports might miss key details about warehouse facilities.",
        "Hubcheck’s Warehouse Inspection Services assist financial institutions with facility inspections, storage condition assessments, operational observations, and organized reporting. Our independent approach improves warehouse visibility and supports warehouse monitoring, collateral assessment, and operational reviews.",
        "Whether you work with agricultural storage setups or industrial warehouses, Hubcheck delivers process-driven Warehouse Inspection Services that match your operational needs."
      ]}
      oversightCardTitle="What are Warehouse Inspection Services?"
      oversightCardTexts={[
        "Warehouse Inspection Services involve independently assessing warehouse facilities, storage conditions, operational practices, and records to validate information and support internal reviews.",
        "Warehouse inspections help organizations check facility infrastructure, verify operational conditions, review storage practices, and record observations through clear reporting. Financial institutions commonly use these services for warehouse monitoring, collateral assessment, and operational oversight."
      ]}
      oversightListTitle="Warehouse Inspection Services may include:"
      oversightList={inspectionIncludes}
      servicesTitle="Our Warehouse Inspection Services"
      services={servicesList}
      whyChooseUsTitle="Why Choose Hubcheck for Warehouse Inspection Services?"
      whyChooseUs={whyChooseUsList}
      industriesTitle="Industries We Serve"
      industries={industriesList}
      commoditiesTitle="Warehouse Inspection Expertise Across Commodity Storage Facilities"
      commoditiesDesc="Commodity-backed lending depends on reliable warehouse infrastructure and storage conditions. Hubcheck provides Warehouse Inspection Services across a range of commodity storage facilities, helping financial institutions with structured physical inspections, operational reviews, and reporting."
      commodities={commoditiesList}
      ctaTitle="Let’s Discuss Your Warehouse Inspection Requirements"
      ctaDesc="Whether you need warehouse inspections, warehouse audits, stock audits, inventory verification, collateral management audits, or warehouse due diligence, our team can recommend the right approach to meet your operational requirements."
      faqs={faqItems}
    />
  )
}
