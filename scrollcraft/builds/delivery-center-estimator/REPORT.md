# Delivery Center Estimator case study: build report

Self-authored brief under explicit creative delegation (see BRIEF.md). No interview, no invented quotations.

## What shipped
- `/work/delivery-center-estimator/` (src/pages/work/delivery-center-estimator.astro, src/styles/case-delivery-center.css) and a second homepage card (src/content/work.yaml).
- Grammar: custom "annotated instrument case study". The other seven stock grammars lost for the reasons in BRIEF.md (chiefly: the site's nav must stay, the captures are the evidence, and a recruiter must be able to skim).
- Signature move: scroll-driven ZIP drill-down. The national ZIP map zooms to San Mateo 94402, the Bay Area map with its catchment crossfades in, the app's real dashboard panel slides in, and a mint reading frame walks cost per delivery → cost drivers → cash-flow views → low/base/high while a step ladder explains each figure. Page-local JS reads the engine's `--sc-p`; the engine is unmodified.
- Fingerprint gate: differs from portfolio-refinement on 5 of 6 (shares only the required nav). Row appended to scrollcraft/FINGERPRINTS.md.

## Assets (real, no generation, no spend)
Captured from the installed app's own localhost server (the app was launched; its server bound 127.0.0.1) with headless Chrome at 1440 × 920, 2× scale. Scripts: capture-tools/. Element boxes used to place the reading frame: panel-boxes.json.
- us-map.jpg: national ZIP boundaries and delivery-center dots (app chrome hidden for a clean plate).
- bay-map-94402.jpg: 94402 selected, catchment shaded (chrome hidden).
- panel-94402.png: dashboard panel element capture, cropped above "10-year cash flow" and "Nearby centers" so no per-center volume figures are shown.
- dashboard-94402.png (also the homepage card image) and compare-94402-78701.png: full app window.
Figures quoted on the page match the app screen (model version 2026.11.9-compact-results) and the repo's docs/STATUS.md; all labelled model estimates from public data.

## Feeling curve: intended vs felt (cold scroll of the final build)
| Act | Intended | Felt | Change made |
|---|---|---|---|
| Hero | Orientation | Orientation: clear what the tool is | none |
| Objective | Curiosity (still) | Calm, a plain question | none |
| Reading one ZIP | Understanding (peak) | The clearest moment on the page | Bay map appeared too early as a small picture-in-picture; crossfade moved later. Step details overlapped the heading; positioned against the list instead |
| How it works | Clarity | Clarity | none |
| Sources rail | Breadth | Breadth; closing note clipped on phones | Removed rail overshoot |
| Compare | Judgment | Judgment, wipe reads as a change of state | none |
| Built to be checked | Confidence | Count scrubbed through intermediate values (also under reduced motion) | Moved count out of the act: counts once on entry, final value under reduced motion |
| Limitations | Candor | Candor | none |
| Links plate | Resolve | Resolves on actions | none |
Desktop length first measured 13.8 vh across 7 engine acts, inside the band reserved by earlier builds; pan span reduced 3.2 → 2.8 (now 13.4 vh).

## Verification (production preview, http://127.0.0.1:4323/Jacob-Kambour-Website/)
Port 4322 was already held by an older preview of ~/Desktop/personal-site, so this build was served on 4323 and the served HTML was checked for the new page before shooting.
- `npm run check`: 0 errors, 0 warnings, 2 hints (unused variables in the unmodified vendored engine). `npm run build`: 3 pages.
- Skill harness (shoot.mjs) desktop 1440 × 900, mobile 390 × 844, reduced motion: no dead scroll, no frozen clips, no cues that never peak, no contrast findings, no console errors, no failed requests. Contact sheets and reports: lab/{shots,mobile,reduced}/.
- Per-section frames (9 positions inside pinned/pan acts, 2 in others) at 1440 × 900, 390 × 844, 360 × 640, reduced motion, plus the homepage at 1440 and 390: 0 px horizontal overflow, no broken images, no console errors. Selected frames: docs/previews/dce-*.jpg, home-card-delivery-center.jpg.
- Links: homepage card and "Explore project" open the case study in a new tab (same rule as the existing card); case-study "Back to projects" and in-page anchors stay in tab; footer project links open in new tabs, email is a mailto, matching the FP&A case study. No live demo, download or source link (repo is private).
- Keyboard: Tab reaches the skip link first; mobile Menu opens, Escape closes it.
- Reduced motion and narrow/short screens: the peak becomes a flow act with a static, complete composition (all six steps with details, national map, Bay map and panel); the sources rail becomes a native horizontal scroll region; parallax and wipes are disabled.

## Not verified
- No physical phone or Safari/WKWebView rendering of the site; headless Chrome only.
- No automated accessibility audit beyond the harness contrast pass, focus order and menu checks.
- Not deployed; gh-pages untouched.
