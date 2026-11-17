import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { sportPages } from "@/data/sport-pages";
import { isSportHost, SHOW_SPORT, SPORT_ONLY, SPORT_URL } from "@/lib/sport";

/**
 * Host-aware sitemap: vlinesports.com gets the sport site's URLs at its own
 * domain; vlinesolutions.com gets the corporate pages. Rendered per request so
 * one deployment can answer for both hosts.
 */
export const dynamic = "force-dynamic";

const corpUrl = "https://vlinesolutions.com";

type Route = { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" };

const sportRoutes: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/request", priority: 0.9, changeFrequency: "monthly" },
  ...sportPages.map((p) => ({ path: `/officials/${p.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
];

const corpRoutes: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/technology", priority: 0.9, changeFrequency: "weekly" },
  { path: "/government", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const host = headers().get("host");
  const lastModified = new Date();
  const onSportHost = SPORT_ONLY || isSportHost(host);

  if (onSportHost) {
    return sportRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SPORT_URL}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency,
      priority,
    }));
  }

  const routes = [
    ...corpRoutes,
    ...(SHOW_SPORT ? [{ path: "/sports", priority: 0.9, changeFrequency: "weekly" as const }, { path: "/sports/request", priority: 0.8, changeFrequency: "monthly" as const }] : []),
  ];
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${corpUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
