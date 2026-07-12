---
goal_name: "itp-consulting-site-five-pods"
source_phase: "docs/planning/phase-001-itp-consulting-site-five-pods/plan.md"
source_phase_name: "Phase 001 - ITP Consulting Site And Five Market Pods"
created_at: "2026-07-12"
short_goal_prompt_max_chars: 300
native_goal_objective_max_chars: 4000
goal_post_prompt_style: "artifact-pointer"
authority: "guarded-autonomous"
status: "not-started"
---

# Phase 001 Goal: Build The ITP Consulting Site And Five Market Pods

## Frozen Original Intent (immutable)

Pinned from `docs/references/vision-lock.md`.

- Building: improve the website into a credible consulting firm and build industry-specific sectors around five real market pods, including the broader systems and internal tools ITP can build.
- Matt-test: homepage explains the larger operations offer; five native pages are sendable; each page shows phone-to-workflow expansion; real desktop/mobile site has no blocker defects; credibility is honest.
- Design target: `docs/design/itp-consulting-site-direction.md`.
- Out of scope: extra verticals, fake proof, full vertical-CRM replacement, production publish.
- Canonical execution worktree + branch: `/Users/mattbender/.codex/worktrees/zta-835-itp-five-pod-plan` @ `codex/zta-835-itp-five-pod-plan`, based on PR #1 head `1d4b602`.

## Short /goal Prompt

```text
/goal Execute @docs/planning/goals/phase-001__itp-consulting-site-five-pods.md. Pass Frozen Intent, DoD, Product-Truth, Verifier, and Strategy Confidence gates; otherwise stop with blocker evidence.
```

## Objective

Deliver the repositioned ITP homepage and five differentiated industry pages end to end, with proof and a reviewable PR but no production publish.

## Codex Native Goal Contract

| Field | Value |
|---|---|
| Outcome | Consulting-firm homepage plus Auto Repair, HVAC, Dental, Roofing, and Med Spa pages |
| Verification surface | local build, lint, route readback, sitemap, real browser journeys, desktop/mobile screenshots, PR and Linear proof |
| Constraints | current stack, isolated branch, truthful claims, intake repo read-only, no domain/production changes |
| Boundaries | five pods only; no fake proof, public pricing, or full CRM/PMS replacement |
| Iteration policy | inspect, design, build, test, review, fix up to three passes, then verify fresh |
| Blocked stop condition | repeated critical/high finding, missing access, production-only requirement, or unprovable claim |

## Definition Of Done

- Homepage makes ITP's receptionist-to-operations offer clear.
- `/auto-repair`, `/hvac`, `/dental`, `/roofing`, and `/med-spa` are complete and differentiated.
- Navigation, metadata, sitemap, booking CTA, and existing legal/intake/demo paths work.
- Real founder/operator/social credibility is used where verified; nothing is fabricated.
- Lint/build pass and fresh browser proof covers desktop/mobile with no blocker defects.
- Fresh verifier reports pass against the vision lock, DoD, and all gates.
- Final branch/PR and Linear evidence are recorded; production is unchanged.

## Guarded Authority

The executing agent may inspect, edit, test, create an isolated branch, commit, push, and open/update a PR. It may not publish to production, change domains, alter credentials, write to the intake repo, or make customer-facing commitments.

## Source Context

- Repo: `/Users/mattbender/projects/In-The-Past-AI-Website-1`
- Execution worktree: `/Users/mattbender/.codex/worktrees/zta-835-itp-five-pod-plan`
- Source phase: `docs/planning/phase-001-itp-consulting-site-five-pods/plan.md`
- Subphases: `a/plan.md` through `e/plan.md`
- Current adjacent work: website PR #1 (`codex/fix-portal-wrapper-route`)
- Unrelated files to leave untouched: Vercel aliases/settings, credentials, intake/portal implementation
- Current date assumption: 2026-07-12

## Source-Of-Truth Inputs

- Planning docs: current phase and research files
- Process docs: repo `AGENTS.md` and `CLAUDE.md`
- External context, read-only:
  - `/Users/mattbender/projects/intake-form/docs/verticals/auto-repair.md`
  - `/Users/mattbender/projects/intake-form/docs/verticals/roofing.md`
  - `/Users/mattbender/projects/intake-form/docs/verticals/operator-pod-options.md`
  - `/Users/mattbender/projects/intake-form/docs/planning/MARKET-PODS-BUILD-PACKAGE-2026-07-01.md`
  - `/Users/mattbender/projects/intake-form/docs/planning/dental-pod/RESEARCH-BRIEF.md`
