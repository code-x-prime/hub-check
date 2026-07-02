import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Warehouse Audit Partner for Banks | Secured Lending Oversight | Hubcheck',
  description: 'Hubcheck works with banks to independently assess warehouses, validate collateral details, and strengthen lending oversight through thorough warehouse audits and clear reporting.',
  keywords: 'Warehouse Audit for Banks, Secured Lending, Collateral Validation, Banking Audits, Hubcheck',
}

const solutionsList = [
  {
    title: 'Warehouse Audit',
    desc: 'We perform independent warehouse audits that enable banks to review operations, validate warehouse information, and enhance collateral monitoring ahead of lending and portfolio reviews.',
    img: '/warehouse-audit/s-1.png'
  },
  {
    title: 'Stock Verification',
    desc: 'We verify physical stock against records to improve visibility, collateral oversight, and warehouse monitoring for secured lending portfolios.',
    img: '/stock-audit/s-1.png'
  },
  {
    title: 'Inventory Verification',
    desc: 'We validate inventory details through independent assessments, thereby enhancing warehouse visibility and supporting lending-related reviews.',
    img: '/inventory-verification/s-1.png'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We assess infrastructure, storage practices, and operational conditions through independent inspections that meet warehouse monitoring requirements.',
    img: '/warehouse-inspection/s-1.png'
  },
  {
    title: 'Collateral Management Audit',
    desc: 'We strengthen collateral oversight with independent warehouse verification, stock observations, documentation reviews, and structured audit reporting.',
    img: '/collateral-management/s-1.png'
  },
  {
    title: 'Warehouse Due Diligence',
    desc: 'We evaluate warehouse operations, infrastructure, documentation, and readiness before warehouse financing and other key lending decisions.',
    img: '/warehouse-due-diligence/s-1.png'
  }
]

