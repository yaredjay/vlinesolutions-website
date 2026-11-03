"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Lights every [data-liquid] surface as it scrolls into view and unlights it
 * as it leaves, so glass reads as lit by the reader's attention, not static.
 * One controller for the whole site; re-armed on route change.
 */
export function LiquidLights() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { ScrollTrigger } = getGsap();
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-liquid]"));
    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add("is-lit"));
      return;
    }
    const triggers = els.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 82%",
        end: "bottom 12%",
        toggleClass: { targets: el, className: "is-lit" },
        // stagger neighbours so a row lights left to right
        onEnter: () => {
          const d = Number(el.dataset.liquidDelay ?? 0);
          if (d) {
            el.classList.remove("is-lit");
            window.setTimeout(() => el.classList.add("is-lit"), d);
          }
        },
      })
    );
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      window.clearTimeout(t);
      triggers.forEach((tr) => tr.kill());
    };
  }, [pathname]);
  return null;
}
