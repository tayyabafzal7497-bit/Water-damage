/**
 * indexableUrls(): the list shared by sitemaps, llms.txt and the SEO audit.
 * Only quality-gated, published records are included.
 */
import { routes } from "./routes";
import {
  publishedServices,
  publishedCities,
  publishedArticles,
  publishedCityServices,
  allCities,
} from "@/content";
import { cityQuality, cityServiceQuality } from "./quality";
import { contentDates } from "@/content/dates";

export interface IndexableUrl {
  loc: string;
  lastmod: string;
}

const cityOkCache = new Map<string, boolean>();
function cityOk(slug: string): boolean {
  const hit = cityOkCache.get(slug);
  if (hit !== undefined) return hit;
  const city = allCities.find((c) => c.slug === slug);
  const ok = city ? cityQuality(city).ok : false;
  cityOkCache.set(slug, ok);
  return ok;
}

export function indexableUrls(): IndexableUrl[] {
  const urls: IndexableUrl[] = [];
  const US = "us";

  urls.push({ loc: routes.home(), lastmod: contentDates.services });
  urls.push({ loc: routes.services(), lastmod: contentDates.services });
  urls.push({ loc: routes.locations(), lastmod: contentDates.locations });
  urls.push({ loc: routes.state(US), lastmod: contentDates.locations });
  urls.push({ loc: routes.resources(), lastmod: contentDates.guides });
  urls.push({ loc: routes.about(), lastmod: contentDates.services });
  urls.push({ loc: routes.contact(), lastmod: contentDates.services });
  urls.push({ loc: routes.faq(), lastmod: contentDates.guides });

  for (const s of publishedServices)
    urls.push({
      loc: routes.service(s.slug),
      lastmod: s.updated,
    });

  for (const c of publishedCities) {
    if (!cityOk(c.slug)) continue;
    urls.push({ loc: routes.city(US, c.slug), lastmod: c.updated });
  }

  for (const cs of publishedCityServices) {
    const q = cityServiceQuality(cs, cityOk(cs.citySlug));
    if (!q.ok) continue;
    urls.push({
      loc: routes.cityService(US, cs.citySlug, cs.serviceSlug),
      lastmod: cs.updated,
    });
  }

  for (const a of publishedArticles)
    urls.push({ loc: routes.guide(a.slug), lastmod: a.updated });

  // De-dupe just in case
  const seen = new Set<string>();
  return urls.filter((u) => {
    if (seen.has(u.loc)) return false;
    seen.add(u.loc);
    return true;
  });
}
