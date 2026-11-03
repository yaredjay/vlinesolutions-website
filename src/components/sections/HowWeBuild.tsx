"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { method } from "@/data/proof";

/** Four stages, one standard: discover, architect, build, operate. */
export function HowWeBuild() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-edge">
        <Reveal>
          <h2 className="max-w-3xl font-display text-balance text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
            <span className="gradient-text">Built in the open, handed over complete.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-2xl text-pretty text-fg-secondary md:text-lg">
            Security, accessibility and audit are designed in, not bolted on. The
            client sees working software every week and owns the result outright —
            code, data and documentation.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {method.map((m) => (
            <StaggerItem
              key={m.title}
              className="relative overflow-hidden rounded-3xl glass glow-ring p-7 md:p-8"
            >
              <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
              <h3 className="relative font-display text-2xl font-medium tracking-tight">{m.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-fg-secondary">{m.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
