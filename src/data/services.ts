export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  items: string[];
};

/**
 * Technology: the systems governments commission every day: the same
 * building blocks that national digital programs, development banks and
 * modernizing agencies fund, written in the vocabulary those programs use.
 */
export const technology: ServiceCategory[] = [
  {
    id: "dpi",
    number: "01",
    title: "Digital Public Infrastructure",
    blurb:
      "The foundational layers every digital government is built on: identity, registries, payments and the exchange that lets them talk to each other.",
    items: [
      "Digital identity and credential systems",
      "Civil, business and beneficiary registries",
      "Government-to-person payment rails and reconciliation",
      "Interoperability and data-exchange layers",
      "Consent, privacy and data-protection frameworks",
      "Open standards and digital public goods integration",
    ],
  },
  {
    id: "service-delivery",
    number: "02",
    title: "Government Service Platforms",
    blurb:
      "Citizen- and business-facing services, built once and delivered on web, mobile and at the counter.",
    items: [
      "E-services portals and one-stop service centers",
      "Case, permit and license management",
      "Benefits, grants and program administration",
      "Enrollment, eligibility and claims processing",
      "Multilingual, accessible and low-bandwidth design",
      "Service desks, notifications and feedback loops",
    ],
  },
  {
    id: "pfm",
    number: "03",
    title: "Public Finance and Budget Systems",
    blurb:
      "The systems that plan, execute and account for public money, from the budget call to the audited statement.",
    items: [
      "Budget planning, execution and treasury systems",
      "Financial management information systems",
      "Electronic procurement and contract management",
      "Revenue, tax and fee administration",
      "Payroll, human-resource and asset registers",
      "Audit trails, controls and fiscal transparency portals",
    ],
  },
  {
    id: "data",
    number: "04",
    title: "Data, Analytics and Decision Systems",
    blurb:
      "Trusted data that moves from collection to decision: governed, interoperable and visible to the people accountable for it.",
    items: [
      "National and sector data platforms",
      "Statistical, monitoring and evaluation systems",
      "Executive dashboards and performance management",
      "Data governance, quality and master-data management",
      "Geospatial systems and asset mapping",
      "Open-data portals and public reporting",
    ],
  },
  {
    id: "automation",
    number: "05",
    title: "Intelligent Automation",
    blurb:
      "Document-heavy, rule-heavy work handled by systems, with a person at every decision that needs one.",
    items: [
      "Document intelligence and digitization of records",
      "Workflow orchestration and process re-engineering",
      "Rules engines and decision support",
      "Language technology for multilingual service delivery",
      "Fraud, anomaly and compliance detection",
      "Human-in-the-loop review and audit design",
    ],
  },
  {
    id: "sectors",
    number: "06",
    title: "Sector Information Systems",
    blurb:
      "Line-ministry and agency systems that run the programs people depend on.",
    items: [
      "Health information and patient-record systems",
      "Education management and learning platforms",
      "Agriculture registries, advisory and market systems",
      "Social protection and safety-net delivery",
      "Transport, land and utility management",
      "Justice, public safety and emergency management",
    ],
  },
  {
    id: "cloud-security",
    number: "07",
    title: "Cloud, Security and Resilience",
    blurb:
      "Infrastructure a government can own: secure by design, sovereign where it has to be, recoverable when it matters.",
    items: [
      "Cloud architecture, migration and hybrid hosting",
      "Zero-trust security and identity-access management",
      "Compliance alignment (NIST, ISO 27001, CJIS, HIPAA, FERPA)",
      "Infrastructure as code and platform engineering",
      "Observability, continuity and disaster recovery",
      "Security assessment, hardening and incident readiness",
    ],
  },
  {
    id: "modernization",
    number: "08",
    title: "Modernization and Capacity",
    blurb:
      "Legacy replaced in steps, teams trained to run what they receive, and a handover the client owns outright.",
    items: [
      "Digital strategy, roadmaps and investment cases",
      "Legacy system assessment and phased modernization",
      "Enterprise architecture and API-first integration",
      "Product management and user research",
      "Training of trainers and operational handover",
      "Change management and adoption programs",
    ],
  },
];

export const featuredPlatforms = [
  {
    id: "gobidlink",
    name: "GoBidLink",
    url: "https://gobidlink.com",
    domain: "gobidlink.com",
    tag: "Procurement intelligence",
    description:
      "Public procurement opportunities across federal, state and local portals, searched and verified in one place.",
  },
  {
    id: "myclaimpay",
    name: "MyClaimPay",
    url: "https://myclaimpay.com",
    domain: "myclaimpay.com",
    tag: "Claims and payments",
    description:
      "Entitlement, payment and audit for claims programs, from intake to settlement.",
  },
];
