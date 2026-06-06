"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { painCards } from "@/data/home";
import { cn } from "@/lib/cn";

export function PainGrid() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="pain" className="relative scroll-mt-28 py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Start Here"
          title="What's Holding Your Business Back?"
          description="Pick what hits closest to home. We've solved all of these."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {painCards.map((card, i) => {
            const open = openIdx === i;
            return (
              <StaggerItem key={card.title}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className={cn(
                    "glass card-hover group h-full w-full rounded-3xl p-7 text-left",
                    open && "border-cyan/40"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-cyan">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <span className={cn("grid h-8 w-8 place-items-center rounded-full border border-line text-ink-secondary transition-transform duration-300", open && "rotate-45 text-cyan")}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug">{card.title}</h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-body-sm leading-relaxed text-ink-secondary">{card.expanded}</p>
                        <Link
                          href={card.href}
                          className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-cyan"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {card.cta} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!open && (
                    <p className="mt-4 text-[0.95rem] font-medium text-ink-muted">Tap to see how we fix it →</p>
                  )}
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
