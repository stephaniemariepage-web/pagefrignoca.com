---
title: HG Insights Hierarchy Auto-Population
summary: >-
  A governed n8n workflow that populates Salesforce Parent Account
  relationships from enrichment hierarchy data, with no-overwrite safeguards,
  self-parent prevention, and a master-record selection waterfall. Designed
  with a Salesforce operator and implemented through Claude Code.
type: AI-assisted automation
featured: false
order: 3

hero:
  eyebrow: Case study
  intro: >-
    This automation lifted known parent-account coverage from 6.4% to 10.2%
    across an account base of approximately 99,000, a 59% relative increase, with
    zero records corrupted. I designed a governed n8n workflow to write
    Salesforce Parent Account relationships from enrichment hierarchy data,
    using no-overwrite safeguards, self-parent prevention, and a
    deterministic master-record waterfall. Claude Code accelerated the
    implementation; the operating logic came from the Salesforce rules.

overview:
  headline: The hierarchy data was already there. The automation to use it was not.
  paragraphs:
    - >-
      Salesforce Accounts were enriched with hierarchy information from an
      external vendor. That data named the corporate parent and the global
      headquarters for tens of thousands of accounts. None of it was being
      written back to the Parent Account field, so hierarchy stayed broken
      inside Salesforce, where reporting, rollups, routing, and account
      planning all rely on it.
    - >-
      The reason was not neglect. Mass-updating hierarchy is one of the more
      dangerous Salesforce operations to automate. Overwrite a manually set
      parent and a downstream owner loses context. Choose the wrong master
      record from a group of duplicates and reporting bends in a way that
      takes weeks to unwind. The build needed to be careful before it was
      fast.
  pullLine: Automation against living data should be safe by default, not fast by default.

problem:
  headline: Five constraints, before line one of code.
  intro: >-
    The shape of the build was set by what could go wrong, not by what was
    possible.
  items:
    - title: Hierarchy data lived in one object, hierarchy fields in another.
      body: >-
        Corporate-parent and global-headquarters identifiers sat on the
        enrichment object. The Parent Account field sat on Account. Nothing
        moved between them automatically.
    - title: Manual triage did not scale.
      body: >-
        Tens of thousands of accounts, hundreds of eligible parent
        relationships, and a Salesforce admin team already running flat.
        Updating relationships by hand was both error-prone and impossibly
        slow.
    - title: Overwriting existing relationships was not an option.
      body: >-
        Where a Parent Account was already set, by a human or a prior
        process, that relationship carried context the automation did not
        have. The build had to fill only the empty slots.
    - title: Self-parenting would loop and fail the job.
      body: >-
        When an account's own enrichment ID matched both the corporate and
        global IDs, parenting it to itself would cause a circular reference
        and abort the run. The logic had to detect and skip those before
        attempting the write.
    - title: Multiple candidates for one parent.
      body: >-
        When several Salesforce accounts shared the same enrichment parent
        ID, there was no obvious "right" pick. Selection needed to follow a
        deterministic rule waterfall, not a coin flip.
  pullLine: A safe automation looks boring from the outside. From the inside, it is mostly the rules that decided what not to do.

builds:
  headline: One workflow, six layers of care.
  items:
    - title: The hierarchy decision logic.
      body: >-
        For each account, check the corporate parent ID first. If it is
        populated and different from the account's own enrichment ID, use it.
        Otherwise fall back to the global headquarters ID under the same
        constraint. If both equal the account's own ID, do nothing. The
        order matters: corporate-parent first, global-HQ as backup, never
        self.
    - title: Direct SOQL via REST.
      body: >-
        The first cut used the n8n Salesforce node's built-in search and
        retrieval actions. The search resource turned out to use SOSL, not
        SOQL, and the custom-object retrieval returned record IDs without
        the enrichment fields. The fix was to call the Salesforce Query REST
        API directly via HTTP Request nodes, which returned exactly the
        fields requested.
    - title: The master-record selection waterfall.
      body: >-
        When multiple Salesforce accounts shared one enrichment parent ID, a
        deterministic eleven-rule waterfall selected the master, starting
        with a direct name match between the candidate parent and the
        enrichment parent name, then cascading through account stage,
        domain match, ownership type, opportunity history, and created
        date. It reused the same operational pattern as duplicate
        resolution: deterministic rules first, human judgment only where
        the data could not safely decide.
    - title: Safeguards in front of every write.
      body: >-
        No-overwrite check: skip any account whose Parent Account field is
        already populated. Self-parent check: skip any account whose own
        enrichment ID matches the candidate parent's. Bad-record handling:
        on a single-record error, log and continue rather than fail the
        batch.
    - title: Scheduled batch, chunked processing.
      body: >-
        A daily run at 2:00 AM picks up newly eligible accounts. Chunked
        processing keeps memory and API limits in check on larger datasets,
        without holding the whole result set in one operation.
    - title: Documentation as part of the build.
      body: >-
        Workflow overview document. Master-record rules document. Mermaid
        diagrams for the workflow, the hierarchy decision tree, and the
        Salesforce data model. A short slide deck for the team review.
        Documentation shipped with the automation, not after it.

outcomes:
  headline: What changed.
  items:
    - Across an account org of approximately 99,000, the share of accounts with a known parent relationship grew from 6.4% to 10.2% after the automation went live, a 59% lift in hierarchy coverage.
    - Roughly 2,800 parent relationships matched and written on the first production run, against an account base of approximately 99,000, with the remainder correctly skipped by the safeguards.
    - The scheduled daily run continued to pick up between two and ten new or newly-enriched accounts each day for the following two weeks, exactly the long-tail pattern you would expect once the backlog cleared.
    - A production-ready automation built, tested, and documented in hours, compressing what would normally have been a multi-week build and learning curve.
    - A reusable safety pattern, no-overwrite, self-parent prevention, master-record waterfall, that applies to any future Salesforce write automation.
    - Hierarchy integrity now feeds account planning, reporting, routing, rollups, and book selection without manual stitching.
  pullLine: The interesting number was not 2,800 records parented. It was zero records corrupted.

portablePOV:
  headline: What carries to any AI-assisted build.
  intro: >-
    The tools change. The collaboration pattern does not.
  points:
    - title: Domain expertise is the part AI cannot fake.
      body: >-
        AI can help write SOQL and wire workflow nodes. It cannot tell you
        which hierarchy IDs to trust, which Salesforce fields are safe to
        overwrite, or which edge cases will wreck a quarterly report.
    - title: Safe defaults beat fast defaults.
      body: >-
        No-overwrite, self-parent prevention, and master-record selection
        rules existed before the first node was placed. The result was an
        automation that could be turned on without fear.
    - title: The point of AI is not speed by itself.
      body: >-
        The point is being able to ship something correct when the
        alternative was not shipping at all. A tested, documented workflow
        in hours is only valuable if the rules are safe enough to trust
        in production.
  pullLine: AI can help write the workflow. It cannot tell you which fields are sacred.

closing:
  headline: This was one of six builds inside the Core Account Profile program.
  body: >-
    Parent Account auto-population sat alongside the scoring model, the
    diagnostic slices, the vendor benchmark, the Salesforce write-back, and
    the live monitoring dashboard. Each one made the others more useful.
  primaryCta:
    label: Read the CAP case study
    href: /work/core-account-profile
  secondaryCta:
    label: Open the Scorecard
    href: /scorecard
---
