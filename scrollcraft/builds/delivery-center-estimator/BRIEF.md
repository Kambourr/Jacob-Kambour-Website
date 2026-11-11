# Delivery Center Estimator case study: brief

**Self-authored under explicit creative delegation.** Jacob's instruction: "use claude code with the scrollcraft skill to add the delivery center estimator to the website". No interview was run and no user quotations below are invented. Standing decisions recorded in HANDOFF.md, DESIGN.md and scrollcraft/builds/portfolio-refinement/BRIEF.md are treated as evidence; everything else is labelled as an authored decision.

## Scope and constraints (evidence)
- Addition, not redesign: keep petrol/mint/cream, Inter + IBM Plex Mono, the existing collapsible navigation, new-tab project links.
- Literal recruiter-facing headings (DESIGN.md, Nov 6): Project overview, Project objective, How it works, Accuracy & limitations, What the project demonstrates, Project links.
- Real imagery only. No kie.ai, no generated assets, no paid services.
- Independent public-data work. No Tesla internal data, no internal or personal delivery-volume figures, no endorsement claim. Jacob's Tesla role is Sales and Delivery Advisor only.
- The estimator repository is private: no source link, no "open source", no app download.
- Every figure on the page comes from the app's own screen or the estimator repo's README/docs and is labelled a model estimate from public data.

## The eight topics
1. **Vibe (authored):** precise, quiet, analytical, inspectable. References: a surveyor's field notebook; an annotated equity research exhibit; a museum label set beside a working instrument.
2. **Journey (authored, following the existing case-study order):** what the tool is → the question it answers → read one real ZIP from country to dashboard → how the model is built → the public sources → comparing two ZIPs → how it is checked → limitations → links.
3. **Energy (authored):** calm arrival, a short plain question, the largest and slowest movement in the middle (the drill-down), then progressively quieter factual sections, ending on a settled links plate.
4. **Feeling and the one moment:** see feeling curve and peak below.
5. **Something no site they have seen does (authored):** the page reads one ZIP code the way an analyst would. The national ZIP map zooms into San Mateo 94402 under the reader's scroll, then the app's real dashboard slides in and a reading frame walks down its actual figures, one at a time, with an explanation of each.
6. **Range (evidence):** existing premium-minimal Stokt-derived system, light editorial sections alternating with petrol. Unchanged.
7. **One world or distinct scenes (authored):** distinct scenes. Only the peak holds the frame; everything else is natural flow so a recruiter can skim.
8. **Assets (evidence):** the installed app (~/Applications/DeliveryCenterEstimator.app). Captured from the app's own localhost server with headless Chrome at 1440 × 920 CSS px, 2× scale: national ZIP map, Bay Area map with the 94402 catchment painted, the 94402 dashboard panel as a separate element capture, the full 94402 window, and the 94402 vs 78701 compare window. The map plates hide the app's floating chrome so they can act as clean background planes; nothing is drawn or edited into any capture. The dashboard capture is cropped above the "10-year cash flow" and "Nearby centers" sections, so no per-center volume figures appear anywhere.

## Feeling curve (written before the score)
1. **Orientation:** a real tool, a real question. Layered hero: map plate, dashboard panel, label note.
2. **Curiosity:** the question stated in one sentence, set large, nothing else moving.
3. **Understanding (peak):** country → one ZIP → its numbers, read in order.
4. **Clarity:** four plain steps from public data to cash flow; a connector rule wipes across them.
5. **Breadth / trust:** the public sources pass sideways as a labelled set.
6. **Judgment:** one ZIP becomes two; a wipe turns the single dashboard into the comparison.
7. **Confidence:** deterministic, tested, every ZIP precomputed (41,034 counts up once).
8. **Candor:** what the model cannot know.
9. **Resolve:** a quiet links plate. The page stops on a decision, not a fade.

**Peak sentence:** "It's the page where scrolling zoomed from a map of every US ZIP into one San Mateo ZIP, and then walked me down that ZIP's cost per delivery, cost drivers and NPV."
**Tell-someone sentence:** "It's the site where I watched one ZIP code get read like an investment memo."
**Authored silence:** the Project objective section is deliberately still (no parallax, no reveal) so the peak's motion has something to be a change from.

