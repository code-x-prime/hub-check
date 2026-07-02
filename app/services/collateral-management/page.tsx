import type { Metadata } from 'next'
import ServicePageTemplate from '../ServicePageTemplate'


export const metadata: Metadata = {
  title: 'Collateral Management Audit Services | Protect Every Lending Decision | Hubcheck',
  description: 'Hubcheck provides independent Collateral Management Audit Services that improve collateral visibility, warehouse monitoring, and information validation through structured audits.',
  keywords: 'Collateral Management Audit, Collateral Verification, Physical Stock Observation, Inventory Validation, Warehouse Inspection, Hubcheck',
}

const collateralIncludes = [
  'Collateral Verification',
  'Warehouse Assessment',
  'Physical Stock Observation',
  'Documentation Review',
  'Inventory Validation',
  'Warehouse Inspection',
  'Information Validation',
  'Audit Reporting'
]

const servicesList = [
  {
    title: 'Collateral Verification',
    desc: 'We validate collateral-backed assets through independent warehouse verification, physical observations, documentation reviews, and structured reporting to support collateral monitoring and information validation.'
  },
  {
    title: 'Warehouse Collateral Assessment',
    desc: 'We assess warehouse-stored collateral through structured warehouse verification, operational observations, and documentation checks that follow the agreed audit goals.'
  },
  {
    title: 'Physical Stock Assessment',
    desc: 'We conduct independent physical checks of stock held as collateral to support warehouse monitoring, information validation, and internal review processes.'
  },
  {
    title: 'Inventory Validation',
    desc: 'We review inventory details using structured verification methods to improve collateral visibility and the accuracy of warehouse information.'
  },
  {
    title: 'Documentation Review',
    desc: 'We conduct independent reviews of warehouse records, collateral documents, inventory records, and supporting information.'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We conduct warehouse inspections to examine storage conditions, operational practices, and warehouse infrastructure, as well as observations related to collateral monitoring.'
  },
  {
    title: 'Information Validation',
    desc: 'We independently validate collateral-related information through structured warehouse assessments, physical checks, and documentation reviews.'
  },
  {
    title: 'Audit Reporting',
    desc: 'We deliver structured audit reports that document collateral observations, verification findings, and supporting information to help internal review and monitoring processes.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Collateral Verification',
    desc: 'Every collateral audit happens independently through warehouse verification and physical assessment within the agreed scope of work.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Warehouse-Based Assessment',
    desc: 'Our audit method checks warehouse conditions, inventory observations, and collateral-related information using structured procedures.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Structured Documentation Review',
    desc: 'We independently review collateral records and supporting documents to improve information validation and report quality.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Audit Methodology',
    desc: 'We use standardized audit procedures that support transparency, consistent operations, and reliable collateral checks.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Actionable Audit Reporting',
    desc: 'You receive structured reports that document collateral observations, verification findings, and supporting information for internal review.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Audit Network',
    desc: 'Hubcheck provides Collateral Management Audit Services across multiple warehouse locations through a coordinated operational network.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'We support secured lending with independent collateral verification, warehouse assessments, and structured audit reporting.'
  },
  {
    name: 'NBFCs',
    desc: 'We strengthen collateral monitoring and warehouse verification through independent audit services tailored to lending operations.'
  },
  {
    name: 'Financial Institutions',
    desc: 'We offer independent collateral management audits that improve information validation, warehouse oversight, and portfolio review processes.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand collateral monitoring objectives, warehouse information, operational requirements, and the agreed audit scope.'
  },
  {
    title: 'Audit Planning',
    desc: 'We plan verification activities, documentation reviews, and collateral assessment steps.'
  },
  {
    title: 'Warehouse Verification',
    desc: 'We visit warehouses to verify pledged inventory and note relevant warehouse observations.'
  },
  {
    title: 'Physical Assessment',
    desc: 'We check warehouse conditions, pledged inventory, and operational observations within the agreed scope.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review collateral records, warehouse documents, inventory information, and supporting documents.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured collateral management audit reports with observations, verification findings, and supporting information for client review.'
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

const faqItems = [
  {
    question: 'What are Collateral Management Audit Services?',
    answer: 'Collateral Management Audit Services involve independently reviewing pledged assets, warehouse information, supporting documentation, and operational observations through structured audit methodologies.'
  },
  {
    question: 'Why are Collateral Management Audits important?',
    answer: 'They improve collateral visibility, strengthen information validation, support warehouse monitoring, and help financial institutions manage collateral-backed lending.'
  },
  {
    question: 'Do you provide Collateral Management Audit Services for commodity storage facilities?',
    answer: 'Yes. Hubcheck conducts collateral management audits for many types of commodity storage facilities, in accordance with the agreed scope of work and client requirements.'
  },
  {
    question: 'Which commodities can be covered during collateral audits?',
    answer: 'Our services cover warehouses storing rice, wheat, cotton, sugar, pulses, oilseeds, spices, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    question: 'What activities are included in a Collateral Management Audit?',
    answer: 'Services may include collateral verification, warehouse assessments, physical stock verification, documentation reviews, inventory validation, warehouse inspections, and structured reporting.'
  },
  {
    question: 'Do you provide Collateral Management Audit Services across India?',
    answer: 'Yes. Hubcheck supports collateral management audit requirements across different locations in India, depending on project scope and operational requirements.'
  },
  {
    question: 'How can I get started with Hubcheck’s Collateral Management Audit Services?',
    answer: 'Reach out to our team to talk about your collateral monitoring needs, operational goals, and service scope. We will suggest a suitable audit approach that fits your business requirements.'
  }
]

export default function CollateralManagementPage() {
  return (
    <ServicePageTemplate
      heroBadge="Protect Every Lending Decision"
      heroTitle={
        <>
          Collateral Management <br />
          <span className="text-[#001c55]">Audit Services</span>
        </>
      }
      heroDesc="Are you looking to strengthen collateral monitoring and information validation? Since 2015, Hubcheck has offered independent Collateral Management Audit Services that help financial institutions with structured warehouse verification, physical stock assessment, and clear reporting."
      heroImg="/images/about/collateral_management_hero.png"
      heroImgAlt="Hubcheck Professional Collateral Management Audit Services"
      aboutBadge="ISO 27001 & SOC 2 Certified"
      aboutTitle="About Hubcheck: Leading Collateral Management Audit Partner"
      aboutTexts={[
        "Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that serves as a trusted Collateral Management Audit partner for banks, NBFCs, and financial institutions.",
        "We help organizations strengthen warehouse verification, stock assessment, and collateral monitoring through structured physical assessments and clear reporting.",
        "Our structured audit procedures, experienced professionals, and independent reports help clients build better operational visibility and support informed lending and monitoring decisions."
      ]}
      aboutImages={[
        "/images/about/scanner_check.png",
        "/images/about/collateral_management_document.png",
        "/images/about/collateral_management_site_visit.png",
        "/images/about/why_choose_hubcheck.png"
      ]}
      oversightTitle="Strengthen Collateral Visibility Through Independent Collateral Management Audit Services"
      oversightTexts={[
        "Pledged inventory, storage conditions, and warehouse infrastructure are critical for collateral monitoring, warehouse financing, and internal reviews. Standard reports may miss key details about stored collateral.",
        "Hubcheck’s Collateral Management Audit Services assist financial institutions with physical stock verification, warehouse assessments, documentation reviews, and organized reporting. Our independent approach improves collateral visibility and supports warehouse monitoring, risk assessment, and operational reviews.",
        "Whether you work with agricultural storage setups or industrial warehouses, Hubcheck delivers process-driven Collateral Management Audit Services that match your operational requirements."
      ]}
      oversightCardTitle="What are Collateral Management Audit Services?"
      oversightCardTexts={[
        "Collateral Management Audit Services involve independently assessing warehouse facilities, pledged stock, storage conditions, and records to validate information and support internal reviews.",
        "Collateral management audits enable organizations to verify pledged assets, check warehouse conditions, review storage practices, and record observations through clear reporting. Financial institutions commonly use these services for warehouse monitoring, collateral assessment, and operational reviews."
      ]}
      oversightListTitle="Collateral Management Audit Services may include:"
      oversightList={collateralIncludes}
      servicesTitle="Our Collateral Management Audit Services"
      services={servicesList}
      whyChooseUsTitle="Why Choose Hubcheck for Collateral Management Audit Services?"
      whyChooseUs={whyChooseUsList}
      industriesTitle="Industries We Serve"
      industries={industriesList}
      commoditiesTitle="Collateral Management Audit Expertise Across Commodity Storage Facilities"
      commoditiesDesc="Commodity-backed lending depends on reliable collateral verification and storage conditions. Hubcheck provides Collateral Management Audit Services across a range of commodity storage facilities, helping financial institutions with structured physical checks, documentation reviews, and reporting."
      commodities={commoditiesList}
      ctaTitle="Let’s Discuss Your Collateral Management Audit Requirements"
      ctaDesc="Whether you need collateral management audits, warehouse audits, stock audits, inventory verification, or warehouse due diligence, our team can recommend the right approach to meet your operational requirements."
      faqs={faqItems}
    />
  )
}
