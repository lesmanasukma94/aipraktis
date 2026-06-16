import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aipraktis.co.id',
  integrations: [sitemap()]
});