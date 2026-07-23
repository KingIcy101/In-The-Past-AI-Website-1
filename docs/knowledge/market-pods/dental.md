---
pod: Dental Practices
vertical_tag: dental / medical_dental
status: demo agent live; pricing internal; compliance-sensitive
last_verified: 2026-07-12
sources:
  - docs/planning/dental-pod/RESEARCH-BRIEF.md (intake-form repo) — §5 SAFE-TO-SAY / NEVER-SAY govern all copy
  - docs/planning/phase-001-itp-consulting-site-five-pods/research-brief.md
  - Live proof: dental demo agent ("POD DEMO — Dental"), dental intake at /dental-intake
  - External: ADA lost-call / staffing guidance
    https://www.ada.org/resources/practice/practice-management/marketing_inquiriesprospectivepatients ,
    https://adanews.ada.org/ada-news/2025/february/five-years-later-staffing-shortages-infection-control-since-the-covid-19-pandemic/
compliance_rule: >
  Administrative automation ONLY — never clinical judgment. HIPAA phrasing is
  "HIPAA-ready, BAA executed at onboarding" — NEVER "HIPAA compliant today" and
  NEVER "HIPAA certified." Nothing goes on the page that isn't in the brief's §5
  SAFE-TO-SAY list.
positioning_one_liner: >
  We make sure a new patient never hits voicemail — answering, booking, and handling
  insurance questions 24/7, in English and Spanish — while a strict administrative
  boundary keeps every clinical call with your team.
---

# Dental Practices

> Owner-to-owner content record for the Dental pod page. This is the most compliance-
> sensitive pod. **Administrative automation only.** Read the dental research brief §5
> before writing any customer-facing line — if it isn't on the SAFE-TO-SAY list, it does
> not go on the page.

## Buyer persona

- **Who signs:** the practice owner (dentist) or office manager of a single-location or
  small-group practice. Time-poor, staffing-stressed, and losing new-patient calls the
  front desk can't get to.
- **The daily user:** the front-desk team — juggling check-ins, phones, insurance, and
  reschedules. The phone loses every time a patient is standing at the counter.
- **What they care about:** new-patient capture, schedule fill, fewer no-shows, and not
  adding front-desk headcount they can't hire. The ADA has flagged front-office staffing
  shortages and explicitly advises practices to track lost prospective-patient calls.
- **What makes them skeptical:** "patients hate robots," "it'll make something up," and
  compliance anxiety. Every one of those is answered by a hard administrative boundary,
  not a bigger promise.

## Top operational pains (industry-native)

1. **New-patient calls hitting voicemail.** Industry studies consistently find ~30% of
   dental calls go unanswered, and fewer than 1 in 5 new patients leaves a voicemail —
   most just dial the next practice on Google. A new patient is worth $800–$1,000 in the
   first year (~$6,700 lifetime), so a missed call is a real, recurring loss.
2. **Front-desk overload.** A typical practice fields 40–60 calls a day; roughly half
   the attempts come when nobody can pick up (after-hours, lunch, peak overload). About
   55–60% of calls are pure scheduling — exactly the repetitive work that buries the desk.
3. **"Do you take my insurance?" — the #1 new-patient question.** It's asked constantly,
   it's nuanced, and getting it wrong loses the patient or creates a billing mess.
4. **No-shows and unfilled schedule.** Empty chairs are lost production; confirmations
   and reminders are the fix but nobody has time to run them.
5. **Emergencies that need a protocol, not a guess.** A knocked-out tooth, facial
   swelling, or airway trouble needs the *right* administrative response (route/escalate),
   never a clinical opinion from the phone.

## The phone wedge (what the AI receptionist does day one)

A 24/7 bilingual AI front desk that **answers every call, books and confirms
appointments, captures insurance details, triages emergencies with a dentist-approved
administrative protocol, and never lets a new patient hit voicemail** — while refusing
every clinical question and routing it to the team.

Day one it:
- Answers on ring one, English or Spanish, so no new-patient call dies in voicemail.
- Books, confirms, and reschedules against the practice's real schedule and appointment
  types.
- Handles the insurance question honestly: checks the carrier against the practice's
  in-network list, gives one of three truthful outcomes (in-network / out-of-network-
  but-we-file / not accepted), captures carrier + member details, and promises pre-visit
  verification — **never quotes a coverage % and never guarantees benefits.**
- Runs a **hard-coded, dentist-approved emergency protocol** (route the airway/swelling/
  bleeding emergency, offer the same-day urgent slot, escalate per the practice's after-
  hours protocol) — administrative routing, not diagnosis.
- Refuses clinical diagnosis, lab results, coverage guarantees, and other-patient info;
  routes Rx refills to staff. Minimum-necessary messaging.

