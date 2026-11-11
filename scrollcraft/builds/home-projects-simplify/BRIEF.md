# Homepage project simplification brief (November 10, 2026)

## Authority
Jacob's request, verbatim: "on the main homepage I would like there to be less detail about each individual project and show both projects with descriptions like "A tool that automatically calculates ..." Or "a tool that uses ... to project ...". Then when the use clicks it or goes to the projects tab, there is more detail."
Scope is a refinement of the existing portfolio (see ../portfolio-refinement/BRIEF.md). Grammar, palette, type, nav and the vendored Scrollcraft engine are unchanged. No generated assets, no paid services.

## Decisions
- Journey is unchanged: identity, credentials, projects, background, about, contact. The project beat moves from "inspect one project" to "recognise both projects in one sentence each". Inspection moves to /projects/ and the case studies.
- Hero layer contract: far grid (static), mid orbital lines (parallax 0.18), subject = FP&A dashboard plane (parallax -0.28), foreground = Delivery Center Estimator capture plane (parallax -0.5). The estimator plane takes the slot of the old workflow note, so the hero keeps its depth while the duplicated project detail (workflow note, caption, "public filings → checked commentary" footer) is removed. Both planes are named and link to their case studies. On mobile the foreground plane stacks below and overlaps the dashboard's lower edge, with no parallax dependence. Reduced motion zeroes both plane transforms.
- Homepage #work: two equal cards (2 columns ≥761px, stacked below). Image, title, one-sentence tagline, "Read case study" cue. The whole card is one link (new tab, noopener noreferrer). The card image uses empty alt because the title and tagline describe it; full alt text stays on /projects/.
- /projects/: dark header with a two-item jump index (same-tab anchors), then the previous detailed project rows (stage image, ProjectProcess inspector for FP&A, tags, long summary, case study and live-dashboard links). Calm natural flow, no engine mount, no pinning.
- Feeling: homepage project beat = quick recognition; /projects/ = understanding (the inspector stays the peak interaction there).

## Copy (facts from existing site content only)
- Tesla FP&A Agent: "A tool that uses Tesla’s public filings to forecast past quarters and explain the variances against reported results." ("past quarters" keeps the historical-backtest distinction.)
- Delivery Center Estimator: "A tool that estimates what a new Tesla delivery center in any US ZIP code would cost per delivery and return over ten years, using public data."
