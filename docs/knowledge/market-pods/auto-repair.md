---
pod: Auto Repair & Body Shops
vertical_tag: auto_repair
status: active — live client lane (flagship proof)
last_verified: 2026-07-12
sources:
  - docs/verticals/auto-repair.md (intake-form repo)
  - docs/verticals/README.md (intake-form repo)
  - docs/planning/phase-001-itp-consulting-site-five-pods/research-brief.md
  - Live proof: Daniel's Paint and Body (bilingual EN/ES agent), Vera web demo, /auto-repair-intake
positioning_one_liner: >
  We answer the calls your advisors can't get to — in English and Spanish, day
  and night — then build the follow-up, status calls, and shop visibility around
  them so nothing walks to the shop down the road.
---

# Auto Repair & Body Shops

> Owner-to-owner content record for the Auto Repair pod page. Every claim here is
> either sourced, framed as industry context, or listed as a proof gap. No invented
> customers, counts, or ROI.

## Buyer persona

- **Who signs:** the shop owner or GM of an independent auto-repair or collision/body
  shop (1–3 bays up to a small multi-bay operation). Often a former tech or estimator
  who still works the counter and answers the phone between customers.
- **Who the phone hits:** the service advisor / front desk — already slammed writing
  ROs, walking customers to cars, and chasing parts. The phone is a constant
  interruption, and half of it rings out.
- **What they care about:** cars in bays, cycle time, repeat customers, and not losing
  a job to the shop down the street. Non-technical, ROI-driven, allergic to "AI"
  as a pitch. They want proof it books real work, not a dashboard demo.
- **Language reality:** in many markets a large share of callers (and staff) are
  Spanish-speaking. Bilingual coverage is a real buying trigger, not a nice-to-have.

## Top operational pains (industry-native)

1. **Advisor-busy and after-hours misses.** The advisor is with a customer or on
   another line; the call goes to voicemail; the caller dials the next shop. Estimate
   and drop-off opportunities die on the vine.
2. **The "is my car ready?" call flood.** Status calls interrupt the advisor all day —
   low-value to answer, high-annoyance to miss. It clogs the same line new customers
   are trying to reach.
3. **Estimate and deferred-work follow-up leaks.** A customer declined the brake job
   or hasn't approved the estimate. Nobody has time to call them back, so the work
   (and the revenue) is just... gone.
4. **Manual phone workflows.** Bookings, reschedules, and shop-info questions all run
   through a human at the counter. There's no capture, no record, no visibility for
   the owner into what the phone actually did today.
5. **Bilingual gaps.** English-only reception silently loses Spanish-speaking callers,
   or forces a scramble to find someone who can help.

## The phone wedge (what the AI receptionist does day one)

A 24/7 bilingual (EN/ES) AI receptionist that **answers every call, captures and
routes it, books or supports appointments, and answers the basic shop questions** —
so the advisor stops losing drop-offs and estimates to voicemail.

Day one it:
- Answers on the first ring, in English or Spanish, matched to the caller.
- Captures the customer, vehicle (year/make/model), and the problem in their words —
  never diagnosing, never quoting a price the shop didn't post.
- Books, reschedules, or cancels appointments against the shop's real schedule.
- Answers hours, location, and shop-info questions from what the owner configured.
- Routes calls it shouldn't handle to a human, and takes a message when no one's there.
- Drops every call, summary, and booking into the owner portal so the owner can see
  what the phone did while they were under a hood.

