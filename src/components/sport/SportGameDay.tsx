"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SwipeHint } from "@/components/sport/SwipeRail";
import { Whistle } from "@/components/sport/icons";
import { officiating, steps } from "@/data/sport";

export function SportGameDay() {
  return (
    <section id="program" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-edge grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="flex flex-col gap-5 md:col-span-5 md:gap-7">
          <Reveal className="flex flex-col gap-5 md:gap-7">
            <span className="sp-eyebrow text-sp-electric">Sports &amp; recreation program staffing</span>
            <h2 className="sp-display text-[50px] md:text-[64px] lg:text-[70px]">
              Game day,
              <br />
              <span className="sp-grad-court">handled.</span>
            </h2>
          </Reveal>

          {/* phone photo */}
          <Reveal className="relative aspect-[5/6] overflow-hidden rounded-[22px] bg-sp-deep shadow-[0_30px_70px_rgba(30,50,120,0.3)] md:hidden">
            <Image src="/sport/soccer.webp" alt="Soccer referee showing a yellow card on a county park pitch" fill sizes="100vw" className="object-cover object-top" />
          </Reveal>

          <Reveal delay={0.05} className="hidden text-[17px] leading-relaxed text-sp-slate md:block">
            Officials, operations and program leadership for active communities. One request covers the whole season: assignment, coverage, scorekeeping and reporting.
          </Reveal>

          <div>
            <span className="sp-eyebrow text-sp-muted md:hidden">What one request covers</span>
            <ul className="sp-rail mt-3 grid grid-flow-col grid-rows-2 gap-2 md:mt-0 md:grid-flow-row md:grid-cols-2 md:gap-x-4 md:gap-y-2.5">
              {officiating.map((item) => (
                <li key={item} className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white bg-white/90 px-3 py-2.5 text-[13px] font-semibold shadow-[0_8px_20px_rgba(30,50,120,0.08)] md:whitespace-normal md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-[15px] md:font-normal md:shadow-none">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full md:mt-0.5 md:h-[18px] md:w-[18px] md:self-start" style={{ background: "linear-gradient(120deg,#2B5CFF,#00C2FF)" }}>
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="sp-eyebrow text-sp-muted md:hidden">How it works</span>
            <div className="sp-rail mt-3 md:mt-0 md:grid md:grid-cols-4 md:gap-2.5">
              {steps.map((s) => (
                <div key={s.num} className="flex w-[200px] flex-col gap-1.5 rounded-2xl border border-sp-ink/[0.05] bg-[#F3F6FF] p-3.5 md:w-auto">
                  <span className="sp-cond text-[20px] md:text-[22px]" style={{ color: s.color }}>{s.num}</span>
                  <span className="text-[13px] leading-snug text-sp-slate">{s.text}</span>
                </div>
              ))}
            </div>
            <SwipeHint count={4} />
          </div>
        </div>

        {/* desktop collage */}
        <div className="relative hidden h-[760px] md:col-span-7 md:block">
          <Reveal className="absolute left-10 top-0 h-[470px] w-[380px] overflow-hidden rounded-[28px] bg-sp-deep shadow-[0_40px_100px_rgba(30,50,120,0.3)]">
            <Image src="/sport/basketball.webp" alt="Basketball referee running the baseline with electric-blue light ribbons" fill sizes="380px" className="object-cover object-[50%_22%]" />
          </Reveal>
          <Reveal delay={0.1} className="absolute right-0 top-[90px] h-[300px] w-[300px] overflow-hidden rounded-[28px] bg-sp-deep shadow-[0_40px_100px_rgba(30,50,120,0.3)]">
            <Image src="/sport/umpire.webp" alt="Baseball umpire making an out call at a youth ballpark" fill sizes="300px" className="object-cover object-[50%_30%]" />
          </Reveal>
          <Reveal delay={0.2} className="absolute bottom-0 right-[60px] h-[330px] w-[360px] overflow-hidden rounded-[28px] bg-sp-deep shadow-[0_40px_100px_rgba(30,50,120,0.3)]">
            <Image src="/sport/soccer.webp" alt="Soccer referee showing a yellow card on a county park pitch" fill sizes="360px" className="object-cover object-[50%_12%]" />
          </Reveal>
          <Reveal delay={0.3} className="absolute bottom-20 left-0 flex items-center gap-3 rounded-full border border-white bg-white/90 py-3 pl-3 pr-4 shadow-[0_24px_60px_rgba(30,50,120,0.16)] backdrop-blur-md">
            <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: "linear-gradient(120deg,#2B5CFF,#00C2FF)" }}>
              <Whistle className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold">Nationwide coverage</span>
              <span className="text-xs text-sp-muted">Parks &amp; rec · Municipal · Schools · Private leagues</span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
