---
artifact: credibility-inventory
phase: 001b
role: design researcher
status: ready
created_at: 2026-07-12
purpose: >
  Inventory of REAL, usable credibility assets in this repo/product, with an honest
  list of what is missing. Downstream (001c/001d) may only present assets marked
  ready; never fabricate people, customers, quotes, logos, metrics, podcasts, or
  compliance status. Verbal/claim wording is governed by the lane-001a claims matrix
  (docs/knowledge/market-pods/claims-matrix.md); this file is about proof ASSETS.
legend:
  allowed_use: how the asset may appear publicly
  status: ready | missing | needs-Matt (real but requires Matt's input/permission/env)
---

# ITP Credibility Inventory

## 1. REAL, usable assets (verified in repo/product)

| asset_or_claim | source_path_or_url | allowed_use | status |
|---|---|---|---|
| **Live callable voice demo (Vera)** — real Vapi assistant a prospect can talk to now | `components/sections/DemoSection.tsx`, `components/layout/VeraModal.tsx` (assistant `ed8bf625-bb0b-4813-8a4b-726cb5fc4dc4`) | Primary interactive proof site-wide ("Hear it answer"). Real product, not a claim. | ready (see §3 env note) |
| **Live auto-repair client — Daniel's Paint and Body** (bilingual EN/ES agent running today) | `docs/knowledge/market-pods/auto-repair.md` (lines ~10, 136) | Reference the *existence* of a live client on the Auto Repair page: "already live in a real shop." **No named quote/logo** without Matt's permission. | ready (reference only) / needs-Matt (name, quote, or logo use) |
| **Dental demo agent + dental intake** | `/dental-intake` (rewrite in `next.config.ts` → intake-form-sigma `/intake-dental`); dental pod work in `docs/planning/.../a/plan.md`; MEMORY (demo agent live) | Show dental as a real active lane via the live demo + working intake. Distinguish "demo/intake built" from "named paying client." | ready (demo/intake) / needs-Matt (any nameable dental client) |
| **Client portal (real product surface)** | `/client`, `/client-portal` → same-origin proxy to `intake-form-sigma.vercel.app/client` (`next.config.ts`) | Show as a real deliverable ("every call, booking, and lead visible in your portal"). Link, don't screenshot-fake. | ready |
| **Operator/ops portal** | `app/ops/page.tsx`, `app/portal/page.tsx` → `intake-form-sigma.vercel.app/ops`, `/portal` | Evidence of the operations layer; treat as internal product capability, not a public login CTA. | ready |
| **Intake / onboarding forms** | `/intake`, `/auto-repair-intake`, `/dental-intake` (`next.config.ts`) | Real "this is how a shop's agent gets configured" proof; wire pod CTAs to the matching intake. | ready |
| **Discovery-call booking** | `https://cal.com/randy-mendez/ai-receptionist-discovery` (`components/ui/CalModal.tsx`, `app/funnel/page.tsx`) | The real booking path behind every "Book a discovery call" CTA (Randy Mendez). | ready |
| **Native Spanish voice (shipped capability)** | `docs/knowledge/market-pods/auto-repair.md` (line ~144); MEMORY (native Spanish) | Capability claim for Auto/relevant pods: bilingual EN/ES, native (not accented TTS). Product-true. | ready |
| **Body-shop workflow / status board (shipped)** | `docs/knowledge/market-pods/auto-repair.md` (lines ~80, 143) | Basis for the Auto "is my car ready?" workflow story + a code/SVG illustration (not a fabricated screenshot). | ready |
| **Legal / trust pages (real)** | `app/terms/page.tsx`, `app/privacy/page.tsx`, `app/subprocessors/page.tsx` | Real ToS/Privacy + a real subprocessor list = infrastructure/compliance-posture credibility. Link from footer. | ready |
| **Public contact email** | `hello@inthepast.ai` (used across `app/{privacy,terms,subprocessors}`) | Public contact in footer/CTA fallback. (Note: app *sends* as `auto@`; `hello@` is the established public contact.) | ready |
| **Brand: ITP logo + mark** | `public/logo.png` (2000×2000, RGBA), `public/favicon.png` (64×64), root `orange logo version (1–7).png` | Real brand asset — logo, favicon, nav/footer mark. | ready |
| **Custom SVG icon system** | `components/ui/Icons.tsx` (29 icons, no emoji) | Consistent iconography (re-tokenize color per build packet §8). | ready |
| **Domain / product identity** | `https://www.inthepast.ai` (`app/sitemap.ts`, `app/robots.ts`) | Live public domain; real OG image `app/opengraph-image.tsx`. | ready |
| **Industry context statistics** (BLS ~250k repair establishments; ADA staffing/lost-call guidance; ServiceTitan 10-K; AmSpa $17B+ med-spa) | `docs/planning/.../research-brief.md` (Evidence §) | Usable ONLY as clearly-labeled, cited *industry context* — never as an ITP result or metric. | ready (as sourced industry context) |

## 2. What is MISSING or fabricated (never invent — honest-fallback guidance)

| asset_or_claim | current state / source_path_or_url | honest fallback | status |
|---|---|---|---|
| **Founder / team names, photos, bios** | None anywhere in repo. Handoff + direction packet explicitly forbid inventing founder history. | Text-only, honest "who we are" (a small operating team that builds the systems) with **no fabricated headshots or bios**; or omit the About block until Matt supplies real names/photos. Satisfies Matt-test #5 via honest placeholder. | missing / needs-Matt |
| **Customer testimonials / quotes** | Current `Testimonials.tsx` is **fabricated** (Sarah M., Dr. Lisa K., …) incl. "All reviews verified" — KILL. | Show the **live demo** ("hear it yourself") and the live-client *reference* instead of a quote. Add a real quote only when Matt supplies an approved one. | missing / needs-Matt |
| **Customer logos / logo wall** | None real. | Omit entirely. Never place placeholder or invented logos. | missing |
| **Aggregate metrics** — "200+/250+ businesses", "42,680+ calls", "13,820+ appointments", "94% booking", "3× leads", "<4s", "$52K lost", "31%/47%/85%" | Fabricated/unverified across `Stats.tsx`, `PainPoints.tsx`, `TrustSignals.tsx`, `LiveCounter.tsx`, `Features.tsx`. All KILL/soften per build packet §8. | No ITP performance metric until measured + sourced. Missed-call/economics figures only as cited *industry context*, clearly labeled. Governed by lane-001a claims matrix. | missing |
| **Daniel's Paint and Body — name/quote/logo use** | Live client exists (real), but no approved public quote/logo/name-use on file. | Reference "a live auto-body client" without naming/quoting until Matt confirms permission. | needs-Matt |
| **HVAC / Roofing / Med Spa live client proof** | No live paying client identified for these three (Auto = live; Dental = demo/intake lane). | Lean on the live Vera demo + honest "built for {vertical}" capability framing + industry context. No implied customers. | missing (per-pod) |
| **Podcast / social presence** (YouTube, IG, LinkedIn, X, Spotify) | No links anywhere in repo. | Omit social/podcast entirely until real handles exist. Never invent a podcast. | missing / needs-Matt |
| **Case study / measured outcome** | None exists. | Use process/workflow storytelling (what the system does), not outcome numbers, until a real measured case study exists. | missing |
| **Compliance status** (HIPAA, SOC 2, etc.) | No verified claim; `subprocessors` page is real infra disclosure but not a certification. | State administrative-automation posture honestly; no blanket compliance/HIPAA claim (esp. Dental/Med Spa) without Matt/legal. | missing / needs-Matt |
| **Pricing / packages** | `FAQ.tsx` currently says "$750/month" — conflicts with the "book a call" v1 decision. | Public pricing = "book a call." Remove dollar figures until packages are standardized. | needs-Matt |
| **Integration claims** (HubSpot / Salesforce / GoHighLevel / Tekmetric / CCC ONE) | Asserted in `Features.tsx`/`HowItWorks.tsx`/`FAQ.tsx`; auto pod file says "works alongside," not "integrated." | Say "works alongside the system you already run"; only name a live integration once built. Governed by claims matrix. | needs-Matt / missing |
| **`NEXT_PUBLIC_VAPI_KEY` in production** | Vera demo (`DemoSection`, `VeraModal`) silently no-ops without the env key. | For the live demo to be *real* proof in prod, the key must be set; otherwise provide the booking CTA as the working fallback. | needs-Matt (env) |

## 3. Notes for downstream (001c / 001d / 001e)

- **One live client, not a roster.** Auto Repair (Daniel's) is the flagship live-client
  reference and the strongest asset. Dental is a real active lane (demo + intake).
  HVAC/Roofing/Med Spa currently prove value through the **live demo + capability +
  industry context**, not customers. Keep this distinction visible and honest.
- **The demo is the proof.** With no testimonials/metrics yet, the callable Vera demo,
  the working intake, and the real portal are the credibility spine. Feature them.
- **Claims wording** (what we may *say*) is owned by the lane-001a claims matrix; this
  inventory is the source of truth for what proof *assets* exist. If the two ever
  conflict, omit the claim.
- **Fabrication kill-list** (remove before any screenshot proof): `Testimonials.tsx`,
  `TrustSignals.tsx`, `LiveCounter.tsx`, and every unsourced metric in `Stats.tsx`,
  `PainPoints.tsx`, `Features.tsx`.
