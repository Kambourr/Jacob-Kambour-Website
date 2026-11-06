# Personal site research memo — Jacob Kambour hub

**Date:** Friday, Nov 6, 2026 (America/Los_Angeles)  
**Purpose:** Inform structure, content, and build approach for a short personal hub site (local Desktop repo first; GitHub Pages later).  
**Method:** Live URL checks (`curl` HTTP status + page fetch). No visitor counts or uncited performance claims. On-page claims (e.g. “100k+ Installs”) are attributed to the site itself when quoted.  
**Constraints from Jacob:** Hub only (do not rehost every project). Link live FP&A dashboard. Do **not** publish street address, phone, personal email, or an unredacted résumé. Do **not** publish Tesla Hillsdale operational numbers (targets, weekly averages, drive counts, funnel figures, simulation probabilities). Design must not look like a generic AI landing page. First screen should make value obvious in ~30 seconds for an FP&A / finance recruiter.

---

## A) Reviewed sites

All URLs below returned **HTTP 200** when checked on Nov 6, 2026 unless noted. Dropped: `https://manu.zohrehvand.com/` (failed to load).

### Finance / FP&A / analyst sites

#### 1. Cici Kang — https://cicikang.blog/
- **Who:** Senior Financial Analyst / FP&A (Miami); M.S. Finance, University of Miami.
- **First screen (no scroll):** Name; role framing (“Senior Financial Analyst · FP&A”); city/languages; tagline about models, forecasting, variance, executive reporting; short philosophy / hospitality / finance path cards.
- **Section order:** Hero → short narrative (“Not a straight line”) → Experience (roles with bullets) → Education → Capabilities & toolkit → Writing (placeholder) → email contact.
- **Personal info included:** City (Miami), personal Gmail, LinkedIn (in page). **Omitted / light:** No phone observed; no résumé PDF link observed; no GitHub.
- **Projects:** Experience-led more than project cards; writing section stubbed (“posts coming soon”).
- **Visual tone:** Editorial / personal-brand; large name typography; narrative path emphasis.
- **Build/hosting clues:** Cloudflare; static-feeling HTML (no Next/`__NEXT_DATA__` observed).

#### 2. Harp Wasu — https://harpwasu.com/
- **Who:** Finance leader / FP&A / strategic advisor; MBA, Pepperdine; Director of Finance experience.
- **First screen:** Name; “Finance Leader | FP&A | Strategic Advisor”; MBA line; one-sentence value prop; CTAs (“View Experience”, “Download Resume”); headshot present in assets.
- **Section order (nav):** About → Experience → Skills → Contact (+ “Meet with me”).
- **Personal info included:** City-level locations on roles (e.g. Irvine, CA); LinkedIn; **phone and personal email on Contact**; résumé download CTA. **Heavy contact surface** relative to engineer hubs.
- **Projects:** Experience + quantified bullets; not a separate product gallery.
- **Visual tone:** Polished marketing / consultant one-pager; headshot; “Edit with” chrome suggests a site builder.
- **Build/hosting clues:** Cloudflare; hashed `/assets/*.css` + `x-deployment-id` — typical of Framer / similar hosted builders (not confirmed by a generator meta tag).

#### 3. Angel Alfaro — https://angelraulalfaro.com/
- **Who:** Senior Financial Analyst; MSF Georgetown; automation / modeling focus.
- **First screen:** Name; one-line positioning (modeling, AI-enabled automation, leadership); credibility chips (MSF Georgetown, years in finance, AI Implementation Lead).
- **Section order:** Hero → About (“Turning Data Into Decisions”) → capability cards → Work Experience → Portfolio → Skills & Tools → Academic Background → Get In Touch.
- **Personal info included:** LinkedIn; résumé referenced; contact via form/email affordance. **Explicit confidentiality note on portfolio:** “All examples use fully fictional data, never real company files.” Strong model for Jacob’s Hillsdale redaction later.
- **Projects:** Portfolio **cards** for automation demos (OPEX P&Ls, royalty model, leadership dashboard) with tool tags — links/showcases rather than dumping employer confidentials.
- **Visual tone:** Dense professional single page; finance + tech hybrid.
- **Build/hosting clues:** **`server: GitHub.com`** (GitHub Pages). HTML contained Astro-related markers.

