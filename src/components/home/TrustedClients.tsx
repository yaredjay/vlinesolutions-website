"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/data/clients";

export function TrustedClients() {
  return (
    <section className="band-white relative border-y border-line py-14">
      <div className="container-edge">
        <p className="text-center text-3xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Trusted by government &amp; enterprise teams across the U.S.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {clients.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex h-24 w-[150px] items-center justify-center rounded-2xl border border-line bg-white px-5 shadow-[0_8px_24px_-16px_rgba(13,40,120,0.25)] transition-transform duration-300 hover:-translate-y-1"
              title={c.name}
            >
              <Image
                src={c.src}
                alt={c.name}
                width={c.width}
                height={c.height}
                sizes="130px"
                className="h-16 w-auto max-w-[120px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
