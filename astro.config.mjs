import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aipraktis.vercel.app',
  integrations: [sitemap()]
});