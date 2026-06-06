import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Assessment } from "@/components/assessment/Assessment";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment",
  description:
    "Find out exactly how much revenue you're leaving on the table. A free 60-second AI readiness assessment with a personalized plan recommendation and ROI estimate.",
  alternates: { canonical: "/assessment" },
};

export default function AssessmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Assessment"
        title={<>Free <span className="text-gradient">AI Readiness</span> Assessment</>}
        sub="Find out exactly how much revenue you're leaving on the table. Takes 60 seconds."
      />
      <section className="relative pb-24">
        <div className="container-edge">
          <Assessment />
        </div>
      </section>
    </>
  );
}
