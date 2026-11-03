"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * A sparse field of drifting points with one faint arc and a travelling
 * pulse — the globe's point cloud, flattened and at rest. Canvas 2D, a few
 * hundred points at most, paused when off-screen. Under reduced motion it
 * renders a single static frame.
 */
export function PointField({
  density = 110,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = prefersReducedMotion();
    const css = getComputedStyle(document.documentElement);
    let accent = css.getPropertyValue("--accent-glow").trim() || "0, 212, 255";
    let fg = css.getPropertyValue("--fg-muted").trim() || "#7a8597";

    const themeObs = new MutationObserver(() => {
      const c = getComputedStyle(document.documentElement);
      accent = c.getPropertyValue("--accent-glow").trim() || accent;
      fg = c.getPropertyValue("--fg-muted").trim() || fg;
    });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let w = 0, h = 0, dpr = 1;
    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; ph: number };
    let pts: P[] = [];

    const seed = () => {
      const n = Math.round(density * Math.min(1.4, Math.max(0.6, (w * h) / (1440 * 700))));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.04,
        a: 0.18 + Math.random() * 0.5,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    // One arc across the field, like a great circle seen edge-on.
    const arc = (t: number) => {
      const x0 = -w * 0.05, x1 = w * 1.05;
      const x = x0 + (x1 - x0) * t;
      const y = h * 0.62 - Math.sin(t * Math.PI) * h * 0.42;
      return { x, y };
    };

    let visible = true;
    let raf = 0;
    let t0 = 0;

    const draw = (now: number) => {
      if (!t0) t0 = now;
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);

      // points
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -4) p.x = w + 4; else if (p.x > w + 4) p.x = -4;
          if (p.y < -4) p.y = h + 4; else if (p.y > h + 4) p.y = -4;
        }
        const tw = reduce ? 1 : 0.75 + 0.25 * Math.sin(t * 0.8 + p.ph);
        ctx.globalAlpha = p.a * tw;
        ctx.fillStyle = fg;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }

      // arc
      ctx.globalAlpha = 1;
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, `rgba(${accent},0)`);
      g.addColorStop(0.5, `rgba(${accent},0.28)`);
      g.addColorStop(1, `rgba(${accent},0)`);
      ctx.strokeStyle = g; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) { const q = arc(i / 120); i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y); }
      ctx.stroke();

      // traveller
      if (!reduce) {
        const k = (t * 0.07) % 1;
        const q = arc(k);
        const glow = ctx.createRadialGradient(q.x, q.y, 0, q.x, q.y, 14);
        glow.addColorStop(0, `rgba(${accent},0.9)`);
        glow.addColorStop(0.3, `rgba(${accent},0.35)`);
        glow.addColorStop(1, `rgba(${accent},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(q.x, q.y, 14, 0, Math.PI * 2); ctx.fill();
      }

      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(
      (es) => {
        visible = es[0].isIntersecting;
        if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect(); themeObs.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
