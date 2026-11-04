"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { HeroScene } from "@/components/three/HeroScene";

export function Hero() {
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = title.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const lines = el.querySelectorAll<HTMLElement>("[data-line]");
    const tween = gsap.from(lines, { yPercent: 110, duration: 1.15, ease: "power3.out", stagger: 0.1, delay: 0.12 });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="hero-root relative overflow-hidden pt-40 md:pt-48">
      <div className="absolute inset-0 grid-bg opacity-40 radial-fade" aria-hidden />
      <HeroScene />

      <div className="container-edge relative z-10">
        <h1
          ref={title}
          className="mx-auto max-w-[1080px] text-balance text-center font-display font-medium leading-[1.02] tracking-tightest text-[clamp(2.3rem,6.2vw,5.4rem)]"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-line className="block">
              <span className="text-fg-secondary">Every system</span>{" "}
              <span className="gradient-text">delivered.</span>
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-line className="block">
              <span className="text-fg-secondary">Every platform</span>{" "}
              <span className="gradient-text">modernized.</span>
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-line className="block">
              <span className="text-fg-secondary">Every mission</span>{" "}
              <span className="gradient-text">advanced.</span>
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-center text-base leading-relaxed text-fg-secondary md:text-lg"
        >
          V-Line Solutions builds and deploys national digital infrastructure for the
          programs a country runs on. Built to be owned by the institution that
          runs it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/technology" className="btn-primary">
            Explore Technology
          </Link>
          <Link href="/contact" className="btn-ghost">
            Talk to us
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
