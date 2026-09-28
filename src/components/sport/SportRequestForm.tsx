"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "h-12 w-full rounded-xl border border-sp-ink/[0.12] bg-sp-mist px-3.5 text-[15px] text-sp-ink outline-none transition focus:border-sp-electric focus:ring-2 focus:ring-sp-electric/25";

export function SportRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (typeof data.company_url === "string" && data.company_url) {
      setStatus("success");
      return;
    }
    // Matches the corporate contact form: no backend is wired yet, so the request
    // is acknowledged on screen and the direct lines are shown beside the form.
    await new Promise((r) => setTimeout(r, 850));
    setStatus("success");
    form.reset();
  }

  return (
    <div className="rounded-[32px] bg-gradient-to-br from-white via-[rgba(43,92,255,0.5)] to-[rgba(0,194,255,0.6)] p-[2px] shadow-[0_30px_80px_rgba(30,50,120,0.14)]">
      <form onSubmit={onSubmit} className="relative flex h-full flex-col gap-4 rounded-[30px] bg-white p-6 md:p-9" noValidate>
        <div className="flex flex-col gap-2">
          <span className="sp-eyebrow text-sp-electric">Request officials</span>
          <h2 className="sp-display text-[36px] md:text-[48px]">Tell us about your season.</h2>
        </div>

        <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <input type="hidden" name="division" value="vls-sport" />

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
            Name
            <input name="name" type="text" required autoComplete="name" placeholder="Full name" className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
            Organization
            <input name="organization" type="text" autoComplete="organization" placeholder="City, county, league or school" className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
            Email
            <input name="email" type="email" required autoComplete="email" placeholder="you@agency.gov" className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
            Phone
            <input name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
            Sport(s)
            <input name="sports" type="text" placeholder="Basketball, soccer, softball…" className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
            Interest
            <select name="interest" className={field} defaultValue="season">
              <option value="season">Officials for a season</option>
              <option value="event">Tournament or event</option>
              <option value="admin">League administration</option>
              <option value="scores">Scorekeeping and stats</option>
              <option value="official">I want to become an official</option>
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-sp-slate">
          Schedule and details
          <textarea name="message" rows={3} placeholder="Dates, number of games, venues, levels" className="w-full resize-none rounded-xl border border-sp-ink/[0.12] bg-sp-mist px-3.5 py-3 text-[15px] text-sp-ink outline-none transition focus:border-sp-electric focus:ring-2 focus:ring-sp-electric/25" />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={status === "submitting"} className="sp-btn-primary justify-center disabled:opacity-70">
            {status === "submitting" ? "Sending…" : "Send request"}
          </button>
          <span className="text-[13px] text-sp-muted">
            Or email{" "}
            <a href={site.emailHref} className="font-semibold text-sp-ink">
              {site.email}
            </a>
          </span>
        </div>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              role="status"
              className="flex items-center gap-3 rounded-2xl border border-sp-electric/20 bg-sp-electric/[0.06] px-4 py-3 text-sm text-sp-ink"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sp-ink text-sp-volt">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              Request received. We reply within one business day, usually faster on game weeks.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
