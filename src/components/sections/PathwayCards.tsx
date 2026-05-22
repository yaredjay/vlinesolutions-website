"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, HardHat } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pathways = [
  {
    href: "/technology",
    icon: Cpu,
    eyebrow: "Division 01",
    title: "Technology Solutions",
    description:
      "AI systems, agentic automation, secure platforms, and cloud — purpose-built for public-sector outcomes.",
    bullets: ["Artificial Intelligence", "Agentic Automation", "Cybersecurity & Cloud"],
  },
  {
    href: "/workforce",
    icon: HardHat,
    eyebrow: "Division 02",
    title: "Workforce Solutions",
    description:
      "Mission-ready personnel across facilities, events, sports, IT, administration, and the skilled trades.",
    bullets: ["Facilities & Janitorial", "Events & Sports Operations", "IT & Skilled Trades"],
  },
];

export function PathwayCards() {
  return (
    <section className="relative py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fg-secondary backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
            Two Divisions. One Standard.
          </span>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
            <span className="gradient-text">Pick your pathway.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pathways.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group relative block overflow-hidden rounded-3xl glass glow-ring p-8 md:p-10"
                data-cursor="hover"
              >
                <div
                  className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(var(--accent-glow),0.55) 0%, transparent 70%)",
                  }}
                />
                <div className="absolute inset-0 grid-bg-sm opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-fg-muted">
                    {p.eyebrow}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border-subtle bg-bg-elevated/70 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4 text-fg-primary" />
                  </span>
                </div>

                <div className="relative mt-8 flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border-subtle bg-bg-elevated/70 text-accent">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-medium tracking-tightest md:text-[2.25rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-md text-fg-secondary">{p.description}</p>
                  </div>
                </div>

                <ul className="relative mt-10 flex flex-wrap gap-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-border-subtle bg-bg-surface/40 px-3 py-1.5 text-xs text-fg-secondary backdrop-blur"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                  className="relative mt-10 h-px origin-left bg-gradient-to-r from-accent via-accent/60 to-transparent"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
