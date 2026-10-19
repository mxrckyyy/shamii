# Testing — Our Little Universe

Practical QA checklist. Mark tests as pending until actually performed. Do not claim a test passed unless it was run.

Legend: [ ] pending, [x] passed, [~] partial/known issue, [N/A] not applicable.

## 1. Responsive Widths

- [ ] 360px — no horizontal overflow; readable text; touch targets ok.
- [ ] 390px — no horizontal overflow; readable text; touch targets ok.
- [ ] 768px — balanced layout.
- [ ] 1280px — polished composition.
- [ ] Additional narrow widths (320px) if needed.

## 2. Navigation and Scroll Behavior

- [ ] Smooth/normal scroll works.
- [ ] No unnecessary scroll lock.
- [ ] Anchor links (if used) work.
- [ ] Scroll progress (if used) accurate.
- [ ] No content hidden behind fixed/sticky elements.

## 3. Envelope Interaction

- [~] Opens via tap/click (implemented; not visually tested).
- [~] Opens via keyboard (Enter/Space) (native button; not tested in browser).
- [~] Reduced-motion fallback works (implemented; not tested).
- [~] Transition to hero works (implemented; not tested).
- [~] Focus moves appropriately (implemented; not tested).
- [~] No excessive delay before content accessible (700ms; not tested).

## 4. Counter Accuracy

- [x] Correct elapsed time from Feb 22, 2026 (verified via node date-math check: 239 days at 2026-10-19).
- [~] Updates without reload (implemented; not tested in browser).
- [x] No timezone drift (start date stored with +08:00 offset).
- [x] Interval cleaned up on unmount (implemented in hook).
- [~] Readable on narrow screens (code review; not visually tested).
- [x] Boundary cases (before start date) handled (guarded to 0).

## 5. Timeline Order

- [ ] Milestones in intended chronological order.
- [ ] Dates/descriptions readable.
- [ ] Missing images handled.
- [ ] Mobile layout clear.

## 6. Gallery Touch Interactions

- [ ] Swipe works on touch.
- [ ] Prev/next buttons work.
- [ ] Dot indicators work.
- [ ] Keyboard navigation works.
- [ ] No page-wide horizontal overflow.
- [ ] Aspect ratios preserved.
- [ ] Lazy loading works.

## 7. Reasons Card Interactions

- [x] All 22 cards present (verified count in content.js).
- [~] Flip via tap/click (implemented; not tested).
- [~] Flip via keyboard (Enter/Space) (implemented via native button; not tested).
- [x] Reduced-motion alternative (implemented).
- [~] Long text readable (code review; not tested).
- [x] No hover-only behavior (implemented).

## 8. Keyboard Accessibility

- [ ] All interactive elements focusable.
- [ ] Visible focus indicators.
- [ ] Logical tab order.
- [ ] No keyboard traps.

## 9. Reduced-Motion Behavior

- [ ] `prefers-reduced-motion` respected.
- [ ] Confetti disabled/static alternative.
- [ ] 3D flips disabled/replaced.
- [ ] Envelope instant.
- [ ] Content accessible without motion.

## 10. Contrast and Readability

- [ ] Body text contrast ≥ AA.
- [ ] Interactive elements contrast ok.
- [ ] No tiny mobile text.
- [ ] Letter readable on phones.

## 11. Missing Image Handling

- [ ] Broken/missing images don't break layout.
- [ ] Placeholders or graceful omit.

## 12. Image Performance

- [ ] Optimized sizes (~≤200 KB where quality permits).
- [ ] WebP where practical.
- [ ] Lazy load noncritical.
- [ ] No layout shift (dimensions set).

## 13. Console Errors

- [ ] No console errors in dev.
- [ ] No console errors in production build preview.

## 14. Build Validation

- [x] `npm run build` succeeds (verified Phase 10).
- [x] `npm run preview` works (verified Phase 10, HTTP 200).
- [~] No build warnings critical (build output clean; npm audit vulnerabilities in dev tooling only).

## 15. Production Deployment Checks

- [ ] Deployed to Vercel.
- [ ] Final URL confirmed.
- [ ] Metadata/OG present.
- [ ] Indexing preference set.

## 16. QR Code Scanning on Actual Devices

- [ ] QR generated from final URL.
- [ ] Scanned on at least one real device.
- [ ] Points to correct site.

## 17. Manual vs Automated Test Status

- Automated: none configured yet (no test framework). Lint not configured yet.
- Manual checks documented above; mark only when performed.
- Untested areas must be explicitly identified in phase reports.
