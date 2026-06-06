"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GradientOrbs } from "@/components/ui/GradientOrbs";

export function CTASection({
  title = "Your Competitors Are Already Using AI. Are You?",
  sub = "Every minute without AI is a customer going somewhere else.",
  ctaLabel = "Get Started Today",
  ctaHref = "/solutions#pricing",
  footnote = "30-day money-back guarantee. Cancel anytime.",
}: {
  title?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
  footnote?: string;
}) {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-10 text-center md:p-16">
          <GradientOrbs className="opacity-70" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-[1.75rem] font-bold leading-tight sm:text-4xl md:text-[2.75rem]">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-body text-ink-secondary">{sub}</p>
            <Link href={ctaHref} className="btn btn-primary glow-pulse mt-8">
              {ctaLabel} <ArrowRight className="h-5 w-5" />
            </Link>
            {footnote && <p className="mt-4 text-body-sm text-ink-muted">{footnote}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
