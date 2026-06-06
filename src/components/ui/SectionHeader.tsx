"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const onDark = tone === "dark";
  return (
    <div className={cn("max-w-[760px]", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.9375rem] font-medium",
            onDark
              ? "border border-white/25 bg-white/10 text-white backdrop-blur"
              : "pill"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", onDark ? "bg-white" : "bg-cyan shadow-[0_0_10px_var(--cyan)]")} />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "text-balance text-[1.75rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-[2.5rem]",
          onDark && "text-white"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className={cn(
            "mt-4 text-[1.0625rem] leading-relaxed sm:text-body",
            onDark ? "text-white/85" : "text-ink-secondary",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
