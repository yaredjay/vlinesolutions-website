import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategoryGrid } from "@/components/sections/ServiceCategoryGrid";
import { HowWeBuild } from "@/components/sections/HowWeBuild";
import { CTA } from "@/components/sections/CTA";
import { technology } from "@/data/services";

export const metadata: Metadata = {
  title: "Technology Solutions",
  description:
    "V-Line Solutions builds and deploys digital public infrastructure for national institutions: sovereign registries, national payments, budget management, sector systems and secure data clouds.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology Solutions | V-Line Solutions",
    description:
      "Digital public infrastructure: sovereign registries, national payments, budget management, data, cloud and security.",
    url: "https://vlinesolutions.com/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="gradient-text">Systems built</span>{" "}
            <span className="text-fg-secondary">to be</span>{" "}
            <span className="text-fg-primary">owned.</span>
          </>
        }
        description="Digital public infrastructure built for national institutions. Interoperable by default, resilient in any environment, and delivered with complete local team training."
      />
      <ServiceCategoryGrid categories={technology} />
      <HowWeBuild />
      <CTA
        title="Have a system to build?"
        body="Bring us the requirement. We come back with an architecture, a team and a delivery plan."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Who we work with", href: "/government" }}
      />
    </>
  );
}
