import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { HowCustomWorks, WhatWeBuild, GuaranteeBlock, CustomBusinessValue } from "@/components/custom/CustomSections";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Testimonials } from "@/components/shared/Testimonials";
import { CTASection } from "@/components/shared/CTASection";
import { getTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Custom AI Development",
  description:
    "You describe it. We build it. Custom AI for any workflow, any industry — voice agents, chatbots, document intelligence, CRM automation, and more. Deployed in ~30 days, guaranteed.",
  alternates: { canonical: "/custom" },
};

export default function CustomPage() {
  return (
    <>
      <PageHeader
        eyebrow="Custom AI"
        title={<>You Describe It. <span className="text-gradient">We Build It.</span></>}
        sub="Every business has workflows that eat time, cost money, and slow growth. Tell us yours. We'll engineer an AI solution that eliminates the bottleneck — and guarantee results, or your money back."
      />
      <HowCustomWorks />
      <WhatWeBuild />
      <GuaranteeBlock />
      <CustomBusinessValue />

      <section className="relative py-20">
        <div className="container-edge">
          <SectionHeader eyebrow="Get Started" title="Get Your Custom AI Quote in 24 Hours" description="Describe what you want automated. We come back with a plan, a price, and a timeline." />
          <div className="mx-auto mt-10 max-w-3xl">
            <QuoteForm full source="custom-page" submitLabel="Get My Custom Quote" />
          </div>
        </div>
      </section>

      <Testimonials items={getTestimonials([13, 14])} />
      <CTASection title="Have a Problem No One Has Solved?" sub="That's our specialty. Describe it — we'll architect the AI that fixes it." ctaLabel="Tell Us What You Need" ctaHref="/custom#top" footnote="Average response time: 4 hours." />
    </>
  );
}
