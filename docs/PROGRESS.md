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

## Codex design review — 2026-11-06
- Reviewed running local draft, source, handoff and Tesla README. Recruiter-goal rating 5/10; detailed recommendations in docs/DESIGN-REVIEW.md.
- Created six Superdesign init context files. Login launched; canvas work pending authentication and visual direction. Application source unchanged.

## Direct redesign completed — 2026-11-06
- Built Stokt-inspired Astro homepage with Codex agents after Jacob stopped the Superdesign workflow. Added responsive Navigation and local Tesla FP&A case study.
- Inter and IBM Plex Mono replace serif typography; dark petrol hero, mint action surfaces and warm light sections. Full background is visible without tabs.
- Agent review corrected menu keyboard ordering, qualification text sizing and project-card scalability. Content avoids unsupported accuracy and future-prediction claims.
- Build and Astro check pass. Production preview at http://127.0.0.1:4322/. Screenshots in docs/previews. Responsive/browser validation details in HANDOFF.md.
- No commit, push, PR merge, deployment, domain or visibility changes.


## Direct recruiter-facing copy — November 6, 2026
Jacob rejected slogans and AI-sounding quips. Use literal section headings and factual supporting text. Homepage: Projects, Experience & Education, About me, Contact me. Case study: Project overview, Project objective, How it works, Accuracy & limitations, What the project demonstrates, Project links. Removed curiosity/starting-point/through-line/learning-the-numbers wording.


## Resume-based job bullets — November 6, 2026
Updated Tesla and Blendid bullets using the user-provided Desktop resume. Retained approved Tesla public-facing title. Omitted Tesla delivery counts/value and private study metrics; included a high-level study/app/analysis description. Blendid bullets now cover C-suite cost reports, estimated downtime impact, M2 serviceability collaboration and multi-state robot operations. Resume PDF itself, contact details, GPA and unrelated projects were not added to the site. Homepage renders all approved YAML bullets rather than silently filtering/truncating them.


## GitHub publication preparation — November 7, 2026
Jacob authorized pushing this site and publishing through GitHub Pages in Kambourr/personal-site. Remote and authenticated owner verified. Pages setup returned HTTP 422: current plan does not support Pages for this private repository. Repository visibility remains private.
Configured Astro site/base for https://kambourr.github.io/personal-site/ and normalized internal base URLs. Source will be merged with a merge commit into main; built static output prepared on gh-pages. Publishing remains blocked until private-repo Pages is supported or Jacob authorizes a visibility change. Local preview URL now includes /personal-site/.
