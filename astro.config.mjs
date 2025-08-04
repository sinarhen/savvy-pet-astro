// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // output: "hybrid",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sanity({
    projectId: "b8fb5p5j",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/studio"
  }), react(), icon()]
});