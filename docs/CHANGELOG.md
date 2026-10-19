# Changelog — Our Little Universe

Chronological record of meaningful project changes. Dates recorded only when known. Do not fabricate dates, tests, or accomplishments.

## Phase 0 — Repository Inspection and Documentation Foundation

- **Date:** Not recorded (session date unknown; repository inspection performed in this session).
- **Main changes:**
  - Inspected repository: directory was empty; no Git repository, no `package.json`, no existing files.
  - Created complete documentation foundation: `docs/PROJECT_CONTEXT.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/ARCHITECTURE.md`, `docs/UI_UX_GUIDELINES.md`, `docs/SYSTEM_DESIGN.md`, `docs/CHANGELOG.md`, `docs/TESTING.md`, `docs/DEPLOYMENT.md`.
  - Created root `AGENTS.md` and `README.md`.
  - Created directory skeleton with `.gitkeep` placeholders under `public/`, `src/`, `scripts/`.
- **Files affected:** All files listed above (new).
- **Validation performed:** File existence verified via creation; no code/build to validate.
- **Outstanding issues:** No application code yet; no dependencies installed; no Git repository initialized (optional). Awaiting approval to begin Phase 1.

## Phase 1 — Foundation, Design System, and Visual Prototype

- **Date:** Not recorded (this session).
- **Main changes:**
  - Scaffolded Vite + React 18 + Tailwind CSS (v3) project; added PostCSS/Autoprefixer.
  - Configured design tokens (colors, fonts, type scale, shadows, radii) in `tailwind.config.js`.
  - Added global styles with Tailwind directives, reduced-motion handling, focus styles.
  - Imported Fontsource packages for Cormorant Garamond, Inter, Caveat in `src/main.jsx`.
  - Created foundational UI components: `Container`, `Button`, `SectionHeading`.
  - Created `src/data/content.js` with initial hero/dates/envelope content.
  - Built envelope gate prototype (`EnvelopeGate`) with touch/keyboard open and reduced-motion fallback.
  - Built hero prototype (`Hero`) with responsive typography.
  - Composed prototype in `App.jsx` with AnimatePresence transition.
  - Added `.gitignore`.
  - Verified production build succeeds (`npm run build`) and dev server serves (`npm run dev`).
