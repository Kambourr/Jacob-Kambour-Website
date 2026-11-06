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
