# Dao Design System

Dao is a sixteen-seat chef's tasting menu restaurant on Koh Phangan, Thailand, led by Chef Nir
Mesika. One communal table, one arrival time, one fixed multi-course menu adapted per seat, wine
pairing as the only drinks option. No a la carte, no cocktail bar. The cuisine is framed as Thai
and Levantine: Nir's Israeli and Moroccan cooking meeting Thai produce and Thai suppliers.

The name is Taoist, "the path". It is held as structure, not decoration. The site is shaped like a
progression and never explains that it is one. The 道 character does not appear anywhere, and
neither do philosophy quotes or yin-yang graphics.

The real argument for the communal table is biographical, not philosophical. Nir grew up in a
house where his grandmother raised nine children and the older siblings cooked for the younger.
The shared table is how he was fed.

## The product

One product: the website. Four pages, three nav links plus the mark.

| Route | Holds | Ground |
|---|---|---|
| `/` | The invitation: hero, the format stated plainly, day into night, Nir short, reserve | Light with one dark night section |
| `/story` | Nir's path (Israel, Milan, New York, the island), the family, press, the artisans | Daylight |
| `/evening` | The format and the menu as one narrative, wine pairing, music | Light into dark |
| `/reserve` | Stepped booking, the facts designed as an answer-engine surface, FAQ | Dark |

The page has to answer three objections in this order: what is this, will I be uncomfortable, is
it worth the money. Nothing else is the job.

## Sources

- **Codebase / working folder**: `dao-design/` (mounted locally, read-only). Contains
  `design-brief.md` (the current internal brief and the source of truth for every decision
  recorded here), `client/Design Brief_ Dao.pdf` (the client's original brief, as delivered),
  `client/logo/` (the mark in black and white SVG) and `client/photos/` (thirteen frames by Dor
  Bayder).
- **Press source material**: chefmesika.com/press. Quotes in this system are placeholder; real
  lines must be pulled verbatim with publication and date.
- No Figma file and no production codebase were provided. There is no existing component library,
  so the components here were authored from the brief's real surfaces (nav, reserve trigger,
  facts, FAQ, press, booking flow, photographic frames) rather than from a source inventory.
- The client's inspiration links and the current Wix site were deliberately set aside.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `grid.css`, `texture.css`, `motion.css`, `base.css` |
| `guidelines/dao-system.html` | **The system on one sheet**: palette, type scale, grid, paper grain. Start here. |
| `guidelines/*.html` | Foundation specimen cards (Colors, Type, Grid, Spacing, Brand) |
| `components/core/` | `Button`, `Rule`, `PaperGround`, `ImageFrame` |
| `components/navigation/` | `NavBar`, `NextDateTooltip` |
| `components/editorial/` | `FactRow`. Quotes, FAQ and menu treatments stay open, by design |
| `components/forms/` | `BookingStep`, `TextField`, `ChoiceGroup` |
| `ui_kits/website/` | Click-through recreation of all four pages |
| `assets/fonts/` | Season Mix Light, Regular and Medium (trial OTF, as supplied) |
| `assets/texture-limewash.png` | The limewash wall photograph used as the page surface |
| `assets/logo-black.svg`, `assets/logo-white.svg` | The supplied mark, 126 × 60 |
| `assets/photos/` | The thirteen placeholder frames, renamed by subject |
| `SKILL.md` | Agent-skill entry point |

### Intentional additions

No source defined a component inventory, so the set above was derived from the surfaces the brief
describes. Two entries are worth naming explicitly:

- `NextDateTooltip` — the brief specifies a follow-cursor next-available-date tooltip on every
  reserve button site-wide. It is a real requirement, not a convention.
- `PaperGround` — the grain layer plus the light/dark token flip needs to live in one place, or
  every section reimplements it.

Nothing else was added. There is no Toast, Avatar, Tabs, Modal or Tooltip family, because the
site has no surface that needs one.

### Deliberately not componentised

