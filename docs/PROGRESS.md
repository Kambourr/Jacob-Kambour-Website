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

## Next
- Stacked PR: homepage sections in order Hero → Selected work → Experience → Education → About → Connect, reading `src/content/*.yaml`.
- Visual pass on those sections so it does not look like a generic AI landing page.
- Leave Hillsdale off v1 until redacted copy is approved.
- Do not merge or enable GitHub Pages until Jacob asks.
