/**
 * Re-exports for og.ts without creating an import cycle
 * (og.ts is imported by the OG route; content/index imports a lot).
 */
export {
  getService,
  getCity,
  getArticle,
  cityLabel,
} from "@/content";
import { indexableUrls } from "./sitemap";

/** Derive OG keys from indexable URLs. */
export function indexableUrlsSafe(): string[] {
  const keys = new Set<string>([
    "home",
    "services",
    "locations",
    "resources",
    "about",
    "contact",
    "faq",
  ]);
  for (const u of indexableUrls()) {
    const loc = u.loc;
    let m: RegExpMatchArray | null;
    if ((m = loc.match(/^\/water-damage-services\/([^/]+)\/$/)))
      keys.add(`service-${m[1]}`);
    else if ((m = loc.match(/^\/locations\/us\/([^/]+)\/([^/]+)\/$/)))
      keys.add(`cityservice-${m[1]}-${m[2]}`);
    else if ((m = loc.match(/^\/locations\/us\/([^/]+)\/$/))) keys.add(`city-${m[1]}`);
    else if ((m = loc.match(/^\/resources\/([^/]+)\/$/))) keys.add(`guide-${m[1]}`);
  }
  return [...keys];
}
