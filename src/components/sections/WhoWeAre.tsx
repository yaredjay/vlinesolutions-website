"use client";

import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function WhoWeAre() {
  return (
    <section className="relative py-28">
      <div className="container-edge">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.22em] text-fg-muted">
              Who we are
            </span>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
          </Reveal>
          <Reveal as="div" delay={0.05} className="md:col-span-8">
            <p className="text-balance font-display text-2xl font-medium leading-snug tracking-tight text-fg-primary md:text-[2rem]">
              {site.bio}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[
                { k: "HQ", v: "Campbell, CA" },
                { k: "Founded", v: "California, USA" },
                { k: "Sector", v: "Tech + Workforce" },
                { k: "Status", v: site.classification },
              ].map((f) => (
                <div
                  key={f.k}
                  className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-4 backdrop-blur"
                >
                  <p className="text-3xs uppercase tracking-[0.2em] text-fg-muted">
                    {f.k}
                  </p>
                  <p className="mt-1 text-sm text-fg-primary">{f.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
