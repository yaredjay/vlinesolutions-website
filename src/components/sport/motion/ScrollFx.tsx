"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-driven motion primitives for VLS Sport.
 *
 * Every effect here is transform/opacity only, runs on the compositor, and is
 * mobile-first: nothing depends on hover or a fine pointer. Under
 * prefers-reduced-motion every primitive renders its resting state.
 */

export const ease = [0.22, 1, 0.36, 1] as const;

/** 0 → 1 as the element travels from entering at the bottom to leaving at the top. */
export function useTravel(ref: React.RefObject<HTMLElement>): MotionValue<number> {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return scrollYProgress;
}

/* ------------------------------------------------------------------ Parallax */

export function Parallax({
  children,
  speed = 0.2,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  /** Positive moves slower than the page (drifts down), negative moves faster (drifts up). */
  speed?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const t = useTravel(ref);
  const range = 160 * speed;
  const y = useTransform(t, [0, 1], [range, -range]);
  const Comp = as === "span" ? motion.span : motion.div;
  return (
    <Comp ref={ref} className={className} style={{ ...style, y: reduced ? 0 : y }}>
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ Tilt3D */

/**
 * A card that lives in 3D. On every device it tilts and lifts with scroll
 * position; with a fine pointer it also follows the cursor.
 */
export function Tilt3D({
  children,
  className,
  style,
  maxTilt = 10,
  scrollTilt = 7,
  lift = 40,
  float = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number;
  scrollTilt?: number;
  lift?: number;
  float?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const t = useTravel(ref);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.6 });

  const rxScroll = useTransform(t, [0, 0.5, 1], [scrollTilt, 0, -scrollTilt]);
  const ryScroll = useTransform(t, [0, 0.5, 1], [-scrollTilt * 0.6, 0, scrollTilt * 0.6]);
  const y = useTransform(t, [0, 0.5, 1], [lift, 0, -lift]);
  const rotateX = useTransform([rxScroll, sy], ([a, b]) => (a as number) + (b as number) * -maxTilt);
  const rotateY = useTransform([ryScroll, sx], ([a, b]) => (a as number) + (b as number) * maxTilt);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      py.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py, reduced]);

  return (
    // The float keyframes live on the wrapper so they never overwrite the inline 3D transform.
    <div className={cn("[perspective:1400px]", float && "animate-sp-float", className)} style={style}>
      <motion.div
        ref={ref}
        className="[transform-style:preserve-3d] will-change-transform"
        style={reduced ? undefined : { rotateX, rotateY, y }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ DepthReveal */

/**
 * Enters from depth: tilted back, slightly scaled down and below, then settles.
 * Use inside a parent with `.sp-stage` (perspective) for the 3D read.
 */
export function DepthReveal({
  children,
  className,
  delay = 0,
  tilt = 18,
  distance = 48,
  once = true,
  as = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: number;
  distance?: number;
  once?: boolean;
  as?: "div" | "li" | "section" | "article" | "span";
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();
  const Comp = (motion as any)[as] ?? motion.div;
  return (
    <Comp
      className={cn("[transform-style:preserve-3d]", className)}
      style={style}
      initial={{ opacity: 0, y: distance, rotateX: tilt, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once, margin: "-10% 0px -6% 0px" }}
      transition={reduced ? { duration: 0 } : { duration: 0.9, delay, ease }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ FlipIn (staggered children) */

export function FlipGroup({
  children,
  className,
  step = 0.04,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn("sp-stage", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : step, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function FlipItem({
  children,
  className,
  as = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "li";
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();
  const Comp = (motion as any)[as] ?? motion.div;
  return (
    <Comp
      className={cn("[transform-style:preserve-3d] [backface-visibility:hidden]", className)}
      style={style}
      variants={{
        hidden: { opacity: 0, rotateX: -70, y: 18 },
        show: { opacity: 1, rotateX: 0, y: 0, transition: reduced ? { duration: 0 } : { duration: 0.7, ease } },
      }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ ScrollScale */

/** Scales and un-tilts as it enters: for big media and feature cards. */
export function ScrollScale({
  children,
  className,
  from = 0.92,
  tilt = 8,
  style,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  tilt?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const t = useTravel(ref);
  const scale = useTransform(t, [0, 0.35, 1], [from, 1, 1]);
  const rotateX = useTransform(t, [0, 0.35, 1], [tilt, 0, 0]);
  const opacity = useTransform(t, [0, 0.2], [0.4, 1]);
  return (
    <div className="[perspective:1200px]">
      <motion.div
        ref={ref}
        className={cn("will-change-transform", className)}
        style={reduced ? style : { ...style, scale, rotateX, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ Rail focus (phone swipe rails) */

/**
 * Cover-flow for the phone swipe rails: the card nearest the viewport center
 * stands up straight at full size, neighbours lean away. Desktop (md+) is untouched.
 */
export function useRailFocus(enabled = true) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rail = ref.current;
    if (!rail || !enabled) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const items = () => Array.from(rail.children) as HTMLElement[];
    const reset = () => items().forEach((el) => (el.style.transform = ""));
    const paint = () => {
      raf = 0;
      if (mq.matches) return reset();
      const r = rail.getBoundingClientRect();
      const center = r.left + r.width / 2;
      for (const el of items()) {
        const b = el.getBoundingClientRect();
        const d = (b.left + b.width / 2 - center) / r.width; // -1 … 1
        const c = Math.max(-1, Math.min(1, d));
        const scale = 1 - Math.abs(c) * 0.08;
        const ry = -c * 10;
        const z = -Math.abs(c) * 40;
        el.style.transform = `perspective(900px) translateZ(${z}px) rotateY(${ry}deg) scale(${scale})`;
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    rail.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mq.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(raf);
      rail.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mq.removeEventListener("change", schedule);
      reset();
    };
  }, [enabled]);
  return ref;
}

/* ------------------------------------------------------------------ Scroll progress */

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left", className)}
      style={{ scaleX, background: "linear-gradient(90deg, #2B5CFF 0%, #00C2FF 45%, #C8FF1A 75%, #FF7A45 100%)" }}
    />
  );
}

/* ------------------------------------------------------------------ Counter */

export function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduced) {
      node.textContent = `${to}${suffix}`;
      return;
    }
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started) return;
        started = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / (duration * 1000));
          const eased = 1 - Math.pow(1 - p, 3);
          node.textContent = `${Math.round(to * eased)}${suffix}`;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [to, suffix, duration, reduced]);
  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}
