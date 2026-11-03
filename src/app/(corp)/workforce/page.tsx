import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategoryGrid } from "@/components/sections/ServiceCategoryGrid";
import { StaffingModels } from "@/components/sections/StaffingModels";
import { CTA } from "@/components/sections/CTA";
import { workforce } from "@/data/services";

export const metadata: Metadata = {
  title: "Workforce Solutions",
  description:
    "V-Line Solutions places engineers, analysts and technical crews on agency teams, with the maintenance, program and event staff that keep a deployment running. Screened, credentialed and on site on the start date.",
  alternates: { canonical: "/workforce" },
  openGraph: {
    title: "Workforce Solutions — V-Line Solutions",
    description:
      "Technology staffing first, with the technical crews, maintenance and program operations that keep public programs running.",
    url: "https://vlinesolutions.com/workforce",
  },
};

export default function WorkforcePage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="gradient-text">The people</span>{" "}
            <span className="text-fg-secondary">behind</span>{" "}
            <span className="text-fg-primary">public programs.</span>
          </>
        }
        description="Engineers and analysts placed on your team, technical crews on your sites, and the maintenance, program and event staff that keep a deployment running. One accountable partner for every role — screened, credentialed and on site on the start date."
      />
      <ServiceCategoryGrid categories={workforce} />
      <StaffingModels />
      <CTA
        title="Need people on site by a date?"
        body="Tell us the roles, the locations and the start date. We'll come back with a deployment plan and a named account lead."
        primary={{ label: "Request staffing", href: "/contact" }}
        secondary={{ label: "Technology solutions", href: "/technology" }}
      />
    </>
  );
}
