"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <div
      className={cn(
        "max-w-[820px]",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fg-secondary backdrop-blur-md"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-5 font-display text-balance text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl lg:text-[3.6rem]",
          "gradient-text"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed text-fg-secondary md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
