# Our Little Universe

An interactive, romantic, personalized anniversary website for **Bel and Marc**, celebrating their 8th monthsary on **October 22, 2026** (relationship started **February 22, 2026**).

Built as a personal gift and shared via a QR code printed on a handmade anniversary card. Budget: ₱0 (free services only).

## Tech Stack

Vite · React 18 · JavaScript/JSX · Tailwind CSS · Framer Motion · canvas-confetti · embla-carousel-react · Fontsource (Cormorant Garamond, Inter, Caveat) · qrcode · Vercel (free).

## Status

Currently in **Phase 0** (documentation foundation). No application code yet. See `docs/IMPLEMENTATION_PLAN.md` for the phased roadmap and `docs/PROJECT_CONTEXT.md` for the full project context.

## Local Setup (to be finalized in Phase 1)

```bash
npm install
npm run dev
```

## Documentation

- `docs/PROJECT_CONTEXT.md` — primary source of truth.
- `docs/IMPLEMENTATION_PLAN.md` — phased plan with acceptance criteria.
- `docs/ARCHITECTURE.md` — software architecture.
- `docs/UI_UX_GUIDELINES.md` — design system and UI/UX standards.
- `docs/SYSTEM_DESIGN.md` — how the site works.
- `docs/CHANGELOG.md` — chronological changes.
- `docs/TESTING.md` — QA checklist.
- `docs/DEPLOYMENT.md` — deployment and QR code.
- `AGENTS.md` — persistent instructions for OpenCode.

## Notes

- Mobile-first, accessible, reduced-motion friendly.
- All personal content lives in `src/data/content.js` (to be created).
- `noindex,nofollow` is an indexing preference, not access control.
