---
pod: Med Spas & Aesthetic Clinics
vertical_tag: med_spa
status: pod work exists (template built); compliance-sensitive
last_verified: 2026-07-12
sources:
  - docs/planning/MARKET-PODS-BUILD-PACKAGE-2026-07-01.md §5 (intake-form repo)
  - docs/verticals/README.md (intake-form repo)
  - docs/planning/phase-001-itp-consulting-site-five-pods/research-brief.md
  - External: AmSpa $17B+ industry, small-owner ops
    https://www.americanmedspa.org/med-spa-statistics/ ,
    https://www.americanmedspa.org/news/how-small-medical-spas-can-get-started-with-ai-without-hiring-more-staff/
compliance_rule: >
  Administrative automation ONLY — never clinical/diagnostic/eligibility judgment.
  Cosmetic is CASH-PAY: never claim to bill insurance or collect insurance info.
  Consult-gate injectables/laser/Rx: book a consult, never promise a treatment or outcome.
positioning_one_liner: >
  Your phone never books a $600 filler client while your injector is mid-treatment —
  we answer 24/7, quote only your posted prices, screen the consult, and take the
  deposit, in English and Spanish.
---

# Med Spas & Aesthetic Clinics

> Owner-to-owner content record for the Med Spa pod page. Highest average-ticket local
> vertical we serve — and medically adjacent. **Administrative automation only:** book the
> consult, never promise a treatment, an outcome, or an eligibility ruling. Cosmetic is
> cash-pay, never insurance.

## Buyer persona

- **Who signs:** the owner of an independent or small-group med spa / aesthetic clinic —
  often the injector or lead esthetician who also runs the business. AmSpa describes a
  $17B+ industry (growing $1B+/yr) where small owners personally handle scheduling,
  inquiries, follow-up, and operations.
- **The bottleneck AND the revenue leak:** a single injector/esthetician juggles in-room
  clients and the phone. Every missed call is a $400–$1,500 appointment walking to the
  competitor across the strip mall.
- **What they care about:** filling high-value consult and treatment slots, cutting no-
  shows on expensive appointments, protecting a premium/boutique brand experience, and not
  answering the phone mid-treatment.
- **The register:** boutique-hospitality, discreet, premium. This buyer is repelled by
  anything that feels like a call center or hard-sell.

## Top operational pains (industry-native)

1. **After-hours, lunchtime, and in-treatment missed calls** — the highest-ROI wedge. The
   phone rings when the injector's hands are literally full.
2. **Repetitive pre-qualification.** "Do you do lip filler?" "How much per Botox unit?"
   "Do you have semaglutide?" "Do you take insurance?" (cosmetic is cash-pay) — asked all
   day, answered inconsistently, and often lost to voicemail.
3. **No-shows on high-value slots.** A missed $600–$1,500 appointment is a real hole in the
   day; the fix is deposit-to-book plus confirmation reminders.
4. **Consult-gating.** Injectables/laser/Rx legally require a provider consult/intake before
   treatment. The phone must book a *consult*, never promise the treatment.
5. **Bilingual demand** in the live territories (FL/TX/CA) — for both clients and staff.

## The phone wedge (what the AI receptionist does day one)

A 24/7 bilingual concierge-style receptionist that **answers every call, quotes only the
spa's posted prices, screens and books the consult, and takes the deposit** — warm,
discreet, and strictly non-clinical.

Day one it:
- Answers on ring one, English or Spanish, in a polished boutique voice (never a call-
  center tone, never pushy, never body-shaming).
- Books the **consult** for injectables/laser/Rx (or the treatment slot per the spa's
  policy) against the real schedule and treatment menu.
