# UI/UX Guidelines — Our Little Universe

## 1. Design Philosophy

Create a beautiful, polished, responsive, emotionally meaningful single-page experience that feels like opening a personal digital love letter. Prioritize UI/UX and mobile usability over effects. Every visual effect must have a purpose. Avoid generic AI aesthetics, clutter, and unnecessary complexity.

## 2. Visual Direction

- Elegant, intimate, editorial, warm, modern.
- Cohesive continuous scroll-driven narrative from envelope to footer.
- Restrained decoration; purposeful motion.
- Personal but not kitschy; romantic but not cliché-heavy.

## 3. Color Palette and Semantic Roles

| Token | Hex | Semantic role |
|---|---|---|
| Cream | `#FFF9F4` | Main background, primary surface |
| Blush | `#F9E3E4` | Secondary surfaces, soft cards, hover tints |
| Rose | `#E7A0A8` | Decorative accents, selected highlights, small details. Not for long body text (contrast) |
| Plum | `#5C3A5E` | Strong accents, interactive elements, links, buttons, focus |
| Ink | `#33262F` | Main text, headings |
| Gold | `#C9A227` | Occasional details, dividers, special moments |

Rules:
- Verify contrast; do not assume accessibility.
- Rose on cream may be insufficient for body text — use Ink for body.
- Plum on cream for interactive elements must be checked.
- Use semantic token names in Tailwind theme, not raw hex in components.

## 4. Typography

- **Cormorant Garamond**: headings, expressive editorial text, hero, letter headings.
- **Inter**: body, navigation, buttons, UI, captions.
- **Caveat**: occasional handwritten accents only (e.g., small note, signature). Sparingly.

Type scale (mobile-first, scale up at md/lg):

- Display (hero): ~2.5rem mobile → ~4.5rem desktop, line-height ~1.05–1.1.
- H1: ~2rem → ~3rem, lh ~1.1.
- H2: ~1.625rem → ~2.25rem, lh ~1.15.
- H3: ~1.25rem → ~1.5rem, lh ~1.2.
- Body: ~1rem (16px min on mobile), lh ~1.6.
- Small/caption: ~0.875rem, lh ~1.5.
- Handwritten accent: ~1.125–1.5rem.

Rules:
- Minimum 16px body text on mobile (avoid iOS zoom on inputs).
- Comfortable line lengths: ~45–75 chars for body; letter maybe 55–70.
- Use font-display swap (Fontsource default) to avoid FOIT.

## 5. Type Scale (Tailwind)

Define in Tailwind config or CSS vars: `text-display`, `text-h1`, etc. Prefer centralized. Use responsive classes: `text-4xl md:text-6xl`. Keep consistent across sections.

## 6. Spacing System

Use Tailwind's default scale (4px base) with intentional choices:

- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Container horizontal padding: `px-4 sm:px-6 lg:px-8`.
- Content gap within sections: `space-y-6` to `space-y-12`.
- Card padding: `p-5 md:p-6`.
- Consistent gap in grids: `gap-4 md:gap-6`.

Avoid arbitrary one-off spacings; prefer scale values. Maintain vertical rhythm.

## 7. Layout Widths

- Container max-width: `max-w-6xl` (or 7xl) centered.
- Reading content (letter, about): `max-w-prose` / `max-w-2xl` (~65ch).
- Hero: full width within container.
- Gallery: constrained with internal carousel.

## 8. Responsive Breakpoints

Tailwind defaults:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

Mobile-first: base styles = mobile; add `md:`, `lg:` enhancements. Required test widths: 360, 390, 768, 1280.

## 9. Component Styling Rules

- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills/buttons where appropriate; `rounded-3xl` for large surfaces. Consistent.
- Shadows: subtle, `shadow-sm`/`shadow-md` sparingly; avoid heavy shadows.
- Borders: only when meaningful; prefer soft surfaces.
- Cards: blush surface on cream, subtle shadow, rounded-2xl, adequate padding.
- Avoid excessive cards; use spacing and typography for hierarchy.

## 10. Button and Interaction States

- Min touch target 44×44 CSS px (use padding or min-w/h).
- States: default, hover (desktop), active/pressed, focus-visible, disabled.
- Focus: visible outline/ring (`focus-visible:ring-2 focus-visible:ring-plum`); never remove outline without replacement.
- Hover only enhances; never required for functionality.
- Transition: `transition-colors duration-200` or motion via Framer; avoid layout thrash.

## 11. Card and Gallery Behavior

