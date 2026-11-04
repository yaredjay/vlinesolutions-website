"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Digital public infrastructure",
    body: "Sovereign identity, registries, payments and the exchange layer that lets institutions share data without ceding control of it.",
  },
  {
    title: "Service and budget platforms",
    body: "Permits, benefits, case management and the systems that plan, release and account for public money.",
  },
  {
    title: "Data, cloud and security",
    body: "Trusted data, sovereign cloud and security designed in from the first line. Resilient by design, owned and defended by the institution.",
  },
];

/**
 * What V-Line builds, as a cluster of liquid-glass tiles: one statement tile
 * and three tinted pillar tiles that light up left to right as they scroll
 * into view. Orbit arcs behind them carry the globe's language.
 */
export function PathwayCards() {
  const panel = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = panel.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  return (
    <section className="relative py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-balance text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
              <span className="gradient-text">Modernization, finished.</span>
            </h2>
            <p className="mt-5 text-pretty text-fg-secondary md:text-lg">
              Legacy systems retired, platforms the institution owns, and public services
              people can reach. That is the infrastructure we deliver.
            </p>
          </div>
        </Reveal>

        <div
          ref={panel}
          onPointerMove={onMove}
          className="relative mx-auto mt-16 max-w-5xl"
          style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
        >
          {/* Orbit arcs: the globe's arcs, at rest. */}
          <svg
            aria-hidden
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[128%] -translate-x-1/2 -translate-y-1/2"
            fill="none"
          >
            <defs>
              <linearGradient id="orbit-g" x1="0" x2="1">
                <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.7" />
                <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path id="orbit-a" d="M 40 300 C 220 60, 780 60, 960 300" stroke="url(#orbit-g)" strokeWidth="1.2" />
            <path id="orbit-b" d="M 60 230 C 240 440, 760 440, 940 230" stroke="url(#orbit-g)" strokeWidth="1" opacity="0.6" />
            <circle r="2.5" fill="var(--accent)" style={{ filter: "drop-shadow(0 0 6px var(--accent))" }}>
              <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                <mpath href="#orbit-a" />
              </animateMotion>
            </circle>
            <circle r="2" fill="var(--accent)" opacity="0.7" style={{ filter: "drop-shadow(0 0 6px var(--accent))" }}>
              <animateMotion dur="13s" begin="-5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#orbit-b" />
              </animateMotion>
            </circle>
          </svg>

          {/* pointer light shared by the cluster */}
          <div
            className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-80"
            style={{
              background:
                "radial-gradient(420px circle at var(--mx) var(--my), rgba(var(--accent-glow),0.10), transparent 60%)",
            }}
          />

          <div className="relative grid gap-4 md:grid-cols-3 md:gap-5">
            {/* statement tile */}
            <Reveal className="md:col-span-3">
              <Link
                href="/technology"
                data-liquid
                className="liquid group block rounded-[2rem] p-8 md:p-10"
                data-cursor="hover"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl font-medium tracking-tightest md:text-[2.4rem]">
                      National digital infrastructure
                    </h3>
                    <p className="mt-4 max-w-2xl text-pretty text-fg-secondary md:text-lg">
                      Sovereign registries, national payments, budget management and secure
                      data clouds, built to open standards.
                    </p>
                  </div>
                  <span className="shrink-0 pt-2 text-sm text-fg-muted transition-colors group-hover:text-accent">
                    Explore
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* pillar tiles */}
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08} className="h-full">
                <Link
                  href="/technology"
                  data-liquid
                  data-liquid-delay={i * 160}
                  className="liquid liquid-tint group flex h-full flex-col rounded-[1.75rem] p-7 md:p-8"
                  data-cursor="hover"
                >
                  <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                  <h4 className="mt-6 font-display text-xl font-medium tracking-tight md:text-[1.35rem]">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{p.body}</p>
                  <span className="mt-auto pt-6 text-xs text-fg-muted transition-colors group-hover:text-fg-primary">
                    Explore
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
