# Project Context — Our Little Universe

> **This is the primary source of truth. Read this file first after any context reset.**

Last updated: Phase 0 (documentation foundation). Implementation status: **No application code yet.** Only documentation and directory skeleton exist.

---

## 1. Project Identity

- **Project name:** Our Little Universe
- **Type:** Personal, single-page, scroll-driven romantic anniversary website
- **Recipient:** Bel
- **Creator / author of content:** Marc
- **Occasion:** 8th monthsary
- **Anniversary date:** October 22, 2026
- **Relationship start date:** February 22, 2026
- **Budget:** ₱0 (zero). Free services and assets only. Optional printing cost for a handmade anniversary card is the only permitted spend.
- **Delivery channel:** Shared via a QR code printed on a handmade anniversary card.

## 2. Purpose and Emotional Intent

The site is an interactive, personalized digital love letter. It should feel intimate, elegant, warm, playful, memorable, and thoughtfully crafted — never like a generic template, an AI-generated landing page, or a flashy demo.

It celebrates eight months together and acknowledges Bel's hard work (studying through the day, working at night) and Marc's appreciation and continued care. The core emotional beats:

- Recognizing Bel's effort and dedication.
- Appreciation for her hard work.
- A promise of continued care and commitment.
- The sentiment that even though they see each other at school every day, Marc still misses her every day.

The experience should be authentic and personal rather than generic.

## 3. Required Technology Stack

- **Build tool:** Vite
- **Framework:** React 18
- **Language:** JavaScript and JSX only (no TypeScript)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Confetti:** canvas-confetti
- **Carousel:** embla-carousel-react
- **Fonts:** Fontsource packages for Cormorant Garamond, Inter, and Caveat
- **QR generation:** `qrcode` (Node script)
- **Deployment:** Vercel free tier

Optional (only if it improves UX without harming accessibility/mobile/performance):

- **Lenis** for smooth scrolling

### Hard restrictions

- No TypeScript.
- No Next.js.
- No backend or database unless explicitly approved.
- No unnecessary libraries.
- No autoplaying background music.
- No paid services or paid assets.
- Prefer CSS and existing libraries over new dependencies.
- JavaScript/JSX consistently throughout.

Before installing dependencies, inspect the existing `package.json` (currently none exists — project is greenfield).

## 4. Design Direction (Summary)

- Elegant, intimate, editorial, warm, modern.
- Cohesive, continuous, scroll-driven single-page experience.
- Avoid: generic AI aesthetics, excessive gradients/glassmorphism, oversized empty sections, too many floating decorations, excessive hearts, stock photography, tiny mobile text, inconsistent spacing, unnecessary borders/shadows/cards, animations that delay content, desktop-first layouts compressed for mobile, overly complex interactions.

Every visual effect must have a purpose.

### Color tokens

| Token | Hex | Role |
|---|---|---|
| Cream | `#FFF9F4` | Main background |
| Blush | `#F9E3E4` | Secondary surfaces |
| Rose | `#E7A0A8` | Decorative accents, selected highlights (not long body text) |
| Plum | `#5C3A5E` | Strong accents, interactive elements |
| Ink | `#33262F` | Main text |
| Gold | `#C9A227` | Occasional details, dividers, special moments |

Accessible contrast must be verified; palette is not automatically accessible.

### Typography

- Cormorant Garamond — elegant headings, expressive editorial text.
- Inter — body text, navigation, buttons, UI.
- Caveat — occasional handwritten accents only.

Deliberate type scale, responsive font sizes, comfortable line heights, sensible text widths. No excessive decorative fonts.

### Layout & spacing

Consistent spacing system and reusable layout primitives: shared container widths, section spacing, content widths, responsive padding, border radii, motion conventions. Coherent visual rhythm from envelope to footer. CSS custom properties / centralized Tailwind theme where appropriate.

## 5. Mobile-First Responsiveness (Non-Negotiable)

