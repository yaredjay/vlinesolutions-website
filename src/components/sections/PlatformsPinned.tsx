"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { getGsap } from "@/lib/gsap";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { platformSteps } from "@/data/proof";
import { cn } from "@/lib/cn";

/**
 * Pinned, scroll-scrubbed product sequence (the Apple / Second Front move):
 * the section pins for ~140vh on desktop and the copy + product frame swap
 * at the midpoint. On phones and under reduced motion it renders as a
 * plain stacked list.
 */
export function PlatformsPinned() {
  const root = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = getGsap();
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top top+=96",
        end: "+=140%",
        pin: true,
        scrub: true,
        onUpdate: (self) => setStep(self.progress > 0.5 ? 1 : 0),
      });
      return () => {
        st.kill();
        setStep(0);
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="relative py-24 md:py-28">
      <div className="container-edge">
        <SectionHeader
          eyebrow="In production"
          title="Platforms that already run."
          description="Built and operated by V-Line's own engineers, the way we engineer for clients."
        />
        <div ref={root} className="mt-14 grid items-center gap-10 lg:min-h-[70vh] lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Copy column */}
          <div className="relative lg:min-h-[300px]">
            {platformSteps.map((p, i) => (
              <div
                key={p.id}
                className={cn(
                  "transition-opacity duration-500 lg:absolute lg:inset-0",
                  i === step ? "lg:opacity-100" : "lg:pointer-events-none lg:opacity-0",
                  "mb-12 lg:mb-0"
                )}
                aria-hidden={i !== step}
              >
                <span className="text-3xs uppercase tracking-[0.22em] text-fg-muted">{p.eyebrow}</span>
                <h3 className="mt-3 font-display text-3xl font-medium leading-[1.05] tracking-tightest md:text-[2.6rem]">
                  <span className="gradient-text">{p.title}</span>
                </h3>
                <p className="mt-5 max-w-md text-fg-secondary">{p.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="rounded-full border border-border-subtle bg-bg-surface/40 px-3 py-1.5 text-xs text-fg-secondary backdrop-blur">
                      {b}
                    </li>
                  ))}
                </ul>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8 inline-flex text-sm" data-cursor="hover">
                  Open {p.id === "gobidlink" ? "GoBidLink" : "MyClaimPay"} <ArrowUpRight className="h-4 w-4" />
                </a>
                {/* Mobile frame sits with its copy */}
                <div className="mt-8 lg:hidden">{i === 0 ? <GoBidFrame /> : <ClaimFrame />}</div>
              </div>
            ))}
          </div>

          {/* Product frame column (desktop) */}
          <div className="relative hidden aspect-[16/11] lg:block">
            <div className={cn("absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]", step === 0 ? "opacity-100" : "-translate-y-6 scale-[.98] opacity-0")}>
              <GoBidFrame />
            </div>
            <div className={cn("absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]", step === 1 ? "opacity-100" : "translate-y-6 scale-[.98] opacity-0")}>
              <ClaimFrame />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl glass-strong glow-ring">
      <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
      <div className="relative flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/30" />
        <span className="ml-3 font-mono text-3xs tracking-wider text-fg-muted">{url}</span>
      </div>
      <div className="relative flex flex-col gap-3 p-5">{children}</div>
    </div>
  );
}

function Row({ tag, title, meta, ok }: { tag: string; title: string; meta: string; ok?: boolean }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-border-subtle bg-bg-elevated/50 px-4 py-3 text-sm">
      <span className={cn("rounded border px-1.5 py-0.5 font-mono text-[10px] tracking-wider", ok ? "border-emerald-500/60 text-emerald-400" : "border-accent/60 text-accent")}>{tag}</span>
      <span className="truncate font-medium">{title}</span>
      <span className="hidden font-mono text-[10px] text-fg-muted md:inline">{meta}</span>
    </div>
  );
}

function GoBidFrame() {
  return (
    <Frame url="gobidlink.com/search">
      <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-bg-elevated/60 px-4 py-3 text-sm">
        <span className="font-mono text-xs text-fg-secondary">Janitorial services in Santa Clara County</span>
        <span className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-bg-base">Search</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {["County", "City", "School district", "Transit", "Housing", "Utility"].map((c) => (
          <span key={c} className="rounded-full border border-border-subtle px-2.5 py-1 text-[11px] text-fg-muted">{c}</span>
        ))}
      </div>
      <Row tag="COUNTY" title="Custodial Services, Multiple Facilities" meta="Due 14 days · Set-aside: SB" />
      <Row tag="CITY" title="Janitorial Services, Community Centers" meta="Due 21 days · Verified link" />
      <Row tag="DISTRICT" title="Custodial Supplies and Services" meta="Due 9 days · Verified link" />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-fg-muted">
        <span>1,412 portals queried</span>
        <span>3 sources · 0 duplicates</span>
      </div>
    </Frame>
  );
}

function ClaimFrame() {
  return (
    <Frame url="myclaimpay.com/ledger">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["2,318", "claims matched"],
          ["99.6%", "ledger reconciled"],
          ["14", "sources"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-xl border border-border-subtle bg-bg-elevated/50 px-4 py-3">
            <p className="font-display text-2xl font-medium tracking-tightest">{v}</p>
            <p className="font-mono text-[10px] text-fg-muted">{l}</p>
          </div>
        ))}
      </div>
      <Row ok tag="SETTLED" title="Claim 10492 · Entitlement verified" meta="TXN 88A1 · audit sealed" />
      <Row tag="PENDING" title="Claim 10493 · Eligibility review" meta="rule R-17 · consent on file" />
      <Row ok tag="SETTLED" title="Claim 10494 · Purchase delivered" meta="TXN 88A3 · audit sealed" />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-fg-muted">
        <span>Immutable ledger</span>
        <span>Encrypted at rest and in transit</span>
      </div>
    </Frame>
  );
}
