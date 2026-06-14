# pagefrignoca.com — Release Roadmap

_Last updated: 2026-06-14_

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
| R6 — Systems and Process builds | 🟡 Partial | 1 of 3 planned entries shipped (Lead-to-Account); 2 remain |
| R7 — Vendor Report Card | ✅ Shipped | 200-company ground-truth set; provider names now scrubbed (no longer named) |

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
  "approximately 99,000" where it appeared.
- **Vendor-name policy reversed (2026-06-14).** Third-party vendor names are now
  scrubbed sitewide. The Account Hierarchy case lost the "HG Insights" name (title
  and body); the Vendor Report Card no longer names ZoomInfo, Crunchbase, HG Insights,
  Lusha, LeadIQ, or Clearbit; the R6 source notes lost RingLead, DocuSign, and Rattle.
  Only platform/tooling references remain (Salesforce, n8n).
- **Residual-risk items resolved.** Both legal-review flags (the HG Insights name in
  the case title and the six vendors on the Vendor Report Card) were closed by the
  scrub pass above. No vendor-inference chain from prior employment remains on the
  public site.

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
