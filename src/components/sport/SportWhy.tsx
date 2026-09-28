"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SwipeHint, SwipeRail } from "@/components/sport/SwipeRail";
import { why } from "@/data/sport";

export function SportWhy() {
  return (
    <section id="why" className="relative overflow-hidden py-20 md:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FF 100%)" }}>
      <div aria-hidden className="pointer-events-none absolute left-[20%] top-[300px] h-[500px] w-[900px] rounded-full blur-[60px] animate-sp-drift-reverse" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,77,255,0.18) 0%, rgba(0,194,255,0.14) 40%, rgba(0,194,255,0) 70%)" }} />
      <div aria-hidden className="sp-display pointer-events-none absolute -right-2 top-6 select-none text-[150px] leading-none tracking-[-0.06em] text-sp-electric/[0.05] md:-right-8 md:top-10 md:text-[360px]">
        VLS
      </div>

      <div className="container-edge relative">
        <div className="relative flex min-h-[190px] items-end md:min-h-[260px]">
          <Reveal className="flex w-[220px] flex-col gap-3 md:w-[820px] md:gap-4">
            <span className="sp-eyebrow text-sp-flame">Why VLS</span>
            <h2 className="sp-display text-[38px] md:text-[60px] lg:text-[68px]">
              <span className="sp-outline">Booked</span> <span className="md:hidden"><br /></span>
              <span className="sp-outline">fast.</span>
              <br />
              <span className="sp-grad-heat">Covered</span> <span className="md:hidden"><br /></span>
              <span className="sp-grad-heat">always.</span>
            </h2>
          </Reveal>
          <div className="pointer-events-none absolute -right-8 -top-8 h-[200px] w-[200px] animate-sp-whistle md:-top-16 md:right-0 md:h-[400px] md:w-[400px]">
            <Image
              src="/sport/whistle.webp"
              alt="Chrome referee whistle on a black lanyard"
              fill
              sizes="(min-width: 768px) 400px, 200px"
              className="object-contain drop-shadow-[0_40px_60px_rgba(30,50,120,0.28)]"
            />
          </div>
        </div>

        <SwipeRail label="Why VLS" className="mt-8 md:mt-10 md:grid md:grid-cols-3 md:gap-5">
          {why.map((w, i) => (
            <Reveal
              key={w.num}
              delay={i * 0.06}
              className="flex h-[160px] w-[240px] flex-col gap-2 rounded-[18px] border border-white bg-white/90 p-4 shadow-[0_12px_30px_rgba(30,50,120,0.10)] backdrop-blur-md md:h-auto md:min-h-[176px] md:w-auto md:gap-3 md:rounded-3xl md:p-7"
            >
              <span className="sp-cond text-[16px] text-sp-electric md:text-[20px]">{w.num}</span>
              <span className="text-[16px] font-bold tracking-tight md:text-[20px]">{w.title}</span>
              <span className="text-[12px] leading-relaxed text-sp-slate md:text-sm">{w.body}</span>
            </Reveal>
          ))}
        </SwipeRail>
        <SwipeHint count={6} accent="linear-gradient(120deg,#FF6A2C,#7C4DFF)" />
      </div>
    </section>
  );
}
