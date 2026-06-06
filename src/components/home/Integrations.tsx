"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import type { Partner } from "@/data/partners";

export function Integrations({ items }: { items: Partner[] }) {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Integrations"
          title="Works With the Tools You Already Use"
          description="Your AI plugs straight into your calendar, CRM, and billing — no rip-and-replace."
        />
        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4" step={0.05}>
          {items.map((p) => (
            <StaggerItem key={p.slug}>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-line bg-white px-5 shadow-[0_8px_24px_-18px_rgba(13,40,120,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30">
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={140} height={40} className="h-8 w-auto max-w-[130px] object-contain" />
                ) : (
                  <span className="text-center text-[1.05rem] font-bold tracking-tight text-ink-secondary">{p.name}</span>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-body-sm text-ink-muted">…and 200+ more via custom integrations.</p>
      </div>
    </section>
  );
}
