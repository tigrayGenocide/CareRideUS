import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carerideus.com',
  trailingSlash: 'always',
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