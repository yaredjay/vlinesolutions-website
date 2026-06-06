import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SocialProofToasts } from "@/components/SocialProofToasts";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { Chatbot } from "@/components/chatbot/Chatbot";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const siteUrl = "https://vlinesolutions.com";

export const metadata: Metadata = {
  title: {
    default: "V-Line Solutions — Custom AI That Grows Your Business",
    template: "%s — V-Line Solutions",
  },
  description: site.description,
  applicationName: site.name,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "AI automation agency", "AI receptionist", "AI chatbot for business",
    "AI voice agent", "missed call text back", "appointment booking AI",
    "small business AI", "AI for HVAC", "AI for dental", "AI for contractors",
    "custom AI development", "workflow automation", "V-Line Solutions",
  ],
  authors: [{ name: site.legalName, url: siteUrl }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title: "V-Line Solutions — Custom AI That Grows Your Business",
    description: site.description,
    type: "website",
    siteName: site.name,
    url: siteUrl,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "V-Line Solutions" }],
  },
  twitter: { card: "summary_large_image", title: "V-Line Solutions", description: site.description, images: ["/opengraph-image"] },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-icon.png" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <body className="relative bg-bg text-ink">
        <StructuredData />
        <SmoothScroll />
        <Cursor />
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <SocialProofToasts />
        <ExitIntentPopup />
        <Chatbot />
      </body>
    </html>
  );
}
