import { site } from "@/data/site";
import { sportBrand, sports } from "@/data/sport";
import { CORP_URL, SPORT_URL } from "@/lib/sport";

export function SportStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SPORT_URL}/#organization`,
        name: sportBrand.name,
        alternateName: "VLS Sports",
        url: SPORT_URL,
        parentOrganization: { "@type": "Organization", name: site.legalName, url: CORP_URL },
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Campbell",
          addressRegion: "CA",
          addressCountry: "US",
        },
        areaServed: "US",
      },
      {
        "@type": "Service",
        "@id": `${SPORT_URL}/#service`,
        name: "Sports officiating and game-day staffing",
        serviceType: "Sports officials staffing",
        provider: { "@id": `${SPORT_URL}/#organization` },
        areaServed: "US",
        audience: {
          "@type": "Audience",
          audienceType: "Parks and recreation departments, municipalities, schools, leagues and tournaments",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sports staffed",
          itemListElement: sports.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${s} officials` } })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SPORT_URL}/#website`,
        url: SPORT_URL,
        name: sportBrand.name,
        publisher: { "@id": `${SPORT_URL}/#organization` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
