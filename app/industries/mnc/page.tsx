import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warehouse Audit Partner for MNCs | Hubcheck',
  description: 'Hubcheck serves as a trusted Warehouse Audit partner for MNCs, banks, and NBFCs. We provide independent assessments that strengthen warehouse visibility and validate information.',
  keywords: 'MNCs Audit, Warehouse Audit, Stock Verification, Collateral Monitoring, Hubcheck',
}

const solutionsList = [
  {
    title: 'Warehouse Audit',
    desc: 'We conduct independent warehouse audits that strengthen oversight, operational visibility, and collateral-backed financing reviews.',
    img: '/warehouse-audit/s-1.png'
  },
  {
    title: 'Stock Verification',
    desc: 'We validate physical stock against records to improve collateral monitoring and support financing decisions.',
    img: '/stock-audit/s-1.png'
  },
  {
    title: 'Inventory Verification',
    desc: 'We review inventory information through independent verification, enhancing warehouse visibility and operational assessments.',
    img: '/inventory-verification/s-1.png'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We evaluate infrastructure, storage practices, and operational conditions through independent inspections.',
    img: '/warehouse-inspection/s-1.png'
  },
  {
    title: 'Collateral Management Audit',
    desc: 'We support collateral monitoring with warehouse verification, documentation reviews, and structured audit reporting.',
    img: '/collateral-management/s-1.png'
  },
  {
    title: 'Warehouse Due Diligence',
    desc: 'We assess operations, infrastructure, and documentation before financing, acquisitions, or major commercial decisions.',
    img: '/warehouse-due-diligence/s-1.png'
  }
]

