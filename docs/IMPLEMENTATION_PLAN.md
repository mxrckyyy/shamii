# Implementation Plan — Our Little Universe

This document is the full phased development plan. Each phase must meet its acceptance criteria before the next phase begins. Do not auto-advance phases; report and wait for approval.

Current status: **Phase 0 in progress.** No phases completed yet.

---

## Phase 0 — Repository Inspection and Documentation Foundation

**Status:** Completed (documentation foundation delivered; awaiting approval to begin Phase 1)

**Objective:** Establish a reliable project baseline and create the complete documentation system.

**Scope:** Inspect repo, preserve uncommitted work, create all docs, define design tokens and mobile-first rules, detailed checklist with acceptance criteria, update README, create AGENTS.md. No feature implementation.

**Files expected to create/modify:**
- `AGENTS.md`
- `README.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/ARCHITECTURE.md`
- `docs/UI_UX_GUIDELINES.md`
- `docs/SYSTEM_DESIGN.md`
- `docs/CHANGELOG.md`
- `docs/TESTING.md`
- `docs/DEPLOYMENT.md`
- Directory skeleton under `docs/`, `public/`, `src/`, `scripts/` (`.gitkeep` placeholders)

**Dependencies:** None.

**Design/responsive requirements:** Document mobile-first rules and target widths (360/390/768/1280).

**Accessibility requirements:** Document baseline (keyboard, focus, reduced motion, contrast, touch targets).

**Validation/testing:** Verify docs exist and contain meaningful project-specific info; no code built to test.

**Acceptance criteria:**
- Documentation files exist with meaningful project-specific information.
- Complete plan documented.
- Architecture and design system clear.
- Current project state accurately recorded.
- Future sessions can identify current phase and next task.
- No existing user work discarded.

**Risks/dependencies:** None (greenfield).

**Completion status:** In progress.

---

## Phase 1 — Foundation, Design System, and Visual Prototype

**Status:** Completed (prototype delivered; awaiting approval to begin Phase 2)

**Objective:** Establish technical foundation and validate visual direction before full build.

**Scope:** Configure Vite, React, Tailwind, required deps; global design tokens, fonts, typography, containers, spacing, responsive rules; reusable foundational UI components; consistent animation strategy; small visual prototype of envelope + hero; test at 360/390/768/1280; confirm cohesive/personal/polished; keep personal copy in content file where practical.

**Files expected to create/modify:**
- `package.json`, `index.html`, `vite.config.js`, `tailwind.config.js` (or CSS-based config), `postcss.config.js`
- `src/main.jsx`, `src/App.jsx`, `src/index.css`
- `src/data/content.js` (initial skeleton)
- `src/components/ui/{Button,Container,SectionHeading}.jsx`
- `src/components/sections/{EnvelopeGate,Hero}.jsx` (prototype)
- `src/components/layout/PageShell.jsx` (maybe)
- Fontsource imports

**Dependencies:** Vite, React 18, Tailwind, Framer Motion, Fontsource packages. Possibly embla later (Phase 5).

**Design/responsive:** Mobile-first; prototype tested at all four widths.

**Accessibility:** Keyboard envelope open, reduced motion, focus.

**Validation/testing:** `npm run dev` starts; fonts/styles load; no critical mobile layout issues in prototype; document results.

**Acceptance criteria:**
- Project starts successfully.
- Fonts and styles load correctly.
- Design tokens reusable.
- Envelope + hero demonstrate intended visual quality.
- No known critical mobile layout issues in prototype.
- Documentation reflects implementation.

**Risks:** Font loading FOUT; Tailwind config with Vite. Mitigation: preload Fontsource, test.

**Completion status:** Not started.

---

## Phase 2 — Envelope Gate and Hero Experience

**Status:** Completed (awaiting approval to begin Phase 3)

**Objective:** Build the opening experience.

**Scope:** Complete envelope interaction; transition into hero; touch/mouse/keyboard; reduced motion; tune typography/spacing/layering/responsive; verify scrolling and focus; ensure animation never blocks site.

**Files:** `src/components/sections/EnvelopeGate.jsx`, `Hero.jsx`, possibly `src/components/effects/Reveal.jsx`, `src/components/layout/PageShell.jsx`, `src/data/content.js`.

**Dependencies:** Phase 1 complete; Framer Motion.

**Design/responsive:** Mobile-first envelope; no scroll lock abuse.

**Accessibility:** Keyboard open, focus management, reduced motion fallback, no hover-only.

**Validation:** Manual interaction tests at target widths; reduced-motion check.

**Acceptance criteria:**
- Opening experience works reliably.
- Keyboard users can open envelope.
- Mobile layouts polished.
- Reduced-motion respected.
- No unnecessary scroll lock or inaccessible interaction.

