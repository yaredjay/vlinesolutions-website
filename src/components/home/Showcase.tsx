"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export type Shot = {
 title: string;
 sub: string;
 img?: string;
 kind: "dashboard" | "chat" | "analytics";
};

export function Showcase({ shots }: { shots: Shot[] }) {
 return (
  <section className="relative overflow-hidden py-24">
   {/* abstract accent orb */}
   <div
    aria-hidden
    className="orb -right-24 top-10 h-[420px] w-[420px] animate-orb-drift"
    style={{ opacity: 0.5, background: "radial-gradient(circle, rgba(10,102,255,0.16), transparent 70%)" }}
   />
   <div className="container-edge relative">
    <SectionHeader
     eyebrow="See It In Action"
     title="The Product, Working For You"
     description="A live dashboard, a chat that books, and analytics that show the revenue your AI captures."
    />
    <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
     {shots.map((s) => (
      <StaggerItem key={s.title}>
       <figure className="glass card-hover h-full overflow-hidden rounded-3xl">
        <Frame shot={s} />
        <figcaption className="p-6">
         <h3 className="text-lg font-bold">{s.title}</h3>
         <p className="mt-1.5 text-body-sm text-ink-secondary">{s.sub}</p>
        </figcaption>
       </figure>
      </StaggerItem>
     ))}
    </Stagger>
   </div>
  </section>
 );
}

function Frame({ shot }: { shot: Shot }) {
 return (
  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-gradient-to-br from-[#eef3ff] to-[#dfe9ff]">
   {/* window chrome */}
   <div className="flex items-center gap-1.5 bg-white/70 px-4 py-2.5 backdrop-blur">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
   </div>
   {shot.img ? (
    <Image src={shot.img} alt={shot.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover object-top" />
   ) : (
    <div className="absolute inset-0 top-9 p-4">
     {shot.kind === "dashboard" && <DashboardSkeleton />}
     {shot.kind === "chat" && <ChatSkeleton />}
     {shot.kind === "analytics" && <AnalyticsSkeleton />}
    </div>
   )}
  </div>
 );
}

function DashboardSkeleton() {
 return (
  <div className="flex h-full flex-col gap-3">
   <div className="grid grid-cols-3 gap-2">
    {["Calls", "Leads", "Booked"].map((l) => (
     <div key={l} className="rounded-xl bg-white/80 p-2.5 shadow-sm">
      <div className="text-[0.6rem] font-semibold uppercase tracking-wide text-ink-muted">{l}</div>
      <div className="mt-1 h-4 w-10 rounded bg-cyan/70" />
     </div>
    ))}
   </div>
   <div className="flex flex-1 items-end gap-1.5 rounded-xl bg-white/80 p-3 shadow-sm">
    {[40, 65, 50, 80, 60, 90, 72].map((h, i) => (
     <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan/40 to-cyan" style={{ height: `${h}%` }} />
    ))}
   </div>
  </div>
 );
}

function ChatSkeleton() {
 return (
  <div className="flex h-full flex-col justify-end gap-2">
   <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-white/85 px-3 py-2 text-[0.7rem] text-ink-secondary shadow-sm">Hi! I&apos;d like to book an appointment.</div>
   <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-cyan px-3 py-2 text-[0.7rem] text-white shadow-sm">Sure — I have Tuesday 2pm or Wednesday 10am. Which works?</div>
   <div className="max-w-[55%] self-start rounded-2xl rounded-bl-sm bg-white/85 px-3 py-2 text-[0.7rem] text-ink-secondary shadow-sm">Tuesday 2pm </div>
   <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-cyan px-3 py-2 text-[0.7rem] text-white shadow-sm">Booked! Confirmation texted. </div>
  </div>
 );
}

function AnalyticsSkeleton() {
 return (
  <div className="flex h-full flex-col gap-3">
   <div className="rounded-xl bg-white/80 p-3 shadow-sm">
    <div className="text-[0.6rem] font-semibold uppercase tracking-wide text-ink-muted">Revenue captured</div>
    <div className="mt-1 h-5 w-20 rounded bg-cyan/70" />
   </div>
   <div className="relative flex-1 overflow-hidden rounded-xl bg-white/80 p-3 shadow-sm">
    <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
     <defs>
      <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
       <stop offset="0" stopColor="rgba(10,102,255,0.35)" />
       <stop offset="1" stopColor="rgba(10,102,255,0)" />
      </linearGradient>
     </defs>
     <path d="M0,42 L15,36 L30,38 L45,24 L60,28 L75,14 L100,6 L100,50 L0,50 Z" fill="url(#sk)" />
     <path d="M0,42 L15,36 L30,38 L45,24 L60,28 L75,14 L100,6" fill="none" stroke="#0a66ff" strokeWidth="1.5" />
    </svg>
   </div>
  </div>
 );
}
