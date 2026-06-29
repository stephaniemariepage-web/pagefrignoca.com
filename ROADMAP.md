# pagefrignoca.com — Release Roadmap

_Last updated: 2026-06-15_

The site is a portfolio of frameworks and systems Stephanie Frignoca built from the
ground up. Core Account Profile is the flagship and the V1 launch. Everything after
V1 is an incremental release to an already-live site.

## How to read this

- **V1 is the only launch.** The site goes from not-public to live on
  pagefrignoca.com. It ships as one complete site.
- **V2 and V3 are releases, not launches.** The site is already live; each entry
  deploys on its own, whenever it is ready. Order within V2 is flexible.

## Hosting and domain (settled)

- Domain registered through Cloudflare Registrar, 2026-05-18.
- DNS runs on Cloudflare nameservers.
- Hosting: Cloudflare Pages. Registrar, DNS, and host all in one Cloudflare account.
- Deploy connects a git repo to Cloudflare Pages; the custom domain is added in the
  Pages project and Cloudflare writes the DNS record automatically.
- `public/_redirects` handles URL renames at the platform level. After the
  2026-06-14 rename, both prior slugs (`/work/hg-insights-hierarchy` and the
  intermediate `/work/hg-insights-hierarchy-auto-population`) 301 to the current
  `/work/account-hierarchy-auto-population`.

## Status at a glance

| Release | Status | Notes |
|---|---|---|
| R1 — V1 Launch | ✅ Shipped | Live on pagefrignoca.com |
| R1.5 — Writing track | ⏸ Placeholder | Page exists but de-linked from nav and footer until the first post lands; no posts yet |
| R2 — Portfolio index | ✅ Shipped | `/work` is the entry index; cards typed and tagged |
| R3 — Account Hierarchy Auto-Population | ✅ Shipped | Renamed from "HG Insights …" 2026-06-14; vendor name removed from title. Redirect now stale (see Hosting) |
| R4 — Salesforce Business Glossary | 🟡 Not started | Still a coming-soon tile on `/work` |
| R5 — CAP Monitoring Dashboard | 🔁 Folded into CAP | Lives as build item 6 ("An AI-built Command Center") on the CAP case |
| R6 — Systems and Process builds | ✅ Shipped | 3 of 3 core entries shipped (Lead-to-Account, Account Trust, Pricing Operations) |
| R7 — Vendor Report Card | ✅ Shipped | 200-company ground-truth set; provider names now scrubbed (no longer named) |

---

## Priority queue

Work to do next, ahead of the V2/V3 release order below.

- **Add a photo of Stephanie to the portfolio — 🔝 Priority, blocked on asset.**
  Stephanie will supply the image and say where to grab it. Likely homes: the About
  page and/or a small headshot in the site header or footer. Pending: final image,
  placement decision, and sizing/crop. No photo currently anywhere on the site.

---

## R1 — V1 Launch · "pagefrignoca.com goes live" · ✅ Shipped

Built and live: Home, Scorecard, CAP case study, About, deployed via Cloudflare Pages
with SSL.

---

## R1.5 — Writing fast-follow · ⏸ Placeholder

