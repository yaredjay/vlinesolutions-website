"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-3" : "pt-5"
      )}
    >
      <div className="container-edge">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500",
            scrolled
              ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]"
              : "border border-transparent"
          )}
        >
          <Link
            href="/"
            className="flex items-center text-fg-primary"
            aria-label="V-Line Solutions home"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-fg-primary"
                      : "text-fg-secondary hover:text-fg-primary"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-bg-elevated/80 ring-1 ring-border-subtle"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary hidden text-sm md:inline-flex">
              Contact
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-border-subtle bg-bg-surface/60 backdrop-blur md:hidden"
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
            style={{ top: 0 }}
          >
            <div
              className="absolute inset-0 bg-bg-base/85 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-border-subtle bg-bg-surface/95 p-7 pt-24"
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-border-subtle py-5 text-2xl font-medium tracking-tight text-fg-primary"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Contact us
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
