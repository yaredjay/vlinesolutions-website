import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { SportBaseProvider } from "@/components/sport/SportBase";
import { SportNav } from "@/components/sport/SportNav";
import { SportFooter } from "@/components/sport/SportFooter";
import { SportStructuredData } from "@/components/sport/SportStructuredData";
import { sportBrand } from "@/data/sport";
import { CORP_URL, isSportHost, SPORT_ONLY, SPORT_URL } from "@/lib/sport";

const title = `${sportBrand.name} — ${sportBrand.tagline}`;

export const metadata: Metadata = {
  title: {
    absolute: title,
    template: `%s — ${sportBrand.name}`,
  },
  description: sportBrand.description,
  applicationName: sportBrand.name,
  keywords: [
    "sports officials",
    "referee staffing",
    "umpire staffing",
    "sports officiating services",
    "parks and recreation referees",
    "youth league referees",
    "adult rec league officials",
    "tournament officials",
    "scorekeepers",
    "VLS Sport",
    "VLS Sports",
    "V-Line Solutions",
  ],
  category: "Sports Services",
  alternates: { canonical: SPORT_URL },
  openGraph: {
    title,
    description: sportBrand.description,
    type: "website",
    siteName: sportBrand.name,
    url: SPORT_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: sportBrand.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function SportLayout({ children }: { children: React.ReactNode }) {
  const host = headers().get("host");
  const base = isSportHost(host) ? "" : "/sports";

  return (
    <div data-site="sport" className="min-h-dvh bg-white font-sans text-sp-ink">
      <SportBaseProvider base={base} corpUrl={SPORT_ONLY ? null : CORP_URL}>
        <SportStructuredData />
        <SportNav />
        <main className="relative">{children}</main>
        <SportFooter />
      </SportBaseProvider>
    </div>
  );
}
