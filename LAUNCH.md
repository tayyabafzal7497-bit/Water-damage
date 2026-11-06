# Launch checklist — Water Damage Loan

Tick these off in order before taking paid traffic.

- [ ] Point DNS for `waterdamagesloan.com` (+ `www`) at the Node host; HTTPS on.
- [ ] Replace the temporary phone `(888) 555-0117` with the LeadSmart number
      (env: `NEXT_PUBLIC_BUSINESS_PHONE` / `NEXT_PUBLIC_BUSINESS_PHONE_E164`).
      The 555 number is fictional and is excluded from structured data.
- [ ] Set `LEAD_WEBHOOK_URL` + `LEAD_WEBHOOK_SECRET` so leads are delivered;
      production with no destination refuses leads with a "please call" message.
- [ ] Google Search Console: Domain property, submit `/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console, then `npm run indexnow`.
- [ ] `npm run audit:seo` on staging = 0 errors before submitting sitemaps.
- [ ] Trademark / entity check (USPTO + United States) — not yet run.
- [ ] License number, email, hours — set only when verified; never invent them.
- [ ] Legal review of Privacy/Terms; confirm SMS consent wording.
- [ ] GTM + Consent Mode, GA4, Ads conversions if paid traffic is used.
- [ ] Spot-check pages in Google's Rich Results Test; run PageSpeed Insights.
- [ ] Remember the model: electrical is PAY-PER-CALL, not CPL. Do not apply
      CPL payout math to this site. United States data (2026-10-30): 2 ZIPs at
      $69.30; United States nationwide: 1,270 ZIPs, avg $35.49, top $69.30.
- [ ] Scope honesty: this is a 5-town United States-area site. Do not claim
      statewide coverage without new verified market data.
