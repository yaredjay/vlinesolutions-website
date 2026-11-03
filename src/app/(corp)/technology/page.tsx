import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategoryGrid } from "@/components/sections/ServiceCategoryGrid";
import { HowWeBuild } from "@/components/sections/HowWeBuild";
import { CTA } from "@/components/sections/CTA";
import { technology } from "@/data/services";

export const metadata: Metadata = {
  title: "Technology Solutions",
  description:
    "V-Line Solutions designs, builds and runs the systems public programs depend on: digital public infrastructure, service and budget platforms, data systems, sector information systems and the secure cloud underneath them.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology Solutions | V-Line Solutions",
    description:
      "Systems governments can own: identity and registries, payments, budget and service platforms, data, cloud and security.",
    url: "https://vlinesolutions.com/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="gradient-text">Systems</span>{" "}
            <span className="text-fg-secondary">governments</span>{" "}
            <span className="text-fg-primary">can own.</span>
          </>
        }
        description="We design, build and run the platforms public programs depend on, for agencies across the United States and the development programs modernizing government around the world. Secure by design, interoperable by default, and handed over with the people trained to run them."
      />
      <ServiceCategoryGrid categories={technology} />
      <HowWeBuild />
      <CTA
        title="Have a system worth building?"
        body="Bring us the requirement and the outcome. We'll come back with an architecture, a timeline and a price."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Workforce solutions", href: "/workforce" }}
      />
    </>
  );
}
