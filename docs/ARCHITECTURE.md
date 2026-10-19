# Architecture — Our Little Universe

## 1. Overview

A simple, maintainable single-page React (Vite) application. No routing, no backend, no database. One scroll-driven page composed of section components. Personal content is centralized in a data module. State is local/component-level; only a small amount of shared state (envelope opened, reduced motion, optional music) is needed.

Prefer simplicity. Do not introduce unnecessary abstractions, global state libraries, or routing.

## 2. Application Structure

```
src/
├── main.jsx              # React root; mounts App
├── App.jsx               # Page composition: gates envelope, renders sections in order
├── index.css             # Tailwind directives + global base styles + design tokens (CSS vars)
├── data/content.js       # All personal/editable content (single source of truth)
├── hooks/useElapsed.js   # Reusable elapsed-time hook
├── lib/heartConfetti.js  # Confetti helper (canvas-confetti wrapper)
├── components/
│   ├── ui/               # Reusable presentational primitives
│   ├── layout/           # Page-level layout (shell, scroll progress)
│   ├── effects/          # Visual effects (reveal, ambient hearts, music toggle)
│   └── sections/         # One component per website section
└── assets/               # Imported assets (if any)
```

Public assets (images, icons, heart.svg) live under `public/` and are referenced by URL path.

## 3. Component Hierarchy

```
App
├── EnvelopeGate (gate; on open -> reveal rest)
├── PageShell
│   ├── ScrollProgress (optional)
│   ├── Hero
│   ├── Counter (uses useElapsed)
│   ├── AboutUs
│   ├── Timeline
│   ├── Gallery (embla carousel)
│   ├── Reasons (flip cards)
│   ├── Letter
│   ├── Finale (confetti)
│   └── Footer
└── effects: Reveal (wraps sections), AmbientHearts (optional), MusicToggle (optional)
```

Sections are composed in `App.jsx` in narrative order. Each section is self-contained and reads its content from `src/data/content.js`.

## 4. Responsibilities

- **main.jsx**: create root, render `<App />` inside StrictMode, import global CSS.
- **App.jsx**: top-level state (envelope opened). Conditionally renders hero/content after envelope opens; manages scroll restoration/focus. Composes sections.
- **PageShell.jsx**: shared container/max-width, background, footer wrapper, optional scroll progress.
- **EnvelopeGate.jsx**: opening interaction; emits `onOpen`; reduced-motion fallback; accessibility.
- **Hero.jsx**: anniversary message and focal typography.
- **Counter.jsx**: displays elapsed time using `useElapsed`.
- **AboutUs.jsx**: storytelling from content.
- **Timeline.jsx**: renders milestones from content.
- **Gallery.jsx**: carousel + polaroid cards.
- **Reasons.jsx**: grid of flip cards.
- **Letter.jsx**: letter typography.
- **Finale.jsx**: closing message + confetti trigger.
- **Footer.jsx**: closing + optional Easter egg.
- **ui/Button, Container, SectionHeading**: reusable primitives.
- **effects/Reveal.jsx**: scroll-triggered reveal wrapper (respects reduced motion).
- **effects/AmbientHearts.jsx**: optional subtle decoration (use sparingly).
- **effects/MusicToggle.jsx**: optional, only if user-supplied audio; never autoplay.
- **hooks/useElapsed.js**: date math + interval.
- **lib/heartConfetti.js**: canvas-confetti wrapper with reduced-motion guard and intentional trigger.

## 5. Data vs Presentation Separation

- All personal/editable content lives in `src/data/content.js` as plain JS objects/arrays (hero, dates, about, timeline, gallery, reasons, letter, finale, footer).
- Components import content and render it; they contain no personal copy.
- Placeholders are explicit strings (e.g., `"[PLACEHOLDER: ...]"`) and documented.
- Timeline/gallery/reasons data shapes are defined in `ARCHITECTURE`/`SYSTEM_DESIGN` and kept consistent.

## 6. Custom Hooks

