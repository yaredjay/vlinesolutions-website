"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SportLink } from "@/components/sport/SportBase";
import { site } from "@/data/site";

export function SportBecome() {
  return (
    <section id="become" className="bg-sp-mist py-6 md:py-16">
      <div className="container-edge grid gap-3 md:grid-cols-12 md:gap-6">
        <Reveal
          className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[28px] p-6 text-white shadow-[0_60px_140px_rgba(43,92,255,0.35)] md:col-span-8 md:min-h-[500px] md:rounded-[40px] md:p-14"
          style={{
            background:
              "radial-gradient(700px 500px at 85% 15%, rgba(200,255,26,0.7) 0%, rgba(200,255,26,0) 60%), radial-gradient(600px 500px at 10% 100%, rgba(0,194,255,0.8) 0%, rgba(0,194,255,0) 60%), linear-gradient(120deg, #2B5CFF 0%, #3A2FD8 55%, #7C4DFF 100%)",
          }}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at 50% 50%, #000 20%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 20%, transparent 75%)" }} />
          <div aria-hidden className="sp-display pointer-events-none absolute -right-3 top-5 select-none text-[170px] leading-none text-white/[0.08] md:-right-5 md:top-8 md:text-[300px]">GO</div>
          <div className="relative flex flex-col gap-3 md:gap-4">
            <span className="sp-eyebrow text-sp-volt">Next season starts here</span>
            <h2 className="sp-display text-[38px] text-white md:text-[64px] lg:text-[76px]">
              Ready when
              <br />
              the whistle
              <br />
              blows.
            </h2>
          </div>
          <div className="relative flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
            <SportLink href="/request" className="sp-btn-white justify-center">
              Request officials
            </SportLink>
            <div className="flex flex-col gap-1 text-[15px] font-semibold md:flex-row md:gap-7">
              <a href={site.phoneHref} className="rounded-full border border-white/40 bg-white/15 px-5 py-3 text-center text-white md:border-0 md:bg-transparent md:p-0">
                {site.phone}
              </a>
              <a href={site.emailHref} className="hidden text-white md:block">
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[28px] bg-gradient-to-br from-white via-[rgba(255,106,44,0.6)] to-[rgba(255,61,140,0.6)] p-[2px] shadow-[0_30px_80px_rgba(30,50,120,0.14)] md:col-span-4 md:rounded-[40px]">
          <div className="relative flex h-full min-h-[356px] flex-col justify-between overflow-hidden rounded-[26px] bg-white p-6 md:min-h-[496px] md:rounded-[38px] md:p-9" style={{ backgroundImage: "radial-gradient(360px 260px at 100% 0%, rgba(255,106,44,0.16), transparent 60%)" }}>
            <div aria-hidden className="sp-display pointer-events-none absolute -bottom-6 -right-2 select-none text-[140px] leading-none text-sp-flame/[0.07] md:-bottom-8 md:-right-3 md:text-[200px]">REF</div>
            <div className="relative flex flex-col gap-3">
              <span className="sp-eyebrow text-sp-flame">For officials</span>
              <h2 className="sp-display text-[42px]">
                Become an
                <br />
                official.
              </h2>
              <p className="text-sm leading-relaxed text-sp-slate md:text-[15px]">
                Join the VLS roster. Tell us your sports, certifications and availability and we match you to games near you.
              </p>
            </div>
            <SportLink href="/request#become" className="sp-btn-primary relative w-full justify-center md:w-max">
              Apply to the roster <ArrowRight className="h-4 w-4 text-sp-volt" />
            </SportLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
