import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "AI built for your industry — HVAC, plumbing, roofing, dental, legal, real estate, salons, auto repair, fitness, restaurants, and electrical. Trained on your business, not a generic bot.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>AI Solutions Built For <span className="text-gradient">Your Industry</span></>}
        sub="Every business is different. Your AI should be too. Pick your industry to see exactly how we help."
      />
      <section className="relative pb-12">
        <div className="container-edge">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" step={0.05}>
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="glass card-hover group flex h-full flex-col rounded-3xl p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-cyan">
                    <ind.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{ind.name}</h3>
                  <p className="mt-2 flex-1 text-body-sm leading-relaxed text-ink-secondary">{ind.hook}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors group-hover:text-cyan">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTASection title="Don't See Your Industry?" sub="We build custom AI for any business. Tell us what you need." ctaLabel="Get a Custom Quote" ctaHref="/custom" />
    </>
  );
}
