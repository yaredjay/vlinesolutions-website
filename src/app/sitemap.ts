import type { MetadataRoute } from "next";
import { SPORT_ONLY } from "@/lib/sport";

export const dynamic = "force-static";

const siteUrl = "https://vlinesolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  type Route = { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" };

  // Sport-only mode: VLS Sport is served at the root and the corporate pages redirect there.
  const routes: Route[] = SPORT_ONLY
    ? [
        { path: "/", priority: 1.0, changeFrequency: "weekly" },
        { path: "/request", priority: 0.8, changeFrequency: "monthly" },
      ]
    : [
        { path: "/", priority: 1.0, changeFrequency: "weekly" },
        { path: "/technology", priority: 0.9, changeFrequency: "weekly" },
        { path: "/workforce", priority: 0.9, changeFrequency: "weekly" },
        { path: "/government", priority: 0.9, changeFrequency: "weekly" },
        { path: "/about", priority: 0.7, changeFrequency: "monthly" },
        { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
        { path: "/sports", priority: 0.9, changeFrequency: "weekly" },
        { path: "/sports/request", priority: 0.8, changeFrequency: "monthly" },
      ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
