import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategoryGrid } from "@/components/sections/ServiceCategoryGrid";
import { FeaturedPlatforms } from "@/components/sections/FeaturedPlatforms";
import { CTA } from "@/components/sections/CTA";
import { technology } from "@/data/services";

export const metadata: Metadata = {
  title: "Technology Solutions",
  description:
    "AI, intelligent automation, secure platforms, data, and cloud — engineered for the public sector and enterprise.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Solutions"
        title={
          <>
            <span className="gradient-text">Intelligent Systems</span>{" "}
            <span className="text-fg-secondary">for Government</span>{" "}
            <span className="text-fg-primary">and Enterprise.</span>
          </>
        }
        description="Seven service lines, one delivery standard. We design, build, secure, and operate the systems that move public-sector outcomes forward."
      />
      <ServiceCategoryGrid categories={technology} accentLabel="TECH" />
      <FeaturedPlatforms />
      <CTA
        eyebrow="Build with us"
        title="Have a system worth building?"
        body="Bring us the constraint and the outcome. We will respond with an architecture, a timeline, and a price."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Workforce solutions", href: "/workforce" }}
      />
    </>
  );
}
