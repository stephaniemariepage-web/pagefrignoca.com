# The Work — Core Account Profile (Case Study Copy, v1)

**Status:** Draft v1 for review, 2026-05-22
**Page:** `/work`
**Voice check:** no em dashes. Crisp, confident, slightly cheeky, enterprise-credible, operator-first.
**Confidentiality (locked, updated 2026-05-27):** Case studies do not name the employer. The work is positioned by what was built, not by where. Every internal specific stays abstracted. No named individuals, no proprietary internal data, no vendor-by-vendor benchmark results, no internal field acronyms, no exact weights. The framework and the methodology are the publishable part.

Brackets `[ ]` are build/design notes, not copy.

---

## Page header

**Eyebrow:** Case study

**Title:** Core Account Profile

**Standfirst:**
The program behind the framework. The Core Account Profile defined what a ready account record looks like, scored roughly 99,000 of them, benchmarked the enrichment vendors writing to them, automated the hierarchy underneath them, and put the result back into Salesforce where the GTM teams actually work.

[Build note: replaces the current placeholder paragraph and the "In progress" card on `/work`.]

---

## Section 1 — Overview

**Headline**
Account data is the foundation every GTM motion is built on. Nobody owned whether it was any good.

**Body**
Segmentation, territory planning, ICP modeling, routing, reporting, and increasingly AI workflows all run on account data. In the org where this program ran, the quality of that data varied with when a record was created, who created it, and how it entered the system. There was no shared definition of a GTM-ready account, and no single owner for account data quality.

The Core Account Profile set that definition and built the measurement around it. It defines which fields matter, how account quality is scored, which vendors to trust for which fields, and where in the process quality breaks down. It scored the full account base, roughly 99,000 records, against that standard.

**Pull line**
A field having a value is not the same as a field you can run a GTM motion on.

---

## Section 2 — The problem

**Headline**
Five failures, compounding.

**Intro**
Account data quality was not one issue. It was five, and each one made the others worse.

**The five** [styled as a numbered set]
1. **No shared definition of a complete account.** No documented minimum field standard, so every team worked from its own assumption about what "good" looked like.
2. **Fragmented ownership.** Revenue Operations, Marketing Operations, Enablement, and Sales all wrote to account data through different tools and cadences, with no single owner for its quality.
3. **Inconsistent records at the door.** Accounts entered from more than thirty sources. Some produced clean, structured records. Long-tail sources introduced inconsistency that weakened the whole base.
4. **Standardization gaps broke downstream systems.** Inconsistent country, industry, vertical, and address values quietly degraded territory assignment, segmentation, reporting, and automation.
5. **No accuracy validation.** Multiple vendors wrote to the same key fields with no defined source hierarchy, and values were rarely revalidated once populated.

**Pull line**
Field population was being treated as field quality. They are not the same measurement.

---

## Section 3 — The approach: the framework

**Headline**
Gated readiness: measure three dimensions, and refuse to average them away.

**Body**
The Core Account Profile scores every account on three dimensions, separately:

- **Completeness** | is the field populated
- **Standardization** | is the value in a consistent, usable format
- **Accuracy** | is the value actually correct, tested against cross-field logic, multiple vendor sources, and recency

Fields are tiered first. Core fields carry the most weight, Supporting fields less, Supplemental fields little or none, so a record cannot look ready on the strength of nice-to-have metadata while missing what matters.

The three dimension scores roll up into one **Core Account Readiness** result. The rule that keeps the result honest is the gate: if any dimension falls below its floor, the record drops to a failing readiness class, no matter how strong the average looks. A composite score lets one strong dimension carry two weak ones. The gate does not.

[Build note: this is the same framework the Scorecard runs. Link to `/scorecard`. Reuse the gated-readiness language from Home section 4 without repeating it verbatim. The five readiness classes are Ready, Near Ready, Partially Ready, Low Readiness, Not Ready. Readiness is the composite verdict; Completeness is one of the three dimensions, not a synonym for it.]

