"use client";

/* ------------------------------------------------------------------
  HONEST social-proof toasts.
  The doctrine called for fake live "X just signed up 12s ago"
  notifications. Those misrepresent real-time activity and violate
  FTC rules, so this rotates TRUE capability + guarantee facts
  instead. When you have a real live-events feed (e.g. opt-in
  recent signups), swap `messages` for that data source.
  ------------------------------------------------------------------ */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const messages = [
 "Every plan includes a 30-day money-back guarantee",
 "AI answers every call in about 0.4 seconds — 24/7",
 "Missed-call text-back recovers leads automatically",
 "AI books appointments straight to your calendar",
 "Talk to our AI consultant anytime — bottom right",
 "Most businesses go live within 48 hours",
];

const MAX_SHOWN = 4;

export function SocialProofToasts() {
 const [current, setCurrent] = useState<string | null>(null);
 const [shownCount, setShownCount] = useState(0);
 const [dismissed, setDismissed] = useState(false);

 useEffect(() => {
  if (dismissed) return;
  if (typeof window === "undefined") return;
  if (window.matchMedia("(max-width: 1024px)").matches) return; // desktop only

  let index = 0;
  let hideTimer: ReturnType<typeof setTimeout>;
  let cycleTimer: ReturnType<typeof setTimeout>;
  let stopped = false;

  const show = () => {
   if (stopped) return;
   setCurrent(messages[index % messages.length]);
   index += 1;
   setShownCount((c) => c + 1);
   hideTimer = setTimeout(() => setCurrent(null), 4000);
  };

  const loop = (count: number) => {
   if (count >= MAX_SHOWN || stopped) return;
   const delay = 18000 + Math.random() * 7000; // 18–25s
   cycleTimer = setTimeout(() => {
    show();
    loop(count + 1);
   }, delay);
  };

  const startTimer = setTimeout(() => {
   show();
   loop(1);
  }, 9000);

  return () => {
   stopped = true;
   clearTimeout(startTimer);
   clearTimeout(hideTimer);
   clearTimeout(cycleTimer);
  };
 }, [dismissed]);

 if (dismissed || shownCount > MAX_SHOWN) return null;

 return (
  <div className="pointer-events-none fixed bottom-6 left-6 z-40 hidden lg:block">
   <AnimatePresence>
    {current && (
     <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass-2 pointer-events-auto flex max-w-[320px] items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
     >
      <span className="text-[0.9375rem] leading-snug text-ink">{current}</span>
      <button
       type="button"
       onClick={() => setDismissed(true)}
       aria-label="Dismiss"
       className="ml-auto shrink-0 text-ink-muted hover:text-ink"
      >
       <X className="h-4 w-4" />
      </button>
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 );
}
