# Phase 001d - Five Industry Routes

## Mission
Create differentiated routes for Auto Repair, HVAC, Dental, Roofing, and Med Spa using the smallest maintainable content architecture that still supports real vertical specificity.

## Assignment
- Role: frontend builder
- Depends on: 001a, 001b, 001c
- Can run with: none
- Required routes: `/auto-repair`, `/hvac`, `/dental`, `/roofing`, `/med-spa`
- Owns: `lib/marketing/market-pods.ts` (or an equivalently typed registry), route-specific page modules/components, route metadata, `app/sitemap.ts`, and route tests. Use explicit route modules or a dynamic route with `generateStaticParams` that enumerates exactly these five paths.

## Retrieval Plan
- Consume the five knowledge files, claims matrix, design packet, and stable shared shell.
- Inspect current Next.js local docs before choosing dynamic versus explicit route architecture.
- Stop when every required path is generated, linked, source-backed, and independently testable.

## Acceptance Criteria
- Every page has a native hero, pain model, phone wedge, broader workflow/internal-tool story, proof-safe credibility, FAQ, and CTA.
- Shared components do not make the pages read like noun-swapped templates.
- Metadata, canonical URLs, sitemap, and internal linking are correct.
- Dental and Med Spa copy obey compliance and medical-boundary rules.
- Mobile layouts have no overflow, overlap, or hover-only interactions.
- The homepage replaces hover-only flip cards with semantic links to all five routes.
- Route-level metadata and screenshots structurally prove all five pages exist.

## Evaluation
Route-level build proof, sitemap readback, desktop/mobile screenshots for all five pages, link checks, and a cross-page duplication audit.

## Recovery And Safety
Do not touch Vercel aliases or production settings. Remove any claim that cannot survive a source check.

## Output Contract
- status: five-routes-ready
- summary: typed pod content system, five differentiated routes, metadata, sitemap, and internal links
- next_actions: 001e integrates and verifies every route/state
- artifacts: registry, route files/components, sitemap, tests, and ten route screenshots

## Downstream Consumers
Subphase 001e.

## Stop Conditions
Stop if route architecture breaks existing legal/intake/demo routes, page differentiation fails the claim/content matrix, or any medical/compliance claim remains unverified.