Some things are better left as treatments designed per page. **Press quotes, the FAQ, the menu
narrative and the team block are not components.** They are typographic arrangements built
directly from the tokens, and locking them into a props contract this early would freeze
decisions that should still be argued page by page. The rules that govern them live in this
document; the execution is per page.

`FactRow` is the one exception in that territory, because the reserve page's facts block is a
decided design and doubles as the answer-engine surface, where consistency is the point.

---

## Content fundamentals

**Tone.** Warm, grounded, unhurried, humbly confident. A working restaurant talking, not a brand
performing. Plain sentences that name the thing.

**Person.** Mostly third person about Nir and the restaurant, second person when addressing a
decision the reader is making. "You will be seated with people you have not met." Never "we" as a
corporate voice; "we" only where a human at the restaurant would say it ("Tell us at booking").

**Casing.** Sentence case everywhere in headings and body. Uppercase exists only in the tracked
Inter 11 metadata that sits in corners, footers and button labels. Nothing is title-cased.

**Punctuation.** No em dashes anywhere, in any copy. Commas and full stops do the work. Numerals
for facts (16 seats, 18:30, THB 3,900), words when a number is part of a sentence's rhythm
("sixteen-seat chef's table", "nine children").

**Emoji.** Never. Not in copy, not in UI, not in documentation.

**What never appears:**

- Eyebrows and kickers. No small-caps label, category tag or numbered marker above a headline.
  Metadata that earns its place goes somewhere structural instead: a corner, a bottom meta line,
  a footer bar, a caption under a hairline rule.
- Balanced-aphorism sentences, two clauses with a reversal.
- Poetic pointing at things without naming them, and metaphorical verbs doing the work.
- Course numbering. The menu is a narrative, not an 01 to 05 list.
- Scarcity claims in words. Scarcity is stated by exposing the next available date, never by
  saying "limited seats".

**Examples that are right:**

> Dinner as a journey,<br>a sixteen-seat chef's table  *(the line break is authored)*

> One table, sixteen seats, one arrival time, one menu

> You will be seated with people you have not met. The first fifteen minutes can be quiet. Then
> Nir comes out, introduces the evening, and the table stops being a room full of strangers.

> One wine pairing is poured through the meal. It is a choice about the evening, not a gap in the
> offer.

> THE PATH OF FOOD & HOSPITALITY  *(the tagline, tracked Inter 11, footer only)*

**Examples that are wrong:** "Discover our culinary journey" (empty verb, no fact).
"An intimate table — where strangers become friends" (em dash, aphorism, metaphor).
"LIMITED SEATS AVAILABLE" (claiming scarcity instead of showing the date).
"Course 01 / Amuse" (structural numbering, and a kicker).

---

## Visual foundations

**Colour.** Two grounds, warm in both directions, and **no accent colour at all**. Colour enters a
page only through photography. Light ground `#F7F4EC`, a warm limewash paper. Ink `#1A1815`, a
warm near-black, never `#000`. Dark ground `#1C1A17`, a warm charcoal with brown in it, never a
neutral grey; ink on it is `#EDE8DC`. One ink at five alphas does everything else: secondary 70%,
meta 45%, rules 16% (18% on dark), faint 8% (9%), panel inset 3.5% (4%). Hierarchy is carried by
scale, weight, whitespace and hairline rules, because there is no second colour to carry it.

Dark is narrative, not a preference toggle. The site walks day into night the way a visit does, so
the charcoal ground belongs to the parts of the site that are about the service itself.

**Type.** Two families only. Display and headings in **Season Mix** (Light 300, Regular 400,
Medium 500, supplied as trial OTF and shipped in `assets/fonts/`); body, small text and data in
Inter. Petrona stays behind Season Mix in the stack as a fallback only. No italic file was
supplied, so the italic accent style is synthesised.
Scale: display 56 and up at 0.95 to 1.0 line-height, headings 24 to 56 at 1.1, sub-heads 20 at
1.3, body Inter 16 at 1.55, small 12, data 13 with tabular figures, metadata 10. Serif tracking
tightens with size: −2% at 56 and up, −1% between 24 and 56, none below 24. **Inter is never
tracked**, except the 10px metadata at +22%. Running text stays near 65 characters. Tabular
figures wherever digits align: times, seats, prices. An italic Light serif is available for an
accented phrase, used sparingly.

