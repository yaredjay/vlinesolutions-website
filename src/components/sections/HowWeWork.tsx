"use client";

import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { method, leadership } from "@/data/proof";

/**
 * Delivery method (Thoughtworks "How we work" / Second Front
 * Build-Authorize-Deploy-Operate pattern) and named leadership.
 */
export function HowWeWork() {
  const root = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const items = el.querySelectorAll<HTMLElement>("[data-step]");
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 78%", once: true } });
    tl.from(el.querySelectorAll("[data-rule]"), { scaleX: 0, transformOrigin: "left center", duration: 0.8, stagger: 0.12, ease: "power2.out" }, 0)
      .from(items, { opacity: 0, y: 22, duration: 0.8, stagger: 0.12, ease: "power3.out" }, 0.1);
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="relative py-24 md:py-28" id="how-we-work">
      <div className="container-edge">
        <SectionHeader eyebrow="How we work" title="Four stages. No surprises." description="The same delivery method on every engagement, from a municipal program to a national platform." />

        <ol ref={root} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m) => (
            <li key={m.n} data-step className="relative">
              <span data-rule className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent via-accent/50 to-transparent" aria-hidden />
              <p className="pt-6 font-mono text-xs tracking-[0.2em] text-accent">{m.n}</p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tightest">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{m.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {leadership.map((p) => (
            <div key={p.name} className="relative flex gap-5 overflow-hidden rounded-3xl glass p-7 md:p-8">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-border-subtle bg-bg-elevated/70 font-mono text-sm tracking-[0.12em] text-fg-primary">
                {p.initials}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-medium tracking-tight">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-fg-muted">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
