"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { tomorrow } from "@/data/systems";
import { TextureLight } from "@/components/ui/TextureLight";

/**
 * Where the work is going. The stated goals of the programs that fund
 * public digital systems, set in large type and revealed line by line as
 * the reader scrolls: the tomorrow V-Line builds toward.
 */
export function Tomorrow() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-tomorrow]").forEach((el) => {
        const lead = el.querySelector("[data-lead]");
        const rest = el.querySelector("[data-rest]");
        const rule = el.querySelector("[data-rule]");
        gsap
          .timeline({
            scrollTrigger: { trigger: el, start: "top 78%", once: true },
          })
          .fromTo(lead, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9 })
          .fromTo(rest, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.55")
          .fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.out" }, "-=0.7");
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, rgba(var(--accent-glow),0.14), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)]" />
      <TextureLight src="/textures/mesh-01.jpg" side="right" />

      <div className="container-edge relative">
        <p className="max-w-2xl text-pretty text-fg-secondary md:text-lg">
          Countries have already written down what a clean, digital tomorrow looks
          like. Our work is to help them get there, system by system.
        </p>

        <ul className="mt-14 md:mt-20">
          {tomorrow.map((t) => (
            <li key={t.id} data-tomorrow className="relative py-7 md:py-9">
              <div className="overflow-hidden">
                <p
                  data-lead
                  className="font-display text-balance text-[2rem] font-medium leading-[1.05] tracking-tightest md:text-5xl lg:text-[3.6rem]"
                >
                  <span className="gradient-text">{t.lead}</span>
                </p>
              </div>
              <p
                data-rest
                className="mt-3 max-w-3xl text-pretty text-lg leading-snug text-fg-secondary md:text-2xl"
              >
                {t.rest}
              </p>
              <div
                data-rule
                className="mt-7 h-px origin-left bg-gradient-to-r from-accent/70 via-border-strong to-transparent md:mt-9"
              />
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-pretty text-fg-secondary md:text-lg">
            One system, one program, one deployment at a time, so a service that once
            took months takes minutes, and a better tomorrow arrives on schedule.
          </p>
          <Link
            href="/technology"
            className="inline-flex items-center border-b border-border-strong pb-0.5 text-sm text-fg-primary transition-colors hover:border-accent hover:text-accent"
            data-cursor="hover"
          >
            See what we build
          </Link>
        </div>
      </div>
    </section>
  );
}