- **Files affected:** package.json, vite.config.js, tailwind.config.js, postcss.config.js, index.html, src/main.jsx, src/App.jsx, src/index.css, src/data/content.js, src/components/ui/*, src/components/sections/EnvelopeGate.jsx, src/components/sections/Hero.jsx, .gitignore, docs/*.
- **Validation performed:** `npm install` succeeded; `npm run build` succeeded; dev server started and root HTML fetched successfully. No browser visual inspection performed (no automation available).
- **Outstanding issues:** Responsive layout not visually verified at target widths; to be checked in Phase 2/audit. Audit vulnerabilities remain (dev tooling).

## Phase 2 — Envelope Gate and Hero Experience

- **Date:** Not recorded (this session).
- **Main changes:**
  - Reduced envelope open delay from 900ms to 700ms (instant under reduced motion).
  - Added focus management: after opening, scroll resets to top and focus moves to main container.
  - Refined hero composition: gradient blush wash, handwritten line, responsive display type, gold divider with animated scale-in, improved spacing.
  - Preserved touch (button), keyboard (native button), and reduced-motion behavior.
- **Files affected:** `src/components/sections/EnvelopeGate.jsx`, `src/components/sections/Hero.jsx`, `src/App.jsx`, docs.
- **Validation performed:** `npm run build` succeeded. No visual/browser inspection performed.
- **Outstanding issues:** Responsive/visual verification pending manual check.

## Phase 3 — Relationship Counter and About Us

- **Date:** Not recorded (this session).
- **Main changes:**
  - Added `src/hooks/useElapsed.js` (elapsed days/hours/minutes/seconds, 1s interval, cleanup, guards negative).
  - Added `Counter` section with responsive 2x2/4-col grid and tabular numerals.
  - Added `AboutUs` section with two cards (Bel, Marc) and closing line from centralized content.
  - Added `Reveal` effect component (reduced-motion fallback renders plain).
  - Extended `src/data/content.js` with `about` content derived from supplied details (no invented private memories).
  - Composed Counter and AboutUs in `App.jsx`.
- **Files affected:** src/hooks/useElapsed.js, src/components/sections/Counter.jsx, src/components/sections/AboutUs.jsx, src/components/effects/Reveal.jsx, src/data/content.js, src/App.jsx, docs.
- **Validation performed:** `npm run build` succeeded. Counter logic reviewed; not yet validated with known dates/boundaries. No visual inspection.
- **Outstanding issues:** Counter accuracy validation and responsive visual verification pending.

## Phase 4 — Our Story Timeline

- **Date:** Not recorded (this session).
- **Main changes:**
  - Added `Timeline` section and reusable `TimelineItem` (in `src/components/ui/`).
  - Mobile: single-column with left marker and connecting line.
  - Desktop (md+): alternating left/right content around a central line.
  - Added 4 placeholder milestones in `src/data/content.js`, all clearly marked `[PLACEHOLDER: ...]`.
  - Reveal animations per item; missing images handled (image only renders if provided).
  - Empty state for no milestones.
- **Files affected:** src/components/sections/Timeline.jsx, src/components/ui/TimelineItem.jsx, src/data/content.js, src/App.jsx, docs.
- **Validation performed:** `npm run build` succeeded. No fabricated milestones. No visual inspection.
- **Outstanding issues:** Real milestone content pending from user. Responsive visual verification pending.

## Phase 5 — Responsive Photo Gallery

- **Date:** Not recorded (this session).
- **Main changes:**
  - Added `Gallery` section using `embla-carousel-react` (loop, centered alignment).
  - Polaroid-inspired cards with per-slide rotation, caption in handwriting font.
  - Touch swipe, prev/next buttons, dot indicators, keyboard-accessible controls.
  - Lazy-loaded images with fixed aspect ratio; placeholder SVG asset created.
  - 5 placeholder gallery entries (clearly marked) in `content.js`.
  - Overflow contained via `overflow-hidden` on carousel viewport.
- **Files affected:** src/components/sections/Gallery.jsx, src/data/content.js, public/images/placeholder.svg, src/App.jsx, docs.
- **Validation performed:** `npm run build` succeeded. No visual/touch inspection performed.
- **Outstanding issues:** Real photos pending. Responsive/touch verification pending.

## Phase 6 — The 22 Reasons

- **Date:** Not recorded (this session).
- **Main changes:**
  - Added `FlipCard` component with 3D flip (touch/click/keyboard), reduced-motion instant alternative.
  - Added `Reasons` section with responsive grid (1/2/3 columns).
  - Added 22 placeholder reasons in `content.js` (clearly marked).
  - No hover-only behavior; aria-pressed for state.
- **Files affected:** src/components/ui/FlipCard.jsx, src/components/sections/Reasons.jsx, src/data/content.js, src/App.jsx, docs.
- **Validation performed:** `npm run build` succeeded. No visual/interaction testing performed.
- **Outstanding issues:** Reason content pending from user. Interaction verification pending.

## Phase 7 — Personal Letter

- **Date:** Not recorded (this session).
- **Main changes:**
  - Added `Letter` section with paper-style card, max-w-prose reading column, comfortable font size/line-height.
  - Added draft letter to `content.js` incorporating required sentiments (hard work, dedication, promise of care, missing her daily at school).
  - Restrained single reveal; greeting/signature styled distinctly.
- **Files affected:** src/components/sections/Letter.jsx, src/data/content.js, src/App.jsx, docs.
- **Validation performed:** `npm run build` succeeded. No visual/readability verification performed.
- **Outstanding issues:** Letter is a draft requiring personalization with Marc's own words. Readability verification pending.

## Phase 8 — Finale, Footer, and Optional Interactions

- **Date:** Not recorded (this session).
- **Main changes:**
  - Added `Finale` section with closing message, intentional heart confetti (one-time on view via IntersectionObserver + manual button), reduced-motion skip with static hearts.
  - Added `src/lib/heartConfetti.js` (canvas-confetti wrapper, heart shape via shapeFromText, mobile particle reduction).
  - Added `Footer` with closing lines and hidden heart Easter egg revealing a short note.
  - Added optional `MusicToggle` (inactive unless `content.audioSrc` is set; never autoplays).
  - Composed Finale, Footer, MusicToggle in `App.jsx`.
- **Files affected:** src/components/sections/Finale.jsx, src/components/sections/Footer.jsx, src/components/effects/MusicToggle.jsx, src/lib/heartConfetti.js, src/App.jsx, docs.
- **Validation performed:** `npm run build` succeeded. Confetti not triggered/tested. No visual inspection.
- **Outstanding issues:** Confetti performance on real mobile untested. Visual verification pending.

## Phase 9 — Full UI/UX and Responsive Audit

- **Date:** Not recorded (this session).
- **Main changes:**
  - Enlarged touch targets for gallery dot controls and footer Easter egg button (min 44px).
  - Fixed timeline semantics by rendering `motion.li` directly (was wrapped in div).
  - Added `overflow-x: hidden` safety on html/body.
  - Code-reviewed all sections for hierarchy, spacing, overflow, touch targets, reduced-motion, and accessibility.
  - No visual/browser verification performed (no automation available); findings documented.
- **Files affected:** src/components/sections/Gallery.jsx, src/components/sections/Footer.jsx, src/components/ui/TimelineItem.jsx, src/index.css, docs.
- **Validation performed:** `npm run build` succeeded. Responsive checks by code review only (360/390/768/1280).
- **Outstanding issues:** Visual verification on real devices still pending. Content placeholders remain.

## Phase 10 — Performance, Build, and Final Technical QA

- **Date:** Not recorded (this session).
- **Main changes:**
  - Re-ran production build (success).
  - Verified production preview serves (HTTP 200).
  - Validated counter date math via node script (elapsed 239 days at 2026-10-19; negative-date guard returns 0).
  - Verified 22 reason entries in content.js.
  - Reviewed placeholder image size (577 bytes).
  - No lint/test framework configured (documented as limitation).
- **Files affected:** docs/*.
- **Validation performed:** `npm run build`, `npm run preview`, node date-math check, file-size check.
- **Outstanding issues:** No browser/device visual verification. Content placeholders remain. Confetti untested.

## Phase 11 — Metadata, Deployment, and QR Code (Partial)

- **Date:** Not recorded (this session).
- **Main changes:**
  - Updated `index.html` with title, description, robots (noindex,nofollow), Open Graph, and Twitter card metadata.
  - Created `public/og-image.svg` (1200x630) as OG image source.
  - Created `scripts/make-qr.mjs` (qrcode, ECC H, plum-on-cream, 1024px PNG + SVG) requiring a confirmed final URL.
  - Updated `docs/DEPLOYMENT.md` remains the deployment reference; README updated earlier.
- **Files affected:** index.html, public/og-image.svg, scripts/make-qr.mjs, docs/*.
- **Validation performed:** `npm run build` succeeded (index.html 1.41 kB). QR script syntax checked (`node --check` passed). No QR generated (final URL not confirmed). No deployment performed.
- **Outstanding issues:** Vercel deployment pending user action; final URL pending; QR generation pending final URL; real-device QR scan pending.

## Phase 11 — Metadata, Deployment, and QR Code (Final)

- **Date:** Not recorded (this session).
- **Main changes:**
  - Final URL confirmed: https://shamii-woad.vercel.app/
  - Generated QR code: `public/qr/qr.svg`, `public/qr/qr.png` (plum on cream, ECC H, 1024px).
  - Updated deployment docs with final URL and QR status.
- **Files affected:** public/qr/qr.svg, public/qr/qr.png, docs/DEPLOYMENT.md, docs/PROJECT_CONTEXT.md, docs/IMPLEMENTATION_PLAN.md, docs/CHANGELOG.md.
- **Validation performed:** QR script ran successfully; output files exist (PNG 7835 bytes, SVG 2095 bytes). Real-device scan not performed.
- **Outstanding issues:** Real-device QR scan pending; content placeholders remain; visual verification pending.

## (Future phases will be appended here.)