#### 4. Cem Yarligas — https://www.cemyarligas.com/
- **Who:** Senior FP&A; EPM (Pigment); AI-driven finance; Boston area; MS Financial Analytics / FMVA framing on-page.
- **First screen:** Name; “FP&A · EPM · AI Finance”; nav (About, Resume, Projects, Writing, Contact); stat chips (years, domains, Pigment, degree); H1 + short positioning paragraph; **Boston, MA + Gmail + LinkedIn + Resume (PDF)** in the hero band.
- **Section order:** Hero/stats → What I do → Short summary → Selected roles → Skills → Writing → Contact → footer.
- **Personal info included:** City, personal email, LinkedIn, résumé PDF. No street address observed. Phone not emphasized like Harp’s site.
- **Projects:** Separate Projects + Writing IA; experience stays summary with “Full résumé →”.
- **Visual tone:** Clean multi-page professional site; photo; writing as credibility.
- **Build/hosting clues:** Cloudflare; hashed Vite-like `/assets/*` bundles; multi-route IA (`/about`, `/resume`, `/projects`, `/writing`, `/contact`).

#### 5. Aurokrishnaa Ravindran Lakshmi — https://aurokrishnaa.me/
- **Who:** Finance & analytics / quant-leaning analyst; MS Finance (Quant), MBA Finance; New York.
- **First screen:** Full name; “Finance & Analytics”; **Location New York**; **phone and personal email** prominently; Connect section; intro about modeling / research.
- **Section order:** Intro → Journey (education) → Career → Portfolio (project showcase with filters) → Research → Contact again.
- **Personal info included:** City, **phone, personal email** (high exposure). Useful as a **negative example** for Jacob’s privacy bar.
- **Projects:** Academic/portfolio cards (fixed income, CAPM, Black-Scholes, etc.) with tool tags; “View Details” pattern.
- **Visual tone:** Long single-page portfolio SPA; content-heavy.
- **Build/hosting clues:** **`server: GitHub.com`** (GitHub Pages); tiny shell HTML + `/assets/index-*.css` (client-rendered SPA).

### Engineer / designer hubs often cited as strong

#### 6. Brittany Chiang — https://brittanychiang.com/
- **Who:** Frontend engineer (Senior Frontend Engineer, Klaviyo on-page).
- **First screen:** Name; “Frontend Engineer”; one-line craft statement; sticky/side nav: About, Experience, Projects + socials (GitHub, LinkedIn, etc.).
- **Section order:** About → Experience → Projects (selected) → résumé PDF link + archive.
- **Personal info included:** Professional socials; **résumé PDF**. No phone/street. Email not plastered on first screen in fetch.
- **Projects:** Selected project list with short blurbs + stack tags; links out / to case material. On-page claims for older work (e.g. Halcyon “100k+ Installs”; old portfolio “6k+ stars”) — attributed to the site, not independently verified here.
- **Visual tone:** Minimal, typography-first, high signal-to-noise. Frequently cited as the recruiter-friendly one-pager pattern.
- **Build/hosting clues:** Vercel; Next.js (`__NEXT_DATA__` / `next/static`).

#### 7. Paco Coursey — https://paco.me/
- **Who:** Interface craftsman; Webmaster at Linear (on-page); previously Vercel design system/work.
- **First screen:** Name; short craft manifesto; current role; past context — **no hero illustration dump**.
- **Section order:** Intro → Building / Projects (short linked items) → Writing → Now → Connect.
- **Personal info included:** Professional email (`p@paco.me`), GitHub/X-style handles. No phone, no résumé, no city required.
- **Projects:** Sparse, curated links (e.g. cmdk, Writer) — hub to work, not a case-study novel on the homepage.
- **Visual tone:** Extreme restraint; text-first; speed as aesthetic. Best “anti–AI-slop” reference.
- **Build/hosting clues:** Vercel; Next.js.

#### 8. Lee Robinson — https://leerob.com/
- **Who:** Engineer and writer; ML at SpaceX; formerly Cursor / Vercel (on-page bio).
- **First screen:** Short identity line + 1–2 paragraph bio; then Notes / writing index. Illustration, not a product collage.
- **Section order:** Bio → evergreen Notes → dated writing (blog-style).
- **Personal info included:** Professional email in bio (`lee@leerob.com`); no phone/street. Site is writing-led, not job-application led.
- **Projects:** Writing and notes *are* the portfolio.
- **Visual tone:** Minimal serif/editorial hub. Lesson for Jacob: identity in one line, then proof.
- **Build/hosting clues:** Vercel; Next.js (prerender headers).

