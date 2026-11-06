# Handoff — Jacob Kambour personal hub

Start here. Planning: [docs/BRIEF.md](docs/BRIEF.md), [docs/PROGRESS.md](docs/PROGRESS.md), [docs/DECISIONS.md](docs/DECISIONS.md). Research memo: [docs/RESEARCH.md](docs/RESEARCH.md).

## Run

Node `>=22.12.0`. From `package.json`:

```sh
npm install
npm run check
npm run build
npm run preview
```

`npm run dev` is the local server. Do not invent other scripts.

## Stack

Astro `^7.4.7` (`package.json`) with `output: 'static'` (`astro.config.mjs`). No adapter. `site` / `base` unset until Pages is approved. `@astrojs/check` `^0.9.6`, TypeScript `^5.9.3`.

## Current layout (this branch)

First viewport: masthead (name, FP&A line, who-line “MS Finance and Analytics, Santa Clara · Sales and Delivery Advisor at Tesla”, LinkedIn, `mailto:jkambour@gmail.com`, GitHub as a **profile** link) plus featured Tesla FP&A work with a real screenshot of https://kambourr.github.io/tesla-fpa-agent/ and “Open live dashboard”. Experience, Education, and About are tabs, not a long first-screen stack.

**Caveat:** Jacob has not approved the visual design. The dashboard preview is a cropped live-page capture with leftover whitespace and an inner crop; do not treat it as a finished composition.

## Known tests (do not upgrade them)

Before the Gmail string swap: overflow was none at 1280×800, 1440×900, 1366×768, 390×844, and 375×812; the who-line, project visual, CTA, and contact were in the 1280×800 and 1366×768 first view.

After the Gmail swap: `astro check` and the static build passed; recaptured 1280×800 and 390×844 screenshots showed `jkambour@gmail.com` with no `jkambour@mail.grokbot.com` in `dist`. This is **not** a fresh five-size pass after that commit.

## Privacy (this hub only)

Public contact: [LinkedIn](https://www.linkedin.com/in/jacob-kambour-5558a2221/) and `mailto:jkambour@gmail.com`. That Gmail exception is approved for **this personal hub only**.

Still forbidden: phone, street address, unredacted résumé, GPA, Hillsdale operational numbers, and https://kambourr.github.io/hillsdale-study/. Tesla is one role (Sales and Delivery Advisor). `$1M+` is associated vehicle delivery value, not personal revenue; keep it off the first screen.

Do **not** edit the Tesla FP&A repo. It keeps its own no-private-contact policy.

## PR stack (nothing merged or deployed)

1. [#1](https://github.com/Kambourr/personal-site/pull/1) scaffold `cursor/astro-scaffold-4bd0` → `main`
2. [#2](https://github.com/Kambourr/personal-site/pull/2) homepage `cursor/homepage-sections-4bd0` → scaffold branch
3. [#3](https://github.com/Kambourr/personal-site/pull/3) contact `cursor/grokbot-contact-4bd0` → homepage branch (later superseded **on this branch** by Gmail)
4. [#4](https://github.com/Kambourr/personal-site/pull/4) redesign `cursor/editorial-first-view-4bd0` → contact branch (current)

No Pages, custom domain, or visibility changes without Jacob’s approval. If merges are ever approved: merge commits, not squash. Do not reset, rebase onto `main`, or force-push.

## Model policy (D14)

Coordinator: grok-4.7, medium, fast false. Coding workers: grok-4.6 medium only (`cursor-grok-4.6-medium`). Never fast, high, or xhigh. Never Claude, GPT, or another provider.

## Desktop

Sync of `/Users/admin/Desktop/personal-site` is done separately by the PM. No local worker. Do not touch the Mac.

## Source map

| What | Where |
| --- | --- |
| Copy | `src/content/site.yaml`, `work.yaml`, `experience.yaml`, `education.yaml` |
| Schema | `src/content.config.ts` |
| Page | `src/pages/index.astro` |
| Layout / CSS | `src/layouts/BaseLayout.astro`, `src/styles/global.css` |
| Masthead / featured / tabs | `src/components/Masthead.astro`, `FeaturedWork.astro`, `BackgroundTabs.astro` |
| Thumbnail | `src/assets/tesla-fpa-agent.png` (live-page capture, not generated) |

## Remaining

Jacob’s visual review of PR 4, then merge **only if he asks**. No new features in a handoff commit.
