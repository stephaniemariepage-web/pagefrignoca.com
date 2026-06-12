# pagefrignoca.com — Release Roadmap

_Last updated: 2026-06-02_

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
- `public/_redirects` handles URL renames at the platform level (currently one
  entry: the old HG Insights slug 301s to the title-aligned slug).

## Status at a glance

| Release | Status | Notes |
|---|---|---|
| R1 — V1 Launch | ✅ Shipped | Live on pagefrignoca.com |
| R1.5 — Writing track | ⏸ Placeholder | Field Notes page exists with "First on the list" preview; no posts yet |
| R2 — Portfolio index | ✅ Shipped | `/work` is the entry index; cards typed and tagged |
| R3 — HG Insights Hierarchy Auto-Population | ✅ Shipped | URL aligned with title; 301 redirect for the old slug |
| R4 — Salesforce Business Glossary | 🟡 Not started | Still a coming-soon tile on `/work` |
| R5 — CAP Monitoring Dashboard | 🔁 Folded into CAP | Lives as build item 6 ("An AI-built Command Center") on the CAP case |
| R6 — Systems and Process builds | 🟡 Partial | 1 of 3 planned entries shipped (Lead-to-Account); 2 remain |
| R7 — Vendor Report Card | ✅ Shipped | Now anchored on a 200-company ground-truth reference set |

---

## R1 — V1 Launch · "pagefrignoca.com goes live" · ✅ Shipped

Built and live: Home, Scorecard, CAP case study, About, deployed via Cloudflare Pages
with SSL.

---

## R1.5 — Writing fast-follow · ⏸ Placeholder

`/field-notes` exists with a placeholder headline ("Field Notes are coming") and a
short preview list of planned topics ("Why composite data quality scores lie," "What
'AI-ready CRM data' actually requires," "Source of record is a hierarchy, not a
vote"). No actual posts yet. Independent of the V2 portfolio track; timing optional.

---

## R2 — V2 Portfolio index · ✅ Shipped

`/work` is the live index. Featured (CAP) is separated from More entries. Cards tagged
by type (Framework, AI-assisted automation, Systems build, Reference). Coming-soon
tiles are visible but non-clickable.

---

## R3 — V2 HG Insights Hierarchy Auto-Population · ✅ Shipped

Live at `/work/hg-insights-hierarchy-auto-population`. URL was realigned with the
title; the old `/work/hg-insights-hierarchy` URL 301-redirects via
`public/_redirects`. Reframed so Stephanie owns the design and Claude Code is the
implementation accelerator. Headline metric on the case: lift in known parent-account
coverage from 6.4% to 10.2% across approximately 100,000 accounts (59% relative lift),
with zero records corrupted. Absolute counts dropped from outcomes per the
confidentiality pass.

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
- **Rebuilding Account Trust Across the GTM Stack — 🟡 Not started.** Best-sourced
  of the unbuilt R6 entries: Section 13 (post-QtC GTM data updates), Section 17 (2026
  Annual Planning impact with verifiable 86,115 / 68% account-revenue-refresh metric),
  Section 21 (phased dedup approach).
- **Pricing Operations at Renewal Scale — 🟡 Not started.** Sections 18, 23, 24, 25
  (CPQ mass migration, finance segmentation, renewal owner flow, MSP/ISV
  forecasting).
- **Trial-to-Sales Lead Flow — ⏸ Hidden.** Tile pulled from `/work` coming-soon row;
  can be re-added if/when written up.
- **Zero Friction Customer Address Collection — 💡 Potential add.** Section 22 of
  the source documentation. RACI shows Owner role across DocuSign + Salesforce flows
  + RingLead + Rattle + VAT trigger. Not currently a tile.

**Scrub policy in force across R6:** vendor names stay (RingLead, ZoomInfo,
DocuSign, etc.); internal field API names, internal product-line names, individual
names, and Confluence URLs all scrubbed.

---

## R7 — V3 Vendor Report Card · ✅ Shipped

Live at `/work/vendor-report-card`. Now grounded on a 200-company ground-truth
reference set built from each company's own website (replaces the earlier
75-company framing). Names six enrichment and prospecting providers (ZoomInfo,
Crunchbase, HG Insights, Lusha, LeadIQ, Clearbit) per operator decision; this is
the one remaining residual-risk item flagged for legal review.

---

## Portfolio roster at a glance

| Entry | Type | Status | URL |
|---|---|---|---|
| Core Account Profile | Framework | ✅ Live (flagship) | `/work/core-account-profile` |
| HG Insights Hierarchy Auto-Population | AI-assisted automation | ✅ Live | `/work/hg-insights-hierarchy-auto-population` |
| Lead-to-Account Data Quality Engine | Systems build | ✅ Live (deepened 2026-06-02) | `/work/lead-to-account-data-quality-engine` |
| The Vendor Report Card | Framework | ✅ Live | `/work/vendor-report-card` |
| Salesforce Business Glossary | Reference / interactive | 🟡 Tile | (none yet) |
| Rebuilding Account Trust Across the GTM Stack | Systems build | 🟡 Tile | (none yet) |
| Pricing Operations at Renewal Scale | Systems build | 🟡 Tile | (none yet) |
| Zero Friction Customer Address Collection | Systems build | 💡 Potential | (no tile yet) |
| CAP Monitoring Dashboard | AI-assisted automation | 🔁 Folded into CAP | (none) |

---

## Cross-cutting concerns

### Confidentiality posture

- About page sector-abstracted for both employers (no company names).
- Case studies use "the org where this program ran" framing; no employer attribution
  in case-study bodies.
- All case studies render a small Redaction note (template-level), signaling that
  specific company names, customer data, internal field mappings, exact operational
  telemetry, and proprietary implementation details have been removed or abstracted.
- Metric posture: relative percentages and lift figures retained where they were
  authorized; absolute operational counts dropped; account-base scale rounded to
  "approximately 100,000" where it appeared.
- Vendor names retained per operator decision (ZoomInfo, HG Insights, Crunchbase,
  Lusha, LeadIQ, Clearbit, RingLead, DocuSign, etc.).
- **Residual risk held for employment-lawyer review:** the HG Insights vendor name
  in the case-study title and the six vendors named on Vendor Report Card both
  create an inference chain from prior employment (named on LinkedIn) to vendor
  procurement detail. Operator-credible but not airtight under a broad PIIA.

### Source material

26 Confluence pages of RevOps documentation (matching rules, master record rules,
surviving field values, scheduled tasks, mass migration processes, address
collection RACI, CPQ/usage forecasting, etc.) from prior employment unlocked the
Lead-to-Account deepening and are available to source the remaining R6 entries
and the potential Zero Friction tile.

### Parked

- **Aesthetic / palette redesign.** A self-contained brutalist-Swiss prototype at
  `src/pages/proto.astro` with a 5-palette switcher; Material Theme Builder JSON
  exports at `_design/figma/`. Both local-only, intentionally untracked.
- **Trial-to-Sales Lead Flow tile.** Hidden from `/work` coming-soon row.
