import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "V-Line Solutions builds production-grade AI systems that capture leads, automate operations, and grow revenue for businesses that can't afford to miss a customer. Based in Campbell, California.",
  alternates: { canonical: "/about" },
};

const paragraphs = [
  "V-Line Solutions builds AI systems that capture leads, automate operations, and grow revenue for businesses that can't afford to miss a single customer.",
  "Founded in 2025, we've deployed production AI platforms serving businesses across the United States. Our engineering team ships AI systems from concept to live deployment in under 30 days — a pace most agencies can't match.",
  "We're not a chatbot company selling templates. We're AI engineers building custom, production-grade systems tailored to your business. Every AI we deploy is trained on your services, your pricing, your brand voice, and your workflows.",
  "Every system we build makes your business more structured, more automated, and more valuable — whether you're scaling to the next level or building toward an exit.",
  "Based in Campbell, California. Serving businesses nationwide.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>About <span className="text-gradient">V-Line Solutions</span></>}
      />
      <section className="relative py-12">
        <div className="container-edge">
          <Reveal className="prose-width mx-auto space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[1.375rem] font-medium leading-relaxed text-ink" : "text-body leading-relaxed text-ink-secondary"}>
                {p}
              </p>
            ))}
          </Reveal>

          {/* Platforms */}
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <p className="text-3xs font-semibold uppercase tracking-[0.2em] text-ink-muted">Platforms we operate</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {site.platforms.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass card-hover group flex items-center justify-between rounded-2xl p-6">
                  <div>
                    <p className="text-xl font-bold text-ink">{p.name}</p>
                    <p className="text-body-sm text-ink-secondary">{p.domain}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-muted transition-colors group-hover:text-cyan" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Location */}
          <Reveal className="mx-auto mt-8 max-w-3xl">
            <div className="glass flex items-start gap-4 rounded-2xl p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-cyan"><MapPin className="h-5 w-5" /></span>
              <div className="text-[1.0625rem] text-ink">
                <p className="font-semibold">{site.legalName}</p>
                <p className="text-ink-secondary">{site.location}</p>
                <Link href="/government" className="mt-2 inline-block text-body-sm text-cyan link-underline">Government & procurement →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection title="Let's Build Something That Pays for Itself" sub="Tell us what's slowing you down. We'll show you the AI that fixes it." ctaLabel="Start a Conversation" ctaHref="/contact" />
    </>
  );
}
