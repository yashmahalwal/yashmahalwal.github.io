# Accessibility notes

Targets **WCAG 2.2 Level AA** as a baseline for this static site.

## Implemented

- Skip link to `#main`.
- Landmark structure: labelled `nav` and `main`.
- Visible focus styles via `:focus-visible` on links and interactive elements.
- Section targets use `tabindex="-1"` so focus can move programmatically after hash navigation.
- `prefers-reduced-motion` respected for smooth scrolling, entrance animations, and accordions (CSS + JS).
- Portrait image includes descriptive `alt` text.

### Roles and labels

- **Experience timeline:** `role="list"` / `role="listitem"` on roadmap entries; timeline dots are `aria-hidden`.
- **Expand controls:** `aria-expanded` and `aria-controls` on the button. Buttons use `aria-labelledby` to combine the action label with the role/company or project name.
- **Detail panes:** `aria-hidden="true"` when collapsed; JS sets `aria-hidden="false"` when open. No `hidden` attribute — layout is handled by CSS grid (`0fr` / `1fr`).
- **Decorative mocks:** GitHub review, synced compare, and parcel docs sample use `aria-hidden="true"`.
- **Diagram groups:** Pipeline and queue visuals use `role="group"` with `aria-label`.
- **External links:** `target="_blank"` links include visually hidden “(opens in new tab)” text.
- **Decorative icons:** Inline SVGs and sprite `<use>` icons use `aria-hidden="true"` and `focusable="false"`.

## Manual checks to run

1. Keyboard-only navigation across hero links, expand buttons, and project doc links.
2. Screen reader spot check (VoiceOver / NVDA): landmark order, accordion names (“Details, Fark.ai”), region labels when expanded.
3. Zoom to 200% — ensure no overlapping text or clipped controls.
4. Color contrast review if you change the palette.

## Placeholder content

- Publication entries intentionally avoid fake `href="#"` links. Add real URLs when available.
