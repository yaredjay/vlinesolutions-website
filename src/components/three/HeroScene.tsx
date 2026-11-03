"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => null,
});

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    // Defer until idle for smooth first paint
    const cb = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(cb, { timeout: 1200 });
    } else {
      setTimeout(cb, 400);
    }
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Reduced-motion fallback and first-paint glow under the globe */}
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
          <Globe heroSelector=".hero-root" />
        </div>
      )}
    </div>
  );
}
