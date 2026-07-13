# Phase 001 — Build Amendments (folded into acceptance before execution)

Source: independent fresh-eyes validation, 2026-07-12 (Claude). Verdict: EXECUTE WITH
AMENDMENTS. These are binding additions to the subphase acceptance criteria. 1–6 are
gaps a builder would otherwise ship as "done"; 7–10 are required same-PR cleanups.

## CRITICAL (must pass before "done")

1. **Route-aware global chrome.** FloatingNav + FloatingCTA section links currently
   `document.querySelector('#x')` → silent no-op on every pod route. Make them resolve
   against home: off-home → `/#services`; industries → real `<Link href="/hvac">` etc.
   Acceptance: zero dead anchors, verified on a POD route (not just `/`). Keep
   `id="industries"` on the homepage section.

2. **prefers-reduced-motion is BUILD work, not a check.** globals.css has zero
   reduced-motion blocks + unguarded `scroll-behavior:smooth` + many `repeat:Infinity`
   loops. Add a global `@media (prefers-reduced-motion: reduce)` block and gate
   looping/scroll framer-motion via `useReducedMotion()`. Budget: ≤1 infinite loop per
   viewport; pod heroes entrance-only. CustomCursor must be disabled on touch.

3. **CalModal → real dialog + embed-failure fallback.** Add role="dialog",
   aria-modal, labelled title, focus trap, focus restoration. Add iframe onError/timeout
   → visible fallback with the direct cal.com link + phone/next step. (The goal artifact
   implied a fallback already existed; it did not.)

4. **One persistent floating action + one Vera entry.** Today SiteShell mounts BOTH
   FloatingCTA (bottom-right) and VoiceWidget (bottom-left) + two Vapi init paths.
   Consolidate to one floating control on mobile; one voice entry. Verify at 390px.

5. **Reposition root metadata + OG + set metadataBase.** layout.tsx title =
   "AI Receptionists That Never Sleep" and opengraph-image.tsx says "100% Calls
   answered" (absolute, unverifiable) — both fight the repositioning. Update to the
   operations-consultancy frame, drop the 100% claim, set
   `metadataBase = new URL("https://www.inthepast.ai")` so per-route canonicals resolve.

6. **Built-vs-roadmap honesty (the key strategy guardrail).** The "beyond receptionist"
   workflows (HVAC dispatch board, roofing production board, med-spa reactivation,
   owner reporting) are largely NOT built products today. claims-matrix.md must tag every
   workflow `built | in-progress | roadmap` per pod. Copy for anything not `built` reads
   as future/offer ("we build / we'll set up"), never present-possession, and is never
   shown as an existing product screenshot.

## REQUIRED SAME-PR CLEANUPS

7. **/funnel — honest decision, do NOT "preserve" as-is.** It is a LOCAL page (not a
   wrapper) with fake testimonials (`// TODO: Replace before launch`), hardcoded public
   pricing $4,950/$850 (contradicts "book a call only"), fake urgency + booking toasts.
   Decision for this phase: add `robots: noindex` to /funnel and do NOT link it from the
   repositioned nav/footer — park the full rewrite for a separate approved pass. Never
   propagate its fabricated proof into the new pages.

8. **Stale hero code — ignore, don't revive.** `components/hero/Navbar.tsx` (0 importers,
   old purple tokens) and the `#get-started` anchor in `hero/CTA.tsx:9` are dead. Do not
   copy their patterns; 001c rebuilds the hero.

9. **External-dependency regression rows.** `/intake`, `/auto-repair-intake`,
   `/dental-intake`, `/client`, `/client-portal`, `/portal`, `/ops` rewrite/iframe to
   `intake-form-sigma.vercel.app`. In local verify they load only if that origin is up →
   treat "wrapper loads" as environment-dependent, not build proof.

10. **Sector buttons (Matt's explicit ask).** Typed `SECTORS` array (icon, label, href,
    accent) in the 001d registry, rendered as small pill/icon `<Link>` buttons in three
    places: (a) homepage Industries section, REPLACING the six hover-only flip cards
    (which wrongly list Law/Medical/Real Estate); (b) route-aware nav (desktop + mobile);
    (c) footer. ≥44px touch targets, visible focus, reduced-motion-safe, keep
    `id="industries"`.
