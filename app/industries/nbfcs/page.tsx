import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Warehouse Audit Services for NBFCs | Hubcheck',
  description: 'Hubcheck has been a trusted Warehouse Audit partner for NBFCs since 2015. We help improve warehouse monitoring, verify stock, and make better-informed lending decisions.',
  keywords: 'Warehouse Audit for NBFCs, NBFC Lending, Asset-Backed Lending, Collateral Verification, Hubcheck',
}

const solutionsList = [
  {
    title: 'Warehouse Audit',
    desc: 'We conduct independent warehouse audits that help NBFCs review operations, validate pledged assets, and improve lending review processes through objective verification.',
    img: '/warehouse-audit/s-1.png'
  },
  {
    title: 'Stock Verification',
    desc: 'We verify physical stock against records to boost collateral visibility, lending oversight, and portfolio monitoring.',
    img: '/stock-audit/s-1.png'
  },
  {
    title: 'Inventory Verification',
    desc: 'We validate inventory details through independent assessments, thereby strengthening warehouse visibility and supporting lending-related reviews.',
    img: '/inventory-verification/s-1.png'
  },
  {
    title: 'Warehouse Inspection',
    desc: 'We assess infrastructure, storage conditions, and operational practices through independent inspections aligned with warehouse monitoring needs.',
    img: '/warehouse-inspection/s-1.png'
  },
  {
    title: 'Collateral Management Audit',
    desc: 'We enhance collateral oversight with warehouse verification, stock observations, documentation reviews, and structured audit reporting.',
    img: '/collateral-management/s-1.png'
  },
  {
    title: 'Warehouse Due Diligence',
    desc: 'We evaluate operations, infrastructure, documentation, and readiness before financing and other key lending decisions.',
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
    desc: 'We confirm physical stock against records to build lending confidence and strengthen collateral monitoring.'
  },
  {
    title: 'Warehouse Monitoring',
    desc: 'We support ongoing oversight with independent audits, inspections, and verification activities.'
  },
  {
    title: 'Independent Verification',
    desc: 'We reduce reliance on self-reported data through objective warehouse assessments.'
  },
  {
    title: 'Information Validation',
    desc: 'We strengthen lending reviews by independently validating warehouse information and supporting documentation.'
  },
  {
    title: 'Portfolio Risk Visibility',
    desc: 'We identify operational issues that may require further attention before financing and lending decisions are made.'
  }
]

