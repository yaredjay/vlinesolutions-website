import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { GovernmentClients } from "@/components/sections/GovernmentClients";
import { CTA } from "@/components/sections/CTA";
import { sectors, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Government Contracts",
  description:
    "V-Line Solutions builds, secures and operates primary digital infrastructure for ministries, national authorities and public agencies. Credentials, agencies served and sectors.",
  alternates: { canonical: "/government" },
  openGraph: {
    title: "Government Contracts | V-Line Solutions",
    description:
      "Woman-owned small business serving federal, state and local agencies.",
    url: "https://vlinesolutions.com/government",
  },
};

const credentials = [
  { label: "Entity", value: site.legalName, sub: "California" },
  { label: "Ownership", value: "Woman-owned small business", sub: "California small business" },
];

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Contracts"
        title={
          <>
            <span className="gradient-text">Built for the institutions</span>{" "}
            <span className="text-fg-secondary">that</span>{" "}
            <span className="text-fg-primary">anchor nations.</span>
          </>
        }
        description="Ministries, national authorities and public agencies engage V-Line Solutions to build, secure and operate their primary digital infrastructure."
      />

      {/* Credentials */}
      <section className="relative py-10">
        <div className="container-edge">
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {credentials.map((c) => (
              <StaggerItem
                key={c.label}
                className="liquid rounded-2xl p-6"
                data-liquid
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(var(--accent-glow),0.5) 0%, transparent 70%)",
                  }}
                />
                <div className="relative h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <p className="mt-5 text-3xs uppercase tracking-[0.2em] text-fg-muted">{c.label}</p>
                <p className="mt-1 font-display text-xl font-medium tracking-tight">{c.value}</p>
                <p className="mt-1 text-xs text-fg-muted">{c.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <GovernmentClients />

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
        title="Have a modernization program in motion?"
        body="Tell us the system, the institution and the timeline. We come back with an architecture and a delivery plan."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "What we build", href: "/technology" }}
      />
    </>
  );
}