**Spacing.** 8px base, 4 available for hairline-scale detail. Section handovers are generous: 160
between sections at the 1440 artboard, 120 where a section is tight. The system's density comes
from restraint in the number of elements, not from tight spacing.

**Grid.** 12 columns, 24px gutter, 64px outer offset at a 1440 artboard. Column origin
`x(i) = 64 + i × 111.333`; span width `w(n) = n × 87.333 + (n − 1) × 24`. Spans: 4 = 421,
5 = 533, 6 = 644, 8 = 867, 12 = 1312. Text snaps to spans, most copy sits on 4 to 7 columns and
nothing runs the full 12. Photography may float free of the grid. One deliberate grid break per
page, and it is an image, never type. No centred-column-by-default layouts, and no identical
section anatomy repeating down a page.

**Backgrounds and texture.** No images behind text, no repeating patterns, no decorative
gradients. A gradient must have a job: a scrim over photography, or an edge mask with a purpose.
Every page ground carries the paper surface: `assets/texture-limewash.png`, a photographed
limewash wall with soft trowel movement and fine tooth in it. It is pinned at its **native 1400px width**, roughly 1:1 at the
1440 artboard, and repeated rather than stretched, so the trowel movement and the tooth stay at
true scale. The seam every 905px is invisible at these opacities on a surface this low in
contrast. On the
paper ground it multiplies at 45%, darkening the sheet exactly where the wall does. On the
charcoal it screens at 13% instead, which reads as the same wall under low light: the tooth shows
as faint highlight rather than a grey wash over the ground. Both are set in `tokens/texture.css`
and applied by `PaperGround` or the `.dao-paper` class. It should be felt, not stared at.

**Photography.** The library splits into two temperatures and **a section uses one or the other,
never both**. Daylight is cooler, greener, documentary: territory, market, foraging, prep. It is
sized smaller, gridded, denser. Night service is warm, close and low-light: candlelight, plating,
the communal table. It is sized large, often full-bleed, and carries a section alone. Hands recur
throughout the library. Overall the imagery is warm, natural-light, grainless and un-styled; no
filters, no cool grading, no black and white.

When exploring variants of one composition, fix the imagery first and reuse it across every
variant. Re-crop and re-scrim per layout; never swap photographs between variants, because that
turns a layout comparison into a photo comparison. The fixed pair is `table-guests-01091` as the
warm signature frame and `nir-plating-01034` as the dark, type-safe frame.

**Scrims.** Two layers, never one. A flat `rgba(0,0,0,0.38)` floor sets a predictable minimum,
plus a vertical band that protects the middle where the type sits while the top and bottom of the
photograph stay open: `transparent 0%, 30% black at 22%, 34% at 80%, transparent 100%`. Type over
an image is always full-opacity cream, never alpha-muted. Scrims are tuned per photograph, and
changing an image means re-checking contrast on it.

**Borders, cards, shadows, radii.** There is no card. Content sits directly on the ground and is
separated by 1px hairlines. **No border-radius anywhere** unless it is explicitly asked for. **No
shadows under content**; chrome may lift off the page, content sits in it. No inner shadows, no
panel bevels. Where a surface needs to read as inset, it uses the 3.5% panel fill, not a shadow.
Protection over photography is always a gradient scrim, never a capsule or pill behind the type.

**Transparency and blur.** Alpha is used for the ink ladder and for scrims. Backdrop blur is not
part of the system; a fixed nav over photography uses a scrim, not a frosted panel.

