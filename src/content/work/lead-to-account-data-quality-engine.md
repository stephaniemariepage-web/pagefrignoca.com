---
title: Lead-to-Account Data Quality Engine
summary: >-
  An end-to-end automation for incoming GTM records: enrichment governance,
  normalization, a deterministic account-matching waterfall, deduplication, and
  a routing-readiness gate, built so messy top-of-funnel data could be trusted
  by the systems that act on it one record at a time.
type: Systems build
featured: false
order: 4

hero:
  eyebrow: Case study
  intro: >-
    Incoming leads and contacts arrived enriched but still messy: duplicate
    accounts, mismatched lead-to-account pairings, inconsistent country and
    industry values, and routing logic that punished every gap. This is the
    story of the intake layer that turned top-of-funnel data into records
    the rest of the GTM stack could trust at the point of routing.

overview:
  headline: Routing is a data quality problem with a routing tax.
  paragraphs:
    - >-
      GTM operations kept hand-fixing the same patterns. The same companies
      arrived as three slightly different accounts. The same lead came back
      with a country value of "United States" today, "USA" yesterday, "us" the
      week before. Routing rules looked fine on paper and broke constantly in
      production.
    - >-
      The fix was not a better routing rule. It was a layer upstream of routing
      that enforced what a record should look like before any downstream
      system was asked to act on it. Enrichment governance, normalization,
      deterministic account matching, deduplication, and readiness logic
      applied before downstream systems were asked to act.
  pullLine: The cleanest routing rule cannot save a record that arrived as nine slightly different versions of itself.

problem:
  headline: The shape of the build was set by what kept going wrong.
  intro: >-
    Each of these was a recurring failure pattern that operations had been
    paying for by hand. The job was to make the fix cheap enough to leave on
    by default.
  items:
    - title: Over-enriched, under-governed.
      body: >-
        Enrichment refreshed account and lead fields on a schedule. Without
        a rule for which sources could write to which fields, a manual
        correction could be reverted by the next enrichment cycle, and
        downstream logic consumed whatever value won the most recent write.
    - title: Duplicate accounts created at intake.
      body: >-
        New leads created accounts that already existed under a slightly
        different domain or company name. Each duplicate fragmented the
        account history, broke roll-ups, and gave routing two answers for one
        company.
    - title: Brittle lead-to-account matching.
      body: >-
        Matching relied on exact company-name match with a domain fallback,
        with no normalization in front of it. A trailing space, a different
        capitalization, or a personal email domain on a corporate lead could
        send a record to the wrong owner or no owner at all.
    - title: Inconsistent values in the fields routing relied on.
      body: >-
        Country, industry, employee count, and segment values arrived in many
        forms. Downstream rules treated them as exact strings, so "Germany"
        and "DE" and "Deutschland" produced different routes for the same
        company.
    - title: Manual triage did not scale.
      body: >-
        Operations was the safety net, fixing the same patterns over and
        over. That kept things moving but did not fix the patterns, and it
        burned the team out doing it.
  pullLine: Top-of-funnel data is a thousand small choices made under deadline pressure. The corrections have to be cheap enough to run automatically, every time.