**Completion status:** Not started.

---

## Phase 3 — Relationship Counter and About Us

**Status:** Completed (awaiting approval to begin Phase 4)

**Objective:** Add relationship counter and introductory storytelling.

**Scope:** Implement reusable elapsed-time hook (`src/hooks/useElapsed.js`); Feb 22, 2026 start; accurate date math; responsive counter; About Us from supplied content; keep About Us and letter distinct; purposeful reveals without hiding content if animation fails.

**Files:** `src/hooks/useElapsed.js`, `src/components/sections/Counter.jsx`, `AboutUs.jsx`, `src/data/content.js`.

**Dependencies:** Phase 2 complete.

**Design/responsive:** Counter readable on narrow screens.

**Accessibility:** Live region? Readable; no misleading values.

**Validation:** Validate counter with known dates/boundaries; ensure interval cleanup on unmount (code review + React StrictMode check).

**Acceptance criteria:**
- Counter logic validated with known dates/boundary cases.
- No unnecessary timers after unmount.
- Text readable on narrow screens.
- Section aligns with design system.

**Completion status:** Not started.

---

## Phase 4 — Our Story Timeline

**Status:** Completed (awaiting approval to begin Phase 5)

**Objective:** Present milestones as polished visual narrative.

**Scope:** Reusable timeline item; content in data file; ~4–6 milestones; mobile + desktop layouts; reveal animations; handle missing images/incomplete content; no fabricated milestones.

**Files:** `src/components/sections/Timeline.jsx`, possibly `src/components/ui/` timeline item, `src/data/content.js`.

**Dependencies:** Phase 3.

**Design/responsive:** Mobile timeline clear/comfortable.

**Accessibility:** Semantic list, readable.

**Validation:** Chronological order check; missing image handling.

**Acceptance criteria:**
- Milestones in intended chronological order.
- Mobile timeline layout clear and comfortable.
- Images don't distort layout.
- Missing optional content doesn't break section.

**Completion status:** Not started.

---

## Phase 5 — Responsive Photo Gallery

**Status:** Completed (awaiting approval to begin Phase 6)

**Objective:** Elegant personal gallery, especially good on phones.

**Scope:** Build with embla-carousel-react where appropriate; polaroid-inspired; touch-friendly mobile; balanced desktop; optimize images + lazy load; captions, alt text, accessible controls; prevent page-wide horizontal overflow; placeholders until real photos.

**Files:** `src/components/sections/Gallery.jsx`, `src/data/content.js`, assets under `public/images/`.

**Dependencies:** Phase 4; embla-carousel-react.

**Design/responsive:** No horizontal overflow; touch nav.

**Accessibility:** Carousel controls accessible; alt text; keyboard nav.

**Validation:** Touch navigation; aspect ratios; performance.

**Acceptance criteria:**
- Touch navigation works.
- Carousel controls accessible.
- Images maintain aspect ratios.
- No horizontal page overflow.
- Gallery performance reasonable on mobile.
- Attractive at all required widths.

**Completion status:** Not started.

---

## Phase 6 — The 22 Reasons

**Status:** Completed (awaiting approval to begin Phase 7)

**Objective:** Create 22 meaningful interactive reasons.

**Scope:** Reasons in data file; reusable accessible flip-card; responsive grid; touch/keyboard/pointer; reduced-motion alternative; prevent accidental triggering/unclear states; consistent design.

**Files:** `src/components/sections/Reasons.jsx`, possibly `src/components/ui/FlipCard.jsx`, `src/data/content.js`.

**Dependencies:** Phase 5.

**Design/responsive:** Grid; no cramped mobile text.

**Accessibility:** No hover-only; keyboard toggle; reduced motion.

**Validation:** Exactly 22 entries; all operable without hover; long text readable; mobile interaction.

**Acceptance criteria:**
- Exactly 22 reason entries supported.
- All cards operable without hover.
- Long text readable.
- Card interactions work on mobile.
- No invented memories presented as factual.

**Completion status:** Not started.

---

## Phase 7 — Personal Letter

**Status:** Completed (awaiting approval to begin Phase 8)

**Objective:** Present letter with excellent readability and emotional impact.

**Scope:** Letter in data file; visually distinct section; careful typography/line length; responsive; restrained reveal; preserve meaning/sentiments; not duplicate of About Us.

**Files:** `src/components/sections/Letter.jsx`, `src/data/content.js`.

**Dependencies:** Phase 6.

**Design/responsive:** Comfortable phone reading.

**Accessibility:** Readable; semantic.

**Validation:** Readability at widths; meaning preserved.

**Acceptance criteria:**
- Letter reads naturally.
- Text comfortable on phones.
- Visually distinct without feeling disconnected.
- Not simply duplicate of About Us.

**Completion status:** Not started.

