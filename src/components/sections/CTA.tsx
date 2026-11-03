"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA({
  eyebrow = "Engage",
  title = "Ready to move at project speed?",
  body = "Tell us about the contract, the constraint, and the deadline. We will respond with a path forward.",
  primary = { label: "Start a conversation", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative py-28">
      <div className="container-edge">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-bg-surface/60 p-10 md:p-16">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 100%, rgba(var(--accent-glow),0.35) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-0 grid-bg-sm opacity-25" aria-hidden />
            {/* Signal line: a pulse travelling the top edge, like an arc traveller. */}
            <svg aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px w-full overflow-visible">
              <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="rgba(var(--accent-glow),0.25)" strokeWidth="1" />
              <circle r="2.5" cy="0.5" fill="var(--accent)" style={{ filter: "drop-shadow(0 0 8px var(--accent))" }}>
                <animate attributeName="cx" from="-2%" to="102%" dur="7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="7s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[80%] -translate-x-1/2 animate-pulse-glow"
              aria-hidden
              style={{
                background:
                  "radial-gradient(50% 100% at 50% 0%, rgba(var(--accent-glow),0.5), transparent 70%)",
              }}
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
                <span className="gradient-text">{title}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-fg-secondary md:text-lg">
                {body}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href={primary.href} className="btn-primary">
                  {primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {secondary && (
                  <Link href={secondary.href} className="btn-ghost">
                    {secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
