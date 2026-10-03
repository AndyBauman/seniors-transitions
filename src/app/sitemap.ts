import type { MetadataRoute } from "next";
import {
  SITE_URL,
  STATIC_SITEMAP_PATHS,
  SERVED_CITIES_BY_STATE,
  CITY_SERVICE_SLUGS,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_SITEMAP_PATHS) {
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/services") ? 0.85 : 0.7,
    });
  }

  for (const [state, cities] of Object.entries(SERVED_CITIES_BY_STATE)) {
    for (const city of cities) {
      entries.push({
        url: `${SITE_URL}/${state}/${city}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.75,
      });
      for (const service of CITY_SERVICE_SLUGS) {
        entries.push({
          url: `${SITE_URL}/${state}/${city}/${service}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.65,
        });
      }
    }
  }

  return entries;
}
