# Design System

All tokens live in `assets/css/theme.css` as CSS custom properties on `:root`. Light-mode
overrides are applied by setting `data-theme="light"` on `<html>`.

---

## Breakpoints

| Name    | Value              | Usage                            |
|---------|--------------------|----------------------------------|
| mobile  | `max-width: 900px` | Single-column, stacked layouts   |
| desktop | `min-width: 901px` | Multi-column, side-by-side grids |
| xl      | `min-width: 1536px`| Larger container, scaled type    |

---

## Color tokens

| Token          | Dark (default) | Light override | Role                                  |
|----------------|----------------|----------------|---------------------------------------|
| `--bg`         | `#0b1020`      | `#ffffff`      | Page background                       |
| `--bg2`        | `#111936`      | `#f1f5f9`      | Subtle surface (e.g. hero background) |
| `--text`       | `#dde6ff`      | `#0f172a`      | Primary body text                     |
| `--muted`      | `#8a9dc4`      | `#475569`      | Secondary / metadata text             |
| `--line`       | `#243057`      | `#e2e8f0`      | Borders, dividers                     |
| `--accent`     | `#7dd3fc`      | `#0369a1`      | Links, headings, interactive highlights |
| `--panel`      | `#0f1530`      | `#f8fafc`      | Card / panel surface                  |
| `--grid-line`  | `rgba(125,211,252,0.05)` | `rgba(15,23,42,0.04)` | Hero grid overlay |

### Semantic status colors

| Token           | Dark      | Light     | Use                           |
|-----------------|-----------|-----------|-------------------------------|
| `--color-good`  | `#4ade80` | `#15803d` | Success, healthy metric       |
| `--color-warn`  | `#fb923c` | `#c2410c` | Warning / degraded metric     |
| `--color-poor`  | `#f87171` | `#dc2626` | Error / poor metric           |

### Inline code syntax highlighting

These are not CSS variables — they are hard-coded to stay consistent across themes.

| Token   | Dark      | Light     | Use               |
|---------|-----------|-----------|-------------------|
| `.kw`   | `#f9a8d4` | `#be185d` | Keyword           |
| `.str`  | `#93c5fd` | `#1d4ed8` | String literal    |
| `.num`  | `#86efac` | `#15803d` | Number / function |
| `.fn`   | `#86efac` | `#15803d` | Function name     |
| `.tag`  | `#7dd3fc` | `#0369a1` | HTML/JSX tag      |
| `.attr` | `#c4b5fd` | `#6d28d9` | Attribute         |

### Diff colors (GitHub review mock)

| State | Dark (bg / text) | Light (bg / text) |
|-------|------------------|-------------------|
| Added | `rgba(74,222,128,0.09)` / `#4ade80` | `rgba(21,128,61,0.06)` / `#15803d` |
| Deleted | `rgba(248,113,113,0.09)` / `#f87171` | `rgba(220,38,38,0.06)` / `#b91c1c` |

---

## Typography

### Font stacks

