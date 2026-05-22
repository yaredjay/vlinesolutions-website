"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.innerWidth < 768;
    if (reduced || coarse || small) return;
    // Defer until idle for smooth first paint
    const cb = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(cb, { timeout: 1200 });
    } else {
      setTimeout(cb, 400);
    }
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Mobile + reduced-motion fallback */}
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black_55%,transparent_95%)]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(var(--accent-glow),0.30) 0%, rgba(var(--accent-glow),0.12) 28%, transparent 60%)",
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
