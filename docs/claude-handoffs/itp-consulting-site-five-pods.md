# Claude/Fable Handoff: ITP Consulting Site And Five Market Pods

## Outcome

Build the strongest honest version of `www.inthepast.ai` as a vertical AI operations consultancy: homepage plus Auto Repair, HVAC, Dental, Roofing, and Med Spa pages. The phone agent is the wedge; the larger promise is follow-up, booking, workflow automation, reporting, and custom internal tools.

## Start Here

1. `docs/references/vision-lock.md`
2. `docs/planning/phase-001-itp-consulting-site-five-pods/research-brief.md`
3. `docs/planning/phase-001-itp-consulting-site-five-pods/deep-sweep-findings.md`
4. `docs/planning/phase-001-itp-consulting-site-five-pods/plan.md`
5. `docs/planning/goals/phase-001__itp-consulting-site-five-pods.md`

## Repos

- Primary execution worktree: `<website-worktree>`
- Canonical repo: this repository
- Read-only source context: `<intake-form-repo>`
- Supplemental read-only ops context: `<ops-hub-repo>`

The intake repo contains pod, operator, portal, and dental research. Treat it as source context only. Do not write back to it unless Matt separately approves a dedicated branch/PR.

## Current Truth

- Linear `ZTA-770` is the website repositioning umbrella.
- Linear `ZTA-835` is the implementation task.
- The current public site is one long page with six dead-end flip cards.
- This branch already includes website PR #1 head `1d4b602`. Keep the implementation PR stacked until PR #1 merges, then rebase/retarget without duplicating its changes.
- First-wave pods are Auto Repair, HVAC, Dental, Roofing, and Med Spa. Restaurants are parked.
- Public pricing defaults to a discovery CTA for v1.

## Direction

Use your own judgment. Inspect the real site and source material, choose one strong design direction, and build the best end-to-end result that satisfies the vision. Do not preserve weak existing patterns merely because they already exist, but keep the change maintainable and consistent with the stack.

## Boundaries

- Do not publish to production or alter domain aliases.
- Do not invent customers, logos, testimonials, metrics, founder history, podcasts, integrations, or compliance status.
- Do not edit either repo passed through `--add-dir`; both context repos are read-only.
- Do not expand to additional verticals before the five-page definition of done is met.
- Stop for destructive changes, missing access, unresolved critical/high findings, or any customer-facing claim that cannot be verified.

## Launch Prompt

```text
Read docs/claude-handoffs/itp-consulting-site-five-pods.md and execute docs/planning/goals/phase-001__itp-consulting-site-five-pods.md. Use your judgment and continue until every gate passes or a documented stop condition is reached.
```

## Exact Claude Start

Claude Code 2.1.195 supports the `fable` alias, but the local CLI must report an active login first.

```bash
cd <website-worktree>
claude auth status --text
claude -p --model fable --effort high --permission-mode auto \
  --add-dir <intake-form-repo> \
  --add-dir <ops-hub-repo> \
  --name "ZTA-835 ITP Five Pod Website" \
  "Read docs/claude-handoffs/itp-consulting-site-five-pods.md and execute docs/planning/goals/phase-001__itp-consulting-site-five-pods.md. Use your own judgment and continue until every gate passes or a documented stop condition is reached. Do not publish to production, alter domain aliases, or edit either --add-dir context repo."
```

If `claude auth status --text` reports `Not logged in`, Matt must run `claude auth login` once before the build can start. Do not work around the account login with copied tokens or committed credentials.
