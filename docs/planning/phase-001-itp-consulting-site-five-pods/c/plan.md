# Phase 001c - Homepage Repositioning

## Mission
Rebuild the homepage narrative so ITP is understood as the team that starts with communication and builds the operating workflows around it.

## Assignment
- Role: frontend builder
- Depends on: 001a, 001b
- Can run with: none; 001d follows after the shared shell is stable
- Owns shared surfaces: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `components/layout/**`, `components/hero/**`, homepage sections, shared CTA/modal accessibility, and the homepage industry navigation.

## Retrieval Plan
- Read current shared shell, hero, services, industries, proof, FAQ, floating widgets, and booking modal.
- Compare to the build packet and claims inventory.
- Stop when the homepage and shared shell can be verified independently before pod routes are added.

## Acceptance Criteria
- First viewport communicates category, audience, and outcome without feature-list jargon.
- The next visible section proves the receptionist-to-operations progression.
- Five industries are obvious, clickable, and usable on touch devices.
- Voice remains a strong entry product but no longer defines the whole firm.
- Current booking/demo/legal routes still work.
- First viewport and the next visible section show: calls -> qualification/routing -> follow-up/booking -> reporting -> internal tools.
- FAQ controls are semantic; booking modal has dialog/focus behavior and a visible failure fallback; reduced-motion behavior exists.
- One persistent mobile action maximum; fixed widgets never cover content.

## Evaluation
Build, lint, desktop/mobile screenshots, keyboard/touch navigation, console checks, and copy/claim audit.

## Recovery And Safety
Keep changes reversible and isolated. If existing route work from PR #1 is required, reconcile explicitly rather than copying stale code.

## Output Contract
- status: homepage-ready
- summary: repositioned homepage and accessible shared shell
- next_actions: 001d builds routes against these shared contracts
- artifacts: implementation diff plus screenshot paths for homepage desktop/mobile and required interaction states

## Downstream Consumers
Subphases 001d and 001e.

## Stop Conditions
Stop if PR #1 behavior regresses, the design requires fake proof, or shared shell changes cannot pass build and browser checks.
