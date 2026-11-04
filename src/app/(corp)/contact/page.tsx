import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach V-Line Solutions for digital transformation and enterprise systems for government. Email info@vlinesolutions.com or send a message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | V-Line Solutions",
    description:
      "Digital transformation and enterprise systems for government. Let's talk.",
    url: "https://vlinesolutions.com/contact",
  },
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
        description="Procurement, programs, partnerships: send a message and we'll route it directly to operations leadership."
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
              <h3 className="relative font-display text-2xl font-medium tracking-tight">Direct lines</h3>

              <ul className="relative mt-8 space-y-6">
                <ContactItem label="Email" value={site.email} href={site.emailHref} />
              </ul>

            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-start gap-4">
      <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
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
