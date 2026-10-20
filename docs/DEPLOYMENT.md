# Deployment — Our Little Universe

## 1. Required Environment and Dependencies

- Node.js (LTS) and npm.
- Dependencies installed via `npm install` after `package.json` is created (Phase 1).
- No environment variables required (no backend). If any are added later, document here and in Vercel.

## 2. Local Development Commands

(To be finalized in Phase 1; expected:)
- `npm install`
- `npm run dev` — start Vite dev server.
- `npm run build` — production build to `dist/`.
- `npm run preview` — preview production build locally.

## 3. Production Build Command

- `npm run build` (Vite). Output: `dist/`.

## 4. Vercel Deployment Process

- Import repository into Vercel (free tier) or use Vercel CLI.
- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- No environment variables needed.
- Document final public URL here after deployment.

## 5. Project URL Selection

- Choose a meaningful, stable URL (e.g., `our-little-universe.vercel.app` or custom). Final URL must be confirmed before QR generation.

## 6. Metadata and Open Graph Configuration

- Set `<title>`, `<meta name="description">`, OG tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) in `index.html`.
- Create OG image from real project assets (not stock). Place in `public/` (e.g., `public/og-image.jpg`).
- Add favicon (`public/heart.svg` or similar).

## 7. Search-Engine Indexing Preferences

- Recommended for a personal gift site: `<meta name="robots" content="noindex,nofollow">` as an indexing preference.
- **Important:** `noindex,nofollow` is NOT access control. It does not make a public website private or password-protected. Anyone with the URL/QR can view it. Do not describe the site as private unless real access control exists.

## 8. QR Code Generation and Verification

- Generate only after final URL is confirmed.
- Script: `scripts/make-qr.mjs` using `qrcode` package.
- Output: SVG and high-resolution PNG.
- Style: deep rose/burgundy (`#7A2E4D`) on warm cream (`#FFF9F4`), centered white rounded-rectangle label reading `MiiMii` in dark burgundy, error correction level H, adequate quiet zone.
- Verify readability at intended printed size (handmade card).
- Test scanning on actual devices where possible; document actual status.

## 9. Device Testing

- Test on real phones (iOS Safari, Android Chrome) when possible.
- Verify envelope, counter, gallery swipe, flip cards, confetti performance.

## 9.5 Current Deployment Status (Phase 11)

- Code prepared for Vercel (Vite build, `dist/` output).
- Metadata and Open Graph configured.
- OG image: `public/og-image.svg` (convert to PNG 1200x630 if a raster OG image is preferred).
- QR script ready: `scripts/make-qr.mjs` (requires confirmed final URL).
- **Deployed.** Final URL: https://shamii-woad.vercel.app/
- **QR generated.** Outputs: `public/qr/qr.svg`, `public/qr/qr.png` (deep rose on warm cream with centered `MiiMii` label, ECC H, 1024px).
- QR scanning on a real device has **not** been performed (user to verify before printing).

## 10. Final Delivery Checklist:

- [ ] Production build succeeds.
- [ ] Deployed; final URL documented.
- [ ] Metadata/OG configured.
- [ ] QR generated and verified (if possible).
- [ ] All docs updated.
- [ ] Testing status accurate (no false claims).
- [ ] Remaining manual tasks listed.
- [ ] Final delivery report provided.
