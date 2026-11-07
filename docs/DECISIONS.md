# DECISIONS — Jacob Kambour personal site

## D1. Host and workflow (2026-11-06)
Build in a local folder on Jacob’s Mac Desktop (`/Users/admin/Desktop/personal-site`) rather than Cursor cloud agents or a GitHub repo first. Upload to GitHub later when Jacob asks. No custom domain in v1.

## D2. Docs live in `docs/` (2026-11-06)
Same handoff path as the Tesla FP&A project: `docs/BRIEF.md`, `docs/PROGRESS.md`, `docs/DECISIONS.md`. Research memo stored as `docs/RESEARCH.md`. Update these after every meaningful session so another agent can take over.

## D3. Site type (2026-11-06)
Short hub, not a rehost and not a full web résumé. The Tesla FP&A dashboard stays at https://kambourr.github.io/tesla-fpa-agent/ and is linked as a project card.

## D4. Homepage IA (2026-11-06)
Single page, this order: Hero → Selected work → compressed Experience → Education → short About → Connect.

## D5. Privacy (2026-11-06)
Do not publish street address, phone, personal email, or an unredacted résumé. City-level location may appear later if useful; v1 can omit it or use “Bay Area” only. Jacob confirmed almost all Hillsdale study numbers are private Tesla data — omit the Hillsdale card from v1 until a redacted version is approved. Do not link the 404 hillsdale-study Pages URL.

## D6. Stack (2026-11-06)
Astro with static output, aimed at GitHub Pages later. Content should live in simple files so copy can be edited without a redesign. Rejected for v1: Next/Vercel (extra host), Framer/Webflow (weak git/handoff).

## D7. Copy defaults (2026-11-06)
- Public Tesla title on the hub: “Sales and Delivery Advisor” (external résumé wording). LinkedIn experience currently says “Tesla Advisor”; headline says “Sales and Delivery at Tesla.” Do not present internal and external titles as two jobs.
- Omit GPA until Jacob confirms a public figure (records disagree).
- Experience dollars: “supported $1M+ in vehicle value” is delivery value, not personal revenue.
- Do not claim Jacob hand-coded tools that AI wrote under his direction.

## D8. Usage cap (2026-11-06)
Stop new coding if weekly usage approaches 50%. Keep docs current so work can resume later.

## D9. Cursor Project for the build (2026-11-06)
Jacob asked to use Cursor cloud agents for building: one Project coordinator and worker threads, all on grok-4.6 (no Claude/GPT). The Desktop folder remains the local checkout. A GitHub repo is required for those agents; planning docs are the starting commit. Do not merge PRs or enable public Pages without Jacob's approval.

## D10. Brief vs current workflow (2026-11-06)
`docs/BRIEF.md` still opens as a local-only Desktop repo with no GitHub remote, and an earlier note said not to use Cursor cloud agents. D9 and Jacob’s later Project request supersede that workflow. Privacy, IA, copy limits, and “no Pages until Jacob asks” from the brief still win. This session builds on GitHub via stacked PRs and does not merge or enable Pages.

## D11. Astro 7 static scaffold (2026-11-06)
Astro 7 with `output: 'static'`. No adapter. `site` and `base` are unset until GitHub Pages is approved (a project site would need `base: '/personal-site'`). `public/.nojekyll` is included so a later Pages deploy can serve `/_astro`. Content is YAML collections (`src/content/*.yaml` + `src/content.config.ts`) so copy can change without a redesign. Schema has no GPA, email, phone, or address fields. Public hrefs must be `https` and must not include the Hillsdale study URL.

## D12. Visual system (2026-11-06)
Typography-led paper page: Source Serif 4 for the name and titles, IBM Plex Sans for body, warm paper background (`#f3efe6`), ink text, one slate-blue accent (`#243d56`). Fonts are bundled at build via Astro `fontProviders.google()` (self-hosted in the output, not a runtime Google request). Light-only (`color-scheme: light`). No gradients, no Tesla red, no Tesla wordmark/logo, no stock photos. Homepage section components are a follow-on PR; this scaffold ships the layout shell and a name-only index.

## D13. Homepage sections (2026-11-06)
Single page reads YAML collections. Order: Hero → Selected work → Experience → Education → About → Connect. Tesla is one role (Sales and Delivery Advisor). $1M+ copy keeps the parenthetical that it is associated delivery value, not personal revenue. No Hillsdale card, no GPA, no contact except LinkedIn and GitHub. Hero proof is the BRIEF positioning split into three short sentences; About uses the BRIEF About paragraph unchanged. External links use `rel="noreferrer"` and stay https-only.

## D14. Standing model policy (2026-11-06)
Jacob asked for this as D10. D10–D13 were already committed on the open scaffold and homepage PRs, so this uses the next free id and does not renumber those entries.

- Project coordinator stays grok-4.7, reasoning effort medium, fast false.
- Never enable fast (`fast=true`). Jacob said it uses more tokens.
- Coding workers use grok-4.6, effort medium, fast false. Model slug `cursor-grok-4.6-medium` only. No high, xhigh, or `-fast` slugs. Never Claude, GPT, or another provider.
- This scaffold/homepage thread was already running at grok-4.6 high before the policy; later threads follow D14.

## D15. Approved public contact (2026-11-06)
Jacob approved one public contact besides LinkedIn: the Grok Bot inbox `jkambour@mail.grokbot.com` (`mailto:jkambour@mail.grokbot.com`). This is not a personal Gmail. Do not invent another address.

