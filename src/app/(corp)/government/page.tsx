import type { Metadata } from "next";
import { Building2, ShieldCheck, BadgeCheck, Hash } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { GovernmentClients } from "@/components/sections/GovernmentClients";
import { CTA } from "@/components/sections/CTA";
import { contractMechanisms, sectors, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Government Contracts",
  description:
    "V-Line Solutions LLC is a woman-owned small business serving federal, state and local agencies. Credentials, purchasing mechanisms and sectors served for public-sector buyers.",
  alternates: { canonical: "/government" },
  openGraph: {
    title: "Government Contracts | V-Line Solutions",
    description:
      "Woman-owned small business serving federal, state and local agencies.",
    url: "https://vlinesolutions.com/government",
  },
};

const credentials = [
  { icon: Building2, label: "Entity", value: site.legalName, sub: "California" },
  { icon: BadgeCheck, label: "Formed", value: "October 2022", sub: "Limited liability company, California" },
  { icon: Hash, label: "UEI", value: site.uei, sub: "Unique Entity ID" },
  { icon: ShieldCheck, label: "Ownership", value: "Woman-owned small business", sub: "Not SBA WOSB-certified" },
];

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Contracts"
        title={
          <>
            <span className="gradient-text">Built to be bought</span>{" "}
            <span className="text-fg-secondary">the way</span>{" "}
            <span className="text-fg-primary">government buys.</span>
          </>
        }
        description="From simplified acquisitions to multi-year task orders, we are set up to be bought the way agencies buy. Below: the credentials, the agencies we have served, and the mechanisms available to engage us."
      />

      {/* Credentials */}
      <section className="relative py-10">
        <div className="container-edge">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <StaggerItem
                key={c.label}
                className="relative overflow-hidden rounded-2xl glass glow-ring p-6"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(var(--accent-glow),0.5) 0%, transparent 70%)",
                  }}
                />
                <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-border-subtle bg-bg-elevated/70 text-accent">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-3xs uppercase tracking-[0.2em] text-fg-muted">{c.label}</p>
                <p className="mt-1 font-display text-xl font-medium tracking-tight">{c.value}</p>
                <p className="mt-1 text-xs text-fg-muted">{c.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <GovernmentClients />

      {/* How We Work */}
      <section className="relative py-24">
        <div className="container-edge">
          <SectionHeader
            eyebrow="How We Work With Government"
            title="Engage us through the vehicle that fits."
            description="From single awards to long-form task orders, we meet agencies where they procure."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contractMechanisms.map((m, i) => (
              <StaggerItem
                key={m.title}
                className="relative overflow-hidden rounded-2xl glass glow-ring p-7"
              >
                <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <h3 className="relative font-display text-lg font-medium tracking-tight md:text-xl">
                  {m.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-fg-secondary">{m.body}</p>
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(var(--accent-glow),0.5) 0%, transparent 70%)",
                  }}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative py-24">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Sectors Served"
            title="Where our work shows up."
            description="V-Line Solutions delivers across the public mission set, from the agency office to the field operation."
          />
          <Stagger className="mt-12 flex flex-wrap justify-center gap-3" step={0.04}>
            {sectors.map((s) => (
              <StaggerItem key={s}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface/60 px-4 py-2.5 text-sm text-fg-secondary backdrop-blur-md transition-colors hover:text-fg-primary">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                  {s}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA
        eyebrow="Procurement"
        title="Submit an RFP or request references."
        body="Past-performance references, W-9 and certificates of insurance on request. One business day to a reply from a named person."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Technology solutions", href: "/technology" }}
      />
    </>
  );
}
