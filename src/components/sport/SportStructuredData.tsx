import { site } from "@/data/site";
import { sportBrand, sports, coverageStates, why } from "@/data/sport";
import { sportFaqs, sportPages } from "@/data/sport-pages";
import { CORP_URL, SPORT_URL } from "@/lib/sport";

const ORG_ID = `${SPORT_URL}/#organization`;
const SITE_ID = `${SPORT_URL}/#website`;

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

/** Entities shared by every sport page: who we are, what we sell, the site itself. */
export function sportGraphBase() {
  return [
    {
      "@type": ["Organization", "SportsOrganization", "ProfessionalService"],
      "@id": ORG_ID,
      name: sportBrand.name,
      legalName: site.legalName,
      alternateName: ["VLS Sport", "VLS Sports", "VLine Sports", "V-Line Sports", "V-Line Solutions Sport Division"],
      url: SPORT_URL,
      logo: { "@type": "ImageObject", url: `${SPORT_URL}/apple-icon`, width: 180, height: 180 },
      image: `${SPORT_URL}/sport/hero.webp`,
      description: sportBrand.description,
      slogan: sportBrand.tagline,
      parentOrganization: { "@type": "Organization", name: site.legalName, url: CORP_URL },
      email: site.email,
      telephone: site.phone,
      address: { "@type": "PostalAddress", addressLocality: "Campbell", addressRegion: "CA", addressCountry: "US" },
      areaServed: US_STATES.map((s) => ({ "@type": "State", name: s })),
      knowsAbout: [
        "Sports officiating",
        "Referee staffing",
        "Umpire staffing",
        "Sports league management",
        "Tournament operations",
        "Scorekeeping and statistics",
        "Parks and recreation program staffing",
        "Youth sports officiating",
        "Adult recreation leagues",
        ...sports.map((s) => `${s} officiating`),
      ],
      contactPoint: [
        { "@type": "ContactPoint", contactType: "sales", telephone: site.phone, email: site.email, areaServed: "US", availableLanguage: "en" },
        { "@type": "ContactPoint", contactType: "customer support", telephone: site.phone, email: site.email, areaServed: "US", availableLanguage: "en", hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } },
      ],
      makesOffer: sportPages.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", "@id": `${SPORT_URL}/officials/${p.slug}#service`, name: `${p.headline} for leagues, schools and tournaments`, url: `${SPORT_URL}/officials/${p.slug}` },
      })),
      additionalProperty: [
        { "@type": "PropertyValue", name: "Registration", value: "SAM.gov Registered" },
        { "@type": "PropertyValue", name: "Business size", value: "Small Business" },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SPORT_URL}/#service`,
      name: "Sports officials staffing and game-day crews",
      serviceType: ["Referee staffing", "Umpire staffing", "Scorekeeper staffing", "Sports league administration", "Tournament officiating"],
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", audienceType: "Parks and recreation departments, municipalities, school districts, leagues and tournaments" },
      availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SPORT_URL}/request`, servicePhone: site.phone },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sports staffed",
        itemListElement: sports.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${s} officials` } })),
      },
      serviceOutput: why.map((w) => w.title).join(", "),
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SPORT_URL,
      name: sportBrand.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
  ];
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqPage(items: { q: string; a: string }[], id: string) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function JsonLd({ graph }: { graph: unknown[] }) {
  const data = { "@context": "https://schema.org", "@graph": graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** The home page graph: base entities + the home FAQ + coverage as a place list. */
export function SportStructuredData() {
  const graph = [
    ...sportGraphBase(),
    {
      "@type": "WebPage",
      "@id": `${SPORT_URL}/#webpage`,
      url: SPORT_URL,
      name: `${sportBrand.name} — ${sportBrand.tagline}`,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      description: sportBrand.description,
      inLanguage: "en-US",
    },
    faqPage(sportFaqs, `${SPORT_URL}/#faq`),
    {
      "@type": "ItemList",
      name: "Where V-Line Sport crews are on the ground today",
      itemListElement: coverageStates.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.replace(" · HQ", "") })),
    },
  ];
  return <JsonLd graph={graph} />;
}
