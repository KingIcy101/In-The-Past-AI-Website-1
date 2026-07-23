---
pod: HVAC & Emergency Trades
vertical_tag: hvac
status: near-term operator lane (co-flagship, build-ready)
last_verified: 2026-07-12
sources:
  - docs/planning/MARKET-PODS-BUILD-PACKAGE-2026-07-01.md §2 (intake-form repo)
  - docs/verticals/README.md (intake-form repo)
  - docs/planning/phase-001-itp-consulting-site-five-pods/research-brief.md
  - External (verified July 2026): EPA Section 608 https://www.epa.gov/section608/section-608-technician-certification-requirements ;
    ServiceTitan 2025 10-K https://www.sec.gov/Archives/edgar/data/1638826/000095017025048834/ttan-20250131.htm
positioning_one_liner: >
  If you're under a house, we're on your phone — answering every call, triaging the
  emergency, capturing the address, and texting you the lead, in English and Spanish,
  day and night.
---

# HVAC & Emergency Trades

> Owner-to-owner content record for the HVAC pod page. Speed-to-answer is the whole
> game in home services; the first contractor to pick up usually wins the job. Every
> stat below is labeled as industry context with a source, never as an ITP result.

## Buyer persona

- **Who signs:** the owner of a solo-to-small-crew HVAC/plumbing shop (under ~$5M
  revenue — **the owner IS the buyer, full stop**). Ex-tech who runs the business from
  the truck. For $5M–$20M there may be an ops manager, but the owner still signs.
- **Where they are:** physically inside a furnace, on a roof, or under a sink most of
  the day — the phone rings into a void.
- **How they buy:** short, personal cycle — 1–3 conversations, usually the owner alone.
  They weigh *proof it books real jobs* over feature breadth. Mobile-first, price-
  transparent, and deeply skeptical of slick dashboards and fake metrics. Honest
  numbers are a competitive asset with this buyer, not just house style.

## Top operational pains (industry-native)

1. **Missed calls = missed revenue.** A missed call isn't a lost browse — it's a lost
   job worth hundreds to thousands of dollars, walking straight to the contractor who
   picks up. Industry sources put the average missed HVAC call around **$350** in
   immediate lost revenue.
2. **After-hours and overflow emergencies.** No heat in a freeze, no AC in a heat wave,
   an active leak, a **gas smell or suspected CO** — high-urgency, high-ticket, time-
   sensitive. These must be triaged and routed to a live on-call tech *instantly*, not
   dropped in a voicemail. After-hours emergencies carry 50–150% premiums — the highest-
   value calls of all. Industry sources: ~62% of HVAC calls arrive outside 9–5.
3. **Seasonal surge a human desk can't scale to.** The first freeze and first heat wave
   spike regional call volume ~80% overnight; a human front desk drowns exactly when the
   money is largest. This is HVAC's sharpest "why AI, why now."
