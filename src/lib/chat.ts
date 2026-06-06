"use client";

/* Cross-component event bus for opening the AI chatbot from any CTA. */
export const CHAT_OPEN_EVENT = "vline:open-chat";

export function openChat(prefill?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CHAT_OPEN_EVENT, { detail: { prefill } }));
}

/* Smooth-scroll to an in-page section by id (works with Lenis). */
export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
