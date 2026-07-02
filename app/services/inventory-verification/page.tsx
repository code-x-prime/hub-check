import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Inventory Verification Services | Better Inventory Visibility | Hubcheck',
  description: 'Hubcheck delivers independent Inventory Verification Services that combine physical verification, documentation review, and structured reporting to strengthen inventory visibility.',
  keywords: 'Inventory Verification Services, Physical Inventory Verification, Stock Reconciliation, Inventory Record Validation, Hubcheck',
}

const verificationIncludes = [
  'Physical Inventory Verification',
  'Inventory Record Validation',
  'Warehouse Inventory Assessment',
  'Stock Reconciliation Support',
  'Documentation Review',
  'Information Validation',
  'Collateral Monitoring Support',
  'Verification Reporting'
]

const servicesList = [
  {
    title: 'Physical Inventory Verification',
    desc: 'We validate available inventory through independent physical checks and documented observations to improve inventory visibility and warehouse monitoring.'
  },
  {
    title: 'Inventory Record Validation',
    desc: 'We review inventory records and supporting information to strengthen inventory validation and internal verification processes.'
  },
  {
    title: 'Warehouse Inventory Assessment',
    desc: 'We assess inventory stored in warehouse environments through structured verification methods and operational observations.'
  },
  {
    title: 'Stock Reconciliation Support',
    desc: 'We support inventory reconciliation by comparing physical stock with records and documenting observations for your review.'
  },
  {
    title: 'Documentation Review',
    desc: 'We examine inventory registers, warehouse documents, and supporting records to strengthen the validation of inventory information.'
  },
  {
    title: 'Information Validation',
    desc: 'We independently validate inventory-related information through structured verification activities and documentation assessment.'
  },
  {
    title: 'Collateral Monitoring Support',
    desc: 'We support collateral-backed lending through inventory verification, warehouse observations, and organized reporting within the agreed scope.'
  },
  {
    title: 'Verification Reporting',
    desc: 'We deliver structured reports that document verification findings, inventory observations, and supporting information for internal review processes.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Inventory Verification',
    desc: 'Every verification assignment uses independent physical verification and structured documentation review.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Verification Team',
    desc: 'Our professionals follow defined verification methodologies to deliver consistent inventory assessment and reporting.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Process-Driven Methodology',
    desc: 'Standardized verification procedures support operational consistency, transparency, and information validation.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Operations',
    desc: 'We support inventory verification requirements across multiple warehouse locations through a coordinated operational network.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Structured Reporting',
    desc: 'You receive organized reports that document inventory observations, verification findings, and supporting information.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Technology-Enabled Processes',
    desc: 'Technology-supported workflows improve verification efficiency, documentation management, and reporting consistency.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'Independent inventory verification supporting warehouse monitoring, collateral validation, and operational review processes.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured inventory verification services designed to strengthen inventory visibility and lending-related review activities.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent inventory assessment services supporting warehouse verification, information validation, and operational oversight.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand verification objectives, inventory requirements, warehouse information, and the agreed scope of work.'
  },
  {
    title: 'Verification Planning',
    desc: 'We prepare the verification methodology, documentation requirements, and operational approach.'
  },
  {
    title: 'Physical Inventory Verification',
    desc: 'We conduct independent verification of available inventory inside the warehouse environment.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review inventory records, warehouse documentation, and supporting information.'
  },
  {
    title: 'Assessment & Validation',
    desc: 'We compare physical observations with available inventory records and document verification findings.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured inventory verification reports for client review and internal assessment processes.'
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
    question: 'What are Inventory Verification Services?',
    answer: 'Inventory Verification Services involve independently validating available inventory through physical verification, documentation review, and comparison with inventory records.'
  },
  {
    question: 'Why is Inventory Verification important?',
    answer: 'Inventory verification improves inventory visibility, supports warehouse monitoring, strengthens information validation, and assists operational review processes.'
  },
  {
    question: 'Do you provide Inventory Verification for commodity storage facilities?',
    answer: 'Yes. Hubcheck provides Inventory Verification Services across a wide range of commodity storage facilities, depending on the agreed scope of work and client requirements.'
  },
  {
    question: 'Which commodities can be covered during inventory verification?',
    answer: 'Our Inventory Verification Services cover warehouses storing rice, wheat, cotton, sugar, pulses, oilseeds, spices, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    question: 'What activities are included in Inventory Verification?',
    answer: 'Services may include physical inventory verification, inventory record validation, warehouse inventory assessment, documentation review, stock reconciliation support, and structured reporting.'
  }
]

