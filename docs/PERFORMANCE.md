# Performance

## LCP strategy

- Primary above-the-fold content is **text** — the hero heading (`<h1>`) and subtitle lede.
  These are rendered by the browser the instant the HTML and CSS are parsed, with no blocking
  resources in the critical path.
- Profile portrait (`assets/images/profile.jpeg`) uses `fetchpriority="low"` — it is decorative
  and must not compete for LCP bandwidth.
- No `<link rel="preload">` is needed for the image because it is not the LCP element.
- The image fades in via a CSS `opacity: 0 → 1` transition only after its `load` event fires,
  preventing a layout shift.

## Fonts

- **No web fonts** — the body font stack is `Inter, ui-sans-serif, system-ui, -apple-system,
  "Segoe UI", sans-serif`. Inter is used if already installed locally (common on macOS / iOS);
  otherwise the system sans-serif is used. Zero font-fetch round trips, zero font blocking.
- Code / monospace: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` — system stack only.

## Scripts

- A single script: `assets/js/main.js` (~15 KB unminified, much smaller after Vite minification).
- Loaded without `type="module"` — Vite warns but the file works; add `type="module"` or `defer`
  to prevent parser blocking if this ever becomes a concern.
- All DOM work is gated on `DOMContentLoaded`, so the page is interactive before the script
  fully executes.
- No third-party scripts (analytics, tag managers, chat widgets, A/B testing).

## Stylesheets

Ten CSS files are loaded in `<head>` (theme → base → header → hero → about → work → projects →
writing → contact → footer). Each is small; Vite concatenates and minifies them into a single
hashed bundle at build time.

- A `<noscript>` stylesheet (`noscript.css`) is loaded only for users without JavaScript.
- No unused CSS from frameworks — all rules are hand-written and scoped to actual markup.

## Build (Vite)

- `vite build` outputs to `dist/`:
  - `index.html` — inlined CSS references rewritten to hashed filenames.
  - `404.html` — processed as a second Rollup entry; asset paths rewritten consistently.
  - `assets/` — hashed CSS bundle, hashed JS bundle, hashed image.
- Long-term caching: hashed filenames enable aggressive `Cache-Control: immutable` headers.
- Profile image is copied as a hashed asset; referenced via the Vite asset pipeline.

## Layout stability (CLS)

- All images have explicit `width` / `height` attributes (or are contained in an `aspect-ratio`
  wrapper), preventing layout shifts during load.
- Hero image wrapper: `width: min(100%, var(--hero-image-size)); aspect-ratio: 1 / 1` — reserves
  space before the image loads.
- Accordion expand/collapse uses `grid-template-rows: 0fr → 1fr` — a purely visual transition
  that does not affect sibling layout outside the grid item.
- Stat card entrance: `opacity + translateY` only — no width/height changes that would shift
  neighbouring content.

## Rendering

- `background: color-mix(in srgb, ...)` is used throughout for translucent surfaces and hover
  states — a single CSS function call with no extra DOM nodes.
- Hero shell uses CSS `background` shorthand for the layered grid + radial gradient — zero extra
  elements.
- Roadmap active segment: CSS custom properties (`--wk-seg-t`, `--wk-seg-h`, `--wk-seg-alpha`)
  set by JS via `style.setProperty`. The browser repaints only the `::after` pseudo-element.
- Scroll listeners use `{ passive: true }`, and all geometry updates are deferred to
  `requestAnimationFrame` to avoid forced synchronous layouts.
- `ResizeObserver` monitors the roadmap element for size changes (e.g. accordion open/close)
  and re-derives the segment position, avoiding scroll-driven geometry mis-calculations.

## Self-reported Web Vitals (footer)

The footer (`#footer-perf`) displays live metrics collected via `PerformanceObserver`:

| Metric | Good | Warn |
|--------|------|------|
| LCP    | ≤ 2 500 ms | ≤ 4 000 ms |
| FCP    | ≤ 1 800 ms | ≤ 3 000 ms |
| TTFB   | ≤ 800 ms   | ≤ 1 800 ms |
| CLS    | ≤ 0.1      | ≤ 0.25     |

Each metric cell is coloured `--color-good` / `--color-warn` / `--color-poor` based on these
thresholds. Transfer size and request count are derived from `performance.getEntriesByType`.
The footer panel is `hidden` until all metrics are collected (double `rAF` after `load`).

## SEO

- `<meta name="description">` — concise page description.
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`.
- `<html lang="en">` — language declared.
- Static HTML output — all content is present in the initial HTML payload with no client-side
  rendering needed.
- `href` anchors for all external links; no fake `href="#"` placeholders in published content.

## Checklist

- After content changes run Lighthouse (mobile, simulated throttling) and check LCP, CLS, TBT.
- After palette changes re-verify contrast ratios.
- If a video or heavy image is added above the fold, add `<link rel="preload" as="image">` and
  re-evaluate `fetchpriority`.
- Confirm `main.js` script tag gets `defer` or `type="module"` if parser blocking becomes
  measurable.
