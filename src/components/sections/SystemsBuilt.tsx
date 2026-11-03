"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { systemsBuilt } from "@/data/systems";

/**
 * What gets built every day. A sticky statement on the left; on the right a
 * ledger of system types that lights up as it passes the centre of the
 * viewport, with a progress line that fills as the reader moves through it.
 */
export function SystemsBuilt() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = getGsap();
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-system-row]");
      rows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 58%",
          end: "bottom 42%",
          toggleClass: { targets: row, className: "is-active" },
        });
      });
      if (line.current) {
        gsap.fromTo(
          line.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 0.4,
            },
          }
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-28 md:py-36">
      <div className="container-edge">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <Reveal>
                <h2 className="font-display text-balance text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl lg:text-[3.4rem]">
                  <span className="gradient-text">The systems a government runs on.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-md text-pretty text-fg-secondary md:text-lg">
                  Somewhere today a ministry is commissioning a registry, a treasury is
                  retiring a paper ledger, and a city is putting a permit online for the
                  first time. These are the systems public programs are budgeting for —
                  and the systems we build, from Silicon Valley to the agencies and
                  development programs that run them.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="relative h-24 w-px overflow-hidden rounded-full bg-border-subtle">
                    <div
                      ref={line}
                      className="absolute inset-0 origin-top bg-gradient-to-b from-accent to-accent/20 shadow-[0_0_12px_var(--accent)]"
                      style={{ transform: "scaleY(0)" }}
                    />
                  </div>
                  <p className="max-w-[16rem] text-sm text-fg-muted">
                    Built to be owned by the institution that runs them, and handed over
                    with the people trained to keep them running.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <ol className="md:col-span-7">
            {systemsBuilt.map((s, i) => (
              <li
                key={s.id}
                data-system-row
                className="system-row group relative border-t border-border-subtle py-7 transition-colors duration-500 last:border-b md:py-8"
              >
                <div
                  className="pointer-events-none absolute -inset-x-6 inset-y-0 rounded-2xl opacity-0 transition-opacity duration-700 group-[.is-active]:opacity-100"
                  style={{
                    background:
                      "radial-gradient(70% 100% at 0% 50%, rgba(var(--accent-glow),0.12), transparent 70%)",
                  }}
                />
                <div className="relative grid gap-3 md:grid-cols-12 md:gap-6">
                  <div className="flex items-center gap-4 md:col-span-5">
                    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fg-muted/40 transition-all duration-500 group-[.is-active]:bg-accent group-[.is-active]:shadow-[0_0_12px_var(--accent)]" />
                    <h3 className="font-display text-xl font-medium tracking-tight text-fg-secondary transition-colors duration-500 group-[.is-active]:text-fg-primary md:text-2xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-pretty pl-[1.4rem] text-sm leading-relaxed text-fg-muted transition-colors duration-500 group-[.is-active]:text-fg-secondary md:col-span-7 md:pl-0 md:text-[0.95rem]">
                    {s.body}
                  </p>
                </div>
                <span className="sr-only">{i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
