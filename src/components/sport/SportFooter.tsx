"use client";

import { SportLink, useSportBase } from "@/components/sport/SportBase";
import { SportWordmark } from "@/components/sport/SportWordmark";
import { sportNav, sportBrand } from "@/data/sport";
import { site } from "@/data/site";

export function SportFooter() {
  const { base, corpUrl } = useSportBase();
  const corpHome = base ? "/" : corpUrl;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sp-ink/[0.06] bg-white pt-14">
      <div className="container-edge">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-5">
            <SportWordmark size="md" />
            <p className="max-w-md text-sm leading-relaxed text-sp-muted">
              Sports officiating and game-day workforce for public agencies, schools and leagues nationwide.{" "}
              {sportBrand.name} is powered by {site.legalName}.
            </p>
            <div className="flex flex-wrap gap-2">
              {["SAM.gov Registered", "Small Business", `DUNS ${site.duns}`].map((t) => (
                <span key={t} className="rounded-lg border border-sp-ink/10 px-2.5 py-1.5 text-xs text-sp-slate">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 text-sm md:col-span-2">
            <span className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-sp-muted">Navigate</span>
            {sportNav.map((item) => (
              <SportLink key={item.href} href={item.href} className="text-sp-ink hover:text-sp-electric">
                {item.label}
              </SportLink>
            ))}
            <SportLink href="/request" className="text-sp-ink hover:text-sp-electric">
              Request officials
            </SportLink>
          </div>

          <div className="flex flex-col gap-2.5 text-sm md:col-span-3">
            <span className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-sp-muted">HQ</span>
            <span className="text-sp-ink">{sportBrand.hq}</span>
            <span className="mt-1.5 text-sp-muted">
              {site.director}, {site.directorTitle}
            </span>
          </div>

          <div className="flex flex-col gap-2.5 text-sm md:col-span-2">
            <span className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-sp-muted">Connect</span>
            <a href={site.phoneHref} className="text-sp-ink hover:text-sp-electric">
              {site.phone}
            </a>
            <a href={site.emailHref} className="text-sp-ink hover:text-sp-electric">
              {site.email}
            </a>
            {corpHome && (
              <a href={corpHome} className="text-sp-ink hover:text-sp-electric">
                V-Line Solutions
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-sp-ink/[0.06] py-6 text-xs text-sp-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span>
            {sportBrand.name} · {sportBrand.poweredBy}
          </span>
        </div>
      </div>
    </footer>
  );
}
