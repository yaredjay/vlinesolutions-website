"use client";

import Image from "next/image";
import { clients, type Client } from "@/data/clients";

function LogoChip({ client }: { client: Client }) {
  return (
    <div
      className="mx-4 flex h-32 w-[260px] shrink-0 items-center justify-center rounded-2xl border border-border-subtle bg-bg-surface/40 px-6 backdrop-blur-md"
      title={client.name}
    >
      <Image
        src={client.src}
        alt={client.name}
        width={client.width}
        height={client.height}
        sizes="220px"
        className="h-24 w-auto max-w-[210px] object-contain transition-opacity duration-300 hover:opacity-100"
        priority={false}
      />
    </div>
  );
}

export function LogosMarquee() {
  const items = [...clients, ...clients];
  return (
    <section className="relative py-16">
      <div className="container-edge">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-fg-muted">
          Trusted across federal, state, and local government
        </p>
      </div>
      <div
        className="relative mt-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {items.map((c, i) => (
            <LogoChip key={`${c.id}-${i}`} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
