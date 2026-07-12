---
phase_intent: feature
default_slice_type: vertical
isolation: worktree
source_linear: [ZTA-770, ZTA-835]
---

# Phase 001 - ITP Consulting Site And Five Market Pods

## Original User Request (verbatim)

What task from linear describes the website improvements + separate industry sectors?

I want to have claude start on this project

I want you to also think about what five market pods we should be targeting. Right now we have auto repair but the other ones are still a little bit unclear as to which ones we need to prioritize. If we were to decide on those five main ones, what would they be so that we can build the industry-specific different website sectors around these and have all of our knowledge base about this as well?

I know one of them could be dental since we're already going down that realm. We could consider that as another one but really what else we should be targeting. If you were to study this industry and do a bunch of research on the biggest needs in this market and which industry has the biggest need for this sort of thing, you have got to keep in mind that an AI receptionist is not the only part of it. Part of it is that we're going to also help to build other systems and basically build an internal tool that they can use too.

That's a larger picture goal with what we do with these different companies. You need to do the research phase of this properly, phase it out, and then do a deep sweep. Run this as a goal non-stop until it's done but use the goal post still as well.

I want CLAWG to also improve the website and see if there's anything we can improve and just make it even better. There are a couple layers to this task that should be all outlined, maybe in linear but also in a handoff doc, like in CLAWG, with the proper folder.

## Product Frame

- User / operator: a local-business owner evaluating ITP, plus Matt and future market operators sending the site during sales conversations.
- Pain / job to be done: the current site sells a narrow voice-agent category and does not show the operational systems ITP can build around each industry.
- Why now: operator pods, dental work, and vertical product work are already active, while the public website still has dead-end industry cards.
- Smallest acceptable win: a repositioned homepage plus five credible industry routes with truthful copy, clear workflows, working CTAs, SEO metadata, and desktop/mobile proof.
- Anti-goal: a generic AI landing-page reskin or six shallow pages that differ only by nouns.
- Success metric: Matt can confidently send the right page to a prospect in each priority pod and the page makes the receptionist-to-operations progression obvious.

## Purpose

Turn `www.inthepast.ai` into a credible vertical AI operations consultancy site and launch first-wave pages for Auto Repair, HVAC, Dental, Roofing, and Med Spa.

## Context

- `ZTA-770` is the umbrella strategy issue.
- `ZTA-835` is the actual website implementation issue and should be updated from six pages to the five-pod decision.
- Open PR #1 contains route/CTA work and must not be contaminated.
- The intake repo is source context only during this build. Any write-back belongs in a separate reviewed branch/PR.
- Deep-sweep research is in `research-brief.md` and `deep-sweep-findings.md`.

## Skills Available for Implementation

- `skill-oracle` for execution-time routing.
- `deep-sweep` and `phase-plan` for the current package.
- `design-intelligence` and `reference-match-design-qa` for art direction and screenshot repair.
- `ecc-frontend-design`, `ecc-e2e-testing`, `browser-harness`, `ultra-review`, and `verify` for implementation proof.
- `goal-post` for the autonomous artifact in `docs/planning/goals/`.

## Concurrent Work

| Work | State | Overlap | Coordination |
|---|---|---|---|
| Website PR #1 | Open | routes, CTA, intake wrappers | This branch is fast-forwarded to PR #1 head `1d4b602`; keep the eventual implementation PR stacked until PR #1 merges, then retarget/rebase cleanly. |
| `ZTA-778` pod framework | In progress | industry facts and product capabilities | Read as source; do not claim unverified production readiness. |
| `ZTA-830` dental | In progress | dental demo/compliance facts | Use truthful current posture and distinguish built from planned. |

## Agent Team And Dependency Graph

