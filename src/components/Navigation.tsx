"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { TrustBar } from "@/components/TrustBar";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("transition-colors duration-500", scrolled ? "glass-2 border-b border-line" : "border-b border-transparent")}>
        <div className="container-edge">
          <div className="flex h-[64px] items-center justify-between">
            <Link href="/" aria-label="V-Line Solutions home">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {nav.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                      active ? "text-ink" : "text-ink-secondary hover:text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5">
              <Link href="/solutions#pricing" className="btn btn-primary hidden h-11 px-5 text-[0.95rem] sm:inline-flex">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={cn(
                  "relative z-[60] grid h-11 w-11 place-items-center rounded-full border text-ink transition-colors lg:hidden",
                  open ? "border-line-hover bg-bg-2" : "border-line bg-surface backdrop-blur"
                )}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        <TrustBar />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-bg" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 flex h-full flex-col bg-bg px-6 pt-24"
              aria-label="Mobile"
            >
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 22 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-line py-5 text-2xl font-semibold tracking-tight text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="mt-auto pb-10 pt-8"
              >
                <Link href="/solutions#pricing" className="btn btn-primary btn-block">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
