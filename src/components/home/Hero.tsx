"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { HeroBackdrop } from "@/components/home/HeroBackdrop";
import { openChat, scrollToId } from "@/lib/chat";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[140px] pb-20 md:pt-[168px]">
      <div className="absolute inset-0 grid-bg opacity-60 radial-fade" aria-hidden />
      <HeroBackdrop />

      <div className="container-edge relative">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1000px] text-balance text-center text-[2.25rem] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-5xl md:text-[4rem]"
        >
          {site.heroLine1}
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient">{site.heroLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-center text-[1.0625rem] leading-relaxed text-ink-secondary sm:text-body"
        >
          {site.heroSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row"
        >
          <button onClick={() => scrollToId("pain")} className="btn btn-primary w-full sm:w-auto">
            Tell Us What You Need <ArrowRight className="h-5 w-5" />
          </button>
          <button onClick={() => scrollToId("ways")} className="btn btn-ghost w-full sm:w-auto">
            See Our Solutions
          </button>
          <button onClick={() => openChat()} className="inline-flex min-h-[52px] items-center gap-2 px-3 text-[1.0625rem] font-medium text-cyan link-underline">
            <MessageCircle className="h-5 w-5" /> Talk to Our AI Consultant
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-money/25 bg-money/[0.06] px-5 py-4 text-center"
        >
          <ShieldCheck className="hidden h-6 w-6 shrink-0 text-money sm:block" />
          <p className="text-[0.95rem] leading-snug text-ink-secondary sm:text-[1rem]">
            <span className="font-semibold text-ink">100% Risk-Free:</span> Every solution backed by our{" "}
            {site.proof.guaranteeDays}-day money-back guarantee. No contracts. No lock-in. Just results.
          </p>
        </motion.div>

        {/* Spec cards — DBS02-X style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {specs.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-5 py-5">
              <p className="font-display text-[2rem] font-extrabold leading-none tracking-tight text-ink md:text-[2.25rem]">
                {s.value}
              </p>
              <p className="mt-2 text-[0.9375rem] leading-snug text-ink-secondary">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const specs = [
  { value: "48 hrs", label: "Average setup time" },
  { value: "0.4s", label: "AI answer speed" },
  { value: "24/7", label: "Coverage, every day" },
  { value: "30-day", label: "Money-back guarantee" },
];
