# System Design — Our Little Universe

## 1. User Journey

1. Visitor opens QR/link on phone (likely) → lands on Envelope Gate.
2. Reads invitation; taps/clicks/presses Enter to open envelope.
3. Smooth transition reveals Hero ("Happy 8 Months, Bel").
4. Scrolls through Counter (live elapsed time), About Us, Timeline, Gallery, 22 Reasons, Letter, Finale, Footer.
5. Optional interactions: flip reasons, swipe gallery, trigger confetti, Easter egg.
6. Reaches footer; experience concludes.

The journey is linear and scroll-driven; no navigation menu required. Anchor links optional.

## 2. Section-by-Section Behavior

### Envelope Gate
- Full-screen (min-h-screen) centered envelope illustration/composition.
- Clear instruction text ("Tap to open" / "Open your letter").
- On open: animation (lid opens, letter rises) then fades/scales into Hero; set `opened` state in App.
- Reduced motion: instant transition.
- Keyboard: Enter/Space on focusable envelope; focus moves to Hero/main after open.
- No scroll lock beyond brief animation; ensure user can proceed.

### Hero
- Displays "Happy 8 Months, Bel" with expressive typography.
- Subtle decorations (maybe small hearts/gold accent). Clear focal point.
- Responsive scaling.

### Counter
- Uses `useElapsed(START_DATE)`.
- Displays days/hours/minutes/seconds (or days + time). Readable on narrow screens (stack or grid).
- Updates every second (or minute); cleanup on unmount.

### About Us
- Two-column or stacked layout: Bel & Marc. Warm declarative copy from data.
- Distinct from letter.

### Timeline
- Vertical timeline; markers (gold/plum dots) with dates + titles + descriptions.
- Mobile: single column with marker on left; desktop: alternating or centered.
- Missing images: placeholder or omit image gracefully.

### Gallery
- embla carousel; polaroid cards with slight rotation.
- Mobile: one card visible, swipe; desktop: ~3 visible with controlled spacing/rotation/layering.
- Captions, alt text, lazy load, controls + dots.

### 22 Reasons
- Responsive grid (1 col mobile, 2 md, 3 lg).
- Flip cards; tap/click/keyboard toggle.
- Reduced-motion: instant swap or fade without 3D.
- Each card has front (number/prompt) and back (reason text).

### Letter
- Centered reading column (max-w-prose), Cormorant/Inter mix, generous line-height.
- Restrained reveal; maybe subtle paper texture (CSS) but not heavy.

### Finale
- Closing message/promise.
- Confetti trigger intentional (e.g., when Finale enters view once, or on button). Reduced motion: skip confetti, show static hearts.
- Optional Yes/No: both accessible; respectful; if "No" chosen, still kind response.

### Footer
- Subtle closing line, maybe date/credit.
- Easter egg: hidden interaction (e.g., click a small heart) revealing a small message; not required to understand site.

## 3. Component Interactions

- `App` holds `opened` state; passes `onOpen` to EnvelopeGate; conditionally renders main content.
- Sections import content from `src/data/content.js`.
- `Counter` calls `useElapsed`.
- `Gallery` initializes embla with refs.
- `Reasons` manages per-card flipped state (local) or a set of flipped ids.
- `Finale` triggers `heartConfetti()` once via IntersectionObserver or button, guarded by reduced motion and a "fired" flag.
- `Reveal` wraps sections and animates on scroll into view.

## 4. Relationship Counter Behavior

- Start date defined in `content.js` (dates.relationshipStart).
- `useElapsed` computes difference now - start; derives days/hours/minutes/seconds.
- Ticks every 1000ms; clears on unmount.
- Guards negative (if before start, show 0 or "soon").
- Timezone: use a fixed instant (ISO with offset) to avoid drift. Document convention.

## 5. Timeline Data Flow

- `content.timeline` = array of `{ id, date, title, description, image? }`.
- `Timeline` maps to `TimelineItem` components; sorts by date if needed (data should be chronological; component may sort defensively).
- Missing fields handled gracefully.

## 6. Gallery & Carousel Behavior

- `content.gallery` = array of `{ src, alt, caption }`.
- embla configured with `loop`, `align: 'center'` or 'start', dragFree on mobile.
- Prev/next buttons + dot indicators; keyboard navigation.
- Lazy images; aspect ratio fixed to prevent shift.
- No page-wide horizontal overflow: container `overflow-hidden`.

## 7. Reasons Card Interaction

- `content.reasons` = array of 22 `{ id, front?, back }` (front maybe number).
- Flip via CSS 3D transform + Framer; toggle on click/tap/Enter/Space.
- State: `flipped` set; clicking again flips back.
- Reduced motion: no 3D; crossfade or instant.
- Long text: scrollable? Prefer card sizing that fits; if long, allow wrap and card grows.

## 8. Letter Presentation

- `content.letter` = string or array of paragraphs.
- Render paragraphs with consistent spacing; max width ~65ch; larger font (1.125–1.25rem) for readability.
- Restrained reveal (fade up once).

## 9. Finale & Confetti Behavior

- `heartConfetti()` uses canvas-confetti with heart shapes, plum/rose/gold colors.
- Trigger once per session/view; guard with `fired` ref and reduced motion.
- Mobile: fewer particles, shorter duration.
- Static alternative: a few static heart SVGs.

## 10. Content Configuration

- Single file `src/data/content.js` exporting a default object or named exports.
- Placeholders use clear markers: `"[PLACEHOLDER: ...]"`.
- Dates as ISO strings.

## 11. Animation Lifecycle

- Envelope open triggers state change; Framer AnimatePresence handles transition.
- Reveal components use IntersectionObserver (via Framer whileInView) with `once: true`.
- Confetti fires once.
- Intervals cleaned up on unmount.

## 12. Responsive Behavior

- Mobile-first Tailwind; base mobile, enhance md/lg.
- Gallery carousel on all sizes but layout differs.
- Timeline stacks on mobile.
- Grid columns adjust.

## 13. Accessibility Behavior

- Keyboard operability; focus management after envelope open.
- Reduced motion honored.
- Alt text; semantic landmarks.
- Touch targets ≥44px.

## 14. Asset Loading

- Images in `public/images/`; referenced by `/images/...`.
- Lazy load noncritical; eager for above-the-fold envelope/hero if needed.
- Fontsource self-hosted fonts with display swap.

## 15. Deployment & QR Workflow

- Build: `npm run build` → `dist/`.
- Deploy to Vercel (free). Document final URL.
- Metadata/OG in `index.html`.
- `scripts/make-qr.mjs` generates SVG + PNG (plum on cream, ECC H) from final URL.
- Test QR on devices; document status.

## 16. Important Edge Cases

- Before Feb 22, 2026: counter shows 0 (guard).
- Missing images: placeholder/omit.
- Missing content fields: conditional render.
- Reduced motion: all effects disabled gracefully.
- Animation disabled/blocked: content still accessible.
- Slow networks: lazy images, no blocking.
- Very narrow screens (320px): ensure no overflow (test if needed).
- iOS Safari viewport height: use `min-h-[100svh]` or dvh units.
- Touch vs mouse: no hover-only.
- Confetti repeated render: guard with ref.
- Interval leaks: cleanup.

## 17. Privacy Note

Site is public by URL/QR. `noindex,nofollow` is an indexing preference, not access control. Do not describe as private/password-protected without real auth.
