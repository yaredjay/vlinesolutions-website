import Image from "next/image";
import { sportClients } from "@/data/sport";

export function SportClients() {
  return (
    <section aria-label="Clients" className="border-b border-sp-ink/[0.06] bg-sp-mist py-10 md:py-11">
      <div className="container-edge flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-sp-muted md:text-[13px]">
          Trusted by public agencies, cities and leagues
        </span>
        <span className="hidden text-[13px] text-sp-muted sm:block">Federal · State &amp; local · City · Private leagues</span>
      </div>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex" aria-hidden={k === 1}>
              {sportClients.map((c) => (
                <div
                  key={c.name}
                  className="mx-1.5 flex h-[72px] w-[150px] items-center justify-center rounded-2xl border border-sp-ink/[0.06] bg-white px-4 shadow-[0_10px_30px_rgba(30,50,120,0.06)] md:mx-3 md:h-24 md:w-[220px] md:px-6"
                >
                  {c.src ? (
                    <Image src={c.src} alt={c.name} width={c.width} height={c.height} className="max-h-[50px] w-auto max-w-full object-contain md:max-h-16" />
                  ) : (
                    <span className="sp-cond text-center text-base leading-none text-sp-ink md:text-[22px]">{c.name}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
