import Link from "next/link";
import Image from "next/image";
import { FileX } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { builtOn } from "@/data/partners";
import { resolveLogo, resolveAsset } from "@/lib/asset";

const badgeDefs = [
  { slug: "soc2", label: "SOC 2 Aligned" },
  { slug: "encryption", label: "256-bit Encryption" },
  { slug: "hipaa", label: "HIPAA Ready" },
  { slug: "uptime", label: "99.9% Uptime" },
  { slug: "money-back", label: "30-Day Money Back" },
];

export function Footer() {
  const badges = badgeDefs.map((b) => ({
    ...b,
    img: resolveAsset(`/logos/badges/${b.slug}.svg`, `/logos/badges/${b.slug}.png`),
  }));
  const partners = builtOn.map((p) => ({ ...p, logo: resolveLogo("partners", p.slug) }));

  return (
    <footer className="relative mt-24 text-white" style={{ backgroundColor: "#0a1124" }}>
      {/* top accent + gentle gradient wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(70% 60% at 50% 0%, rgba(10,102,255,0.16), transparent 60%)" }}
        aria-hidden
      />

      <div className="container-edge relative py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-white/65">
              {site.legalName} · {site.location}. Custom AI that grows your business.
            </p>
          </div>

          <FooterCol title="Solutions" links={[
            { label: "AI Solutions", href: "/solutions" },
            { label: "Pricing", href: "/solutions#pricing" },
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
            <p className="text-3xs font-semibold uppercase tracking-[0.18em] text-white/45">Contact</p>
            <ul className="mt-4 space-y-2.5 text-body-sm text-white/70">
              <li><a className="transition-colors hover:text-white" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="transition-colors hover:text-white" href={site.emailHref}>{site.email}</a></li>
              <li className="text-white/50">{site.location}</li>
            </ul>
          </div>
        </div>

        {/* Powered by */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-center text-3xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Powered by enterprise AI
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {partners.map((p) => (
              <span key={p.slug} className="flex h-11 items-center justify-center rounded-xl bg-white px-4">
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={110} height={28} unoptimized className="h-6 w-auto max-w-[100px] object-contain" />
                ) : (
                  <span className="text-[0.95rem] font-bold tracking-tight text-[#0a1124]">{p.name}</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Trust / compliance badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) =>
            b.img ? (
              <span key={b.slug} className="flex h-11 items-center gap-2 rounded-full bg-white px-4" title={b.label}>
                <Image src={b.img} alt={b.label} width={92} height={24} unoptimized className="h-6 w-auto max-w-[88px] object-contain" />
              </span>
            ) : null
          )}
          <span className="flex h-11 items-center gap-2 rounded-full bg-white px-4 text-[0.8125rem] font-semibold text-[#0a1124]">
            <FileX className="h-3.5 w-3.5 text-cyan" /> No Contracts
          </span>
        </div>

        <p className="mt-10 text-center text-3xs text-white/40">
          © 2026 {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-3xs font-semibold uppercase tracking-[0.18em] text-white/45">{title}</p>
      <ul className="mt-4 space-y-2.5 text-body-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/70 transition-colors hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
