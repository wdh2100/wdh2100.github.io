import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wdh2100.github.io',
  integrations: [tailwind()],
});