Mobile is a first-class requirement. Design/implement mobile before tablets/desktop.

Required testing widths: **360px, 390px, 768px, 1280px** (+ others when needed).

Mobile requirements (summary — full list in `docs/UI_UX_GUIDELINES.md`):

- No horizontal page overflow.
- No clipped text/buttons/images/nav.
- No content hidden behind fixed/sticky elements.
- No overlapping sections.
- No unreadably small typography.
- No hover-only functionality.
- Touch targets generally ≥ 44×44 CSS px.
- Cards/images resize naturally; text wraps.
- Gallery works with touch; flip cards work with touch + keyboard.
- Responsive spacing/typography; account for mobile viewport height and safe-area insets.
- Avoid laggy animations and oversized images on phones.
- Envelope works with touch + keyboard.
- Site usable if animation disabled.
- No forced landscape; no unnecessary scroll lock.
- Respect reduced-motion.

Use mobile-first Tailwind classes; add tablet/desktop enhancements intentionally.

## 6. Required Website Sections (Single Scroll Experience)

1. **Envelope Gate** — elegant opening envelope, warm/minimal, clear instruction, smooth purposeful opening animation, touch + keyboard, reduced-motion fallback, no lengthy delay. Establishes emotional tone.
2. **Hero** — "Happy 8 Months, Bel". Expressive typography, subtle decorations, clear focal point. Personal and memorable on mobile + desktop.
3. **Live Relationship Counter** — elapsed time from Feb 22, 2026 via reusable React hook. Accurate, no reload, consistent time boundaries, no timezone bugs, interval cleanup on unmount, readable on narrow screens, no misleading values.
4. **About Us** — warm declarative storytelling about Bel and Marc. Bel studies through the day and works at night; Marc recognizes her effort and dedication. Distinct from the letter. No invented history; placeholders for missing info in centralized content file.
5. **Our Story Timeline** — ~4–6 meaningful milestones, may include pre-Feb-22-2026 memories. Chronological order, attractive markers/hierarchy, responsive layouts, natural scrolling, readable dates/descriptions, graceful missing images/dates. No fabricated milestones. Data separate from presentation.
6. **Gallery** — personal photos, polaroid-inspired. Desktop: ~3 visible cards with controlled spacing/rotation/layering. Mobile: touch-friendly carousel/horizontal gallery, no page-wide horizontal overflow, accessible controls/indicators. Provided photos only, descriptive captions, WebP where practical, lazy-load noncritical, ~≤200 KB per optimized image when quality permits, preserve proportions, alt text, no fake photos/stock. Placeholders until real images supplied.
7. **22 Reasons** — 22 interactive cards (reasons Marc appreciates Bel). Consistent beautiful card design, smooth restrained flip, touch/mouse/keyboard, reduced-motion alternative, clear front/back, no hover-only, responsive grid, no cramped mobile text. Stored in centralized data file. Personalize with honest/specific/natural content incl. everyday details and inside jokes where supplied. Do not fabricate intimate memories.
8. **The Letter** — intimate letter to Bel. Sincere, warm, personal, emotionally meaningful. Starting point: supplied writing. Preserve: recognition of Bel's hard work/efforts, appreciation for dedication, promise of continued care/commitment, "even when we see each other at school every day, I still miss you every day." Not a repeat of About Us. Room to breathe via typography, line length, spacing, restrained animation. Don't rewrite personal sentiments into generic clichés without reason.
9. **Finale** — memorable closing, clear anniversary message/promise. Optional heart-shaped confetti via canvas-confetti (intentional trigger, not every render), reduced-motion support, performant on mobile, graceful static alternative, not overwhelming. If optional Yes/No interaction used, both choices accessible and respectful.
10. **Footer + Easter Egg** — subtle footer closing naturally. Optional hidden interaction after core complete; discoverable enough to enjoy but not required to understand site.

## 7. Content Architecture

All editable personal content lives in **`src/data/content.js`**. Objects/arrays for:

