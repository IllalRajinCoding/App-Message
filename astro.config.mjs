// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "server",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});