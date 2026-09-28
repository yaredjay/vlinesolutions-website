"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandSwitcher } from "@/components/sport/BrandSwitcher";
import { SportLink, useSportBase } from "@/components/sport/SportBase";
import { SportWordmark } from "@/components/sport/SportWordmark";
import { sportNav } from "@/data/sport";
import { sportHref } from "@/lib/sport";
import { cn } from "@/lib/cn";

export function SportNav() {
  const { base, corpUrl } = useSportBase();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const corpHome = base ? "/" : corpUrl;

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "pt-2" : "pt-3")}>
      <div className="container-edge">
        {corpHome && (
          <div className="mb-2 flex justify-center">
            <BrandSwitcher active="sport" corpHref={corpHome} sportHref={sportHref(base, "/")} tone="light" />
          </div>
        )}
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 md:px-4",
            scrolled
              ? "border-white bg-white/75 shadow-[0_20px_60px_rgba(30,50,120,0.14)] backdrop-blur-xl"
              : "border-transparent"
          )}
        >
          <SportLink href="/" aria-label="VLS Sport home" className="flex items-center" onClick={() => setOpen(false)}>
            <SportWordmark />
          </SportLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {sportNav.map((item, i) => (
              <SportLink
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-sp-ink",
                  i === 0 ? "bg-sp-ink/[0.06] font-semibold text-sp-ink" : "text-sp-slate"
                )}
              >
                {item.label}
              </SportLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SportLink href="/request" className="sp-btn-primary hidden text-sm md:inline-flex">
              <span aria-hidden className="h-2 w-2 rounded-full bg-sp-volt" />
              Request officials
            </SportLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-sp-ink/10 bg-white text-sp-ink shadow-[0_8px_24px_rgba(30,50,120,0.10)] md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white p-7 pt-28 shadow-[-24px_0_60px_-20px_rgba(30,50,120,0.35)]"
              aria-label="Mobile"
            >
              <ul className="flex flex-col">
                {sportNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.4 }}
                  >
                    <SportLink
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-sp-ink/[0.08] py-5 text-2xl font-medium tracking-tight text-sp-ink"
                    >
                      {item.label}
                    </SportLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <SportLink href="/request" onClick={() => setOpen(false)} className="sp-btn-primary justify-center">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-sp-volt" />
                  Request officials
                </SportLink>
                {corpHome && (
                  <a href={corpHome} className="sp-btn-ghost justify-center">
                    Go to V-Line Solutions
                  </a>
                )}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
