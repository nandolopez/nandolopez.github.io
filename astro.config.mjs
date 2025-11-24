import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';


import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  //mksite: 'http://localhost:4321/',
  site: 'https://nandolopez.github.io',
  build: {
    format: "file"
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx(), preact()]
});