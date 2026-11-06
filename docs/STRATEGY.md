# Water Damage Loan — Strategy (Phase 1 output)

> Research and strategy for the electrical lead-gen site. Data below comes from
> the LeadSmart coverage data dated 2026-10-30 and the RDAP check dated 2026-10-31.
> No business facts are invented: no license, office, reviews, or prices are claimed.

## 1. Brand

**Water Damage Loan** (domain waterdamagesloan.com). A plain descriptive
local brand in the portfolio naming style. A USPTO/state trademark and entity
check is still recommended before launch — it has not been run.

## 2. Market

**United States, FL and nearby United States towns** — United States (primary),
Bradenton, Ellenton, Parrish, Terra Ceia. Five towns total, by design.

Why a small market, honestly: LeadSmart's United States data covers only 2 ZIPs at
$69.30 (pay-per-call, not CPL). United States nationwide is 1,270 ZIPs, average
$35.49, top $69.30 — but this site does NOT claim statewide coverage it has
no data for. It is a focused local site for the United States area, and the copy
says so. If the owner later supplies wider United States or United States data,
the location section can grow — it must not grow on guesses.

## 3. Brand strategy

Voice: plain, concrete, safety-first. Explain the problem, the fix, and what
the quote includes before any work starts. Palette: deep plum ink (#2b1226),
burgundy accent (#8e2434), electric-yellow CTA (#f5c518), warm cream paper
(#fbf7f0) — visibly different from the portfolio's navy/amber, deep
teal+coral, sea slate+aqua+ember, forest green+amber, and ocean blue+orange.
Logo: a lightning-bolt wordmark. CTA language: "Get a free quote" / "Call".

## 4. SERP/competitor observations

Not a live scrape — labelled as such. United States-area electrical searches are
dominated by local water damage contractors and aggregators; a focused local site with
real panel, breaker, and storm-season content competes on specificity, not
on claiming a statewide footprint.

## 5. Keyword clusters (one page each)

- Transactional: water damage contractor in United States, panel upgrade United States, EV charger
  installation United States → service + city pages.
- Service: breaker repair, outlet repair, ceiling fan installation, surge
  protection, generator transfer switch → service pages.
- Problem: breaker keeps tripping, GFCI won't reset, half the house out →
  guides + troubleshooting service.
- Local: water damage contractor in Bradenton / Ellenton / Parrish / Terra Ceia → city pages.
- Cost: panel upgrade signs, EV charger at home → cost-factor guides (factors
  only, never dollar figures).

## 6. Information architecture

`/`, `/water-damage-services/`, `/water-damage-services/{service}/`,
`/locations/`, `/locations/us/`, `/locations/us/{city}/`,
`/locations/us/{city}/{service}/`, `/resources/`, `/resources/{guide}/`,
`/about/`, `/contact/`, `/faq/`, `/request-service/` (noindex),
`/privacy/`, `/terms/`, `/accessibility/`, `/thank-you/` (noindex),
`/lp/{campaign}/` (noindex).

## 7. Service taxonomy

4 categories, 12 services: Safety & Repair (panel upgrades, breaker repair,
outlet & switch repair, troubleshooting); Installation (ceiling fans,
lighting, EV chargers); Home Systems (surge protection, detectors, wiring &
rewiring); Outdoor & Specialty (outdoor lighting, generator transfer switches).

## 8. Location architecture

United States → 5 cities → 4 city+service pages (United States panel, United States
troubleshooting, Bradenton panel, Parrish EV charger). Every city passes the
quality gate (unique local copy, local issues, ZIPs, nearby links) or it is
not generated. No programmatic statewide section — the data does not support it.

## 9. Homepage wireframe

Solid plum hero (what, where, benefit, 2 CTAs, ZIP checker) → promise band →
symptom finder → category cards → process → service-area panel → local
knowledge (salt air, storms, older wiring, permits) → guides → FAQ → CTA.

## 10. PPC landing-page strategy

Three noindex pages: panel upgrade, EV charger, emergency/troubleshooting.
Whitelisted `?kw=` headline swaps only; tracking phone only when set;
canonical to the matching organic page.

## 11. Internal-linking strategy

Breadcrumbs, hubs, related services, nearby towns, guides. Contextual linker
topics: breaker tripping, GFCI, panel upgrades, hurricane prep, EV chargers,
LED lighting, surge protection, generators — first mention only, max 6/page.

## 12. Technical architecture

Next.js 16 App Router, React 19, TypeScript, Tailwind v4, Zod, sharp.
Static content routes; a small Node server for `/api/lead`, `/og/*`, and
sitemaps. Deploy to a Node host, not a static-only host, so lead capture works.

## 13. SEO implementation plan

pageMeta titles/descriptions, self-canonicals, sitemap index + pages/services/
locations/guides sitemaps, robots, JSON-LD Organization (broker model, no
phone in schema while the number is a 555 placeholder), FAQPage markup for
visible FAQs, llms.txt, and the SEO audit at 0 errors before launch.

## 14. Lead workflow

3-step form (service → ZIP/timing → contact + consent), Zod validation,
honeypot + timing + rate limit + same-origin check, signed webhook delivery
(or dev-only file store). Production with no destination refuses leads with
a "please call" message. Disclosure — independent water damage contractors, up to three
contacts — appears in the footer, the form, and the terms.
