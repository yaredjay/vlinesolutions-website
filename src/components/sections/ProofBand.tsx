"use client";

import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { proofMetrics } from "@/data/proof";

/**
 * Defensible numbers, Booz Allen / Accenture Federal style: a stat band
 * directly under the opening sections, counters driven by ScrollTrigger.
 */
export function ProofBand() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const nums = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    const fmt = (v: number, suffix: string) => Math.round(v).toLocaleString("en-US") + suffix;
    const triggers: ScrollTrigger[] = [];

    nums.forEach((el) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (reduced) {
        el.textContent = fmt(target, suffix);
        return;
      }
      el.textContent = fmt(0, suffix);
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const o = { v: 0 };
            gsap.to(o, { v: target, duration: 1.6, ease: "power1.out", onUpdate: () => { el.textContent = fmt(o.v, suffix); } });
          },
        })
      );
    });

    const rules = root.querySelectorAll<HTMLElement>("[data-rule]");
    if (!reduced) {
      gsap.from(rules, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 80%", once: true },
      });
    }

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section className="relative py-20 md:py-24">
      <div className="container-edge">
        <div ref={ref} className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {proofMetrics.map((m) => (
            <div key={m.label} className="relative">
              <span data-rule className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-accent via-accent/50 to-transparent" aria-hidden />
              <p className="pt-6 font-display text-[2.8rem] font-medium leading-none tracking-tightest tabular-nums md:text-[4rem]">
                <span data-count={m.value} data-suffix={m.suffix}>
                  {m.value.toLocaleString("en-US")}
                  {m.suffix}
                </span>
              </p>
              <p className="mt-4 max-w-[22ch] text-sm leading-snug text-fg-secondary">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
