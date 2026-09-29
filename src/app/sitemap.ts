import type { MetadataRoute } from "next";
import { locales, portfolioSlugs, serviceSlugs, workSectionIds } from "@/content/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/work",
    "/contact",
    "/terms",
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...portfolioSlugs.map((slug) => `/work/${slug}`),
    ...workSectionIds.map((id) => `/work?section=${id}`),
  ];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date("2026-09-29"),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/work/") || path.startsWith("/services/") ? 0.7 : 0.8,
      alternates: {
        languages: {
          ar: `${siteUrl}/ar${path}`,
          en: `${siteUrl}/en${path}`,
        },
      },
    })),
  );
}
