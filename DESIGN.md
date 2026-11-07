# Jacob Kambour — Stokt-inspired portfolio direction

Status: implemented directly in Astro by Codex agents at Jacob’s request. Superdesign is no longer part of the build workflow.
Reference: https://wearestokt.com/ (inspected live November 6, 2026).

## Character and information
Borrow the floating inset navigation, regular-weight oversized grotesk headings, uppercase monospaced menu and parenthesized labels, expansive project imagery, generous section rhythm, and understated rounded corners. Adapt the agency story into a personal finance/analytics portfolio. Identity, education, work proof and contact must be apparent within 15 seconds. No Stokt logos, client work, text, proprietary assets or awards.

## Color roles
- Hero/footer canvas: petrol #092F33; deepest nav #071E22.
- Light section canvas: warm white #F2F1EA; raised panel #FFFFFF.
- Light-section text #102D30; secondary #526668; border #CCD4D0.
- Dark-section text #F2F1EA; secondary #B8CCC8; border #35575A.
- Primary action on dark: ice mint #C8E6DC with #092F33 text.
- Primary action on light: #092F33 with #F2F1EA text.
- Accent for rules, diagrams and active controls: mint #9BD4C2; never small text on light.
- Success: #1C6555 on light, #ACDFC9 on dark. Warning #855A10 on light. Error #A73838 on light. Use only if truthful status needs them.
No theme toggle planned; alternating dark and light sections are deliberate compositions. One subtle teal hero illumination allowed, no multicolor gradients or gradient type.

## Typography
Observed reference fonts: PP Neue Montreal Regular and PP Supply Mono Regular. Do not download or reuse those files without appropriate rights. Draft substitutes: Inter 400/500/600 for headings and body; IBM Plex Mono 400/500 for nav, labels and metadata. No serif.
Type scale: 12px label (1.3), 14px metadata (1.4), 16px body (1.55), 20px lead (1.45), 28px subsection (1.15), 48px section (1.05), 80px hero (0.98), 104px large closing type (0.98). Hero clamp 44–88px, section clamp 32–60px. Display tracking -0.045em; mono tracking 0.03em. Body max 65ch. Main heading normal weight, never ultra-bold.

## Spacing and layout
4/8px scale: 4,8,12,16,24,32,48,64,96,128. Content max 1280px. Desktop gutters 32–64px, mobile 20px. Hero approximately 760px high on laptop, contents visible immediately. Navigation inset 24–32px desktop, 12–16px mobile; 72–80px high desktop, 60px mobile. Section spacing 96–128px desktop, 56–72px mobile. No horizontal scroll. Hero is intentional 55/45 composition; real featured-work preview on right within first view, supporting detail below.

## Shape and depth
Radius 8px controls, 12px nav, 16px artwork panels. Thin borders; no pill for every label. One restrained artwork shadow 0 24px 64px rgba(0,0,0,.2). Float nav with dark translucent fill; other sections remain opaque. Avoid uniform bento-card grids.

## Components and behavior
Navigation: text-only Jacob Kambour identity, centered WORK / BACKGROUND / ABOUT, right GET IN TOUCH arrow button. Short optional vertical text-roll hover with one accessible label. Mobile uses a labelled Menu/Close toggle, Escape handling, aria-expanded, and closes on selection. Keyboard focus ring 2px with 4px offset. Anchor scroll offset accounts for nav.
Buttons: 44px min hit area, 12px uppercase mono and small arrow; primary solid, secondary outlined, quiet text. Hover changes surface/arrow position subtly; disabled has no hover and is used only if genuinely needed. Avoid disabled placeholders.
Project: one large artwork stage using actual Tesla screenshot with correct aspect/crop, title, short summary and links; short full-width follow-on rows can be added as projects ship. No coming-soon filler. Hero preview also clearly named and linked.
Background: visible experience rows and education summary, not hidden essential facts. About brief and honest. Footer big LET’S CONNECT with email, LinkedIn and GitHub. Resume download excluded by current policy.
Links: use real approved destinations, distinguish external links, accessible names. No forms required.

## Imagery, motion and claims
Final content is the existing real dashboard screenshot; no fake portrait or copied Stokt artwork. Optional original CSS/SVG source-to-verification graphic may complement screenshot; do not fabricate live financial figures or imply affiliation with Tesla. No 3D logo imitation.
Motion: 180–300ms UI transitions and optional gentle decorative drift; content is visible from first paint. prefers-reduced-motion disables transforms/transitions and reveals all content. No forced cursor, audio, scroll-jacking or preloader.
Copy: Jacob is an MS Finance and Analytics student, Tesla Sales and Delivery Advisor, previously Blendid Financial Analyst Intern. Tesla FP&A project is independent public-data historical backtesting plus commentary verification. No invented availability, proficiency scores, business outcomes, GPA, private operational figures, phone or street address.


## Direct recruiter-facing copy — November 6, 2026
Jacob rejected slogans and AI-sounding quips. Use literal section headings and factual supporting text. Homepage: Projects, Experience & Education, About me, Contact me. Case study: Project overview, Project objective, How it works, Accuracy & limitations, What the project demonstrates, Project links. Removed curiosity/starting-point/through-line/learning-the-numbers wording.
