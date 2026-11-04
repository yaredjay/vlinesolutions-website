"use client";

import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * A textured surface set off to one side of a section: a photographic mesh
 * tinted to the site accent, faded into the background, with a slow band of
 * light flowing across it and a touch of parallax. Decorative only.
 */
export function TextureLight({
  src,
  side = "right",
  className = "",
}: {
  src: string;
  side?: "left" | "right";
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const img = el.querySelector<HTMLElement>("[data-texture]");
    const tween = gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const left = side === "left";
  return (
    <div
      ref={root}
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 w-[52%] max-w-[720px] overflow-hidden md:w-[44%] ${
        left ? "left-0" : "right-0"
      } ${className}`}
      style={{
        maskImage: `radial-gradient(70% 60% at ${left ? "20%" : "80%"} 50%, black 20%, transparent 72%)`,
        WebkitMaskImage: `radial-gradient(70% 60% at ${left ? "20%" : "80%"} 50%, black 20%, transparent 72%)`,
      }}
    >
      {/* the texture, desaturated then tinted to the accent */}
      <div
        data-texture
        className="absolute inset-[-10%] bg-cover bg-center opacity-[0.42] mix-blend-screen"
        style={{
          backgroundImage: `url(${src})`,
          filter: "grayscale(1) contrast(1.15) brightness(0.9)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-color"
        style={{ background: "rgb(var(--accent-glow))" }}
      />
      {/* flowing band of light */}
      <div
        className="texture-flow absolute inset-[-20%]"
        style={{
          background:
            "linear-gradient(115deg, transparent 38%, rgba(var(--accent-glow),0.28) 50%, transparent 62%)",
        }}
      />
      {/* settle into the page background at the inner edge */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${left ? "270deg" : "90deg"}, var(--bg-base) 0%, transparent 55%)`,
        }}
      />
    </div>
  );
}
