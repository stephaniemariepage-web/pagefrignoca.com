# pagefrignoca.com — Content Outline (v1)

**Status:** Draft for review, 2026-05-20
**Take (locked):** Variant B. "AI-ready data isn't a tooling problem. It's an honesty problem."
**Design direction (locked):** Dark-mode SaaS operator product site (Linear / Clay references). Not a resume site.
**Voice:** No em dashes. Crisp, confident, slightly cheeky, enterprise-credible, operator-first.
**Framing (locked):** The framework is object-agnostic. Copy uses "record" and "data," not "account": it scores any Salesforce object (Accounts, Contacts, Leads, Opportunities) or any dataset. The only exception is the case study, a true Account-level program that stays factual.

---

## Site architecture

| Page | Path | v1? | Purpose |
|---|---|---|---|
| Home | `/` | v1 | Long-scroll argument. Lands the take, routes to the Scorecard and the case study. |
| Scorecard | `/scorecard` | v1 | The signature interactive piece. Score CRM data in-browser, nothing leaves the machine. |
| The Work | `/work` | v1 | The Core Account Profile case study. Proof the framework is real. |
| About | `/about` | v1 | Who she is, the lane, how to work with her, contact. |
| Writing | `/writing` | fast-follow | Blog. Seeded from LinkedIn posts. Ships after launch. |

**Global elements**
- **Nav:** wordmark left (`Stephanie Frignoca` or `SF` mark); links right: Scorecard, Work, About, Writing (greyed/"soon" until live). LinkedIn icon.
- **Footer:** one-line positioning, email, LinkedIn, "Built and coded by Stephanie. Astro + Tailwind." (the build is itself a credential), copyright Page Frignoca LLC.
- **Per-page private feedback form:** small, unobtrusive "Spot something? Tell me." link opening a form. Community angle, not public comments.
- **LinkedIn anchor:** key sections link out to the matching LinkedIn post for discussion.

---

## Page 1 — Home

Long single-scroll. Each section advances one step of the argument.

### 1. Hero
- **Headline (locked):** "Stop grading your CRM data on a curve."
- **Subhead:** A strong average hides the accounts that are quietly broken. Your ICP scoring, routing, and AI workflows act on those accounts one record at a time, not on the curve.
- **Primary CTA:** Run the Scorecard. **Secondary CTA:** Read the case study.
- Visual: subtle gradient, restrained motion. A single account "score" element that resolves from a healthy-looking average to a failing gated result.

### 2. The problem: averages lie
- **Headline candidate:** "A 95% complete account can still be unusable."
- Composite data-quality scores roll three different questions into one number. One strong dimension carries two weak ones, and the account reads as healthy when it is not.
- Concrete illustration (abstracted, no employer data): an account that is 95% complete, fully standardized, and 20% accurate. Composite says "Near Complete." Reality: every workflow downstream of that account is making decisions on wrong values.
- **The line:** Average is the wrong unit. You do not get partial credit for a system of record.

### 3. Why it matters now: AI inherits your worst dimension
- **Headline candidate:** "AI workflows don't average your data. They act on it."
- ICP scoring, routing, territory planning, and AI agents all consume account records row by row. They inherit the worst dimension of each record, not the portfolio average.
- Signature framing: robots can handle BAU once the data underneath them is trustworthy. They cannot fix a foundation that was never operationally defined as ready.

### 4. The framework: gated readiness
- **Headline candidate:** "Gated readiness: every dimension clears a floor, or the account isn't ready."
- Three quality dimensions, scored separately, never blended away:
  - **Completeness** | is the field populated
  - **Standardization** | is the value in a consistent, usable format
  - **Accuracy** | is the value actually correct
- **Field tiers (weighted):** Core, Supporting, Supplemental. Not every field carries equal weight.
- **Five readiness classes:** Fully Complete (90 to 100), Near Complete (70 to 89), Partial (50 to 69), Poor (30 to 49), Zero Value (0 to 29).
- **The gate:** a strong average cannot mask a fatal weakness. If any critical dimension falls below its floor, the account drops, regardless of the composite. This is the distinctive logic and the honest alternative to a single blended score.

### 5. The Scorecard (signature piece teaser)
- **Headline candidate:** "Score your own CRM data. Right here. Nothing leaves your browser."
- Load a built-in sample dataset or paste your own rows. The Scorecard applies the three dimensions, the field tiers, and the gate, then returns a readiness class per record with a visual breakdown.
- Privacy line: entirely client-side. No upload, no storage, no account.
- **CTA:** Open the Scorecard.

### 6. Proof: the case study
- **Headline candidate:** "I built this for a CRM with roughly 99,000 accounts."
- Short teaser: the Core Account Profile program. Defined what GTM-ready means, scored the full account base, benchmarked enrichment vendors, automated hierarchy population, stood up live monitoring.
- **CTA:** Read the case study.

### 7. About teaser
- One-paragraph positioning: GTM data quality and CRM systems strategist. Turns messy GTM data into trusted, AI-ready revenue infrastructure. BFA in design behind the systems work, Salesforce Certified Administrator.
- **CTA:** More about Stephanie / Work with me.

### 8. Contact / closing CTA
- **Headline candidate:** "Open to the right full-time role, and to consulting through Page Frignoca LLC."
- Email, LinkedIn. Private feedback form link.