#### 9. Josh W. Comeau — https://www.joshwcomeau.com/
- **Who:** Developer educator; interactive CSS/animation writing.
- **First screen:** Name branding + featured articles/tutorials list (teaching as proof).
- **Section order:** Content-first homepage; About elsewhere.
- **Personal info:** Low contact density on homepage; product is the blog.
- **Projects:** Articles with interactive demos — not a card grid of employer work.
- **Visual tone:** Warm, distinctive, playful — but **specific**, not template-generic.
- **Build/hosting clues:** Vercel; Next.js.
- **Relevance to Jacob:** Copy the idea of **proof artifacts**, not the blog-as-business model.

#### 10. Rauno Freiberg — https://rauno.me/
- **Who:** Interaction designer working with Vercel / Devouring Details (on-page).
- **First screen:** Name + one-sentence identity; links into Craft / Projects / Notes.
- **Section order:** Identity → craft/projects/notes destinations.
- **Personal info:** Social/GitHub links; craft-forward, not résumé-forward.
- **Projects:** Curated destinations; site itself demonstrates craft.
- **Visual tone:** Highly crafted interactions; dark, atmospheric. **Do not copy complexity** for an FP&A hub — copy the clarity of “who + where to click.”
- **Build/hosting clues:** Vercel; Next.js.

#### 11. Joshua Wolk — https://www.joshuawolk.com/
- **Who:** Design Engineer at Vercel (on-page).
- **First screen:** “Hi, I'm Josh. Now in New York.” + role line. Extremely short.
- **Section order:** Minimal home; writing and other routes in nav.
- **Personal info:** City-level only (“New York”); no phone/email dump on first screen in fetch.
- **Visual tone:** Ultra-minimal Vercel-adjacent aesthetic.
- **Build/hosting clues:** Vercel; Next.js.

#### 12. Manuel Moreale — https://manuelmoreale.com/ (home redirects to latest post)
- **Who:** Freelance developer/designer; long-running personal blog.
- **First screen behavior:** Root **302 → latest essay** (checked); About at `/about` with TL;DR + extended bio + `hello@manuelmoreale.com`.
- **Personal info:** Professional-ish personal email; Italy residency stated; explicitly no analytics trackers (on-page stance).
- **Visual tone:** Anti-trend, writing-first, no JS-flex portfolio gimmick.
- **Build/hosting clues:** nginx; independent host. Lesson: speed and honesty over chrome.

### Jacob’s existing live artifact (context, not a “personal site”)
- **Tesla FP&A Agent:** https://kambourr.github.io/tesla-fpa-agent/ — **HTTP 200**, `server: GitHub.com` (GitHub Pages). Dashboard should remain the deep link; hub should **card-link** it, not reimplement it.

---

## B) Patterns (synthesis)

### What successful personal sites put on the first screen
1. **Name**
2. **One clear line of work** (role + domain) a stranger can repeat
3. **One proof path** (featured project, experience jump, or writing)
4. **2–4 outbound trust links** (LinkedIn, GitHub, résumé *if* they choose) — not a wall of icons

Finance sites that work for hiring (Cici, Angel, Cem) lead with **FP&A / modeling / systems** language, not a long life story. Engineer sites that work for hiring (Brittany, Paco) lead with **craft + selected work**, not biography scrolls.

### Standard information architecture
Recurring IA (even when implemented as one page with anchors):

| Block | Job |
| --- | --- |
| Hero | Who + what + primary CTA |
| Selected work / Projects | 2–5 proof items with links |
| Experience (short) | Current/recent roles, not full résumé dump |
| About (short) | 3–6 sentences max on homepage |
| Education / credentials | Compact |
| Writing (optional) | Only if real posts exist |
| Connect | LinkedIn / GitHub / optional professional email |

Multi-page variants (Cem): `/`, `/projects`, `/writing`, `/about`, `/contact`, `/resume`.

