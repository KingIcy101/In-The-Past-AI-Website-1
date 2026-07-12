# Phase 001a - Pod Content And Knowledge System

## Mission
Create the proof-safe, source-backed content model for Auto Repair, HVAC, Dental, Roofing, and Med Spa so every page feels native and can feed future operator knowledge.

## Assignment
- Role: product researcher and vertical copy lead
- Depends on: none
- Can run with: 001b
- Inputs: root research brief, intake pod docs, current website copy, Linear issues
- Target artifacts:
  - `docs/knowledge/market-pods/claims-matrix.md`
  - `docs/knowledge/market-pods/auto-repair.md`
  - `docs/knowledge/market-pods/hvac.md`
  - `docs/knowledge/market-pods/dental.md`
  - `docs/knowledge/market-pods/roofing.md`
  - `docs/knowledge/market-pods/med-spa.md`

## Retrieval Plan
- Read the exact intake source files named in the root research brief.
- Audit current website metrics, testimonials, and customer-count claims against source paths or URLs.
- Stop retrieval when every public claim is either sourced, rewritten as non-quantified positioning, or removed.

## Acceptance Criteria
- One structured content record per pod: buyer, pain, phone wedge, five broader workflows, integrations, safe claims, unsafe claims, proof available, CTA.
- Every factual metric has a source or is removed.
- Dental and Med Spa distinguish administrative automation from clinical judgment and do not claim current compliance without proof.
- Restaurants remain parked, not silently deleted from historical product docs.
- The claims matrix records `claim`, `pod`, `source_path_or_url`, `allowed_copy`, `status`, and `last_verified`.

## Evaluation
- RED: noun-swapped generic copy and unsourced ROI claims.
- GREEN: each page could only plausibly belong to its named industry.

## Recovery And Safety
When source truth conflicts, prefer current repo/Linear proof and omit the claim. Do not write back to the intake repo during this build.

## Output Contract
- status: ready only when all six artifacts exist and every public claim has a disposition
- summary: five pod narratives plus a site-wide credibility/claims ledger
- next_actions: feed the typed registry and page copy in 001d
- artifacts: the exact files listed above

## Downstream Consumers
Subphases 001c, 001d, and 001e.

## Stop Conditions
Stop on a requested claim that has no defensible source, a compliance claim requiring legal approval, or missing private proof that only Matt can provide.
