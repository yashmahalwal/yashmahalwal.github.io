# Accessibility notes

Targets **WCAG 2.2 Level AA** as a baseline for this static site.

## Implemented

- Skip link to `#main`.
- Landmark structure: `header`, `nav` (labelled), `main`, `footer`.
- Visible focus styles via `:focus-visible` on links and interactive elements.
- Section targets for in-page navigation use `tabindex="-1"` so focus can be moved programmatically after activation.
- `prefers-reduced-motion` respected for smooth scrolling (CSS + JS).
- Portrait image includes descriptive `alt` text.

## Manual checks to run

1. Keyboard-only navigation across header nav and in-page anchors.
2. Screen reader spot check (VoiceOver / NVDA): nav landmark, headings order, focus order after clicking a nav link.
3. Zoom to 200% — ensure no overlapping text or clipped controls.
4. Color contrast review if you change the palette.

## Placeholder content

- Publication entries intentionally avoid fake `href="#"` links. Add real URLs when available.
