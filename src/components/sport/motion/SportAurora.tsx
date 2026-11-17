"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const AuroraScene = dynamic(() => import("./AuroraScene"), { ssr: false, loading: () => null });

/**
 * Mounts the WebGL aurora behind a section once the page is idle, keeps it
 * rendering only while the section is on screen, and feeds it the section's
 * scroll travel (0 at the top of the page → 1 when the section has left).
 * Falls back to nothing (the CSS blobs beneath stay) when WebGL is unavailable
 * or the visitor prefers reduced motion.
 */
export function SportAurora({
  sectionRef,
  onReady,
  className,
}: {
  sectionRef: React.RefObject<HTMLElement>;
  onReady?: (ok: boolean) => void;
  className?: string;
}) {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(true);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ok = false;
    try {
      const c = document.createElement("canvas");
      ok = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      ok = false;
    }
    if (!ok) return;
    const start = () => {
      setEnabled(true);
      onReady?.(true);
    };
    if ("requestIdleCallback" in window) (window as any).requestIdleCallback(start, { timeout: 900 });
    else setTimeout(start, 250);
  }, [onReady]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !enabled) return;
    const io = new IntersectionObserver((entries) => setActive(entries.some((e) => e.isIntersecting)), { threshold: 0 });
    io.observe(el);
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const travel = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
        scrollRef.current = travel;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled, sectionRef]);

  if (!enabled) return null;
  return (
    <div aria-hidden className={className} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <AuroraScene scrollRef={scrollRef} active={active} />
    </div>
  );
}
