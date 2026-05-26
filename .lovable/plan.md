
# Plan: Make QRJI More Advanced

Goal: level up the QR generator with rounded QR edges and a set of high-impact new features, while keeping all codes 100% scannable.

## 1. Rounded QR edges (the headline visual change)
In `src/components/ProfessionalQRGenerator.tsx`:
- Expand `QRDesignOptions.dotStyle` to: `square | rounded | dots | classy | classy-rounded | extra-rounded`.
- Add new fields:
  - `cornerSquareStyle`: `square | dot | extra-rounded`
  - `cornerDotStyle`: `square | dot`
  - `cornerRadius` slider (0–20) that maps to the dot type (`extra-rounded` at high values).
- Wire these into `qr-code-styling` via `dotsOptions.type`, `cornersSquareOptions.type`, `cornersDotOptions.type`.
- Add a "Rounded" one-click preset (extra-rounded dots + extra-rounded corner squares + dot corner dots) so the user gets rounded edges instantly.
- Keep error-correction at `H` so logos + rounded dots still scan.

## 2. New design power-ups
- Gradient fills: linear/radial gradient for dots and background (two color pickers + angle slider) using `dotsOptions.gradient` and `backgroundOptions.gradient`.
- Eye (corner) color separate from dot color.
- Background transparency toggle (export PNG with alpha).
- Size slider (256 → 2048 px) and margin/quiet-zone slider.
- Error-correction selector (L/M/Q/H) with a "recommended" hint.

## 3. Frames & call-to-action
New `QRFrame` component rendered around the QR canvas with options:
- Frame styles: none, rounded box, scan-me badge, phone mockup, ticket.
- Editable CTA label ("SCAN ME", "WIFI", custom text), font color, frame color.
- Export composites the frame + QR into a single PNG/SVG.

## 4. Templates gallery
- Add `src/components/QRTemplates.tsx`: 8–12 ready-made looks (Neon, Minimal Mono, Sunset Gradient, Corporate Blue, Instagram, Bitcoin Gold, etc.).
- Clicking a template patches `designOptions` + frame in one go.

## 5. Export upgrades
- Export formats: PNG, JPG, SVG, PDF, WebP (use `qr-code-styling` getRawData + `jspdf` for PDF).
- "Copy as image" to clipboard.
- "Download all formats" zip (using `jszip`).
- Print-ready 300 DPI PNG option.

## 6. Bulk / batch generator
New tab `Bulk` (added to `src/pages/Index.tsx` `Tabs`):
- Paste list or upload CSV of URLs/text.
- Generate all QRs with the current design, preview as grid, download as ZIP.

## 7. Dynamic QR (short-link) — optional, requires backend
- Offer "Dynamic QR" toggle. When on, generate a short URL that redirects to the target so the user can change destination later and track scans.
- Requires Lovable Cloud (database + edge function for redirect + scan counter). Will prompt the user to enable Cloud before building this slice.

## 8. Scan analytics dashboard (depends on #7)
- `src/pages/Analytics.tsx`: total scans, last 30 days chart, top devices/countries (from edge function logs).

## 9. UX polish
- Live preview updates with debounce (already partially there) + skeleton while rendering.
- Mobile-friendly two-column → stacked layout audit.
- Add "Test scan" button that opens a modal with the QR enlarged for quick phone testing.
- Save designs to `localStorage` as "My presets".
- Keyboard shortcut `Cmd/Ctrl+S` to download.

## 10. SEO/content (small)
- Add a "QR Code Styles" explainer section to `src/components/ContentSection.tsx` describing rounded/dots/classy styles (helps Google indexing).

## Technical notes
- Library already in use: `qr-code-styling` — supports all dot/corner styles and gradients natively, so #1, #2 are mostly config.
- New deps to add: `jspdf`, `jszip`, `file-saver`.
- All colors continue to go through semantic tokens / picker values; no hard-coded Tailwind colors added.
- Backend-dependent items (#7, #8) will be split into a follow-up after Lovable Cloud is enabled.

## Suggested build order
1. Rounded edges + new dot/corner styles + presets (immediate visual win).
2. Gradients, eye color, size/margin/EC controls.
3. Templates gallery.
4. Frames & CTA.
5. Export upgrades (PDF/SVG/ZIP).
6. Bulk generator.
7. (Optional) Dynamic QR + analytics via Lovable Cloud.

Want me to start with steps 1–3 in the first build pass?