export default function InventoryVerificationPage() {
  return (
    <ServicePageTemplate
      heroBadge="Better Inventory Visibility"
      heroTitle={
        <>
          Inventory Verification <br />
          <span className="text-[#001c55]">Services</span>
        </>
      }
      heroDesc="Is your inventory information ready for important lending and review processes? Since 2015, Hubcheck has had a team of experts helping financial institutions strengthen inventory validation through independent Inventory Verification Services. We combine physical verification, documentation review, and structured reporting to strengthen inventory visibility and support informed operations."
      heroImg="/images/about/inventory_verification_hero.png"
      heroImgAlt="Hubcheck Professional Inventory Verification Services"
      aboutBadge="ISO 27001 & SOC 2 Certified"
      aboutTitle="About Hubcheck: Leading Inventory Verification Partner"
      aboutTexts={[
        "Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited Inventory Verification partner that helps banks, NBFCs, and financial institutions strengthen inventory validation through independent warehouse verification and structured reporting.",
        "Our expertise covers inventory verification, warehouse audits, stock audits, warehouse inspections, collateral management audits, and warehouse due diligence. This helps organizations improve inventory visibility and support better operational and lending review processes.",
        "Through standard verification methods, physical checks, documentation review, and clear reporting, we help clients build consistent inventory assessment systems."
      ]}
      aboutImages={[
        "/images/about/scanner_check.png",
        "/images/about/inventory_verification_about_compliance.png",
        "/images/about/inventory_verification_site_visit.png",
        "/images/about/why_choose_hubcheck.png"
      ]}
      oversightTitle="Strengthen Inventory Visibility Through Independent Inventory Verification Services"
      oversightTexts={[
        "Accurate inventory information is key for inventory monitoring, collateral monitoring, and internal reviews. Independent inventory verification helps organizations check stored goods, review records, and support internal verification through proper physical checks.",
        "Hubcheck’s Inventory Verification Services assist financial institutions with physical inventory verification, inventory record validation, stock reconciliation support, and organized reporting. Our structured approach improves stock visibility and supports warehouse monitoring, collateral assessment, and operational reviews.",
        "Whether you work with banks, NBFCs, or other financial institutions, Hubcheck delivers practical Inventory Verification Services that match your operational needs and agreed scope of work."
      ]}
      oversightCardTitle="What are Inventory Verification Services?"
      oversightCardTexts={[
        "Inventory Verification Services involve independently checking physical inventory, record accuracy, warehouse conditions, and documents to validate information and support internal reviews.",
        "Inventory verification enables organizations to check actual stock against records, examine warehouse documents, review and validate inventory information, and record observations through clear reporting. Financial institutions commonly use these services for warehouse monitoring, collateral assessment, stock checks, and operational reviews."
      ]}
      oversightListTitle="Inventory Verification Services may include:"
      oversightList={verificationIncludes}
      servicesTitle="Our Inventory Verification Services"
      services={servicesList}
      whyChooseUsTitle="Why Choose Hubcheck for Inventory Verification Services?"
      whyChooseUs={whyChooseUsList}
      industriesTitle="Industries We Serve"
      industries={industriesList}
      commoditiesTitle="Inventory Verification Expertise Across Commodity Storage Facilities"
      commoditiesDesc="Reliable inventory information is crucial for commodity-backed lending and warehouse monitoring. Hubcheck provides Inventory Verification Services across a range of commodity storage facilities, helping financial institutions with structured physical checks, record reviews, documentation validation, and reporting."
      commodities={commoditiesList}
      ctaTitle="Let’s Discuss Your Inventory Verification Requirements"
      ctaDesc="Whether you need inventory verification, warehouse audits, stock audits, warehouse inspections, collateral management audits, or warehouse due diligence, our team can recommend the right approach to meet your operational requirements."
      faqs={faqItems}
    />
  )
}
