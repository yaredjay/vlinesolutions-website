import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business. We'll tell you exactly how AI can help. Call (408) 516-6667, email info@vlinesolutions.com — Campbell, California.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({ searchParams }: { searchParams: { plan?: string } }) {
  const plan = searchParams?.plan;
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let&apos;s <span className="text-gradient">Talk</span></>}
        sub="Tell us about your business. We'll tell you exactly how AI can help."
      />
      <section className="relative pb-24">
        <div className="container-edge grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm plan={plan} />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-8">
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-60 w-60 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, rgba(10,102,255,0.4), transparent 70%)" }} />
              <p className="text-3xs font-semibold uppercase tracking-[0.2em] text-ink-muted">Direct lines</p>
              <ul className="mt-7 space-y-6">
                <Item icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
                <Item icon={Mail} label="Email" value={site.email} href={site.emailHref} />
                <Item icon={MapPin} label="Office" value={site.location} />
              </ul>
              <div className="mt-9 rounded-2xl border border-money/25 bg-money/[0.06] p-5">
                <p className="text-[1.0625rem] font-semibold text-ink">No payment until you approve setup.</p>
                <p className="mt-1.5 text-body-sm text-ink-secondary">We respond within a few hours during business hours. Every engagement is backed by our 30-day money-back guarantee.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Item({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-cyan"><Icon className="h-5 w-5" /></span>
      <div>
        <p className="text-3xs uppercase tracking-[0.2em] text-ink-muted">{label}</p>
        <p className="mt-1 text-[1.0625rem] text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? <li><a href={href} className="block transition-opacity hover:opacity-80">{inner}</a></li> : <li>{inner}</li>;
}