| Lane | Subphase | Role | Depends on | Output |
|---|---|---|---|---|
| Strategy/content | a | product researcher + copy lead | none | five-pod content registry and proof-safe claims |
| Design/trust | b | design researcher | none | art direction, credibility inventory, page anatomy |
| Homepage | c | frontend builder | a, b | consulting-firm homepage, shared navigation, global layout, CTA policy |
| Industry system | d | frontend builder | a, b, c | five real routes, typed registry, metadata, workflow sections |
| Integration/proof | e | integrator + fresh verifier | c, d | tests, sitemap, browser screenshots, claim audit, PR evidence |

## Evaluation Strategy

- RED baseline: six dead-end industry flip cards, a voice/chatbot-led service story, unsupported or over-broad claims, and no per-industry SEO routes.
- GREEN: five differentiated pages and a homepage that communicates the phone-to-operations arc.
- Regression: existing legal routes, intake wrappers, Vera/demo behavior, booking CTA, performance, and mobile layout remain functional.
- Proof: build/lint, fresh browser run, console check, route click-through, and desktop/mobile screenshots for all six affected pages.

## Constraints And Safety

- Do not publish to production or alter domain aliases without Matt approval.
- Do not invent proof or compliance status.
- Prefer the existing stack and reusable components, but replace weak patterns when the design packet justifies it.
- Use a typed content registry and one shared page system only if it still allows genuinely distinct page narratives.
- Keep public v1 pricing as "book a call" unless Matt explicitly changes the decision.
- Treat the current "Trusted by 200+ businesses," "42,680+ calls," "13,820+ appointments," "250+ active deployments," and anonymous verified testimonials as unverified until the credibility inventory proves them. Remove or replace any unsupported item.
- Accessibility is a hard gate: semantic accordions/tabs, modal dialog semantics with focus trap and restoration, visible focus, keyboard navigation, and `prefers-reduced-motion`.
- On mobile, allow at most one persistent floating action. Voice/demo and booking controls may not cover navigation, proof, FAQ, or CTA content.
- Stop on unresolved critical/high review findings, broken current behavior, missing access, or a required production mutation.

## ADR Candidates

- One shared typed industry-page system versus five fully bespoke routes.
- First-wave five-pod portfolio and Restaurants as a parked vertical.
- Public pricing deferred in favor of discovery CTA.

## Success Criteria

- Homepage positions ITP as an AI operations and workflow consulting partner.
- Pages exist for `/auto-repair`, `/hvac`, `/dental`, `/roofing`, and `/med-spa`.
- Each page names native pains, the phone wedge, workflows beyond reception, and a realistic next step.
- Industry navigation works on desktop and mobile, with no hover-only dead ends.
- Founder/operator/social credibility uses only verified assets.
- Durable pod knowledge lives under `docs/knowledge/market-pods/`, with a claims matrix and one source-backed file per first-wave pod.
- SEO metadata and sitemap include the five routes.
- `npm run lint` and `npm run build` pass, or the exact pre-existing blocker is proved.
- Fresh desktop/mobile screenshots and console checks show no blocker-class defects.
- A fresh verifier finds no unresolved critical/high findings.
- PR and Linear contain the final evidence; production remains unmodified.

## Subphase Index

| ID | Slice type | Workstream | Depends on | Can run with | Dominant risk | Outputs |
|---|---|---|---|---|---|---|
| a | horizontal | Pod content and knowledge system | none | b | generic or unsafe claims | copy/claim matrix |
| b | horizontal | Design and credibility system | none | a | over-prescribing Fable or fake proof | direction + inventory |
| c | vertical | Homepage repositioning and shared shell | a, b | none | visual/message drift | homepage + shared layout/nav/CTA |
| d | vertical | Five industry routes | a, b, c | none | shallow templating | routes + registry + SEO |
| e | horizontal | Integration and verification | c, d | none | false done | evidence pack + PR |

## Dispatch Recommendation

- Start immediately: a and b.
- Then: c, which owns shared layout/navigation/CTA files.
- Then: d, which consumes the shared shell and owns the typed pod registry plus route-specific files. C and D are serial.
- Final: e.
- Recommended execution: Claude Fable follows `docs/planning/goals/phase-001__itp-consulting-site-five-pods.md` with high effort and its own implementation judgment.
