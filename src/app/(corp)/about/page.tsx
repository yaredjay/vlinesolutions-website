import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "V-Line Solutions LLC is a woman-owned Silicon Valley technology firm. We build and deploy national digital infrastructure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | V-Line Solutions",
    description:
      "A Silicon Valley firm built for public service.",
    url: "https://vlinesolutions.com/about",
  },
};

const principles = [
  {
    n: "01",
    title: "Operate at mission speed",
    body: "Public outcomes shouldn't wait for vendor cadence. We move on the agency's clock and show working software at every stage.",
  },
  {
    n: "02",
    title: "Engineer for accountability",
    body: "Every system we ship is observable, governed, and ready for audit on day one.",
  },
  {
    n: "03",
    title: "Modernize in steps",
    body: "Legacy replaced behind open interfaces, one service at a time, so nothing stops while everything improves.",
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
        description="V-Line Solutions builds, secures and operates digital public infrastructure for ministries, national authorities and public agencies. Built to be run by the institution long after handover."
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
                One team designs the system, builds it, secures the cloud it runs on and
                completes the technology transfer. What remains is infrastructure the
                institution owns and the public trusts.
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
                className="liquid rounded-3xl p-8"
                data-liquid
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


      <CTA
        eyebrow="Engage"
        title="Let's get to work."
        body="Tell us about the program, the agency, or the operation. We'll respond fast, and direct."
        primary={{ label: "Contact V-Line Solutions", href: "/contact" }}
      />
    </>
  );
}
