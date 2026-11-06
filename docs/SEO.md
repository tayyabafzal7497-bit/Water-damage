# Water Damage Loan — SEO

## Intent map

| Intent | Page |
|---|---|
| brand / metro ("wisconsin water damage", "water damage contractors wisconsin") | home |
| "water damage contractor in {city}" | city page |
| service ("interior water damage work orlando") | service page |
| problem ("breaker keeps tripping") | guide |
| cost ("panel upgrade cost factors") | cost section on service page + cost guides |
| commercial / HOA | specialty service pages |

The homepage title ("United States House Painters") must not compete with the
United States city page — the city page targets "{city}-specific" modifiers and
local issues.

## Indexation

- Quality gate (`src/lib/quality.ts`): city ≥180 words local copy, ≥2 local
  issues, ZIPs, ≥3 services, nearby links. City+service ≥90 local words +
  published parent. Failures: not generated (`dynamicParams = false` → 404).
- Sitemaps: `/sitemap.xml` index → pages/services/locations/guides.
  `lastmod` from content dates, never build time.
- robots.ts: production allows all except `/api/`, `/thank-you/`, tracking
  params. Non-production disallows all.

## Schema graph

- Sitewide: `Organization` (NOT Painter) + `WebSite` + city `Place` nodes +
  `Service` catalog entries with `broker` → org.
- Per page: `WebPage` (+ `FAQPage` when visible FAQs), `BreadcrumbList`,
  `about`/`mainEntity`, local `Service` nodes with `broker`.
- Every `@id` referenced must be defined on the page. Temp 555 phone is
  excluded from all schema.

## Linking

- Hierarchy: breadcrumbs, mega menus, hubs. Sideways: related services,
  nearby towns, town chips, guides, state link on city pages.
- Contextual: `createLinker(path)` — topic table in `src/lib/linker.tsx`,
  first mention only, no self-links, max 6/page.
- Target click depth ≤ 2.

## AEO / GEO

- Every service/guide opens with a direct answer; FAQs answer in sentence one
  and render in HTML even when collapsed.
- One H1, logical H2/H3. "At a glance" `<dl>` blocks. `/llms.txt` from
  indexable URLs.

## Faster indexing

- Canonical apex, single-hop www 308s (host-level). Honest sitemap lastmod.
- IndexNow after deploy (`npm run indexnow`); Search Console Domain property
  + sitemap + URL Inspection for key pages. Google doesn't use IndexNow.