Connect is LinkedIn and that mailto only. GitHub stays a hero/profile link and is not a contact method. The content schema allows mailto solely for that exact address; other emails, `tel:`, street address, résumé files, GPA, and the Hillsdale study URL stay rejected. Privacy rules otherwise unchanged.

## D16. First-viewport editorial hub (2026-11-06)
Jacob rejected the beige single-column resume. The hub is an editorial/product page: masthead identity plus contact, then a wide featured-work stage (real live-dashboard screenshot, short what-it-does, one live CTA). Experience, Education, and About sit in accessible tabs below the first laptop view. Hero no longer lists school and every role. About no longer repeats the project and jobs. Do not emphasize the $1M+ delivery-value line on the first screen. One real project only; thumbnail is a capture of the live Tesla FP&A Agent, not generated art. No official Tesla branding beyond that project’s own UI.

## D17. Masthead who-line (2026-11-06)
D16 stripped school and role from the first screen; Jacob then said a recruiter still needs who he is. One concise line under the name, existing facts only: “MS Finance and Analytics, Santa Clara · Sales and Delivery Advisor at Tesla”. Domain line “FP&A and Financial Analysis” stays. Do not pull Experience bullets or the $1M+ line into the masthead. This line must remain in the 1280×800 and 1366×768 first view with the project visual, live CTA, and LinkedIn/email.

## D18. Personal Gmail on this hub only (2026-11-06)
Jacob explicitly authorized displaying `jkambour@gmail.com` as the public contact on this personal hub only. It replaces the D15 Grok Bot inbox (`jkambour@mail.grokbot.com`), which must not remain as an allowed or rendered contact here. Schema allows mailto solely for `mailto:jkambour@gmail.com`. LinkedIn stays the other contact method; GitHub stays a profile link. Still reject phone, street address, résumé files, GPA, other inboxes, and the Hillsdale study URL. Do not change the Tesla FP&A agent repo or its no-private-contact policy.

## D19. Superdesign review requested (2026-11-06)
Jacob requested a local review and Superdesign redesign in Codex, superseding the prior Cursor-only workflow for this task. Review recommends a modern finance portfolio, visible background summaries and scalable project cards; these are proposals, not approved visual decisions. Existing public-content/privacy and deployment restrictions remain. See docs/DESIGN-REVIEW.md.

## D20. Stokt reference and direct Codex build (2026-11-06)
Jacob selected https://wearestokt.com/ for its presentation, fonts and menu. He then explicitly requested no Superdesign and a direct build using Codex agents. This supersedes prior provider/agent workflow rules and the Superdesign canvas approval workflow for this build. The pending local Superdesign process was interrupted; no subsequent Superdesign commands were used.

Implemented original petrol/mint/cream palette, Inter and IBM Plex Mono as font substitutes, floating inset navigation, large regular-weight headlines, screenshot-led project presentation, visible experience/education and contact footer. No Stokt imagery, brand assets or copy is used by the application. Supersedes D12/D16 visual system and mandatory background tabs. New local Tesla case-study route explains rather than rehosts the dashboard. Source remains unchanged in Tesla repo.

Project cards now read image, tags, CTA label and optional caseStudyPath from work.yaml. No fabricated future project cards. Current privacy restrictions and no publish/merge without user instruction remain.


## Direct recruiter-facing copy — November 6, 2026
Jacob rejected slogans and AI-sounding quips. Use literal section headings and factual supporting text. Homepage: Projects, Experience & Education, About me, Contact me. Case study: Project overview, Project objective, How it works, Accuracy & limitations, What the project demonstrates, Project links. Removed curiosity/starting-point/through-line/learning-the-numbers wording.


## Resume-based job bullets — November 6, 2026
Updated Tesla and Blendid bullets using the user-provided Desktop resume. Retained approved Tesla public-facing title. Omitted Tesla delivery counts/value and private study metrics; included a high-level study/app/analysis description. Blendid bullets now cover C-suite cost reports, estimated downtime impact, M2 serviceability collaboration and multi-state robot operations. Resume PDF itself, contact details, GPA and unrelated projects were not added to the site. Homepage renders all approved YAML bullets rather than silently filtering/truncating them.


## GitHub publication preparation — November 7, 2026
Jacob authorized pushing this site and publishing through GitHub Pages in Kambourr/personal-site. Remote and authenticated owner verified. Pages setup returned HTTP 422: current plan does not support Pages for this private repository. Repository visibility remains private.
Configured Astro site/base for https://kambourr.github.io/personal-site/ and normalized internal base URLs. Source will be merged with a merge commit into main; built static output prepared on gh-pages. Publishing remains blocked until private-repo Pages is supported or Jacob authorizes a visibility change. Local preview URL now includes /personal-site/.


### Confirmed repository rename
During push GitHub redirected the old personal-site remote to Kambourr/Jacob-Kambour-Website. Verified canonical repository URL and updated origin and Astro base accordingly. Main source and gh-pages build branch pushed; working source lives in the same Desktop/personal-site folder. Intended public URL is https://kambourr.github.io/Jacob-Kambour-Website/ . Pages remains blocked by private-repository plan eligibility; no visibility change made. When enabled, use Deploy from a branch → gh-pages → / (root). Source changes require rebuilding and updating gh-pages; no automatic source-build workflow is installed.
