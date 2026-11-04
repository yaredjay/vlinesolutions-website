import { site } from "@/data/site";

const siteUrl = "https://vlinesolutions.com";

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: site.bio,
    foundingLocation: {
      "@type": "Place",
      name: "California, USA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        areaServed: "US",
        availableLanguage: "en",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        areaServed: "US",
      },
    ],
    sameAs: [],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: site.legalName,
    image: `${siteUrl}/icon.png`,
    url: siteUrl,
    email: site.email,
    priceRange: "$$$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Government Contracting",
      "Artificial Intelligence",
      "Machine Learning",
      "Intelligent Automation",
      "Cybersecurity",
      "Cloud Architecture",
      "Facilities Management",
      "Janitorial Services",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
