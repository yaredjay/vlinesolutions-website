/* ============================================================
   V-LINE SOLUTIONS — SITE CONFIG
   AI Automation Agency. One source of truth.
   ============================================================ */

export const site = {
  name: "V-Line Solutions",
  legalName: "V-Line Solutions LLC",
  tagline: "Custom AI that grows your business.",
  heroLine1: "What If AI Could Run the Parts of Your Business You Hate?",
  heroLine2: "Let's Build That.",
  heroSub:
    "Tell us what's slowing you down. We design, build, and deploy custom AI that saves you time, captures more revenue, and grows your business. Guaranteed results or your money back.",
  description:
    "Custom AI automation for businesses that can't afford to miss a customer. AI receptionists, chatbots, voice agents, and workflow automation — deployed in 48 hours, guaranteed.",

  // Contact — public display + form delivery target.
  // NOTE: The doctrine specifies yared@vlinesolutions.com; your earlier
  // correction set info@. Using info@ for display. Change here to flip both.
  phone: "(408) 516-6667",
  phoneHref: "tel:+14085166667",
  email: "info@vlinesolutions.com",
  emailHref: "mailto:info@vlinesolutions.com",
  formDeliveryEmail: "yared@vlinesolutions.com", // where contact/quote forms are emailed

  address: {
    line1: "1725 South Bascom Ave #208",
    city: "Campbell",
    state: "CA",
    zip: "95008",
  },

  platforms: [
    { name: "GoBidLink", url: "https://gobidlink.com", domain: "gobidlink.com" },
    { name: "MyClaimPay", url: "https://myclaimpay.com", domain: "myclaimpay.com" },
  ],

  /* ----------------------------------------------------------
     PROOF — REPLACE WITH REAL, VERIFIED NUMBERS BEFORE LAUNCH.
     Left null = not rendered (honest by default). Once you have
     real, documentable figures, fill these in and they appear
     in the trust bar, testimonials header, and stats.
     (FTC 16 CFR 465 — do not publish unverifiable claims.)
     ---------------------------------------------------------- */
  proof: {
    businessesServed: null as number | null, // e.g. 250
    rating: null as number | null, // e.g. 4.9
    reviewCount: null as number | null, // e.g. 60
    // Honest, always-true operational claims (safe to show):
    guaranteeDays: 30,
    setupHours: 48,
  },

  // Capacity line shown in place of fake "3 slots left" scarcity.
  // Set to a TRUE statement about your real onboarding capacity.
  availabilityNote: "Onboarding a limited number of new clients this month.",
};

/* Trust bar — TRUE operational claims only (no fabricated counts).
   The component will prepend real businessesServed / rating IF you set
   them in site.proof above. */
export const trustBarItems = [
  "30-Day Money-Back Guarantee",
  "Setup in 48 Hours",
  "24/7 AI Coverage",
  "No Contracts",
  "Results Defined Upfront",
];

export const nav: { label: string; href: string }[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Custom AI", href: "/custom" },
  { label: "Assessment", href: "/assessment" },
  { label: "About", href: "/about" },
  { label: "Government", href: "/government" },
];

/* ============================================================
   GOVERNMENT — retained for procurement evaluators.
   ============================================================ */
export const government = {
  duns: "123412642",
  classification: "Small Business",
  registration: "SAM.gov Registered",
  director: "Yared Birmeji",
  directorTitle: "Director of Operations",
};

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
