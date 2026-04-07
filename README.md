# yashmahalwal.github.io

Static portfolio (v2) on branch `portfolio-v2`: plain HTML, CSS, and a small progressive-enhancement script.

## Local preview

From the repo root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Replace dummy assets

- Photo: swap `assets/profile/profile.svg` for your real image (AVIF/WebP/JPEG recommended). Update `index.html` if you use `<picture>` with multiple sources.
- Résumé: replace `assets/resume/yash-mahalwal-resume-apr-2026.pdf` with your latest PDF.

## Deploy (GitHub Pages)

Push branch `portfolio-v2` and open a PR to `master`, or set Pages to this branch in repo settings. User Pages typically serves from the default branch root.

## Docs

- [PERFORMANCE.md](PERFORMANCE.md)
- [ACCESSIBILITY.md](ACCESSIBILITY.md)
