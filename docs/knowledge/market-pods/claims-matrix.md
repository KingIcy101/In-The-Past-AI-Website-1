---
doc: ITP Site-Wide Claims Matrix & Credibility Ledger
phase: 001a
last_verified: 2026-07-12
governs: homepage + five pod pages (auto-repair, hvac, dental, roofing, med-spa)
rule: Every public claim must be sourced, rewritten as non-quantified positioning, or removed.
---

# Claims Matrix & Credibility Ledger

This is the credibility law for the ITP consulting site. It does two jobs:
1. **Current-site audit** — every quantified/credibility claim now live in
   `components/sections/` and `components/hero/`, with a disposition (keep / rewrite / remove).
2. **Pod claims ledger** — the claim table the five pod pages draw from:
   `claim | pod | source_path_or_url | allowed_copy | status | last_verified`.

Plus a proof inventory (what's real today), the proof gaps, and the global copy rules.

> **Verdict up front:** the current homepage is built almost entirely on invented proof —
> fabricated testimonials, a fake "live" counter, and invented customer/deployment counts
> (200+/250+/42,680+/13,820+). Under the vision lock and deep-sweep findings, none of it can
> ship. The three riskiest are called out in "Three riskiest claims" below.

---

## 1. Global copy rules (the governing law)

| # | Rule | Why |
|---|---|---|
| G1 | **No customer counts.** Never "200+ businesses", "250+ deployments", "dozens of verticals." We have a live auto client + demos, not a roster. | vision-lock anti-goals; deep-sweep "never invent customers/metrics" |
| G2 | **No aggregate performance metrics** ("42,680 calls handled", "94% booking rate", "3× leads") unless every input is real and shown. | build-verification; deep-sweep proof rule |
| G3 | **No fabricated testimonials or logos.** Named quotes require a real, Matt-approved customer. | vision-lock; deep-sweep |
| G4 | **Industry stats are allowed only as labeled industry context with a source** ("industry studies find ~30% of dental calls go unanswered"), never as an ITP result. | research-brief evidence list |
| G5 | **Integrations are "works alongside / named at intake, synced later"** — never "integrates with" unless a live integration exists for that client. | build-package §1.7 (name now, integrate later) |
| G6 | **Pricing defaults to "book a call" for v1.** No dollar figures on public pages until packages are standardized. | deep-sweep ("public pricing unresolved"); design direction |
| G7 | **Dental/Med Spa: administrative only, never clinical.** HIPAA = "HIPAA-ready, BAA executed at onboarding"; never "compliant today" / "certified." Cosmetic = cash-pay, never insurance. | dental brief §5; med-spa §4.5 |
| G8 | **No absolute guarantees** ("zero missed calls, guaranteed", "100% calls answered", "indistinguishable from a real receptionist"). Reframe as capability. | over-claim risk; dental transparency posture |
| G9 | **Position as a consulting firm**, not a voice-bot reseller: answer & capture → qualify & route → follow up & book → operate & report → build custom internal tools. | vision-lock Matt-test #1; design direction |

---

## 2. CURRENT-SITE AUDIT

Every quantified/credibility claim currently rendered on the homepage (`app/page.tsx`
mounts all of these). Disposition: **KEEP** / **REWRITE** / **REMOVE**.

### `components/hero/HeroSection.tsx`
| Claim | Quantified/credibility | Disposition | Allowed replacement / why |
|---|---|---|---|
| "Trusted by 200+ businesses" (badge) | customer count | **REMOVE** | Invented. No roster exists. Replace with a real, honest signal (e.g. "A live agent running in a real shop today") or nothing. |
| "In The Past AI is a voice receptionist that answers every call, 24/7…" (subhead) | positioning | **REWRITE** | Voice-only framing. Reframe: "starts by answering every call — then builds the follow-up, booking, reporting, and internal tools your business runs on." |
| "Every Missed Call Is a Lost Customer" (headline) | positioning | **KEEP** | Positioning, not a metric. Fine as a hook. |

### `components/hero/TrustBar.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "Serving Dental · Auto Repair · Law · Medical · Restaurants · Contractors" | implied active customers across 6 verticals | **REWRITE** | Implies a customer base we don't have; lists non-pod + parked (Restaurants) verticals. Reframe to the five pods with honest framing: "Built for: Auto Repair · HVAC · Dental · Roofing · Med Spa." |

### `components/hero/Stats.tsx` ("The Cost of Missed Calls")
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "40% of calls go unanswered across small businesses" | uncited stat | **REWRITE** | Keep only as labeled industry context with a source; otherwise remove. |
| "$75B lost annually from missed customer calls" | uncited macro stat | **REMOVE** | Indefensible; no credible source in our research. Drop it. |
| "85% won't call back after reaching voicemail" | uncited stat | **REWRITE** | Supportable (~85% appears across trade sources, build-package §2/§3) — keep as "industry studies find…" with attribution. |

### `components/sections/LiveCounter.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| Live "missed calls" counter (increments via `Math.random()`), labeled **"Live"** with a red pulse | **fabricated real-time data** | **REMOVE** | The number is invented in the browser. "Each number represents a real lead lost to a competitor" is false. Delete the whole counter. |
| "This counter has been running since you opened this page. Each number represents a real lead lost to a competitor." | fabricated claim | **REMOVE** | Same. |
| Industry ticker (Dental, Law, Medical, Home Services, Real Estate, Auto Shops, Financial Advisors, Veterinary, Insurance) | implied client base across 9 verticals | **REMOVE** | Implies customers we don't have; wrong verticals. Remove or replace with the five real pods as navigation, not "clients." |

### `components/sections/PainPoints.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "31% Of callers never call back" | uncited stat | **REWRITE** | Label as industry context + source, or remove. Conflicts with Stats' "85% won't call back" — pick one, source it. |
| "47% Of business calls happen after hours" | uncited stat | **REWRITE** | Label + source, or remove. Conflicts with Features' "38%." |
| "$52K+ In annual revenue lost per business" ("the average business loses over $52,000 a year") | uncited ROI as fact | **REMOVE** | Presented as fact with no source. Remove, or replace with a per-industry, sourced, clearly-labeled figure. |

### `components/sections/DemoSection.tsx` (Vera live demo)
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| Vera callable voice demo (real Vapi assistant) | live product | **KEEP** | Real, working demo — our best interactive proof. Keep and feature. |
| "Available now — no wait" | true for the demo | **KEEP** | Accurate. |
| Stats strip "< 4s Pickup time / 24/7 Always live / 100% Calls answered" | perf metrics + absolute | **REWRITE** | "100% Calls answered" is an absolute guarantee; "< 4s" is an unsourced metric. Reframe to capability: "Answers on the first ring · 24/7 · Never a busy signal." |

### `components/sections/WhatWeBuild.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "Answers in under 4 seconds" | unsourced perf metric | **REWRITE** | "Answers on the first ring." |
| "Logs everything to your CRM" | integration claim | **REWRITE** | "Captures and summarizes every call; works alongside your CRM." |
| "…indistinguishable from a real receptionist" | overclaim | **REWRITE** | Drop "indistinguishable." Also clashes with the dental transparency posture ("the AI announces itself"). |
| "Three tools. One agency." (voice + website chatbots + internal chatbots) | voice-led framing | **REWRITE** | Reframe to the consulting progression (G9), not a three-tool voice menu. |
| Internal Chatbots "Slack & Teams integration" | integration claim | **REWRITE** | "Works with Slack and Teams." |

### `components/sections/Industries.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "Cut no-shows by up to 40%" (Dental card) | unsourced ROI as ITP result | **REMOVE** | No measured client result. Remove entirely. |
| 6 flip cards: Dental, Law, Medical, Home Services, Real Estate, Auto Shops | wrong verticals + flip-card-only, no routes | **REWRITE/REPLACE** | Replace with the five real pods (Auto Repair, HVAC, Dental, Roofing, Med Spa) as real linked pages. Design direction bans flip-card-only + dead-end cards. |
| "We build voice agents for any industry… We've built for dozens of verticals." | unverified breadth/count | **REMOVE** | No proof of "dozens." Remove the count; keep a soft "don't see yours? book a call." |
| "AI voice + chat →" (card CTA) | dead-end (no route) | **REWRITE** | Route to the pod page. |

### `components/sections/Features.tsx` (9 feature stats)
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "< 4s avg answer time" | unsourced metric | **REWRITE** | "Answers on the first ring." |
| "Zero missed calls, guaranteed" | absolute guarantee | **REMOVE** | Unprovable guarantee. Reframe: "Every call answered, 24/7." |
| "3× more qualified leads" | unsourced ROI | **REMOVE** | No source, no measured result. |
| "94% booking success rate" | unsourced metric | **REMOVE** | Fabricated. |
| "100% calls logged automatically" | absolute + implies integration | **REWRITE** | "Every call captured and summarized in your portal." |
| "HubSpot, Salesforce, GoHighLevel" (CRM Auto-Updates) | integration claim | **REWRITE** | "Works alongside your CRM." |
| "< 8s avg transfer time" | unsourced metric | **REWRITE/REMOVE** | Drop the number; "Warm-transfers urgent calls to your team." |
| "38% of leads arrive after hours" | uncited stat | **REWRITE** | Label + source, or remove. Conflicts with PainPoints' "47%." |
| "4× more website conversions" | unsourced ROI | **REMOVE** | Fabricated. |
| "< 30s notification speed" | unsourced metric | **REWRITE/REMOVE** | Drop the number. |
| "100% on-brand responses" | absolute | **REWRITE** | "Trained on your services, pricing, and voice." |

### `components/sections/TrustSignals.tsx` ("By the numbers")
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "42,680+ Calls Handled" | fabricated aggregate | **REMOVE** | Invented (animated count-up). Remove. |
| "13,820+ Appointments Booked" | fabricated aggregate | **REMOVE** | Invented. Remove. |
| "< 4s Avg Response Time" | unsourced metric | **REWRITE/REMOVE** | Reframe as capability or remove. |
| "Across 250+ active deployments · Updated in real time" | invented deployment count | **REMOVE** | Fabricated scale. Remove the whole "By the numbers" band unless rebuilt from real data. |

### `components/sections/HowItWorks.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| Connect / Train / Launch process | honest process | **KEEP** | No metrics; matches the real onboarding. Good. |
| "HubSpot / Salesforce / GHL", "Calendar sync" (chips) | integration claims | **REWRITE** | "Works alongside your CRM and calendar." |
| "Live in days, not weeks" | soft claim | **KEEP** | Defensible; consistent across the site. |

### `components/sections/Testimonials.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| 6 testimonials — Sarah M. (Dental, Atlanta), James R. (PI Firm, Dallas), Dr. Lisa K. (Medical, Phoenix), Marcus T. (HVAC, Columbus), Kevin A. (Real Estate, Tampa), Rachel D. (Home Services, Denver) + 5-star ratings | **fabricated customers** | **REMOVE** | Invented people and quotes. Delete the section until Matt supplies real, approved testimonials. |
| "Identities kept anonymous at client request · All reviews verified" | **false verification claim** | **REMOVE** | Doubly deceptive (fake quotes + false "verified"). Remove. |

### `components/sections/FinalCTA.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "Join 250+ businesses that never miss a call…" | invented count | **REMOVE** | No 250 businesses. Reframe without a number. |
| Chips: "White-glove setup included / Dedicated support / Live within days / Built for your industry" | soft claims | **KEEP** | Defensible and on-message. |
| Footer "AI-powered reception for modern businesses" | voice-only positioning | **REWRITE** | Reframe to the consulting-firm line (G9). |

### `components/sections/FAQ.tsx`
| Claim | Type | Disposition | Allowed replacement / why |
|---|---|---|---|
| "Most clients are fully live within a few days" | soft | **KEEP** | Consistent, defensible. |
| "Most callers assume they've reached a front desk team member" | mild overclaim | **REWRITE** | Soften; and note we recommend disclosure (dental posture: the AI announces itself). |
| "we integrate with most major CRMs — GoHighLevel, HubSpot, Salesforce" | integration claim | **REWRITE** | "Works alongside most major CRMs; we wire into yours during onboarding." |
| "Every client gets access to a dedicated portal…" | product feature | **KEEP** | Portal is real. Accurate. |
| "tiered monthly plans starting at $750/month, with a one-time setup fee" | **public pricing** | **REMOVE (v1)** | Deep-sweep froze pricing to "book a call." Remove the figure; "pricing is scoped on a discovery call." |

### Three riskiest claims on the current site
1. **`Testimonials.tsx` — six fabricated customer testimonials** with names, cities, industries, 5-star ratings, and a false "All reviews verified" line. Pure invention of customers and social proof.
2. **`LiveCounter.tsx` — a fake "Live" counter** that manufactures "missed calls" with `Math.random()` and tells the visitor "each number represents a real lead lost to a competitor." Fabricated real-time data presented as fact.
3. **The invented-scale cluster** — "250+ active deployments" + "42,680+ Calls Handled" + "13,820+ Appointments Booked" (`TrustSignals.tsx`), "Trusted by 200+ businesses" (`HeroSection.tsx`), "Join 250+ businesses" (`FinalCTA.tsx`). A coordinated, fabricated customer base and volume.

---

## 3. POD CLAIMS LEDGER

Key claims the five pod pages rely on. `status`: **sourced** (industry evidence or product-true),
**rewritten** (reframed from an unsafe original), **removed** (must not appear).
`last_verified`: 2026-07-12 for all rows.

| claim | pod | source_path_or_url | allowed_copy | status |
|---|---|---|---|---|
| 24/7 bilingual AI receptionist answers/books/routes | auto-repair | docs/verticals/auto-repair.md | "Answers every call in English and Spanish, books appointments, routes what it shouldn't handle." | sourced (product-true) |
| Live auto-repair client running today | auto-repair | Company truth (Daniel's Paint and Body); DemoSection Vera | "A live bilingual agent running in a real auto-body shop today." (reference, no quote) | sourced |
| Never diagnoses / never quotes unset price | auto-repair | docs/verticals/auto-repair.md ("Do not lead with vehicle-status…") | "It never diagnoses or quotes a price you didn't set." | sourced (guardrail) |
| "Cut no-shows 40%" / "3× leads" (auto or any) | auto-repair | current site (Industries/Features) | — | **removed** (unsourced ROI) |
| ~62% of HVAC calls after hours; miss ≈ $350; $45–120K/yr | hvac | MARKET-PODS-BUILD-PACKAGE-2026-07-01.md §2 (+ cited sources) | "Industry studies find ~62% of HVAC calls come after hours." (labeled) | sourced (industry context) |
| Safe emergency triage (gas/CO → 911 first) | hvac | build-package §2 (Flow C, hard guardrails) | "For a gas smell it tells the caller to leave and call 911 first — never troubleshoots a hazard." | sourced (guardrail) |
| No license / EPA-608 claim on shop's behalf | hvac | build-package §2 §3.4/§6 | (guardrail — omit any licensing claim) | sourced (guardrail) |
| "Trusted by N contractors" | hvac | current site pattern | — | **removed** (no roster) |
| ~30% dental calls unanswered; <1 in 5 leaves voicemail; NP worth $800–1,000 yr1 | dental | dental-pod/RESEARCH-BRIEF.md §2; ADA sources | "Industry studies consistently find ~30% of dental calls go unanswered." (labeled) | sourced (industry context) |
| HIPAA-ready; BAA executed at onboarding | dental | dental-pod/RESEARCH-BRIEF.md §5 SAFE-TO-SAY | "We sign a BAA and execute the chain as part of your onboarding." | sourced (posture) |
| "HIPAA compliant / certified today" | dental | dental brief §5 NEVER-SAY | — | **removed** (forbidden) |
| Insurance: 3 truthful outcomes, no coverage % | dental | dental brief §4 (insurance handling) | "Handles the insurance question honestly; never quotes a coverage percentage." | sourced (guardrail) |
| Administrative only; never clinical | dental / med-spa | dental brief §4/§7; med-spa §4.5 | "Administrative only — never diagnoses, never gives clinical advice." | sourced (guardrail) |
| Avg roofing job ≈ $9,500; ~40% after hours; 5-min lead ~9× convert | roofing | MARKET-PODS-BUILD-PACKAGE-2026-07-01.md §3 (+ sources) | "Industry studies put the average residential roofing job near $9,500." (labeled) | sourced (industry context) |
| Captures insurance-claim context; never promises approval | roofing | docs/verticals/roofing.md; build-package §3 | "Captures the claim details and texts you the lead — never promises coverage or approval." | sourced (guardrail) |
| "$2,500 per missed call" | roofing | build-package §3 (AgentZap headline) | "Some roofing-AI vendors cite $2,500+ per missed call" (their claim, attributed) | rewritten (attribute, not ours) |
| "Guaranteed insurance approval" | roofing | docs/verticals/roofing.md (do-not-lead) | — | **removed** (legal risk) |
| $17B+ med-spa industry; owners handle ops personally; ticket $400–1,500 | med-spa | build-package §5; AmSpa sources | "Industry data (AmSpa) describes a $17B+ industry where owners personally handle scheduling and follow-up." (labeled) | sourced (industry context) |
| Consult-first; deposit via Stripe link; quote only posted prices | med-spa | build-package §5 (§4.2/§4.3) | "Books the consult, quotes only your posted prices, takes the deposit via a secure link." | sourced (product + guardrail) |
| Cosmetic = cash-pay; never bills insurance | med-spa | build-package §5 (§4.5) | "Cash-pay by design — it never claims to bill insurance." | sourced (guardrail) |
| Any med-spa customer count / testimonial | med-spa | — | — | **removed** (template only, no client) |
| "Works alongside [ServiceTitan/Dentrix/Boulevard/JobNimbus/…]" | all | build-package §1.7 | "Works alongside the system you already run; we sync in a later step." | sourced (framing) |
| "Integrates with [named system]" as shipped | all | — | — | **removed** (not built) |
| Native Spanish (not accented TTS) | all | build-package (Cartesia sonic-3 + es pin) | "Native Spanish, at no surcharge." | sourced (capability) |
| Any public monthly price | all | deep-sweep (pricing unresolved) | "Pricing is scoped on a discovery call." | removed (v1) |

---

## 4. PROOF INVENTORY & GAPS

### Real proof available today (usable on the site)
| Asset | What it proves | Where |
|---|---|---|
| **Daniel's Paint and Body** — live bilingual auto agent | We run a real production agent for a real client | Company truth (memory); reference-only, no published quote yet |
| **Vera** — callable web voice demo (real Vapi assistant) | A prospect can talk to an ITP agent right now | `components/sections/DemoSection.tsx`, `VeraModal.tsx`, `VoiceWidget.tsx` |
| **Dental demo agent** ("POD DEMO — Dental") | The dental behaviors (emergency, insurance, HIPAA posture, booking) work | dental-pod brief §8; callable on a sales call |
| **Auto intake** `/auto-repair-intake` + **Dental intake** `/dental-intake` | Real onboarding flows exist | intake-form product |
| **Client portal** — calls, appointments, confirmations, analytics | The "operate & report" layer is real | `app/portal`, `app/ops` (embed intake-form-sigma.vercel.app/portal, /ops) |
| **Bilingual native Spanish voice** | A hard-to-fake capability edge | build-package (Cartesia pin) |
| **Go-live self-test gate** ("Live·proven") | We grade agents before go-live | memory; internal machinery |
| **Randy** — real auto-repair market operator; live Cal booking link | A real operator + a working "book a call" path | `app/funnel/page.tsx`, `components/ui/CalModal.tsx` (cal.com/randy-mendez) |

### Proof gaps (record honestly; do NOT invent to fill)
| Gap | Impact | Needed from Matt |
|---|---|---|
| **No public founder/operator bios or photos** — repo has only `logo.png`; names appear only in internal docs (Matt Bender; Randy Mendez via the Cal link) | vision-lock Matt-test #5 wants real founders/operators shown | Approved founder/operator names, roles, and photos |
| **No approved customer testimonials or logos** | Can't show named social proof | An approved quote/logo from Daniel's (or another client) |
| **No live client in HVAC, Roofing, Med Spa, Dental** (auto is the only live paying lane) | These pods lead with demo + platform proof, not customers | Nothing yet — keep honest; add as clients close |
| **No published/aggregate metrics** (call volumes, booking rates, ROI) | No "by the numbers" band is defensible | Real, exportable data before any metric ships |
| **Dental BAAs not signed until onboarding** | "HIPAA-ready" posture only | (By design — never claim "compliant today") |

---

## 5. Restaurants — PARKED (not deleted)

Restaurants were removed from the first-wave website (5 pods: Auto, HVAC, Dental, Roofing,
Med Spa) but **remain a real, documented product lane** — not silently dropped.

- **Why parked:** thin margins (National Restaurant Association 2025: ~2.8% full-service /
  4.0% limited-service median income before tax), POS ownership, and specialized voice
  incumbents weaken first-wave commercial priority (research-brief.md; deep-sweep-findings.md).
- **Still real:** a full Restaurants pod spec exists (MARKET-PODS-BUILD-PACKAGE-2026-07-01.md
  §4) — reservations + FAQ + catering-lead capture + confirmations, with order-injection
  explicitly out of scope. Keep it in the historical product docs.
- **Site rule:** do not list Restaurants as a live pod or imply a restaurant customer base.
  Current `TrustBar.tsx` lists "Restaurants" — remove it from the public serving/built-for line.
- **Revisit:** after the five-pod site proves out, or if a restaurant operator lane opens.

---

## Downstream

Consumed by 001c (page structure), 001d (typed registry + page copy), 001e. Every page and
component built downstream must pass this matrix: any claim not present here as **sourced** or
**rewritten** is out of bounds.
