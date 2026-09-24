import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { SERVICE_PAGES } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = POSTS.reduce((max, p) => (p.updatedDate > max ? p.updatedDate : max), "2025-01-01");

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: latest, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/servicios"), lastModified: latest, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICE_PAGES.map((s) => ({
      url: absoluteUrl(s.href),
      lastModified: latest,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: absoluteUrl("/wallet"), lastModified: latest, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: latest, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: latest, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: latest, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/privacy-policy"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/cookie-policy"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms-of-service"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: p.updatedDate,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(`/blog/${p.slug}/opengraph-image`)],
  }));

  return [...pages, ...posts];
}