4. **Dispatch/window chaos.** Jobs are time-window based ("we'll be there 1–4"), not
   fixed slots, and always need a **service address** (the on-site analog of auto-
   repair's vehicle).
5. **"Is the tech on the way?" call volume.** High-repeat status calls that interrupt
   dispatch and should self-serve.
6. **Bilingual demand.** Spanish-speaking homeowners *and* crews are a large, under-
   served slice; most competitors surcharge Spanish or auto-detect it weakly.

## The phone wedge (what the AI receptionist does day one)

A 24/7 bilingual dispatcher-receptionist that **answers every call, understands the
problem enough to route it, safely triages emergencies, captures the service address,
books an arrival window, and texts the owner the lead** — never diagnosing, never
quoting, never inventing an ETA.

Day one it:
- Picks up on ring one, in English or Spanish, calm and reassuring under stress.
- Draws out system type / symptom / onset without diagnosing ("a technician confirms
  on-site").
- **Runs a real emergency script:** for gas smell / suspected CO it tells the caller to
  leave the home, get to fresh air, and call the gas company / 911 first — then stops.
  For no-heat / no-AC / active leak it marks the call urgent, captures address + callback,
  and transfers to the on-call tech (or logs an urgent ticket and alerts the owner).
- Books into arrival windows against the shop's real schedule.
- Can give the one honest number shops publish — the **diagnostic / trip fee** — and
  nothing beyond it.
- Fires an owner alert the instant a job books or an emergency lands — the "I can trust
  it" moment.

> **Wedge one-liner (owner's words):** "We answer every call, book the visit, flag the
> emergency, and text you the lead — in English and Spanish, day and night. If you're
> under a house, we're on your phone."

## Five broader workflows / internal tools ITP can build

1. **Emergency triage + instant on-call routing.** The headline flow — safe, keyword-
   driven triage (no-heat, no-AC, leak, gas/CO) that reaches a live tech fast and never
   parks a high-value call in voicemail.
2. **Service-status ("is the tech on the way?") self-serve.** An honest status lookup —
   scheduled → dispatched → on-site → completed with the real arrival window — so status
   calls stop interrupting dispatch. (Tenant-scoped; never invents an ETA.)
3. **Maintenance-plan / membership renewals.** Follow-up calls and reminders to renew
   seasonal maintenance agreements — recurring revenue the owner never has time to chase.
4. **Seasonal "storm/surge mode."** Tuned handling for the freeze/heat-wave spike —
   more aggressive window management and triage prioritization when volume jumps 80%
   overnight and a human desk can't keep up.
5. **Owner reporting + dispatch board + FSM write-back (roadmap).** An honest owner
   view (missed-calls-recovered, jobs booked, after-hours captured, emergencies flagged,
   on-time arrival %), a service-calls board, and later deep write-back into the shop's
   field-service system.

## Integrations landscape (works alongside, not "integrated with")

HVAC shops run a **field-service-management (FSM)** system — our integration *target and
intake question*, never something we replace.

- **FSM systems commonly named:** ServiceTitan (enterprise), Housecall Pro (mid-market
  sweet spot), Jobber (small / just-digitizing — where our first clients live),
  FieldEdge (accounting-heavy), ServiceFusion.
- **Honest framing:** "Works alongside the system you already run — ServiceTitan,
  Housecall Pro, Jobber, or a spreadsheet. It works on day one regardless, and deep
  sync into your FSM is a later step."
- **Strategic note:** the $1B-adjacent AI incumbents (Avoca, Sameday) aim up-market at
  $1M+/ServiceTitan/20-CSR shops. The solo-to-3-truck shop on Housecall/Jobber/a
  spreadsheet is under-served — that's the beachhead.

## Safe claims (sourced or true today)

- "A 24/7 bilingual AI receptionist that answers every call, safely triages emergencies,
  captures the service address, and books arrival windows." (product-true)
- "It routes a gas-smell or CO call to safety first — leave the home, call 911 / the gas
  company — and never troubleshoots a hazard on the line." (guardrail-true, a trust asset)
- "It answers unlimited calls at once — the seasonal surge that drowns a human desk is
  exactly what it's built for." (capability-true)
- "Native Spanish at no surcharge — for Spanish-speaking homeowners and crews."
  (capability-true)
- "It never diagnoses, never quotes beyond your posted diagnostic fee, and never invents
  an ETA." (guardrail-true)
- Industry context, clearly labeled: ~62% of calls after hours; average missed call
  ≈ $350; contractors lose ~$45K–$120K/yr to missed calls (build-package §2 sources;
  cite as "industry studies," never as our result).

## Unsafe claims (never say)

- Any customer count or "trusted by N contractors." We have no HVAC roster to cite.
- Fabricated ROI ("recovered $X", "25–40% lift") as an ITP result.
- "Integrates with ServiceTitan / Housecall / Jobber" — not built; say "works alongside."
- Any license or EPA Section 608 certification claim on the shop's behalf, or a promise
  about a specific tech's credentials or regulatory compliance.
- A live dispatch board / tech-tracking that a given shop doesn't actually have.
- Per-minute/per-call overage as headline pricing (and no pricing on v1 anyway).
- The agent giving safety instructions beyond the approved emergency script.

## Proof available today

- **Live web demo:** Vera (callable voice demo) proves the answer-and-book experience
  today.
- **Shared product spine:** the same shipped booking engine, portal, owner-alert SMS,
  recording disclosure, and bilingual voice that run the live auto client extend to HVAC
  by config (per the build package) — HVAC is build-ready, not hypothetical.
- **Auto-repair live client** as the adjacent proof that the platform runs a real
  bilingual trade agent today.
- **Proof gap:** no live HVAC client or testimonial yet. Show the demo and the platform;
  do not imply an HVAC customer base.

## Page CTA

Primary: **"Talk to the demo agent"** (Vera) or **"Book a discovery call."** Pricing
stays "book a call" for v1 — and the pricing message, when it comes, is flat/seasonally
predictable, never per-minute.

## Copy-ready fragments

**Headline candidates**
- "If you're under a house, we're on your phone."
- "The 2 a.m. no-heat call, answered — and the address already texted to you."
- "The surge that drowns your front desk is the one we're built for."

**Subhead / one-liners**
- "We answer every call, triage the emergency safely, capture the address, and book the
  window — in English and Spanish, day and night."
- "It knows a gas smell means 'get out and call 911,' not 'let me book you.' Safety
  first, then the job."
- "Works whether you run ServiceTitan, Jobber, or a spreadsheet on the truck."

**Proof line (honest)**
- "Call the demo agent right now and hear it handle a no-heat call." (Live demo, no
  fabricated customer count.)
