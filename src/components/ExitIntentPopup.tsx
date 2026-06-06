"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const KEY = "vline-exit-shown";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [jobValue, setJobValue] = useState(500);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1024px)").matches) return; // desktop only
    if (sessionStorage.getItem(KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(KEY, "1");
        document.removeEventListener("mouseout", onLeave);
      }
    };
    const t = setTimeout(() => document.addEventListener("mouseout", onLeave), 4000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  const monthlyLoss = jobValue * 5;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] hidden items-center justify-center p-6 lg:flex"
        >
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-2 relative w-full max-w-lg overflow-hidden rounded-3xl p-8"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)" }} />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-5 top-5 text-ink-muted hover:text-ink">
              <X className="h-5 w-5" />
            </button>

            <h3 className="relative text-2xl font-bold sm:text-3xl">Before You Go — See What You&apos;re Missing</h3>

            <div className="relative mt-7">
              <label className="flex items-center justify-between text-body-sm text-ink-secondary">
                <span>What&apos;s your average job worth?</span>
                <span className="text-lg font-bold text-ink">${jobValue.toLocaleString()}</span>
              </label>
              <input
                type="range" min={100} max={10000} step={100} value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="mt-3 w-full accent-money"
                aria-label="Average job value"
              />
            </div>

            <p className="relative mt-6 text-body text-ink-secondary">
              If you&apos;re missing just 5 calls a month at ${jobValue.toLocaleString()}, that&apos;s{" "}
              <span className="money text-xl">${monthlyLoss.toLocaleString()}</span> walking out the door — every month.
            </p>

            <Link href="/assessment" className="btn btn-primary btn-block mt-7" onClick={() => setOpen(false)}>
              Get Your Free AI Assessment <ArrowRight className="h-5 w-5" />
            </Link>
            <button type="button" onClick={() => setOpen(false)} className="mt-3 w-full text-center text-body-sm text-ink-muted hover:text-ink-secondary">
              I&apos;m not losing any calls
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
