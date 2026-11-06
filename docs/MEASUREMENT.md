# Water Damage Loan — Measurement

## Events (dataLayer)

`call_click`, `form_start`, `form_step`, `service_selected`,
`location_selected`, `form_error`, `form_submit` (only after server 200),
`cta_click`. `quote_request`/`schedule_request` map to the quote form submit.

## GTM

Loads ~2.5s after interactive, only when `NEXT_PUBLIC_GTM_ID` is set.
Consent Mode: add before any ad spend (not wired by default).

## Attribution

30-day first-party localStorage store: utm_source/medium/campaign, gclid,
gbraid, wbraid, landing page, derived channel. Attached to every lead payload
and the signed webhook.

## CPL economics (water damage work)

LeadSmart water damage work pays per **booked appointment** (CPL), observed
$16.50–$47.00, median ≈ $38.50. Track booked-appointment conversion from raw
leads separately from cost-per-lead — a $38.50 payout on a 25% book rate is a
$9.60 effective revenue per raw lead. Set PPC bids from that number, not the
headline payout.

## Offline conversions

Upload booked jobs keyed by gclid for Smart Bidding once volume allows.
