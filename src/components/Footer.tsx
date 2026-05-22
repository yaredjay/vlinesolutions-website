import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border-subtle">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-60" />
      <div className="container-edge py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-fg-primary">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-secondary">
              {site.bio}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-fg-secondary transition-colors hover:text-fg-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
              Office
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic text-fg-secondary">
              <p>{site.legalName}</p>
              <p>{site.address.line1}</p>
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
            </address>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
              Connect
            </p>
            <ul className="mt-5 space-y-3 text-sm text-fg-secondary">
              <li>
                <a className="hover:text-fg-primary" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-fg-primary" href={site.emailHref}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border-subtle pt-6 text-xs text-fg-muted md:flex-row md:items-center">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]" />
            {site.registration} · {site.classification} · DUNS {site.duns}
          </p>
        </div>
      </div>
    </footer>
  );
}
