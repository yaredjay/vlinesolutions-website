import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "V-Line Solutions LLC is a woman-owned technology and workforce firm headquartered in Campbell, California. We build the systems public programs run on and place the people who keep them running.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — V-Line Solutions",
    description:
      "A Silicon Valley firm built for public service.",
    url: "https://vlinesolutions.com/about",
  },
};

const principles = [
  {
    n: "01",
    title: "Operate at mission speed",
    body: "Public outcomes shouldn't wait for vendor cadence. We move on the agency's clock and show working software every week.",
  },
  {
    n: "02",
    title: "Engineer for accountability",
    body: "Every system we ship is observable, governed, and ready for audit on day one.",
  },
  {
    n: "03",
    title: "Field reliable people",
    body: "Placement is a craft. Every assignment has a named lead, a replacement bench and reporting the agency can use.",
  },
  {
    n: "04",
    title: "Hand it over complete",
    body: "Code, data, documentation and trained people. The institution owns what we build, and can run it without us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            <span className="gradient-text">From Silicon Valley,</span>{" "}
            <span className="text-fg-secondary">for</span>{" "}
            <span className="text-fg-primary">public service.</span>
          </>
        }
        description="V-Line Solutions builds the systems public programs run on and places the people who keep them running — for agencies across the United States and the development programs modernizing government around the world. The rigor of a federal integrator, the speed of a Silicon Valley firm."
      />

      {/* Mission */}
      <section className="relative py-20">
        <div className="container-edge">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-4">
              <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
            </Reveal>
            <Reveal as="div" delay={0.05} className="md:col-span-8">
              <p className="text-balance font-display text-2xl font-medium leading-snug tracking-tight md:text-[2rem]">
                {site.bio}
              </p>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-fg-secondary">
                Public programs deserve one partner who can design the system, secure the
                cloud it runs on, and place the people who keep it running — without
                handoffs, without finger-pointing, and without inflated timelines.
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
                <h3 className="relative font-display text-2xl font-medium tracking-tight md:text-3xl">
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
              <h3 className="relative font-display text-2xl font-medium tracking-tight">Leadership</h3>
              <div className="relative mt-6 space-y-5">
                <div className="flex items-center gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-border-subtle bg-bg-elevated/70 font-mono text-sm tracking-[0.12em] text-fg-primary">
                    BG
                  </span>
                  <div>
                    <p className="font-display text-2xl font-medium tracking-tight">{site.ceo}</p>
                    <p className="text-sm text-fg-secondary">{site.ceoTitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-border-subtle bg-bg-elevated/70 font-mono text-sm tracking-[0.12em] text-fg-primary">
                    YB
                  </span>
                  <div>
                    <p className="font-display text-2xl font-medium tracking-tight">{site.director}</p>
                    <p className="text-sm text-fg-secondary">{site.directorTitle} · Lead Engineer and Systems Architect</p>
                  </div>
                </div>
              </div>
              <p className="relative mt-8 max-w-md text-fg-secondary">
                A woman-owned firm led by its founders: corporate governance, contracts and quality on one side;
                architecture, engineering and delivery on the other. One bar for accountability across every engagement.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="relative overflow-hidden rounded-3xl glass p-10">
              <div className="absolute inset-0 grid-bg-sm opacity-30" />
              <h3 className="relative font-display text-2xl font-medium tracking-tight">Headquarters</h3>
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
