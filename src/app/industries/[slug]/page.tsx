import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Pricing } from "@/components/solutions/Pricing";
import { Testimonials } from "@/components/shared/Testimonials";
import { CTASection } from "@/components/shared/CTASection";
import { industries, getIndustry } from "@/data/industries";
import { getTestimonials } from "@/data/testimonials";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  return {
    title: `AI for ${ind.name}`,
    description: `${ind.headline} — ${ind.sub} Custom AI receptionist, booking, and follow-up for ${ind.name.toLowerCase()} businesses.`,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const ts = getTestimonials(ind.testimonialIds);

  return (
    <>
      <PageHeader
        eyebrow={ind.name}
        title={<span className="text-gradient">{ind.headline}</span>}
        sub={ind.sub}
      />

      {/* Pain points */}
      <section className="relative py-16">
        <div className="container-edge">
          <SectionHeader eyebrow="The Problem" title={`What's Costing ${ind.name} Businesses`} />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {ind.pains.map((p) => (
              <StaggerItem key={p.label}>
                <div className="glass card-hover h-full rounded-3xl p-7 text-center">
                  <p className="text-[2.5rem] font-extrabold leading-none text-warn">{p.stat}</p>
                  <p className="mt-3 text-body-sm text-ink-secondary">{p.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative py-16">
        <div className="container-edge">
          <SectionHeader eyebrow="The Fix" title="How V-Line AI Solves This" />
          <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4">
            {ind.solutions.map((s) => (
              <StaggerItem key={s}>
                <div className="glass flex items-start gap-4 rounded-2xl p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-money/15 text-money"><Check className="h-4 w-4" /></span>
                  <p className="text-[1.0625rem] leading-relaxed text-ink">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {ts.length > 0 && <Testimonials items={ts} />}

      <Pricing />

      <CTASection
        title={`Get Your ${ind.name} AI`}
        sub="Live in 48 hours. Backed by a 30-day money-back guarantee."
        ctaLabel="Get Started"
        ctaHref="/solutions#pricing"
      />
    </>
  );
}
