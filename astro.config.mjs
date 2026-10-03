import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carerideus.com',
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
  },
});