/**
 * Proof content for the homepage: defensible numbers, contracts in
 * performance, platforms in production, and the delivery method.
 * Every figure here must be verifiable; evaluators call references.
 */

export const proofMetrics = [
  { value: 1400, suffix: "+", label: "Procurement portals searched live by GoBidLink" },
  { value: 50, suffix: "", label: "U.S. states covered in a single query" },
  { value: 3, suffix: "", label: "Multi-year government contracts in performance" },
  { value: 17, suffix: "", label: "NAICS codes registered" },
];

export type Contract = {
  id: string;
  agency: string;
  unit: string;
  vehicle: string;
  period: string;
  title: string;
  scope: string;
  role: "Prime contractor" | "Subcontractor" | "Partner";
};

export const contracts: Contract[] = [
  {
    id: "usaf",
    agency: "United States Air Force",
    unit: "McConnell Air Force Base, Kansas",
    vehicle: "Contract FA462125C0005",
    period: "Two-year base period with option-year extension · In performance",
    title: "Base community program operations",
    scope:
      "Recruitment and credentialing of a distributed field workforce, scheduling, on-site supervision and payment; invoicing on Wide Area Workflow; line-item reporting to the contracting officer.",
    role: "Prime contractor",
  },
  {
    id: "san-jose",
    agency: "City of San José, California",
    unit: "Parks, Recreation and Neighborhood Services",
    vehicle: "Municipal services agreement",
    period: "Two-year term, extended as required · In performance",
    title: "Municipal program operations",
    scope:
      "Certified personnel deployed across city sites on the Department's schedule, with compliance reporting and municipal invoicing.",
    role: "Prime contractor",
  },
  {
    id: "anne-arundel",
    agency: "Anne Arundel County, Maryland",
    unit: "Department of Recreation and Parks",
    vehicle: "Five-year contract",
    period: "Five-year term · In performance",
    title: "County program operations",
    scope:
      "Onboarding of a certified field network, scheduling of about 1,500 assignments per season, multi-rail payments and reconciliation, dispute resolution, Spanish-language materials and ACH collections from participating organizations.",
    role: "Prime contractor",
  },
];

export type PlatformStep = {
  id: "gobidlink" | "myclaimpay";
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  bullets: string[];
};

export const platformSteps: PlatformStep[] = [
  {
    id: "gobidlink",
    eyebrow: "GoBidLink · gobidlink.com",
    title: "One query. 1,400+ government portals.",
    body:
      "Federal, state, county, municipal, school-district, transit, housing and utility procurement, queried live, normalized, de-duplicated and verified to the official record.",
    href: "https://gobidlink.com",
    bullets: ["All 50 states", "Verified direct links", "Set-aside and deadline filters", "Enterprise API"],
  },
  {
    id: "myclaimpay",
    eyebrow: "MyClaimPay · myclaimpay.com",
    title: "Entitlement, payment, audit.",
    body:
      "Claims aggregated from multiple sources, matched to eligibility rules, delivered on purchase, settled through payment rails and recorded on an immutable ledger.",
    href: "https://myclaimpay.com",
    bullets: ["Multi-source ingestion", "Eligibility engine", "Payment processing", "Immutable audit trail"],
  },
];

export const method = [
  {
    n: "01",
    title: "Discover",
    body: "Stakeholder and user research on site, requirements traced to a matrix, risks registered before a line of code.",
  },
  {
    n: "02",
    title: "Architect",
    body: "Service-oriented design, relational systems of record, API-first integration, security and data governance decided up front.",
  },
  {
    n: "03",
    title: "Build",
    body: "Senior-led engineering with automated testing and weekly demonstrable increments the client can touch.",
  },
  {
    n: "04",
    title: "Operate",
    body: "Deployment, training of trainers, support desk, scheduled reporting and a handover the client owns outright.",
  },
];

export const leadership = [
  {
    initials: "BG",
    name: "Bethlehem Guall",
    title: "Chief Executive Officer",
    body: "Founder and owner. Corporate governance, contracts, finance and quality assurance; signatory for the firm's federal and municipal contracts.",
  },
  {
    initials: "YB",
    name: "Yared Tadesse Birmeji",
    title: "Chief Operating Officer · Lead Engineer and Systems Architect",
    body: "Architect of GoBidLink and MyClaimPay. Responsible for government contract performance, partner management and compliance reporting.",
  },
];
