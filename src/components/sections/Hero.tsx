"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroScene } from "@/components/three/HeroScene";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 md:pt-48">
      <div className="absolute inset-0 grid-bg opacity-50 radial-fade" aria-hidden />
      <HeroScene />

      <div className="container-edge relative">
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1080px] text-balance text-center font-display font-medium leading-[0.98] tracking-tightest text-[clamp(2.6rem,7.5vw,6.4rem)]"
        >
          <span className="gradient-text">Government-Grade</span>{" "}
          <span className="text-fg-primary/95">Solutions.</span>
          <br />
          <span className="text-fg-secondary">Startup-Speed</span>{" "}
          <span className="gradient-text">Delivery.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-center text-base leading-relaxed text-fg-secondary md:text-lg"
        >
          AI Technology &amp; Workforce Solutions for the public sector and
          enterprise — engineered for compliance, designed for speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/technology" className="btn-primary">
            Explore Technology <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/workforce" className="btn-ghost">
            Explore Workforce <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 flex justify-center md:mt-28"
        >
          <div className="flex flex-col items-center gap-2 text-fg-muted">
            <span className="text-3xs uppercase tracking-[0.22em]">Scroll</span>
            <span className="relative inline-block h-10 w-px overflow-hidden bg-border-subtle">
              <span className="absolute inset-x-0 top-0 h-3 animate-[float_2.4s_ease-in-out_infinite] bg-accent" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
