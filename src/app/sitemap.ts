import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";

export const dynamic = "force-static";

const siteUrl = "https://vlinesolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const core: Array<{ path: string; priority: number; cf: "weekly" | "monthly" }> = [
    { path: "/", priority: 1.0, cf: "weekly" },
    { path: "/solutions", priority: 0.9, cf: "weekly" },
    { path: "/custom", priority: 0.9, cf: "weekly" },
    { path: "/industries", priority: 0.8, cf: "weekly" },
    { path: "/assessment", priority: 0.8, cf: "monthly" },
    { path: "/about", priority: 0.6, cf: "monthly" },
    { path: "/government", priority: 0.6, cf: "monthly" },
    { path: "/contact", priority: 0.7, cf: "monthly" },
  ];

  const industryRoutes = industries.map((i) => ({
    path: `/industries/${i.slug}`,
    priority: 0.7,
    cf: "monthly" as const,
  }));

  return [...core, ...industryRoutes].map(({ path, priority, cf }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: cf,
    priority,
  }));
}
