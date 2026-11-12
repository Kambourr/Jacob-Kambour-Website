# Jacob Kambour — personal website

**Live site: [kambourr.github.io/Jacob-Kambour-Website](https://kambourr.github.io/Jacob-Kambour-Website/)**

Portfolio of Jacob Kambour, an MS Finance and Analytics student at Santa Clara University focused on FP&A and financial analysis. The homepage puts experience, education and projects on one screen; below it, a terminal-style chart shows the Q3 2026 revenue bridge from the Tesla FP&A Agent.

## Pages

| Page | What it shows |
| --- | --- |
| [Home](https://kambourr.github.io/Jacob-Kambour-Website/) | Experience, education, projects and contact links |
| [Projects](https://kambourr.github.io/Jacob-Kambour-Website/projects/) | Both projects in more detail |
| [Tesla FP&A Agent](https://kambourr.github.io/Jacob-Kambour-Website/work/tesla-fpa-agent/) | Case study: forecasts and variance analysis from Tesla's public filings, with AI-written commentary checked against the source figures |
| [Delivery Center Estimator](https://kambourr.github.io/Jacob-Kambour-Website/work/delivery-center-estimator/) | Case study: cost per delivery and 10-year returns for a delivery center in any US ZIP code, from public data |

The live Tesla FP&A Agent dashboard is a separate project: [kambourr.github.io/tesla-fpa-agent](https://kambourr.github.io/tesla-fpa-agent/).

Both projects are independent work built from public data. They are not affiliated with or endorsed by Tesla.

## Built with

[Astro](https://astro.build/) static site generator and TypeScript, with plain CSS. No client framework. Hosted on GitHub Pages.

## Run locally

Requires Node 22.12 or later.

```sh
npm install
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Start a local dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Type-check the project |

## Project structure

- `src/pages/` — the homepage, Projects page and case studies
- `src/content/` — site text in YAML (`site.yaml`, `experience.yaml`, `education.yaml`, `work.yaml`), validated by `src/content.config.ts`
- `src/components/`, `src/layouts/`, `src/styles/` — shared navigation, page layout and styles
- `src/assets/` — project screenshots, optimized at build time
- `DESIGN.md`, `docs/` — design notes

## Deployment

The site is built with `npm run build`, and the contents of `dist/` are published to the `gh-pages` branch, which GitHub Pages serves.

## Contact

[jkambour@gmail.com](mailto:jkambour@gmail.com) · [LinkedIn](https://www.linkedin.com/in/jacob-kambour-5558a2221/) · [GitHub](https://github.com/Kambourr)
