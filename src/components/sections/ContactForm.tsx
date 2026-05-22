"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      // Honeypot
      if (typeof data.company_url === "string" && data.company_url) {
        setStatus("success");
        return;
      }
      // No backend wired yet — simulate latency and succeed.
      await new Promise((r) => setTimeout(r, 850));
      setStatus("success");
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please email us directly.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-3xl glass p-7 md:p-10"
    >
      <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(var(--accent-glow),0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Organization" name="organization" autoComplete="organization" wrap />
        <Field
          label="Message"
          name="message"
          required
          textarea
          wrap
          placeholder="Tell us about the program, contract, or operation."
        />
        <input
          type="text"
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
      </div>

      <div className="relative mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-fg-muted">
          By submitting, you agree to be contacted by V-Line Solutions about your inquiry.
        </p>
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-80"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.span
                key="ok"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="inline-flex items-center gap-2"
              >
                Message received <Check className="h-4 w-4" />
              </motion.span>
            ) : status === "submitting" ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2"
              >
                Sending<span className="inline-block w-3 animate-pulse">…</span>
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2"
              >
                Send message <ArrowRight className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {error && (
        <p className="relative mt-3 text-sm text-red-400/90">{error}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  textarea = false,
  wrap = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  textarea?: boolean;
  wrap?: boolean;
}) {
  return (
    <label className={`group relative block ${wrap ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-fg-muted">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl border border-border-subtle bg-bg-elevated/50 px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted/60 outline-none transition-all duration-300 focus:border-accent/60 focus:bg-bg-elevated focus:shadow-[0_0_0_4px_rgba(var(--accent-glow),0.10)]"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="w-full rounded-full border border-border-subtle bg-bg-elevated/50 px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted/60 outline-none transition-all duration-300 focus:border-accent/60 focus:bg-bg-elevated focus:shadow-[0_0_0_4px_rgba(var(--accent-glow),0.10)]"
        />
      )}
    </label>
  );
}
