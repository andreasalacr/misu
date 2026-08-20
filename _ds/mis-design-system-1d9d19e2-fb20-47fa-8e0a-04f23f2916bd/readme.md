# Misù Design System

**Misù** — *Auténtico tiramisù para llevar.* A takeout tiramisù brand created by **Antica Pizzeria Napoletana** (Costa Rica, est. 1880) to bring authentic, artisanal Italian tiramisù to more people in a premium, practical, memorable format.

## Sources
- `uploads/Misù - Identidad de Marca (1).pdf` — official brand identity deck (mission, vision, values, colors, logos, typography, tone of voice, slogans). Extracted in full; see quotes throughout this file.
- `uploads/Misu-Logo (1).png` — primary wordmark.
- `uploads/Antica Pizzeria Logo (1).png` — parent-brand (Antica Pizzeria Napoletana) logo.
- `uploads/IVAN_SALA.png` — "Maestro Pizzero" heritage/credential badge for founder Ivan Sala.
- `uploads/Gotham-20260730T022314Z-1-001/` — full Gotham OTF family (Thin→Ultra + italics).
- `uploads/PinkyStonePersonalUse-AL2Kp.otf` — Pinky Stone display font.
- No codebase, Figma file, or existing product screens were provided — components and the storefront UI kit below are original constructions sized to the brand's stated needs, not recreations of an existing product.

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (font-face).
- `fonts/` — Gotham family (all weights/italics) + Pinky Stone, copied from uploads.
- `assets/logos/` — Misù primary logo, Antica Pizzeria logo, Ivan Sala badge.
- `guidelines/` — foundation specimen cards: `colors/`, `type/`, `spacing/`, `brand/`.
- `components/` — reusable React primitives, grouped by concern:
  - `forms/`: Button, Input, Select, Checkbox, Radio, Switch
  - `feedback/`: Badge, Tag, Toast
  - `navigation/`: Tabs
  - `overlay/`: Dialog
  - `core/`: Card
- `ui_kits/storefront/` — the Misù ordering website: Home, Menu (with filters), Cart drawer, Checkout — interactive click-through.
- `thumbnail.html` — project tile.
- `SKILL.md` — portable skill file for use in Claude Code.

### Intentional additions
No component inventory (codebase/Figma) was provided, so a standard primitive set was authored from scratch, sized to a takeout food-ordering product: Button, Input, Select, Checkbox, Radio, Switch, Badge, Tag, Toast, Tabs, Dialog, Card. Tooltip and IconButton were intentionally omitted — nothing in the source material implies icon-heavy UI beyond the logos.

