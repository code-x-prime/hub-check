import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Stock Audit Services | Partner That Builds Business Confidence | Hubcheck',
  description: 'Hubcheck offers independent Stock Audit Services that help financial institutions with physical stock verification, quantity checks, inventory validation, and reporting.',
  keywords: 'Stock Audit Services, Stock Verification, Physical stock review, Inventory validation, Hubcheck',
}

const auditIncludes = [
  'Physical Stock Verification',
  'Inventory Validation',
  'Stock Record Review',
  'Warehouse Stock Assessment',
  'Documentation Review',
  'Collateral Monitoring Support',
  'Inventory Reconciliation Support',
  'Audit Reporting'
]

const servicesList = [
  {
    title: 'Physical Stock Verification',
    desc: 'We independently verify physical stock against warehouse records and documents to improve inventory visibility, collateral monitoring, and warehouse review processes.'
  },
  {
    title: 'Inventory Validation',
    desc: 'We validate inventory information through structured physical checks and document reviews to support inventory validation and warehouse monitoring.'
  },
  {
    title: 'Stock Record Review',
    desc: 'We examine stock registers, inventory records, and supporting documents to help strengthen stock information validation and internal reviews.'
  },
  {
    title: 'Warehouse Stock Assessment',
    desc: 'We assess warehouse stock conditions through structured physical verification, inventory observations, and independent reporting aligned with operational requirements and the agreed scope of work.'
  },
  {
    title: 'Documentation Review',
    desc: 'We review warehouse records, inventory documents, stock statements, and supporting information to improve validation and reporting consistency.'
  },
  {
    title: 'Collateral Monitoring Support',
    desc: 'We support collateral-backed lending through structured stock verification, warehouse observations, document reviews, and reporting within the agreed audit scope.'
  },
  {
    title: 'Inventory Reconciliation Support',
    desc: 'We help with inventory reconciliation by comparing physical stock to warehouse records and documenting findings for client review.'
  },
  {
    title: 'Audit Reporting',
    desc: 'We deliver structured stock audit reports that document verification findings, inventory observations, supporting details, and assessment outcomes to support internal review processes.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Stock Audit Specialists',
    desc: 'We bring dedicated expertise in stock verification, inventory validation, warehouse assessments, and collateral monitoring for financial institutions.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Experienced Audit Professionals',
    desc: 'Our team follows structured stock audit methodologies to deliver consistent verification, documentation review, and reporting services.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Independent Verification Approach',
    desc: 'Every stock audit uses independent physical verification and documentation assessment within the agreed scope.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Operations',
    desc: 'We support stock audit requirements across multiple warehouse locations through a coordinated network.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Structured Reporting',
    desc: 'We provide organized reports that clearly document stock observations, verification findings, and supporting information for easy client review.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Technology-Enabled Audit Processes',
    desc: 'Technology-supported workflows help make stock audit activities more efficient, consistent, and well-documented while maintaining high reporting standards.'
  }
]

const industriesList = [
  {
    name: 'Banks',
    desc: 'We support banks with independent stock audits, inventory verification, collateral monitoring, and warehouse stock assessments that improve lending review and operational monitoring.'
  },
  {
    name: 'NBFCs',
    desc: 'Structured Stock Audit Services designed to help NBFCs with inventory validation, stock verification, collateral assessment, and warehouse monitoring through independent checks.'
  },
  {
    name: 'Financial Institutions',
    desc: 'Independent stock verification and warehouse stock assessment services that help financial institutions strengthen information validation, inventory oversight, and internal review frameworks.'
  }
]

const processList = [
  {
    title: 'Requirement Assessment',
    desc: 'We understand your audit objectives, inventory details, warehouse information, and the agreed scope of work.'
  },
  {
    title: 'Audit Planning',
    desc: 'We plan verification activities, documentation needs, and the stock assessment approach.'
  },
  {
    title: 'Physical Stock Verification',
    desc: 'We carry out independent physical verification of the available stock and inventory.'
  },
  {
    title: 'Documentation Review',
    desc: 'We examine stock registers, inventory records, and supporting warehouse documents.'
  },
  {
    title: 'Assessment & Validation',
    desc: 'We compare physical observations with records and document the verification findings.'
  },
  {
    title: 'Reporting',
    desc: 'We provide structured stock audit reports, including observations and supporting information, for your review.'
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
    question: 'Why do financial institutions require stock audits?',
    answer: 'Financial institutions use stock audits to support collateral monitoring, inventory validation, warehouse oversight, and internal review requirements linked to lending activities.'
  },
  {
    question: 'Do you provide Stock Audit Services for commodity storage facilities?',
    answer: 'Yes, Hubcheck provides Stock Audit Services across many commodity storage facilities, depending on the agreed scope and client needs.'
  },
  {
    question: 'Which commodities can be covered during a stock audit?',
    answer: 'Our Stock Audit Services support warehouses that store agricultural and industrial commodities, including rice, wheat, cotton, sugar, pulses, oilseeds, spices, fertilizers, and more.'
  },
  {
    question: 'What activities are included in a stock audit?',
    answer: 'Stock audits may include physical stock verification, inventory validation, stock record review, documentation assessment, warehouse observations, and structured reporting.'
  },
  {
    question: 'Do you provide Stock Audit Services across India?',
    answer: 'Yes. Hubcheck supports stock audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    question: 'How can I get started with Hubcheck’s Stock Audit Services?',
    answer: 'Reach out to our team to discuss your stock audit requirements, objectives, and scope. We will recommend an audit approach aligned with your operational requirements and the agreed scope of work.'
  }
]

