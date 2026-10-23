// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only (no server): served by GitHub Pages at lemonpepperseasoning.github.io/Hinto-web/.
// With a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://lemonpepperseasoning.github.io',
  base: '/Hinto-web',
  trailingSlash: 'always',
  output: 'static',
  i18n: {
    // English at /hinto/, Japanese at /hinto/ja/.
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ja: 'ja-JP' } },
    }),
  ],
});
