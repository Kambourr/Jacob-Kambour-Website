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
