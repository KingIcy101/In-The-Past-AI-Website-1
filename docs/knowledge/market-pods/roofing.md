---
pod: Roofing & Exterior Contractors
vertical_tag: roofing
status: near-term candidate lane (co-flagship with HVAC)
last_verified: 2026-07-12
sources:
  - docs/verticals/roofing.md (intake-form repo)
  - docs/planning/MARKET-PODS-BUILD-PACKAGE-2026-07-01.md §3 (intake-form repo)
  - docs/planning/phase-001-itp-consulting-site-five-pods/research-brief.md
positioning_one_liner: >
  We answer the storm-night call your competitor missed — book the inspection, capture
  the insurance claim, flag the emergency leak — in English and Spanish, before they
  hang up.
---

# Roofing & Exterior Contractors

> Owner-to-owner content record for the Roofing pod page. Roofing is high-ticket, spiky,
> trust-sensitive, and first-to-answer-wins — which makes an always-on bilingual
> receptionist worth more here than almost anywhere. Every stat below is industry context
> with a source, never an ITP result. **Never imply guaranteed insurance approval.**

## Buyer persona

- **Who signs:** the owner/operator of a small-to-mid residential roofing company (1–10
  crews), often an ex-roofer who runs sales himself — non-technical, ROI-driven, allergic
  to complexity. Matches the "elderly-simple, honest-numbers" bar exactly.
- **The economic buyer is the user:** the owner who *is* the front desk — on a roof, on a
  ladder, or driving between inspections when the phone rings.
- **Two sub-segments to design for:**
  - **Retail/repair roofers** — value inspection booking, emergency leak capture, and
    status-call deflection.
  - **Storm/insurance-restoration roofers** — value insurance-lead capture, storm-surge
    capacity, and claim/adjuster tracking. Higher-ACV, higher-urgency.
- **Not the beachhead:** large multi-crew restoration ops already deep in ServiceTitan/
  AccuLynx with real office staff. We win the owner who *is* the front desk.

## Top operational pains (industry-native)

1. **Missed calls = missed $10k+ jobs.** The average residential roofing job is ~$9,500;
   metal/tile/multi-section and storm/insurance replacements run $15,000–$30,000+. The
   owner is physically on a roof; overflow and after-hours calls go to voicemail, and ~80%
   of callers won't leave one.
2. **Storm surge — the headline pain.** After a hail/wind event, inbound spikes 300%+ (5–10×)
   for days, and one storm lights up whole neighborhoods at once. A human desk (or a per-
   minute human answering service) drowns exactly when the money is largest. Infinite
   simultaneous AI capacity is the differentiator.
3. **After-hours emergency leaks.** Active water intrusion is urgent; miss it and you lose
   the emergency job *and* the full replacement behind it.
4. **Insurance-claim intake friction.** Storm jobs are paid by insurance and are the bulk
   of roofing revenue. Capturing carrier + claim # + date-of-loss + adjuster status *at the
   moment of the call* flags a high-value lead and shortens the sales cycle.
5. **"When are you coming / where's my estimate?" status chaos.** The roofing analog of
   "is my car ready?" — clogs the phone with low-value status calls.
6. **Bilingual demand.** Crews and a large share of homeowners are Spanish-speaking; native
   Spanish is a hard-to-copy edge most generic AI receptionists fake with accented TTS.

## The phone wedge (what the AI receptionist does day one)

A 24/7 bilingual receptionist that **answers every call, books the free inspection,
captures storm/insurance-claim context, flags the emergency leak, and texts the owner the
hot lead** — with unlimited simultaneous capacity for the storm surge, and no coverage or
repair promises.

Day one it:
- Answers on ring one during the surge, in English or Spanish, when a human desk can't.
- Books free inspections against the real schedule; captures roof type, issue, property
  type, and urgency — never diagnosing that a roof "needs replacement."
