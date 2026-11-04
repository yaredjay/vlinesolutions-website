"use client";

import { Reveal } from "@/components/ui/Reveal";

const methods = [
  {
    title: "Global Execution, Sovereign Control",
    body: "We eliminate the fragmented handoffs that cause national infrastructure projects to fail by anchoring our Silicon Valley engineering team within trusted, localized joint ventures. Responsibility remains entirely unified, delivery timelines are absolute, and local regulatory alignment is guaranteed from day one.",
  },
  {
    title: "Zero-Dependency Workforce Integration",
    body: "We do not leave behind systems that your teams cannot maintain. Every deployment is delivered alongside rigorous, intensive training frameworks for your local engineering workforce. We hand over the keys to a system your government can operate, defend, and scale independently.",
  },
  {
    title: "Infrastructure-Constrained Engineering",
    body: "We build for the reality of your environment, not the idealism of a lab. Our platforms are secure by design, interoperable by default, and engineered to remain highly resilient in low-connectivity, low-bandwidth, and high-latency regions.",
  },
];

/**
 * How we build: three tinted liquid-glass tiles that light left to right as
 * they scroll into view, with the orbit arcs behind them. Same surface as the
 * home Technology cluster, so the two pages read as one system.
 */
export function HowWeBuildTiles() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-edge">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
            <span className="gradient-text">How We Build</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-6xl">
          <svg
            aria-hidden
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[126%] -translate-x-1/2 -translate-y-1/2"
            fill="none"
          >
            <defs>
              <linearGradient id="orbit-about" x1="0" x2="1">
                <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.6" />
                <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path id="orbit-about-a" d="M 40 300 C 220 60, 780 60, 960 300" stroke="url(#orbit-about)" strokeWidth="1.2" />
            <path id="orbit-about-b" d="M 60 230 C 240 440, 760 440, 940 230" stroke="url(#orbit-about)" strokeWidth="1" opacity="0.6" />
            <circle r="2.5" fill="var(--accent)" style={{ filter: "drop-shadow(0 0 6px var(--accent))" }}>
              <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                <mpath href="#orbit-about-a" />
              </animateMotion>
            </circle>
            <circle r="2" fill="var(--accent)" opacity="0.7" style={{ filter: "drop-shadow(0 0 6px var(--accent))" }}>
              <animateMotion dur="15s" begin="-6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#orbit-about-b" />
              </animateMotion>
            </circle>
          </svg>

          <div className="relative grid gap-4 md:grid-cols-3 md:gap-5">
            {methods.map((m, i) => (
              <Reveal key={m.title} delay={0.08 + i * 0.08} className="h-full">
                <article
                  data-liquid
                  data-liquid-delay={i * 160}
                  className="liquid liquid-tint flex h-full flex-col rounded-[1.75rem] p-7 md:p-8"
                >
                  <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                  <h3 className="mt-6 font-display text-xl font-medium tracking-tight md:text-[1.35rem]">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{m.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
