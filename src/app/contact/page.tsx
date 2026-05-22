import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to V-Line Solutions. Government technology, AI systems, and mission-critical workforce — Campbell, California.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            <span className="gradient-text">Let's talk</span>{" "}
            <span className="text-fg-secondary">about your</span>{" "}
            <span className="text-fg-primary">project.</span>
          </>
        }
        description="Procurement, programs, partnerships — send a message and we'll route it directly to operations leadership."
      />

      <section className="relative pb-32">
        <div className="container-edge grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl glass p-7 md:p-10">
              <div className="absolute inset-0 grid-bg-sm opacity-25" />
              <div
                className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--accent-glow),0.5) 0%, transparent 70%)",
                }}
              />
              <span className="relative text-xs uppercase tracking-[0.22em] text-fg-muted">
                Direct lines
              </span>

              <ul className="relative mt-8 space-y-6">
                <ContactItem icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
                <ContactItem icon={Mail} label="Email" value={site.email} href={site.emailHref} />
                <ContactItem
                  icon={MapPin}
                  label="Office"
                  value={`${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`}
                />
              </ul>

              <div className="relative mt-10 rounded-2xl border border-border-subtle bg-bg-elevated/40 p-5">
                <p className="text-3xs uppercase tracking-[0.2em] text-fg-muted">For procurement</p>
                <p className="mt-2 text-sm text-fg-secondary">
                  Capabilities statements, NAICS-aligned bid packages, and teaming responses
                  available on request. Reference your solicitation number where possible.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border-subtle bg-bg-elevated/70 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-3xs uppercase tracking-[0.2em] text-fg-muted">{label}</p>
        <p className="mt-1 text-sm text-fg-primary">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block transition-opacity hover:opacity-80">
        {Inner}
      </a>
    </li>
  ) : (
    <li>{Inner}</li>
  );
}
