# Deep Sweep Findings

## Problem Set

- P1: Identify the Linear source of truth and avoid duplicate work.
- P2: Select five pods based on market need, ITP readiness, operator scalability, and expansion beyond voice.
- P3: Reposition the website from voice agency to vertical AI operations partner.
- P4: Give Claude/Fable enough structure to finish without taking away its design and implementation judgment.
- P5: Preserve truthful proof, compliance boundaries, branch safety, and live browser verification.

## Cross-Lane Agreement

The five-lane synthesis concluded that voice answering alone is commoditizing and that ITP's larger value is the workflow and internal-tool layer after the call. Auto and HVAC recurred at or near the top across the independent lenses. Dental and Roofing were consistently attractive but carried different risks: Dental has compliance/integration friction; Roofing has seasonality and insurance-process variance.

## Disagreements Resolved

- Property management had the strongest abstract internal-tool depth, but it lost on first-wedge clarity and incumbent strength.
- Veterinary had strong phone pain, but ITP has no current operator, proof, or build lane there.
- Restaurants had obvious labor pain and existing product work, but thin margins, POS ownership, and specialized voice incumbents weaken its commercial priority.
- Med Spa carries compliance risk but wins the fifth slot due to high-value consults, cash-pay economics, strong reactivation/membership workflows, and existing pod work.

## High-Risk Findings And Patches

| Finding | Severity | Patch |
|---|---|---|
| Existing Linear work overlaps (`ZTA-770` and `ZTA-835`) | High | Treat `ZTA-770` as umbrella and `ZTA-835` as implementation; update both rather than create a duplicate website issue. |
| Current website branch has open PR #1 | High | Execute in an isolated branch/worktree and preserve current route/CTA work; do not mix unrelated commits. |
| Public proof may be incomplete | High | Build a proof inventory; omit or label placeholders; never invent logos, testimonials, metrics, customers, podcasts, or results. |
| Dental/Med Spa copy can imply unsafe compliance | High | Use only verified administrative claims; state current readiness honestly; no clinical advice or blanket compliance claim. |
| Six-page issue includes Restaurants | Medium | Revise first-wave scope to five pages: Auto, HVAC, Dental, Roofing, Med Spa. Keep Restaurants parked. |
| Public pricing is unresolved | Medium | Default v1 to "book a call"; make pricing a later approved package decision. |
| Fable can overbuild when over-prompted | Medium | Point it to artifacts, state intent and boundaries once, then let it choose architecture and art direction. |

## Deep-Sweep Verdict

Proceed. The project is build-ready when Claude reads the vision lock, research brief, phase plan, and goal artifact. The build must stop before production publish or any customer-facing claim that cannot be proved.