- Linear: `ZTA-770`, `ZTA-835`, `ZTA-778`, `ZTA-830`, `ZTA-800`, `ZTA-803`
- Browser workflows: homepage -> each industry page -> discovery CTA; existing legal/intake/demo routes

## Evidence Pack

### PR And Branch Evidence

| Item | Value | Verification | Status |
|---|---|---|---|
| PR | pending | `gh pr view` | pending |
| Branch | `codex/zta-835-itp-five-pod-plan` at the execution worktree | `git status`, `git log` | ready for build |
| Commit | pending | `git show` | pending |
| CI | repo checks | GitHub/readback | pending |

### Deploy Evidence

| Item | Value | Verification | Status |
|---|---|---|---|
| Deploy target | local or PR preview only | browser | pending |
| Deploy URL | N/A until safe preview exists | browser | pending |
| Production | explicitly not authorized | readback | protected |

### Source API And Provider Evidence

N/A for direct provider mutations. Current public provider/industry docs may be read to verify claims.

### Workbook And Manual Input Evidence

N/A; this website phase has no workbook source.

### Transcript And Product Requirement Evidence

| Source | Requirement | Impact | Follow-up |
|---|---|---|---|
| Matt 2026-07-12 request | five pods, broader systems, Claude goal | entire build | no |
| Linear `ZTA-770` | consulting-firm repositioning | homepage/message | no |
| Linear `ZTA-835` | per-industry routes and SEO | industry system | update scope to five |

### Browser Evidence

| Workflow | Target | Expected proof | Status |
|---|---|---|---|
| Homepage story | `/` | operations positioning and five-pod navigation | pending |
| Five pod journeys | five routes | native copy and working CTA | pending |
| Mobile | 390px or equivalent | no overflow/overlap; touch-safe controls | pending |
| Desktop | 1440px+ | coherent hierarchy and next-section visibility | pending |

## Source Mapping Table

| Source | Website surface | Verification | Status |
|---|---|---|---|
| `research-brief.md` | five-pod registry and page claims | citation/claim audit | pending |
| intake pod docs | workflows and boundaries | repo readback | pending |
| real ITP assets | credibility sections | source-path inventory | pending |

## Preflight Uncertainty Ranking

| # | Uncertainty | Impact | Proposed resolution | Confidence | User amendment |
|---|---|---|---|---:|---|
| 1 | Public pricing | copy/CTA | use "book a call" only in v1 | 88% | none |
| 2 | Implementation base relative to PR #1 | branch safety | current build branch includes PR #1 head; keep stacked until PR #1 merges, then rebase/retarget | 96% | none |
| 3 | Missing real proof assets | credibility | omit or use honest non-proof placeholders; never fabricate | 95% | none |
| 4 | Shared template may flatten pages | product quality | share structure/data primitives, but allow distinct narrative modules where needed | 87% | none |
| 5 | Med Spa vs Veterinary as fifth pod | portfolio | keep Med Spa for first wave; revisit after real market calls | 86% | none |

## Autonomous Loop

1. Read this artifact, vision lock, root plan, research, repo instructions, and current PR state.
2. Run Skill Oracle for the active build and design capabilities.
3. Restate frozen intent, priority order, boundaries, and branch plan before editing.
4. Complete 001a and 001b; record claims and the chosen design system on disk.
5. Build 001c first; it owns the shared shell, navigation, CTA, and homepage.
6. Build 001d second; it owns the typed pod registry, five routes, route metadata, sitemap, and route tests.
7. Run lint/build continuously and repair regressions.
8. Launch the real site locally; complete the homepage and all five route journeys on desktop/mobile.
9. Run an independent fresh-context review against only artifacts, diff, and evidence.
10. Fix blocker/major findings, maximum three passes.
11. Run the drift, product-truth, verifier, and strategy-confidence gates.
12. Commit/push/open or update a PR and write Linear proof. Do not publish production.
13. Stop only at verified done or a documented stop condition.

## Successor Phase Policy

Create a successor phase only when the current phase cannot satisfy the frozen five-page outcome. Do not create new vertical phases until this DoD is complete. A drift signal halts successor creation.

## Drift Gate

Before completion or any successor, check: the site still serves the phone-to-operations outcome; no extra vertical or product scope entered; existing routes still work; the design remains human, credible, and non-generic. Any failure triggers a scoped sweep or stop.

## Required Skills

`skill-oracle`, `design-intelligence`, `reference-match-design-qa`, `ecc-frontend-design`, `ecc-e2e-testing`, `browser-harness`, `ultra-review`, and `verify`. Use the smallest useful stack at each stage.

