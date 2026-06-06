"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/data/industries";

const industryOptions = [...industries.map((i) => i.name), "Other"];
const budgetOptions = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

export function QuoteForm({
  full = false,
  source,
  submitLabel,
}: {
  full?: boolean;
  source: string;
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company_url) { setSent(true); return; } // honeypot
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
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
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-money/15 text-money">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Request received.</h3>
        <p className="mx-auto mt-3 max-w-md text-body text-ink-secondary">
          Our team will review and respond — average response time is about 4 hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-7 md:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        {full && <Field name="name" label="Name" required wrapHalf />}
        <Field name="email" label="Email" type="email" required wrapHalf />
        <Field name="phone" label="Phone" type="tel" required wrapHalf />
        {full && <Field name="business" label="Business Name" wrapHalf />}
        <Select name="industry" label="Industry" options={industryOptions} required wrapHalf />
        {full && <Select name="budget" label="Budget range" options={budgetOptions} wrapHalf />}
        <Field name="automate" label={full ? "What's eating your time?" : "What do you want automated?"} textarea required />
        {full && <Field name="tools" label="What tools do you use?" textarea />}
        {full && <Field name="success" label="What would success look like?" textarea />}
        <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>
      <button type="submit" disabled={busy} className="btn btn-primary btn-block mt-6 disabled:opacity-70">
        {busy ? "Sending…" : submitLabel ?? "Get Custom Quote"} <ArrowRight className="h-5 w-5" />
      </button>
      <p className="mt-3 text-center text-body-sm text-ink-muted">Average response time: 4 hours during business hours.</p>
    </form>
  );
}

function Field({
  name, label, type = "text", required, textarea, wrapHalf,
}: {
  name: string; label: string; type?: string; required?: boolean; textarea?: boolean; wrapHalf?: boolean;
}) {
  return (
    <label className={`block ${wrapHalf ? "" : "sm:col-span-2"}`}>
      <span className="mb-1.5 block text-body-sm font-medium text-ink-secondary">
        {label} {required && <span className="text-cyan">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className="qf-input resize-none" />
      ) : (
        <input name={name} type={type} required={required} className="qf-input" />
      )}
      <style jsx>{`
        .qf-input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.7rem 0.9rem;
          font-size: 1rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s;
        }
        .qf-input:focus { border-color: rgba(0, 212, 255, 0.5); }
      `}</style>
    </label>
  );
}

function Select({
  name, label, options, required, wrapHalf,
}: {
  name: string; label: string; options: string[]; required?: boolean; wrapHalf?: boolean;
}) {
  return (
    <label className={`block ${wrapHalf ? "" : "sm:col-span-2"}`}>
      <span className="mb-1.5 block text-body-sm font-medium text-ink-secondary">
        {label} {required && <span className="text-cyan">*</span>}
      </span>
      <select name={name} required={required} defaultValue="" className="qf-select">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <style jsx>{`
        .qf-select {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid var(--border);
          background: rgba(10, 10, 12, 0.6);
          padding: 0.7rem 0.9rem;
          font-size: 1rem;
          color: var(--text);
          outline: none;
        }
        .qf-select:focus { border-color: rgba(0, 212, 255, 0.5); }
      `}</style>
    </label>
  );
}
