import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeHighlight from 'rehype-highlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://nandolopez.github.io',
  build: {
    format: "file"
  },
  integrations: [sitemap(), tailwind(), react(), mdx()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [[remarkToc,{heading:"contents"}]],
    rehypePlugins: [rehypeAccessibleEmojis, rehypeHighlight],
  }
});