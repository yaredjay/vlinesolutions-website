"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { clients, type Client } from "@/data/clients";

const order: Client["category"][] = ["Federal", "State & Local", "City"];

const groupLabels: Record<Client["category"], string> = {
  Federal: "Federal",
  "State & Local": "State & County",
  City: "Municipal",
};

export function GovernmentClients() {
  const grouped = order.map((cat) => ({
    cat,
    list: clients.filter((c) => c.category === cat),
  }));

  return (
    <section className="relative py-28">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Government Clients"
          title="Agencies we've supported."
          description="A representative cross-section of public-sector organizations V-Line Solutions has served — from federal departments to county seats."
        />

        <div className="mt-14 space-y-10">
          {grouped.map((group) => (
            <Reveal key={group.cat}>
              <div className="relative overflow-hidden rounded-3xl glass p-7 md:p-10">
                <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(var(--accent-glow),0.45) 0%, transparent 70%)",
                  }}
                />

                <div className="relative flex items-baseline justify-between border-b border-border-subtle pb-5">
                  <div>
                    <p className="text-3xs uppercase tracking-[0.22em] text-fg-muted">
                      Tier
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">
                      {groupLabels[group.cat]}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-fg-muted">
                    {String(group.list.length).padStart(2, "0")} clients
                  </span>
                </div>

                <Stagger
                  className="relative mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                  step={0.06}
                >
                  {group.list.map((client) => (
                    <StaggerItem key={client.id}>
                      <ClientCard client={client} />
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div
      className="group relative flex h-[260px] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong"
      title={client.name}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(var(--accent-glow),0.18), transparent 70%)",
        }}
      />
      <div className="relative flex h-32 w-full items-center justify-center">
        <Image
          src={client.src}
          alt={client.name}
          width={client.width}
          height={client.height}
          sizes="220px"
          className="h-32 w-auto max-w-[200px] object-contain transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <p className="relative text-center text-xs font-medium leading-tight text-fg-secondary transition-colors duration-300 group-hover:text-fg-primary">
        {client.short}
      </p>
    </div>
  );
}