const whyChooseUsList = [
  {
    svgPath: '/icons/independent-audit-methodology.svg',
    title: 'Independent Audit Methodology',
    desc: 'Every warehouse audit follows a clear methodology that ensures objective verification and reliable reporting.'
  },
  {
    svgPath: '/icons/understanding-of-asset-backed-lending.svg',
    title: 'Understanding of Asset-Backed Lending',
    desc: 'Our services are tailored to warehouse-backed lending, collateral monitoring, and secured financing requirements.'
  },
  {
    svgPath: '/icons/pan-india-operational-reach.svg',
    title: 'Pan-India Operational Reach',
    desc: 'We conduct warehouse audits across multiple locations through a well-coordinated network.'
  },
  {
    svgPath: '/icons/reporting-designed-for-lending-reviews.svg',
    title: 'Reporting Designed for Lending Reviews',
    desc: 'You receive organized reports that document observations, verification findings, and supporting information.'
  },
  {
    svgPath: '/icons/industry-focused-expertise.svg',
    title: 'Industry-Focused Expertise',
    desc: 'We bring extensive experience supporting warehouse verification needs in the financial services sector.'
  },
  {
    svgPath: '/icons/consistent-verification-framework.svg',
    title: 'Consistent Verification Framework',
    desc: 'We use standardized procedures that promote consistency across assessments, documentation reviews, and reporting.'
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
  { step: '01', title: 'Understand Requirements', desc: 'We learn about your lending objectives, warehouse details, audit scope, and operational needs.' },
  { step: '02', title: 'Plan Assessment', desc: 'We develop a structured plan for warehouse visits, verification activities, documentation review, and reporting.' },
  { step: '03', title: 'Warehouse Visit', desc: 'We conduct independent visits to assess facilities, inventory conditions, operational practices, and supporting documents.' },
  { step: '04', title: 'Verification & Review', desc: 'We verify information, review stock records, validate observations, and check the documents within the agreed scope.' },
  { step: '05', title: 'Reporting', desc: 'We deliver clear audit reports with observations, verification findings, and supporting information for your internal lending and operational reviews.' }
]

import IndustryPageTemplate from '../IndustryPageTemplate'

const faqItems = [
  {
    question: 'Why do NBFCs require warehouse audits?',
    answer: 'Warehouse audits help NBFCs strengthen collateral monitoring, validate warehouse information, and support lending review processes through independent verification.'
  },
  {
    question: 'How do warehouse audits support asset-backed lending?',
    answer: 'They provide independent verification of warehouse information, stock observations, and supporting documentation relevant to collateral-backed financing.'
  },
  {
    question: 'Can Hubcheck conduct warehouse audits across India?',
    answer: 'Yes. We support warehouse audit requirements across multiple locations in India, depending on project scope and operational needs.'
  },
  {
    question: 'Which commodities can be covered during warehouse audits?',
    answer: 'We cover rice, wheat, cotton, sugar, pulses, oilseeds, fertilizers, and other agricultural and industrial commodities.'
  },
  {
    question: 'Can warehouse audits support collateral monitoring?',
    answer: 'Yes. Independent warehouse audits strengthen collateral monitoring through verification, stock validation, documentation review, and structured reporting.'
  },
  {
    question: 'What information is included in warehouse audit reports?',
    answer: 'Reports document warehouse observations, verification findings, supporting information, and assessment outcomes relevant to the agreed scope of work.'
  }
]

export default function NbfcsPage() {
  return (
    <IndustryPageTemplate
      heroBadge="NBFC Specialization"
      heroTitle={
        <>
          Warehouse Audit <br />
          <span className="text-[#001c55]">Services for NBFCs</span>
        </>
      }
      heroDesc="How confident are you in the warehouses backing your lending portfolio? Warehouse-backed lending requires strong collateral visibility and independent verification. Hubcheck delivers Warehouse Audit Services that help NBFCs improve warehouse monitoring, verify stock, and make better-informed lending decisions."
      heroImg="/images/industries/nbfcs_hero.png"
      heroImgAlt="Hubcheck Warehouse Audit for NBFCs"
      statsYear="2015"
      statsYearLabel="Trusted Partner Since"
      statsPercent="ISO"
      statsPercentLabel="Certified 27001 & 9001"
      statsCertTitle="SOC 2 Audited"
      statsCertDesc="Aligning with institutional security and risk assessment controls."
      aboutBadge="Hubcheck: Your Ultimate Gateway for Warehouse Audits"
      aboutTitle="About Hubcheck"
      aboutTexts={[
        "Hubcheck has been a trusted Warehouse Audit partner for NBFCs since 2015, helping strengthen warehouse-backed lending through independent verification, collateral monitoring, and operational assessments. Our structured approach supports better portfolio visibility and informed lending decisions.",
        "As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, our expertise covers Warehouse Audits, Stock Verification, Inventory Verification, Warehouse Inspections, Collateral Management Audits, and Warehouse Due Diligence.",
        "By combining physical verification, documentation reviews, operational assessments, and structured reporting, we help NBFCs strengthen warehouse visibility, collateral oversight, portfolio monitoring, and internal review processes through independent audit methodologies."
      ]}
      solutionsBadge="Asset-Backed Security"
      solutionsTitle="Warehouse Audit Solutions for NBFCs"
      solutions={solutionsList}
      challengesBadge="Risk Mitigation"
      challengesTitle="Lending Challenges We Help NBFCs Address"
      challenges={challengesList}
      whyChooseUsBadge="Why Hubcheck"
      whyChooseUsTitle="Why NBFCs Choose Hubcheck"
      whyChooseUs={whyChooseUsList}
      commoditiesBadge="Comprehensive Scope"
      commoditiesTitle="Commodities We Audit for NBFCs"
      commoditiesDesc="Hubcheck performs independent warehouse audits across various commodity storage facilities. This helps NBFCs strengthen collateral monitoring and warehouse-backed lending."
      commodities={commoditiesList}
      processBadge="Execution Method"
      processTitle="Our Engagement Process"
      process={processList}
      ctaTitle="Build Stronger Confidence in Warehouse-Backed Lending"
      ctaDesc="Independent warehouse audits deliver greater visibility into pledged assets, warehouse operations, and stock information. Contact Hubcheck to discuss your warehouse audit requirements and lending objectives."
      faqs={faqItems}
    />
  )
}
