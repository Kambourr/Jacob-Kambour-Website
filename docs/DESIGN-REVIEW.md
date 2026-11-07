# Recruiter portfolio review — November 6, 2026

## Scope and evidence
Read HANDOFF, BRIEF, DECISIONS, PROGRESS, all current page/component/content/CSS files, and the Tesla FP&A repository README through GitHub. Viewed the running local homepage. Existing .preview-shots files depict an older layout and are not current validation. No fresh desktop/mobile breakpoint certification. No source redesign, merge, push, or deployment performed.

## Assessment
Subjective recruiter-goal score: 5/10. Credible content and accessible contact, but the small identity header gives the project screenshot more prominence than the candidate. Muted type and square sections lack a distinctive visual hierarchy. The desktop CSS reserves approximately a viewport for the project, delaying background. Education/About are behind tabs. Project copy describes features without explaining Jacob's contribution or finance judgment. The screenshot contains tiny text and a captured scrollbar.

## Proposed direction
Modern finance portfolio: off-white canvas, deep navy typography, restrained blue accent, generous purposeful spacing, larger personal introduction, a crisp real project crop within a contrasting project panel. A subtle, optional motion treatment can emphasize source → model → verification; do not hide content behind animation. No Tesla brand treatment suggesting endorsement.

First 15 seconds should establish Jacob Kambour, finance/analytics focus, Santa Clara MS, Tesla role and Blendid analyst internship, one demonstrable AI/finance project, and contact. Proposed headline: “Finance, analytics, and AI—with the work to show it.” Supporting facts remain sourced from approved YAML. Availability and job-target claims need confirmation.

## Information architecture
Compact name/navigation/contact; identity and featured project together; visible experience/education summary; selected work; brief About and contact footer. Project detail route explains problem, personal contribution, approach, evidence, limitations, and live/source links. Remove mandatory background tabs in proposed redesign. Keep one featured project now; add smaller real project cards as work ships, without empty coming-soon tiles.

## Imagery
Prioritize an intentional, legible crop of the actual Tesla dashboard. A real friendly portrait is optional and useful near the intro/About; no stock person, synthetic headshot, generic AI brain, or Tesla vehicle hero. No suitable portrait is currently supplied. Consider a short captioned demonstration later, with no autoplay sound and a static fallback.

## Accuracy and proof
Tesla README says forecasts are historical backtests, not a live forward prediction. Distinguish numerical verification of commentary from forecast accuracy. Its November 5, 2026 run reports 361 commentary figures tied across 12 memos and 10 answers; this is dated run evidence, not permanent accuracy or business impact. Describe the independent public-data project separately from Tesla employment. Explain AI-assisted development honestly; confirm Jacob's own problem framing, model decisions, validation, and tool use before publishing contribution claims.

## Needed content
Confirm target roles, employment/internship timing, Tesla dates, degree completion dates, preferred public city, specific personal contributions, genuine skill examples, one concrete Blendid deliverable, and a short personal interest. Portrait optional. Resume download is a future option only after explicitly approving a public-safe version; current policy excludes resume files. Continue excluding GPA, phone, address, Hillsdale data and unapproved metrics.

## Implementation acceptance criteria
Clear identity, role direction, project proof and contact in a normal laptop first viewport. On mobile identity/contact precede imagery. Test 375/390 mobile and 1280/1366/1440 laptop widths, keyboard focus/tab behavior, contrast, reduced motion, zoom, link destinations, image readability and layout overflow. Preserve static Astro and YAML content; render all published projects rather than only work[0]. Verify check/build after actual source changes. Add social preview metadata and intentional favicon at implementation time.

## Superdesign preparation
Six init context files created under .superdesign/init. CLI preflight succeeded; authentication required and login launched. No canvas draft generated yet. Preferred next direction: modern finance portfolio; alternative: dark data-studio presentation. User requested a review and recommendations before visual direction selection.
