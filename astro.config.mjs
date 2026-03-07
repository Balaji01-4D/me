// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://balaji01-4d.github.io",
  base: "/portfolio",
  integrations: [mdx(), sitemap(), pagefind(), icon({
    include: {
      logos: ["*"],
      "simple-icons": ["*"],
      tabler: ["*"],
      lucide: ["*"]
    }
  })],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-main",
    }]
    }
});
