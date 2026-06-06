"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/data/industries";

const businessTypes = [...industries.map((i) => i.name), "Other"];
const sources = ["Google", "Facebook", "Instagram", "Referral", "Other"];

export function ContactForm({ plan }: { plan?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company_url) { setSent(true); return; }
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, plan: plan ?? data.plan ?? "", source: "contact" }),
      }).catch(() => {});
      form.reset();
      setSent(true);
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="glass rounded-3xl p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-money/15 text-money"><Check className="h-7 w-7" /></span>
        <h3 className="mt-5 text-2xl font-bold">Message sent.</h3>
        <p className="mx-auto mt-3 max-w-md text-body text-ink-secondary">Our team will reach out shortly — usually within a few hours during business hours. No payment until you approve setup.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-7 md:p-9">
      {plan && (
        <p className="mb-5 rounded-xl border border-cyan/30 bg-cyan/[0.07] px-4 py-3 text-body-sm text-cyan">
          You&apos;re interested in the <span className="font-bold capitalize">{plan}</span> plan. Tell us a bit about your business.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <F name="name" label="Name" required half />
        <F name="email" label="Email" type="email" required half />
        <F name="phone" label="Phone" type="tel" required half />
        <F name="business" label="Business Name" half />
        <S name="businessType" label="Business Type" options={businessTypes} half />
        <S name="source" label="How did you find us?" options={sources} half />
        <F name="message" label="How can we help?" textarea required />
        <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>
      <button type="submit" disabled={busy} className="btn btn-primary btn-block mt-6 disabled:opacity-70">
        {busy ? "Sending…" : "Send Message"} <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
}

function F({ name, label, type = "text", required, textarea, half }: { name: string; label: string; type?: string; required?: boolean; textarea?: boolean; half?: boolean }) {
  return (
    <label className={`block ${half ? "" : "sm:col-span-2"}`}>
      <span className="mb-1.5 block text-body-sm font-medium text-ink-secondary">{label} {required && <span className="text-cyan">*</span>}</span>
      {textarea ? <textarea name={name} required={required} rows={4} className="cf-input resize-none" /> : <input name={name} type={type} required={required} className="cf-input" />}
      <style jsx>{`
        .cf-input { width:100%; border-radius:0.85rem; border:1px solid var(--border); background:#f7f9fc; padding:0.7rem 0.9rem; font-size:1rem; color:var(--text); outline:none; transition:border-color .2s; }
        .cf-input:focus { border-color: rgba(10,102,255,0.5); }
      `}</style>
    </label>
  );
}

function S({ name, label, options, half }: { name: string; label: string; options: string[]; half?: boolean }) {
  return (
    <label className={`block ${half ? "" : "sm:col-span-2"}`}>
      <span className="mb-1.5 block text-body-sm font-medium text-ink-secondary">{label}</span>
      <select name={name} defaultValue="" className="cf-select">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <style jsx>{`
        .cf-select { width:100%; border-radius:0.85rem; border:1px solid var(--border); background:#ffffff; padding:0.7rem 0.9rem; font-size:1rem; color:var(--text); outline:none; }
        .cf-select:focus { border-color: rgba(10,102,255,0.5); }
      `}</style>
    </label>
  );
}
