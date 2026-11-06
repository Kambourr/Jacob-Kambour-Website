# PROGRESS — Jacob Kambour personal site

## 2026-11-06
- Jacob asked for a planned personal hub: research successful personal sites, keep handoff docs, build locally, upload to GitHub later. Do not use Cursor cloud agents for this build. Stop if weekly usage approaches 50%.
- Created local git repo at `/Users/admin/Desktop/personal-site` on Jacob’s Mac (`main`, no remote). Added a short README.
- Weekly usage at kickoff was about 15.1% of the shared weekly limit (resets Wednesday, Nov 11, 2026 at 7:14 PM PT).
- Reviewed 12 live personal sites (finance + strong engineer/designer hubs). Memo: `docs/RESEARCH.md`. Dropped one URL that failed to load.
- Locked v1 IA, privacy rules, stack (Astro static), and deferred items in `docs/DECISIONS.md` and this brief.
- Hillsdale public copy deferred until Jacob reviews redaction. GPA omitted. No GitHub remote yet.


- Jacob asked to use a Cursor Project as manager with grok-4.6 worker threads for the build (not a local-only scaffold). Creating GitHub repo `Kambourr/personal-site` so those agents have a remote, while keeping the Desktop folder.

- Scaffolded Astro 7 (`output: 'static'`) on `cursor/astro-scaffold-4bd0`: YAML content collections, BaseLayout + paper typography tokens, name-only index. Homepage sections are the next stacked PR. Did not merge, enable Pages, or add a domain.

- Homepage sections on `cursor/homepage-sections-4bd0` (stacked on the scaffold branch): Hero → Selected work → Experience → Education → About → Connect, all from YAML. One Tesla role; $1M+ labeled as associated delivery value; no Hillsdale, GPA, phone, email, or résumé.
- Recorded standing model policy as D14 (Jacob asked for D10; that id was already taken on the open PRs).
- Approved public contact besides LinkedIn is the Grok Bot inbox `jkambour@mail.grokbot.com` (D15). GitHub stays a profile link, not a contact method.
- Redesign (D16) on `cursor/editorial-first-view-4bd0`: first laptop view is identity + real FP&A screenshot + live CTA + contact; Experience/Education/About in tabs. Not merged.
- D17: masthead who-line “MS Finance and Analytics, Santa Clara · Sales and Delivery Advisor at Tesla” under the name; $1M+ stays in the Experience tab.
- D18: public contact on this hub is `jkambour@gmail.com` (Jacob authorized it here only). Grok Bot inbox removed from schema and render. Tesla FP&A agent contact policy untouched.
- Root `HANDOFF.md` added so another agent can continue from the folder (scripts, layout, privacy, PR stack, known tests). No layout or copy change.

## Next
- Leave Hillsdale off v1 until redacted copy is approved.
- Do not merge or enable GitHub Pages until Jacob asks.
