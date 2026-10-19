# AGENTS.md — OpenCode Persistent Instructions (Our Little Universe)

Read this file at the start of every session and after any context reset.

## Project

Personal romantic anniversary website "Our Little Universe" for Bel & Marc (8th monthsary, Oct 22, 2026; relationship started Feb 22, 2026). Budget ₱0, free services only, shared via QR code on a handmade card.

## Mandatory First Steps After Context Reset

1. Read `AGENTS.md` (this file).
2. Read `docs/PROJECT_CONTEXT.md` (primary source of truth).
3. Read `docs/IMPLEMENTATION_PLAN.md`.
4. Read relevant sections of `docs/ARCHITECTURE.md`, `docs/UI_UX_GUIDELINES.md`, `docs/SYSTEM_DESIGN.md`.
5. Inspect Git status and current files.
6. Determine last completed phase.
7. Identify next unfinished task.
8. Continue from existing implementation; do not recreate completed work.

## Core Rules

- Inspect before editing.
- Preserve uncommitted work.
- Never overwrite or delete user work without clear reason.
- Use JavaScript and JSX only. No TypeScript.
- Prioritize UI/UX and mobile responsiveness over effects.
- Keep personal content centralized in `src/data/content.js`.
- Do not invent personal memories or claim placeholders are real.
- Do not claim tests, deployment, visual inspection, or QR scanning occurred unless verified.
- Keep documentation aligned with actual code.
- Work phase by phase. Do not auto-advance after a phase report.
- If blocked, explain exact blocker and needed input/action.
- If a design choice is uncertain, choose a reasonable implementation respecting this brief and document it.
- Ask only for essential personal info that cannot be represented by a placeholder.
- Do not spend time on optional features while core functionality or responsive defects remain.
- Use senior-level judgment; do not implement every idea mechanically.

## Tech Stack (Do Not Deviate Without Documented Reason)

Vite, React 18, JS/JSX, Tailwind CSS, Framer Motion, canvas-confetti, embla-carousel-react, Fontsource (Cormorant Garamond, Inter, Caveat), qrcode, Vercel. Optional Lenis only if beneficial. No TS, no Next.js, no backend/DB, no paid services, no autoplay music.

## Mobile-First (Non-Negotiable)

Test at 360px, 390px, 768px, 1280px. No horizontal overflow, no clipped content, no hover-only functionality, touch targets ≥44×44, reduced-motion support, no unnecessary scroll lock.

## Documentation Maintenance

After each phase, update:
- `docs/PROJECT_CONTEXT.md` (status, completed phases, current phase, known issues, next actions)
- `docs/IMPLEMENTATION_PLAN.md` (phase status)
- `docs/CHANGELOG.md` (phase entry)
- `docs/TESTING.md` if testing status changes
- Architecture/UI/UX/System docs when decisions change

Record known issues and unfinished tasks. Identify exact next step. Do not rely on conversation history alone.

## Phase Discipline

- Complete one phase at a time.
- Do not start later phases until current phase meets acceptance criteria.
- At end of each phase, provide the required phase report and stop for approval.
- Distinguish: Completed / Partially completed / Not implemented / Not tested / Blocked.

## Content Rules

- All personal content in `src/data/content.js`.
- Use explicit placeholders for missing info: `"[PLACEHOLDER: ...]"`.
- Never invent photo paths or claim placeholders are real memories.

## Privacy Note

`noindex,nofollow` is an indexing preference, not access control. Never describe the public site as private/password-protected without real auth.

## Reporting

Report actual work performed and remaining limitations. Never fabricate dates, tests, or accomplishments.
