"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarCheck, MessageSquare, Bot, Zap, Mic } from "lucide-react";

/* Light hero backdrop — concentric blue rings + soft orbs + floating
   gradient icon tiles (Connectly / Bethouse inspiration). */

const tiles = [
  { Icon: Phone, x: "6%", y: "20%", d: 0 },
  { Icon: CalendarCheck, x: "88%", y: "16%", d: 0.4 },
  { Icon: MessageSquare, x: "10%", y: "64%", d: 0.8 },
  { Icon: Bot, x: "86%", y: "62%", d: 1.2 },
  { Icon: Zap, x: "22%", y: "86%", d: 0.6 },
  { Icon: Mic, x: "76%", y: "88%", d: 1.0 },
];

export function HeroBackdrop() {
  const reduced = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* soft top glow */}
      <div
        className="absolute inset-x-0 top-0 h-[70%]"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(10,102,255,0.12) 0%, transparent 65%)" }}
      />
      {/* concentric rings, bottom-center */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2">
        {[260, 460, 680, 920].map((s, i) => (
          <div
            key={s}
            className="absolute rounded-full border"
            style={{
              width: s, height: s, left: -s / 2, top: -s / 2,
              borderColor: `rgba(10,102,255,${0.12 - i * 0.022})`,
              background: i === 0 ? "radial-gradient(circle, rgba(10,102,255,0.10), transparent 70%)" : "transparent",
            }}
          />
        ))}
      </div>

      {/* floating icon tiles (desktop) */}
      <div className="hidden md:block">
        {tiles.map(({ Icon, x, y, d }, i) => (
          <motion.div
            key={i}
            className="absolute grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_16px_40px_-12px_rgba(10,102,255,0.5)]"
            style={{ left: x, top: y, background: "linear-gradient(150deg, #0a66ff, #4f6bff)" }}
            initial={reduced ? false : { y: 0 }}
            animate={reduced ? undefined : { y: [0, -16, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: d }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
