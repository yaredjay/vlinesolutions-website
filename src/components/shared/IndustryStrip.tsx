"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export function IndustryStrip() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Industries"
          title="Built For Your Industry"
          description="Every AI is trained on your specific business. Not a generic bot."
        />
        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" step={0.05}>
          {industries.map((ind) => (
            <StaggerItem key={ind.slug} className="min-w-0">
              <Link href={`/industries/${ind.slug}`} className="glass card-hover group flex h-full items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-surface text-cyan">
                  <ind.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-ink">{ind.name}</p>
                  <p className="truncate text-body-sm text-ink-secondary">{ind.hook}</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-cyan" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
