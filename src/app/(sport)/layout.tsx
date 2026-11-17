import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { SportBaseProvider } from "@/components/sport/SportBase";
import { SportNav } from "@/components/sport/SportNav";
import { SportFooter } from "@/components/sport/SportFooter";
import { sportBrand, sports } from "@/data/sport";
import { CORP_URL, isSportHost, SHOW_SPORT, SPORT_ONLY, SPORT_URL } from "@/lib/sport";

const title = `${sportBrand.name} — Sports Officials Staffing: Referees, Umpires & Game-Day Crews`;
const description =
  "V-Line Sport staffs referees, umpires, scorekeepers and game-day crews for parks and recreation departments, municipalities, school districts, tournaments and private leagues. Vetted officials matched to your rulebook, backups on every slate, one invoice per season. Any sport, all 50 states.";

export const metadata: Metadata = {
  metadataBase: new URL(SPORT_URL),
  title: {
    absolute: title,
    template: `%s — ${sportBrand.name}`,
  },
  description,
  applicationName: sportBrand.name,
  authors: [{ name: "V-Line Solutions LLC", url: CORP_URL }],
  creator: "V-Line Solutions LLC",
  publisher: "V-Line Solutions LLC",
  keywords: [
    "sports officials staffing",
    "referee staffing company",
    "umpire staffing",
    "hire referees for league",
    "hire umpires for tournament",
    "sports officiating services",
    "sports league management services",
    "tournament officials",
    "scorekeepers for hire",
    "parks and recreation referees",
    "youth league referees",
    "adult rec league officials",
    "school district sports officials",
    "game day staffing",
    ...sports.map((s) => `${s.toLowerCase()} referees`),
    "V-Line Sport",
    "VLine Sports",
    "VLS Sport",
    "V-Line Solutions",
  ],
  category: "Sports Services",
  alternates: { canonical: SPORT_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: sportBrand.name,
    url: SPORT_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: { email: false, address: false, telephone: false },
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
      {/* The brand switcher and corporate links appear only while the two sites cross-link (SHOW_SPORT). */}
      <SportBaseProvider base={base} corpUrl={SPORT_ONLY || !SHOW_SPORT ? null : CORP_URL}>
        <SportNav />
        <main className="relative">{children}</main>
        <SportFooter />
      </SportBaseProvider>
    </div>
  );
}
