import { MetadataRoute } from "next";
import { POD_ORDER } from "@/lib/marketing/market-pods";

const BASE = "https://www.inthepast.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...POD_ORDER.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/subprocessors`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}
