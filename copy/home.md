# Home — Full Copy (v1)

**Status:** Draft v2 for review, 2026-05-20
**Page:** `/`
**Voice check:** no em dashes. Crisp, confident, slightly cheeky, operator-first.

Brackets `[ ]` are build/design notes, not copy.

**Framing note (applies site-wide):** the framework is object-agnostic. It scores any record in any Salesforce object (Accounts, Contacts, Leads, Opportunities) or any dataset at all. Copy uses "record" and "data," not "account," except in the case study, which is a true story about an Account-level program and stays factual.

---

## Section 1 — Hero

**Headline**
Stop grading your CRM data on a curve.

**Subhead**
A strong average hides the records that are quietly broken. Your routing, scoring, reporting, and AI workflows act on those records one at a time, not on the curve.

[Primary CTA button] Run the Scorecard  →  routes to `/scorecard`
[Secondary CTA link] Read the case study  →  routes to `/work/core-account-profile`

[Visual: a compact "readiness card" for a single record. On load it shows a composite score of 88 with a Near Ready label, looking healthy. Three thin dimension bars then animate in: Completeness and Standardization sit high, Accuracy drops below a marked floor line. The card flips to a failing state (Low Readiness, Not Ready). Plays once, restrained motion. No stock imagery. Built from type, bars, and a floor line, Linear-style. Final asset locked with the design system.]

---

## Section 2 — The problem: averages lie

**Headline**
A 95%-complete record can still be unusable.

**Body**
A composite data quality score rolls three different questions into one number: is the field filled in, is the value formatted consistently, is the value actually correct. One strong answer carries two weak ones, and the record reads as healthy when it is not.

Take a record that is 95% complete, perfectly standardized, and 20% accurate. A composite score calls it Near Ready. In reality, one in five of its values is wrong, and every workflow downstream is making decisions on those wrong values.

**Pull line**
If teams have to verify it somewhere else, it is not the system of record. No curve rounds that up.

---

## Section 3 — Why it matters now: AI inherits your worst dimension

**Headline**
AI workflows don't average your data. They act on it.

**Body**
Routing, scoring, segmentation, reporting, and AI agents consume your records one at a time. Each one inherits the worst dimension of the record in front of it, not the dataset average. A data foundation that looks fine in a quarterly dashboard can still feed wrong inputs into every automated decision you have.

**Pull line**
Robots can handle BAU once the data underneath them is trustworthy. They cannot fix a foundation that was never operationally defined as ready.

[LinkedIn anchor: this section links to the "AI-ready data" LinkedIn post for discussion.]

---

## Section 4 — The framework: gated readiness

**Headline**
Gated readiness: every dimension clears a floor, or the record is not ready.

**Intro**
The honest alternative to a blended score is to measure each dimension on its own and refuse to average them away.

**Three dimensions** [styled as cards or a pipe row]
- Completeness | is the field populated
- Standardization | is the value in a consistent, usable format
- Accuracy | is the value actually correct

**Grounding line**
Data quality has a standard vocabulary: completeness, validity, consistency, timeliness, uniqueness, accuracy. This framework consolidates it into the three dimensions that decide whether a record can be trusted for GTM, and scores each one on its own.

**Field tiers**
Not every field carries equal weight. Fields are tiered into Core, Supporting, and Supplemental, and the scoring reflects what actually matters for a record you can use.

**Five readiness classes** [styled as a scale or stepped bar]
- Ready | 90 to 100
- Near Ready | 70 to 89
- Partially Ready | 50 to 69
- Low Readiness | 30 to 49
- Not Ready | 0 to 29

**The gate** [emphasized block]
If any critical dimension falls below its floor, the record drops to a failing class, no matter how strong the composite looks. A great average cannot buy back a fatal weakness. That single rule is the difference between a score that flatters you and a score you can run a GTM motion on.

---

## Section 5 — The Scorecard

**Headline**
See the framework run on a synthetic CRM, right in your browser.