**Hover.** Colour and rule-weight only: the label goes to full ink, the hairline goes from 16% to
100%. **Nothing lifts or translates upward.** No card rises to announce it is clickable. Hover
transitions run 0.75s on the expo-out curve, which is slow enough to feel deliberate.

**Press.** Selection fills with ink and the label flips to paper. Nothing shrinks or springs.

**Motion.** Slow throughout, the expo-out family of curves, nothing bounces. Durations ladder by
role: hover 0.75s, chrome 1s, content reveals 1.25s, masked image reveals 2s, large image
movement 3s. Staggers come in two bands, per-character 0.005 to 0.02 and per-element 0.035 to 0.1.
The signature patterns are one physical idea reused rather than a bag of effects: a clipped reveal
with a settling zoom (the zoom outlasts the mask, about 2s mask against 3s settle); in-frame
parallax with total travel 10 to 15% of frame height, never past 20%; and a receding panel, where
the outgoing section holds still and scales back to about 0.94 while the incoming one moves over
the top. That last gesture also serves as the page transition and the intro loader's exit. Short
muted video loops (pouring, plating, the table) are in scope.

**Layout rules.** The nav is the only fixed element, and over a hero it goes cream with a scrim
under it rather than a background panel. Corner metadata is the sanctioned home for the tracked
uppercase voice, set at Inter 10 Medium so it stays quiet next to the serif: the mark at the 64px offset, a place or time in the opposite corner. Because
nothing sits above a headline, that voice never becomes a kicker.

---

## Iconography

**There is no icon set, and none should be invented.** The supplied brand material is a wordmark
and thirteen photographs. Nothing in the brief calls for a glyph system, and the site's four pages
have no surface that needs one: navigation is three words, the call to action is a tracked label
over a hairline, the FAQ opens with the word "Read" rather than a chevron, and the booking flow
uses hairline-separated choices instead of radio dots.

Concretely:

- No icon font, no SVG sprite, no PNG icons exist in the source, and none were added.
- No CDN icon library (Lucide, Heroicons, Feather) is linked. Linking one would put a stroke
  weight and a corner radius into a system that has neither.
- No emoji, ever.
- No unicode characters used as icons. The middle dot `·` is used as a separator in meta lines,
  and `&rsquo;` for apostrophes. That is the extent of it.
- The 道 character is not used as a graphic element anywhere.

If a genuine need for a glyph appears (a date picker, a map pin on the reserve page), the right
move is to commission or draw it against these foundations, at 1px stroke with square terminals
and no radius, and to record it here. Do not substitute a library set.

**The mark.** `assets/logo-black.svg` and `assets/logo-white.svg`, 126 × 60, exactly as supplied
by the client. The branding lockup is the logo plus the word "dao" only; the longer tagline lockup
is dropped. In production the mark ships as one inlined SVG recoloured via `currentColor` rather
than as two files. `NavBar` renders the brand name in plain display type when no `logoSrc` is
passed, which is the correct fallback: no mark is ever redrawn or approximated.

---

## Fonts, one thing outstanding

Season Mix is installed and rendering everywhere in this system. Two notes:

- The files are the **trial** cut (`SeasonMixTRIAL-*.otf`). They are fine for design work and must
  be replaced with licensed web files (woff2) before anything ships. OTF is also heavier over the
  wire than woff2.
- **No italic was supplied.** The italic Light accent style in the type scale is currently
  synthesised by the browser, which slants the roman rather than using real italic forms. If
  Season Mix has an italic, add it; if it does not, the accent style should be dropped from the
  system rather than faked.

## Also placeholder

Every operational value in this system is invented so that design could proceed, and none of it is
client-confirmed: arrival 18:30, duration about three hours, menu THB 3,900, wine pairing
THB 2,200, sixteen seats, a four-month booking window, no dress code, a deposit refundable outside
48 hours. Photography is the placeholder Dor Bayder set. Press quotes are placeholder text with
real publications and dates attached. Replace all of it before anything ships.
