"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  to,
  duration = 1800,
  suffix = "",
  prefix = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
