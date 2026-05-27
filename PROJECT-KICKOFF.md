# pagefrignoca.com — Project Kickoff Brief

**Owner:** Stephanie Frignoca
**Created:** May 2026
**Status:** Phased v1 launch in progress (started 2026-05-26). Home + About being built and deployed first so the domain resolves to polished content; Case Study, Interactive Demo, and Blog follow as labeled "launching in phases." Initial build was kicked off from the resume conversation under deadline pressure — future sessions should run from this folder for clean memory.

---

## How to start this project

1. Open Claude Code with this folder (`/Users/stephaniefrignoca/pagefrignoca.com/`) as the working directory.
2. Say: *"Read PROJECT-KICKOFF.md — this is the full brief for my portfolio site. Catch up, then let's resolve the open questions and get started."*
3. This is a **separate project** from the resume work. It gets its own conversation and its own memory. Don't mix the two.

> The resume/job-hunt project lives separately at `/Users/stephaniefrignoca/Claude Code Resumes - 2026/` — leave it alone.

---

## What this project is

A **custom-coded personal portfolio site** at **pagefrignoca.com** — a credibility showcase that makes recruiters, hiring managers, and potential consulting clients take Stephanie seriously as a GTM data quality strategist.

It is linked from her LinkedIn and her resumes. It needs to look sharp (she has a BFA in Communication Design — visual polish is a feature, not optional) and demonstrate real skill, not just describe it.

## Decisions locked (from the planning conversation)

| Decision | Choice |
|---|---|
| **Primary purpose** | Portfolio / credibility showcase |
| **Build approach** | Custom-coded site (she wants to own the code; the build itself is proof of skill) |
| **Content** | (1) Core Account Profile case study, (2) Interactive data quality demo, (3) Blog / writing, (4) About / services / contact |
| **Tech stack** *(confirmed session 1)* | Astro + Tailwind CSS. React island for the interactive demo. |
| **v1 scope** *(confirmed session 1)* | Lean launch — Home + Case Study + About. Interactive demo and blog are fast-follows after launch. |
| **Design direction** *(session 1)* | Not yet chosen. First build step: produce two quick homepage mockups in different directions; Stephanie picks before committing the design system. |
| **Project location** *(session 1)* | Runs as its own Claude Code project from `~/pagefrignoca.com/`, with its own memory — kept separate from the resume project. |

## About Stephanie

See [`_source-material/stephanie-background.md`](_source-material/stephanie-background.md) for the condensed profile — identity, voice, career, and the flagship Core Account Profile story. **Read it before writing any site copy.** The voice matters: direct, confident, a little irreverent, pro-AI, anti-fluff. Site copy should sound like her.

---

## Recommended tech stack (proposed — confirm in session 1)

**Astro** as the framework. Rationale:
- Purpose-built for content-heavy sites — portfolio, case study, and blog are all first-class (content collections, native markdown/MDX blog).
- Ships zero JavaScript by default → fast, excellent Lighthouse scores (itself a credibility signal for a data-quality professional).
- Supports interactive "islands" — drop a React/Svelte component exactly where the data quality demo needs to live, without making the whole site heavy.
- Trivial to deploy free on Vercel, Netlify, or Cloudflare Pages, with a custom domain.
- Works very well with Claude Code.

**Supporting choices to confirm:**
- Styling: Tailwind CSS (fast, consistent, easy to keep polished)
- Interactive demo component: React island within Astro
- Blog: Astro content collections, posts authored in Markdown/MDX
- Hosting/deploy: Vercel or Cloudflare Pages (free tier, connect the domain)
- Version control: git repo (this folder), push to GitHub

*Alternative if the interactive demo grows app-like: Next.js. But for a showcase site with one interactive piece, Astro is the better fit. Decide in session 1.*

---

## Proposed site structure

