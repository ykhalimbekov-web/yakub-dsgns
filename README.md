# Yakub.Dsgns

Portfolio site of Yokubbek (Jacob) Khalimbekov, graphic designer from Tashkent: branding, packaging and arts.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Projects (home) |
| `about.html` | About / Contacts |
| `styles.css`, `app.js` | Styles, En/Ru switch and the contact form |
| `assets/` | Project images and portrait |

## Run locally

Open `index.html` in a browser. Fonts (Manrope) load from Google Fonts, so an internet connection is needed for the exact typography.

## Deploy

GitHub Actions (`.github/workflows/pages.yml`) publishes the site to GitHub Pages on every push to `main`.
One-time setup: **Settings → Pages → Source: GitHub Actions**.
