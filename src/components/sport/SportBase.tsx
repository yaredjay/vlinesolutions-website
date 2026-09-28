"use client";

import Link from "next/link";
import { createContext, useContext, type ComponentProps } from "react";
import { CORP_URL, sportHref } from "@/lib/sport";

type SportBase = { base: string; corpUrl: string };

const Ctx = createContext<SportBase>({ base: "/sports", corpUrl: CORP_URL });

export function SportBaseProvider({
  base,
  corpUrl,
  children,
}: SportBase & { children: React.ReactNode }) {
  return <Ctx.Provider value={{ base, corpUrl }}>{children}</Ctx.Provider>;
}

export function useSportBase() {
  return useContext(Ctx);
}

type SportLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** A link inside the sport site: resolves against "" on the sport host and "/sports" on the corporate host. */
export function SportLink({ href, ...rest }: SportLinkProps) {
  const { base } = useSportBase();
  return <Link href={sportHref(base, href)} {...rest} />;
}
