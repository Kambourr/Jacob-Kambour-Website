# Handoff — Jacob Kambour portfolio

## Current state (November 7, 2026)
The portfolio is live at https://kambourr.github.io/Jacob-Kambour-Website/ . Source is saved in this folder and pushed to main in Kambourr/Jacob-Kambour-Website. The user made the repository public; GitHub Pages deploys from gh-pages at / (root). Deployment run 42414127048 succeeded. Public homepage, case study, stylesheets and project image returned HTTP 200. Older publication-blocker notes below are historical and superseded.
Local Astro redesign implemented with Codex agents. Jacob chose https://wearestokt.com/ as a style reference, then explicitly said not to use Superdesign and to build directly. This supersedes old Cursor/provider and canvas-first workflow instructions. No further Superdesign work is authorized by default.

Reference character: floating inset menu, large regular-weight sans headings, monospaced labels, spacious imagery and contrasting sections. Original petrol/mint/cream palette; Inter + IBM Plex Mono. No borrowed Stokt content assets. DESIGN.md is the governing visual system.

## Run and validate
Node >=22.12.0. Scripts: npm install, npm run dev, npm run check, npm run build, npm run preview. Current production preview started with `npm run preview -- --host 127.0.0.1 --port 4322` at http://127.0.0.1:4322/.
Astro 7 dev runs as a managed daemon; restart it after changing the content schema if its content store remains stale (`npm run astro -- dev stop`, then `npm run dev`). Do not confuse an old dev cache with built output.

## Pages and source
- `/`: src/pages/index.astro, shared Navigation.astro, global.css and BaseLayout.astro.
- `/work/tesla-fpa-agent/`: src/pages/work/tesla-fpa-agent.astro, scoped case-study styles plus shared navigation/layout.
- Project list: src/content/work.yaml. Fields image, imageAlt, tags, href, hrefLabel, optional caseStudyPath, order. Image names resolve to src/assets PNG/JPG/JPEG/WebP. Add an actual image file there and a YAML entry to add a card; no homepage condition is needed. Local caseStudyPath uses `work/<slug>/` and requires a real page at that route.
- Experience/education/about text remains in YAML. Hero and page section prose is in index.astro. Navigation text in Navigation.astro.
- src/assets/tesla-fpa-agent.png is a real dashboard capture, optimized to WebP in the build. Tesla repo is untouched.
- Legacy Masthead/FeaturedWork/BackgroundTabs/About/Education/Experience components are unused by the new homepage.

## Privacy/content
Public contact approved here: LinkedIn and jkambour@gmail.com. GitHub is a profile/source link. Do not add phone, address, GPA, resume file, Hillsdale operational figures or its broken project URL. Tesla is one role: Sales and Delivery Advisor. No invented job dates, availability, outcomes or skill scores. Vehicle delivery value is not revenue and omitted from redesigned public rendering.
Tesla project uses historical backtests, not live forward predictions. Numerical commentary verification is distinct from forecast accuracy. Case study identifies independent public-data work, not Tesla endorsement.

## Verification
Astro check passed with 0 errors/warnings/hints; static build generates both routes. Browser review uses production preview. Homepage checked at 375,390,768,1280,1366,1440px widths with no horizontal document overflow; images load. Mobile Menu opens, Tab reaches Work first, Escape closes and restores focus. Desktop anchor and case-study navigation work. Reduced-motion rules disable movement; no entrance-delayed content. Screenshot evidence in docs/previews. This is not a complete automated accessibility audit.

## Git/deployment
Source changes were merged into main with a merge commit and pushed with user authorization. Built output is on gh-pages. Preserve history; do not reset or force-push. Updating source requires npm run build and publishing the resulting dist contents to gh-pages; no automatic source-build workflow is installed. No custom domain configured.

## Superdesign artifacts
.superdesign contains earlier source init/reference extraction and a baseline canvas record. The pending redesign CLI was interrupted when Jacob switched workflows; the backend may have accepted that request before interruption. Do not claim it was refunded/cancelled remotely. These artifacts are not the website implementation. Old .preview-shots captures predate the redesign; use docs/previews instead.


