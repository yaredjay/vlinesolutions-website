import type { Metadata } from "next";
import Image from "next/image";
import { Building2, ShieldCheck, BadgeCheck, Hash, Check } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { government, naics, naicsLabels, sectors, contractMechanisms, site } from "@/data/site";
import { clients, type Client } from "@/data/clients";

export const metadata: Metadata = {
  title: "Government Contracts",
  description:
    "V-Line Solutions LLC is SAM.gov registered, small business classified, and active across 17 NAICS codes spanning technology and professional services. Purpose-built for public-sector procurement.",
  alternates: { canonical: "/government" },
};

const credentials = [
  { icon: Building2, label: "Entity", value: site.legalName, sub: "California" },
  { icon: BadgeCheck, label: "Registration", value: government.registration, sub: "Active" },
  { icon: Hash, label: "DUNS", value: government.duns, sub: "Universal" },
  { icon: ShieldCheck, label: "Classification", value: government.classification, sub: "Federal designation" },
];

const tiers: { cat: Client["category"]; label: string }[] = [
  { cat: "Federal", label: "Federal" },
  { cat: "State & Local", label: "State & County" },
  { cat: "City", label: "Municipal" },
];

export default function GovernmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Government"
        title={<>Purpose-Built for <span className="text-gradient">Public Sector</span> Procurement</>}
        sub="SAM.gov registered. Small business classified. Active across 17 NAICS codes. Ready for direct awards, IDIQs, cooperative purchasing, and rapid deployment."
      />

      {/* Credentials */}
      <section className="relative py-10">
        <div className="container-edge">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <StaggerItem key={c.label}>
                <div className="glass card-hover h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-cyan"><c.icon className="h-5 w-5" /></span>
                  <p className="mt-4 text-3xs uppercase tracking-[0.2em] text-ink-muted">{c.label}</p>
                  <p className="mt-1 text-xl font-bold">{c.value}</p>
                  <p className="mt-1 text-body-sm text-ink-muted">{c.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Clients */}
      <section className="relative py-20">
        <div className="container-edge">
          <SectionHeader eyebrow="Government Clients" title="Agencies We've Supported" description="A representative cross-section of public-sector organizations we've served." />
          <div className="mt-12 space-y-8">
            {tiers.map((tier) => {
              const list = clients.filter((c) => c.category === tier.cat);
              if (!list.length) return null;
              return (
                <Reveal key={tier.cat} className="glass rounded-3xl p-6 md:p-8">
                  <p className="border-b border-line pb-4 font-display text-xl font-bold">{tier.label}</p>
                  <Stagger className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" step={0.05}>
                    {list.map((c) => (
                      <StaggerItem key={c.id}>
                        <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-hover" title={c.name}>
                          <Image src={c.src} alt={c.name} width={c.width} height={c.height} sizes="140px" className="h-20 w-auto max-w-[120px] object-contain" />
                          <p className="text-center text-body-sm text-ink-secondary">{c.short}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NAICS */}
      <section className="relative py-20">
        <div className="container-edge">
          <SectionHeader eyebrow="NAICS Codes" title="17 Codes. Three Core Domains." description="Registered across the technology, facilities, professional services, and event classifications most used in government procurement." />
          <Reveal className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl glass">
            <div className="grid sm:grid-cols-2">
              {naics.map((code, i) => (
                <div key={code} className="flex items-center justify-between gap-4 border-b border-line p-4 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-body-sm text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg font-bold">{code}</span>
                  </div>
                  <span className="max-w-[55%] text-right text-body-sm text-ink-secondary">{naicsLabels[code]}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mechanisms */}
      <section className="relative py-20">
        <div className="container-edge">
          <SectionHeader eyebrow="How We Work With Government" title="Engage Us Through the Vehicle That Fits" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contractMechanisms.map((m, i) => (
              <StaggerItem key={m.title}>
                <div className="glass card-hover h-full rounded-2xl p-7">
                  <span className="font-display text-3xs uppercase tracking-[0.2em] text-ink-muted">Mechanism / 0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-ink-secondary">{m.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative py-20">
        <div className="container-edge">
          <SectionHeader eyebrow="Sectors Served" title="Where Our Work Shows Up" />
          <Stagger className="mt-12 flex flex-wrap justify-center gap-3" step={0.04}>
            {sectors.map((s) => (
              <StaggerItem key={s}>
                <span className="pill text-[1rem]"><Check className="h-4 w-4 text-cyan" />{s}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        title="Need Our Capabilities Statement?"
        sub="We can deliver a formal capabilities statement, NAICS-aligned bid response, or teaming package on request."
        ctaLabel="Request Capabilities Statement"
        ctaHref="/contact"
        footnote=""
      />
    </>
  );
}
