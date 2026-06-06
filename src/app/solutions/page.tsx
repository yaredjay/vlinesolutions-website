import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CostComparison } from "@/components/shared/CostComparison";
import { Pricing } from "@/components/solutions/Pricing";
import { ComparisonTable } from "@/components/solutions/ComparisonTable";
import { NeedDifferent, CustomServicesGrid } from "@/components/solutions/SolutionsSections";
import { Testimonials } from "@/components/shared/Testimonials";
import { FAQ } from "@/components/shared/FAQ";
import { CTASection } from "@/components/shared/CTASection";
import { getTestimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Solutions & Pricing",
  description:
    "Proven AI products for common needs, custom builds for unique challenges. AI receptionist, chatbot, voice agent, missed-call recovery, and booking — from $297/mo. Everything guaranteed.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.proof.rating ? `⭐ ${site.proof.rating}/5` : "Solutions"}
        title={<>Choose How <span className="text-gradient">AI Grows</span> Your Business</>}
        sub="Proven products for common needs. Custom builds for unique challenges. Everything guaranteed."
      />
      <CostComparison />
      <Pricing />
      <ComparisonTable />
      <NeedDifferent />
      <Testimonials items={getTestimonials([1, 4, 8])} />
      <CustomServicesGrid />
      <FAQ />
      <CTASection title="Ready to Stop Losing Customers?" sub="Pick a plan or tell us what you need. Live in 48 hours." />
    </>
  );
}
