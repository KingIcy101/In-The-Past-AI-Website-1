// Typed market-pod registry — the single source of truth for the five industry
// routes, the homepage/nav/footer SECTOR BUTTONS, and the sitemap (ZTA-835).
// Content is proof-safe and sourced from docs/knowledge/market-pods/<pod>.md;
// claim wording is governed by docs/knowledge/market-pods/claims-matrix.md.
// Nothing here is a fabricated customer, count, metric, or live-integration claim.

export type PodSlug = "auto-repair" | "hvac" | "dental" | "roofing" | "med-spa" | "law";

/** built = shipped today · offer = we build it for you (not a present-tense product). */
export type WorkflowStatus = "built" | "offer";

export type PodWorkflow = {
  title: string;
  body: string;
  status: WorkflowStatus;
};

export type PodFaq = { q: string; a: string };

export type MarketPod = {
  slug: PodSlug;
  /** Short label for sector buttons + nav. */
  label: string;
  /** Full page/nav name. */
  name: string;
  /** Icon key resolved by components/ui/Icons via podIcon(). */
  icon: "auto" | "hvac" | "dental" | "roofing" | "medspa" | "law";
  /** One-line native pain shown beside the sector button on the homepage grid. */
  sectorPain: string;
  /** Page <title> / metadata. */
  metaTitle: string;
  metaDescription: string;
  /** Hero. */
  eyebrow: string;
  headline: string;
  lead: string;
  /** 2–3 industry-native operational pains (title + one line). */
  pains: { title: string; body: string }[];
  /** The phone wedge, this vertical, day one. */
  wedge: {
    summary: string;
    /** Day-one capabilities (bullet lines). */
    points: string[];
    /** The trust guardrail that builds credibility for this vertical. */
    guardrail: string;
  };
  /** The operations layer — five broader workflows / internal tools. */
  workflows: PodWorkflow[];
  /** Honest proof for this pod (no fabricated quotes/logos/metrics). */
  proof: {
    kind: "live-client" | "demo-led";
    lines: string[];
  };
  faqs: PodFaq[];
};

/** Lightweight shape for the sector buttons (homepage + nav + footer). */
export type Sector = {
  slug: PodSlug;
  label: string;
  name: string;
  href: string;
  icon: MarketPod["icon"];
  sectorPain: string;
};

const CLOSING_GUARD =
  "It never diagnoses, never quotes a price you didn't set, and hands anything it shouldn't handle to a person — the guardrails are the point.";

