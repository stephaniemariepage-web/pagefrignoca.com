---
title: Core Account Profile
summary: >-
  The Cockroach Labs program that defined what GTM-ready means: a tiered,
  gated scoring model, vendor benchmark, hierarchy automation, and live
  monitoring layer, applied to roughly 99,000 accounts.
type: Framework
employer: Cockroach Labs
featured: true
order: 1

hero:
  eyebrow: Case study
  intro: >-
    The program behind the framework. At Cockroach Labs, the Core Account
    Profile defined what a ready account record looks like, scored roughly
    99,000 of them, benchmarked the enrichment vendors writing to them,
    automated the hierarchy underneath them, and put the result back into
    Salesforce where the GTM teams actually work.

overview:
  headline: Account data is the foundation every GTM motion is built on. Nobody owned whether it was any good.
  paragraphs:
    - >-
      Segmentation, territory planning, ICP modeling, routing, reporting, and
      increasingly AI workflows all run on account data. At Cockroach Labs,
      the quality of that data varied with when a record was created, who
      created it, and how it entered the system. There was no shared
      definition of a GTM-ready account, and no single owner for account
      data quality.
    - >-
      The Core Account Profile set that definition and built the measurement
      around it. It defines which fields matter, how account quality is
      scored, which vendors to trust for which fields, and where in the
      process quality breaks down. It scored the full account base, roughly
      99,000 records, against that standard.
  pullLine: A field having a value is not the same as a field you can run a GTM motion on.

problem:
  headline: Five failures, compounding.
  intro: >-
    Account data quality was not one issue. It was five, and each one made
    the others worse.
  items:
    - title: No shared definition of a complete account.
      body: >-
        No documented minimum field standard, so every team worked from its
        own assumption about what "good" looked like.
    - title: Fragmented ownership.
      body: >-
        Revenue Operations, Marketing Operations, Enablement, and Sales all
        wrote to account data through different tools and cadences, with no
        single owner for its quality.
    - title: Inconsistent records at the door.
      body: >-
        Accounts entered from more than thirty sources. Some produced clean,
        structured records. Long-tail sources introduced inconsistency that
        weakened the whole base.
    - title: Standardization gaps broke downstream systems.
      body: >-
        Inconsistent country, industry, vertical, and address values quietly
        degraded territory assignment, segmentation, reporting, and
        automation.
    - title: No accuracy validation.
      body: >-
        Multiple vendors wrote to the same key fields with no defined source
        hierarchy, and values were rarely revalidated once populated.
  pullLine: Field population was being treated as field quality. They are not the same measurement.

framework:
  headline: "Gated readiness: measure three dimensions, and refuse to average them away."
  intro: >-
    The Core Account Profile scores every account on three dimensions,
    separately:
  dimensions:
    - name: Completeness
      note: Is the field populated.
    - name: Standardization
      note: Is the value in a consistent, usable format.
    - name: Accuracy
      note: Is the value actually correct, tested against cross-field logic, multiple vendor sources, and recency.
  paragraphs:
    - >-
      Fields are tiered first. Core fields carry the most weight, Supporting
      fields less, Supplemental fields little or none, so a record cannot
      look ready on the strength of nice-to-have metadata while missing what
      matters.
    - >-
      The three dimension scores roll up into one Core Account Readiness
      result. The rule that keeps the result honest is the gate: if any
      dimension falls below its floor, the record drops to a failing
      readiness class, no matter how strong the average looks. A composite
      score lets one strong dimension carry two weak ones. The gate does not.
  scorecardLink: true
  pullLine: An account is only as ready as its weakest dimension. The score should say so out loud.

builds:
  headline: Six builds, one operating system for account readiness.
  items:
    - title: The scoring model.
      body: >-
        A weighted, tiered model that scores Completeness, Standardization,
        and Accuracy for each account, applies the gate, and returns a
        readiness class. Run against the full account base, roughly 99,000
        records, to establish a baseline.
    - title: Diagnostic slices.
      body: >-
        The same scores cut by creation timeframe, creating team, and
        creation source, so data quality stopped being one number and became
        a map of where in the process quality was breaking down.
    - title: The Vendor Report Card.
      body: >-
        A benchmark of the enrichment and prospecting vendors against a
        roughly 75-company reference sample, graded by field instead of by
        vendor reputation. The output was a Platinum, Gold, Silver, and
        Bronze hierarchy and a Best Source by Field model, which replaced
        assumption-based source-of-record decisions with evidence.
    - title: Parent Account auto-population.
      body: >-
        An n8n workflow that populated account hierarchy from corporate-parent
        and global-headquarters identifiers, with self-parenting prevention,
        overwrite protection so existing values were never clobbered, and a
        master-record selection waterfall for when multiple accounts shared
        a parent.
    - title: Readiness, written back to Salesforce.
      body: >-
        The score and grade for each dimension and for overall readiness were
        operationalized as account-level Salesforce fields, refreshed
        automatically on a schedule. Readiness stopped living in a workbook
        and started living in the CRM, where it could drive list views,
        reporting, routing, and prioritization directly.
    - title: Continuous monitoring.
      body: >-
        An AI-assisted dashboard connecting Salesforce and Snowflake,
        tracking readiness by team, source, and timeframe, so data quality
        could be watched as an operating metric instead of audited once a
        year.

outcomes:
  headline: What changed.
  items:
    - A baseline readiness score across the full account base, usable for prioritization, remediation, and book selection.
    - A vendor hierarchy grounded in benchmarked evidence, replacing "this vendor is just better" with "this vendor is better for this field."
    - Automated hierarchy population, improving roll-up reporting and enterprise account visibility.
    - Readiness scores live in Salesforce and on a live dashboard, so data quality became visible to the teams who create the data and depend on it.
  pullLine: The goal was never a cleaner spreadsheet. It was account data the business could make decisions on.

portablePOV:
  headline: What carries to any company.
  intro: >-
    The Core Account Profile was built for one Salesforce org, but the
    thinking is not specific to it.
  points:
    - title: Composite scores flatter you.
      body: A single blended number hides the records that are quietly broken.
    - title: Gated readiness is the honest alternative.
      body: Measure each dimension, and do not let a strong average buy back a fatal weakness.
    - title: Data quality is a behavioral problem dressed up as a tooling problem.
      body: The fix is shared definitions, clear ownership, and measurement, not another vendor.
  pullLine: Robots can run the motion once the data underneath them is trustworthy. They cannot define ready for you.

closing:
  headline: Want to see the framework before the case study?
  body: >-
    The Scorecard is a generalized, public version of what Core Account
    Profile does at scale. It scores a synthetic dataset against the same
    three dimensions, tiers, and gate, right in your browser.
  primaryCta:
    label: Open the Scorecard
    href: /scorecard
  secondaryCta:
    label: More about how I work
    href: /about
---