const challengesList = [
  {
    title: 'Collateral Visibility',
    desc: 'We improve visibility into pledged warehouse assets through independent verification and structured assessments.'
  },
  {
    title: 'Stock Validation',
    desc: 'We confirm physical stock and warehouse information to support collateral-backed lending processes.'
  },
  {
    title: 'Warehouse Monitoring',
    desc: 'We provide ongoing oversight through independent audits, inspections, and verification activities.'
  },
  {
    title: 'Independent Verification',
    desc: 'We reduce reliance on self-reported data through objective on-the-ground verification and physical assessments.'
  },
  {
    title: 'Information Validation',
    desc: 'We strengthen internal reviews by independently validating warehouse information and supporting documentation.'
  },
  {
    title: 'Operational Risk Visibility',
    desc: 'We identify operational issues that may require attention before lending or portfolio decisions are made.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-approach.svg',
    title: 'Independent Audit Approach',
    desc: 'We deliver objective warehouse audits that provide reliable information for lending and collateral review processes.'
  },
  {
    svgPath: '/icons/experience-in-warehouse-finance.svg',
    title: 'Experience in Warehouse Finance',
    desc: 'We understand warehouse financing, commodity-backed lending, and banking-specific collateral monitoring requirements.'
  },
  {
    svgPath: '/icons/pan-india-verification-network.svg',
    title: 'Pan-India Verification Network',
    desc: 'We support warehouse assessments across multiple locations throughout India.'
  },
  {
    svgPath: '/icons/structured-reporting.svg',
    title: 'Structured Reporting',
    desc: 'We provide clear, well-organized reports that document observations, verification findings, and supporting information.'
  },
  {
    svgPath: '/icons/banking-industry-understanding.svg',
    title: 'Banking Industry Understanding',
    desc: 'Our services align with standard warehouse verification practices used in the banking sector.'
  },
  {
    svgPath: '/icons/consistent-operational-methodology.svg',
    title: 'Consistent Operational Methodology',
    desc: 'We follow defined audit procedures that ensure consistency across verification and reporting activities.'
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

const processList = [
  { step: '01', title: 'Understand Requirements', desc: 'We align on the specific audit objectives, security standards, and criteria required by the lending bank.' },
  { step: '02', title: 'Plan the Assessment', desc: 'We plan verification schedules, identify documentation checklists, and organize localized audit teams.' },
  { step: '03', title: 'Warehouse Visit', desc: 'Our qualified officers execute independent on-site inspections of the facility and storage conditions.' },
  { step: '04', title: 'Verification & Review', desc: 'We perform physical stock counts, verify logs, check titles, and assess operational readiness.' },
  { step: '05', title: 'Reporting', desc: 'We deliver structured, evidence-backed reports with GPS tags and photos for internal risk reviews.' }
]

import IndustryPageTemplate from '../IndustryPageTemplate'

const faqItems = [
  {
    question: 'Why do banks require warehouse audits?',
    answer: 'Warehouse audits help banks strengthen collateral monitoring, validate warehouse information, and support lending review processes through independent verification.'
  },
  {
    question: 'How do warehouse audits support collateral monitoring?',
    answer: 'Independent warehouse audits validate stock levels, warehouse conditions, and supporting documentation used in collateral review activities.'
  },
  {
    question: 'Can Hubcheck conduct warehouse audits across India?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    question: 'Which commodities can be covered during warehouse audits?',
    answer: 'We conduct warehouse audits for rice, wheat, cotton, sugar, pulses, oilseeds, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    question: 'Can warehouse audits support commodity finance?',
    answer: 'Yes. Warehouse audits can support commodity finance by delivering independent verification, stock validation, documentation review, and reporting within the agreed scope of work.'
  },
  {
    question: 'What information is included in warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
  }
]

export default function BanksPage() {
  return (
    <IndustryPageTemplate
      heroBadge="Banking Solutions"
      heroTitle={
        <>
          India’s Reliable Warehouse <br />
          <span className="text-[#001c55]">Audit Partner for Banks</span>
        </>
      }
      heroDesc="Every secured lending portfolio depends on accurate warehouse verification. Hubcheck works with banks to independently assess warehouses, validate collateral details, and strengthen lending oversight through thorough warehouse audits and clear reporting."
      heroImg="/images/industries/banks_hero.png"
      heroImgAlt="Hubcheck Warehouse Audit for Banks"
      statsYear="2015"
      statsYearLabel="Serving Financial Sectors Since"
      statsPercent="100%"
      statsPercentLabel="Independent Audits"
      statsCertTitle="ISO & SOC 2 Certified"
      statsCertDesc="Strict security and data compliance standards built into every step."
      aboutBadge="Trusted Warehouse Audit Partner for Banks"
      aboutTitle="About Hubcheck"
      aboutTexts={[
        "Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that serves as a trusted Warehouse Audit partner for banks. We help strengthen warehouse verification, collateral monitoring, and information validation through independent audit services.",
        "Since 2015, Hubcheck has developed extensive expertise across warehouse audits, stock verification, inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence, helping financial institutions strengthen warehouse-backed lending through proven verification and structured audit methodologies.",
        "We integrate physical verification, documentation review, operational assessment, and structured reporting. This approach helps banks build consistent warehouse review frameworks that support secured lending, warehouse financing, and internal risk assessment processes."
      ]}
      solutionsBadge="Secure Lending Support"
      solutionsTitle="Warehouse Audit Solutions for Banks"
      solutions={solutionsList}
      challengesBadge="Risk Mitigation"
      challengesTitle="Banking Challenges We Help Address"
      challenges={challengesList}
      whyChooseUsBadge="Why Hubcheck"
      whyChooseUsTitle="Why Banks Choose Hubcheck"
      whyChooseUs={whyChooseUsList}
      commoditiesBadge="Comprehensive Scope"
      commoditiesTitle="Commodities We Audit for Banks"
      commoditiesDesc="Hubcheck performs warehouse audits across various commodity storage facilities. We support banks with independent verification and collateral monitoring for a wide range of goods."
      commodities={commoditiesList}
      processBadge="Execution Method"
      processTitle="Our Engagement Process"
      process={processList}
      ctaTitle="Protect Your Lending Portfolio with Independent Warehouse Audits"
      ctaDesc="Independent warehouse audits help banks enhance collateral visibility and strengthen warehouse oversight. Contact Hubcheck to discuss your audit needs and develop an approach tailored to your operational objectives."
      faqs={faqItems}
    />
  )
}