### What they include vs omit
- **Often include:** Name, role, city/region (optional), LinkedIn, GitHub (builders), selected projects, short about, education.
- **Mixed:** Personal Gmail, phone, headshot, public résumé PDF — common on finance sites, rarer on elite engineer hubs.
- **Usually omit:** Street address, family details, full transcript, every internship bullet, confidential employer metrics.
- **Strong positive pattern (Angel):** State that demos use **fictional / redacted** data when employer work cannot be shown raw.

### How projects are presented
- **Cards with 1–2 sentence outcome + stack tags + external link** (Angel, Brittany, Auro).
- **Deep case studies** only when the person sells design/process (less necessary for Jacob’s hub).
- **Hub → live demo** is better than rehosting (Paco/Brittany link out; Jacob already has a live FP&A site).

### Visual tone that ages well
- Typography-first, generous whitespace, restrained color, fast load.
- Distinctive but quiet — not purple-gradient “AI SaaS” heroes, not Lorem/feature-grid templates, not autoplay video walls.
- Mobile-readable single column; sticky minimal nav optional.

### What to avoid
- Generic AI landing pages (gradient blobs, “Unlock your potential,” fake social proof, stock dashboard screenshots).
- Long biography scrolls before any proof.
- Cluttered nav (10+ items) or icon farms.
- Publishing private contact details or confidential employer numbers.
- Claiming hand-coded everything when AI assisted (honesty gap).
- Broken project URLs (Jacob’s notes previously pointed at `kambourr.github.io/hillsdale-study`, which 404’d earlier — do not Featured-link dead paths).

### How to build effectively (especially for GitHub Pages later)
- Prefer **static output** (HTML/CSS/light JS) that GitHub Pages can serve from `/docs` or `gh-pages` or root.
- Keep content in markdown or simple data files so agents can edit copy without redesigning.
- One custom domain later is optional polish; `username.github.io` or `username.github.io/personal-site` is fine for v1.
- Match the **calm paper/dashboard craft** already used on the Tesla FP&A Pages site rather than introducing a second visual language.
- Ship a thin homepage first; add Hillsdale only after redaction approval.

---

## C) Recommended IA and page inventory for Jacob

### Positioning (first ~30 seconds)
**Primary audience:** FP&A / finance analyst / internship recruiters.  
**Hero message (directional, to refine in BRIEF.md):** MS Finance & Analytics (Santa Clara / Leavey) · FP&A and financial analysis · live public Tesla FP&A agent · Tesla sales & delivery + Blendid financial analyst internship.  
**Primary CTA:** Open the FP&A agent. **Secondary:** LinkedIn · GitHub.

### Site type
**Short hub**, not a rehost of every project and not a full online résumé.

### Recommended pages (v1)
1. **`/` (Home)** — only required page for launch  
2. Optional later: **`/projects/hillsdale`** (or a homepage card only) — **redacted** public-safe version, after Jacob approves copy  
3. Optional later: **`/colophon`** or footer note on stack — skip unless useful

No blog required for v1.

### Homepage section order
1. **Hero** — Name; one-line role; 2–3 sentence proof; buttons: FP&A Agent · LinkedIn · GitHub  
2. **Selected work (cards)**  
   - **Tesla FP&A Agent** → https://kambourr.github.io/tesla-fpa-agent/ (live dashboard; every figure checked by code — use Jacob-approved wording only)  
   - **Hillsdale study** — placeholder card *or omit until redacted*; method/attention insight only; **no** targets, weekly averages, drive counts, funnel rates, simulation probabilities  
   - Optional third card only if another public-safe piece exists  
3. **Experience (compressed)** — Tesla (Sales & Delivery Advisor / title as Jacob confirms); Blendid Financial Analyst Intern (3 bullets max); skip Bay Club detail on the hub or one line each  
4. **Education** — MS Finance & Analytics, Santa Clara; undergrad as Jacob wants public (GPA only if he confirms)  
5. **About (short)** — discipline / ops + finance interest; no life story  
6. **Connect** — LinkedIn https://www.linkedin.com/in/jacob-kambour-5558a2221/ · GitHub https://github.com/Kambourr · optional contact form or professional inbox **later** (not personal Gmail/phone on-page)

### Explicitly do **not** put on the site
- Street address, phone, personal email  
- Unredacted résumé PDF  
- Tesla Hillsdale confidential operational numbers listed in Goals  
- Fake metrics, testimonials, or “AI-powered” buzzword hero

