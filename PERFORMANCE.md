# Performance notes

## LCP strategy

- Primary above-the-fold content is **text** (hero heading and lede). The portrait uses `fetchpriority="low"` so it does not compete for LCP.
- **No web fonts** — system font stack only for minimal transfer and zero font blocking.
- **No third-party scripts** (analytics, widgets, tag managers) in the default template.

## Assets

- `assets/css/styles.css` is the only stylesheet.
- `assets/js/main.js` is deferred and small; it enhances in-page navigation focus behavior and scroll-aware `aria-current` in the primary nav.

## Checklist

- Replace the SVG portrait with a compressed raster if you want a photo LCP — then re-evaluate `fetchpriority`, `width`/`height`, and optional `<link rel="preload" as="image" ...>`.
- After content changes, run Lighthouse (mobile) and WebPageTest.
