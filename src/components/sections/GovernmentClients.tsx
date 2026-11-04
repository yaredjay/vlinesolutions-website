"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/data/clients";

/** Agencies we've supported: one compact liquid panel, every logo together. */
export function GovernmentClients() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-edge">
        <SectionHeader
          title="Agencies we've worked with."
          description="Federal, state, county and municipal, on one standard."
        />
        <Reveal className="mt-12">
          <div data-liquid className="liquid rounded-[2rem] p-3 md:p-4">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
              {clients.map((c, i) => (
                <li
                  key={c.id}
                  className="group relative flex h-36 flex-col items-center justify-center gap-3 rounded-[1.25rem] border border-white/[0.04] bg-white/[0.02] px-5 transition-colors duration-500 hover:bg-white/[0.05] md:h-40"
                  title={c.name}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <Image
                    src={c.src}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    sizes="180px"
                    className="h-16 w-auto max-w-[150px] object-contain opacity-85 transition-opacity duration-500 group-hover:opacity-100 md:h-[4.5rem]"
                  />
                  <p className="text-center text-[0.72rem] leading-tight text-fg-muted transition-colors duration-300 group-hover:text-fg-secondary">
                    {c.short}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
