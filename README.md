# Hinto website

The website for Hinto, the flashcard app: landing page, support (FAQ and contact) and privacy policy, in English and Japanese.
Static [Astro](https://astro.build) (no server), served by GitHub Pages at https://lemonpepperseasoning.github.io/Hinto-web/.

```sh
npm install
npx astro dev --background   # http://localhost:4321/hinto/
npm run build                # static files in dist/
```

- `src/i18n/help.ts` is generated from the app's in-app Help: `python3 scripts/sync-help.py ../Hinto-ios`.
- `src/i18n/privacy.ts` describes what the app does with data. Update it before releasing any app change that sends data anywhere.
- Deploys on push to `main` (`.github/workflows/deploy.yml`).

## Going live (GitHub Pages)

1. In this repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (one time).
2. Push to `main`. The workflow builds and deploys to **https://lemonpepperseasoning.github.io/Hinto-web/**. Progress shows in the repo's Actions tab.

### URLs for App Store Connect

| Field | URL |
|---|---|
| Support URL (required) | https://lemonpepperseasoning.github.io/Hinto-web/support/ |
| Privacy Policy URL (required) | https://lemonpepperseasoning.github.io/Hinto-web/privacy/ |
| Marketing URL (optional) | https://lemonpepperseasoning.github.io/Hinto-web/ |

Japanese versions: add `ja/` after `Hinto-web/` (e.g. `…/Hinto-web/ja/support/`).
Support contact: lemonpepperstudioco@gmail.com (in `src/config.ts`).

### On launch day

- In `src/config.ts`: set `install: 'live'` and `appStoreId: '<the app's App Store id>'`. This switches the "coming soon" pill to Apple's badge and adds the Smart App Banner.
- Download Apple's official localised badges (black, SVG) from Apple's marketing tools (toolbox.marketingtools.apple.com) to `public/badges/app-store-en.svg` and `public/badges/app-store-ja.svg`. Don't alter them.
- Before any app release that sends data off the phone (for example if the Claude card maker returns), update `src/i18n/privacy.ts` first.

### Keeping content in step with the app

- FAQ: `python3 scripts/sync-help.py ../Hinto-ios` regenerates `src/i18n/help.ts` from the app's in-app Help (English and Japanese).
- Screenshots (`src/assets/shots/<lang>-<screen>-<light|dark>.png`):
  - Capture from the app's demo mode on the 6.9" simulator: `-demo -noTips -screen <review|study|choices-run|reveal|waiting|end|library>`.
  - Status bar at 9:41.
  - For English, pass `-AppleLanguages "(en, ja)"` so Japanese text renders.
  - Resize to 1300 px tall.
- Buddies: `node scripts/extract-buddies.mjs <design kit>/ui-design/_kit/characters.js`.
- Share images, icons, favicon: `node scripts/render-images.mjs` (needs Google Chrome).

### Custom domain (later)

Point the domain at GitHub Pages, set `site` to it in `astro.config.mjs`, remove `base`, and update the URLs above and in `public/robots.txt`.
