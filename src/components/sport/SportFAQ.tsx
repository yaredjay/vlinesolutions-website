"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { DepthReveal } from "@/components/sport/motion/ScrollFx";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

/**
 * Accordion FAQ. The questions and answers are rendered in full in the HTML
 * (not only after a click), so search engines and AI crawlers read them, and
 * the matching FAQPage JSON-LD is emitted by SportStructuredData.
 */
export function SportFAQ({
  items,
  eyebrow = "Questions",
  title,
  intro,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
}) {
  const [open, setOpen] = useState<number>(0);
  const reduced = useReducedMotion();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-edge grid gap-8 md:grid-cols-12 md:gap-6">
        <Reveal className="flex flex-col gap-4 md:col-span-5">
          <span className="sp-eyebrow text-sp-electric">{eyebrow}</span>
          <h2 id="faq-title" className="sp-display text-[42px] md:text-[56px] lg:text-[64px]">
            {title}
          </h2>
          {intro && <p className="max-w-[420px] text-[15px] leading-relaxed text-sp-slate md:text-[17px]">{intro}</p>}
        </Reveal>

        <div className="sp-stage flex flex-col gap-2.5 md:col-span-7">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <DepthReveal key={item.q} delay={Math.min(i, 6) * 0.05} tilt={10} distance={24}>
                <div
                  className={cn(
                    "rounded-2xl border bg-white/90 shadow-[0_12px_30px_rgba(30,50,120,0.08)] backdrop-blur-md transition-colors",
                    isOpen ? "border-sp-electric/30" : "border-white"
                  )}
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-bold tracking-tight text-sp-ink md:px-6 md:py-5 md:text-[17px]"
                    >
                      {item.q}
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition-transform duration-300",
                          isOpen && "rotate-45"
                        )}
                        style={{ background: "linear-gradient(120deg,#2B5CFF,#00C2FF)" }}
                        aria-hidden
                      >
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    </button>
                  </h3>
                  {/* The answer is always in the DOM; only its height is animated. */}
                  <AnimatePresence initial={false}>
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={reduced ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14px] leading-relaxed text-sp-slate md:px-6 md:pb-6 md:text-[15px]">{item.a}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </DepthReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