export default function StockAuditPage() {
  return (
    <ServicePageTemplate
      heroBadge="Builds Business Confidence"
      heroTitle={
        <>
          Stock Audit <br />
          <span className="text-[#001c55]">Services</span>
        </>
      }
      heroDesc="Every stock-backed transaction needs validation. Hubcheck provides independent Stock Audit Services to verify physical stock, check quantity records, and support collateral monitoring for financial institutions."
      heroImg="/images/about/stock_audit_hero.png"
      heroImgAlt="Hubcheck Stock Audit and Stock Verification"
      aboutBadge="ISO 27001 & SOC 2 Certified"
      aboutTitle="About Hubcheck: Dedicated Stock Audit Service Company"
      aboutTexts={[
        "Hubcheck supports financial institutions by providing independent Stock Audit Services that strengthen warehouse verification, stock assessment, and collateral monitoring.",
        "Since 2015, we have worked with banks, NBFCs, and corporate clients to deliver structured stock audits, physical verification, inventory validation, documentation reviews, and due diligence checks.",
        "Our structured approach, pan-India network, and independent reporting help clients improve operational visibility and support informed decision-making."
      ]}
      aboutImages={[
        "/images/about/scanner_check.png",
        "/images/about/audit_files.png",
        "/images/about/stock_verification_about.png",
        "/images/about/why_choose_hubcheck.png"
      ]}
      oversightTitle="Strengthen Stock Visibility Through Independent Stock Audit Services"
      oversightTexts={[
        "Accurate stock information is crucial for warehouse monitoring, collateral-backed lending, and inventory management. Independent stock audits help organizations check actual stock, review inventory records, and strengthen internal verification through proper physical assessments.",
        "Hubcheck’s Stock Audit Services support financial institutions with independent stock verification, inventory validation, documentation reviews, and organized reporting. Our practical approach improves information visibility while supporting warehouse monitoring, collateral assessment, and operational review.",
        "Whether you work with banks, NBFCs, or other financial institutions, Hubcheck delivers process-driven Stock Audit Services that match your operational requirements and agreed scope of work."
      ]}
      oversightCardTitle="What are Stock Audit Services?"
      oversightCardTexts={[
        "Stock Audit Services involve independently assessing physical stock, inventory records, supporting documents, and warehouse information to validate and support internal reviews.",
        "Stock audits help organizations compare actual inventory with warehouse records, check stock-related documents, review and validate available inventory information, and record observations through clear reporting. Financial institutions commonly use these services for warehouse monitoring, collateral assessment, inventory reviews, and operational oversight."
      ]}
      oversightListTitle="Stock Audit Services may include:"
      oversightList={auditIncludes}
      servicesTitle="Our Stock Audit Services"
      services={servicesList}
      serviceSlug="stock-audit"
      whyChooseUsTitle="Why Choose Hubcheck for Stock Audit Services?"
      whyChooseUs={whyChooseUsList}
      industriesTitle="Industries We Serve"
      industries={industriesList}
      commoditiesTitle="Stock Audit Expertise Across Commodity Storage Facilities"
      commoditiesDesc="Accurate stock information is essential for commodity-backed lending and warehouse monitoring. Hubcheck provides Stock Audit Services across many commodity storage facilities, helping financial institutions with structured stock verification, inventory validation, physical assessments, documentation reviews, and reporting."
      commodities={commoditiesList}
      ctaTitle="Bring Greater Confidence to Every Stock Assessment with Hubcheck"
      ctaDesc="Independent Stock Audit Services designed to strengthen inventory validation, stock visibility, and collateral monitoring through structured verification and reporting."
      faqs={faqItems}
    />
  )
}