- Hero copy
- Anniversary & relationship dates
- About Us
- Timeline milestones
- Gallery images & captions
- 22 reasons
- The letter
- Finale copy
- Footer text

No personal content scattered in JSX. Explicit placeholders for content needing input. No invented photo paths; placeholders clearly marked as not real. Keep editing simple (no layout code changes needed).

## 8. Documentation System (Required)

`docs/` directory with:

- `PROJECT_CONTEXT.md` (this file) — primary source of truth
- `IMPLEMENTATION_PLAN.md` — full phased plan
- `ARCHITECTURE.md` — software architecture
- `UI_UX_GUIDELINES.md` — design system & UI/UX standards
- `SYSTEM_DESIGN.md` — how the complete site works
- `CHANGELOG.md` — chronological changes
- `TESTING.md` — QA checklist
- `DEPLOYMENT.md` — deployment & QR

Root-level `AGENTS.md` (OpenCode persistent instructions) and `README.md`.

## 9. Project Structure (Intended)

```
our-little-universe/
├── AGENTS.md
├── README.md
├── package.json
├── index.html
├── vite.config.js
├── docs/
├── public/
│   ├── images/
│   ├── icons/
│   └── heart.svg
├── scripts/
│   └── make-qr.mjs
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/content.js
    ├── hooks/useElapsed.js
    ├── lib/heartConfetti.js
    ├── components/
    │   ├── ui/{Button,Container,SectionHeading}.jsx
    │   ├── layout/{PageShell,ScrollProgress}.jsx
    │   ├── effects/{Reveal,AmbientHearts,MusicToggle}.jsx
    │   └── sections/{EnvelopeGate,Hero,Counter,AboutUs,Timeline,Gallery,Reasons,Letter,Finale,Footer}.jsx
    └── assets/
```

Suggested, not mandatory. Only create components with clear responsibility. If structure changes, update architecture docs.

## 10. Current Implementation Status

