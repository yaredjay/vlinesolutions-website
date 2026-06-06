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
        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
          {clients.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex h-[88px] items-center justify-center rounded-2xl border border-line bg-white px-3 shadow-[0_8px_24px_-16px_rgba(13,40,120,0.25)] transition-transform duration-300 hover:-translate-y-1"
              title={c.name}
            >
              <Image
                src={c.src}
                alt={c.name}
                width={c.width}
                height={c.height}
                sizes="120px"
                className="h-14 w-auto max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