- **useElapsed(startDate)**: returns `{ days, hours, minutes, seconds }` (or similar) computed from a fixed start date. Uses `setInterval` with cleanup on unmount. Handles timezone consistently by computing from UTC/epoch or a normalized Date. Updates without reload.

## 7. Shared UI Components

- `Container`: consistent max-width + responsive horizontal padding.
- `Button`: accessible button with variants, focus styles, min 44px touch target.
- `SectionHeading`: consistent heading styling (Cormorant) + optional eyebrow.

Keep primitives small. Add only when reuse is real.

## 8. Animation Utilities

- Framer Motion for component animations (reveals, envelope, flips).
- `Reveal` wrapper standardizes scroll-triggered fade/slide with reduced-motion fallback.
- Motion conventions (durations/easings) defined in UI/UX guidelines and applied consistently.
- canvas-confetti only in `lib/heartConfetti.js`, triggered intentionally (e.g., on Finale in view or button), never on every render.
- Optional Lenis: only if it improves UX without harming accessibility/mobile/perf; wrap at app root behind a feature flag or conditional.

## 9. Image and Asset Organization

- Personal photos: `public/images/` (optimized, preferably WebP, ~≤200 KB when quality permits).
- Icons: `public/icons/`.
- `public/heart.svg` for favicon/brand mark.
- Imported small assets may live in `src/assets/`.
- Gallery uses lazy loading for noncritical images; `loading="lazy"`, explicit width/height to prevent layout shift.

## 10. State Management

- Local component state (`useState`) and props.
- Top-level: envelope opened boolean in `App.jsx`.
- No global state library (Redux/Zustand/etc.) — unnecessary.
- Optional: a small context only if prop drilling becomes painful; document if added.

## 11. Date and Counter Logic

- Start date: `new Date('2026-02-22T00:00:00')`? To avoid timezone bugs, define an explicit ISO timestamp with offset or compute in UTC. Recommended: store as `2026-02-22T00:00:00+08:00` (Philippines) if local meaning is intended, OR treat as UTC midnight. Document the chosen convention in content.js and `useElapsed`.
- The hook computes elapsed ms from start to now, derives days/hours/minutes/seconds, and ticks every second (or every minute for perf). Clean up interval on unmount.
- Boundary handling: floor values; no negative outputs before start (guard).

## 12. Routing Strategy

None needed. Single page. If anchor navigation is desired, use in-page anchor links with smooth scroll (respect reduced motion). No router dependency.

## 13. Dependency Responsibilities

| Dependency | Responsibility |
|---|---|
| Vite | Dev server, build, HMR |
| React 18 | UI |
| Tailwind CSS | Utility styling, design tokens |
| Framer Motion | Animations |
| canvas-confetti | Finale confetti |
| embla-carousel-react | Gallery carousel |
| Fontsource (3 fonts) | Self-hosted fonts |
| qrcode | QR generation script (Node) |
| (optional) Lenis | Smooth scroll |

No backend/database. No TypeScript.

## 14. Error-Handling Approach

- Keep it simple: avoid throwing in render. Guard optional content (missing images, missing fields) with conditional rendering and placeholders.
- Image `onError` fallback to placeholder or hide gracefully.
- No error boundaries required initially; add a simple top-level ErrorBoundary only if needed (document if added).
- Console errors must be resolved before deployment.

## 15. Performance Considerations

- Lazy-load noncritical images.
- Optimize images (WebP, ~≤200 KB).
- Avoid heavy effects on mobile; gate expensive animations.
- Clean up intervals/listeners.
- Code-split only if bundle grows large (not initially).
- Avoid re-render storms (confetti not per render; interval updates scoped to Counter).

## 16. Future Changes

- Personalize content by editing `src/data/content.js` only.
- Add real photos to `public/images/` and update paths/captions.
- Add reasons (exactly 22) in data file.
- To change design tokens, update Tailwind config / CSS vars and UI/UX guidelines.
- To add a section, create component in `sections/`, compose in `App.jsx`, add content to data file, update docs.
- Any structural change must update `ARCHITECTURE.md` and `SYSTEM_DESIGN.md`.