- **Phase 0 (completed):** Documentation foundation and directory skeleton.
- **Phase 1 (completed):** Vite + React + Tailwind configured; design tokens, fonts, foundational UI components, envelope + hero prototype.
- **Phase 2 (completed):** Envelope interaction refined, focus management, hero composition tuned.
- **Phase 3 (completed):** Reusable `useElapsed` hook, responsive counter, About Us, Reveal effect.
- **Phase 4 (completed):** Timeline with placeholders and responsive layouts.
- **Phase 5 (completed):** Gallery with embla carousel and placeholders.
- **Phase 6 (completed):** 22 flip cards with placeholders.
- **Phase 7 (completed):** Letter section with draft letter.
- **Phase 8 (completed):** Finale, Footer, Easter egg, optional MusicToggle.
- **Phase 9 (completed):** UI/UX and responsive audit with fixes.
- **Phase 10 (completed):** Production build, preview, counter validation, 22 reasons verified.
- **Phase 11 (completed):** Metadata + Open Graph configured; OG image SVG created; QR generation script used to generate `public/qr/qr.svg` and `public/qr/qr.png` for final URL https://shamii-woad.vercel.app/. Deployment performed by user (final URL provided).
- **Completed phases:** Phase 0, Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 6, Phase 7, Phase 8, Phase 9, Phase 10. Phase 11 partially completed.
- **Current phase:** Romantic redesign completed in code; deployment/QR preserved (final URL https://shamii-woad.vercel.app/).
- **Known issues:** Content placeholders remain; no real-device visual verification; confetti untested on real devices.

## 17. Romantic Redesign (current)

- Primary greeting changed to "Happy Monthsary, Mommy!" (hero, envelope title, finale, footer).
- Removed "22 Reasons" section and "Our Story" timeline (components, data, styles).
- Gallery now uses 42 real photos from `public/images/gallery/` (01.jpg … 42.jpg).
- Added ambient floating hearts, romantic gradients, paper-style letter, polaroid gallery.
- Personal photo placeholder path: `public/images/gallery/01.jpg` (first gallery image) or any entry in `src/data/content.js` gallery array.
- Deployment and QR preserved; final URL unchanged.
- **Known issues:** No real browser/device visual verification. Content placeholders remain. Confetti untested on real devices. 9 dev-tooling audit vulnerabilities remain.
- **Known issues:** No real browser/device visual verification performed (no automation available). All responsive checks are code-review based. Content placeholders remain. Confetti untested on real devices.
- **Known issues:** Confetti not tested on real devices. Visual verification pending. Easter egg very subtle.
- **Known issues:** Letter is a draft incorporating required sentiments; needs personalization. Visual verification pending.
- **Known issues:** Reason text is placeholder only. Visual verification pending.
- **Known issues:** Gallery photos are placeholders. Visual/responsive verification pending.
- **Known issues:** Milestone content is placeholder only (no real milestones supplied). Visual/responsive verification pending.
- **Known issues:** Counter logic not yet validated against known dates/boundaries beyond code review. Visual/responsive verification pending.
- **Known issues:** Visual/responsive verification still pending (no browser automation available). Build succeeds.
- **Known issues:** No visual/browser layout inspection was performed (no browser automation available); responsive checks relied on code review. Font bundles include many subsets (browser downloads only needed via unicode-range), acceptable. 9 npm audit vulnerabilities are in dev/build tooling (esbuild/vite ecosystem) and do not affect production runtime; not addressed.
- **Decisions that must not be forgotten:**
  - JS/JSX only; no TS.
  - No Next.js, no backend.
  - Mobile-first is non-negotiable.
  - Personal content centralized in `src/data/content.js`.
  - No invented memories; placeholders clearly marked.
  - No autoplay music.
  - `noindex,nofollow` is an indexing preference, not access control.
  - Do not claim tests/visual inspection/deployment occurred unless verified.
  - Work phase by phase; do not auto-advance.

## 11. Next Concrete Actions

1. Finish creating all documentation files (Phase 0).
2. Verify documentation files exist and are meaningful.
3. Report Phase 0 completion; **stop and wait for approval** before Phase 1.
4. Phase 1 (after approval): scaffold Vite + React + Tailwind, design tokens, fonts, foundational UI, envelope + hero prototype, responsive checks at 360/390/768/1280.

## 12. Responsive QA Targets

360px, 390px, 768px, 1280px (additional widths as needed). Every UI phase must inspect these.

## 13. Accessibility Baseline

- Semantic HTML, keyboard operability for all interactions (envelope, flip cards, carousel controls).
- Visible focus indicators.
- Reduced-motion support (`prefers-reduced-motion`).
- Sufficient contrast (verify, don't assume).
- Alt text for images; captions.
- No hover-only functionality.
- Touch targets ≥ 44×44 CSS px.
- Usable with animation disabled.

## 14. Performance Expectations

- No unnecessary large images; target ~≤200 KB per optimized image when quality permits; WebP preferred.
- Lazy-load noncritical images.
- Avoid expensive visual effects and laggy animations on low-powered phones.
- No repeated confetti triggers from re-renders.
- Clean up intervals on unmount.
- Production build must succeed before deployment.

## 15. Deployment & QR Plan

- Deploy to Vercel free tier.
- Metadata + Open Graph; prepare OG image from real project assets.
- Configure indexing preference (`noindex,nofollow` acceptable as preference, not privacy).
- Generate QR (SVG + high-res PNG) only after final URL confirmed; plum-on-cream, error correction level H, adequate quiet zone, readable at printed size.
- Test QR on actual devices where possible; document actual status.
- Final delivery report.

## 16. Explicit Exclusions

- No TypeScript, no Next.js, no backend/DB, no paid services/assets, no autoplay music, no fabricated personal memories, no stock photos substituted for missing personal photos, no fake photo paths claimed as real.