## GitHub publication preparation — November 7, 2026
Jacob authorized pushing this site and publishing through GitHub Pages in Kambourr/personal-site. Remote and authenticated owner verified. Pages setup returned HTTP 422: current plan does not support Pages for this private repository. Repository visibility remains private.
Configured Astro site/base for https://kambourr.github.io/personal-site/ and normalized internal base URLs. Source will be merged with a merge commit into main; built static output prepared on gh-pages. Publishing remains blocked until private-repo Pages is supported or Jacob authorizes a visibility change. Local preview URL now includes /personal-site/.


### Confirmed repository rename
During push GitHub redirected the old personal-site remote to Kambourr/Jacob-Kambour-Website. Verified canonical repository URL and updated origin and Astro base accordingly. Main source and gh-pages build branch pushed; working source lives in the same Desktop/personal-site folder. Intended public URL is https://kambourr.github.io/Jacob-Kambour-Website/ . Pages remains blocked by private-repository plan eligibility; no visibility change made. When enabled, use Deploy from a branch → gh-pages → / (root). Source changes require rebuilding and updating gh-pages; no automatic source-build workflow is installed.


## Navigation update — November 7, 2026
After 100px of scrolling, navigation collapses into a compact right-aligned name/Menu disclosure. The full desktop bar returns at the top; mobile always uses the disclosure. Escape/outside click/section selection close the menu. Project and external page links open in new tabs with noopener noreferrer; section anchors and email retain their standard behavior. Astro check/build passed; desktop and 390px mobile expansion, Escape, section selection and overflow checked.


## Scrollcraft refinement — November 8, 2026
User selected refinement of the existing layout. Homepage imports scrollcraft-portfolio.css and the unmodified MIT Scrollcraft runtime (src/vendor/scrollcraft); parallax only affects hero artifact planes. ProjectProcess.astro adds a factual, accessible three-step explanation to the Tesla project. Preserve its numerical-check vs forecast-accuracy distinction. No generated assets, paid services or content changes to experience. Brief, score and verification limitations: scrollcraft/builds/portfolio-refinement/. Homebrew ffmpeg installed for skill preflight; optional KIE and standalone Playwright unused. Existing compact menu and new-tab links retained.


## Delivery Center Estimator case study — November 10, 2026
Branch feat/delivery-center-estimator adds a second project card (src/content/work.yaml, image src/assets/delivery-center-estimator.png) and a case study at /work/delivery-center-estimator/ (src/pages/work/delivery-center-estimator.astro, styles in src/styles/case-delivery-center.css). Built with the scroll-craft skill under explicit creative delegation; brief, layer contract, score, fingerprint gate, capture scripts and harness evidence are in scrollcraft/builds/delivery-center-estimator/.
- Imagery: real captures of the installed DeliveryCenterEstimator.app, taken from the app's own localhost server with headless Chrome (national ZIP map, Bay Area map with the 94402 catchment, the 94402 dashboard panel, the full 94402 window, and the 94402 vs 78701 compare window). Map plates hide the app's floating chrome; nothing is drawn into a capture. The panel is cropped above "10-year cash flow" and "Nearby centers", so no per-center volume figures appear. No generated assets, KIE or paid services.
- Content: every figure is copied from the app screen (model version 2026.11.9-compact-results) or the estimator repo's README/docs and is labelled a model estimate from public data. Independent public-data work, no Tesla endorsement, no internal data. The estimator repo is private: no source link, no download, no "open source" wording. The estimator repo was read only; nothing there was modified.
- Schema: work.yaml `href` and `hrefLabel` are now optional so a project without a public destination links only to its case study; the homepage renders the secondary link only when both exist.
- Motion: the homepage-style vendored Scrollcraft engine (unmodified). Hero has three parallax planes; the pinned "Reading one ZIP" drill-down runs only at ≥861px wide, ≥640px tall and without reduced motion (decided at load; it becomes a flow act otherwise, with a complete static composition). Sources rail is a pan act (a flow act with native horizontal scrolling under reduced motion). The 41,034 count runs once on entry and shows the final value under reduced motion.
- Verification and limits: see scrollcraft/builds/delivery-center-estimator/REPORT.md. Not deployed; gh-pages untouched. No physical-phone test.