export const MARKET_PODS: Record<PodSlug, MarketPod> = {
  "auto-repair": {
    slug: "auto-repair",
    label: "Auto Repair",
    name: "Auto Repair & Body Shops",
    icon: "auto",
    sectorPain: "Drop-offs and estimates dying in voicemail",
    metaTitle: "Auto Repair & Body Shops",
    metaDescription:
      "A bilingual AI receptionist that answers every call, books the drop-off, and follows up on estimates — then the status calls, follow-up, and shop visibility built around it. A live shop runs it today.",
    eyebrow: "Auto repair & body shops",
    headline: "Every call answered, every drop-off booked — even mid-repair.",
    lead: "Your advisor is under a hood or with a customer, and half the phone rings out to the shop down the road. We answer every call in English and Spanish, book the work, and build the follow-up and shop visibility around it.",
    pains: [
      {
        title: "Advisor-busy and after-hours misses",
        body: "The advisor is with a customer or on another line, the call goes to voicemail, and the caller dials the next shop. Estimates and drop-offs die on the vine.",
      },
      {
        title: "The “is my car ready?” call flood",
        body: "Status calls interrupt the advisor all day — low value to answer, high annoyance to miss — and clog the same line new customers are trying to reach.",
      },
      {
        title: "Estimate & deferred-work follow-up leaks",
        body: "A customer declined the brake job or hasn't approved the estimate. Nobody has time to call back, so the work — and the revenue — is just gone.",
      },
    ],
    wedge: {
      summary:
        "A 24/7 bilingual (EN/ES) AI receptionist that answers every call, captures the customer, vehicle, and problem in their words, books against your real schedule, and drops every call into your portal.",
      points: [
        "Answers on the first ring, in English or Spanish, matched to the caller.",
        "Captures the customer, vehicle (year/make/model), and the problem — never diagnosing.",
        "Books, reschedules, or cancels against your real schedule.",
        "Answers hours, location, and shop questions from what you configured.",
        "Routes what it shouldn't handle to a human and takes a message after hours.",
      ],
      guardrail: CLOSING_GUARD,
    },
    workflows: [
      { title: "Repair-status self-serve", body: "“Is my car ready?” answered from your real workflow stages, so the advisor stops getting interrupted.", status: "built" },
      { title: "Estimate & deferred-work follow-up", body: "Automated call and text follow-up on open estimates and declined work — captured leads turned into booked revenue.", status: "offer" },
      { title: "DVI / inspection follow-through", body: "When a digital inspection flags work the customer didn't approve, the agent follows up to explain and book it.", status: "offer" },
      { title: "Owner leak report + call intelligence", body: "A weekly, honest view of missed-call recovery, jobs booked, after-hours captures, and repeat status calls.", status: "offer" },
      { title: "Custom internal tools per shop", body: "Reminder sequences, a dedicated number, CSR-style summaries, and reporting wired to how your shop actually runs.", status: "offer" },
    ],
    proof: {
      kind: "live-client",
      lines: [
        "A real auto shop runs a bilingual agent today — our flagship live client, not a demo.",
        "Hear the same voice yourself on the live demo, and configure a shop on the real auto-repair intake form.",
      ],
    },
    faqs: [
      { q: "Does it replace my shop-management system?", a: "No. It works alongside the system you already run — Tekmetric, Shopmonkey, Mitchell 1, Shop-Ware and the like. It captures the call and the booking on our own engine day one; deeper write-back into your system is a step we scope with you, never a claim we make before it's built." },
      { q: "Will it diagnose or quote prices?", a: "Never. It captures the vehicle and the problem in the customer's words and books the visit. It only states a price you've explicitly posted, and a person handles anything diagnostic." },
      { q: "Does it really speak Spanish?", a: "Yes — native Spanish, not accented text-to-speech. It matches the caller's language on the first ring." },
    ],
  },

  hvac: {
    slug: "hvac",
    label: "HVAC",
    name: "HVAC & Home Services",
    icon: "hvac",
    sectorPain: "Emergency calls lost to voicemail in a freeze",
    metaTitle: "HVAC & Home Services",
    metaDescription:
      "A bilingual dispatcher-receptionist that answers every call, safely triages the emergency, captures the address, books the arrival window, and texts you the lead — then maintenance renewals, status calls, and owner reporting around it.",
    eyebrow: "HVAC & home services",
    headline: "If you're under a house, we're on your phone.",
    lead: "No heat in a freeze, no AC in a heat wave — the emergency call you miss is the job your competitor books. We answer every call, triage the emergency safely, capture the address, and text you the lead, day and night, in English and Spanish.",
    pains: [
      {
        title: "After-hours and overflow emergencies",
        body: "The highest-value calls come when no one's at the desk — nights, weekends, mid-job. A missed no-heat call is a booked job for the next number on the list.",
      },
      {
        title: "Seasonal surge a human desk can't scale to",
        body: "The first freeze and first heat wave spike call volume overnight. A fixed front desk can't answer them all; unlimited simultaneous answering can.",
      },
      {
        title: "“Is the tech on the way?” call volume",
        body: "High-repeat status calls interrupt dispatch all day and bury the new-customer calls you actually want to reach you.",
      },
    ],
    wedge: {
      summary:
        "A 24/7 bilingual dispatcher-receptionist that answers every call, runs a real emergency script, captures the service address, books an arrival window against your schedule, and fires an owner alert the instant a job books.",
      points: [
        "Picks up on ring one, English or Spanish, calm under stress.",
        "Runs a real safety script: gas smell / suspected CO → leave the home, call 911 / the gas company first, then stop.",
        "Marks no-heat / no-AC / active-leak calls urgent, captures address + callback, routes to the on-call tech.",
        "Books into arrival windows against your real schedule.",
        "Gives only the diagnostic / trip fee you publish — nothing beyond it.",
      ],
      guardrail:
        "It never diagnoses, never quotes a repair, and never invents an ETA — a technician confirms on-site. Safety calls go to safety first.",
    },
    workflows: [
      { title: "Emergency triage + on-call routing", body: "Safe, keyword-driven triage (no-heat, no-AC, leak, gas/CO) that reaches a live tech fast and never parks a high-value call in voicemail.", status: "offer" },
      { title: "Service-status self-serve", body: "An honest scheduled → dispatched → on-site → completed lookup with the real arrival window, so status calls stop interrupting dispatch.", status: "built" },
      { title: "Maintenance-plan renewals", body: "Follow-up calls and reminders to renew seasonal maintenance agreements — recurring revenue you never have time to chase.", status: "offer" },
      { title: "Seasonal storm / surge mode", body: "Tuned handling for the freeze and heat-wave spike — aggressive window management and triage priority when volume jumps overnight.", status: "offer" },
      { title: "Owner reporting + dispatch board", body: "An honest owner view — calls recovered, jobs booked, after-hours captured, emergencies flagged — with deeper field-service write-back on the roadmap.", status: "offer" },
    ],
    proof: {
      kind: "demo-led",
      lines: [
        "Hear the live voice demo answer a call right now — the same platform that runs a bilingual agent for a live client in another trade.",
        "The service-status lookup and owner portal are real, shipped product surfaces you can see on a call.",
      ],
    },
    faqs: [
      { q: "How does it handle a gas or CO emergency?", a: "Safety first. On a gas-smell or suspected-CO call it tells the caller to leave the home, get to fresh air, and call 911 or the gas company — then it stops. It never tries to book or diagnose that call." },
      { q: "Can it dispatch or promise an arrival time?", a: "It books into the arrival windows you set and routes urgent calls to your on-call tech. It never invents an ETA — your tech confirms on-site." },
      { q: "Does it replace ServiceTitan or Housecall Pro?", a: "No. It works alongside the field-service system you already run and books on our engine day one. A deeper sync into your system is something we scope with you." },
    ],
  },

  dental: {
    slug: "dental",
    label: "Dental",
    name: "Dental Practices",
    icon: "dental",
    sectorPain: "New patients hitting voicemail",
    metaTitle: "Dental Practices",
    metaDescription:
      "A HIPAA-ready, bilingual AI front desk that answers every call, books and confirms appointments, handles the insurance question honestly, and triages emergencies with a dentist-approved administrative protocol — never a clinical call.",
    eyebrow: "Dental practices",
    headline: "No new patient should ever hit your voicemail.",
    lead: "A typical practice fields 40–60 calls a day and misses roughly half at peak. We answer every one, book the appointment, handle the “do you take my insurance?” question honestly — and keep every clinical call with your team.",
    pains: [
      {
        title: "New-patient calls hitting voicemail",
        body: "Industry studies consistently find roughly a third of new-patient calls go unanswered. Each one is a high-lifetime-value patient who dials the practice down the street.",
      },
      {
        title: "“Do you take my insurance?” — the #1 question",
        body: "It's asked on nearly every new-patient call, it's tedious, and a wrong answer costs trust. It needs an honest, consistent handler — not a guess.",
      },
      {
        title: "No-shows and unfilled chairs",
        body: "Empty chairs are lost production. Confirmations and reminders are the cheapest production recovery a practice has, and nobody has time to run them by hand.",
      },
    ],
    wedge: {
      summary:
        "A 24/7 bilingual AI front desk that answers every call, books and confirms appointments, captures insurance details, and triages emergencies with a dentist-approved administrative protocol — while refusing every clinical question and routing it to your team.",
      points: [
        "Answers on ring one, English or Spanish, so no new-patient call dies in voicemail.",
        "Books, confirms, and reschedules against your real schedule and appointment types.",
        "Handles insurance honestly: checks the carrier against your in-network list, gives one of three truthful answers, captures member details, and promises pre-visit verification.",
        "Runs a hard-coded, dentist-approved emergency protocol — administrative routing, not diagnosis.",
        "Refuses clinical diagnosis, coverage guarantees, and other-patient info; routes Rx refills to staff.",
      ],
      guardrail:
        "Administrative only, by design: it never diagnoses, never quotes a coverage percentage or guarantees benefits, and keeps minimum-necessary messaging. HIPAA-ready, with a BAA executed at onboarding.",
    },
    workflows: [
      { title: "Scheduling + confirmation queue", body: "Fill the schedule and reduce no-shows with confirmations and reminders — the biggest, cheapest production recovery a practice has.", status: "built" },
      { title: "Beyond the phone — with Zero to Agent", body: "After the front desk is live: practice CRM, calendar and workflow integrations, patient portals, and office automation, scoped with Zero to Agent as you're ready.", status: "offer" },
      { title: "Insurance intake + verification handoff", body: "Structured capture of carrier, member ID, group, and subscriber — handed to your team for verification so the front desk isn't re-collecting it.", status: "offer" },
      { title: "Unscheduled-treatment follow-up", body: "Administrative outreach to rebook treatment a patient hasn't scheduled — never clinical persuasion.", status: "offer" },
      { title: "Recall / reactivation", body: "A follow-up workflow that calls overdue-hygiene patients back to rebook — real recurring revenue. Positioned as phase two.", status: "offer" },
      { title: "Front-desk visibility + PMS path", body: "An honest owner view of calls answered, new-patient inquiries, bookings, and show-rates — plus a per-practice integration path into your schedule.", status: "offer" },
    ],
    proof: {
      kind: "demo-led",
      lines: [
        "A dental demo agent and a full dental intake form are live — configure a practice and hear it answer.",
        "The scheduling, confirmation, and owner-portal surfaces are real, shipped product you can walk through on a call.",
      ],
    },
    faqs: [
      { q: "Is it HIPAA compliant?", a: "It's built HIPAA-ready and we execute a Business Associate Agreement (BAA) with your practice at onboarding, before it answers live patient calls. It captures only the minimum information needed to book and confirm." },
      { q: "Will it give clinical advice or diagnose?", a: "Never. It's administrative by design — it books, confirms, and handles insurance and scheduling. Any clinical question, diagnosis, or prescription is routed straight to your team." },
      { q: "How does it handle insurance questions?", a: "It checks the caller's carrier against your in-network list and gives one of three honest answers — in-network, out-of-network but we file, or not accepted — captures their member details, and promises your team verifies benefits before the visit. It never quotes a coverage percentage." },
    ],
  },

  roofing: {
    slug: "roofing",
    label: "Roofing",
    name: "Roofing & Exteriors",
    icon: "roofing",
    sectorPain: "$10k storm calls missed after hours",
    metaTitle: "Roofing & Exterior Contractors",
    metaDescription:
      "A bilingual receptionist that answers every storm-surge call, books the free inspection, captures the insurance-claim context, flags the emergency leak, and texts you the hot lead — with unlimited simultaneous capacity.",
    eyebrow: "Roofing & exteriors",
    headline: "We answer the storm call your competitor missed.",
    lead: "After a hail or wind event, inbound spikes 300% and a human desk drowns. The average job is five figures. We answer every call at once, book the inspection, capture the insurance claim, and flag the leak — before they hang up and try the next roofer.",
    pains: [
      {
        title: "Storm surge — the headline pain",
        body: "After a hail or wind event, inbound spikes several-fold in a day. A fixed desk can't answer them all, and every unanswered call is a five-figure job going to a competitor.",
      },
      {
        title: "After-hours emergency leaks",
        body: "Active water intrusion is urgent and doesn't wait for business hours. Miss it and you lose both the emergency repair and the replacement behind it.",
      },
      {
        title: "Insurance-claim intake friction",
        body: "Storm jobs are paid by insurance and are the bulk of the work. Capturing carrier, claim, and adjuster context at the first call is what turns a caller into a booked, tracked job.",
      },
    ],
    wedge: {
      summary:
        "A 24/7 bilingual receptionist with unlimited simultaneous capacity that answers every surge call, books the free inspection, captures storm and insurance-claim context, flags the emergency leak, and texts you the hot lead instantly.",
      points: [
        "Answers on ring one during the surge, in English or Spanish, when a human desk can't.",
        "Books free inspections against your real schedule; captures roof type, issue, and urgency.",
        "Captures insurance-claim context — carrier, claim number, date of loss, adjuster status — and flags it with an instant owner alert.",
        "Triages the emergency leak: captures address + callback, marks it urgent, routes it fast.",
        "Answers status calls so “when are you coming?” stops interrupting you.",
      ],
      guardrail:
        "It never diagnoses that a roof needs replacement, never gives roof-climbing or repair instructions, and never implies a guaranteed insurance approval.",
    },
    workflows: [
      { title: "Storm-response / surge mode", body: "Tuned handling for the post-storm spike — unlimited simultaneous answering, inspection booking, and lead triage when every competitor's desk is buried.", status: "offer" },
      { title: "Insurance-claim intake + tracking", body: "Structured claim capture at the call, an owner alert on every hot insurance lead, and a storm/insurance pipeline view — the highest-value workflow in the trade.", status: "offer" },
      { title: "Emergency-leak triage + owner alert", body: "Fast, safe routing of active-leak calls so the emergency job — and the replacement behind it — doesn't die in voicemail.", status: "offer" },
      { title: "Estimate / proposal follow-up", body: "Follow-up on unbooked inspections and open proposals, plus canvassing-callback capture — speed-to-lead is the whole game in roofing.", status: "offer" },
      { title: "Production board + job-cost visibility", body: "An honest owner view — recovered leads, speed-to-lead, after-hours captured, insurance leads — with a later sync into your roofing CRM.", status: "offer" },
    ],
    proof: {
      kind: "demo-led",
      lines: [
        "Hear the live voice demo handle a call — the same platform running a bilingual agent for a live client in a related trade.",
        "The owner portal and reporting surfaces are real, shipped product you can see on a call; we never show a dashboard we haven't built.",
      ],
    },
    faqs: [
      { q: "Can it handle a storm surge?", a: "Yes — that's the point. It answers unlimited calls at once, so when a hail event spikes your inbound several-fold, every caller gets a live answer and a booked inspection instead of a busy signal." },
      { q: "Does it handle insurance claims?", a: "It captures the claim context — carrier, claim number, date of loss, adjuster status — at the first call and flags it as a hot lead. It never implies a claim is approved or promises coverage." },
      { q: "What about an active leak at 2am?", a: "It triages the emergency: captures the address and callback, marks it urgent, and routes it fast. It never gives roof-climbing or repair instructions." },
    ],
  },

  "med-spa": {
    slug: "med-spa",
    label: "Med Spa",
    name: "Med Spas & Aesthetic Clinics",
    icon: "medspa",
    sectorPain: "$600 consults missed mid-treatment",
    metaTitle: "Med Spas & Aesthetic Clinics",
    metaDescription:
      "A bilingual concierge receptionist that answers every call, quotes only your posted prices, screens and books the consult, and takes the deposit — warm, discreet, and strictly non-clinical.",
    eyebrow: "Med spas & aesthetic clinics",
    headline: "The phone never interrupts a treatment again.",
    lead: "Your injector is mid-appointment and the phone rings with a $600 filler client — who books with the spa that answered. We pick up 24/7 in a warm, discreet voice, quote only your posted prices, screen the consult, and take the deposit.",
    pains: [
      {
        title: "In-treatment and after-hours missed calls",
        body: "The highest-value inquiries land while your injector is with a client or after close. A missed consult call is a booked treatment for the spa that picked up.",
      },
      {
        title: "No-shows on high-value slots",
        body: "A missed $600–$1,500 appointment is a real hole in the day. Deposits and reminders are the only reliable protection, and they need a consistent handler.",
      },
      {
        title: "Consult-gating and repetitive pre-qualification",
        body: "Injectables, laser, and Rx legally require a provider consult, and the same pre-qualifying questions get asked all day. It needs a screener that knows the boundary.",
      },
    ],
    wedge: {
      summary:
        "A 24/7 bilingual concierge receptionist that answers every call in a polished voice, quotes only your posted prices, screens and books the consult, and takes a deposit via a secure link — warm, discreet, and strictly non-clinical.",
      points: [
        "Answers on ring one, English or Spanish, in a boutique voice — never a call-center tone, never pushy.",
        "Books the consult for injectables / laser / Rx against your real schedule and menu.",
        "Quotes only posted prices (“Botox is priced per unit; the injector confirms your plan at the consult”) — never a treatment total or promised result.",
        "Takes a deposit via a secure text-to-pay link to lock high-value slots — link only, never card capture over voice.",
        "Runs the medical-eligibility gate: pregnancy, blood thinners, reactions → routed to a provider, never answered medically.",
      ],
      guardrail:
        "Consult-first by design: it never promises a treatment, a unit count, or a result, and it never answers a medical question — those go to your provider.",
    },
    workflows: [
      { title: "Consult-to-treatment conversion", body: "Qualify the high-value inquiry, book the consult, send the pre-visit intake link, and follow up so consults actually convert.", status: "offer" },
      { title: "Deposit-to-book + no-show recovery", body: "Enforce deposits on high-value slots and run confirmations and reminders — the single biggest protection against expensive no-shows.", status: "offer" },
      { title: "Beyond the phone — with Zero to Agent", body: "After the front desk is live: client CRM, calendar and booking-system integrations, member portals, and studio automation, scoped with Zero to Agent as you're ready.", status: "offer" },
      { title: "Reactivation", body: "Follow-up outreach to lapsed clients to rebook touch-ups and recurring treatments — recurring revenue you never have time to chase.", status: "offer" },
      { title: "Membership & package handling", body: "Answer and route membership and package questions — core med-spa economics — and capture interest for your team to close.", status: "offer" },
      { title: "Owner revenue visibility", body: "An honest owner view — calls answered, consults booked, deposits pending, after-hours captured — with a later sync into your booking or EMR system.", status: "offer" },
    ],
    proof: {
      kind: "demo-led",
      lines: [
        "Hear the live voice demo answer in the same warm, non-clinical style, on the platform that runs a bilingual agent for a live client.",
        "The booking, deposit-link, and owner-portal surfaces are real, shipped product — shown on a call, never faked.",
      ],
    },
    faqs: [
      { q: "Will it give medical advice or promise results?", a: "Never. It's consult-first and strictly non-clinical — it books the consultation, quotes only your posted prices, and routes every medical or eligibility question (pregnancy, blood thinners, reactions) to your provider." },
      { q: "Can it take a deposit?", a: "Yes — via a secure text-to-pay link, so high-value slots are protected and no-shows drop. It sends the link; it never captures a card number over the phone." },
      { q: "Does it sound like a call center?", a: "No. It answers in a warm, discreet, boutique voice matched to your spa — never pushy, never body-shaming, in English or Spanish." },
    ],
  },

  // ZTA-969 — law vertical. Compliance is the product: the page sells what the
  // front desk REFUSES as much as what it does. Claims-safe: demo-led proof
  // (live demo line), no fabricated clients or outcomes, no legal-advice or
  // guaranteed-result language anywhere.
  law: {
    slug: "law",
    label: "Law Firms",
    name: "Law Firms & Legal Intake",
    icon: "law",
    sectorPain: "New matters dying in voicemail and after-hours panic calls",
    metaTitle: "Law Firms & Legal Intake",
    metaDescription:
      "A compliance-first AI front desk for law firms: every call answered, new-client intake with conflict-check discipline, consultations booked with your posted fees, urgent matters escalated to a person — and it never gives legal advice.",
    eyebrow: "Law firms & legal intake",
    headline: "Every case starts with a call someone has to answer.",
    lead:
      "The call moment is a stressed person choosing a firm — at lunch, at 9 PM, the morning after an accident. In The Past answers instantly, runs a disciplined intake, books the consultation, and hands anything requiring legal judgment to your attorneys. It is a receptionist, never a lawyer.",
    pains: [
      {
        title: "The intake call you never heard",
        body: "Prospective clients call three firms and retain the one that answers. Voicemail after hours or during court is how new matters walk away.",
      },
      {
        title: "Untrained answering is a liability",
        body: "A message service that opines on cases, implies engagement, or collects the whole story before a conflict check creates real ethics exposure.",
      },
      {
        title: "Urgent calls buried with routine ones",
        body: "A court date next week, someone in custody, a deadline letter — these can't sit in a queue behind fee-shopping calls.",
      },
    ],
    wedge: {
      summary:
        "A front desk built around legal-intake discipline: it answers every call, captures exactly what intake needs, books the right consultation at your posted fee, and escalates urgency to a human immediately.",
      points: [
        "Captures the caller, matter type, a one-line description, urgency — and the other party's full name FIRST, so your conflict check runs before the story is told",
        "Books the right consultation with your posted fees stated confidently — and quotes nothing else; retainers and rates stay with the attorney",
        "Urgent triage: custody/safety situations, anyone in custody, court dates or deadlines inside a week — warm-transferred to your on-call path, never voicemail",
        "Existing clients get identity-verified message-taking — no case details on the phone, precise messages to the right paralegal or attorney",
        "Opposing parties, opposing counsel, and adjusters get polite message-taking only — nothing discussed, ever",
      ],
      guardrail:
        "It never gives legal advice, never assesses a case or predicts outcomes, never implies representation — engagement happens only after your conflict check and a signed engagement letter — and every judgment call is an explicit human handoff to your team.",
    },
    workflows: [
      { title: "New-client intake + conflict-check capture", body: "Per-practice-area intake lanes that collect the minimum before conflicts clear: parties first, facts brief, consultation booked.", status: "built" },
      { title: "Consultation booking with posted fees", body: "Free or paid consults by practice area, stated once and booked onto your calendar with confirmations and what-to-bring instructions.", status: "built" },
      { title: "Urgent triage + after-hours escalation", body: "Custody, deadline, and in-custody calls skip the queue and reach your on-call attorney path any hour — with name, number, and the one-line situation captured.", status: "built" },
      { title: "Existing-client message discipline", body: "Identity verified against the file before anything is acknowledged; precise messages routed to the handling attorney or paralegal with callback commitments.", status: "built" },
      { title: "Beyond the phone — with Zero to Agent", body: "After the front desk is live: intake CRM, calendar and matter-workflow integrations, client portals, and office automation, scoped with Zero to Agent as you're ready.", status: "offer" },
    ],
    proof: {
      kind: "demo-led",
      lines: [
        "Call the live law demo yourself: +1 571-702-9520 — ask it for legal advice and hear it decline; ask what a consultation costs and hear a straight answer.",
        "Or have it call you: app.inthepast.ai/call-me — pick the law firm and answer your own phone.",
        "The owner-side dashboard is public too: app.inthepast.ai/law — calls, bookings, and summaries for a fictional Arlington firm.",
      ],
    },
    faqs: [
      { q: "Will it give callers legal advice?", a: "No — by design. It never interprets documents, assesses cases, predicts outcomes, or calculates deadlines. Those questions are acknowledged warmly and routed to a consultation or, when urgent, to your attorneys." },
      { q: "Can it imply we've taken someone's case?", a: "No. It explains that engagement happens only after a conflict check and a signed engagement letter, and booking a consultation is not representation." },
      { q: "What fees will it quote?", a: "Only the consultation fees you post — nothing else. Hourly rates, retainers, and contingency terms are always 'discussed with the attorney at your consultation.'" },
      { q: "How does it protect the conflict-check process?", a: "It captures the full name of every adverse party before collecting details, and keeps pre-engagement facts to the minimum needed to schedule — so your firm isn't exposed to a story it can't unhear." },
      { q: "What happens on urgent calls?", a: "Anyone in custody, court dates or filing deadlines within days, and safety situations skip the queue: during hours a warm transfer to your team, after hours your on-call path — never voicemail. Emergencies are told to call 911 first." },
      { q: "What can Zero to Agent build after the phone is handled?", a: "The front desk is the narrow start. From there, Zero to Agent can scope intake CRM, calendar and workflow integrations, client portals, and office automation — only when you're ready, and only what earns its keep." },
    ],
  },
};

/** Registry-order list of pods. */
export const POD_ORDER: PodSlug[] = ["auto-repair", "hvac", "dental", "roofing", "med-spa", "law"];

export const POD_LIST: MarketPod[] = POD_ORDER.map((slug) => MARKET_PODS[slug]);

/** The five SECTOR BUTTONS (Matt's requirement) — homepage, nav, footer. */
export const SECTORS: Sector[] = POD_LIST.map((pod) => ({
  slug: pod.slug,
  label: pod.label,
  name: pod.name,
  href: `/${pod.slug}`,
  icon: pod.icon,
  sectorPain: pod.sectorPain,
}));

export function getPod(slug: string): MarketPod | undefined {
  return (MARKET_PODS as Record<string, MarketPod>)[slug];
}
