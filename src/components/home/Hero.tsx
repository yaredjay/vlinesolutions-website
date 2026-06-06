"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { HeroScene } from "@/components/three/HeroScene";
import { openChat, scrollToId } from "@/lib/chat";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[140px] pb-20 md:pt-[168px]">
      <div className="absolute inset-0 grid-bg opacity-50 radial-fade" aria-hidden />
      <HeroScene />

      <div className="container-edge relative">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1000px] text-balance text-center text-[2.25rem] font-bold leading-[1.05] sm:text-5xl md:text-[4rem]"
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
      </div>
    </section>
  );
}
