import Link from "next/link";
import { Shield, Lock, HeartPulse, Activity, BadgeCheck, FileX } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";

const partners = ["Anthropic", "OpenAI", "Google Cloud", "AWS", "Twilio", "Stripe"];

const badges = [
  { icon: Shield, label: "SOC 2 Aligned" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: HeartPulse, label: "HIPAA Ready" },
  { icon: Activity, label: "99.9% Uptime" },
  { icon: BadgeCheck, label: "30-Day Money Back" },
  { icon: FileX, label: "No Contracts" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="container-edge py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-ink-secondary">
              {site.legalName} · {site.address.city}, California. Custom AI that grows your business.
            </p>
          </div>

          <FooterCol title="Solutions" links={[
            { label: "AI Solutions", href: "/solutions" },
            { label: "Custom AI", href: "/custom" },
            { label: "Industries", href: "/industries" },
            { label: "Free Assessment", href: "/assessment" },
          ]} />

          <FooterCol title="Company" links={[
            { label: "About", href: "/about" },
            { label: "Government", href: "/government" },
            { label: "Contact", href: "/contact" },
          ]} />

          <div>
            <p className="text-3xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-body-sm text-ink-secondary">
              <li><a className="hover:text-ink" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="hover:text-ink" href={site.emailHref}>{site.email}</a></li>
              <li className="text-ink-muted">{site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}</li>
            </ul>
          </div>
        </div>

        {/* Powered by */}
        <div className="mt-14 border-t border-line pt-8">
          <p className="text-center text-3xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Powered by enterprise AI
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {partners.map((p) => (
              <span key={p} className="text-[0.95rem] font-semibold text-ink-secondary/70">{p}</span>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <span key={b.label} className="pill text-[0.8125rem]">
              <b.icon className="h-3.5 w-3.5 text-cyan" />
              {b.label}
            </span>
          ))}
        </div>

        <p className="mt-10 text-center text-3xs text-ink-muted">
          © 2026 {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-3xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{title}</p>
      <ul className="mt-4 space-y-2.5 text-body-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-secondary transition-colors hover:text-ink">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
