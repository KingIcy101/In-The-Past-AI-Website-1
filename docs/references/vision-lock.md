---
vision_lock: "itp-consulting-site-five-pods"
created_at: "2026-07-12"
canonical_repo: "/Users/mattbender/projects/In-The-Past-AI-Website-1"
canonical_branch: "codex/zta-835-itp-five-pod-plan"
mode: "build"
status: "frozen"
frozen_by: "Matt"
frozen_at: "2026-07-12"
---

# Vision Lock: ITP Consulting Site And Five Market Pods

## Mode
Matt asked to have Claude start and run the website project as a goal until it is done. This authorizes a build on an isolated branch, not a production publish.

## 1. Building (Matt's words)
> "Improve the website, make it feel like a consulting firm rather than only an AI receptionist company, and build the industry-specific sectors around the five markets we should actually target, including the broader systems and internal tools we can build for those companies."

## 2. Matt-test (binding definition of done)
1. Matt opens the homepage and immediately understands that ITP starts with calls but builds the operating workflows and internal tools around them.
2. Matt can send an owner in Auto Repair, HVAC, Dental, Roofing, or Med Spa a page that feels native to that business rather than a generic template.
3. Each page shows a believable path from missed-call capture to follow-up, booking, reporting, and one or more industry-specific internal workflows without invented proof.
4. The real site runs cleanly on desktop and mobile, every primary CTA works, and no page contains clipped text, dead-end cards, misleading claims, or fake credibility.
5. Matt can see the real founders/operators and real proof assets that exist, with honest placeholders or omissions where proof is not ready.

## 3. Design target
- Mode: no-reference, with research-led art direction.
- Frozen packet: `docs/design/itp-consulting-site-direction.md`.
- Proof required: fresh desktop and mobile screenshots for the homepage and all five industry pages.

## 4. Out of scope / anti-goals
- Not building: a generic page factory for every possible industry, a production publish, fake case studies, fake customer logos, fake metrics, or a full replacement for vertical CRMs/PMS systems.
- Do NOT build it like: another dark, card-heavy, one-color AI SaaS landing page whose only message is "AI answers your phone."
- Parked ideas live in: `docs/PARKED.md`.

## 5. Reality snapshot
- The current site is a single long page with reusable sections: proof in `app/page.tsx` and `components/sections/`.
- The current industry surface is six flip cards with no routes: proof in `components/sections/Industries.tsx`.
- The service story is still voice/chatbot-led: proof in `components/sections/WhatWeBuild.tsx`.
- This branch is stacked on open PR #1 and includes its route, intake-wrapper, and Randy CTA commits through `1d4b602`. New five-pod commits belong only to this branch and must not be pushed back into PR #1.
- Canonical execution worktree + branch: `/Users/mattbender/.codex/worktrees/zta-835-itp-five-pod-plan` @ `codex/zta-835-itp-five-pod-plan`.
  This branch includes the current PR #1 head (`1d4b602`) so route, CTA, and intake-wrapper proof is not tested against stale `main`.
- Read-only source context: `/Users/mattbender/projects/intake-form` and `/Users/mattbender/.openclaw-backup`.
- Leave untouched: Vercel domain aliases, production settings, credentials, and unrelated intake/portal code.

---
Frozen from Matt's direct 2026-07-12 build instruction. New scope requires a dated amendment approved by Matt.

### Amendments
- None.