- Quotes **only posted prices** ("Botox is $12/unit; the injector confirms your plan at the
  consult") — never a total-treatment estimate, never a promised unit count or result.
- Takes a **deposit** via a Stripe link (text-to-pay) to lock high-value slots and cut no-
  shows — link only, never card capture over voice.
- Runs the **medical/eligibility gate:** "Can I get Botox while pregnant?" / "I'm on blood
  thinners" → never answered medically → routed to a provider consult. A reaction/
  complication report is an urgent transfer with "seek care if severe."

> **Wedge one-liner (owner's words):** "Your phone never books you a $600 filler client
> while your injector's mid-treatment. We answer 24/7, quote only your posted prices,
> screen the consult, and take the deposit — in English and Spanish."

## Five broader workflows / internal tools ITP can build

1. **Consult-to-treatment conversion.** Qualify the high-value inquiry, book the consult,
   send the pre-visit intake link, and follow up so consults actually convert to treatments.
2. **Deposit-to-book + no-show recovery.** Enforce deposits on high-value slots and run
   confirmations/reminders — the single biggest protection against expensive no-shows.
3. **Reactivation.** Follow-up outreach to lapsed clients to rebook touch-ups and recurring
   treatments — recurring revenue the owner never has time to chase.
4. **Membership & package handling.** Answer and route membership/package questions
   (memberships are core med-spa economics) and capture interest for the team to close.
5. **Owner revenue visibility + treatment/marketing attribution (roadmap).** An honest owner
   view (calls answered, consults booked, estimated booked revenue, deposits pending, after-
   hours captured) without inventing an ROI figure — plus a later sync into the booking/EMR.

## Integrations landscape (works alongside, not "integrated with")

Med spas run a booking platform and sometimes an aesthetics EMR — we name it at intake and
sync later; **we never replace it and never claim a live integration we haven't built.**

- **Booking/business platforms commonly named:** Boulevard (category leader), Mindbody,
  Vagaro, Zenoti (multi-location).
- **Aesthetics EMR / photo systems:** Aesthetic Record, PatientNow / RxPhoto (before/after
  photos).
- **Payments (real today):** Stripe deposit link via the existing live Stripe integration —
  link only, gated per spa.
- **Honest framing:** "Works alongside Boulevard, Mindbody, Vagaro, or Zenoti — we own the
  phone, the consult booking, and the deposit, and can sync into your scheduler as a later
  step."

## Safe claims (sourced or true today)

- "A 24/7 bilingual receptionist that answers every call, books the consult, quotes only
  your posted prices, and takes the deposit." (product-true; deposit via live Stripe link)
- "Administrative only — it never gives medical advice, never rules on eligibility, and
  routes every clinical question to your provider." (guardrail-true, the compliance spine)
- "Cash-pay by design for cosmetic work — it never claims to bill insurance." (guardrail-true)
- "It never promises a result, a unit count, or a total price — the injector confirms your
  plan at the consult." (guardrail-true)
- "A reaction or complication report is transferred to a human immediately, with 'seek care
  if severe.'" (guardrail-true)
- Industry context, labeled as industry studies: $17B+ industry growing $1B+/yr; small
  owners personally handle scheduling and follow-up (AmSpa sources above); typical missed
  appointment worth $400–$1,500.

## Unsafe claims (never say)

- Any medical advice, diagnosis, eligibility/contraindication ruling, or outcome/result
  promise.
- Insurance billing or collecting insurance info (cosmetic is cash-pay).
- A unit count, a treatment plan, or a total-treatment price estimate.
- Any customer count, named clinic, or testimonial. (Med Spa is template/pod work — there is
  no live paying med-spa client to cite.)
- "Integrates with Boulevard / Zenoti / Mindbody" as shipped — say "works alongside."
- Card capture over voice (Stripe link only), or a HIPAA-compliance claim (cosmetic isn't a
  HIPAA clinical record, but never imply compliance status either way).
- Public pricing on the page.

## Proof available today

- **Live web demo:** Vera (callable voice demo) proves the answer-and-book experience.
- **Shared product spine + med-spa template:** the med-spa vertical is the closest template
  in the pod framework (persona, consult-first guardrails, deposit flow), reusing the shipped
  booking engine, portal, live Stripe deposit link, and bilingual voice.
- **Live auto-repair client** as the "we run a real production agent" proof point.
- **Proof gap:** no live med-spa client, no testimonial, and med-spa design references were a
  placeholder stub (no owner-provided dashboard reference yet). Show the demo and the template;
  do not imply a med-spa customer base.

## Page CTA

Primary: **"Talk to the demo agent"** (Vera) or **"Book a discovery call."** No pricing on the
page. Lead with the premium/boutique tone and the consult-first, non-clinical boundary.

## Copy-ready fragments

**Headline candidates**
- "The phone never interrupts a treatment again."
- "It books the $600 consult while your injector's mid-appointment."
- "Answered, screened, deposit taken — 24/7, in English and Spanish."

**Subhead / one-liners**
- "We answer every call in a warm, discreet voice, quote only your posted prices, screen the
  consult, and take the deposit — so no high-value inquiry cools off in voicemail."
- "Consult-first by design: it books the consultation and never promises a treatment, a
  result, or a price the provider hasn't confirmed."
- "Cosmetic is cash-pay — it never claims to bill insurance, and it protects your premium
  brand on every call."

**Proof line (honest)**
- "Hear the demo agent screen a consult and take a deposit." (Demo, not a customer claim.)
