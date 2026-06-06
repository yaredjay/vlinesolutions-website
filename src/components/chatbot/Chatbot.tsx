"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { CHAT_OPEN_EVENT } from "@/lib/chat";
import {
 nodes, objectionNodes, detectObjection,
 type Ctx, type Option, type NodeResult,
} from "./engine";

type Msg = { id: number; role: "bot" | "user"; text: string };

export function Chatbot() {
 const [open, setOpen] = useState(false);
 const [started, setStarted] = useState(false);
 const [msgs, setMsgs] = useState<Msg[]>([]);
 const [typing, setTyping] = useState(false);
 const [options, setOptions] = useState<Option[] | null>(null);
 const [inputCfg, setInputCfg] = useState<NodeResult["input"] | null>(null);
 const [inputVal, setInputVal] = useState("");
 const [leadOpen, setLeadOpen] = useState(false);
 const [leadSent, setLeadSent] = useState(false);
 const [pulse, setPulse] = useState(true);

 const ctx = useRef<Ctx>({});
 const idRef = useRef(0);
 const runToken = useRef(0);
 const scrollRef = useRef<HTMLDivElement>(null);

 const nextId = () => ++idRef.current;
 const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

 const scrollToBottom = useCallback(() => {
  requestAnimationFrame(() => {
   scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  });
 }, []);

 useEffect(() => {
  scrollToBottom();
 }, [msgs, typing, options, inputCfg, leadOpen, scrollToBottom]);

 const revealResult = useCallback(async (res: NodeResult) => {
  const token = ++runToken.current;
  setOptions(null);
  setInputCfg(null);
  for (const text of res.messages) {
   setTyping(true);
   await sleep(900 + Math.random() * 900);
   if (token !== runToken.current) return;
   setTyping(false);
   setMsgs((m) => [...m, { id: nextId(), role: "bot", text }]);
   await sleep(220);
   if (token !== runToken.current) return;
  }
  setOptions(res.options ?? null);
  setInputCfg(res.input ?? null);
 }, []);

 const goTo = useCallback(
  (nodeId: string) => {
   // "A4:voicemail" → set missAnswer, run A4
   let id = nodeId;
   if (id.includes(":")) {
    const [base, arg] = id.split(":");
    ctx.current.missAnswer = arg;
    id = base;
   }
   const objection = objectionNodes[id];
   const fn = nodes[id];
   const res = objection ?? (fn ? fn(ctx.current) : null);
   if (res) revealResult(res);
  },
  [revealResult]
 );

 // Boot the opening sequence when first opened (or auto after 4s on home).
 const boot = useCallback(() => {
  if (started) return;
  setStarted(true);
  setPulse(false);
  goTo("start");
 }, [started, goTo]);

 const openChatWindow = useCallback(() => {
  setOpen(true);
  boot();
 }, [boot]);

 // External "open chat" events from CTAs.
 useEffect(() => {
  const handler = () => openChatWindow();
  window.addEventListener(CHAT_OPEN_EVENT, handler);
  return () => window.removeEventListener(CHAT_OPEN_EVENT, handler);
 }, [openChatWindow]);

 // Stop pulse after a while if untouched.
 useEffect(() => {
  const t = setTimeout(() => setPulse(false), 16000);
  return () => clearTimeout(t);
 }, []);

 const handleOption = (opt: Option) => {
  setMsgs((m) => [...m, { id: nextId(), role: "user", text: opt.label }]);
  setOptions(null);
  const a = opt.action;
  if (a.type === "node") goTo(a.node);
  else if (a.type === "lead") {
   setTimeout(() => setLeadOpen(true), 300);
  } else if (a.type === "close") setOpen(false);
  // links handled via <Link> in render
 };

 const handleInputSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const val = inputVal.trim();
  if (!val || !inputCfg) return;
  setMsgs((m) => [...m, { id: nextId(), role: "user", text: val }]);
  const cfg = inputCfg;
  setInputCfg(null);
  setInputVal("");
  // Objection detection on free text
  if (cfg.kind === "text") {
   const obj = detectObjection(val);
   if (obj) {
    goTo(obj);
    return;
   }
  }
  const nextNode = cfg.next(val, ctx.current);
  goTo(nextNode);
 };

 const submitLead = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  try {
   await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, source: "chatbot", context: ctx.current }),
   }).catch(() => {});
  } finally {
   setLeadSent(true);
  }
 };

 return (
  <>
   {/* Floating button */}
   <button
    type="button"
    onClick={() => (open ? setOpen(false) : openChatWindow())}
    aria-label={open ? "Close AI consultant" : "Open AI consultant"}
    className="fixed bottom-24 right-5 z-[45] grid h-14 w-14 place-items-center rounded-full text-white lg:bottom-6 lg:right-6"
    style={{
     background: "var(--blue)",
     boxShadow: "0 0 0 1px rgba(10,102,255,0.5), 0 16px 40px -10px rgba(10,102,255,0.6)",
    }}
   >
    <span className={pulse ? "absolute inset-0 rounded-full" : "hidden"} style={{ boxShadow: "0 0 0 0 rgba(10,102,255,0.5)", animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }} />
    {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
   </button>

   <AnimatePresence>
    {open && (
     <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.98 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="glass-2 fixed z-[55] flex flex-col overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_-20px_rgba(13,40,120,0.35)]
            inset-x-3 bottom-3 top-20 sm:inset-x-auto sm:bottom-24 sm:right-6 sm:top-auto sm:h-[560px] sm:w-[390px] lg:bottom-24"
     >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-line bg-bg-2/60 px-4 py-3">
       <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "rgba(10,102,255,0.12)" }}>
        <MessageCircle className="h-5 w-5 text-cyan" />
       </span>
       <div className="leading-tight">
        <p className="text-[0.95rem] font-bold text-ink">V-Line AI Consultant</p>
        <p className="flex items-center gap-1.5 text-[0.8125rem] text-ink-secondary">
         <span className="dot-live" /> Online
        </p>
       </div>
       <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="ml-auto text-ink-muted hover:text-ink">
        <X className="h-5 w-5" />
       </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-4 py-4">
       {msgs.map((m) => (
        <motion.div
         key={m.id}
         initial={{ opacity: 0, y: 8 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3 }}
         className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
        >
         <div
          className={
           m.role === "user"
            ? "max-w-[82%] rounded-2xl rounded-br-md bg-cyan px-3.5 py-2.5 text-[0.95rem] leading-snug text-white"
            : "max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] leading-snug text-ink"
          }
         >
          {m.text}
         </div>
        </motion.div>
       ))}

       {typing && (
        <div className="flex justify-start">
         <div className="flex gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-3">
          {[0, 1, 2].map((i) => (
           <span key={i} className="h-2 w-2 rounded-full bg-ink-muted" style={{ animation: "float 1s ease-in-out infinite", animationDelay: `${i * 0.15}s` }} />
          ))}
         </div>
        </div>
       )}

       {/* Options */}
       {options && !leadOpen && (
        <div className="flex flex-wrap gap-2 pt-1">
         {options.map((opt, i) =>
          opt.action.type === "link" ? (
           <Link
            key={i}
            href={opt.action.href}
            onClick={() => setOpen(false)}
            className="rounded-full border border-line bg-surface px-3.5 py-2 text-[0.875rem] font-medium text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
           >
            {opt.label}
           </Link>
          ) : (
           <button
            key={i}
            type="button"
            onClick={() => handleOption(opt)}
            className="rounded-full border border-line bg-surface px-3.5 py-2 text-[0.875rem] font-medium text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
           >
            {opt.label}
           </button>
          )
         )}
        </div>
       )}

       {/* Lead form */}
       {leadOpen && (
        <div className="rounded-2xl border border-line bg-surface p-3.5">
         {leadSent ? (
          <div className="text-center">
           <p className="text-[0.95rem] font-semibold text-ink">Done! </p>
           <p className="mt-1 text-[0.875rem] text-ink-secondary">Our team will reach out within 4 hours. Meanwhile, try your free AI assessment:</p>
           <Link href="/assessment" onClick={() => setOpen(false)} className="btn btn-primary btn-block mt-3 h-11 text-[0.95rem]">
            Take Assessment <ArrowRight className="h-4 w-4" />
           </Link>
          </div>
         ) : (
          <form onSubmit={submitLead} className="space-y-2.5">
           <p className="text-[0.9375rem] font-medium text-ink">Drop your info — our team reaches out within 4 hours:</p>
           <input name="name" required placeholder="Name" className="chat-field" />
           <input name="email" type="email" required placeholder="Email" className="chat-field" />
           <input name="phone" type="tel" required placeholder="Phone" className="chat-field" />
           <input name="need" defaultValue={ctx.current.freeText || ctx.current.industry || ""} placeholder="What do you need?" className="chat-field" />
           <button type="submit" className="btn btn-primary btn-block h-11 text-[0.95rem]">
            Send <Send className="h-4 w-4" />
           </button>
          </form>
         )}
        </div>
       )}
      </div>

      {/* Free-text input */}
      {inputCfg && !leadOpen && (
       <form onSubmit={handleInputSubmit} className="flex items-center gap-2 border-t border-line bg-bg-2/60 p-3">
        <input
         autoFocus
         value={inputVal}
         onChange={(e) => setInputVal(e.target.value)}
         inputMode={inputCfg.kind === "number" ? "numeric" : "text"}
         placeholder={inputCfg.placeholder}
         className="chat-field flex-1"
        />
        <button type="submit" aria-label="Send" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan text-white">
         <Send className="h-4 w-4" />
        </button>
       </form>
      )}
     </motion.div>
    )}
   </AnimatePresence>

   <style jsx global>{`
    .chat-field {
     width: 100%;
     border-radius: 0.85rem;
     border: 1px solid var(--border);
     background:#f7f9fc;
     padding: 0.6rem 0.85rem;
     font-size: 0.95rem;
     color: var(--text);
     outline: none;
     transition: border-color 0.2s;
    }
    .chat-field::placeholder {
     color: var(--text-muted);
    }
    .chat-field:focus {
     border-color: rgba(10, 102, 255, 0.5);
    }
   `}</style>
  </>
 );
}