## Simplified homepage projects and Projects page — November 10, 2026
Branch feat/simplify-home-projects. Jacob asked for less per-project detail on the homepage, both projects shown with one-sentence "A tool that ..." descriptions, and more detail on click or on the Projects tab.
- Content: work.yaml has a new required `tagline` (max 160 chars, schema in src/content.config.ts) used on homepage cards; the longer `summary` remains for /projects/. Taglines use only facts already on the site.
- Homepage: #work now shows two equal cards (image, title, tagline, "Read case study"), side by side at ≥761px and stacked on mobile; each card is one link to its case study in a new tab. The long summaries, tags and ProjectProcess block moved off the homepage. The hero artifact no longer repeats project detail: the workflow note, caption and footer strip are gone, and the Delivery Center Estimator capture is now the foreground parallax plane over the FP&A dashboard. Both planes link to their case studies. "View projects" still scrolls to #work.
- /projects/ (src/pages/projects.astro): detailed view with jump links, image stages, the ProjectProcess inspector for the FP&A agent, tags, summaries, and case-study and live-dashboard links, plus the independence note.
- Navigation: "Projects" now goes to /projects/ and gets aria-current="page" there and aria-current="true" on case studies (current prop is 'projects' | 'work'). The "← Back to projects" link on each case study now goes to /projects/; nothing else on the case study pages changed. The contact footer is now shared as src/components/ContactFooter.astro.
- Unused .source-note and .artifact-caption CSS removed. Brief: scrollcraft/builds/home-projects-simplify/BRIEF.md.
- Verification: astro check 0 errors/0 warnings (2 hints are unused variables in the unmodified vendored Scrollcraft engine); build generates 4 routes. Production preview screenshots at 1440 and 390 px are in docs/previews/home-simplified-*.jpg and projects-*.jpg, plus reduced-motion captures. No horizontal overflow, all images load, no console errors. The mobile menu opens and closes with Escape, focus returns to the toggle, the nav collapses after scrolling, the jump anchors land below the nav, and the process inspector switches steps. Not deployed; gh-pages untouched. No physical-phone test.


## One-screen /v2/ draft — November 11, 2026
Branch claude/exciting-fermi-9e7opt adds a separate draft homepage at /v2/ (src/pages/v2.astro). The current homepage, /projects/ and case studies are unchanged; nothing links to /v2/ yet and it is not deployed.
- Inspiration (reviewed from tweets Jacob shared): parivansjalia.com for the one-screen résumé layout with click-to-expand roles, and Motionin's "Cipher"/"Benchmark" sections for the terminal-style finance visual. Nothing was copied: no third-party code, art, prompts or text.
- Layout: name, focus line, Email/LinkedIn/GitHub/Project details links; Experience rows (native <details>, one open at a time, all bullets from experience.yaml); Education rows; both projects with thumbnails and taglines from work.yaml. The recruiter content fills the first screen (a full-viewport wrapper, vertically centred) with a small cue linking down; the terminal band starts exactly at the fold at every tested size.
- Terminal band: the real Q3 2026 revenue bridge from the live Tesla FP&A Agent dashboard capture (forecast $35.53B → actual $28.05B, variance −$7.48B / −21.1%, 2,495 facts, 63 filings). Drawn with CSS, labelled as a historical backtest with the axis starting at $20B; screen-reader label and description included. The tape uses only figures already on the site (Delivery Center Estimator figures are labelled model estimates).
- Shared files: none changed. The variance figure uses Inter 500 (already loaded site-wide). Classes are scoped; note global.css `.project + .project` exists, so /v2/ uses `.proj-card`.
- Motion: stepped bar rise, blinking cursor and scrolling tape; all disabled under prefers-reduced-motion (tape becomes static wrapped text).
- Verification: astro check 0 errors/0 warnings; build 5 routes. Production preview at 1440×900, 1280×800, 1024×768, 390×844 and reduced motion: no horizontal overflow, images load, no console errors, details toggle works. Screenshots: docs/previews/v2-onescreen-*.jpg. To promote it, move the markup into index.astro (or swap routes) after Jacob approves.

