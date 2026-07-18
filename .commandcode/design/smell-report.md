# Smell Report — mhmzahran.com

**Mode:** `/design smell` · **Date:** 2026-07-18 · **Surface:** Night Lab portfolio (index + 404)

## Score: 6/10 — PRESENT

Four tells observed. The execution is cohesive and the motion discipline is real, but the two most expensive visual elements — the interactive background and the dark-mint palette — are the first guesses for the "vibe coder" domain. A stranger shown the page for two seconds would say "generated developer portfolio" before saying "medical student who researches compression."

## TL;DR

The site is well-built and internally consistent, but its signature elements are interchangeable with thousands of AI-generated dev portfolios: a particle-constellation canvas with cursor glow, mint-on-zinc color, Space Grotesk display. None of it is wrong; all of it is unchosen. The fix is not cosmetic — replace the centerpiece and palette with decisions that could only belong to this brief (medicine × PKM × compression research), and flatten the repeated one-card sections.

**Primary recommendation:** `/design refine` to replace the constellation form with a background built from his actual artifacts, then `/design relayout` for the card sections, `/design recolor` for the accent.

## Heuristic Scores

| # | Odor | Score | Key finding |
|---|---|---|---|
| 1 | Tech gradient | 1 | No blue-violet/indigo-cyan washes. The only gradient is a functional 8%-opacity cursor glow inside the canvas. |
| 2 | Generic tech hue | 0 | Mint (`#6EE7C8`) on near-black is the current generated dev-portfolio uniform — guessable from "vibe coder" alone, no tie to medicine/research/PKM. |
| 3 | Feature tile grid | 0 | Interests is a uniform 2×2 number-title-sentence grid. Hairlines and missing icons soften it; the rhythm is still the reflex. |
| 4 | Accent rail | 1 | No decorative side stripes on cards or callouts. |
| 5 | Unearned blur | 1 | One functional backdrop-blur on the sticky nav over a canvas. Suspicion logged, not counted. |
| 6 | Stat monument | 1 | No oversized number clusters. |
| 7 | Icon topper | 1 | No icons anywhere. |
| 8 | Bounce everywhere | 1 | All easing is expo-out; staggered delays; no elastic. |
| 9 | Default type | 1 | Space Grotesk + Plex Mono carry voice. Inter body flagged as suspicion (reflex choice on a brand surface), not counted. |
| 10 | Center stack | 1 | Split hero, left-aligned sections, ruled headers — no centered sameness. |

**Table: 8/10.** The overall score drops to 6/10 because the two remaining tells are structural, not cosmetic — see Priority Issues.

## Signals

- **PASS** — Motion discipline: expo-out easing, staggered reveals, `prefers-reduced-motion` honored in CSS, canvas, and tilt. Canvas pauses on hidden tab, DPR-capped, particle count scales with viewport.
- **PASS** — No prompt drift: name, sections, links, and content all from the real brief. Headshot present and personal.
- **PASS** — Interaction states authored: focus rings, mint selection, scroll-spy dot, hover lift/glow on cards, directory row sweeps.
- **WATCH** — Palette and centerpiece match the domain's first two guesses (dark + mint, particles + glow).
- **WATCH** — Three consecutive sections (Startups, Research, Leadership) are the same single-card module with swapped copy.
- **FAIL** — The most expensive visual idea on the page (the background) could be pasted onto any developer's portfolio unchanged and lose nothing. That is the definition of an unchosen signature element.

## What's Working

1. **Motion as character** — The reveal system (blur + rise + stagger) and the lerped cursor physics give the page a real temperament without a single bounce. Reduced-motion users get a complete static page.
2. **Label-level typography** — The Plex Mono metadata layer (kickers, nav, handles, colophon) reads as "lab equipment" and is the most authored typographic decision on the page.
3. **Content integrity** — Real name, real projects, real links, a real photograph. No lorem, no stock, no invented stats.

## Priority Issues

### P1 — The centerpiece is the median generated-portfolio move
**Evidence:** `Background.tsx` renders a particle-constellation network with connecting hairlines and a lerped glow orb. Interactivity was briefed; the *form* was not — constellation-plus-glow is the canonical particles.js reflex. It claims a "research/networks" rationale that is retrofitted; nothing in the visual references medicine, PKM, or compression.
**FIX:** Keep the interactivity, replace the form. Two directions that could only be his: (a) a small labeled knowledge graph built from his actual artifacts — Dietin, CW-Node, debate, PKM, coffee — whose nodes the cursor perturbs (his PKM interest made literal), or (b) a cursor-reactive ECG/trace line running behind the content (medicine made literal). → `/design refine` or `/design redesign`.

### P1 — Mint-on-dark is the domain default
**Evidence:** `--accent: #6EE7C8` on `--bg: #0C0D10` with mono metadata is the tailwind-emerald-on-zinc uniform. Correct per the letter of the brief, predictable by its industry.
**FIX:** `/design recolor` — keep the nocturnal lab base, but re-hue the accent to something with a personal reason: warm amber (lab lamp, technical coffee) or a desaturated clinical green (scrubs). Tint the neutrals toward the chosen hue so the dark itself becomes his.

### P2 — One-card-per-section reflex, three times
**Evidence:** Startups, Research, and Leadership are the identical `bg-raise` bordered card holding a single entry. A card that contains one thing, repeated, is an unchosen layout — and it flattens the hierarchy between a startup, a research project, and a volunteer role.
**FIX:** `/design relayout` — flatten to ruled records with differentiated hierarchy. The original spec already names the earned visual: the BPC-vs-quality plot belongs in Research, which breaks the repetition with substance instead of decoration.

### P2 — Interests reads as a feature-tile grid
**Evidence:** Uniform 2×2 tiles: mint index, title, one-line description. Competent, but the same rhythm as every "features" section ever generated.
**FIX:** Fold into the same `/design relayout` pass — a single ruled list with mono indices and varied line weights keeps the content while dropping the grid reflex.

## Suspicions (not counted)

- **Inter body** on a brand surface is the reflex choice; Space Grotesk + dark is itself becoming the generated-portfolio pairing. Optional `/design typeset` pass could give body copy a face with more character.
- **Frosted nav blur** is standard-issue; defensible over a canvas. A solid background with a hairline would be more committed.

## Next Modes

`/design refine` · `/design relayout` · `/design recolor` · (`/design typeset` optional)

---
*Generated with CommandCode — 2026-07-18. Report only; no design changes applied.*
