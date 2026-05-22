"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(var(--accent-glow),0.18), transparent 60%)",
              }}
            />
            <div className="absolute inset-0 grid-bg-sm opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
            <Stagger className="relative grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-3 md:divide-x md:divide-y-0">
              {stats.map((s) => (
                <StaggerItem key={s.label} className="p-10 md:p-14">
                  <div className="font-display text-[3rem] font-medium leading-none tracking-tightest md:text-[4rem]">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-fg-muted">
                    {s.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
