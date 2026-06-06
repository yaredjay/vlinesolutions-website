"use client";

import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { whatWeBuild } from "@/data/solutions";

const processSteps = [
  { n: "01", title: "You Tell Us the Problem", body: "No jargon. Describe what's eating your time. We listen." },
  { n: "02", title: "We Architect the Solution", body: "Our engineers design a system for your exact workflow. You approve before we build." },
  { n: "03", title: "We Build & Deploy in 30 Days", body: "Custom AI. Not a template. Built for YOUR business, tested on YOUR data." },
  { n: "04", title: "You See Results — Or Pay Nothing", body: "30-day money-back guarantee on every custom build." },
];

export function HowCustomWorks() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="How It Works" title="From Problem to Deployed AI in 30 Days" />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="glass card-hover h-full rounded-3xl p-7">
                <span className="text-4xl font-extrabold text-cyan/30">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-secondary">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function WhatWeBuild() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="Capabilities" title="What We Build" description="If you can describe it, we can automate it." />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeBuild.map((s) => (
            <StaggerItem key={s.title}>
              <div className="glass card-hover h-full rounded-3xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-cyan">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[1.125rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-ink-secondary">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function GuaranteeBlock() {
  return (
    <section className="relative py-12">
      <div className="container-edge">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-money/30 bg-money/[0.06] p-10 md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)" }} />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-money/15 text-money"><ShieldCheck className="h-7 w-7" /></span>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">The V-Line Guarantee</h2>
            <p className="mt-3 text-body text-ink-secondary">We don&apos;t ask you to trust us. We ask you to test us.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["30-Day Money-Back", "If our AI doesn't deliver measurable results, full refund."],
                ["No Long-Term Contracts", "Month-to-month. Cancel anytime."],
                ["Results Defined Upfront", "We agree on success metrics before we build."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-line bg-surface p-5">
                  <p className="font-bold text-ink">{t}</p>
                  <p className="mt-1.5 text-body-sm text-ink-secondary">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CustomBusinessValue() {
  return (
    <section className="relative py-20">
      <div className="container-edge">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl">Every AI System We Build Is a Business Asset</h2>
          <p className="mt-4 text-body text-ink-secondary">
            Structured operations, automated revenue capture, documented workflows — these are what buyers pay premium multiples for. We don&apos;t just save you time today. We build enterprise value for tomorrow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
