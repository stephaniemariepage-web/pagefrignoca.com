---
title: Core Account Profile
summary: >-
  The program that defined what GTM-ready account data means: tiered field
  standards, gated scoring, vendor benchmarking, hierarchy automation,
  Salesforce write-back, and live monitoring across approximately 100,000 accounts.
type: Framework
featured: true
order: 1

hero:
  eyebrow: Case study
  intro: >-
    The program behind the framework. Core Account Profile defined what a
    GTM-ready account record looks like, scored approximately 100,000 records
    against that standard, benchmarked the enrichment vendors writing to
    those fields, automated the hierarchy layer underneath them, and wrote
    readiness back into Salesforce where GTM teams actually work.

overview:
  headline: Account data is the foundation every GTM motion runs on. Most orgs do not yet have a shared definition of what counts as good.
  paragraphs:
    - >-
      Segmentation, territory planning, ICP modeling, routing, reporting, and
      increasingly AI workflows all run on account data. In the org where
      this program ran, like many fast-scaling GTM orgs, account quality
      varied by creation date, creating team, and creation source. A shared
      operational definition of a GTM-ready account, and a single
      accountable owner for account data quality, did not yet exist.
    - >-
      The Core Account Profile set that definition and built the measurement
      around it. It defines which fields matter, how account quality is
      scored, which vendors to trust for which fields, and where in the
      process quality breaks down. It scored the full account base, roughly
      100,000 records, against that standard.
  pullLine: A field having a value is not the same as a field you can run a GTM motion on.

problem:
  headline: Five recurring patterns, compounding.
  intro: >-
    Account data quality was not one issue. It was five common patterns,
    and each one amplified the others.
  items:
    - title: Definitions of ready varied by team.
      body: >-
        Without a documented minimum field standard, each team worked from
        its own assumption about what "good" looked like.
    - title: Distributed ownership without a single accountable owner.
      body: >-
        Account data was written and updated by multiple functions, through
        different tools and cadences, without one operational owner
        accountable for its quality end to end.
    - title: Inconsistent records at the door.
      body: >-
        Accounts entered from more than thirty sources. Some produced clean,
        structured records. Long-tail sources introduced inconsistent values
        that quietly weakened the account base.
    - title: Standardization gaps amplified downstream.
      body: >-
        Inconsistent country, industry, vertical, and address values quietly
        degraded territory assignment, segmentation, reporting, and
        automation.
    - title: Accuracy lacked a validation backbone.
      body: >-
        Multiple sources wrote to the same key fields without a defined
        source hierarchy, and values were rarely revalidated once populated.
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
      fields carry moderate weight, and Supplemental fields carry little or
      none, so nice-to-have metadata cannot make a strategically unusable
      account look ready.
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
        readiness class. Run against the full account base, approximately 100,000
        records, to establish a baseline.
    - title: Diagnostic slices.
      body: >-
        The same scores cut by creation timeframe, creating team, and
        creation source, so data quality stopped being one number and became
        a map of where in the process quality was breaking down.
    - title: The Vendor Report Card.
      body: >-
        A benchmark of enrichment and prospecting vendors against a
        200-company reference set, with ground-truth values scrubbed directly
        from each company's own website, graded by field instead of by
        vendor reputation. The output was a Platinum, Gold, Silver, and
        Bronze hierarchy and a Best Source by Field model, which replaced
        assumption-based source-of-record decisions with evidence.
      link:
        label: Read the full case study
        href: /work/vendor-report-card
    - title: Parent Account auto-population.
      body: >-
        An n8n workflow that populated account hierarchy from corporate-parent
        and global-headquarters identifiers, with self-parenting prevention,
        overwrite protection so existing values were never clobbered, and a
        master-record selection waterfall for picking which parent a child
        should nest under when more than one candidate existed.
      link:
        label: Read the full case study
        href: /work/hg-insights-hierarchy-auto-population
    - title: Readiness, written back to Salesforce.
      body: >-
        The score and grade for each dimension and for overall readiness were
        operationalized as account-level Salesforce fields, refreshed
        automatically on a schedule. Readiness stopped living in a workbook
        and started living in the CRM, where it could drive list views,
        reporting, routing, and prioritization directly.
    - title: An AI-assisted Command Center.
      body: >-
        Continuous monitoring shipped as a product, not a one-off dashboard.
        A joined Salesforce and Snowflake data layer let revenue teams
        filter by team, source, or timeframe and pull the cohort of records
        in any given readiness state, surfaced as GTM-readable signals on
        top of the raw scores. The operator design, what to surface, how
        to filter, which decisions to support, came from me. Claude Code
        and an internal enterprise AI assistant accelerated the build,
        compressing what would have been a multi-month engineering backlog
        item into something I could ship, observe, and iterate on directly.

outcomes:
  headline: What changed.
  items:
    - A baseline readiness score across the full account base, usable for prioritization, remediation, and book selection.
    - A vendor hierarchy grounded in benchmarked evidence, replacing "this vendor is just better" with "this vendor is better for this field."
    - Automated hierarchy population, improving roll-up reporting and enterprise account visibility.
    - Readiness scores lived in Salesforce and in the monitoring layer, making account quality visible to the teams that created the data and the teams that depended on it.
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
