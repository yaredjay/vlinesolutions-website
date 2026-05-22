"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredPlatforms } from "@/data/services";

export function FeaturedPlatforms() {
  return (
    <section className="relative py-28">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Featured Platforms"
          title="Products we build, ship, and run."
          description="In addition to client engagements, V-Line Solutions operates production AI platforms used in regulated, mission-critical workflows."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featuredPlatforms.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl glass glow-ring p-8 md:p-10"
                data-cursor="hover"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 0% 0%, rgba(var(--accent-glow),0.20), transparent 55%)",
                  }}
                />
                <div className="absolute inset-0 grid-bg-sm opacity-25" />

                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated/60 px-3 py-1 text-3xs uppercase tracking-[0.22em] text-fg-secondary">
                    <Sparkles className="h-3 w-3 text-accent" />
                    {p.tag}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border-subtle bg-bg-elevated/70 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="relative mt-8 font-display text-4xl font-medium tracking-tightest md:text-5xl">
                  <span className="gradient-text">{p.name}</span>
                </h3>
                <p className="relative mt-2 text-xs uppercase tracking-[0.18em] text-fg-muted">
                  {p.domain}
                </p>

                <p className="relative mt-6 max-w-md text-pretty text-fg-secondary">
                  {p.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                  className="relative mt-10 h-px origin-left bg-gradient-to-r from-accent via-accent/60 to-transparent"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
