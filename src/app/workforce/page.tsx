import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategoryGrid } from "@/components/sections/ServiceCategoryGrid";
import { CTA } from "@/components/sections/CTA";
import { workforce } from "@/data/services";

export const metadata: Metadata = {
  title: "Workforce Solutions",
  description:
    "V-Line Solutions fields mission-ready personnel for facilities, janitorial, events, sports operations, administration, IT, and the skilled trades — credentialed, accountable, and ready to deploy nationwide.",
  alternates: { canonical: "/workforce" },
  openGraph: {
    title: "Workforce Solutions — V-Line Solutions",
    description:
      "Credentialed personnel across facilities, events, IT, administration, and the skilled trades.",
    url: "https://vlinesolutions.com/workforce",
  },
};

export default function WorkforcePage() {
  return (
    <>
      <PageHero
        eyebrow="Workforce Solutions"
        title={
          <>
            <span className="gradient-text">Mission-Ready Personnel</span>{" "}
            <span className="text-fg-secondary">for</span>{" "}
            <span className="text-fg-primary">Every Operation.</span>
          </>
        }
        description="From facilities crews to cleared technical staff, we field reliable people fast — credentialed, accountable, and aligned to your standards."
      />
      <ServiceCategoryGrid categories={workforce} accentLabel="OPS" />
      <CTA
        eyebrow="Mobilize"
        title="Need people, ready yesterday?"
        body="Tell us the roles, the locations, and the start date. We will respond with a deployment plan."
        primary={{ label: "Request staffing", href: "/contact" }}
        secondary={{ label: "Government credentials", href: "/government" }}
      />
    </>
  );
}
