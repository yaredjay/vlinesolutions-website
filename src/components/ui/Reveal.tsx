"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = MotionProps & {
  as?: "div" | "section" | "article" | "header" | "h2" | "h3" | "p" | "li" | "ul" | "span";
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({
  as = "div",
  delay = 0,
  y = 28,
  className,
  children,
  ...rest
}: Props) {
  const reduced = useReducedMotion();
  const Component = (motion as any)[as] ?? motion.div;
  return (
    <Component
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function Stagger({
  className,
  children,
  delay = 0,
  step = 0.08,
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
  step?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : step, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
  y = 24,
}: {
  className?: string;
  children: ReactNode;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
