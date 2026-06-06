"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false, loading: () => null });

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.innerWidth < 768;
    if (reduced || coarse || small) return;
    const cb = () => setEnabled(true);
    if ("requestIdleCallback" in window) (window as any).requestIdleCallback(cb, { timeout: 1200 });
    else setTimeout(cb, 400);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Static gradient fallback (mobile + reduced motion) */}
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black_55%,transparent_95%)]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, rgba(0,212,255,0.28) 0%, rgba(124,58,237,0.12) 30%, transparent 62%)",
        }}
      />
      {enabled && (
        <div className="absolute inset-0">
          <ParticleField />
        </div>
      )}
    </div>
  );
}
