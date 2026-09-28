"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SportLink } from "@/components/sport/SportBase";
import { SwipeHint } from "@/components/sport/SwipeRail";
import { sports } from "@/data/sport";

const stats = [
  { value: "50", grad: "sp-grad-court", label: "States served. Nationwide crews for parks, rec and leagues." },
  { value: "24/7", grad: "sp-grad-aurora", label: "Game-day support line. Backup officials on call." },
  { value: "1", grad: "sp-grad-heat", label: "Request covers the season: assignment, coverage, scores and reporting." },
];

export function SportSports() {
  return (
    <section id="sports" className="relative overflow-hidden py-20 md:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F3F6FF 50%, #FFFFFF 100%)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-60 -top-40 h-[900px] w-[900px] rounded-full opacity-30 blur-[120px] animate-sp-spin"
        style={{ background: "conic-gradient(from 200deg, #2B5CFF, #00C2FF, #C8FF1A, #FF7A45, #FF3D8C, #7C4DFF, #2B5CFF)" }}
      />
      <div className="container-edge relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <Reveal>
            <h2 className="sp-display text-[40px] md:text-[76px] lg:text-[92px]">
              <span className="sp-grad-heat">Any sport</span>
              <br />
              <span className="sp-outline">your league</span>
              <br />
              <span className="sp-outline">runs.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex max-w-[320px] flex-col gap-2.5 md:mb-3">
            <p className="text-[15px] leading-relaxed text-sp-slate md:text-[17px]">
              Youth leagues, adult rec, school districts, tournaments and championships. Officials matched to your sport, level and rulebook.
            </p>
            <SportLink href="/request" className="inline-flex items-center gap-2 text-[15px] font-bold text-sp-electric">
              See the officiating program <ArrowRight className="h-4 w-4" />
            </SportLink>
          </Reveal>
        </div>

        {/* phone: two swipeable rows; desktop: wrapping wall */}
        <div className="sp-rail mt-8 grid grid-flow-col grid-rows-2 gap-2 md:mt-11 md:flex md:flex-wrap md:gap-3">
          {sports.map((s) => (
            <span
              key={s}
              className="sp-cond whitespace-nowrap rounded-xl border border-white bg-white/80 px-3.5 py-2.5 text-[18px] text-sp-ink shadow-[0_8px_20px_rgba(30,50,120,0.08)] backdrop-blur-md md:rounded-2xl md:px-5 md:py-4 md:text-[26px]"
            >
              {s}
            </span>
          ))}
          <span className="sp-cond whitespace-nowrap rounded-xl border-[1.5px] border-dashed border-sp-electric/60 bg-sp-electric/[0.06] px-3.5 py-2.5 text-[18px] text-sp-electric md:rounded-2xl md:px-5 md:py-4 md:text-[26px]">
            + Yours
          </span>
        </div>
        <SwipeHint count={3} accent="linear-gradient(120deg,#FF6A2C,#7C4DFF)" />

        <div className="mt-8 grid grid-cols-3 gap-2 md:mt-11 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08} className="flex flex-col gap-1.5 rounded-2xl border border-white bg-white/85 p-3.5 shadow-[0_20px_60px_rgba(30,50,120,0.10)] backdrop-blur-md md:gap-2 md:rounded-3xl md:p-7">
              <span className="sp-display text-[34px] leading-none md:text-[72px]">
                <span className={s.grad}>{s.value}</span>
              </span>
              <span className="text-[11px] leading-snug text-sp-slate md:text-[15px]">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