---

## Phase 8 — Finale, Footer, and Optional Interactions

**Status:** Completed (awaiting approval to begin Phase 9)

**Objective:** Complete storytelling experience.

**Scope:** Finale; intentional heart-confetti (canvas-confetti) not per render; reduced motion; mobile-performant; static alternative; footer; optional Easter eggs only after core stable; optional music toggle only if user-supplied audio source exists, never autoplay; review pacing/consistency.

**Files:** `src/components/sections/Finale.jsx`, `Footer.jsx`, `src/lib/heartConfetti.js`, possibly `src/components/effects/MusicToggle.jsx`, `AmbientHearts.jsx`.

**Dependencies:** Phase 7.

**Design/responsive:** Not overwhelming on mobile.

**Accessibility:** Reduced motion; accessible Yes/No if used.

**Validation:** Confetti trigger once; no perf issues.

**Acceptance criteria:**
- Satisfying ending.
- Finale works without animations.
- Effects don't overwhelm mobile.
- Optional features don't interfere with main experience.

**Completion status:** Not started.

---

## Phase 9 — Full UI/UX and Responsive Audit

**Status:** Completed (awaiting approval to begin Phase 10)

**Objective:** Senior-level review of complete site.

**Scope:** Inspect every section; review hierarchy, typography, content widths, vertical rhythm, transitions, contrast, responsive spacing, overflow, image scaling, interactive states, touch targets, keyboard, focus, reduced motion, loading/animation, empty/missing content, mobile perf, console errors, unnecessary deps, inconsistent components, clutter/repetition. Test at 360/390/768/1280. Fix problems, prioritize: broken functionality → mobile layout/overflow → accessibility → readability/contrast → visual consistency → animation/decorative polish.

**Files:** Any; docs updates.

**Dependencies:** Phase 8.

**Acceptance criteria:**
- No known critical responsive defects.
- No known critical interaction defects.
- Accessibility/motion addressed.
- Findings/fixes documented.
- Untested areas explicitly identified.

**Completion status:** Not started.

---

## Phase 10 — Performance, Build, and Final Technical QA

**Status:** Completed (awaiting approval to begin Phase 11)

**Objective:** Verify technical readiness for deployment.

**Scope:** Production build; resolve errors; run available lint/tests if configured; check console when browser access available; review image sizes/loading; animation perf; missing assets/links; verify counter; confirm 22 reasons; review mobile/desktop; update testing docs accurately. Do not claim tests passed unless run.

**Files:** Any; docs.

**Dependencies:** Phase 9.

**Acceptance criteria:**
- Production build succeeds.
- Available automated checks pass or documented limitations.
- No known critical issue blocks deployment.
- Testing report distinguishes verified vs pending manual.

**Completion status:** Not started.

---

## Phase 11 — Metadata, Deployment, and QR Code

**Status:** Partially completed (preparation done; deployment + QR generation pending user action)

**Objective:** Publish and prepare for sharing.

**Scope:** Metadata + OG; OG image from real assets; Vercel deploy; document final URL; indexing preference; generate QR (SVG + high-res PNG) only after final URL confirmed; plum-on-cream, error correction H; test QR on devices where possible; update deployment docs.

**QR requirements:** Final URL (not guessed); adequate contrast + quiet zone; readable at printed size; verify points to correct site; don't claim physical scanning tested unless it was.

**Privacy note:** `noindex,nofollow` is indexing preference, not auth/privacy. Don't describe public site as private/password-protected without real access control.

**Files:** `index.html` (meta), `scripts/make-qr.mjs`, deployment config, docs.

**Dependencies:** Phase 10; Vercel account (user action).

**Acceptance criteria:**
- Deployment instructions complete.
- Actual deployment status documented.
- Final URL confirmed before QR generation.
- QR output verified.
- Remaining manual tasks listed.

**Completion status:** Not started.

---

## Cross-Cutting Rules

- Work one phase at a time; report and wait for approval.
- Update docs after each phase (PROJECT_CONTEXT, IMPLEMENTATION_PLAN, CHANGELOG, TESTING, and architecture/UI/system docs when decisions change).
- Preserve uncommitted work; inspect before editing.
- JS/JSX only; no TS.
- Mobile-first always.
- Content centralized.
- No invented memories.
- No claimed tests unless run.

## Phase Report Format (Required at end of each phase)

A. Phase name and status.
B. Summary of implementation.
C. Files created/modified.
D. UI/UX and mobile responsiveness improvements.
E. Validation and tests actually performed.
F. Issues found and fixes applied.
G. Remaining limitations or manual tasks.
H. Documentation updated.
I. Acceptance criteria status.
J. Recommended next phase.

Distinguish: Completed / Partially completed / Not implemented / Not tested / Blocked.