- Nov 11 update: experience.yaml bullets now copy the Nov 11 résumé verbatim (affects both / and /v2/ in source). This includes the Tesla line "about 50 quarter-end deliveries totaling over $2 million in revenue", which earlier notes had kept off the site (delivery value is not revenue); Jacob asked for these bullets. /v2/ was republished to gh-pages; the live homepage was not rebuilt.


## One-screen homepage promoted to / — November 11, 2026
Jacob approved the /v2/ design and asked for it to be merged to main and published. src/pages/v2.astro became src/pages/index.astro; the Stokt-inspired homepage is replaced (it remains in git history, e.g. main at abc2680).
- /v2/ now redirects to /Jacob-Kambour-Website/ via `redirects` in astro.config.mjs (Astro does not base-prefix redirect destinations, so the base is written out). The redirect page is noindex.
- Navigation.astro (used by /projects/ and case studies): Experience now links to `#experience` on the new homepage; the About link was removed because the homepage has no About section. Projects page, case studies, ContactFooter and scrollcraft-portfolio.css (still imported by /projects/) are unchanged.
- site.yaml fields heroLine, whoLine, proof and about are no longer rendered by the homepage; they are kept for now.
- Verification: astro check 0 errors/0 warnings; build 4 pages + /v2/ redirect. Production preview: homepage at 1440 and 390, /v2/ lands on /, both case studies and /projects/ load with no HTTP errors or console errors, the Projects menu's Experience link lands on #experience. The two delivery-center case-study images that start unloaded are lazy-loaded and load on scroll (same as the live site before this change).


## Etch Portfolio Spend Forecast case study — November 12, 2026
Branch feat/etch-portfolio-case-study adds a third case study at /work/etch-portfolio-forecast/ (src/pages/work/etch-portfolio-forecast.astro, styles in src/styles/case-etch-portfolio.css) and a third entry in src/content/work.yaml (image src/assets/etch-portfolio-forecast.png, a chart rendered from the same data). It follows the Delivery Center Estimator structure and reuses the vendored Scrollcraft engine: hero planes, a pinned six-step walkthrough (live at >=861px wide, >=640px tall, no reduced motion; static stacked panels otherwise), a pan rail of the six workbook tabs, a CSS-only scenario switch (radio inputs and :has(), with a no-:has fallback), a count-up, and the limitations section.
- Data: every figure comes from src/data/etch-model.json, exported from the calculated Etch_Portfolio_Spend_Forecast_v3.xlsx for the Base, Funding Cut and Schedule Slip scenarios with three months closed. Charts are inline SVG built at build time in the page frontmatter. To refresh after the workbook changes, re-export the JSON and rebuild. The workbook itself is not published.
- Content rules: illustrative numbers, not Applied Materials data, no affiliation or endorsement. Verification claims on the page (11 checks, independent formula-engine recalculation with zero errors, restructure tie-out) describe work done on the workbook, not Excel itself. The homepage note and the Projects page note now name Applied Materials as well as Tesla.
- Verification: astro check 0 errors, 0 warnings; build generates 5 routes. Desktop scroll-through at 1440 wide, 375 wide with no horizontal overflow. Not tested on a physical phone, in Safari, or with the reduced-motion setting.


## Etch Spend Forecast Builder link and section — November 12, 2026
The Etch case study now has a "Try it with your own numbers" section (#builder, .etp-app styles in case-etch-portfolio.css), a hero button, a footer link, and an updated checks and limitations text. The app itself lives in its own repo, Kambourr/etch-spend-forecast-app, published at https://kambourr.github.io/etch-spend-forecast-app/ (plain static files, no build; source of truth for the calculations is engine.js there). The section's screenshot is src/assets/etch-builder.png, a headless Chrome capture of the app with the Etch example loaded; refresh it if the app's look changes. work.yaml's Etch tagline and summary now describe the Excel model and the web app. Illustrative numbers; not Applied Materials data.