## Agent And Model Routing

Claude Fable is the primary planner/builder at high effort. Use bounded research/design/review lanes only where they add independent evidence. The actor does not grade its own final work; use a fresh verifier.

## Prompt Or Model Eval Gate

| Item | Value |
|---|---|
| Prompt/model change | Fable artifact-pointer execution prompt |
| Baseline | current single-page site and route inventory |
| Changed score | user journeys and screenshot quality after build |
| Regression failures | none allowed on current routes/CTA/legal pages |
| Cost/latency | avoid unnecessary heavy dependencies and animation |
| Promotion | PR only after all gates pass |

## Priority Order

1. P0: truthful consulting-firm homepage, five native pages, working journeys, build/browser proof.
2. P1: real credibility assets, refined motion, strong SEO/internal linking, maintainable content system.
3. P2: extra editorial media or secondary polish. First to cut.

## Scope Boundaries

In scope: homepage, five routes, shared site navigation/layout, truthful credibility, metadata/sitemap, local/preview proof, PR and Linear evidence.

Out of scope: Restaurants and other verticals, intake-repo writes, production publish, domain changes, paid assets, customer sends, new account connections, and full CRM/PMS replacement.

## Verification Gates

| Gate | Method | Pass criteria | Rollback plan |
|---|---|---|---|
| Static | `npm run lint` | zero build-owned errors | N/A (read-only) |
| Build | `npm run build` | production build succeeds | N/A (read-only) |
| Routes | local HTTP/browser check | all six routes and CTAs work | revert build branch commits; owner Claude/Matt |
| Claims | source-to-copy audit | every claim sourced or removed | revert claim copy; owner Claude |
| Browser | fresh desktop/mobile run | no blocker visual/interaction defects | revert affected UI commit; owner Claude |
| PR/CI | `gh pr view` and check readback | branch pushed, PR reviewable, checks green or exact blocker | close/revert PR; owner Matt/Claude |
| Product-truth | Matt-test journey in fresh real app | homepage and one real pod journey complete against current site content | revert affected commit; owner Claude |
| Final review | fresh verifier | no blocker/major findings | return to fix loop |

## Product-Truth Launch Gate

Launch the real app locally or on a safe PR preview. Complete the homepage -> industry page -> discovery CTA journey for every one of the five pods using the current real navigation and configured CTA. Capture fresh desktop and mobile screenshots for the homepage and all five pod pages, plus the interaction states in 001e. Build output alone is inadmissible.

## Verifier Gate

A fresh-context verifier receives only this artifact, the final diff, command outputs, route/readback evidence, and screenshot paths. It checks every Matt-test, DoD item, and verification row. Missing evidence is failure. Any blocker or major finding returns the actor to the fix loop; malformed verdict is failure.

Expected verdict shape:

```json
{"verdict":"pass|fail|stuck","criteria":[],"live_launch_evidence":{"launched":true,"entrypoint":"<url>","real_user_action":"<journey>","non_authored_data":"current real site configuration","screenshots":[]},"summary":"<scoreboard>","next_action":"<action>"}
```

## Lightweight Run Ledger

| Field | Value |
|---|---|
| Status | not-started |
| Current phase | phase-001 |
| Active PRs | website PR #1 adjacent; implementation PR pending |
| Active branch | `codex/zta-835-itp-five-pod-plan` based on PR #1 head `1d4b602` |
| Last verified gate | none |
| Successor phases created | none |
| Evidence links | none |
| Lessons distilled | none |
| Last updated | 2026-07-12 |

## Stop Conditions

- Three failed fix passes or the same blocker/major finding three times.
- Required credentials, preview access, or branch state is unavailable.
- A production change, domain change, destructive operation, or policy bypass becomes necessary.
- The plan requires an unprovable customer/compliance claim.
- Current PR work cannot be reconciled without risking unrelated changes.
- Fresh browser proof cannot show the Matt-test outcome.

## Final Report Requirements

Report branch, commit, PR, lint/build results, six-route screenshot paths, claim audit, current deploy state, Linear update, scope cuts, remaining limitations, and exact blocker if any. Keep production status explicit.

## Strategy Confidence Loop

After the verifier passes, state the final strategy, inspect for hidden assumptions, missing evidence, silent scope cuts, rollback gaps, and contradictions with the vision lock. Fix material findings on disk and rerun the verifier. Exit after an evidence-backed confidence statement or three iterations; confidence never overrides a failed verifier or stop condition.