**Pull line**
An account is only as ready as its weakest dimension. The score should say so out loud.

---

## Section 4 — What I built

**Headline**
What I built.

**Builds** [styled as a set of cards or a list]

**The scoring model.** A weighted, tiered model that scores Completeness, Standardization, and Accuracy for each account, applies the gate, and returns a readiness class. Run against the full account base, roughly 99,000 records, to establish a baseline.

**Diagnostic slices.** The same scores cut by creation timeframe, creating team, and creation source, so data quality stopped being one number and became a map of where in the process quality was breaking down.

**The Vendor Report Card.** A benchmark of the enrichment and prospecting vendors against a roughly 200-company reference sample, graded by field instead of by vendor reputation. The output was a Platinum, Gold, Silver, and Bronze hierarchy and a Best Source by Field model, which replaced assumption-based source-of-record decisions with evidence.

**Parent Account auto-population.** An n8n workflow that populated account hierarchy from corporate-parent and global-headquarters identifiers, with self-parenting prevention, overwrite protection so existing values were never clobbered, and a master-record selection waterfall for when multiple accounts shared a parent.

**Readiness, written back to Salesforce.** The score and grade for each dimension and for overall readiness were operationalized as account-level Salesforce fields, refreshed automatically on a schedule. Readiness stopped living in a workbook and started living in the CRM, where it could drive list views, reporting, routing, and prioritization directly.

**Continuous monitoring.** An AI-assisted dashboard connecting Salesforce and Snowflake, tracking readiness by team, source, and timeframe, so data quality could be watched as an operating metric instead of audited once a year.

[Build note: Parent Account auto-population and the monitoring dashboard each get a short mention here only. Both become their own portfolio entries in V2; cross-link them when they ship.]

---

## Section 5 — Outcomes

**Headline**
What changed.

**Body** [styled as a list]
- A baseline readiness score across the full account base, usable for prioritization, remediation, and book selection.
- A vendor hierarchy grounded in benchmarked evidence, replacing "this vendor is just better" with "this vendor is better for this field."
- Automated hierarchy population, improving roll-up reporting and enterprise account visibility.
- Readiness scores live in Salesforce and on a live dashboard, so data quality became visible to the teams who create the data and depend on it.

[Build note: no invented metrics. These are capability outcomes, not performance claims, and they stay that way.]

**Pull line**
The goal was never a cleaner spreadsheet. It was account data the business could make decisions on.

---

## Section 6 — The portable POV

**Headline**
What carries to any company.

**Body**
The Core Account Profile was built for one Salesforce org, but the thinking is not specific to it:

- Composite data quality scores flatter you. A single blended number hides the records that are quietly broken.
- Gated readiness is the honest alternative. Measure each dimension, and do not let a strong average buy back a fatal weakness.
- Data quality is a behavioral problem dressed up as a tooling problem. The fix is shared definitions, clear ownership, and measurement, not another vendor.

**Pull line**
Robots can run the motion once the data underneath them is trustworthy. They cannot define "ready" for you.

[CTA] Run the Scorecard → `/scorecard` (a generalized, public version of this framework)
[CTA] More about how I work → `/about`

---

## CTA + routing map (reference)

| Element | Section | Destination |
|---|---|---|
| Run the Scorecard | Section 6 | `/scorecard` |
| More about how I work | Section 6 | `/about` |
| Back to home | Page footer | `/` |

---

## Notes for the build (not copy)

- This page stays Account-specific and factual. It is a true story about an Account-level program. The object-agnostic "record" framing belongs on Home and the Scorecard, not here.
- Confidentiality scrub already applied: no vendor names, no named individuals, no internal field API names or acronyms, no exact field weights, no vendor-by-vendor grades. "Roughly 99,000" accounts and a "roughly 200-company" benchmark sample are approved as methodology scale, not sensitive data.
- Layout intent: reuse the design system from Home and the Scorecard. The five builds in Section 4 want a card treatment. No stock imagery.
