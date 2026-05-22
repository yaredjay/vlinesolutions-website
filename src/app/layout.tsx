import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://vlinesolutions.com"),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#050608" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${display.variable}`}>
      <body className="relative bg-bg-base text-fg-primary">
        <ThemeProvider>
          <SmoothScroll />
          <Cursor />
          <Navigation />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
