"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import type { Partner } from "@/data/partners";

export function PoweredBy({ partners }: { partners: Partner[] }) {
  return (
    <section className="relative py-20">
      <div className="container-edge">
        <p className="text-center text-3xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Built on enterprise-grade AI &amp; infrastructure
        </p>
        <Stagger className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" step={0.05}>
          {partners.map((p) => (
            <StaggerItem key={p.slug}>
              <div className="flex h-[88px] items-center justify-center rounded-2xl border border-line bg-white px-5 shadow-[0_8px_24px_-18px_rgba(13,40,120,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30">
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={130} height={40} className="h-8 w-auto max-w-[120px] object-contain" />
                ) : (
                  <span className="text-[1.05rem] font-bold tracking-tight text-ink-secondary">{p.name}</span>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
