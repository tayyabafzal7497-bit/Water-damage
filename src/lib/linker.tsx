/**
 * Contextual internal links (server-side, capped).
 * Topic → owning-page table. First mention only, no self-links, max 6/page.
 * Usage: const link = createLinker(path); link("breaker trips") → <a> or text.
 */
import { routes } from "./routes";

interface Topic {
  match: RegExp;
  label: string;
  path: string;
}

const TOPICS: Topic[] = [
  { match: /\bflood cleanup\b/i, label: "flood cleanup", path: "/water-damage-services/flood-cleanup/" },
  { match: /\bburst pipe\b/i, label: "burst pipe water removal", path: "/water-damage-services/burst-pipe-water-removal/" },
  { match: /\bsewage backup\b/i, label: "sewage backup cleanup", path: "/water-damage-services/sewage-backup-cleanup/" },
  { match: /\bstructural drying\b/i, label: "structural drying and dehumidification", path: "/water-damage-services/structural-drying-dehumidification/" },
  { match: /\bcontents drying\b/i, label: "contents drying and cleaning", path: "/water-damage-services/contents-drying-cleaning/" },
  { match: /\broof leak\b/i, label: "roof leak water damage", path: "/water-damage-services/roof-leak-water-damage/" },
  { match: /\bbasement flooding\b/i, label: "basement flooding cleanup", path: "/water-damage-services/basement-flooding-cleanup/" },
  { match: /\bwater damage restoration\b/i, label: "water damage restoration", path: "/water-damage-services/water-damage-restoration/" },
  { match: /\binsurance claim\b/i, label: "insurance claims for water damage", path: "/resources/insurance-claims-water-damage/" },
];

const MAX_LINKS = 6;

export function createLinker(currentPath: string) {
  const used = new Set<string>();
  let count = 0;

  function linkFor(text: string): { label: string; path: string } | null {
    if (count >= MAX_LINKS) return null;
    for (const t of TOPICS) {
      if (used.has(t.path)) continue;
      if (t.path === currentPath) continue; // no self-links
      if (t.match.test(text)) {
        used.add(t.path);
        count++;
        return { label: t.label, path: t.path };
      }
    }
    return null;
  }

  /**
   * Link the first matching topic mention inside a paragraph.
   * Returns HTML string — caller must sanitize (content is ours, static).
   */
  function linkify(paragraph: string): string {
    if (count >= MAX_LINKS) return paragraph;
    for (const t of TOPICS) {
      if (used.has(t.path) || t.path === currentPath) continue;
      const m = paragraph.match(t.match);
      if (m && m.index !== undefined) {
        used.add(t.path);
        count++;
        const before = paragraph.slice(0, m.index);
        const after = paragraph.slice(m.index + m[0].length);
        return `${before}<a href="${t.path}" class="link">${m[0]}</a>${after}`;
      }
    }
    return paragraph;
  }

  return { linkFor, linkify, count: () => count };
}

export { routes };
