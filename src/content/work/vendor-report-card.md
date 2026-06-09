---
title: The Vendor Report Card
summary: >-
  A field-level benchmark of six enrichment and prospecting vendors against a
  200-company ground-truth reference set scrubbed directly from each
  company's own website, producing a Best Source by Field hierarchy that
  replaced vendor-reputation assumptions with evidence and fed the Vendor
  Source Strength lens of CAP Accuracy.
type: Framework
featured: false
order: 2

hero:
  eyebrow: Case study
  intro: >-
    Treating any single vendor as the source of truth is how GTM teams end up
    debating the data instead of using it. The Vendor Report Card graded six
    enrichment and prospecting vendors against a 200-company ground-truth
    reference set, field by field, and produced a Best Source by Field
    hierarchy that replaced vendor-reputation assumptions with evidence.

overview:
  headline: Vendor reputation is a marketing signal. Source-of-record needs an evidence signal.
  paragraphs:
    - >-
      The default in most orgs is to pick one enrichment vendor and call it
      the source of truth, or to layer two and let whichever wrote last win.
      Both approaches lose to the same problem: a vendor that nails employee
      counts can be wrong about countries, and the org has no way to tell
      which call to trust.
    - >-
      The Vendor Report Card tested six vendors against a 200-company
      reference set, with the ground-truth values scrubbed directly from
      each company's own website. Each vendor was scored on specific
      fields. The output was not a "best vendor" winner. It was a grid:
      this vendor wins for this field; that vendor wins for that one. From
      that grid came a Best Source by Field hierarchy: Platinum, Gold,
      Silver, and Bronze tiers, assigned per field, not per vendor.
  pullLine: A field-level benchmark replaces "we use this vendor" with "we use this vendor for this field."

problem:
  headline: What "vendor preference" was hiding.
  intro: >-
    Vendor selection was a marketing decision. Source-of-record was an
    unspoken assumption. The Vendor Report Card was built to surface both.
  items:
    - title: Multiple vendors wrote to the same fields with no defined precedence.
      body: >-
        When a field had two or three vendor sources, whichever wrote last
        won. A vendor strong on Industry could overwrite a vendor strong on
        Revenue with a worse value, and nothing in the system noticed.
    - title: Vendor reputation drove vendor selection.
      body: >-
        Vendor choice was made at the procurement level, by company-wide
        reputation and pricing. Field-level fit was not part of the
        decision, so one vendor often ended up treated as authoritative for
        everything, even the fields it was demonstrably weak at.
    - title: There was no evidence base to point to in a vendor debate.
      body: >-
        "Vendor X is better for this field" was opinion. No reference
        dataset, no scored comparison, no graded output. Vendor decisions
        came down to whoever argued hardest.
    - title: Source-of-record drift went unmeasured.
      body: >-
        A vendor could be losing accuracy quarter over quarter and nobody
        would know until a downstream report fell apart. Without a
        ground-truth reference set to test against, there was no signal
        until it was already too late.
  pullLine: A vendor is not a source. A source is a vendor demonstrably best at this field, on this ground-truth reference set, this quarter.

builds:
  headline: One benchmark, two outputs.
  items:
    - title: A 200-company ground-truth reference set.
      body: >-
        A curated set of 200 companies, chosen to span industries, sizes, and
        geographies, served as the ground truth. The reference values for
        each field were scrubbed directly from each company's own website,
        the most authoritative source for what a company actually says it
        is, then held stable so vendor accuracy could be measured against a
        constant.
    - title: Field-level vendor grading.
      body: >-
        Six vendors (ZoomInfo, Crunchbase, HG Insights, Lusha, LeadIQ, and
        Clearbit) were scored for accuracy on five fields: Employees,
        Revenue, Industry, Country, and State. The output was a grid,
        vendor by field, with each cell graded against the reference. No
        averaging, no overall vendor ranking. A vendor could be strong on
        Industry and weak on Revenue and the grid said so out loud.
    - title: The Platinum, Gold, Silver, Bronze hierarchy.
      body: >-
        Within each field, vendors were tiered by accuracy. The tiers were
        not awarded by vendor brand or pricing. They were assigned by
        field-level performance, so the same vendor could be Platinum on
        one field and Bronze on another.
    - title: A Best Source by Field model.
      body: >-
        The tiers fed directly into a Best Source by Field assignment,
        mapping each field to its highest-scoring vendor, with backup
        tiers when the primary vendor lacked data on a given record. This
        is what the enrichment stack and the Salesforce write-back logic
        consumed, instead of "vendor X always wins."
    - title: A connection back to CAP Accuracy.
      body: >-
        Vendor Source Strength is one of four lenses inside the Core
        Account Profile's Accuracy dimension, alongside cross-field
        validity, multi-source vendor agreement, and recency. The Vendor
        Report Card was the evidence behind that lens, so the Accuracy
        score had a defensible underpinning instead of "we trust the data."

outcomes:
  headline: What changed downstream.
  items:
    - Enrichment trust decisions became defensible. "Why is this field coming from this vendor?" had a graded, sample-tested answer instead of a vendor-reputation one.
    - Source-of-record rules stopped being implicit. The Best Source by Field hierarchy lived in the enrichment pipeline as a written rule, not in someone's head.
    - The CAP Accuracy dimension had a basis. Vendor Source Strength stopped being qualitative; it had a sample size, a method, and a grade.
    - A reusable benchmark structure. The same test could be re-run when vendors changed pricing, added a field, or claimed an accuracy improvement, with apples-to-apples results.
  pullLine: A defensible source hierarchy was not the goal. It was the byproduct of a benchmark that finally answered which vendor was actually good at what.

portablePOV:
  headline: What carries to any data-source decision.
  intro: >-
    Vendor evaluation is a category of operator work that happens far too
    often without evidence. The fix is small in scope and disproportionately
    useful.
  points:
    - title: Vendors deserve field-level grades, not letter-grade reputations.
      body: >-
        A vendor is not "good" or "bad." A vendor is good at some fields
        and bad at others. Grading the wrong unit is most of what makes
        vendor decisions feel arbitrary.
    - title: A ground-truth reference set is non-negotiable.
      body: >-
        Without a ground-truth set you control, vendor accuracy claims are
        advertising. With one, they become measurements.
    - title: Source-of-record is downstream of vendor benchmarking, not upstream of it.
      body: >-
        You cannot decide "which source wins" without first knowing which
        source is actually better at what. Most orgs reverse this order
        and then wonder why their data disagrees with itself.
    - title: The output is a rule, not a recommendation.
      body: >-
        A vendor benchmark that ends in a slide deck is informational. A
        vendor benchmark that ends as a Best Source by Field rule inside
        the enrichment pipeline is operational.
  pullLine: Robots can compare two vendor values. They cannot tell you which one is supposed to win.

closing:
  headline: The evidence under the Vendor Source Strength lens of CAP Accuracy.
  body: >-
    The Core Account Profile uses four lenses to score Accuracy. Vendor
    Source Strength is one. The Vendor Report Card is what made that lens
    credible, instead of "we trust the data." The same source-trust pattern
    applies to any data product where the answer needs to be defensible per
    field, not per vendor.
  primaryCta:
    label: Read the CAP case study
    href: /work/core-account-profile
  secondaryCta:
    label: Open the Scorecard
    href: /scorecard
---