## Content Fundamentals
- **Tagline**: "El auténtico tiramisú italiano, para llevar."
- **Mission**: "Convertirnos en la marca de referencia de postres italianos para llevar en Costa Rica, reconocida por nuestra calidad, autenticidad y experiencia de sabor."
- **Values**: Autenticidad (respect for Italian recipes/tradition), Simplicidad (real ingredients, no complication), Calidad (premium ingredients), Pasión (born from Antica Pizzeria Napoletana's love of Italian gastronomy).
- **Brand personality**: elegant yet approachable, passionate about good food, sophisticated without pretension, cheerful and welcoming, Italian at heart, a lover of life's small pleasures.
- **Tone of voice**: talks like someone inviting you to share a special dessert — natural and friendly, not overly formal; reflects premium quality without exaggerating.
- **Voice/person**: warm second-person invitations ("para llevar", "para disfrutar"), not corporate "nosotros" pitches. Short, rhythmic lines.
- **Slogan variations**: "Italia en cada cucharada." / "El postre que siempre merece una pausa." / "Tradición italiana para disfrutar donde quieras." / "El sabor de Italia, listo para llevar." / "Dulces momentos, al estilo italiano."
- **Language**: Spanish (Costa Rica), with Italian loanwords in the product name itself (tiramisù, keeps the Italian accent mark).
- **Emoji**: none used anywhere in source materials — do not introduce them.
- **Use cases named in the brand deck**: an afternoon sweet craving, a gift, a premium dessert to take home, an addition to gatherings/celebrations, a personal indulgence any time of day.

## Visual Foundations
- **Colors** — Primary: Rojo Misù `#d3202d`, Beige Rojizo `#f2e5dc`. Secondary: Rojo Oscuro `#610612`, Beige Secundario `#efd9d0`. These four are the entire palette per the brand deck — kept as-is, with tint ramps computed in OKLCH for surfaces/states. Antica Pizzeria's navy (`#2c5578`) is carried in as a heritage/parent-brand accent, used sparingly (footers, provenance callouts) — never as a primary UI color.
- **Type** — Two-tier system: **Pinky Stone** (hand-lettered display, matches the brush-lettered "Misù" wordmark) for hero headlines and brand moments; **Gotham** (full Thin→Ultra weight range) for everything else — subtitles, body copy, UI text. Never use Pinky Stone below ~28px or for body copy — it's a display-only face.
- **Spacing** — 4px base unit, scale 4/8/12/16/20/24/32/40/48/64/80/96/128.
- **Backgrounds** — flat color fields (Rojo Misù or Beige Rojizo), no gradients, no patterns/textures, no photographic full-bleed backgrounds in the source materials. Photography would be food/product shots, warm-toned — none were supplied, so the storefront uses labeled image placeholders.
- **Animation** — no motion specified in source; the components use short (120–340ms), standard-eased transitions for hover/press/toggle feedback only — nothing decorative or bouncy.
- **Hover states** — buttons darken slightly (brightness ~0.92); tags/cards get a subtle red-tinted background when selected.
- **Press states** — buttons scale to 0.97.
- **Borders** — thin (1px), low-contrast neutral borders on inputs/cards; a 2px accent border marks focus/selection.
- **Shadows** — soft, warm-tinted (mixed from ink or dark-red, never pure black): a light `shadow-card` for product cards, heavier `shadow-raised`/`shadow-pop` for drawers and dialogs.
- **Corner radii** — generous and rounded throughout: 6px (inputs/small controls), 12px (cards), 20px (dialogs/hero panels), full pill for buttons/tags/badges — matching the rounded, friendly brush-lettering of the logo.
- **Cards** — white surface, 12px radius, soft shadow, no border — image block on top, content padded 18px.
- **Transparency/blur** — a single dark scrim (`rgba(42,20,16,.5-.55)`) behind modals/drawers; no frosted-glass/blur effects seen or implied.
- **Imagery color vibe** — none supplied; brand colors imply warm, appetizing, saturated food photography (not b&w, not desaturated).

## Iconography
No icon font, SVG icon set, or icon usage of any kind appears in the supplied brand materials — the identity deck contains only wordmarks and the two circular badge logos. No icons were invented for this system. Where a UI needs a glyph (e.g. a close "✕" in the cart drawer), a plain Unicode character is used rather than drawing custom SVG icon art. If the product needs a real icon set going forward, flag it for a follow-up decision (e.g. Lucide via CDN) rather than assuming one.

## Fonts
- **Gotham** — Thin, XLight, Light, Book, Medium, Bold, Black, Ultra + italics, all supplied as real OTFs and used as-is.
- **Pinky Stone** — display font, re-supplied as a clean OTF (`fonts/PinkyStone.otf`, no watermark). `--font-display` uses it directly.

## Components
Button, Input, Select, Checkbox, Radio, Switch, Badge, Tag, Toast, Tabs, Dialog, Card — see `components/<group>/` for source, props (`.d.ts`), and usage (`.prompt.md`).

## Caveats / open questions
- No codebase or Figma file was attached, so the component inventory and the storefront UI kit are original constructions in the brand's visual language, not a recreation of an existing product — please point me at a live site/app or Figma file if one exists, so the kit can be corrected to match reality.
- Product photography was not supplied; the storefront currently uses solid-color placeholder blocks where product photos belong.
- The PDF's logo/typography pages render as vector art the extractor couldn't screenshot — colors and type were taken from the deck's text values, not visually sampled from the page renders.
