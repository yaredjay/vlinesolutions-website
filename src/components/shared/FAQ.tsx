"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs as defaultFaqs } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function FAQ({ items = defaultFaqs, title = "Everything You Need To Know" }: { items?: { q: string; a: string }[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="FAQ" title={title} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={cn("glass overflow-hidden rounded-2xl transition-colors", isOpen && "border-cyan/30")}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-[1.0625rem] font-semibold text-ink">{f.q}</span>
                  <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink-secondary transition-transform duration-300", isOpen && "rotate-45 text-cyan")}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-body-sm leading-relaxed text-ink-secondary">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