- Captures **insurance-claim context** (carrier, claim #, date-of-loss, adjuster status)
  and flags it as a high-value lead with an instant owner alert.
- Triages the **emergency leak** — captures address + callback, marks it urgent, routes it
  fast — without giving roof-climbing or repair instructions.
- Answers status calls ("when are you coming / where's my estimate?") so they stop
  interrupting the owner.

> **Wedge one-liner (owner's words):** "We answer the $10k storm call your competitor
> missed — book the inspection, capture the claim, flag the leak — in English and Spanish,
> before they hang up."

## Five broader workflows / internal tools ITP can build

1. **Storm-response / surge mode.** Tuned handling for the 300%+ post-storm spike —
   unlimited simultaneous answering, inspection booking, and lead triage when the phone is
   on fire and every competitor's desk is buried.
2. **Insurance-claim intake + tracking.** Structured capture of claim details at the call,
   an owner alert on every hot insurance lead, and a Storm/Insurance pipeline view — the
   highest-ACV workflow in the pod. (Never implies guaranteed approval.)
3. **Emergency-leak triage + owner alert.** Fast, safe routing of active-leak calls so the
   emergency job — and the replacement behind it — doesn't die in voicemail.
4. **Estimate / proposal follow-up.** Follow-up on unbooked inspections and open proposals
   (speed-to-lead is the whole game in roofing) plus canvassing-callback capture — the
   agent recognizes "the guy who knocked said I have hail damage" and routes it.
5. **Production board + job-cost visibility + CRM write-back (roadmap).** An honest owner
   view (recovered leads, speed-to-lead, after-hours captured, emergencies, insurance
   leads) and a later sync into the roofing CRM of record.

## Integrations landscape (works alongside, not "integrated with")

Roofers run a **layered stack, not one app** — we slot in at the front of the funnel
(the phone/lead-capture layer most of these tools don't own) and name the rest as later
sync targets.

- **CRM / field-management commonly named:** JobNimbus (top sync target for retail +
  insurance roofers), AccuLynx (deep storm/insurance + native Xactimate for established
  shops), Roofr (modern UX, explicitly *lacks* phone answering — our complement),
  ServiceTitan (enterprise), RoofLink/SalesRabbit (canvassing-first), Jobber (generalists).
- **Estimating/measurement to KNOW, not replace (talk-track only):** EagleView / Hover
  (aerial reports), Xactimate (the insurance estimate format — we capture claim data, we
  never price the claim), CompanyCam (field photos), HailTrace (storm intel).
- **Honest framing:** "Works alongside JobNimbus, AccuLynx, or Roofr — we own the phone
  and the lead capture, and can sync into your CRM as a later step."
- **Never** claim a live integration or that we price/approve an insurance claim.

## Safe claims (sourced or true today)

- "A 24/7 bilingual receptionist that answers every call, books inspections, captures
  insurance-claim context, and flags emergency leaks — with unlimited simultaneous capacity
  for the storm surge." (product/capability-true)
- "It captures the claim details and texts you the hot lead; it never promises coverage or
  approval." (guardrail-true, a trust asset)
- "Native Spanish, not accented text-to-speech." (capability-true)
- "It never diagnoses that a roof needs replacement and never gives roof-climbing advice."
  (guardrail-true)
- Industry context, labeled as industry studies: avg residential job ≈ $9,500; ~40% of
  inquiries after hours; ~85% who can't reach you never call back; leads contacted within
  5 minutes ~9× more likely to convert; preventable annual loss $50k–$150k (build-package
  §3 sources). Cite AgentZap's "$2,500+ per missed call" **as their claim, not our promise.**

## Unsafe claims (never say)

- **Guaranteed insurance approval or coverage** — the single sharpest legal line.
- Any customer count or "trusted by N roofers." (AgentZap's "2,500+ contractors" is
  *their* number, never ours.)
- Fabricated "$X recovered" as an ITP result.
- Diagnosis that a roof needs replacement; roof-climbing or repair instructions.
- Exact pricing the contractor didn't configure.
- "Integrates with JobNimbus / AccuLynx" as shipped — say "works alongside."
- Deep CRM/photo/measurement integration before the basic call flow is proven for that shop.

## Proof available today

- **Live web demo:** Vera (callable voice demo) proves the answer-and-book experience.
- **Shared product spine:** the same shipped booking engine, portal, owner-alert SMS, and
  bilingual voice that run the live auto client extend to roofing by config (roofing intake
  fields, emergency-leak triage, storm/insurance capture per the build package).
- **Live auto-repair client** as the "we run a real production agent" proof point.
- **Proof gap:** no live roofing client or testimonial; operator lane (Angel) is a candidate
  pending a proof sprint. Show the demo and the platform; do not imply a roofing customer base.

## Page CTA

Primary: **"Talk to the demo agent"** (Vera) or **"Book a discovery call."** Pricing stays
"book a call" for v1 — and the eventual message is predictable pricing, never per-minute
metering that spikes during a storm.

## Copy-ready fragments

**Headline candidates**
- "The storm-night call your competitor missed, answered."
- "First to answer wins the roof. Now you're always first."
- "Every claim captured. Every leak flagged. Before they hang up."

**Subhead / one-liners**
- "When a hailstorm lights up the whole neighborhood, we answer every call at once — book
  the inspection, capture the claim, and text you the lead."
- "It captures carrier, claim number, and date-of-loss on the call — and never promises an
  approval it can't make."
- "Native Spanish for your crews and your homeowners, at no surcharge."

**Proof line (honest)**
- "Hear the demo agent book an inspection and flag an emergency leak." (Demo, no fabricated
  customer count; AgentZap's contractor numbers are theirs, not ours.)
