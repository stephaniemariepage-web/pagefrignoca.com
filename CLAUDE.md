# CLAUDE.md — pagefrignoca.com

Operating manual for Claude Code working in this repo. This is the portfolio site
for Stephanie Frignoca. For deep CAP framework detail, see
`_source-material/CAP-FRAMEWORK.md`.

## What this is

A custom-coded personal portfolio site at pagefrignoca.com. It positions Stephanie
as a GTM data quality and CRM systems strategist. The centerpiece is an interactive
CRM Data Health Scorecard, a generalized, public version of her Core Account Profile
(CAP) framework.

## Stack and how to run

- Astro 6 + Tailwind 4. React island for the Scorecard. astro-icon is installed.
- Node is installed locally at `~/.local/node` (on PATH via `~/.zshrc`). It is not a
  system-wide install.
- Dev server: `npm run dev`, then open http://localhost:4321
- Production build: `npm run build`

## Repo structure

- `src/pages/` — `index.astro` (Home), `scorecard.astro`, `work.astro`, `about.astro`
- `src/layouts/Base.astro`, `src/components/` — Nav, Footer, ReadinessCard, Scorecard
- `src/scorecard/` — Scorecard logic: `model.ts`, `generate.ts` (synthetic data),
  `score.ts` (scoring engine)
- `src/styles/global.css` — Tailwind import and the design tokens
- `copy/` — approved page copy in Markdown. `copy/home.md` is the copy of record for Home.
- `CONTENT-OUTLINE.md` — the content map for the whole site
- `_source-material/` — CAP framework, background, LinkedIn posts, exec-summary images
- `PROJECT-KICKOFF.md` — the original brief

## Voice rules (hard)

- **No em dashes anywhere.** Use commas, periods, semicolons, pipes, parentheses, colons.
- Preferred verbs: built, defined, operationalized, benchmarked, standardized, governed,
  translated, enabled, reduced ambiguity, created measurement around.
- Avoid: leveraged, synergy, spearheaded, world-class, transformational, "AI-powered"
  without substance, generic "data cleanup" language.
- Tone: crisp, confident, slightly cheeky, enterprise-credible, operator-first.
- Never invent dates, headcounts, revenue figures, titles, reporting lines, or
  quantified outcomes. Cockroach Labs and Lansweeper are separate companies; never
  imply continuity.

## Design direction

Dark-mode SaaS operator product site, Linear and Clay as references. Not a generic
template, not a resume site. Custom design system; tokens live in `global.css`.
daisyUI was trialed and removed in favor of the custom system.

## Locked decisions

- Take (Variant B): "AI-ready data isn't a tooling problem. It's an honesty problem."
- Hero headline: "Stop grading your CRM data on a curve."
- v1 scope: Home, Scorecard, Work, About. Writing/blog is a fast-follow.
- Scorecard v1 is sample-only: synthetic data generated client-side, no external
  dataset. "Paste your own data" is a coming-soon button pending a legal review.
- Scorecard gate: a single 60 floor; any dimension below it classes the record by
  its weakest dimension.
- Case study (Work page) names the employer (Cockroach Labs); internal specifics
  stay abstracted.

## Confidentiality

The CAP material was internal to Cockroach Labs. The framework, methodology, and
approach are publishable. Do not publish internal data, named individuals, vendor
specifics tied to the employer, or anything not safe for a public site. See the
confidentiality note in `PROJECT-KICKOFF.md`.

## CAP framework

`_source-material/CAP-FRAMEWORK.md` is the full reference: field tiers, the three
dimensions, gating, diagnostic slices, the vendor benchmark, and the Mica info-icon
hover definitions. Treat it as reference, not as site copy. Generalize and scrub
before anything goes public.
