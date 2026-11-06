/**
 * Per-page Open Graph card definitions.
 * Keys: home, services, locations, resources, about, contact, faq,
 *   service-{slug}, city-{slug}, cityservice-{city}-{service}, guide-{slug}
 */
import {
  getService,
  getCity,
  getArticle,
  cityLabel,
  indexableUrlsSafe,
} from "./og-data";

export interface OgCard {
  eyebrow: string;
  title: string;
  area: string;
}

export function ogCardFor(key: string): OgCard {
  const fallback: OgCard = {
    eyebrow: "Water Damage Loan",
    title: "United States Water Damage Restoration",
    area: "United States",
  };
  if (key === "home") return fallback;
  if (key === "services")
    return { eyebrow: "Water Damage Loan", title: "Water damage Services", area: "United States" };
  if (key === "locations")
    return { eyebrow: "Water Damage Loan", title: "Service Areas", area: "6 United States cities" };
  if (key === "resources")
    return { eyebrow: "Water Damage Loan", title: "Electrical Guides", area: "Plain-English how-tos" };
  if (key === "about")
    return { eyebrow: "Water Damage Loan", title: "How Water Damage Loan Works", area: "United States" };
  if (key === "contact")
    return { eyebrow: "Water Damage Loan", title: "Get a Free Quote", area: "United States" };
  if (key === "faq")
    return { eyebrow: "Water Damage Loan", title: "Common Questions", area: "Water Damage Loan" };

  if (key.startsWith("service-")) {
    const s = getService(key.slice(8));
    if (s) return { eyebrow: "Water damage Service", title: s.name, area: "United States" };
  }
  if (key.startsWith("cityservice-")) {
    const rest = key.slice(12).split("-");
    // cityservice-{city}-{service}: service slug is last segment group; find by trying splits
    for (let i = 1; i < rest.length; i++) {
      const citySlug = rest.slice(0, i).join("-");
      const serviceSlug = rest.slice(i).join("-");
      const c = getCity(citySlug);
      const s = getService(serviceSlug);
      if (c && s)
        return { eyebrow: cityLabel(c), title: s.name, area: "Free written quotes" };
    }
  }
  if (key.startsWith("city-")) {
    const c = getCity(key.slice(5));
    if (c) return { eyebrow: "Water Damage Restoration", title: cityLabel(c), area: `${c.areas.length} neighborhoods covered` };
  }
  if (key.startsWith("guide-")) {
    const a = getArticle(key.slice(6));
    if (a) return { eyebrow: a.category, title: a.title, area: "Water Damage Loan guides" };
  }
  return fallback;
}

/** All OG keys for static generation. */
export function allOgKeys(): string[] {
  return indexableUrlsSafe();
}
