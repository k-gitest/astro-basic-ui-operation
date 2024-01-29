import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import htmx from "astro-htmx";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
    },
  },
  integrations: [
    vue(),
    svelte(),
    react({
      include: ["**/React/*"],
    }),
    solidJs({
      include: ["**/Solid/*", "**/node_modules/@suid/material/**"],
    }),
    alpinejs(),
    htmx(),
    tailwind(),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