builds:
  headline: One pipeline, governance at every step.
  items:
    - title: Source-of-truth hierarchy per field.
      body: >-
        Defined which source could write to which field. Enrichment
        refreshes, manual corrections, and lead-to-account stitching each
        had a defined right to update certain fields and not others.
        Lower-trust sources could not overwrite higher-trust values.
        Governance was built into the plumbing instead of handed to users
        as another thing to remember.
    - title: Normalization in front of matching.
      body: >-
        Country, state, industry, employee-count band, and company-name
        variants were normalized to the org's vocabulary before any matching
        or routing logic ran. Country names resolved to common forms
        (USA to United States), and to ISO 3166-1 alpha-2 codes where
        downstream consumers expected them. State codes expanded to full
        names. Company suffixes abbreviated to a single form (Microsoft
        Incorporated to Microsoft Inc.). Compass directions and street
        types abbreviated. URLs truncated to the apex domain. Each rule
        had a transformation, an example value, and the downstream
        consumer it served.
    - title: Three-way matching on every incoming record.
      body: >-
        Every incoming lead was evaluated against three existing record
        types before any new record was created. Match-to-Contact ran
        first, with auto-convert and merge into the existing contact when
        found. Match-to-Lead ran second, with auto-merge into the existing
        lead. Match-to-Account ran third, linking the new lead via Related
        Account. Each pass used its own deterministic rule set, and the
        three passes produced one of three outcomes: existing record
        updated, new record created and account-linked, or held for manual
        review.
    - title: A deterministic Lead-to-Account matching waterfall.
      body: >-
        The Lead-to-Account pass evaluated six rule groups in order, with
        progressive specificity. An enrichment vendor's company-ID exact
        match first, when the vendor had already linked the lead to a known
        company entity. Corporate domain extracted from the lead's email,
        matched against the account's domain, next. Corporate domain plus
        account name tightened the match when one domain belonged to
        several accounts. Corporate domain plus account name (loose) plus
        HQ country anchored the match when company names were ambiguous.
        Corporate domain plus account name (loose) plus country as a
        fallback when HQ country was missing. Corporate domain alone as a
        last resort, only after stricter rules had failed. A manual review
        queue caught the small remainder. Every step had a written reason
        it sat where it did.
    - title: Master Record Rules for the merge tiebreaker.
      body: >-
        When matching surfaced multiple candidate masters, the Master
        Record Rules picked the winner deterministically. The Account
        rules favored, in order: domain integrity (the account whose
        domain or website actually matched the corporate domain), Active
        status over inactive, Active ARR greater than zero
        (revenue-generating accounts), Open Opportunities greater than
        zero (currently engaged), Closed Won history greater than zero (a
        proven customer relationship), and the highest Active ARR among
        ties. The rule said the loudest thing: in a tie, pick the customer
        that is actually paying.
    - title: Surviving Field Value Rules.
      body: >-
        Even after the master was selected, certain field values had to be
        protected from the merge. The Surviving Field Value Rules locked
        Lead Source to the value from the oldest record, propagated
        opt-out flags as true if either record was true, and forced
        active/inactive status to the correct state. A merge could lose a
        record. It could not lose the operational context that record
        carried.
    - title: Sixteen always-on scheduled tasks.
      body: >-
        A library of scheduled data-quality automation tasks ran the intake
        layer's continuous governance, on cadences from hourly to daily. The set
        covered owner sync between contacts and account owners, forecast
        and currency hygiene on closed-won opportunities, ARR field
        maintenance across the opportunity types where a formula could not
        carry the motion, GTM segmentation field updates when segment,
        region, or motion landed null and a match was now available,
        conversion-record stitching where the related contact or lead now
        had an account, and queue-routing fixes for intake edge cases.
        None of the tasks were dramatic alone. Together they were the
        intake layer running 24/7 instead of waiting for a human to notice.
    - title: A routing-readiness gate.
      body: >-
        Records that passed normalization and matched to an account with
        confidence were marked routing-ready. Records that fell to manual
        review did not get force-routed on a guess. Routing acted only on
        records that had cleared the upstream layer.

outcomes:
  headline: What changed downstream.
  items:
    - The hand-fix loop moved from default behavior to exception handling. Operations time moved off recurring intake cleanup and onto exceptions only.
    - Routing became more trustworthy because the inputs were consistent and the matches were governed, not because the routing rules got more complicated.
    - Account roll-ups, segmentation, attribution, and reporting stabilized once intake stopped creating duplicate parents and conflicting field values.
    - A historical backfill linked years of unconverted legacy leads to their existing accounts, using an expanded version of the live matching waterfall and the same Master Record Rules to pick the right account when more than one candidate existed. Account history finally reflected what had actually happened upstream of conversion.
    - The pattern was portable inside the org. The same matching waterfall powered dedup, lead-to-account stitching, and merge tiebreakers, with one set of rules to debug instead of three.
  pullLine: The interesting outcome was not that routing got faster. It was that routing could be trusted at the point it ran.

portablePOV:
  headline: What carries to any incoming-record automation.
  intro: >-
    Tools change every few quarters. The shape of safe, governed intake does
    not.
  points:
    - title: Normalize before you match. Match before you route.
      body: >-
        The order matters. Matching against unnormalized values produces
        false negatives. Routing against unmatched records produces false
        positives. Putting the steps in the wrong order costs more than
        getting any single step wrong.
    - title: A waterfall beats a clever rule.
      body: >-
        A deterministic cascade with a written reason for each step is
        debuggable and explainable. A single clever match rule is fast until
        it is wrong, and then no one can explain why.
    - title: Source-of-truth is a hierarchy, not a vote.
      body: >-
        Whichever process wrote last is not a strategy. Once a field has a
        ranked list of who is allowed to write to it and in what order, the
        data stops disagreeing with itself.
    - title: Governance should make the safe path the default path.
      body: >-
        Operations should not need to remember to do the right thing on every
        record. The pipeline should make it hard to do the wrong one.
  pullLine: Automation can normalize a country code. It cannot decide which process should be allowed to overwrite a human's correction.

closing:
  headline: The upstream layer underneath the rest of the GTM stack.
  body: >-
    Routing, scoring, segmentation, reporting, and AI agents all act on
    records one at a time. They are only as good as what landed in Salesforce
    in the first place. This was the work that made what landed there worth
    acting on.
  primaryCta:
    label: Open the Scorecard
    href: /scorecard
  secondaryCta:
    label: See the rest of the work
    href: /work
---
