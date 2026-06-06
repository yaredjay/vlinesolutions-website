"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow, title, sub, children, className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-[140px] pb-16 md:pt-[168px] md:pb-20", className)}>
      <div className="absolute inset-0 grid-bg opacity-50 radial-fade" aria-hidden />
      <GradientOrbs className="opacity-50" />
      <div className="container-edge relative text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="pill mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_var(--cyan)]" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-balance text-[2.25rem] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-5xl md:text-[3.5rem]"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed text-ink-secondary sm:text-body"
          >
            {sub}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-8">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