### Visual direction
- Calm, typography-led, light/dark optional (consistent with FP&A agent paper theme)  
- Project cards with crisp titles + one sentence + “Open →”  
- No stock photos of skylines/robots; no Framer-template gradients  
- Prefer looking closer to **Paco/Brittany restraint + Angel’s finance proof cards** than to **Harp/Auro contact-heavy résumés-on-the-web**

---

## D) Recommended build approach

### Stack (GitHub Pages–friendly, handoff-friendly)
**Recommendation for v1:** Static site generated with **Astro** (static output) **or** plain HTML + minimal CSS if speed-to-ship matters more than components.

| Option | Pros | Cons |
| --- | --- | --- |
| **Astro → static** | Clean components, markdown content, excellent Pages fit; Angel’s Pages site showed Astro markers | Slightly more tooling than raw HTML |
| **Plain HTML/CSS** | Fastest for agents; zero build mystery on Pages | Harder to keep multi-page DRY |
| **Next.js on Vercel** | What Brittany/Paco/Lee use | Extra host; not needed if goal is GitHub Pages later |
| **Framer/Webflow** | Pretty quickly | Worse for agent handoff + git history on Desktop repo |

**Default call:** **Astro static** in the Desktop `personal-site` repo, `output: 'static'`, deploy later to GitHub Pages (`Kambourr.github.io` user site or project pages). Keep the FP&A agent repo separate; hub only links.

### Suggested folder layout (local Desktop repo → GitHub later)
```text
personal-site/
  BRIEF.md              # goals, audience, must/must-not, links
  PROGRESS.md           # dated log; blockers; next actions
  DECISIONS.md          # ADR-style choices (stack, IA, privacy)
  RESEARCH.md           # copy or link this memo
  README.md             # how to run / deploy
  public/               # favicon, og image, static assets
  src/
    pages/index.astro   # home
    components/         # Hero, ProjectCard, Experience, Footer
    content/            # projects.md / projects.ts (editable copy)
    styles/global.css
  astro.config.mjs
  package.json
```

### Docs discipline (same path as prior FP&A work)
Keep these updated every work session so another agent can take over without chat history:

1. **BRIEF.md** — audience; hero copy; approved links; privacy red lines (Hillsdale numbers; no phone/email/address/unredacted résumé); definition of done for v1  
2. **PROGRESS.md** — chronological log (research done → IA locked → scaffold → copy → polish → Pages deploy)  
3. **DECISIONS.md** — stack choice, IA, what is in/out of v1, Hillsdale deferred, domain deferred, etc.

Optional: `COPY.md` for paste-ready LinkedIn + site strings once approved.

### Build sequence (effective, low waste)
1. Lock BRIEF + IA (this memo)  
2. Scaffold Astro (or HTML) with Hero + 1 project card (FP&A) only  
3. Add Experience/Education/Connect  
4. Visual pass for non-generic look (type, spacing, one accent)  
5. Accessibility + mobile check  
6. Only then: GitHub remote + Pages  
7. Hillsdale card after redaction workshop with Jacob  

### Usage note (from owner)
Stop coding work if weekly usage approaches **50%**; keep docs current so a later session continues from PROGRESS.md.

---

## Open questions (only if blocking)

None block the recommended IA or stack. Non-blocking follow-ups for Jacob later:
1. Exact public Tesla job title string (“Sales and Delivery Advisor” vs other LinkedIn wording).  
2. Whether undergrad GPA should appear on the hub.  
3. Whether Hillsdale appears in v1 as “Coming soon / redacted case study” or is omitted until copy is approved.  
4. Custom domain now vs after GitHub upload.

---

## Sources checked live (Nov 6, 2026)
- https://cicikang.blog/  
- https://harpwasu.com/  
- https://angelraulalfaro.com/  
- https://www.cemyarligas.com/  
- https://aurokrishnaa.me/  
- https://brittanychiang.com/  
- https://paco.me/  
- https://leerob.com/  
- https://www.joshwcomeau.com/  
- https://rauno.me/  
- https://www.joshuawolk.com/  
- https://manuelmoreale.com/ (+ `/about`)  
- https://kambourr.github.io/tesla-fpa-agent/  
- Failed: https://manu.zohrehvand.com/
