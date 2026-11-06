# Jacob Kambour — personal site

Short recruiter hub for FP&A / finance roles. Live Tesla FP&A work stays at [kambourr.github.io/tesla-fpa-agent](https://kambourr.github.io/tesla-fpa-agent/) and is linked from this site, not rebuilt here.

Planning docs: `docs/BRIEF.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/RESEARCH.md`.

## Run locally

```sh
npm install
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Local server |
| `npm run build` | Static output in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Typecheck |

Requires Node 22+.

## Edit copy

Homepage text lives in YAML, not in the layout:

- `src/content/site.yaml` — name, hero, about, LinkedIn / GitHub
- `src/content/work.yaml` — selected work
- `src/content/experience.yaml` — roles
- `src/content/education.yaml` — degrees

Do **not** add street address, phone, personal email, a résumé file, GPA, Tesla Hillsdale operational numbers, or a link to `kambourr.github.io/hillsdale-study`.