| Page | Purpose |
|---|---|
| **Home** | Sharp hero — who she is, the one-line positioning ("AI-ready GTM data"). Visual, confident. Links to the case study and demo. |
| **Case Study — Core Account Profile** | The flagship. The framework, the ~99K-account scoring model, vendor benchmarking, automation, the dashboard, the results. Source material is in `_source-material/`. |
| **Interactive Demo — Data Quality Scorer** | A working mini-tool (see concept below). Proof, not description. |
| **Blog / Writing** | Her thinking — AI-ready data, the "Data Dietitian" philosophy. Seeded from her LinkedIn posts. |
| **About / Services / Contact** | Bio, what she offers (open to full-time and consulting/contract), how to reach her. |

## Interactive demo concept — Data Quality Scorer

The demo should mirror her actual Core Account Profile framework. Suggested concept:

> A visitor loads a small sample dataset of "accounts" (a built-in sample, with an option to paste their own rows). The tool scores each record live across her three real dimensions — **Completeness, Standardization, Accuracy** — applies **gated readiness logic**, and returns a readiness tier (Fully Complete → Zero Value) with a visual breakdown.

This demonstrates the exact framework she built at Cockroach Labs, in a form a visitor can touch in 30 seconds. Refine the scope in session 1 — keep v1 small and shippable.

---

## Content sources

- **`_source-material/COCKROACH-SOURCE-MATERIAL.md`** — full transcribed exec summary of the Core Account Profile work. Primary source for the case study.
- **`_source-material/CAP_Exec Summary - part 1/2/3.jpg`** — the actual exec summary visuals. Reference for the case study; do not publish verbatim (may contain internal detail — review before using anything publicly).
- **`_source-material/stephanie-background.md`** — condensed profile for About page and positioning.
- **`_source-material/linkedin-posts.md`** — her voice reference + blog seed material (3 posts + post ideas).
- The resume project (`/Users/stephaniefrignoca/Claude Code Resumes - 2026/`) has deeper background if needed.

> **Confidentiality check:** The Cockroach Labs material was internal. Before publishing the case study, scrub anything proprietary — keep the framework, methodology, and her approach; remove anything that exposes Cockroach's internal data, named individuals, or specifics that shouldn't be public. Flag this with Stephanie.

---

## Open questions

**Resolved in session 1 (2026-05-20):**
- ~~Tech stack~~ → Astro + Tailwind CSS.
- ~~Scope of v1~~ → Lean launch: Home + Case Study + About.
- ~~Design direction~~ → Decided to *show two homepage mockups first*, then choose. (Still need: any sites Stephanie admires as references.)
- ~~Project setup~~ → Its own Claude Code project + memory, run from this folder.

**Still open — resolve early in the next session:**
1. **Domain:** Where is pagefrignoca.com registered (registrar)? Is DNS access available for connecting hosting?
2. **Hosting:** Vercel, Cloudflare Pages, Netlify, or something else? (Recommendation: Vercel, free tier — easiest path with Astro + a custom domain.)
3. **GitHub:** Repo public (visible portfolio code) or private?
4. **Case study confidentiality:** Confirm what from the Cockroach Labs work is safe to publish — to be reviewed in detail when the case study page is built.
5. **Design references:** One or two sites Stephanie admires, to inform the mockups.

## Suggested first steps (next session)

1. Scaffold the Astro + Tailwind project in this folder; init git.
2. Build **two quick homepage mockups** in different design directions; Stephanie picks one.
3. Lock the design system from the chosen direction; finish the Home page.
4. Build the Core Account Profile case study (highest-value page; do the confidentiality scrub here).
5. Build About / Services / Contact.
6. **Launch v1** — deploy, connect the domain. (Lean scope = Home + Case Study + About.)
7. Fast-follow: interactive Data Quality Scorer demo.
8. Fast-follow: set up the blog; port the first post.

---

*This brief was prepared in the resume/job-hunt conversation on 2026-05-20 when the two projects were split. Everything needed to start is in this folder.*
