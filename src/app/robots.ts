import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isSportHost, SPORT_ONLY, SPORT_URL } from "@/lib/sport";

/** Host-aware robots: each domain advertises its own sitemap and host. AI crawlers are explicitly allowed. */
export const dynamic = "force-dynamic";

const corpUrl = "https://vlinesolutions.com";
const aiCrawlers = ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "anthropic-ai", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot", "Bytespider", "meta-externalagent"];

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("host");
  const onSportHost = SPORT_ONLY || isSportHost(host);
  const base = onSportHost ? SPORT_URL : corpUrl;
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