| Context     | Stack                                                                           |
|-------------|---------------------------------------------------------------------------------|
| Body / UI   | `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`       |
| Monospace   | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`                      |

No web fonts are fetched. Inter is used if installed locally; otherwise the system sans-serif.

### Heading scale (`base.css`)

| Element | Size                                    | Weight | Line-height | Letter-spacing |
|---------|-----------------------------------------|--------|-------------|----------------|
| `h1`    | `clamp(2.2rem, 5.2vw, 4.2rem)`          | 700    | 1.04        | −0.03em        |
| `h2`    | `clamp(1.5rem, 3vw, 2.25rem)`           | 700    | 1.2         | −0.02em        |
| `h3`    | `clamp(1.15rem, 2vw, 1.5rem)`           | 700    | 1.2         | −0.02em        |
| `h4`    | `1.125rem`                              | 700    | 1.2         | −0.02em        |
| `h5`    | `1rem`                                  | 700    | 1.2         | −0.02em        |
| `h6`    | `0.875rem`                              | 700    | 1.2         | −0.02em        |

- `h1` mobile: `clamp(1.8rem, 7vw, 2.4rem)` (overridden in `hero.css`).
- xl (≥ 1536 px): `--h1-size-max` rises to `4.62rem`.

### Section headings (`.section-heading`)

Applied to `<h2>` section titles across About, Work, Projects, Writing, Contact.

```
font-size: clamp(2rem, 3.5vw, 2.65rem)
line-height: 1.12
letter-spacing: -0.03em
color: var(--accent)
margin-bottom: 1.5rem
```

### Body text

- Default: `400 1rem / 1.7` — set on `<body>`.
- `<p>`: `line-height: 1.7`.
- `<b>`, `<strong>`: `font-weight: 600`.

### Specialized scales

| Class / context        | Size        | Weight | Notes                              |
|------------------------|-------------|--------|------------------------------------|
| `.hero-hello`          | `2rem`      | 700    | Greeting above hero name           |
| `.hero-subtitle`       | `1rem` (xl: 1.08rem) | 400 | Subtitle / lede              |
| `.about-lead`          | `clamp(1rem, 1.5vw, 1.125rem)` | 400 | About paragraph         |
| `.stat-value`          | `clamp(1.4rem, 2.2vw, 2rem)` | 700 | Metric card headline           |
| `.stat-label`          | `0.78rem`   | 400    | Metric card label                  |
| `.hit-role`            | `clamp(1.1875rem, 1.75vw + 0.35rem, 1.4375rem)` | 700 | Experience role title |
| `.hit-co`              | `0.75rem`   | 700    | Company eyebrow, uppercase, +0.07em |
| `.hit-spine-date`      | `0.765rem`  | 500    | Date range                         |
| `.hit-hook` / `.proj-hook` | `0.9375rem` | 500 | Summary copy                    |
| `.hit-chip`            | `0.6875rem` | 600    | Skill chips, uppercase, +0.04em    |
| `.proj-title`          | `clamp(1.25rem, 1.6vw + 0.35rem, 1.5rem)` | 700 | Project card title       |
| `.proj-type`           | `0.6875rem` | 700    | Category eyebrow, uppercase, +0.08em |
| `.resume-btn`          | `0.82rem`   | 600    | Resume CTA, uppercase, +0.04em     |
| `.site-header-link`    | `1rem`      | 500    | Desktop nav links                  |
| `.site-header-link` (mobile) | `1.75rem` | 700 | Full-screen overlay links        |

---

## Spacing & layout

### Container

```css
--container-max:        1160px   /* 1334px at xl */
--container-pad:        1rem
--container-pad-mobile: 1.25rem
```

Sections use `max-width: var(--container-max); margin: 0 auto; padding: ... var(--container-pad)`.

### Section padding

```css
--section-pad:        4rem    /* desktop vertical padding */
--section-pad-mobile: 2.75rem /* mobile vertical padding  */
```

### Hero-specific layout variables

```css
--hero-col-gap:    2rem   /* gap between text col and image col */
--hero-row-gap:    1.5rem /* gap between hero, links, code card rows */
--hero-image-size: 382px  /* portrait square size (410px at xl) */
--hero-code-max:   640px  /* max-width of code card (717px at xl) */
```

---

## Border radius

| Token           | Value    | Use                              |
|-----------------|----------|----------------------------------|
| `--radius-sm`   | `8px`    | Small cards, chips, skip link    |
| `--radius-md`   | `12px`   | Code card, panels, project cards |
| `--radius-lg`   | `16px`   | Profile image                    |
| `--radius-pill` | `999px`  | Icon buttons, theme toggle, chips|

---

## Transitions

| Token               | Value        | Use                              |
|---------------------|--------------|----------------------------------|
| `--transition-fast` | `120ms ease` | Hover color/border changes       |
| `--transition-base` | `240ms ease` | Background, border on scroll     |

Accordion transitions use custom `cubic-bezier` curves for a spring feel:
- `grid-template-rows`: `0.36s cubic-bezier(0.33, 1, 0.68, 1)`
- Roadmap segment top/height: `0.45s / 0.38s cubic-bezier(0.33, 1, 0.52, 1)`
- Chevron icon rotate: `0.28s cubic-bezier(0.22, 1, 0.36, 1)`

---

## Components

### Site header

Fixed, full-width. Three-column grid: `logo | nav | actions`.

- **Default (transparent)**: blends with hero section on page load.
- **Scrolled (`.is-scrolled`)**: `background: color-mix(in srgb, var(--bg) 80%, transparent)` +
  `backdrop-filter: blur(14px)` + semi-transparent bottom border.
- **Mobile**: header bar becomes invisible (`pointer-events: none`). Logo hides.
  A floating hamburger pill appears top-right (`position: fixed`).
- Hamburger → X animation: three `<span>` bars transform with `translateY` + `rotate`. Disabled
  under `prefers-reduced-motion`.
- Nav overlay (mobile): full-screen, `opacity + translateY` in/out, with per-link staggered
  delays (0.07 s → 0.23 s). Theme toggle appears at the bottom.

### Hero

- Two-column grid desktop: `1.15fr` (text + links + code card) / `0.85fr` (portrait).
- Mobile: single column, stacked (text → portrait → links → code card).
- Background: CSS layered `background` with a `168 × 168 px` dot-grid pattern (`--grid-line`)
  and a radial gradient glow.
- **Code card** (`.hero-codecard`): `var(--panel)` surface, monospace font, macOS-style
  traffic-light dots (`.dot.red / .yellow / .green`), syntax tokens (`.kw`, `.str`, `.num`).
- **Icon buttons** (`.icon-btn`): 40 × 40 px circular, `var(--panel)` + `var(--line)` border.
  On hover: `border-color: var(--accent); color: var(--accent)`.
- **Resume button** (`.resume-btn`): same base as `.icon-btn`, `width: auto`, padded, small caps.

### About

- Lead paragraph with `clamp` font-size.
- **Metrics band** (`.about-band`): flex row of stat cards separated by `1px solid var(--line)`
  borders. On mobile: wraps to 2 × 2 grid.
- Stat cards enter via `IntersectionObserver` with `opacity + translateY` stagger (0 / 60 / 120 /
  180 ms delays). Bypassed under `prefers-reduced-motion`.

### Experience timeline (`.roadmap`)

- Centered vertical spine: `::before` pseudo-element, `1px solid var(--line)`.
- Active segment: `::after` pseudo-element, `2px` accent-colored, position/height driven by JS
  CSS custom properties (`--wk-seg-t`, `--wk-seg-h`, `--wk-seg-alpha`).
- Each milestone (`<li class="milestone">`) alternates left / right columns via `nth-child(odd/even)`.
- Mobile: collapses to a single left-aligned column with the spine at the far left.
- **Accordion**: `grid-template-rows: 0fr → 1fr`; pane content fades in with `opacity: 0 → 1`.
- **Dot** (`.hit-node`): 7 × 7 px circle. Active dot (`is-line-active`) gets accent background +
  glow ring.
- **Chips** (`.hit-chip`): pill-shaped, `var(--panel)` bg, `var(--line)` border, `var(--accent)` text.

### Projects

- Article list; each project (`<article class="proj">`) is an accordion.
- Two-column desktop layout: lead text + info chips (`.proj-lead`) / visual artefact
  (`.proj-artefact`). Stacks on mobile.
- Expand button centered below the summary row.
- **Repo link card** (`.proj-repo-link`): `var(--panel)` surface, icon + label + description +
  external chevron. Hover: accent border + text.
- **GitHub review mock** (`.gh-review`): monospace diff viewer with `--del` / `--add` rows,
  a bot comment with accent left-border, and impact list.
- **Synced compare** (`.synced-compare`): three-column grid (before | divider | after) with
  conflict / active / queued dot states and pill badges.
- **Parcel docs sample** (`.parcel-docs-sample`): two-pane demo/source card with a live-stage
  and syntax-highlighted hook code.
- **Pipeline strip** (`.pipe-strip`): horizontal `flex` row of steps with `›` connector
  pseudo-elements. Stacks vertically on mobile with `↓` connectors.
- **Queue map** (`.synced-queue-map`): layer rows with ticket tracks, active/waiting states.

### Writing

- 2 × 2 CSS grid desktop, single column mobile.
- Each card (`<article class="write-card">`): `display: grid; grid-row: span 2;
  grid-template-rows: subgrid` — aligns art areas and body areas across cards in the same row.
- **Artifacts** (`.write-card-art`): React Profiler chart, Heisenberg console split-panel,
  Code Sharing matrix table, SSR waterfall chart.
- Category label (`.proj-type` reused), read time (`.write-readtime`), separator (`.write-sep`).
- Read link (`.write-read-link`): accent-colored, arrow SVG nudges `translate(1px, -1px)` on hover.

### Contact

- Flex row desktop: body text left / availability card right (`width: 280px`).
- Mobile: stacks reversed (card above body text).
- **Availability card** (`.contact-avail-card`): status dot with glow ring, availability tags
  as chip-style items.

### Footer

- Flex row, space-between: copyright left / Web Vitals metrics right.
- Vitals group: LCP, FCP, TTFB with color-coded `data-rating` + CLS, transfer size,
  request count. Stats group separated by a `1px` left border.
- Hidden until metrics are collected (JS double `rAF` after page `load`).

---

## Utility classes

| Class              | Purpose                                                   |
|--------------------|-----------------------------------------------------------|
| `.visually-hidden` | Screen-reader-only text (clip + position absolute)        |
| `.skip-link`       | Off-screen skip link; appears on focus                    |
| `.section-heading` | Accented `<h2>` used across all sections                  |
| `.hit-chips`       | Flex row of skill / category pill badges                  |
| `.hit-chip`        | Individual pill badge                                     |
| `.proj-type`       | Uppercase eyebrow label (reused in Writing section)       |
| `.icon-btn`        | Circular social icon button                               |
| `.resume-btn`      | Inline resume CTA (extends `.icon-btn`)                   |
| `.theme-toggle`    | Circular dark/light toggle button                         |

---

## Patterns

### Accordion (grid expand/collapse)

Both experience milestones and project detail panes share the same pattern:

1. Container starts with `grid-template-rows: auto 0fr` (pane invisible, zero height).
2. `data-expanded="true"` switches to `grid-template-rows: auto 1fr`.
3. Inner `overflow: hidden; min-height: 0` clips content during the transition.
4. `aria-hidden + inert` toggle keeps the pane out of the accessibility tree when collapsed.
5. `is-collapsed` class is added via `transitionend` (or immediately under `prefers-reduced-motion`)
   to use `position: absolute` for the pane content, preventing it from contributing to scroll
   height.

### Translucent surfaces

`color-mix(in srgb, var(--token) N%, transparent)` is the standard pattern for semi-transparent
variants. Examples:
- `color-mix(in srgb, var(--bg) 80%, transparent)` — scrolled header background.
- `color-mix(in srgb, var(--accent) 92%, transparent)` — roadmap active segment.
- `color-mix(in srgb, var(--muted) 52%, var(--bg))` — inactive timeline dot.

### Theme switching

1. On `DOMContentLoaded`, JS reads `localStorage.getItem("theme")` or falls back to
   `prefers-color-scheme`.
2. Sets `data-theme` attribute on `<html>`.
3. Toggle button writes the new value to both `data-theme` and `localStorage`.
4. CSS `[data-theme="light"]` overrides all `--*` tokens globally.
5. The mobile nav toggle uses CSS `content` on a `::before` pseudo-element to show
   "Light mode" / "Dark mode" labels without JS string manipulation.
