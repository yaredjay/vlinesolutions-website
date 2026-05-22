import type { Metadata } from "next";
import { MapPin, Phone, Mail, User2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "V-Line Solutions LLC is a California-based technology and workforce services firm built to deliver government-grade quality at startup speed.",
};

const principles = [
  {
    n: "01",
    title: "Operate at mission speed",
    body: "Public sector outcomes shouldn't wait for vendor cadence. We move on the agency's clock.",
  },
  {
    n: "02",
    title: "Engineer for accountability",
    body: "Every system we ship is observable, governed, and ready for audit on day one.",
  },
  {
    n: "03",
    title: "Field reliable people",
    body: "Workforce delivery is a craft. We treat it that way — every shift, every site, every event.",
  },
  {
    n: "04",
    title: "Refuse the vendor cliché",
    body: "No bloated decks. No padded SOWs. We win on delivery, not on procurement theater.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            <span className="gradient-text">A California firm</span>{" "}
            <span className="text-fg-secondary">built for</span>{" "}
            <span className="text-fg-primary">public-sector velocity.</span>
          </>
        }
        description="V-Line Solutions LLC delivers AI systems, intelligent automation, and mission-critical staffing to government agencies and enterprise clients nationwide — with the rigor of a federal integrator and the speed of a modern technology firm."
      />

      {/* Mission */}
      <section className="relative py-20">
        <div className="container-edge">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-4">
              <span className="text-xs uppercase tracking-[0.22em] text-fg-muted">Our mission</span>
              <div className="mt-3 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
            </Reveal>
            <Reveal as="div" delay={0.05} className="md:col-span-8">
              <p className="text-balance font-display text-2xl font-medium leading-snug tracking-tight md:text-[2rem]">
                {site.bio}
              </p>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-fg-secondary">
                We exist because public-sector teams deserve a partner who can architect the AI
                system, secure the cloud, and field the crew that runs the building — without
                handoffs, without finger-pointing, without inflated timelines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-20">
        <div className="container-edge">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem
                key={p.n}
                className="relative overflow-hidden rounded-3xl glass glow-ring p-8"
              >
                <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                <span className="relative font-display text-xs uppercase tracking-[0.28em] text-fg-muted">
                  Principle / {p.n}
                </span>
                <h3 className="relative mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="relative mt-3 max-w-md text-fg-secondary">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Leadership + Office */}
      <section className="relative py-20">
        <div className="container-edge">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="relative overflow-hidden rounded-3xl glass p-10">
              <div className="absolute inset-0 grid-bg-sm opacity-30" />
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--accent-glow),0.55) 0%, transparent 70%)",
                }}
              />
              <span className="relative text-xs uppercase tracking-[0.22em] text-fg-muted">
                Leadership
              </span>
              <div className="relative mt-6 flex items-center gap-5">
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border-subtle bg-bg-elevated/70 text-accent">
                  <User2 className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-2xl font-medium tracking-tight">{site.director}</p>
                  <p className="text-sm text-fg-secondary">{site.directorTitle}</p>
                </div>
              </div>
              <p className="relative mt-8 max-w-md text-fg-secondary">
                Leads operations across both divisions — from public-sector capture to multi-site
                workforce deployment — with a single bar for quality and accountability.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="relative overflow-hidden rounded-3xl glass p-10">
              <div className="absolute inset-0 grid-bg-sm opacity-30" />
              <span className="relative text-xs uppercase tracking-[0.22em] text-fg-muted">
                Headquarters
              </span>
              <ul className="relative mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <div className="text-sm text-fg-secondary">
                    <p className="text-fg-primary">{site.legalName}</p>
                    <p>{site.address.line1}</p>
                    <p>
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-accent" />
                  <a className="text-sm text-fg-secondary hover:text-fg-primary" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-accent" />
                  <a className="text-sm text-fg-secondary hover:text-fg-primary" href={site.emailHref}>
                    {site.email}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Engage"
        title="Let's get to work."
        body="Tell us about the program, the agency, or the operation. We'll respond fast — and direct."
        primary={{ label: "Contact V-Line Solutions", href: "/contact" }}
      />
    </>
  );
}