**Body**
A live demo of the gated readiness model applied to a generated 100-record dataset. The scoring engine, the field tiers, the gate, and the five readiness classes all run client-side. Hit Refresh to draw a fresh sample. The rollup shows how many records the gate caught that a composite score would have waved through.

**Privacy line**
Entirely client-side. No upload, no storage, no account, no sign-in.

[Primary CTA button] Open the Scorecard  →  routes to `/scorecard`

---

## Section 6 — Proof: the case study

**Headline**
I built this for a Salesforce org with roughly 99,000 account records.

**Body**
The Core Account Profile program defined what a ready account record looks like and built the measurement around it. It scored the full account base, benchmarked enrichment vendors into a graded source hierarchy, automated parent-account hierarchy population, and stood up live monitoring across Salesforce and Snowflake.

[CTA link] Read the case study  →  routes to `/work/core-account-profile`

[Note: this section stays Account-specific on purpose. It is a real program (Core Account Profile) that ran on Salesforce Accounts. The framework it produced is object-agnostic, which is what the rest of the site sells.]

---

## Section 7 — About teaser

**Body**
I am Stephanie Frignoca, a GTM data quality and CRM systems strategist. I turn messy GTM data into trusted, AI-ready revenue infrastructure: the frameworks, scoring models, and governance systems underneath segmentation, routing, and AI workflows. Salesforce Certified Administrator, with a BFA in design, which is why this site reads like a product: structured, intentional, and built to be used.

[CTA link] More about Stephanie  →  routes to `/about`

---

## Section 8 — Contact / closing CTA

**Headline**
Open to the right full-time role, and to consulting through Page Frignoca LLC.

**Body**
If your data is not ready for the AI workflows you are about to point at it, that is the work I do. Let's talk.

[CTA button] Email Stephanie  →  opens `mailto:stephaniemariepage@gmail.com`
[CTA link] Connect on LinkedIn  →  opens linkedin.com/in/stephaniepagefrignoca in a new tab

---

## Footer

**Positioning line**
Turning messy GTM data into trusted, AI-ready revenue infrastructure.

[Links] Email | LinkedIn | Scorecard | Work | About
[Feedback] Feedback always welcome.  →  opens the private feedback form
[Build credit] Designed and coded by Stephanie Frignoca. Astro and Tailwind.
[Legal] Page Frignoca LLC, 2026.

---

## CTA + routing map (reference)

Every clickable element on the Home page and where it goes:

| Element | Section | Destination | What the visitor sees |
|---|---|---|---|
| Run the Scorecard | Hero | `/scorecard` | The interactive demo. Scores a synthetic 100-record CRM, refreshable on click. |
| Read the case study | Hero | `/work/core-account-profile` | The Core Account Profile case study, full story. |
| Open the Scorecard | Section 5 | `/scorecard` | Same as Run the Scorecard. |
| Read the case study | Section 6 | `/work/core-account-profile` | Same as the hero case study link. |
| More about Stephanie | Section 7 | `/about` | Bio, the lane, how to work with her, contact. |
| Email Stephanie | Section 8 | `mailto:` | Opens the visitor's email client, addressed to Stephanie. |
| Connect on LinkedIn | Section 8 | LinkedIn profile | Her LinkedIn, new tab. |
| Footer links | Footer | Each page / mailto / LinkedIn | Standard footer nav. |
| Feedback always welcome | Footer | Private feedback form | A short form, results go only to Stephanie. Not public comments. |

## Visual assets (intent, pending design system)

No stock photography, no playful illustrations (the design direction doc rules both out). The visual language is:
- Custom data-viz primitives: score numbers, thin dimension bars, a floor line, the readiness scale. These are the hero and Section 4 visuals.
- Minimal line icons for the three dimensions and the five readiness classes, if icons are used at all. Type-led is also fine.
- One real photo of Stephanie is optional, on the About page only.

Exact icons, weights, and motion get locked when the mockup direction (A or B) is chosen and the design system is built. This file describes intent so the copy can be approved without waiting on design.