- Flip cards: clear front/back; tap to flip on touch; click/Enter/Space on keyboard; reduced-motion alternative (e.g., toggle content without 3D flip or instant).
- Gallery: embla carousel; swipe on touch; prev/next buttons + dots; keyboard arrows when focused.
- Polaroid style: white/cream card, slight rotation, shadow, caption in Caveat/Inter.

## 12. Motion Principles

- Purposeful: guide attention, convey emotion, confirm interaction.
- Restrained durations: 200–400ms for UI; 600–900ms for section reveals; envelope open ~800–1200ms.
- Easing: ease-out for entrances; ease-in-out for transitions.
- No animations that delay access to content (envelope opens promptly).
- Stagger reveals subtly; avoid long cascades.
- Respect `prefers-reduced-motion`: disable non-essential motion; provide instant/static alternatives.

## 13. Reduced-Motion Behavior

- Detect via CSS `@media (prefers-reduced-motion: reduce)` and/or Framer Motion's `useReducedMotion`.
- Disable: parallax, confetti (or static alternative), 3D flips (use fade/crossfade or instant), auto-scroll, ambient hearts.
- Keep content accessible and readable without motion.
- Envelope: instant reveal/open without animation.

## 14. Accessibility and Contrast Standards

- Semantic HTML (header, main, section, nav, footer, article).
- Heading order (h1 once in hero, then h2 sections).
- Alt text for images; decorative images `alt=""`.
- Form controls (if any) labeled.
- Color contrast: target WCAG AA (4.5:1 body, 3:1 large). Verify plum/rose on cream.
- Keyboard operability for all interactions.
- Visible focus indicators.
- No color-only meaning.
- `aria-live` for counter? Optional polite region; avoid spamming. Consider `aria-live="polite"` on counter value with reasonable update (every minute) or none.

## 15. Mobile-First Layout Rules

- Base = mobile; enhance at md/lg.
- No horizontal overflow (`overflow-x: hidden` on html/body as safety, but fix root causes).
- Stack layouts vertically on mobile; grid at md.
- Avoid fixed elements covering content; account for safe areas (`env(safe-area-inset-*)`).
- Test at 360/390/768/1280.

## 16. Touch Target Requirements

- Interactive elements ≥ 44×44 CSS px.
- Adequate spacing between targets (≥ 8px).
- Carousel arrows/dots sized appropriately.

## 17. Image Treatment

- Optimize (WebP where practical), ~≤200 KB when quality permits.
- Lazy-load noncritical; eager for hero/envelope if needed.
- Preserve aspect ratios (aspect-ratio or fixed dimensions).
- Provide alt text; captions.
- No fake/stock photos; placeholders clearly marked.

## 18. Visual Consistency Rules

- Use design tokens consistently.
- Reuse primitives (Container, Button, SectionHeading).
- Consistent section padding and heading styles.
- Consistent motion conventions (durations/easings).
- One accent color per section emphasis; avoid rainbow.

## 19. Anti-Patterns to Avoid

- Generic AI landing-page look.
- Excessive gradients/glassmorphism.
- Oversized empty sections.
- Too many floating decorations/hearts.
- Excessive heart animations.
- Stock photography.
- Tiny mobile text.
- Inconsistent spacing.
- Unnecessary borders/shadows/cards.
- Animations delaying content.
- Desktop-first compressed mobile.
- Overly complex interactions.
- Hover-only functionality.
- Confetti on every render.
- Autoplay music.

## 19.5 Romantic Redesign Notes

- Primary greeting: "Happy Monthsary, Mommy!".
- Ambient floating hearts (CSS-based, lightweight, disabled under reduced motion).
- Hero uses staggered reveal, gold divider, handwritten accent.
- Gallery uses polaroid-style cards with subtle rotation and cream frames.
- Letter uses paper-style card with repeating subtle lines and large quotation mark accent.
- Envelope includes inner paper peek and handwritten corner note.
- Removed 22 Reasons and Timeline sections.

## 20. UI Review Checklist:

For each phase/section:
- [ ] Mobile (360, 390) no overflow, readable, touch targets ok.
- [ ] Tablet (768) layout balanced.
- [ ] Desktop (1280) composition polished.
- [ ] Contrast verified.
- [ ] Keyboard operable + focus visible.
- [ ] Reduced motion works.
- [ ] Images optimized + lazy where appropriate.
- [ ] No console errors.
- [ ] Content from data file.
- [ ] Docs updated.
