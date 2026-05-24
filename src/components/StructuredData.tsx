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
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone,
        email: site.email,
        areaServed: "US",
        availableLanguage: "en",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phone,
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
    telephone: site.phone,
    email: site.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.2872,
      longitude: -121.9444,
    },
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
      "Workforce Solutions",
      "Facilities Management",
      "Janitorial Services",
      "IT Staffing",
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
