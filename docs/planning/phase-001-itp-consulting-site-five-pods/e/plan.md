# Phase 001e - Integration And Verification

## Mission
Prove that the homepage and five industry routes form one coherent, working public site and leave a reviewable PR/evidence packet.

## Assignment
- Role: integrator, test runner, visual verifier, fresh-context reviewer
- Depends on: 001c, 001d
- Can run with: none

## Retrieval Plan
- Read the final diff, every phase artifact, and the current PR/branch state.
- Run the app fresh and inspect every required route and state.
- Stop only when every matrix row has evidence or a named blocker.

## Acceptance Criteria
- `npm run lint` and `npm run build` pass or an exact pre-existing failure is proved.
- Fresh local launch supports full homepage -> industry page -> booking CTA journeys.
- Screenshots exist for homepage and all five pages at desktop and mobile widths.
- No console errors, broken links, overlap, clipped text, inaccessible hover-only controls, or fake/unsourced proof remain.
- Fresh verifier sees only the artifacts and evidence and reports no blocker/major finding.
- Branch/PR and Linear include final proof; production remains unchanged.
- Accessibility checks cover semantic accordion/tabs, modal focus behavior, visible focus, keyboard navigation, reduced motion, and touch-safe industry links.

## Screenshot And State Matrix

| Route/state | 390px | 1440px |
|---|---|---|
| `/` default | required | required |
| `/auto-repair` default | required | required |
| `/hvac` default | required | required |
| `/dental` default | required | required |
| `/roofing` default | required | required |
| `/med-spa` default | required | required |
| mobile navigation open | required | N/A |
| booking modal open | required | required |
| booking embed failure fallback | required | required |
| reduced-motion journey | required | required |

## Existing-Route Regression Matrix

| Surface | Routes/actions | Required proof |
|---|---|---|
| Legal | `/privacy`, `/terms`, `/subprocessors` | HTTP/browser load with no new console error |
| Intake wrappers | `/intake`, `/auto-repair-intake`, `/dental-intake` | same-origin wrapper loads and footer/legal links remain usable |
| Portal wrappers | `/client`, `/client-portal` | current wrapper behavior preserved |
| Funnel wrapper | `/funnel` | current same-origin funnel behavior preserved |
| Portal entry | `/portal` | current redirect/wrapper behavior preserved |
| Demo/Vera | homepage voice demo and `/vera-test` | launch/close journey remains usable |
| Booking | homepage and all five industry CTAs | configured booking path opens; visible fallback exists on embed failure |

## Recovery And Safety
Maximum three fix passes. Stop with evidence on repeated blockers, missing access, production-only requirements, or unresolved high-risk claims.

## Output Contract
- status: pass, fail, or stuck
- summary: gate scoreboard with exact evidence
- next_actions: ship PR, return to fix loop, or report blocker
- artifacts: command logs, route matrix, screenshot paths, verifier verdict, PR URL, Linear proof

## Downstream Consumers
Matt, Linear `ZTA-770`/`ZTA-835`, and the final PR reviewer.

## Stop Conditions
Three failed fix passes, repeated blocker/major finding, missing safe preview access, or any required production/domain mutation.
