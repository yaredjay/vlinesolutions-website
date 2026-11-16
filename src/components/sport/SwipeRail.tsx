"use client";

import { Children } from "react";
import { ArrowRight } from "lucide-react";
import { useRailFocus } from "@/components/sport/motion/ScrollFx";
import { cn } from "@/lib/cn";

/**
 * Below the md breakpoint the children sit on a horizontal, snap-scrolling rail
 * with a cover-flow focus: the centred card stands straight, neighbours lean away.
 * From md up the caller decides the layout with utilities (md:grid, md:grid-cols-3 ...).
 */
export function SwipeRail({
  className,
  children,
  label,
  focus = true,
}: {
  className?: string;
  children: React.ReactNode;
  label: string;
  focus?: boolean;
}) {
  const ref = useRailFocus(focus);
  // Each child gets a plain wrapper so the focus transform never fights a
  // child's own entrance animation.
  return (
    <div ref={ref} aria-label={label} className={cn("sp-rail sp-stage", className)}>
      {Children.map(children, (child, i) => (
        <div key={i} className="sp-rail-item min-w-0 will-change-transform">
          {child}
        </div>
      ))}
    </div>
  );
}

/** Pager dots plus an animated "Swipe" cue. Shown on phones only. */
export function SwipeHint({
  count,
  accent = "linear-gradient(120deg,#2B5CFF,#00C2FF)",
  className,
}: {
  count: number;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("mt-1 flex items-center justify-between md:hidden", className)} aria-hidden>
      <div className="flex gap-1.5">
        {Array.from({ length: Math.min(count, 8) }).map((_, i) => (
          <span
            key={i}
            className={cn("h-1.5 rounded-full", i === 0 ? "w-[22px]" : "w-1.5 bg-sp-ink/15")}
            style={i === 0 ? { background: accent } : undefined}
          />
        ))}
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-sp-ink/10 bg-white/90 py-1.5 pl-3 pr-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-sp-slate shadow-[0_6px_16px_rgba(30,50,120,0.08)]">
        Swipe
        <ArrowRight className="h-3.5 w-3.5 animate-sp-nudge text-sp-electric" />
      </span>
    </div>
  );
}
