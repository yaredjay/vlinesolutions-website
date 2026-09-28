"use client";

import { Building2, Globe2, Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SwipeHint, SwipeRail } from "@/components/sport/SwipeRail";
import { serve } from "@/data/sport";

const icons = { building: Building2, globe: Globe2, trophy: Trophy } as const;

export function SportServe() {
  return (
    <section id="serve" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-[300px] h-[600px] w-[700px] rounded-full blur-[40px] animate-sp-drift" style={{ background: "radial-gradient(circle, rgba(0,194,255,0.22) 0%, rgba(0,194,255,0) 65%)" }} />
      <div className="container-edge relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <Reveal className="flex flex-col gap-4">
            <span className="sp-eyebrow text-sp-electric">Who we serve</span>
            <h2 className="sp-display text-[48px] md:text-[72px] lg:text-[84px]">
              <span className="sp-outline">One</span> <span className="sp-outline md:hidden"><br /></span>
              <span className="sp-outline">partner.</span>
              <br />
              <span className="sp-grad-aurora">Every</span> <span className="md:hidden"><br /></span>
              <span className="sp-grad-aurora">season.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[340px] text-[15px] leading-relaxed text-sp-slate md:mb-3 md:text-[17px]">
            Season-long or single-event. Public or private. The same vetted crews, the same standard, scoped to your rulebook.
          </Reveal>
        </div>

        <SwipeRail label="Who we serve" className="mt-8 md:mt-11 md:grid md:grid-cols-3 md:gap-6">
          {serve.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <Reveal
                key={card.num}
                delay={i * 0.08}
                className={`w-[296px] rounded-[30px] bg-gradient-to-br p-[2px] shadow-[0_30px_80px_rgba(30,50,120,0.12)] md:w-auto ${card.ring}`}
              >
                <div
                  className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] bg-white p-6 md:min-h-[356px] md:p-8"
                  style={{ backgroundImage: `radial-gradient(360px 220px at 100% 0%, ${card.glow}, transparent 60%)` }}
                >
                  <div aria-hidden className="sp-display pointer-events-none absolute -bottom-7 -right-1 text-[140px] leading-none text-sp-electric/[0.06] md:text-[180px]">
                    {card.num}
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl md:h-[52px] md:w-[52px]" style={{ background: card.iconBg, color: card.iconColor }}>
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="relative flex flex-col gap-2.5">
                    <h3 className="sp-display text-[24px] leading-[0.92] md:text-[28px]">
                      {card.title[0]}
                      <br />
                      {card.title[1]}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-sp-slate md:text-[15px]">{card.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </SwipeRail>
        <SwipeHint count={3} />
      </div>
    </section>
  );
}
