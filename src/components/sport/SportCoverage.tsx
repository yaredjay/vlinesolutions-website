"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Pin } from "@/components/sport/icons";
import { coverageStates, pins } from "@/data/sport";

export function SportCoverage() {
  return (
    <section id="coverage" className="border-t border-sp-ink/[0.06] bg-sp-mist py-6 md:py-24">
      <div className="container-edge">
        <Reveal
          className="relative overflow-hidden rounded-[28px] border border-white bg-white p-5 shadow-[0_40px_100px_rgba(30,50,120,0.14)] md:rounded-[40px] md:p-12"
          style={{
            backgroundImage:
              "radial-gradient(700px 400px at 90% 0%, rgba(0,194,255,0.22) 0%, rgba(0,194,255,0) 60%), radial-gradient(600px 400px at 0% 100%, rgba(124,77,255,0.16) 0%, rgba(124,77,255,0) 60%), radial-gradient(500px 300px at 60% 100%, rgba(200,255,26,0.22) 0%, rgba(200,255,26,0) 60%)",
          }}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 sp-grid opacity-70" />
          <div className="relative grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="flex flex-col gap-4 md:col-span-4">
              <span className="sp-eyebrow text-sp-electric">Coverage</span>
              <h2 className="sp-display text-[40px] md:text-[42px]">
                <span className="text-sp-ink">Nationwide</span>
                <br />
                <span className="sp-grad-court">coverage.</span>
              </h2>
              <p className="text-[13px] leading-relaxed text-sp-slate md:text-[15px]">
                Crews on the ground in nine states today, and a nationwide bench for the next league that calls. Officials available in all 50 states.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coverageStates.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-sp-ink/[0.08] bg-white px-2.5 py-1.5 text-xs font-semibold text-sp-ink shadow-[0_6px_16px_rgba(30,50,120,0.08)]">
                    <span className="h-[7px] w-[7px] rounded-full" style={{ background: "linear-gradient(120deg,#2B5CFF,#00C2FF)" }} />
                    {s}
                  </span>
                ))}
              </div>
              <span className="mt-1 hidden w-max items-center gap-2 rounded-full bg-sp-ink py-2 pl-2 pr-3 text-xs font-semibold text-white md:inline-flex">
                <span className="h-2 w-2 rounded-full bg-sp-volt" />
                Officials available in all 50 states
              </span>
            </div>

            <div className="md:col-span-8">
              <div className="relative mx-auto aspect-[975/610] w-full max-w-[820px]">
                <Image src="/sport/us-map.svg" alt="Map of the United States with VLS Sport coverage pins" fill sizes="(min-width: 768px) 820px, 100vw" className="drop-shadow-[0_20px_40px_rgba(30,50,120,0.12)]" />
                {pins.map((p) => (
                  <div key={p.state} className="absolute h-0 w-0" style={{ left: `${p.x}%`, top: `${p.y}%` }} title={p.state}>
                    {p.hq && (
                      <span aria-hidden className="absolute -left-[14px] -top-[14px] h-7 w-7 rounded-full bg-sp-electric/35 animate-sp-pulse md:-left-[22px] md:-top-[22px] md:h-11 md:w-11" />
                    )}
                    <Pin className="absolute -left-[9px] -top-6 h-6 w-[18px] drop-shadow-[0_6px_10px_rgba(43,92,255,0.45)] md:-left-[15px] md:-top-10 md:h-10 md:w-[30px]" />
                    <span className="sr-only">{p.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-sp-ink py-2 pl-2 pr-3 text-xs font-semibold text-white md:hidden">
            <span className="h-2 w-2 rounded-full bg-sp-volt" />
            Officials available in all 50 states
          </span>
        </Reveal>
      </div>
    </section>
  );
}