> **Wedge one-liner (owner's words):** "A HIPAA-ready front desk that answers every call,
> books the appointment, handles the insurance question, and never sends a new patient to
> voicemail — in English and Spanish."

## Five broader workflows / internal tools ITP can build

1. **Scheduling + confirmation/reminder queue.** Fill the schedule and cut no-shows with
   confirmations and reminders — the practice's biggest, cheapest production recovery.
2. **Recall / reactivation (roadmap).** 25–40% of a patient base is typically overdue for
   hygiene; a follow-up workflow that calls them back to rebook is real recurring revenue.
   (Positioned as phase 2, not a day-one claim.)
3. **Insurance intake + pre-visit verification handoff.** Structured capture of carrier,
   member ID, group #, subscriber — handed to the team for verification, so the front desk
   isn't re-collecting it on the call.
4. **Unscheduled-treatment follow-up.** Follow-up on treatment the patient hasn't booked
   (the dental analog of deferred work) — administrative outreach to rebook, never clinical
   persuasion.
5. **Production/front-desk visibility + PMS write-back path.** An honest owner view of
   calls answered, new-patient inquiries, bookings, and show-rates — plus a per-practice
   integration path into the schedule (confirm-queue day one, deeper sync per system).

## Integrations landscape (works alongside, not "integrated with")

Most single-location practices run **Dentrix, Eaglesoft, or Open Dental on a server in
the office**; tech-forward/DSO offices run cloud (Ascend, Curve, Denticon, CareStack).

- **Honest day-one story:** "Bookings land instantly with your front desk in a one-click
  confirm queue. Depending on your system we then wire into your schedule — some systems
  (Open Dental, Denticon) have real APIs; the closed ones (Dentrix, Eaglesoft) we reach
  through the same certified sync layer the big AI vendors use." (Confirm-queue is real
  day one; deeper write-back is per-PMS and staged.)
- **Market-truth talking point (defensible):** most vendors claiming "PMS integrated" are
  actually notify-the-front-desk / cached-read level. Our story is the honest confirm-queue
  plus a per-PMS upgrade path — not a bluff.
- **Never** claim a live two-way write-back into a specific PMS we haven't built for that
  practice.

## HIPAA posture (verbatim-safe only)

Use only these (from the brief's SAFE-TO-SAY list):
- "We sign a Business Associate Agreement with your practice — the HIPAA contract that
  makes us legally responsible for protecting your patients' information."
- "Every vendor in our chain that touches patient information signs BAAs, and we execute
  that chain **as part of your onboarding**."
- "Our voice platform has a HIPAA mode that keeps no recordings or transcripts on its
  side — call records live only in our system, under our agreement with you."
- "Card payments run through Stripe; federal law treats pure payment processing as outside
  HIPAA. We keep clinical details out of it."
- "The AI announces itself and the recording at the start of every call."

**Never say:** "HIPAA compliant today," "our BAAs are already in place," "HIPAA certified,"
or anything implying a dentist can review recordings in a vendor dashboard. (Zero BAAs are
signed until onboarding; "HIPAA certified" is a known scam tell to dentists.)

## Safe claims (sourced or true today)

- "A HIPAA-ready AI front desk; we execute the BAA chain at onboarding." (posture-true)
- "Answers every call 24/7 in English and Spanish; books, confirms, reschedules." (product-true)
- "Handles the insurance question honestly and captures the details — never quotes a
  coverage percentage or guarantees benefits." (guardrail-true)
- "Administrative only — it never diagnoses, never gives clinical advice, and routes
  prescriptions and clinical questions to your team." (guardrail-true, the compliance spine)
- "We have a live dental demo agent you can hear today, and a dental onboarding form live
  at /dental-intake." (product-true)
- Industry context, labeled as industry studies: ~30% of dental calls unanswered; <1 in 5
  new patients leaves a voicemail; new patient worth $800–$1,000 year one (dental brief §2;
  ADA sources above).

## Unsafe claims (never say)

- "HIPAA compliant" / "HIPAA certified" / "BAAs already in place." (Never — posture only.)
- Any clinical claim, diagnosis, triage-as-medical-advice, or outcome promise.
- A coverage percentage, a benefits guarantee, or an insurance quote.
- Any customer count, named practice, or testimonial (the dental agent is a *demo*; there
  is no live paying dental client to cite).
- "Integrates with Dentrix / Open Dental / Eaglesoft" as shipped write-back — say
  "confirm-queue day one, sync per system."
- Public pricing. (Internal figures exist in the brief; the page says "book a call.")
- The agent handling Rx refills, lab results, or other-patient information.

## Proof available today

- **Live dental demo agent** ("POD DEMO — Dental") configured with the emergency,
  insurance, HIPAA, and booking behaviors — callable on a sales call.
- **Dental intake live at `/dental-intake`** — the real onboarding form (EN/ES).
- **Portal product** (calls, appointments, confirmations, analytics) reused for dental.
- **Live auto-repair client** as the "we run a real agent in production" proof point when
  a dentist asks "are you a white-label reseller?"
- **Proof gap:** no live dental customer, no testimonial, and BAAs are executed at
  onboarding (none signed yet). Say the posture honestly; show the demo.

## Page CTA

Primary: **"Hear the dental demo agent"** or **"Book a discovery call."** No pricing on
the page. Lead with new-patient capture and the administrative/clinical boundary.

## Copy-ready fragments

**Headline candidates**
- "No new patient should ever hit your voicemail."
- "A HIPAA-ready front desk that answers, books, and handles insurance — 24/7."
- "The scheduling and insurance calls, handled. The clinical calls, always yours."

**Subhead / one-liners**
- "It answers every call, books the appointment, and handles the 'do you take my
  insurance?' question honestly — in English and Spanish, day and night."
- "Administrative only, by design: it never diagnoses, never quotes coverage, and routes
  every clinical question to your team."
- "HIPAA-ready architecture, and we execute the Business Associate Agreement chain as part
  of your onboarding."

**Proof line (honest)**
- "Hear our live dental demo agent handle a new-patient call — booking, insurance, and an
  emergency, done right." (Demo, not a customer claim.)