`/field-notes` exists with a placeholder headline ("Field Notes are coming") and a
short preview list of planned topics ("Why composite data quality scores lie," "What
'AI-ready CRM data' actually requires," "Source of record is a hierarchy, not a
vote"). No actual posts yet. As of 2026-06-14 the page is **de-linked from nav and
footer** so nothing routes to the empty placeholder; the links return when the first
post is live. Independent of the V2 portfolio track; timing optional.

---

## R2 — V2 Portfolio index · ✅ Shipped

`/work` is the live index. Featured (CAP) is separated from More entries. Cards tagged
by type (Framework, AI-assisted automation, Systems build, Reference). Coming-soon
tiles are visible but non-clickable.

---

## R3 — V2 Account Hierarchy Auto-Population · ✅ Shipped

Live at `/work/account-hierarchy-auto-population`. Renamed 2026-06-14 from "HG Insights
Hierarchy Auto-Population" to a generic title; the vendor name was pulled from the
title (and body) to close the residual-risk inference chain. Reframed so Stephanie owns
the design and Claude Code is the implementation accelerator. Headline metric on the
case: lift in known parent-account coverage from 6.4% to 10.2% across an account base
of approximately 99,000 (59% relative lift), with zero records corrupted. Absolute
counts dropped from outcomes per the confidentiality pass.

Both prior slugs now 301 to `account-hierarchy-auto-population` via
`public/_redirects` (see Hosting and domain).

---

## R4 — V2 Salesforce Business Glossary · 🟡 Not started

An interactive `/glossary` tool: A-to-Z index, filterable by section and by Current
vs Legacy status. Still a coming-soon tile on `/work`. Most substantial unbuilt entry.

**Depends on:** nothing (can ship as a top-level tool).

---

## R5 — V2 CAP Monitoring Dashboard · 🔁 Folded into CAP

As the roadmap's own fallback predicted, documentation stayed thin and the entry
folded into the CAP case study. Lives as build item 6 on the CAP page: "An AI-built
Command Center." The AI-build positioning sits inside the flagship instead of on its
own tile.

---

## R6 — V2 Systems and Process builds

Originally grouped into three entries. Current state:

- **Lead-to-Account Data Quality Engine — ✅ Shipped.** Deepened with real specifics
  from the source RevOps documentation: the six-group matching waterfall, Master
  Record Rules, Surviving Field Value Rules, three-way matching (Contact → Lead →
  Account), and the sixteen always-on scheduled tasks.
- **Rebuilding Account Trust Across the GTM Stack — ✅ Shipped (2026-06-15).** Live at
  `/work/rebuilding-account-trust`. Sourced from Section 13 (post-QtC GTM data
  updates), Section 17 (2026 Annual Planning enrichment, with the verifiable
  86,115 / 68% account-revenue-refresh metric used as the one named absolute and the
  rest of the field movement as percentages), and Section 21 (phased dedup of
  duplicate active accounts). Framed around the account layer as a dependency graph:
  refresh the firmographic roots, recalculate the derived GTM fields, fix the
  logo/master/sub hierarchy, and govern the change.
- **Pricing Operations at Renewal Scale — ✅ Shipped (2026-06-15).** Live at
  `/work/pricing-operations-renewal-scale`. Internally the "upsell / mass migration"
  work. Sourced from Sections 18 (price-book mass migration, the lead build item), 23
  (finance segmentation gaps stalling invoices), 24 (renewal-owner-on-creation flow),
  and 25 (usage-based revenue scheduling outside CPQ). Framed around building
  controlled paths for the pricing motions standard automation could not safely carry.
- **Trial-to-Sales Lead Flow — ⏸ Hidden.** Tile pulled from `/work` coming-soon row;
  can be re-added if/when written up.
- **Zero Friction Customer Address Collection — 💡 Potential add.** Section 22 of
  the source documentation. RACI shows Owner role across the e-signature + Salesforce
  flows + enrichment/routing tools + VAT trigger. Not currently a tile.

**Scrub policy in force across R6 (updated 2026-06-14):** third-party vendor names
are now scrubbed; only platform/tooling references kept (Salesforce, n8n). Internal
field API names, internal product-line names, individual names, and Confluence URLs
all scrubbed.

---

## R7 — V3 Vendor Report Card · ✅ Shipped

Live at `/work/vendor-report-card`. Grounded on a 200-company ground-truth reference
set built from each company's own website (replaces the earlier 75-company framing).
As of 2026-06-14 the named enrichment and prospecting providers were **scrubbed**; the
card now speaks to enrichment vendors generically rather than by name. This closes the
residual-risk item that was previously flagged for legal review.

---

## Portfolio roster at a glance

| Entry | Type | Status | URL |
|---|---|---|---|
| Core Account Profile | Framework | ✅ Live (flagship) | `/work/core-account-profile` |
| Account Hierarchy Auto-Population | AI-assisted automation | ✅ Live | `/work/account-hierarchy-auto-population` |
| Lead-to-Account Data Quality Engine | Systems build | ✅ Live (deepened 2026-06-02) | `/work/lead-to-account-data-quality-engine` |
| The Vendor Report Card | Framework | ✅ Live | `/work/vendor-report-card` |
| Rebuilding Account Trust Across the GTM Stack | Systems build | ✅ Live (2026-06-15) | `/work/rebuilding-account-trust` |
| Pricing Operations at Renewal Scale | Systems build | ✅ Live (2026-06-15) | `/work/pricing-operations-renewal-scale` |
| Salesforce Business Glossary | Reference / interactive | 🟡 Tile | (none yet) |
| Zero Friction Customer Address Collection | Systems build | 💡 Potential | (no tile yet) |
| CAP Monitoring Dashboard | AI-assisted automation | 🔁 Folded into CAP | (none) |

---

## Cross-cutting concerns

### Confidentiality posture

- About page names employers in its Experience timeline and Background (2026-06-29):
  it functions as a resume. This is the only page that names employers.
- Case studies use "the org where this program ran" framing; no employer attribution
  in case-study bodies.
- All case studies render a small Redaction note (template-level), signaling that
  specific company names, customer data, internal field mappings, exact operational
  telemetry, and proprietary implementation details have been removed or abstracted.
- Metric posture: relative percentages and lift figures retained where they were
  authorized; absolute operational counts dropped; account-base scale rounded to
  "approximately 99,000" where it appeared.
- **Vendor names allowed again (2026-06-29).** The hard line is employer names in
  case studies: previous employers (Cockroach Labs, Lansweeper, Embarcadero
  Technologies) are never named in a case study. The About page is the one exception
  (it functions as a resume and names them). Naming third-party vendors and tools by
  name (ZoomInfo, HG Insights, RingLead, Crunchbase, Lusha, LeadIQ, Clearbit,
  DocuSign, Rattle, etc.) is fine anywhere. This reverses the 2026-06-14 sitewide
  vendor scrub.
- **Optional content backfill (not yet done).** Previously scrubbed vendor names can
  be restored where it strengthens a case: the Vendor Report Card (six enrichment
  vendors), the Account Hierarchy case body, and the R6 source notes. The Account
  Hierarchy case *title* stays generic regardless; the rename was a clarity call, not
  only a scrub. Re-add only where the employer cannot be inferred from the vendor.

### Source material

26 Confluence pages of RevOps documentation (matching rules, master record rules,
surviving field values, scheduled tasks, mass migration processes, address
collection RACI, CPQ/usage forecasting, etc.) from prior employment unlocked the
Lead-to-Account deepening and are available to source the remaining R6 entries
and the potential Zero Friction tile.

### Design

- **Denser layout (2026-06-14).** Section vertical padding halved sitewide for a
  tighter, more product-like rhythm; the About hero-to-Positioning gap was tightened
  further (~96px → ~64px).

### Parked

- **Aesthetic / palette redesign.** A self-contained brutalist-Swiss prototype at
  `src/pages/proto.astro` with a 5-palette switcher; Material Theme Builder JSON
  exports at `_design/figma/`. Both local-only, intentionally untracked.
- **Trial-to-Sales Lead Flow tile.** Hidden from `/work` coming-soon row.
