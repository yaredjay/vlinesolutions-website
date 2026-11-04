"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { PointField } from "@/components/ui/PointField";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28", className)}>
      <div className="absolute inset-0 grid-bg opacity-50 radial-fade" aria-hidden />
      <GradientOrbs variant="subtle" />
      <PointField className="opacity-80 [mask-image:radial-gradient(80%_90%_at_60%_40%,black,transparent)]" />
      <div className="container-edge relative">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1100px] text-balance font-display font-medium leading-[0.98] tracking-tightest text-[clamp(2.4rem,6.2vw,5.2rem)]"
        >
          {typeof title === "string" ? <span className="gradient-text">{title}</span> : title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg-secondary md:text-lg"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
