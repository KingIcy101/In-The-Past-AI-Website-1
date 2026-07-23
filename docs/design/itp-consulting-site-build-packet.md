---
artifact: itp-consulting-site-build-packet
phase: 001b
role: design researcher
status: ready
created_at: 2026-07-12
satisfies: docs/design/itp-consulting-site-direction.md (frozen constraint packet)
consumers: [001c homepage, 001d industry routes, 001e integration/proof]
stack: Next.js 16 App Router · React 19 · Tailwind CSS v4 (@theme in app/globals.css) · Framer Motion (required) · next/font/google only
---

# ITP Consulting Site — Build Packet (one buildable art direction)

This packet turns the frozen direction (`docs/design/itp-consulting-site-direction.md`)
into ONE coherent, buildable art direction plus exact tokens, a component inventory,
a kill/refactor disposition for every current file, a state matrix, and a proof list.

It is a **constraint packet, not a pixel mockup.** Tokens, the kill list, page
*beats* (required sections and their priority), a11y, and motion rules are FIXED.
Grid, exact composition, and illustration detail are the builder's judgment (001c/001d).

---

## 0. The chosen direction — 5-sentence thesis

**"The operations firm on paper, not another AI bot on black."** We move from a
one-note dark-brown/orange SaaS landing page to a calm, **light editorial canvas**
(warm paper, near-black ink, disciplined type) that reads like a small, credible
consultancy that documents how a business runs. **The ITP amber is kept as the single
brand signature** (demoted from "everything is orange on black" to one deliberate
accent), and **each of the five pods gets one muted, editorial accent hue** — rust,
steel-blue, clinical-teal, slate, plum — so every industry page has its own operational
texture while all pages share the same canvas, ink, type, amber, and components (one
firm). The homepage leads with **category + audience + outcome**, and its second beat
is the **five-stage operations progression** (answer → qualify → follow-up/book →
report → internal tools) so an owner sees a human system, not a feature list. Every
gimmick that signals "template" — flip cards, custom cursor, blurred aura orbs, 3D
tilt/glare, tickers, glow pulses, fabricated live counters and testimonials — is
**killed**, replaced by real routes, honest proof, and restrained, reduced-motion-aware
motion.

**RED it must not become:** another dark card grid with glows and generic AI art.
**GREEN target:** an owner sees a human consultancy and an operational system within
the first viewport and the next section.

---

## 1. Palette (exact hex — light editorial canvas, one firm + per-pod accent)

