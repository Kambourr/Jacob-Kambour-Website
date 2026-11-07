# Handoff — Jacob Kambour portfolio

## Current state (November 6, 2026)
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
Existing stacked PRs #1–#4 are historical and not merged by this work. Local source changes are uncommitted; do not reset, rebase, force-push or blindly overwrite them. No remote push, merge, Pages, custom domain or visibility change was performed. User must request publication separately. If merges are authorized, prior preference was merge commits rather than squash.

## Superdesign artifacts
.superdesign contains earlier source init/reference extraction and a baseline canvas record. The pending redesign CLI was interrupted when Jacob switched workflows; the backend may have accepted that request before interruption. Do not claim it was refunded/cancelled remotely. These artifacts are not the website implementation. Old .preview-shots captures predate the redesign; use docs/previews instead.


## GitHub publication preparation — November 7, 2026
Jacob authorized pushing this site and publishing through GitHub Pages in Kambourr/personal-site. Remote and authenticated owner verified. Pages setup returned HTTP 422: current plan does not support Pages for this private repository. Repository visibility remains private.
Configured Astro site/base for https://kambourr.github.io/personal-site/ and normalized internal base URLs. Source will be merged with a merge commit into main; built static output prepared on gh-pages. Publishing remains blocked until private-repo Pages is supported or Jacob authorizes a visibility change. Local preview URL now includes /personal-site/.
