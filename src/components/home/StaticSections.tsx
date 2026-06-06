"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { tickerStats } from "@/data/home";
import { pathways } from "@/data/solutions";
import { outcomes, steps, resultCards, businessValue } from "@/data/home";
import { clients } from "@/data/clients";

/* ---------------- Stats ticker ---------------- */
export function StatsTicker() {
  const items = [...tickerStats, ...tickerStats];
  return (
    <section className="relative border-y border-line bg-bg-2/50 py-5">
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center">
          {items.map((s, i) => (
            <span key={i} className="flex shrink-0 items-center gap-4 px-6 text-[1.0625rem] font-medium text-ink-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Three ways ---------------- */
export function ThreeWays() {
  return (
    <section id="ways" className="relative scroll-mt-28 py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Three Ways We Grow Your Business"
          title="Pick a proven product. Or tell us what you need."
          description="Proven products for common needs. Custom builds for unique challenges. Everything guaranteed."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {pathways.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-cyan">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-secondary">{p.body}</p>
                <div className="mt-6 inline-flex w-fit rounded-full border border-cyan/30 bg-cyan/[0.07] px-3 py-1.5 text-[0.875rem] font-semibold text-cyan">
                  {p.tag}
                </div>
                <Link href={p.href} className="mt-7 inline-flex items-center gap-2 text-[1rem] font-semibold text-ink transition-colors group-hover:text-cyan">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Outcomes (counters) ---------------- */
export function Outcomes() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Save Time. Make Money. Grow."
          title="Here's What AI Actually Does For Your Business"
          description="Not hype. Not buzzwords. Real outcomes."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <StaggerItem key={o.label}>
              <div className="glass card-hover h-full rounded-3xl p-8 text-center">
                <p className="text-3xs font-semibold uppercase tracking-[0.2em] text-cyan">{o.label}</p>
                <div className="mt-3 text-[3.25rem] font-extrabold leading-none text-ink">
                  <AnimatedCounter to={o.value} prefix={o.prefix} suffix={o.suffix} />
                </div>
                <p className="mt-4 text-body-sm leading-relaxed text-ink-secondary">{o.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
export function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="How It Works" title="Three Steps. Zero Missed Revenue." />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="glass card-hover relative h-full rounded-3xl p-8">
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-ink/[0.06]">{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-cyan">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-secondary">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Results ---------------- */
export function Results() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="Results" title="Real Results. Real Businesses." description="Industry performance data from AI-powered businesses." />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resultCards.map((r) => (
            <StaggerItem key={r.label}>
              <div className="glass card-hover h-full rounded-3xl p-7">
                <p className="text-[0.95rem] font-semibold text-cyan">{r.label}</p>
                <p className="mt-3 text-[1.0625rem] font-medium leading-snug text-ink">{r.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-body-sm text-ink-muted">Results based on industry case studies.</p>
      </div>
    </section>
  );
}

/* ---------------- Business value ---------------- */
export function BusinessValue() {
  return (
    <section className="relative overflow-hidden py-24">
      <GradientOrbs className="opacity-60" />
      <div className="container-edge relative">
        <SectionHeader
          eyebrow="Build Enterprise Value"
          title="AI Doesn't Just Save Time. It Builds Enterprise Value."
          description="When you're ready to grow, sell, or scale — buyers and investors want businesses with structured AI operations."
        />
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-4">
          {businessValue.map((b) => (
            <StaggerItem key={b}>
              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-money/15 text-money">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-[1.0625rem] leading-relaxed text-ink">{b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Link href="/custom" className="inline-flex items-center gap-2 text-[1.0625rem] font-semibold text-cyan link-underline">
            Build a business worth buying <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Custom preview ---------------- */
export function CustomPreview() {
  return (
    <section className="relative py-20">
      <div className="container-edge">
        <Reveal className="glass relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" />
          <div className="relative">
            <h2 className="text-balance text-[1.75rem] font-bold sm:text-4xl">Need Something We Haven&apos;t Listed?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body text-ink-secondary">
              We build custom AI for any workflow, any industry, any challenge. If you can describe it, we can automate it.
            </p>
            <Link href="/custom" className="btn btn-cyan mt-8">
              Tell Us What You Need <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Client logos ---------------- */
export function ClientLogos() {
  const items = [...clients, ...clients];
  return (
    <section className="relative py-16">
      <div className="container-edge">
        <p className="text-center text-3xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Organizations we&apos;ve worked with
        </p>
      </div>
      <div
        className="mt-8 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee-slow items-center">
          {items.map((c, i) => (
            <div key={`${c.id}-${i}`} className="mx-4 flex h-24 w-[220px] shrink-0 items-center justify-center rounded-2xl border border-line bg-surface px-6">
              <Image src={c.src} alt={c.name} width={c.width} height={c.height} sizes="180px" className="h-16 w-auto max-w-[170px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
