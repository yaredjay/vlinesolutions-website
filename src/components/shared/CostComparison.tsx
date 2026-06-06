"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { costComparison } from "@/data/solutions";

export function CostComparison() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="The Real Cost" title="How Much Are You Paying Now?" />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {costComparison.map((c) => (
            <StaggerItem key={c.current}>
              <div className="glass card-hover h-full rounded-3xl p-7">
                <p className="text-[1.0625rem] font-semibold text-ink">{c.current}</p>
                <p className="mt-1 text-2xl font-bold text-warn">{c.currentCost}</p>
                <div className="my-5 flex items-center gap-2 text-ink-muted">
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-body-sm">V-Line AI: {c.vline}</span>
                </div>
                <div className="rounded-2xl border border-money/25 bg-money/[0.07] px-4 py-3 text-center">
                  <span className="text-[1.0625rem] font-extrabold text-money">{c.save}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
