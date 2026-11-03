import type { Metadata } from "next";
import { Logo } from "@/components/ui/Logo";
import { site, naicsGroups } from "@/data/site";
import { contracts, platformSteps } from "@/data/proof";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "One-page capability statement for V-Line Solutions LLC: core competencies, past performance, differentiators and company data.",
  alternates: { canonical: "/capability-statement" },
};

const competencies = [
  "Systems of record, registries and case/entitlement platforms (web and mobile)",
  "Multi-source data aggregation, normalization, entity resolution and search at national scale",
  "Payments, reconciliation and ledgered audit",
  "AI and automation pipelines with human review and full retention",
  "Cloud deployment, security engineering (NIST 800-53, OWASP ASVS) and compliance reporting",
  "Multi-year program operations: recruitment, credentialing, scheduling, payment, reporting",
];

const differentiators = [
  "Prime-contractor experience with federal (WAWF) and municipal invoicing and reporting",
  "Two platforms built and operated by the firm's own engineers",
  "Senior-led delivery: principals architect and are accountable for every engagement",
  "Amharic-fluent leadership and an international development practice",
];

/**
 * Printable one-page capability statement. Print to PDF from the browser
 * (Cmd/Ctrl+P) or export at build time with Playwright; the page is styled
 * for Letter paper with print media rules in globals.css.
 */
export default function CapabilityStatementPage() {
  return (
    <section className="relative pb-20 pt-32 md:pt-40 print:pt-0">
      <div className="container-edge">
        <article className="capstmt mx-auto max-w-[960px] rounded-3xl border border-border-subtle bg-bg-surface p-8 md:p-12 print:rounded-none print:border-0 print:p-0">
          <header className="flex flex-wrap items-start justify-between gap-6 border-b-2 border-fg-primary pb-6">
            <div>
              <Logo />
              <p className="mt-3 max-w-md text-sm text-fg-secondary">
                Government-grade software platforms and program operations for public-sector agencies and development institutions.
              </p>
            </div>
            <dl className="grid gap-1 text-right font-mono text-[11px] text-fg-secondary">
              <div><dt className="sr-only">UEI</dt><dd>UEI {site.uei}</dd></div>
              <div><dt className="sr-only">Status</dt><dd>Small business · Woman-owned (not SBA WOSB-certified)</dd></div>
              <div><dt className="sr-only">Formed</dt><dd>Formed October 2022 · California LLC</dd></div>
              <div><dt className="sr-only">Address</dt><dd>{site.address.city}, California</dd></div>
            </dl>
          </header>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.25fr_1fr]">
            <div className="space-y-8">
              <Block title="Core competencies">
                <List items={competencies} />
              </Block>
              <Block title="Past performance">
                <ul className="space-y-3 text-sm">
                  {contracts.map((c) => (
                    <li key={c.id} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden />
                      <span>
                        <b className="font-medium text-fg-primary">{c.agency}</b> · {c.unit} · {c.vehicle} · {c.period.replace(" · In performance", "")} · {c.title.toLowerCase()} · {c.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Platforms in production">
                <ul className="space-y-3 text-sm">
                  {platformSteps.map((p) => (
                    <li key={p.id} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden />
                      <span><b className="font-medium text-fg-primary">{p.id === "gobidlink" ? "GoBidLink" : "MyClaimPay"}</b> · {p.body}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <div className="space-y-8">
              <Block title="Differentiators">
                <List items={differentiators} />
              </Block>
              <Block title="NAICS">
                <div className="space-y-2 text-xs text-fg-secondary">
                  {naicsGroups.map((g) => (
                    <p key={g.domain}>
                      <span className="text-fg-primary">{g.domain}:</span> <span className="font-mono">{g.codes.join(" · ")}</span>
                    </p>
                  ))}
                </div>
              </Block>
              <Block title="Company data">
                <p className="text-xs leading-relaxed text-fg-secondary">
                  {site.legalName} · {site.address.city}, California · Government purchase cards accepted · Net-30 · W-9 and certificates of insurance on request
                </p>
              </Block>
              <Block title="Point of contact">
                <p className="text-sm">
                  <b className="font-medium text-fg-primary">Operations</b>
                  <br />
                  <span className="font-mono text-xs text-fg-secondary">{site.phone} · {site.email} · vlinesolutions.com</span>
                </p>
              </Block>
            </div>
          </div>

          <footer className="mt-10 flex justify-between border-t border-border-subtle pt-4 font-mono text-[10px] text-fg-muted">
            <span>{site.legalName} · Capability Statement · November 2026</span>
            <span>vlinesolutions.com</span>
          </footer>
        </article>
        <p className="mt-6 text-center text-xs text-fg-muted print:hidden">
          Print this page to PDF (⌘/Ctrl + P) for a one-page capability statement.
        </p>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-3xs uppercase tracking-[0.22em] text-fg-muted">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
