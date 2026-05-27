# pagefrignoca.com — Release Roadmap

_Last updated: 2026-05-22_

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

---

## R1 — V1 Launch · "pagefrignoca.com goes live"

**Order:** 1. **Atomic:** ships as one complete site.
**Already built:** Home, Scorecard.

Ships in this release:

- CAP case study — `copy/work.md`, then `work.astro`. Full Core Account Profile
  story, confidentiality-scrubbed. Includes the automated Salesforce scoring-field
  updates.
- About page — `copy/about.md`, then `about.astro`.
- Final pass — readiness-label consistency, production build check, scrub review.
- Deploy — initialize git, create Cloudflare Pages project, connect pagefrignoca.com,
  SSL.

**Depends on:** nothing. Gates every release below.

---

## R1.5 — Writing fast-follow · optional, post-launch

**Order:** any time after R1. **Incremental.**

Ships:

- `/writing` blog (Astro content collection), seeded from LinkedIn posts.

**Depends on:** R1 live. Independent of the V2 portfolio track. Timing is optional.

---

## R2 — V2 · Portfolio index · "the site becomes a portfolio"

**Order:** 2, first V2 release. **Atomic.**

Ships:

- `/work` converts from a single case study to an index of entries.
- CAP moves to `/work/core-account-profile` as the featured flagship.
- Astro content-collection scaffolding, so every later entry is a new file.
- Entry cards tagged by type (Framework, AI build, Systems build) and employer.

**Depends on:** R1. Must ship before any other V2 entry.

---

## R3 — V2 · HG Insights Hierarchy Auto-Population · AI-assisted build

**Order:** 3. **Incremental.** Best-documented entry.

Ships:

- `/work/hg-insights-hierarchy` — the conversation-history story of building the
  n8n workflow with Claude Code.

**Scrub:** internal n8n URL, internal field API names, the named internal dedup
framework, employer brand specifics.
**Depends on:** R2.

---

## R4 — V2 · Salesforce Business Glossary · interactive reference

**Order:** 4. **Incremental.** Larger build than a case study.

Ships:

- An interactive Salesforce glossary with an A-to-Z index, filterable by section
  and by Current vs Legacy status. Likely a top-level tool (`/glossary`) alongside
  the Scorecard, since it is a search-traffic asset.
- Positioned as a modern Salesforce vocabulary reference: what each term used to
  mean, whether it was retired, what it means now, what it became. A senior
  practitioner's guide to current platform language.

**Depends on:** R2, or can ship independently as a top-level tool.

---

## R5 — V2 · CAP Monitoring Dashboard · AI-assisted build

**Order:** 5. **Incremental.** Limited documentation.

Ships:

- `/work/cap-dashboard` — the dashboard built with the company's internal
  Claude-powered assistant. If documentation stays thin, folds into the CAP case
  study as a sub-section instead of a standalone entry.

**Depends on:** R2.

---

## R6 — V2 · Systems and Process builds · RevOps engineering

**Order:** 6. **Incremental.** Limited documentation. Suggested grouping into three
entries:

- Lead and Account Matching and Deduplication (dedup on entry, ad hoc dedup,
  lead-to-account mapping).
- Lead Routing Rebuild (Lansweeper).
- Zero-Friction Address Collection (Lansweeper).

**Scrub:** Lansweeper entries attributed to Lansweeper, kept clearly separate from
the Cockroach Labs work.
**Depends on:** R2.

---

## R7 — V3 · Enrichment-Vendor use case · the Vendor Report Card

**Order:** 7. **Incremental.** Not drafted enough yet, hence V3.

Ships:

- `/work/enrichment-vendor-strategy` — the Salesforce-to-enrichment-vendor document
  and use case.

**Depends on:** R2.

---

## Portfolio roster at a glance

| Entry | Type | Release | Docs |
|---|---|---|---|
| Core Account Profile | Framework | R1 (flagship) | Strong |
| HG Insights Hierarchy Auto-Population | AI build | R3 | Strong |
| Salesforce Business Glossary | Interactive reference | R4 | Real artifact |
| CAP Monitoring Dashboard | AI build | R5 | Limited |
| Lead and Account Matching and Dedup | Systems build | R6 | Limited |
| Lead Routing Rebuild (Lansweeper) | Systems build | R6 | Limited |
| Zero-Friction Address Collection (Lansweeper) | Systems build | R6 | Limited |
| Enrichment-Vendor use case | Framework / use case | R7 | Draft pending |
