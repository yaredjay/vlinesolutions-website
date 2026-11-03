"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contracts } from "@/data/proof";

/**
 * Contracts in performance as sticky stacked cards: each card pins under
 * the header and recedes (scale + fade) as the next one covers it.
 * Fields follow what a contracting officer evaluates.
 */
export function PastPerformance() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-stack-card]"));
    const tweens = cards.map((card, i) => {
      if (i === cards.length - 1) return null;
      return gsap.to(card, {
        scale: 0.965,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: { trigger: cards[i + 1], start: "top 85%", end: "top 25%", scrub: true },
      });
    });
    return () => tweens.forEach((t) => t?.scrollTrigger?.kill());
  }, []);

  return (
    <section className="relative py-24 md:py-28" id="past-performance">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Past performance"
          title="Prime contractor. In performance."
          description="Three multi-year public-sector contracts, each run with the reporting, invoicing and compliance discipline federal and municipal clients require."
        />
        <div ref={root} className="mt-14 flex flex-col gap-5">
          {contracts.map((c) => (
            <article
              key={c.id}
              data-stack-card
              className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-10 lg:sticky lg:top-28"
              style={{ transformOrigin: "center top" }}
            >
              <div className="absolute inset-0 grid-bg-sm opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
                aria-hidden
                style={{ background: "radial-gradient(circle, rgba(var(--accent-glow),0.45) 0%, transparent 70%)" }}
              />
              <div className="relative grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="text-3xs uppercase tracking-[0.22em] text-fg-muted">{c.agency}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tightest md:text-[2rem]">{c.title}</h3>
                  <p className="mt-2 text-sm text-fg-secondary">{c.unit}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-3xs uppercase tracking-[0.2em] text-fg-muted">Scope</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{c.scope}</p>
                </div>
                <dl className="grid grid-cols-1 gap-4 text-sm md:col-span-3">
                  <div className="rounded-2xl border border-border-subtle bg-bg-elevated/40 p-4">
                    <dt className="text-3xs uppercase tracking-[0.2em] text-fg-muted">Vehicle</dt>
                    <dd className="mt-1 font-mono text-xs">{c.vehicle}</dd>
                  </div>
                  <div className="rounded-2xl border border-border-subtle bg-bg-elevated/40 p-4">
                    <dt className="text-3xs uppercase tracking-[0.2em] text-fg-muted">Period</dt>
                    <dd className="mt-1 text-xs text-fg-secondary">{c.period}</dd>
                  </div>
                  <div className="rounded-2xl border border-border-subtle bg-bg-elevated/40 p-4">
                    <dt className="text-3xs uppercase tracking-[0.2em] text-fg-muted">Role</dt>
                    <dd className="mt-1 text-xs text-fg-secondary">{c.role}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/government" className="btn-ghost" data-cursor="hover">
            Government credentials and references <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
