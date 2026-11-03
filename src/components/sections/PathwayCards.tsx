"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Digital public infrastructure",
    body: "Identity, registries, payments and the exchange layer that lets a government share data without losing control of it.",
  },
  {
    title: "Service and budget platforms",
    body: "Permits, benefits, case management and the systems that plan, release and account for public money.",
  },
  {
    title: "Data, cloud and security",
    body: "Trusted data, sovereign cloud and security designed in from the first line — infrastructure an institution can own and defend.",
  },
];

/**
 * One centred card: what V-Line builds. A pointer-tracked light, two orbit
 * arcs with a travelling pulse (the globe's visual language, at rest), and a
 * quiet hand-off to Workforce for the people who keep systems running.
 */
export function PathwayCards() {
  const card = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = card.current;
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
              <span className="gradient-text">Systems that move a country forward.</span>
            </h2>
            <p className="mt-5 text-pretty text-fg-secondary md:text-lg">
              We design, build and run the platforms public programs depend on —
              built to be owned by the institutions that run them.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Orbit arcs behind the card: the globe's arcs, at rest. */}
          <svg
            aria-hidden
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[136%] -translate-x-1/2 -translate-y-1/2"
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

          <Reveal delay={0.08}>
            <Link
              ref={card}
              href="/technology"
              onPointerMove={onMove}
              className="group relative block overflow-hidden rounded-[2rem] glass glow-ring p-8 md:p-12"
              data-cursor="hover"
              style={{ ["--mx" as string]: "50%", ["--my" as string]: "0%" }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(520px circle at var(--mx) var(--my), rgba(var(--accent-glow),0.16), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 grid-bg-sm opacity-30 [mask-image:radial-gradient(80%_80%_at_50%_0%,black,transparent)]" />

              <div className="relative flex items-start justify-between gap-6">
                <h3 className="font-display text-3xl font-medium tracking-tightest md:text-[2.6rem]">
                  Technology Solutions
                </h3>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border-subtle bg-bg-elevated/70 transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4 text-fg-primary" />
                </span>
              </div>
              <p className="relative mt-4 max-w-2xl text-pretty text-fg-secondary md:text-lg">
                Registries and identity, payments, budget and service platforms, data and
                the secure cloud underneath them — delivered to agencies across the United
                States and to the programs modernizing government around the world.
              </p>

              <div className="relative mt-10 grid gap-6 border-t border-border-subtle pt-8 md:grid-cols-3 md:gap-8">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[0.7rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                      <h4 className="font-display text-lg font-medium tracking-tight">{p.title}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{p.body}</p>
                  </motion.div>
                ))}
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="relative mt-9 text-center text-sm text-fg-muted">
              And the people who keep them running —{" "}
              <Link
                href="/workforce"
                className="group inline-flex items-center gap-1 text-fg-secondary transition-colors hover:text-accent"
              >
                workforce solutions
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
