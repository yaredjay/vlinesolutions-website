import type { Metadata } from "next";
import { Building2, ShieldCheck, BadgeCheck, Hash } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { GovernmentClients } from "@/components/sections/GovernmentClients";
import { CTA } from "@/components/sections/CTA";
import { contractMechanisms, naics, naicsLabels, sectors, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Government Contracts",
  description:
    "V-Line Solutions LLC is SAM.gov registered, small business classified, and active across 17 NAICS codes spanning technology, facilities, and professional services. Ready for direct awards, IDIQs, cooperative purchasing, and rapid deployment.",
  alternates: { canonical: "/government" },
  openGraph: {
    title: "Government Contracts — V-Line Solutions",
    description:
      "SAM.gov registered, small business, 17 NAICS codes — purpose-built for public sector procurement.",
    url: "https://vlinesolutions.com/government",
  },
};

const credentials = [
  { icon: Building2, label: "Entity", value: site.legalName, sub: "California" },
  { icon: BadgeCheck, label: "Registration", value: site.registration, sub: "Active" },
  { icon: Hash, label: "DUNS", value: site.duns, sub: "Universal" },
  { icon: ShieldCheck, label: "Classification", value: site.classification, sub: "Federal designation" },
];

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Contracts"
        title={
          <>
            <span className="gradient-text">Purpose-Built</span>{" "}
            <span className="text-fg-secondary">for Public Sector</span>{" "}
            <span className="text-fg-primary">Procurement.</span>
          </>
        }
        description="From SAP awards to multi-year IDIQs, V-Line Solutions is ready to compete, win, and deliver. Below: the credentials, codes, and mechanisms agencies need to engage us today."
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

      {/* NAICS */}
      <section className="relative py-24">
        <div className="container-edge">
          <SectionHeader
            eyebrow="NAICS Codes"
            title="17 codes. Three core domains."
            description="V-Line Solutions is registered across the technology, facilities, professional services, and event operations classifications most often used in government procurement."
          />

          <Reveal className="mt-12 overflow-hidden rounded-3xl glass">
            <div className="grid divide-y divide-border-subtle md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="grid grid-cols-1 divide-y divide-border-subtle">
                {naics.slice(0, Math.ceil(naics.length / 2)).map((code, i) => (
                  <NaicsRow key={code} code={code} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 divide-y divide-border-subtle">
                {naics.slice(Math.ceil(naics.length / 2)).map((code, i) => (
                  <NaicsRow
                    key={code}
                    code={code}
                    index={i + Math.ceil(naics.length / 2)}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-24">
        <div className="container-edge">
          <SectionHeader
            eyebrow="How We Work With Government"
            title="Engage us through the vehicle that fits."
            description="From single awards to long-form task orders, our delivery model meets agencies where they procure."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contractMechanisms.map((m, i) => (
              <StaggerItem
                key={m.title}
                className="relative overflow-hidden rounded-2xl glass glow-ring p-7"
              >
                <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <span className="relative font-display text-xs uppercase tracking-[0.22em] text-fg-muted">
                  Mechanism / 0{i + 1}
                </span>
                <h3 className="relative mt-3 font-display text-lg font-medium tracking-tight md:text-xl">
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
            description="V-Line Solutions delivers across the public mission set — from the agency office to the field operation."
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
        title="Need our capabilities statement?"
        body="We can deliver a formal capabilities statement, NAICS-aligned bid response, or teaming package on request."
        primary={{ label: "Request capabilities statement", href: "/contact" }}
        secondary={{ label: "Technology solutions", href: "/technology" }}
      />
    </>
  );
}

function NaicsRow({ code, index }: { code: string; index: number }) {
  return (
    <div className="group flex items-center justify-between gap-6 p-5 transition-colors hover:bg-bg-elevated/40">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-fg-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className="font-display text-xl font-medium tracking-tight text-fg-primary md:text-2xl">
          {code}
        </span>
      </div>
      <span className="max-w-[60%] truncate text-right text-sm text-fg-secondary">
        {naicsLabels[code]}
      </span>
    </div>
  );
}
