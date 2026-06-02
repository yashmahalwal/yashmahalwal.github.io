# Accessibility

Targets **WCAG 2.2 Level AA** as a baseline.

## Document structure

- `<html lang="en">` — language declared for screen readers and translation tools.
- `<title>` — descriptive page title set in `<head>`.
- `<meta name="description">` — page summary for assistive technologies and search.
- Skip link (`<a class="skip-link" href="#main">`) jumps keyboard focus directly to `<main>`.
  Visually hidden off-screen until focused; appears at top-left on `:focus` / `:focus-visible`.
- SVG icon sprite (`<svg aria-hidden="true" focusable="false">`) — kept at the top of `<body>`,
  hidden from the accessibility tree and excluded from tab order.
- Landmark order: `<header>` → `<main id="main">` → `<footer>`.
- Every in-page section target (`[id]`) has `scroll-margin-top` so the fixed header does not
  obscure the element after hash navigation.
- Section targets receive `tabindex="-1"` so JS can call `.focus()` after a `hashchange` event
  without adding them to the natural tab order.

## Focus management

- `:focus { outline: none }` removes the default UA ring globally.
- `:focus-visible:not([tabindex="-1"])` restores a `2px solid var(--accent)` ring with
  `outline-offset: 3px` for keyboard-initiated focus on all interactive elements.
- Explicit redundant rules on `a`, `button`, `input`, `textarea`, `select`, `summary`, and
  `[tabindex]:not([tabindex="-1"])` ensure consistent rings across browsers.
- `button.hit-expand` gets `outline-offset: 4px` for slightly more breathing room.
- `tabindex="-1"` elements (section anchors) are excluded from the focus ring rule — they are
  focused programmatically and do not need a visible ring.

## Theme toggle

- 36 × 36 px circular `<button>` with `border: 1px solid var(--line)`.
- `:focus-visible` ring inherits from the global rule.
- On mobile the desktop toggle is hidden; a text-label toggle inside the full-screen nav overlay
  takes its place (`.site-header-nav-toggle.theme-toggle`).
- Current theme persisted to `localStorage`; initial state also respects `prefers-color-scheme`.

## Mobile navigation

- Hamburger button (`#site-header-toggle`) carries `aria-expanded` (`"true"` / `"false"`) and
  `aria-label` (`"Open menu"` / `"Close menu"`), toggled by JS.
- Nav (`#site-header-nav`) gets `aria-hidden="true"` + `.inert = true` when closed on mobile
  so keyboard users cannot tab into off-screen links.
- On resize to desktop, `aria-hidden` and `inert` are removed unconditionally.
- Clicking any nav link calls `closeMenu()`, restoring the closed ARIA state.
- `prefers-reduced-motion`: the slide-in animation (`opacity`, `transform`, `translateY`) is
  suppressed — the overlay switches visibility with `opacity: 0s` transitions only.

## Motion

- `prefers-reduced-motion: reduce` is respected in **every** animated component:
  - `html { scroll-behavior: auto }` — disables smooth scrolling.
  - `.about-band-stat` — entrance slide-in (`opacity + translateY`) removed.
  - `.proj` / `.proj .proj-pane` — accordion `grid-template-rows` transition disabled.
  - `.milestone` / `.pane-inner` / `.hit-cta-icon` / `.hit-node` / `.roadmap::after` — all
    timeline transitions disabled.
  - `.site-header-nav` / `.site-header-link` — mobile overlay animation collapsed to instant.
  - `.write-read-link svg` — arrow nudge transition removed.
  - JS: `reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches` is read
    once at `DOMContentLoaded`. When true, the `IntersectionObserver` for stat cards is bypassed
    (cards shown immediately) and accordion collapse adds `is-collapsed` synchronously instead of
    waiting for `transitionend`.

## No-JS fallback (`noscript.css`)

Loaded via `<noscript><link rel="stylesheet">` — a dedicated stylesheet that makes the page
fully readable without JavaScript:

- Header gets a permanent opaque background (the `is-scrolled` class never fires).
- Hero profile image is forced visible (`opacity: 1`, loading pulse hidden).
- Stat cards shown at full opacity (`opacity: 1; transform: none`).
- All experience milestones and project panes expanded (`grid-template-rows: auto 1fr`).
- Expand buttons and theme toggles hidden (`display: none`) since they are non-functional.
- Mobile: the full-screen nav overlay is replaced with an inline horizontal nav bar.

## Roles and labels

### Experience timeline (`.roadmap`)

- The `<ol>` / `<li>` structure uses `role="list"` / `role="listitem"` overrides on the roadmap
  and milestone elements to preserve list semantics where CSS `list-style: none` would strip them
  in Safari.
- Timeline dots (`.hit-node`) are `aria-hidden="true"` — decorative.
- Expand button (`.hit-expand`): carries `aria-expanded` and `aria-controls` (points to the
  associated `.pane`). `aria-labelledby` combines the button's action label with the company /
  role heading so the announcement reads e.g. "View work, Fark.ai — AI Infrastructure Engineer".
- Detail pane (`.pane`): `aria-hidden="true"` when collapsed; `aria-hidden="false"` + `.inert`
  removed when open. No `hidden` attribute — height is controlled with CSS grid
  `grid-template-rows: 0fr → 1fr`.
- Pane inner (`.pane-inner`): `overflow: hidden` / `min-height: 0` prevents content from being
  reachable while visually clipped.

### Projects (`.proj`)

- Same accordion pattern as milestones: `aria-expanded` on `.proj-expand`, `aria-controls` to
  `.proj-pane`, `aria-labelledby` combining the project title.
- Detail pane receives `aria-hidden` / `inert` toggle from the shared `initAccordion` helper.

### Decorative visuals

- GitHub review mock, synced compare, parcel docs sample, pipeline strips, and queue maps all
  carry `aria-hidden="true"` — they illustrate project artefacts and carry no unique information.
- Diagram groups (pipeline, queue) use `role="group"` with `aria-label` where appropriate.

### Links and icons

- External links include `<span class="visually-hidden">(opens in new tab)</span>` inside the
  anchor alongside `target="_blank" rel="noopener"`.
- Inline SVGs and sprite `<use>` icons: `aria-hidden="true"` + `focusable="false"`.
- Writing section links point to real external publications; placeholder entries deliberately
  omit `href="#"`.

### Hero image

- `<img id="hero-image" alt="...">` with a descriptive alt string.
- `fetchpriority="low"` — image is decorative/secondary; does not compete with text LCP.
- A CSS `opacity: 0 → 1` transition runs after the `load` event (or immediately if already
  cached), preventing a flash. On no-JS the image is shown at full opacity immediately.

## Manual checks

1. **Keyboard-only navigation** — tab through hero links, nav, expand buttons, doc links.
2. **Screen reader** (VoiceOver / NVDA) — verify landmark order, accordion announcement,
   region labels when expanded, "opens in new tab" announcements.
3. **200 % zoom** — confirm no clipped controls or overlapping text.
4. **Color contrast** — re-audit with the contrast checker if the palette changes.
5. **Reduced motion** — enable OS setting; verify no animations fire and no content is hidden.
6. **No-JS** — disable JavaScript; all content sections should be visible and nav accessible.
