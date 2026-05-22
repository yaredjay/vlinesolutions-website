"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceCategory } from "@/data/services";
import { cn } from "@/lib/cn";

export function ServiceCategoryGrid({
  categories,
  accentLabel,
}: {
  categories: ServiceCategory[];
  accentLabel: string;
}) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-edge">
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((cat, i) => (
            <ServiceCard key={cat.id} category={cat} index={i} accentLabel={accentLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  category,
  index,
  accentLabel,
}: {
  category: ServiceCategory;
  index: number;
  accentLabel: string;
}) {
  const [open, setOpen] = useState(index < 2);
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.75, delay: (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass glow-ring p-7 md:p-9",
        "transition-all duration-500"
      )}
      data-cursor="hover"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--accent-glow),0.55) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg-sm opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative flex items-start justify-between gap-6">
        <div className="flex items-start gap-5">
          <span className="font-display text-xs uppercase tracking-[0.28em] text-fg-muted">
            {accentLabel} / {category.number}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`svc-${category.id}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border-subtle bg-bg-elevated/70 text-fg-secondary transition-transform duration-300 hover:text-fg-primary"
          aria-label={open ? `Collapse ${category.title}` : `Expand ${category.title}`}
        >
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-500", open && "rotate-180")}
          />
        </button>
      </div>

      <h3 className="relative mt-5 font-display text-2xl font-medium leading-snug tracking-tight md:text-[1.65rem]">
        {category.title}
      </h3>
      <p className="relative mt-3 max-w-md text-sm leading-relaxed text-fg-secondary">
        {category.blurb}
      </p>

      <motion.div
        id={`svc-${category.id}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden"
      >
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-border-subtle pt-6 sm:grid-cols-2">
          {category.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: 0.4, delay: open ? i * 0.025 : 0 }}
              className="flex items-start gap-2.5 text-sm text-fg-secondary"
            >
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  );
}
