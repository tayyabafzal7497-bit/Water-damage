# Deploying Water Damage Loan

This site is a Next.js app with a small Node server. The lead-capture API
(`/api/lead`), social share images (`/og/*`), and sitemaps all run
server-side — so deploy it to a **Node host, not a static-only host**.
(Drag-and-drop static hosting would silently break lead capture.)

## Option A — Vercel (recommended, ~10 minutes)

1. Push this folder to a GitHub repo (or import it directly).
2. Go to [vercel.com](https://vercel.com) → Add New → Project → import the repo.
   Framework preset: **Next.js** (auto-detected). No build settings to change.
3. Add environment variables (Project → Settings → Environment Variables).
   At minimum:
   - `NEXT_PUBLIC_SITE_URL` = `https://waterdamagesloan.com`
   - `NEXT_PUBLIC_BUSINESS_PHONE` / `NEXT_PUBLIC_BUSINESS_PHONE_E164` = the
     LeadSmart number (replaces the temporary `(888) 555-0117`)
   - `LEAD_WEBHOOK_URL` + `LEAD_WEBHOOK_SECRET` = where leads get delivered
   - `NEXT_PUBLIC_GTM_ID` = your Google Tag Manager ID
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`
4. Deploy. Then add your domain: Project → Settings → Domains →
   `waterdamagesloan.com` (+ `www`). Point DNS at Vercel when prompted.
   HTTPS is automatic.

## Option B — Netlify

1. Import the repo at [netlify.com](https://netlify.com). Netlify auto-detects
   Next.js and installs its Next.js Runtime — keep it enabled.
2. Set the same environment variables as above (Site settings → Environment).
3. Add the domain under Site settings → Domain management; HTTPS is automatic.

## Option C — Any VPS (Ubuntu + Node 20+)

```bash
npm install
npm run build
# set env vars in .env.production (see .env.example), then:
npm start        # serves on port 3000
```

Put it behind Caddy/Nginx for HTTPS, or use a process manager (pm2/systemd)
to keep it running. Security headers and redirects are already configured in
`next.config.ts`.

## After deploy — finish the launch checklist

These still need a human (full list in `LAUNCH.md`):

- [ ] Buy `waterdamagesloan.com` and point DNS to your host (do this first —
      it was unregistered as of 2026-10-07; re-check at purchase time)
- [ ] Replace the `(888) 555-0117` placeholder with the LeadSmart number
- [ ] Set `LEAD_WEBHOOK_URL`/`LEAD_WEBHOOK_SECRET` and test a live lead
      end-to-end (the API refuses leads with no destination configured)
- [ ] Legal review of Privacy / Terms / SMS-consent wording (TCPA)
- [ ] USPTO Class 37 check on "Water Damage Loan" + United States entity check
- [ ] Contractor license number — shown and schema'd only when real
- [ ] Confirm 24/7 dispatch is actually staffed before advertising it
- [ ] Google Search Console + Bing Webmaster Tools: submit the sitemap
      (`/sitemap.xml`); generate an IndexNow key and run `npm run indexnow`
- [ ] PageSpeed / Core Web Vitals check on the live URL
- [ ] **Visual QA on a real phone** — responsive layout was never visually
      verified (test browser couldn't reach the local server)
- [ ] Google Business Profile → real reviews only (`reviews.ts` — call-brand
      rule: never fake reviews)

## What's in this package

- Full Next.js 16 source: sitemap URLs for the United States-area market
  (services, city pages, guides, PPC pages) — SEO audit result is recorded
  in the delivery report, not claimed here
- Lead system: validated form + HMAC-signed webhook API (`/api/lead`);
  production refuses leads with no destination configured
- SEO: sitemaps, Schema.org JSON-LD, OG images, `LAUNCH.md` checklist,
  IndexNow script, measurement docs (`docs/MEASUREMENT.md`)
- Design: deep plum + burgundy + electric yellow (distinct from the portfolio's navy/amber, teal+coral, slate+aqua+ember, forest+amber, and ocean+orange)
- Excluded: `node_modules/`, `.next/` (rebuilt by `npm run build`)

Verified 2026-10-09: fresh `next build` exit 0, `npm run audit:seo` 0 errors.
