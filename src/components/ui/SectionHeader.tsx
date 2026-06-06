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
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <div className={cn("max-w-[760px]", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5 }}
          className="pill mb-5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_var(--cyan)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-balance text-[1.75rem] font-bold leading-[1.1] sm:text-4xl md:text-[2.5rem]"
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
            "mt-4 text-[1.0625rem] leading-relaxed text-ink-secondary sm:text-body",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
