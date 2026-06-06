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
    logo: `${siteUrl}/icon.svg`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phone,
        email: site.email,
        areaServed: "US",
        availableLanguage: ["en", "es"],
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: site.legalName,
    image: `${siteUrl}/opengraph-image`,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 37.2872, longitude: -121.9444 },
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "AI automation", "AI receptionist", "AI voice agents", "AI chatbots",
      "workflow automation", "CRM integration", "missed call recovery",
      "appointment booking automation", "custom AI development",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