---

## Page 2 — Scorecard

The signature interactive piece. React island inside Astro. Client-side only.

### Sections
1. **Framing.** One screen: what this is, what it does, why it exists. "A generalized, public version of a framework I built for an enterprise CRM."
2. **How it works.** The three dimensions, field tiers, five readiness classes, and the gate. Short, visual, reuses Home section 4 language without repeating it verbatim.
3. **The tool (interactive).**
   - Step 1: choose a built-in sample dataset, or paste your own rows (CSV-style).
   - Step 2: live scoring per record across the three dimensions.
   - Step 3: gated readiness class per record, plus a portfolio rollup that explicitly shows how many accounts the gate caught that a composite score would have passed.
   - Visual breakdown: per-dimension bars, the gate marked clearly.
4. **Honest methodology note.** This is a generalized model for illustration, not a vendor product and not a substitute for governance. Field tiers and floors are sensible defaults; real implementations tune them.
5. **CTA.** "Want this run against your actual CRM, with your fields and your tiers? Let's talk." Plus LinkedIn discussion link.

**Resolved 2026-05-20:** the working interactive ships in v1. Launch waits on it. The page and the React island get built together, not staged.

---

## Page 3 — The Work (Core Account Profile case study)

The proof. Tells the story of building CAP. Generalized and scrubbed of proprietary internal data.

### Sections
1. **Overview.** Account data is the foundation of every GTM motion: segmentation, territory planning, ICP modeling, routing, reporting, and AI use cases. Its quality varied by when, who, and how each record was created. The Core Account Profile program set a shared standard for what a GTM-ready account looks like and built the measurement around it.
2. **The problem.** Five interconnected failures: no shared definition of a complete account; fragmented ownership across teams and tools; inconsistent records from 30+ creation sources; standardization gaps breaking downstream systems; no accuracy validation framework.
3. **The approach: the framework.** Field tiers, three dimensions, gated readiness logic, five readiness classes. (Same framework as the Scorecard. This page shows it applied at scale.)
4. **What I built.**
   - A weighted, tiered scoring model with gated readiness logic, applied to roughly 99,000 accounts to establish a baseline.
   - A **Vendor Report Card**: benchmarked enrichment and prospecting vendors against a roughly 75-company sample, graded by field, into a Platinum / Gold / Silver / Bronze hierarchy and a Best Source by Field model.
   - **Parent Account auto-population**: an n8n workflow populating hierarchy from corporate-parent and global-HQ identifiers, with self-parenting prevention, overwrite protection, and chunked batch processing.
   - **Continuous monitoring**: an AI-assisted dashboard connecting Salesforce and Snowflake, tracking readiness by team, source, and timeframe.
5. **Outcomes.** Baseline readiness scoring across the full account base, usable for prioritization and book selection. A vendor hierarchy that replaced assumption-based source-of-record decisions. Automated hierarchy population improving roll-up reporting. Live visibility into data health.
6. **The portable POV.** What carries to any company: composite scores lie, gated readiness is the honest alternative, and data quality is a behavioral problem dressed up as a tooling problem.

**Resolved 2026-05-20:** name the employer (Cockroach Labs) and the role. Keep every internal specific abstracted. Named individuals, proprietary internal data, and anything not safe to publish stay out regardless.

---

## Page 4 — About

### Sections
1. **Positioning.** Who she is in two sentences. GTM data quality and CRM systems strategist. Works at the intersection of Salesforce data architecture, enrichment governance, RevOps process design, and AI-ready data.
2. **The lane.** What she actually does: builds the frameworks, scoring models, and governance systems that make enterprise data trustworthy. Not "data cleanup." Operational definitions of ready.
3. **Background.** Salesforce Certified Administrator. BFA in Communication Design (the design eye is why this site looks like a product, not a template). Career arc kept short and abstracted; Cockroach Labs and Lansweeper are separate companies, never implied as continuous.
4. **How to work with me.** Open to the right full-time role. Also takes selective consulting and contract work through Page Frignoca LLC. What an engagement looks like.
5. **Contact.** Email, LinkedIn, private feedback form.

---

## Page 5 — Writing (fast-follow, post-launch)

Blog via Astro content collections, Markdown/MDX. Seed posts, each anchored to a LinkedIn post for discussion:
- "What AI-ready data actually means." Expands the layoff-post thesis.
- "Composite data quality scores lie." The averages argument, long form.
- "Data quality is a behavioral problem." The behavioral take.
- The "Data Dietitian" philosophy: veracity over volume.

---

## Build order (proposed)

1. Scaffold Astro + Tailwind, set the dark-mode design system from the chosen mockup direction.
2. Home (highest-traffic, lands the take).
3. The Work case study (highest-credibility, do the confidentiality scrub here).
4. About.
5. Scorecard page + React island.
6. Deploy to Cloudflare Pages or Vercel, connect pagefrignoca.com.
7. Fast-follow: Writing / blog.

---

## Decisions

**Resolved 2026-05-20:**
- Hero headline: "Stop grading your CRM data on a curve."
- Case study names the employer (Cockroach Labs), internal specifics abstracted.
- The interactive Scorecard ships in v1; launch waits on it.

**Still open:**
1. **Mockup direction:** A or B (or a merge) drives the design system.
