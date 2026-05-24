import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://vlinesolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{ path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/technology", priority: 0.9, changeFrequency: "weekly" },
    { path: "/workforce", priority: 0.9, changeFrequency: "weekly" },
    { path: "/government", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
