"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SportLink } from "@/components/sport/SportBase";
import { Whistle } from "@/components/sport/icons";
import { sports } from "@/data/sport";

const ease = [0.22, 1, 0.36, 1] as const;

export function SportHero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white to-sp-mist">
      {/* aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[45%] top-[-140px] h-[640px] w-[760px] rounded-full opacity-90 blur-[60px] animate-sp-drift" style={{ background: "radial-gradient(circle at 40% 40%, rgba(43,92,255,0.55) 0%, rgba(0,194,255,0.35) 35%, rgba(0,194,255,0) 70%)" }} />
        <div className="absolute left-[-220px] top-[420px] h-[620px] w-[720px] rounded-full blur-[70px] animate-sp-drift-reverse" style={{ background: "radial-gradient(circle, rgba(124,77,255,0.42) 0%, rgba(255,61,140,0.22) 45%, rgba(255,61,140,0) 72%)" }} />
        <div className="absolute left-[36%] top-[560px] h-[520px] w-[620px] rounded-full blur-[70px] animate-sp-drift" style={{ background: "radial-gradient(circle, rgba(200,255,26,0.55) 0%, rgba(139,227,59,0.25) 40%, rgba(139,227,59,0) 70%)" }} />
        <div className="absolute right-[-120px] top-[520px] h-[520px] w-[560px] rounded-full blur-[70px]" style={{ background: "radial-gradient(circle, rgba(255,122,69,0.45) 0%, rgba(255,122,69,0) 68%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(900px 600px at 28% 45%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)" }} />
        <div className="absolute inset-0 sp-grid" />
        <svg viewBox="0 0 1440 960" className="absolute inset-0 hidden h-full w-full md:block" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="sp-rib1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="0.22" stopColor="#9FB4DA" /><stop offset="0.48" stopColor="#1E2F5A" /><stop offset="0.7" stopColor="#7C96CC" /><stop offset="1" stopColor="#FFFFFF" /></linearGradient>
            <linearGradient id="sp-rib2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#2B5CFF" /><stop offset="0.5" stopColor="#00C2FF" /><stop offset="1" stopColor="#8BE33B" /></linearGradient>
            <filter id="sp-blur20"><feGaussianBlur stdDeviation="20" /></filter>
          </defs>
          <path d="M-120 720 C 260 540, 520 900, 900 640 S 1400 280, 1560 440" stroke="url(#sp-rib1)" strokeWidth="90" strokeLinecap="round" opacity="0.5" />
          <path d="M-120 720 C 260 540, 520 900, 900 640 S 1400 280, 1560 440" stroke="url(#sp-rib1)" strokeWidth="22" strokeLinecap="round" />
          <path d="M-60 260 C 300 150, 420 480, 780 340 S 1200 70, 1500 170" stroke="url(#sp-rib2)" strokeWidth="150" strokeLinecap="round" opacity="0.28" filter="url(#sp-blur20)" />
        </svg>
      </div>

      <div className="container-edge relative pt-40 md:pt-48">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-6">
          <div className="flex flex-col gap-6 md:col-span-7 md:gap-7">
            <motion.div {...fade(0.05)} className="inline-flex w-max max-w-full items-center gap-2.5 rounded-full border border-white bg-white/80 py-1.5 pl-1.5 pr-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-sp-slate shadow-[0_10px_30px_rgba(30,50,120,0.10)] md:text-[13px]">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-white" style={{ background: "linear-gradient(120deg,#2B5CFF,#00C2FF)" }}>
                <Whistle className="h-3.5 w-3.5" />
              </span>
              <span className="truncate">VLS Sport · Powered by V-Line Solutions</span>
            </motion.div>

            <motion.h1 {...fade(0.15)} className="sp-hero flex flex-col text-[54px] sm:text-[72px] md:text-[88px] lg:text-[112px]">
              <span className="text-sp-ink">Officials</span>
              <span className="sp-outline">for every</span>
              <span className="sp-grad-court">game.</span>
            </motion.h1>

            <motion.p {...fade(0.28)} className="max-w-[560px] text-base leading-relaxed text-[#1F2740] md:text-xl">
              VLS Sport staffs referees, umpires, scorekeepers and game-day crews for county parks and recreation
              departments, municipalities, schools and private leagues. Any sport your league runs, in all 50 states.
            </motion.p>

            <motion.div {...fade(0.4)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <SportLink href="/request" className="sp-btn-primary justify-center text-base">
                Request officials
                <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-sp-volt text-sp-ink">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </SportLink>
              <SportLink href="#become" className="sp-btn-ghost justify-center text-base">
                Become an official
              </SportLink>
            </motion.div>
          </div>

          <div className="relative md:col-span-5">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 30, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="relative mx-auto w-[260px] sm:w-[340px] md:ml-auto md:w-[400px] lg:w-[470px]"
            >
              <div className="animate-sp-float rounded-[36px] p-[3px] shadow-[0_60px_140px_rgba(30,50,120,0.28)]" style={{ background: "linear-gradient(160deg, #FFFFFF 0%, rgba(43,92,255,0.6) 40%, rgba(255,61,140,0.5) 100%)" }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[33px] bg-sp-deep">
                  <Image
                    src="/sport/hero.webp"
                    alt="VLS Sport officials from soccer, baseball, basketball and volleyball with electric-blue light ribbons"
                    fill
                    priority
                    sizes="(min-width: 1024px) 470px, (min-width: 768px) 400px, 340px"
                    className="object-cover object-[50%_30%]"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-[55%]" style={{ background: "linear-gradient(180deg, rgba(10,16,48,0) 0%, rgba(10,16,48,0.72) 100%)" }} />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-[rgba(10,16,48,0.45)] px-4 py-3 text-white backdrop-blur-md md:inset-x-6 md:bottom-6">
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-sp-volt">Game day · Any sport</div>
                    <div className="mt-0.5 text-sm font-semibold md:text-[17px]">Referees · Umpires · Scorekeepers · Crews</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-32 hidden animate-sp-bob rounded-2xl border border-white bg-white/85 px-5 py-4 shadow-[0_24px_60px_rgba(30,50,120,0.14)] backdrop-blur-md sm:block md:-left-28 lg:-left-36">
                <div className="sp-display text-[40px] leading-none"><span className="sp-grad-court">50</span></div>
                <div className="mt-1 text-[13px] text-sp-slate">states served · nationwide crews</div>
              </div>
            </motion.div>

            <div className="mt-6 flex justify-center gap-2 md:justify-end">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/85 py-2 pl-2 pr-4 text-[13px] font-semibold shadow-[0_16px_40px_rgba(30,50,120,0.12)] backdrop-blur-md">
                <span className="grid h-7 w-7 place-items-center rounded-full text-white" style={{ background: "linear-gradient(120deg,#FF6A2C,#7C4DFF)" }}>
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                SAM.gov Registered · Small Business
              </span>
              <span className="inline-flex items-center rounded-full border border-white bg-white/85 px-4 py-2 text-[13px] font-semibold shadow-[0_16px_40px_rgba(30,50,120,0.12)] backdrop-blur-md sm:hidden">
                50 states
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* sports ticker */}
      <div className="relative mt-14 border-t border-sp-ink/[0.06] bg-white/60 backdrop-blur-md md:mt-20">
        <div className="flex overflow-hidden py-3.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((k) => (
              <div key={k} className="flex" aria-hidden={k === 1}>
                {sports.map((s) => (
                  <span key={s} className="sp-cond inline-flex items-center gap-4 whitespace-nowrap px-4 text-[17px] text-sp-ink md:gap-5 md:px-5 md:text-[22px]">
                    {s}
                    <span className="h-2 w-2 rounded-full bg-sp-electric" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