> **Wedge one-liner (owner's words):** "Every call answered, every drop-off booked,
> every estimate followed up — in English and Spanish, whether you're in a bay or asleep."

## Five broader workflows / internal tools ITP can build

The receptionist is the wedge. The value is the operations layer around it:

1. **Repair-status / "is my car ready?" self-serve.** A status lookup the agent reads
   from the shop's real workflow board — caller hears the honest current stage, the
   advisor stops getting interrupted. (Status board already exists in the shipped
   product for body-shop workflow stages.)
2. **Estimate & deferred-work follow-up.** Automated call/text follow-up on open
   estimates and declined work ("your brakes were flagged last visit") — turning
   captured leads into booked revenue instead of a note nobody actions.
3. **DVI / inspection follow-through.** When a digital vehicle inspection flags work
   the customer didn't approve, the agent follows up to explain and book it.
4. **Owner leak report + call intelligence.** A weekly, honest view of missed-call
   recovery, jobs booked, after-hours captures, and repeat status calls — the "here's
   what the phone actually did" report the owner never had.
5. **Custom internal tools per shop.** Reminder/confirmation sequences, per-shop
   dedicated number, CSR-style call summaries, and reporting wired to how *this* shop
   actually runs — built after the receptionist proves itself.

## Integrations landscape (works alongside, not "integrated with")

Auto shops run a shop-management system (SMS) they already pay for — we name it at
intake and sync later; **we never replace it and never claim a live integration we
haven't built.**

- **Shop-management / estimating systems commonly named:** Tekmetric, Shopmonkey,
  Mitchell 1, Shop-Ware; collision/body: CCC ONE, Mitchell Cloud Estimating.
- **Honest framing:** "Works alongside the system you already run. We capture the
  booking and the call, and can wire into your schedule as a later step."
- **What's real today:** our own booking engine + optional Google/iCal calendar sync,
  so the shop works day one regardless of its SMS. Deep write-back is a roadmap item,
  named at intake, not a shipped claim.

## Safe claims (sourced or true today)

- "A 24/7 AI receptionist that answers every call in English and Spanish, books
  appointments, and routes what it shouldn't handle to your team." (product-true)
- "Every call captured, summarized, and visible to you in your portal." (product-true)
- "It never diagnoses or quotes a price you didn't set — a person handles those."
  (guardrail-true, and a trust asset)
- "We have a live auto-repair client running a bilingual agent today." (Daniel's Paint
  and Body — real reference; see proof)
- "Answers unlimited calls at once — it never puts a caller on hold." (capability-true)
- Industry context, clearly labeled as industry studies with a source — never as our
  result: missed-call bleed and speed-to-answer economics (research-brief.md; BLS
  repair-and-maintenance sector ~250,000 establishments,
  https://www.bls.gov/iag/tgs/iag811.htm).

## Unsafe claims (never say)

- Any customer count ("200+", "250+", "dozens of shops"). We have a live client lane,
  not a published roster.
- Fabricated results ("cut no-shows 40%", "3× more leads", "94% booking rate") as ITP
  outcomes. We have no measured client ROI to publish.
- "Integrates with Tekmetric / CCC ONE / Mitchell" — not built; say "works alongside."
- Any invented testimonial or named-customer quote. Daniel's is a reference, not a
  published quote unless Matt supplies an approved one.
- The agent giving a diagnosis, a repair price the shop didn't post, or a promised ETA.
- Vehicle-status automation as a headline unless the shop has a real update workflow.

## Proof available today

- **Live client:** Daniel's Paint and Body — a real, running bilingual (EN/ES) auto
  agent. Referenceable; strongest proof asset in the portfolio.
- **Live web demo:** Vera, the callable voice demo on the site (real Vapi assistant),
  lets a prospect talk to an agent right now.
- **Auto intake:** `/auto-repair-intake` — the real onboarding form that configures a
  shop's agent.
- **Portal product:** calls, appointments, confirmations, and analytics views (embedded
  demo portal), plus a body-shop workflow/status board.
- **Bilingual voice:** native Spanish (not accented TTS) is a shipped capability.
- **Proof gap:** no published customer testimonial or logo. Use the live-client
  reference and the live demo; do not manufacture a quote.

## Page CTA

Primary: **"Hear it answer — talk to the demo agent"** (Vera live call) or
**"Book a discovery call"**. Public pricing stays "book a call" for v1. No dollar
figures on the page until packages are standardized.

## Copy-ready fragments

**Headline candidates**
- "The calls your advisor can't get to, answered."
- "Every drop-off booked. Every estimate followed up. Day and night."
- "Your phone, handled — in English and Spanish."

**Subhead / one-liners**
- "We start by answering every call, then build the follow-up, status calls, and
  reporting your shop actually runs on."
- "It captures the customer, the vehicle, and the problem — then books the job. It
  never guesses a price or a diagnosis; your techs still own that."
- "See what the phone did while you were under a hood: recovered calls, booked jobs,
  and the estimates worth chasing."

**Proof line (honest)**
- "Already live in a real shop — a bilingual agent running today for an auto-body
  client." (No count, no fabricated quote.)
