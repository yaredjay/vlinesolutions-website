"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { guarantees } from "@/data/home";

export function Guarantee() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="Zero Risk" title="Zero Risk. Guaranteed Results." />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {guarantees.map((g) => (
            <StaggerItem key={g.title}>
              <div className="glass card-hover h-full rounded-3xl p-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-line bg-surface-2 text-cyan">
                  <g.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{g.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-secondary">{g.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
