"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
        <Reveal className="band-blue relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center md:px-16 md:py-20">
          <div className="grid-overlay" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-[2.75rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] text-white/85 sm:text-body">{sub}</p>
            <Link
              href={ctaHref}
              className="btn mt-8 bg-white text-[#0a66ff] shadow-[0_18px_44px_-14px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:bg-white/90"
            >
              {ctaLabel} <ArrowRight className="h-5 w-5" />
            </Link>
            {footnote && <p className="mt-4 text-body-sm text-white/75">{footnote}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
