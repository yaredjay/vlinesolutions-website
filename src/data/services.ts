export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  items: string[];
};

/**
 * Technology: the systems governments commission every day — the same
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
      "The systems that plan, execute and account for public money — from the budget call to the audited statement.",
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
      "Trusted data that moves from collection to decision — governed, interoperable and visible to the people accountable for it.",
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
      "Document-heavy, rule-heavy work handled by systems — with a person at every decision that needs one.",
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

/**
 * Workforce: technology staffing first, with the field crews, program
 * operations and maintenance support that keep a deployment running.
 */
export const workforce: ServiceCategory[] = [
  {
    id: "technology-staffing",
    number: "01",
    title: "Technology Staffing",
    blurb:
      "Engineers, architects and analysts placed on agency teams — vetted for the work, cleared for the environment, ready on the start date.",
    items: [
      "Software engineers and full-stack developers",
      "Cloud, DevOps and platform engineers",
      "Data engineers, analysts and scientists",
      "Cybersecurity analysts and engineers",
      "Solutions and enterprise architects",
      "Database, network and systems administrators",
      "Quality assurance and test automation",
      "Help desk and tier 1–3 technical support",
    ],
  },
  {
    id: "program-staffing",
    number: "02",
    title: "Program and Project Staffing",
    blurb:
      "The people who run the program around the system: delivery leads, analysts and the administrative backbone.",
    items: [
      "Project and program managers (PMP, Agile, Scrum)",
      "Business and systems analysts",
      "Product owners and service designers",
      "Training, documentation and change specialists",
      "Contract, compliance and reporting support",
      "Executive and administrative support",
    ],
  },
  {
    id: "tech-crews",
    number: "03",
    title: "Technical Crews and Field Support",
    blurb:
      "Hands on site for rollouts, installations and the day-to-day upkeep that keeps a deployment running.",
    items: [
      "Device deployment, imaging and refresh crews",
      "Network, cabling and wireless installation",
      "Audio-visual, conference and classroom technology",
      "On-site technicians and desk-side support",
      "Data-center and equipment-room operations",
      "Preventive maintenance and asset management",
    ],
  },
  {
    id: "facilities-maintenance",
    number: "04",
    title: "Facilities and Maintenance Support",
    blurb:
      "Licensed trades and operations staff for the buildings and sites where programs are delivered.",
    items: [
      "Facilities operations and building engineering",
      "HVAC, electrical and plumbing technicians",
      "General maintenance and repair",
      "Custodial, grounds and environmental services",
      "Fire, life-safety and energy systems support",
      "Warehouse and logistics operations",
    ],
  },
  {
    id: "program-operations",
    number: "05",
    title: "Event and Community Program Operations",
    blurb:
      "Credentialed staff for public events, venues and community programs — scheduled, supervised and reported on the agency's terms.",
    items: [
      "Event operations, access control and guest services",
      "Venue setup, logistics and breakdown",
      "Recreation and youth program staffing",
      "Officials, scorekeepers and league administration",
      "Conference, convention and civic-event support",
      "Customer service and front-line program staff",
    ],
  },
];

/** How an engagement is staffed — the models agencies buy. */
export const staffingModels = [
  {
    title: "Staff augmentation",
    body: "Named individuals embedded with your team, under your direction, on your tools and schedule.",
  },
  {
    title: "Managed teams",
    body: "A complete crew with a lead, outcomes defined up front, and reporting you can take to a contracting officer.",
  },
  {
    title: "Surge and seasonal",
    body: "Capacity that scales to the program calendar — rollouts, enrollment windows, seasons and peak demand.",
  },
  {
    title: "Operate and maintain",
    body: "Ongoing support for systems and sites after go-live: help desk, field maintenance and scheduled service.",
  },
];

/** What every placement carries, regardless of role. */
export const workforceStandards = [
  "Background checks and credential verification to the agency's standard",
  "Compliance with prevailing-wage, labor and safety requirements",
  "Scheduling, time and attendance tracked and reported per site",
  "A named account lead and a replacement bench for every assignment",
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
