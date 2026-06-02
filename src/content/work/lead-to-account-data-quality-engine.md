---
title: Lead-to-Account Intake Quality Engine
summary: >-
  An end-to-end automation for incoming GTM records: enrichment governance,
  normalization, a deterministic account-matching waterfall, deduplication, and
  a routing-readiness gate, built so messy top-of-funnel data could be trusted
  by the systems that act on it one record at a time.
type: Systems build
featured: false
order: 3

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
        or routing logic ran. Downstream rules could keep treating fields as
        exact strings because the strings were now consistent.
    - title: Deterministic account-matching waterfall.
      body: >-
        A cascading match logic replaced the single brittle rule. Exact
        domain first. Root-domain match next. Enrichment ID after that.
        Normalized company name with disambiguation rules. A manual queue at
        the bottom, for the small set the rules could not decide. Every step
        had a written reason it sat where it did.
    - title: Deduplication on intake and on demand.
      body: >-
        Dedup-on-create caught the obvious cases before a duplicate ever
        existed. Scheduled ad-hoc dedup runs caught the rest, with
        deterministic master-record selection so merges did not pick
        arbitrarily. Reused, in spirit, the same waterfall pattern as
        matching.
    - title: Lead-to-account stitching using the same waterfall.
      body: >-
        New leads and contacts were stitched to the right existing account
        using the same match logic that governed dedup. One rule, applied in
        two contexts, instead of two systems with different opinions about
        the same company.
    - title: ARR and attribution context attached at the point of match.
      body: >-
        Once a record matched to an account, account-level value and
        attribution context were attached so routing and scoring could make
        decisions in business terms, not just record terms. The same
        waterfall that matched the account also carried that signal forward.
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
