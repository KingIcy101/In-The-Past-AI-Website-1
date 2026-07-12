# Phase 001b - Design And Credibility System

## Mission
Turn the frozen design constraints into a no-reference design packet and a real credibility inventory without forcing Fable into a predetermined layout.

## Assignment
- Role: design researcher
- Depends on: none
- Can run with: 001a
- Inputs: `docs/design/itp-consulting-site-direction.md`, current rendered site, real ITP assets
- Target artifacts:
  - `docs/design/itp-consulting-site-build-packet.md`
  - `docs/proof/credibility-inventory.md`

## Retrieval Plan
- Inspect the current site at desktop and mobile before choosing the replacement direction.
- Inventory current palette, typography, motion, cards, floating widgets, navigation, proof, and CTA behavior.
- Stop when one buildable direction and a route/state proof matrix are documented.

## Acceptance Criteria
- One coherent direction is chosen and documented before UI code changes.
- Page anatomy, typography, color, imagery, motion, responsive behavior, state coverage, and proof surfaces are explicit.
- Real founder/operator/podcast/demo assets are inventoried with source paths; missing proof is omitted or honestly labeled.
- The direction breaks the current one-note AI-SaaS treatment while retaining useful brand equity.
- The packet defines a calmer multi-color consulting palette, workflow/process evidence surfaces, restrained motion, and what happens to the ticker, custom cursor, aura/glows, and card-heavy sections.
- The credibility inventory uses `asset_or_claim`, `source_path_or_url`, `allowed_use`, and `status`.

## Evaluation
- RED: another dark card grid with glows and generic AI art.
- GREEN: an owner can see a human consultancy and an operational system within the first viewport and next section.

## Recovery And Safety
If no suitable real imagery exists, use restrained editorial imagery or product/process evidence. Never fabricate people or customer proof.

## Output Contract
- status: ready only when the build packet and credibility inventory exist
- summary: one chosen art direction, state matrix, and proof inventory
- next_actions: constrain 001c and 001d without prescribing their exact layout
- artifacts: `docs/design/itp-consulting-site-build-packet.md`, `docs/proof/credibility-inventory.md`

## Downstream Consumers
Subphases 001c, 001d, and 001e.

## Stop Conditions
Stop if the only viable direction requires unlicensed assets, invented proof, or a new production dependency that has not been approved.
