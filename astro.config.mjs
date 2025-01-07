import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: "@unocss/reset/tailwind-compat.css",
    }),
    vue(),
  ],
});