## Grammar
**Custom: annotated instrument case study.** A real tool presented as a specimen with labels. Navigation: the site's existing compact disclosure (required by scope). Hero: dimensional plates of real captures, natural flow. Sequence: natural-flow sections with exactly one pinned reading act. Close: project links plate on petrol.
Bans: div-built fake UI, invented or rounded-up figures, scrub video, kinetic headlines, spotlight/magnet, scroll cues, section counters outside the peak's step ladder (where sequence is the information), essential copy hidden behind motion.

Why not the eight stock grammars:
- Filmic one-shot: no authored footage; delays a recruiter's access to facts.
- Chaptered editorial: closest fit, but it bans the fixed bar and the scrub hero; the site's nav must stay, so it would be broken from the first screen.
- Live surface: would mean rebuilding a private app in markup or painting its surface. Not honest without running the real model.
- Continuous world: one fixed canvas with no sections contradicts the established case-study headings and skim-ability.
- Typographic poster: wastes the strongest evidence, the real captures.
- Gallery / catalog: one product, not a range.
- Split stage: comparison is one beat (compare mode), not the whole argument.
- Rhythmic cutlist: wrong energy for a finance portfolio.

## Fingerprint gate (against every row in scrollcraft/FINGERPRINTS.md)
| Dimension | portfolio-refinement | this build | differs |
|---|---|---|---|
| Grammar | Factual portfolio exhibit | Annotated instrument case study | yes |
| Nav | Existing collapsible right disclosure | Same (required by scope) | no |
| Hero device | Real dashboard + workflow note on drafting planes | Map plate + dashboard element cutout + ZIP label at three parallax rates | yes |
| Act-sequence shape | Identity, credentials, inspector, resume, about, contact | Parallax, still, pinned drill-down, reveal, pan, wipe, count, flow, plate (9 sections, 7 engine acts, 13.4 vh desktop; pan span 2.8 keeps it out of the 13.6–13.8 vh band) | yes |
| Close | Named email plate | Project links plate | yes |
| Signature | Selectable workflow inspector | Scroll-driven ZIP drill-down with a reading frame over real dashboard figures | yes |
Result: 5 of 6 differ. Passes.

## Layer contract (hero)
| Plane | Asset | Movement | Rule |
|---|---|---|---|
| Far | Bay Area map plate with 94402 catchment (real capture) | parallax 0.5, slow | Masked edges, never under the headline |
| Subject | 94402 dashboard panel (real element capture) | parallax −0.9 | Overlaps the map's right edge; corners rounded to the app's 20 px radius |
| Near | Mint label note: "94402 · San Mateo, CA / model estimate from public data" | parallax −1.6 | Overlaps panel's lower-left corner; never covers figures being discussed |
| Type and controls | Semantic HTML | static | Headline and links fully readable from first paint |
Mobile: map plate full width, panel overlapped at 64% width, note in flow below. Reduced motion: same composition, all transforms off.

## Score
| Act | Beat | Device | Why |
|---|---|---|---|
| 1 Hero | Orientation | `parallax` (three real planes) | Depth from real evidence, not decoration |
| 2 Project objective | Curiosity | `flow` + `in`, still | Authored quiet before the peak |
| 3 Reading one ZIP | Understanding (peak) | `pin` span 5, bespoke drill-down from `--sc-p` | Largest span; scroll is the analyst's reading order |
| 4 How it works | Clarity | `reveal` (connector wipe across four steps) | A process becomes connected |
| 5 Public data sources | Breadth | `pan` rail, one label schema per source | Lateral = a set of inputs, not a hierarchy |
| 6 Compare two ZIPs | Judgment | `reveal` wipe, single dashboard → compare | A change of state |
| 7 Built to be checked | Confidence | `count` (41,034, a real figure) + flow | One real number, counted once |
| 8 Accuracy & limitations | Candor | `flow` | Reading, not watching |
| 9 Project links | Resolve | static plate | Ends on actions |
Four-plus families (parallax, flow, pin, reveal, pan, count); no family twice in a row; no scrub; peak has the largest span.

## Verification plan
npm run check and build; skill harness shoot.mjs at 1440 × 900, 390 × 844 and reduced motion against the production preview; manual frames inside the peak; overflow, image loads, link targets, console. No physical phone available.