Light-canvas is chosen per the direction packet ("calmer, more editorial/consulting,
light-canvas is allowed and likely right"). Amber is retained brand equity.

### 1.1 Core — shared across the whole firm

| Token | Hex | Use |
|---|---|---|
| `--canvas` | `#F7F4EF` | page background — warm "paper" (NOT white, NOT brown) |
| `--canvas-raised` | `#FFFFFF` | cards / raised surfaces on paper |
| `--canvas-sunken` | `#EFEAE1` | subtle inset fills, alt-row, code/data wells |
| `--ink` | `#1A1712` | primary text / headings — warm near-black (not pure #000) |
| `--ink-secondary` | `#5B5347` | body-secondary, captions |
| `--ink-muted` | `#8A8073` | meta, disabled, hairline labels |
| `--hairline` | `#E4DDD1` | borders, dividers, table lines (warm, low-contrast) |
| `--amber` | `#D97A34` | ITP brand signature — fills, graphic accents, icon default |
| `--amber-deep` | `#B25E1B` | amber for text/links on paper (AA at body size, ~4.6:1) |
| `--amber-tint` | `#F6ECE0` | amber wash backgrounds |
| `--ink-invert` | `#161310` | the ONE dark surface — see §1.3 |
| `--paper-on-dark` | `#F2ECE0` | text on the dark surface |
| `--focus` | `#B25E1B` @ 35% | focus ring color (or pod accent on pod pages) |

Contrast: ink/canvas ≈ 13:1 (AAA). `--amber-deep`/canvas ≈ 4.6:1 (AA text). Pod
accents below are AA for **large text, UI, icons, borders, fills**; for body-size
colored text use the `-deep` variant.

### 1.2 Per-pod accents (one accent + one tint per pod; amber stays constant)

A deliberately desaturated, mid-value family so five pages still feel like one firm.
Distinct hues (red / blue / teal / slate / plum) give each page native texture.

| Pod | `--accent` | `--accent-deep` (body text) | `--accent-tint` (10–12% bg) | Reads as |
|---|---|---|---|---|
| Auto Repair | `#B4472F` | `#9A3A24` | `#F4E9E4` | primer/rust — shop floor |
| HVAC | `#2F6D8C` | `#265875` | `#E6EDF1` | steel blue — mechanical, hot/cold |
| Dental | `#2E7D74` | `#256158` | `#E4EEEC` | clinical teal — clean, calm, trust |
| Roofing | `#48505B` | `#3A424E` | `#EAEBEE` | slate/shingle — structural, storm |
| Med Spa | `#8A5A7A` | `#734863` | `#F0E9EE` | muted plum — premium, aesthetic |

Rule: on a pod page, the pod accent replaces amber for the eyebrow, active states,
icon tint, and the sector-button dot; **amber remains the shared brand thread**
(logo, primary CTA option, cross-firm chrome) so pages never look like five brands.

### 1.3 The one dark moment (used sparingly, for depth + product nod)

One optional dark band (`--ink-invert #161310`, text `--paper-on-dark`) for the
"operate & report / internal tools" section or the footer — a single moment of depth
that nods to the real dark portal/ops product without making the site dark. Do **not**
scatter dark sections; one per page maximum.

### 1.4 What dies from the current palette

Delete the dark-brown/amber `@theme` set (`--bg:#0a0704`, `--surface:#120c08`,
`--color-glow`, `--color-bg-elevated:#1A1A1A`, the near-black hero radial, all
`rgba(224,136,60,*)` glow shadows). The current site also has **palette incoherence**
today: the hero cluster uses a near-black `#0A0A0A` radial + `#F59E0B` amber while the
sections use brown `#0a0704` + `#e0883c` amber. The new token set unifies both.

---

## 2. Typography (next/font/google only — recommended change + fallback)

**Current (app/layout.tsx):** `Plus_Jakarta_Sans` (display, --font-display) +
`Inter` (body, --font-sans), both via `next/font/google`. Good body choice; the
geometric display contributes to the SaaS look.

**Recommendation — swap the display face for an editorial serif; keep Inter.**

- **Display / headings → `Fraunces`** (next/font/google, variable, `opsz`+`SOFT` axes,
  weights 400–600, load italic optional). A warm "old-style" soft-serif that instantly
  signals *editorial consultancy / publication* and is the decisive break from the
  geometric-sans AI-SaaS look — while staying next/font-only (no new dependency).
- **Body / UI / tables / portal chrome → keep `Inter`** (weights 300–600). Already
  loaded, excellent for dense operational UI and numerics.
- **Numerics / data readouts →** `Inter` with `font-variant-numeric: tabular-nums`
  (no third font). Only add `JetBrains Mono` if a code/data-terminal texture is
  explicitly wanted — default is NO third font.

**Fallback (if Matt rejects a serif):** keep the two-sans system but treat the display
face as ink-forward and tighter; keep `Plus Jakarta Sans` OR switch display to `Inter`
Display sizing. Serif is the primary recommendation.

**Payload discipline:** Fraunces variable, subset `latin`, only the weights used;
`display: "swap"`. Keep total font weight budget ≤ current.

### Type scale (editorial; fluid clamps)

| Role | Family / weight | Size | Line-height | Tracking |
|---|---|---|---|---|
| Display (hero H1) | Fraunces 500–600 | `clamp(2.5rem, 6vw, 4.5rem)` | 1.05 | −0.01em |
| H2 (section) | Fraunces 500 | `clamp(2rem, 4vw, 3rem)` | 1.1 | −0.01em |
| H3 (card/sub) | Fraunces 500 / Inter 600 | `clamp(1.25rem, 2vw, 1.6rem)` | 1.2 | 0 |
| Eyebrow / label | Inter 600 | 0.8125rem (13px) | 1.2 | 0.14em, uppercase, accent color |
| Lead / intro | Inter 400 | `clamp(1.125rem, 1.5vw, 1.3rem)` | 1.55 | 0 |
| Body | Inter 400 | 1rem | 1.65 | 0 |
| Small / meta | Inter 400–500 | 0.875rem | 1.5 | 0 |
| Data / metric | Inter 600 tabular-nums | contextual | 1.0 | 0 |

**Mobile hard rule (project standard):** inputs/textareas/selects ≥ 16px at ≤768px;
body never below 16px on the hero/first read.

---

## 3. Spacing, radius, shadow tokens

### Spacing (4px base — Tailwind scale is fine)
- Section rhythm: mobile `py-16`/`py-20`, desktop `py-24` (calm down from the current
  uniform `py-28`). One-dark-band sections may go `py-28`.
- Content container `max-w-[72rem]` (1152); nav/footer `max-w-[80rem]` (1280).
- Gutters: `px-6` mobile / `px-8` desktop. Vertical stack rhythm inside sections: 24/32/48.

### Radius
| Token | px | Use |
|---|---|---|
| `--r-sm` | 6 | inputs, chips, **sector buttons** |
| `--r-md` | 10 | cards, panels (default — replaces most `rounded-2xl`) |
| `--r-lg` | 16 | large feature panels only |
| `--r-pill` | 999 | primary CTA + optional sector-button pill variant |

Move away from "everything rounded-2xl + everything pill." Cards default to 10px.

### Shadow (neutral/ink — NEVER amber glow on a light canvas)
| Token | Value |
|---|---|
| `--shadow-xs` | `0 1px 2px rgba(26,23,18,0.04)` |
| `--shadow-sm` | `0 1px 3px rgba(26,23,18,0.06), 0 1px 2px rgba(26,23,18,0.04)` |
| `--shadow-md` | `0 4px 16px rgba(26,23,18,0.08)` |
| `--shadow-lg` | `0 12px 32px rgba(26,23,18,0.10)` |
| focus ring | `0 0 0 3px <accent> @ 35%` |

**KILL every amber glow box-shadow, `glow-amber`, `glow-pulse`/`nav-cta-glow`,
`cursor-flash`, and the `btn-shine` sweep.** Depth on paper comes from hairlines +
soft neutral shadow, not light-on-dark bloom.

---

## 4. Motion rules (restrained; reduced-motion is a hard gate)

Framer Motion stays (project requirement) but is used with restraint.

- **Entrances:** fade + 8–16px rise, 300–450ms, ease `[0.16, 1, 0.3, 1]`, `viewport once`.
  Stagger children 40–60ms, cap total ~250ms.
- **Hover:** 120–160ms color/background/`translateY(-1px)` only. No card scale > 1.01.
  No glare, no tilt, no magnetic pull.
- **Banned motion (all killed):** 3D `rotateX/rotateY` reveals, masked 115% text
  reveals, tilt+glare cards, magnetic buttons, infinite ambient loops (aura drift,
  film grain, tickers, glow pulse), the "live" fake counter, custom-cursor spring.
- **`prefers-reduced-motion: reduce` (required):** global CSS block that disables
  transforms/entrance animation (opacity-only or none), stops all looping animation,
  sets `scroll-behavior: auto`, and renders the Vera demo waveform + any indicators as
  **static**. In React, gate every Framer variant on `useReducedMotion()` so animation
  becomes instant, not merely faster.

---

## 5. Homepage anatomy (positioning-led beats — order is fixed, layout is builder's)

The homepage must communicate, in this priority order:

1. **First viewport = category + audience + outcome (not a feature list).**
   - Eyebrow: category — e.g. "AI operations for local businesses" / "Vertical AI
     operations consultancy."
   - Fraunces headline: the owner's operational outcome, not "AI answers your phone."
   - Lead line: we start with the calls you miss, then build the follow-up, booking,
     reporting, and internal tools around them.
   - Primary actions: **Book a discovery call** (opens accessible booking modal) +
     **Hear it answer** (Vera live demo). Both must work; no dead `#get-started` anchor.
   - Supporting visual: a **code/SVG-built operational illustration** (process, not a
     stock human, not a fabricated dashboard screenshot).
   - **Remove** the "Trusted by 200+ businesses" badge (unverified).

2. **Second section = the operations progression (the differentiator).**
   A five-stage `WorkflowProgression` built in SVG/code:
   **Answer & capture → Qualify & route → Follow up & book → Operate & report →
   Build internal tools.** Horizontal on desktop, vertical on mobile, connected by a
   hairline track; each stage = icon + label + one line. This is the visible "human
   system" that must land in the first two beats (Matt-test #1). Semantic `<ol>`.

3. **Five-pod navigation via SMALL AESTHETIC SECTOR BUTTONS (Matt's explicit requirement).**
   A row/grid of **five small, aesthetic sector buttons** — each a real
   `<Link href="/auto-repair|/hvac|/dental|/roofing|/med-spa">`, icon + label + a tiny
   dot in that pod's accent. "Small + aesthetic" = compact chips (~40–44px visual
   height, ≥44px touch target via padding), hairline border, pod-accent dot, subtle
   hover lift. **Placement (all three):** (a) immediately under the hero / end of first
   viewport as the primary "choose your world" affordance, (b) again in the homepage
   industries section with a one-line native pain each, and (c) in the footer. These
   **replace the six hover-only flip cards** — no hover-only dead ends, keyboard + touch
   operable, and they point to the five REAL routes (current cards list the wrong six:
   Dental/Law/Medical/Home Services/Real Estate/Auto Shops).

4. **Phone wedge, honestly framed.** Voice remains a strong entry product but no longer
   defines the whole firm: a focused module + the live Vera demo (keep DemoSection's
   real voice panel; see §8).

5. **How we work.** Refactor `HowItWorks` (Connect → Train → Launch) into the calm
   editorial 3-step "how we engage" band.

6. **Honest proof.** Real assets only (see credibility inventory): the live Vera demo,
   the live-client reference (Daniel's Paint and Body — auto, no fabricated quote), the
   real product surfaces (portal/intake). Honest placeholder where proof is missing.
   **Kill the fabricated Testimonials, TrustSignals count-ups, and LiveCounter.**

7. **FAQ (semantic accordion).** See §8 component + §9 states. Reconcile pricing answer
   with the "book a call" v1 decision.

8. **Final CTA.** Refactor `FinalCTA`: drop "Join 250+ businesses"; close on the
   operations-partner promise + booking/demo.

9. **Real footer** (§8): five industry links, company, product (demo/portal), legal.

---

## 6. Industry page anatomy (five routes — native, not noun-swapped)

Each of `/auto-repair`, `/hvac`, `/dental`, `/roofing`, `/med-spa` shares the component
system but sources its content from `docs/knowledge/market-pods/<pod>.md` (lane 001a).
Required beats, in order (composition is 001d's judgment):

1. **Native hero** — pod-accent eyebrow, Fraunces headline in the owner's own
   problem language (from the pod's copy-ready fragments), lead line, primary CTA
   (**Hear it answer** / **Book a call**), and a **code/SVG pod-native process
   illustration** (no stock photos, no fake dashboards).
2. **Pain model** — 2–3 industry-native operational pains (from the pod file's "Top
   operational pains"). Replace giant unsourced % numbers; if a stat is used it must be
   sourced + clearly labeled industry context (per lane a claims-matrix), never an ITP
   result.
3. **Phone wedge** — "day one, the phone is handled" for this vertical, with the
   guardrails that build trust (e.g. auto: "never diagnoses or quotes a price you
   didn't set").
4. **Workflow story / internal tools** — the pod's five broader workflows beyond
   reception (from the pod file) as a numbered editorial layout; this is the
   "operations layer" that is the whole point.
5. **Honest proof** — the honest-proof module (auto shows the live-client reference;
   others lean on the live demo + real product surfaces; no invented proof).
6. **FAQ** — pod-specific, semantic accordion.
7. **CTA** — booking + demo; public pricing stays "book a call" for v1.

Dental & Med Spa: administrative-automation framing only; distinguish admin from
clinical judgment; no clinical advice; no blanket compliance claim (per lane a).

---

## 7. Component inventory to BUILD (owned by 001c shared shell, consumed by 001d)

| Component | What it is | a11y / notes |
|---|---|---|
| **SiteNav** | Real routing header (replaces FloatingNav + dead hero Navbar). Logo, Industries (5 routes), How we work, Company, primary CTA. Solid paper + hairline on scroll. | Desktop industries menu = real `<Link>`s, open on click+hover, keyboard operable, no hover-only dead end. Mobile disclosure: `aria-expanded`/`aria-controls`, focus move-in, Esc closes, `focus-visible` rings. |
| **SectorButtons** | The five SMALL AESTHETIC sector buttons (Matt's requirement). icon + label + pod-accent dot; real `<Link>`. Homepage (under hero + industries), footer, and reusable as pod cross-links. | ≥44px touch target; visible focus; states in §9; never hover-only. |
| **WorkflowProgression** | The 5-stage operations diagram (answer→qualify→follow-up/book→report→internal tools). SVG/code, horizontal→vertical. Pod pages pass pod-specific labels. | Semantic `<ol>`; connector is decorative `aria-hidden`; reduced-motion static. |
| **PodHero** | Per-industry native hero w/ code illustration. | Heading hierarchy; CTA buttons real. |
| **PainModel** | 2–3 native pains, editorial list/cards. | Stats sourced+labeled or omitted. |
| **PhoneWedge** | Focused "handled day one" module + Vera demo entry. | — |
| **WorkflowStory** | The five broader workflows / internal tools per pod. | Ordered/step semantics. |
| **HonestProof** | Real-proof block: live demo, live-client reference (variant), real product surfaces; honest placeholder variant when no public proof. | Never renders a fabricated quote/logo/metric. |
| **FAQAccordion** | Semantic accordion (replaces div-onClick FAQ). | `<button aria-expanded aria-controls>` + region `role`/labelled; Enter/Space/Arrow keys; chevron respects reduced-motion. |
| **Dialog** (shared) | One accessible modal primitive powering **BookingModal** (Cal.com) and **VeraModal**. | `role="dialog"` `aria-modal="true"` `aria-labelledby`; focus trap; focus restore to trigger; Esc; scroll-lock; **visible fallback** if the iframe/agent fails ("book at cal.com/randy-mendez/… or email hello@inthepast.ai"). |
| **Button** | Token CTA system: primary (amber or ink fill), secondary (hairline ghost). Replaces inline gradient+glow+shine buttons. | ≥44px; `focus-visible` ring; `:disabled` state. |
| **VeraWidget** | Single persistent demo launcher (see §8 floating-action rule). | One persistent mobile action max; tooltip auto-cycle pauses under reduced-motion. |
| **SectionEyebrow / SectionHeading** | Shared editorial section header (eyebrow + Fraunces H2). | — |
| **Icon** | Keep the custom SVG icon library; re-tokenize color to accept ink/pod-accent. | Never emoji (owner rule). |
| **Reveal** | Simple fade+rise wrapper (replaces ScrollReveal3D). | `useReducedMotion()`-aware. |
| **Footer** | Real multi-column footer. | Real links only. |

---

## 8. KILL / REFACTOR — disposition of every existing file

Legend: **KILL** = delete/replace · **REFACTOR** = keep bones, re-theme + fix ·
**KEEP** = real asset, light touch.

### components/sections/
| File | Disposition | Why / action |
|---|---|---|
| `Industries.tsx` | **KILL & REPLACE** | Six hover-only flip cards, wrong six industries, no routes, "AI voice + chat" framing, amber glow. Replace with `SectorButtons` → 5 real routes. |
| `LiveCounter.tsx` | **KILL** | Fabricated "live" missed-call counter ("each number is a real lead lost") + ticker strip. Fake proof — direction packet forbids. |
| `Testimonials.tsx` | **KILL** | Fabricated quotes (Sarah M., Dr. Lisa K., …) + "All reviews verified." Fabricated credibility. Replace with `HonestProof` (or omit until real). |
| `TrustSignals.tsx` | **KILL** | Fabricated count-ups "42,680+ calls / 13,820+ appointments / 250+ deployments." Unverified metrics (flagged in plan). |
| `WhatWeBuild.tsx` | **REFACTOR/REPLACE** | Voice/chatbot "three tools" story on TiltCard/glare. Re-frame as "voice is the wedge, not the firm" + feed `WorkflowProgression`. Drop TiltCard. |
| `Features.tsx` | **REFACTOR** | 9 receptionist features w/ unsourced stats (<4s, 3×, 94%, 100%…). Strip unsourced stats; repurpose the tabbed pattern (with real ARIA tabs, §9) for the 5-stage workflow or pod workflow story; demote from "feature wall." |
| `PainPoints.tsx` | **REFACTOR** | Giant unsourced numbers (31% / 47% / $52K) + 3D number reveals. Source+label as industry context (lane a) or make qualitative; drop 3D. |
| `DemoSection.tsx` | **KEEP & REFACTOR** | **Vera live voice = real (keep).** Re-theme, add Dialog/reduced-motion, static waveform under reduced-motion, strip sub-stats ("100% Calls answered"). Chat + Booking panels are **simulated** → keep only if clearly labeled "illustrative," else reduce to the real Vera call. |
| `HowItWorks.tsx` | **KEEP & REFACTOR** | Good Connect/Train/Launch bones for "how we work." Re-theme, restrain motion; verify integration chips (HubSpot/Salesforce/GHL) against claims-matrix before showing. |
| `FAQ.tsx` | **REFACTOR** | Div-onClick, not keyboard-accessible. Rebuild as semantic `FAQAccordion`. Reconcile the "$750/month" answer with the "book a call" v1 decision. |
| `FinalCTA.tsx` | **KEEP & REFACTOR** | Drop "Join 250+ businesses"; re-message to operations partner; drop 3D reveal + magnetic; keep as closing CTA + real footer handoff. |

### components/hero/
| File | Disposition | Why / action |
|---|---|---|
| `HeroSection.tsx` | **REPLACE** | Rebuild first viewport (category/audience/outcome). Remove "Trusted by 200+" badge. Uses a divergent near-black token set → unify to new palette. |
| `Navbar.tsx` | **KILL (dead code)** | Not mounted anywhere (SiteShell uses FloatingNav). Dead `#features`/`#pricing`/`#get-started` anchors. Consolidate to one `SiteNav`. |
| `CTA.tsx` | **KILL/REPLACE** | "Start Your Free Trial" → dead `#get-started` anchor + unverified "free trial." Replace with token CTAs (book/demo). |
| `TrustBar.tsx` | **REFACTOR** | "Serving Dental/Auto/Law/Medical/Restaurants/Contractors" → update to the 5 real pods (or honest "focused on"). Not fabricated, just wrong set. |
| `Stats.tsx` | **REFACTOR** | Hero missed-call stats (40% / $75B / 85%) unsourced. Source+label (lane a) or soften to qualitative; don't present as fact. |
| `PhoneMockup.tsx` | **REFACTOR (optional keep)** | Code-built illustration is allowed/encouraged, but it's the "incoming call answered / Appointment booked ✓" trope and uses a **✓ emoji** (owner rule). Re-theme + evolve toward an operations illustration, remove emoji — or retire in favor of the `WorkflowProgression` visual. |
| `index.ts` | **REFACTOR** | Update exports after Navbar/CTA removal. |

### components/layout/
| File | Disposition | Why / action |
|---|---|---|
| `SiteShell.tsx` | **REFACTOR** | Remove `CustomCursor` + `AuraBackground`; keep `CalModalProvider`; mount one `SiteNav`; enforce single mobile floating action. |
| `FloatingNav.tsx` | **REPLACE** | Hash-scroll single-page nav + `nav-cta-glow` + JS `onMouseEnter` hover. Replace with real routing `SiteNav`. |
| `FloatingCTA.tsx` | **CONSOLIDATE** | Second persistent floating action (bottom-right) — with `VoiceWidget` (bottom-left) that's **two**, violating "one persistent mobile action max" and risking content cover. Merge: keep ONE persistent action on mobile (recommend Vera demo), make the other desktop-only or fold into nav. Remove amber glow. |
| `Footer.tsx` | **REPLACE** | Minimal terms/privacy only. Build real multi-column footer (industries/company/product/legal). |
| `VoiceWidget.tsx` | **KEEP & REFACTOR** | Real Vera demo launcher. Tone down hard-sell rotating phrases ("I bet we can save you thousands…"); make it the single persistent mobile action; pause auto-cycle under reduced-motion. |
| `VeraModal.tsx` | **KEEP & REFACTOR** | Real live voice demo w/ transcript (strong asset). Route through shared `Dialog` a11y; static waveform under reduced-motion. |

### components/ui/
| File | Disposition | Why / action |
|---|---|---|
| `CustomCursor.tsx` | **KILL** | Custom glowing cursor + `cursor:none !important`. Gimmick; hurts usability/a11y; screams "template." Also remove the `cursor:none` block in globals. |
| `AuraBackground.tsx` | **KILL** | Five blurred drifting orbs + mouse mask = the "blurred orbs" the direction packet forbids. Remove + delete `aura-drift-*` keyframes. Optional replacement: a very-low-opacity static hairline grid, no animation. |
| `TiltCard.tsx` | **KILL** | 3D tilt + glare. Replace usages with a plain token `Card`. |
| `ScrollReveal3D.tsx` | **REPLACE** | rotateX + 115% masked reveal. Replace with `Reveal` (fade+rise, reduced-motion-aware). |
| `MagneticButton.tsx` | **KILL** | Magnetic-pull gimmick. Remove (or hard no-op under reduced-motion). |
| `ScrollProgress.tsx` | **REFACTOR or KILL** | Amber gradient top bar. For calm, recommend remove; if kept, 2px hairline/ink, low priority. |
| `CalModal.tsx` | **REFACTOR** | Has Esc + scroll-lock + overlay-close, but **no dialog role, no focus trap, no focus restore, no failure fallback.** Route through shared `Dialog`; add fallback link. |
| `Icons.tsx` | **KEEP & REFACTOR** | Good custom SVG library (no-emoji-friendly). Stop hardcoding `#e0883c`; default to `--ink` and accept pod-accent via `color`. |

### app/ + globals.css
| File | Disposition | Action |
|---|---|---|
| `app/globals.css` | **REFACTOR (major)** | Replace `@theme` with the §1–§3 token set (canvas/ink/amber/per-pod/spacing/radius/shadow/focus). **Delete keyframes:** `ticker`, `ticker-reverse`, `grain`, `aura-drift-1..5`, `sand-drain`, `spin-slow`, `float-up`, `glow-pulse`, `cursor-flash` (and `phone-ring` if PhoneMockup retired). **Delete utilities:** `.glow-amber`, `.nav-cta-glow`, `.btn-shine`, `.glass`, `.cursor-glow-ring`, ticker utilities, the `body::before` grain overlay, the `@media (pointer:fine){ cursor:none }` block. **Add:** `prefers-reduced-motion` block, `focus-visible` ring utility. Body bg → `--canvas`, text → `--ink`. |
| `app/page.tsx` | **REPLACE** | Recompose to the §5 homepage beats. |
| `app/layout.tsx` | **REFACTOR** | Swap `Plus_Jakarta_Sans` → `Fraunces` (or documented fallback); rewrite `metadata.title/description` from "AI Receptionists That Never Sleep" to the operations-partner positioning; per-pod route metadata is 001d. |
| `app/funnel/page.tsx` | **OUT OF SCOPE — do not copy** | Separate marketing funnel; heavy emoji + fabricated social proof. Not in the five-pod scope; preserve its route behavior (goal ledger), but **do not** reuse its emoji/fake-proof patterns. |
| Legal `app/{terms,privacy,subprocessors}` | **KEEP** | Real, must keep loading (regression gate). Re-theme to new palette only if trivially safe; otherwise leave. |

---

## 9. State matrix (hover / focus-visible / active / reduced-motion / mobile)

| Component | Hover | Focus-visible | Active/selected | Reduced-motion | Mobile |
|---|---|---|---|---|---|
| **SectorButton** | bg → pod `--accent-tint`, `translateY(-1px)`, dot brightens (120ms) | 3px `--focus` ring, hairline→accent | current page: accent border + tint fill | no translate; instant bg | ≥44px; full-width or 2-col grid; dot + label wrap safe |
| **SiteNav link** | ink→amber-deep, underline grow | ring + underline | active route underlined amber | instant | in disclosure sheet, ≥44px rows |
| **Industries menu** | opens on hover+click | fully keyboard (Arrow/Esc), focus stays in menu | — | open/close instant | tap to expand, `aria-expanded` |
| **Button (primary)** | darken fill 6%, shadow-sm→md | 3px ring | pressed: `translateY(1px)` | no transform | ≥44px, full-width option |
| **Button (secondary/ghost)** | hairline→accent, bg tint | ring | — | instant | ≥44px |
| **FAQ item** | q color→accent, chevron nudges | ring on the `<button>` | expanded: region visible, chevron rotated | chevron no-rotate; height snaps open | ≥44px tap row |
| **WorkflowStep / tab** | label→accent, connector fill (desktop) | ring; `role="tab"` roving tabindex | active tab: accent underline + panel shown | connector static; panel swaps instantly | tabs scroll or stack; panel below |
| **Dialog (Booking/Vera)** | close btn bg tint | trap: Tab cycles within; restore on close | open | fade-only; waveform static | full-screen sheet; body scroll locked |
| **VeraWidget** | scale 1.03 (skip under RM) | ring on button | listening: static "connected" | no pulse/scale; tooltip stops cycling | the ONE persistent action |
| **Card / HonestProof** | shadow-sm→md, `translateY(-1px)` | ring if interactive | — | no transform | single column |

Global: every interactive element has a visible `:focus-visible` ring (never
`outline:none` without a replacement); tap targets ≥44px; no horizontal scroll at 390px.

---

## 10. Proof screenshots (exact list — 001e verification)

Widths per owner rule "verify at full screen": **1920 + 1440 (desktop) + 390 (mobile)**.

**Pages (full-page + first-viewport):**
1. Homepage — 1920, 1440, 390
2. `/auto-repair` — 1440 + 390
3. `/hvac` — 1440 + 390
4. `/dental` — 1440 + 390
5. `/roofing` — 1440 + 390
6. `/med-spa` — 1440 + 390

**Interaction / state proofs:**
7. SectorButtons — default + hover + focus-visible (desktop)
8. Industries nav menu open — desktop dropdown + mobile disclosure
9. FAQ item expanded (semantic) — desktop
10. Booking modal open (focus trapped) + the visible **fallback** state
11. Vera demo active — normal + `prefers-reduced-motion` (static waveform)
12. Homepage under `prefers-reduced-motion: reduce` (no entrance transforms)

**Regression proofs (must still load, no theme break):**
13. `/privacy`, `/terms`, `/subprocessors` — 1440 (strip)
14. Intake wrappers `/intake`, `/auto-repair-intake`, `/dental-intake` load
15. Client portal `/client` loads; homepage Vera + `/vera-test` usable

**Direction-compliance deliverable (per frozen packet §Required Proof):**
16. A contact sheet comparing shipped screens against
    `docs/design/itp-consulting-site-direction.md`, plus a written list of every
    remaining compromise.

---

## 11. Hard constraints (carry into 001c/001d)

- **Tailwind CSS v4** via `@tailwindcss/postcss`; tokens live in `@theme` in
  `app/globals.css` (there is no `tailwind.config.js`). Add new tokens there.
- **Next.js 16 App Router**, React 19. Keep **Framer Motion** (required for transitions).
- **No new heavy dependencies.** Fonts via `next/font/google` only (Fraunces + Inter).
- **CSP is load-bearing** (`next.config.ts`): allows `self`, cal.com, and the intake
  app origin; fonts via `fonts.googleapis.com`/`gstatic.com`. `next/font` self-hosts at
  build (fine). **Do not introduce any new external host** (CDN, remote images, remote
  fonts, analytics) — it would require a CSP change and is out of scope.
- **No stock-photo humans. No fabricated dashboard screenshots.** Stylized abstract
  product/process illustration built in code/SVG is encouraged.
- **No emojis** (owner rule) — use the SVG `Icon` library. (Current offenders to fix:
  `PhoneMockup` ✓, `/funnel` emoji set, `VeraModal` ✕ glyph.)
- **Public pricing = "book a call"** for v1 (no dollar figures on pages).
- **One firm, five textures:** shared canvas/ink/type/amber/components; per-pod = one
  accent + one tint only.
- **Honesty gate:** only real, verifiable proof (see `docs/proof/credibility-inventory.md`).
  Missing proof is omitted or honestly labeled, never invented.

## 12. How this satisfies the frozen direction packet

| Direction rule | This packet |
|---|---|
| Human/operational before futuristic | Light editorial canvas, process-first second beat, real proof, code process art |
| Quiet confidence, restrained motion | §4 motion, all gimmicks killed, neutral shadows |
| Break the one-note dark brown/orange | §1 light paper + per-pod accents; amber demoted to signature |
| Avoid flip cards / glow / orbs / fake dashboards / generic AI imagery | §8 kills all of them explicitly |
| Distinct per-industry texture, one firm | §1.2 accent family + shared components |
| Mobile first-class sales surface | §9 states, ≥44px, one floating action, no 390px overflow |
| Lead with owner problem + outcome | §5.1 first viewport; §6 pod heroes from owner-language copy |
| Show the progression | §5.2 `WorkflowProgression` (five stages) |
| Only real proof; AI art as editorial only | §11 honesty gate + credibility inventory |
| Pricing → "book a call" | §11 |