const challengesList = [
  {
    title: 'Collateral Visibility',
    desc: 'We improve visibility into warehouse-backed assets through independent verification and structured assessments.'
  },
  {
    title: 'Warehouse Monitoring',
    desc: 'We strengthen oversight with independent audits, inspections, and verification activities.'
  },
  {
    title: 'Stock Validation',
    desc: 'We confirm warehouse stock through physical verification and documentation reviews.'
  },
  {
    title: 'Information Validation',
    desc: 'We enhance financing reviews by independently validating warehouse information.'
  },
  {
    title: 'Operational Risk Visibility',
    desc: 'We identify observations that may need further attention before financing decisions.'
  },
  {
    title: 'Independent Assessments',
    desc: 'We support financing and operational reviews with objective verification and reporting.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Audit Methodology',
    desc: 'We provide objective warehouse assessments designed to strengthen financing and operational review processes.'
  },
  {
    svgPath: '/icons/experience-in-warehouse-finance.svg',
    title: 'Experience Across Warehouse Finance',
    desc: 'We support warehouse financing, commodity-backed lending, and collateral monitoring requirements.'
  },
  {
    svgPath: '/icons/pan-india-operational-network.svg',
    title: 'Pan-India Operational Network',
    desc: 'We offer warehouse audit capabilities across multiple locations through a coordinated network.'
  },
  {
    svgPath: '/icons/reporting-designed-for-financial-reviews.svg',
    title: 'Reporting Designed for Financial Reviews',
    desc: 'We deliver clear reports that document observations, verification findings, and supporting information.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Industry-Focused Expertise',
    desc: 'We bring experience supporting warehouse verification needs across diverse MNCs.'
  },
  {
    svgPath: '/icons/consistent-assessment-framework.svg',
    title: 'Consistent Assessment Framework',
    desc: 'We use defined methodologies that promote consistency across verification and reporting activities.'
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

const processList = [
  { step: '01', title: 'Understand Requirements', desc: 'We learn about your financing objectives, warehouse details, audit scope, and operational needs before starting the assessment.' },
  { step: '02', title: 'Plan Assessment', desc: 'We develop a structured plan covering warehouse visits, verification activities, documentation reviews, and reporting.' },
  { step: '03', title: 'Warehouse Visit', desc: 'We conduct independent visits to assess facilities, inventory conditions, operational practices, and supporting documentation.' },
  { step: '04', title: 'Verification & Review', desc: 'We verify information, review stock records, validate observations, and assess documents within the agreed scope.' },
  { step: '05', title: 'Reporting', desc: 'We provide organized audit reports with observations, verification findings, and supporting information for your internal review.' }
]

import IndustryPageTemplate from '../IndustryPageTemplate'

const faqItems = [
  {
    question: 'Why do MNCs require warehouse audits?',
    answer: 'Warehouse audits strengthen collateral monitoring, warehouse verification, and operational reviews through independent assessments.'
  },
  {
    question: 'How do warehouse audits support warehouse financing?',
    answer: 'Independent warehouse audits validate warehouse information, stock observations, and supporting documentation relevant to financing decisions.'
  },
  {
    question: 'Can Hubcheck conduct warehouse audits across India?',
    answer: 'Yes. Hubcheck supports warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    question: 'Which commodities can be covered during warehouse audits?',
    answer: 'We conduct audits across agricultural and industrial commodity storage facilities based on client requirements.'
  },
  {
    question: 'Can warehouse audits support commodity finance?',
    answer: 'Yes. Independent warehouse audits support commodity finance by verifying stock, validating stock, reviewing documentation, and providing structured reporting.'
  },
  {
    question: 'What information is included in warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
  }
]

export default function FinancialInstitutionsPage() {
  return (
    <IndustryPageTemplate
      heroBadge="Corporate Strength"
      heroTitle={
        <>
          India’s Finest Warehouse Audit <br />
          <span className="text-[#001c55]">Partner for MNCs</span>
        </>
      }
      heroDesc="Every secured lending portfolio depends on accurate warehouse verification. Hubcheck works with MNCs to independently assess warehouses, validate collateral details, and strengthen lending oversight through thorough warehouse audits and clear reporting."
      heroImg="/images/industries/financial_institutions_hero.png"
      heroImgAlt="Hubcheck Warehouse Audit for MNCs"
      statsYear="2015"
      statsYearLabel="Serving MNCs Since"
      statsPercent="100%"
      statsPercentLabel="Independent Audits"
      statsCertTitle="ISO & SOC 2 Certified"
      statsCertDesc="Strict security and data compliance standards built into every step."
      aboutBadge="Trusted Warehouse Audit Partner for MNCs"
      aboutTitle="About Hubcheck"
      aboutTexts={[
        "Hubcheck is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that serves as a trusted Warehouse Audit partner for MNCs. We help strengthen warehouse verification, collateral monitoring, and information validation through independent audit services.",
        "Since 2015, Hubcheck has developed extensive expertise across warehouse audits, stock verification, inventory verification, warehouse inspections, collateral management audits, and warehouse due diligence, helping MNCs strengthen warehouse-backed lending through proven verification and structured audit methodologies.",
        "We integrate physical verification, documentation review, operational assessment, and structured reporting. This approach helps MNCs build consistent warehouse review frameworks that support secured lending, warehouse financing, and internal risk assessment processes."
      ]}
      solutionsBadge="Secure Lending Support"
      solutionsTitle="Warehouse Audit Solutions for MNCs"
      solutions={solutionsList}
      challengesBadge="Risk Mitigation"
      challengesTitle="Lending Challenges We Help MNCs Address"
      challenges={challengesList}
      whyChooseUsBadge="Why Hubcheck"
      whyChooseUsTitle="Why MNCs Choose Hubcheck"
      whyChooseUs={whyChooseUsList}
      commoditiesBadge="Comprehensive Scope"
      commoditiesTitle="Commodities We Audit for MNCs"
      commoditiesDesc="Hubcheck conducts Warehouse Audit Services across a wide range of commodity storage facilities. We support MNCs with independent verification and collateral monitoring."
      commodities={commoditiesList}
      processBadge="Execution Method"
      processTitle="Our Engagement Process"
      process={processList}
      ctaTitle="Build Greater Confidence in Warehouse-Backed Finance"
      ctaDesc="Independent warehouse audits strengthen collateral visibility, warehouse monitoring, and operational confidence. Contact Hubcheck to discuss your warehouse audit requirements and develop an assessment approach aligned with your financing objectives."
      faqs={faqItems}
    />
  )
}
