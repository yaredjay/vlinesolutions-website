export const site = {
  name: "V-Line Solutions",
  legalName: "V-Line Solutions LLC",
  tagline: "Government-Grade Solutions. Startup-Speed Delivery.",
  description:
    "AI Technology & Workforce Solutions for Public Sector and Enterprise.",
  bio: "V-Line Solutions is a California-based technology and workforce services firm delivering AI systems, intelligent automation, and mission-critical staffing to government agencies and enterprise clients nationwide.",
  address: {
    line1: "1725 South Bascom Ave #208",
    city: "Campbell",
    state: "CA",
    zip: "95008",
  },
  phone: "(408) 516-6667",
  phoneHref: "tel:+14085166667",
  email: "info@vlinesolutions.com",
  emailHref: "mailto:info@vlinesolutions.com",
  director: "Yared Birmeji",
  directorTitle: "Director of Operations",
  duns: "123412642",
  classification: "Small Business",
  registration: "SAM.gov Registered",
};

export const nav: { label: string; href: string }[] = [
  { label: "Technology", href: "/technology" },
  { label: "Workforce", href: "/workforce" },
  { label: "Government", href: "/government" },
  { label: "About", href: "/about" },
];

export const naics = [
  "541511", "541519", "541512", "518210", "541611", "541690",
  "541715", "561210", "561720", "561311", "561320", "561110",
  "238220", "238210", "711310", "711320", "561920",
];

export const naicsLabels: Record<string, string> = {
  "541511": "Custom Computer Programming Services",
  "541519": "Other Computer Services",
  "541512": "Computer Systems Design Services",
  "518210": "Data Processing, Hosting & Related",
  "541611": "Admin & General Management Consulting",
  "541690": "Other Scientific & Technical Consulting",
  "541715": "Research & Development in Physical/Engineering Sciences",
  "561210": "Facilities Support Services",
  "561720": "Janitorial Services",
  "561311": "Employment Placement Agencies",
  "561320": "Temporary Help Services",
  "561110": "Office Administrative Services",
  "238220": "Plumbing, Heating & Air-Conditioning Contractors",
  "238210": "Electrical Contractors",
  "711310": "Promoters of Performing Arts & Sports",
  "711320": "Promoters of Performing Arts & Sports (Without Facilities)",
  "561920": "Convention & Trade Show Organizers",
};

export const stats = [
  { value: 17, suffix: "", label: "NAICS Codes" },
  { value: 100, suffix: "%", label: "Compliance Aligned" },
  { value: 24, suffix: "/7", label: "Mission Support" },
];

export const sectors = [
  "State & Local Government",
  "K-12 Education",
  "Higher Education",
  "Public Safety & Justice",
  "Public Health & Human Services",
  "Transportation & Transit",
  "Utilities & Public Works",
];

export const contractMechanisms = [
  { title: "Direct Contract Awards", body: "Single-award engagements scoped, executed, and delivered end-to-end." },
  { title: "Cooperative Purchasing Agreements", body: "Faster procurement through pre-vetted cooperative vehicles." },
  { title: "Simplified Acquisition Procedures", body: "Streamlined awards under SAP thresholds for rapid action." },
  { title: "Task Order / IDIQ Support", body: "Surge capacity and deep-bench delivery across task orders." },
  { title: "Subcontracting Partnerships", body: "Reliable teaming partner with deep public-sector context." },
  { title: "Emergency & Rapid Deployment", body: "Time-critical mobilization for operations and incident response." },
];
