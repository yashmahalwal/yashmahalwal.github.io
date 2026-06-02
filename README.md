# yashmahalwal.github.io

Personal portfolio — static-first, plain HTML/CSS with minimal progressive-enhancement JS.
Deployed to GitHub Pages via Vite.

## Tech stack

- **HTML** — semantic, single `index.html` entry point + `404.html` error page.
- **CSS** — hand-written, split into per-section files (`theme.css`, `base.css`, `header.css`, …).
  No framework, no utility classes beyond what's in `base.css`.
- **JS** — a single `assets/js/main.js` (~15 KB unminified). Handles theme toggle, mobile nav,
  scroll-driven timeline, accordions, and self-reported Web Vitals.
- **Vite** — asset bundler. Hashes and minifies CSS/JS/images for production.

## Local development

```bash
npm install
npm run dev       # starts Vite dev server at http://localhost:5173
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally for a production preview
```

## Deployment

Pushes to `master` trigger the GitHub Actions workflow at
`.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build`,
and deploys `dist/` to GitHub Pages.

## Project structure

```
index.html              # page entry point
404.html                # custom error page (processed by Vite)
vite.config.js          # Rollup multi-entry: index.html + 404.html

assets/
  css/
    theme.css           # CSS custom properties (color tokens, spacing, radii, transitions)
    base.css            # reset, typography scale, focus styles, accordion primitives
    header.css          # fixed nav, mobile overlay
    hero.css            # hero grid, code card, profile image
    about.css           # metrics band, stat cards
    work.css            # experience timeline, milestone accordions
    projects.css        # project cards, diff mock, synced compare, pipeline strip
    writing.css         # writing cards, CSS subgrid, artifact styles
    contact.css         # contact layout, availability card
    footer.css          # footer, Web Vitals metric display
    noscript.css        # no-JS fallback: expands all content, fixes nav
  js/
    main.js             # progressive-enhancement script
  images/
    profile.jpeg        # profile photo
  resume/
    resume.pdf          # downloadable resume

content/                # reference markdown (not rendered at runtime)
  writing.md
  projects.md
  projects/
    fark-ai.md
    react-synced-state.md
    parcel-add-source.md

docs/
  ACCESSIBILITY.md      # WCAG 2.2 AA implementation notes
  PERFORMANCE.md        # LCP strategy, font/script decisions, Web Vitals
  DESIGN_SYSTEM.md      # color tokens, typography scale, spacing, components
```

## Docs

- [Accessibility](docs/ACCESSIBILITY.md) — WCAG 2.2 AA implementation, ARIA patterns, no-JS fallback.
- [Performance](docs/PERFORMANCE.md) — LCP strategy, fonts, scripts, CLS, Web Vitals self-reporting.
- [Design System](docs/DESIGN_SYSTEM.md) — color tokens, type scale, spacing, component catalog.
