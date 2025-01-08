import { defineConfig, envField } from "astro/config";
import vue from "@astrojs/vue";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      LINK_TRANSFORM_MIDDLEWARE_LOG_LEVEL: envField.number({
        access: "secret",
        context: "server",
        default: 0,
      }),
      // comma-separated list
      LINK_TRANSFORM_MIDDLEWARE_TRUSTED_HOSTNAMES: envField.string({
        access: "secret",
        context: "server",
        default: "",
      }),
    },
  },
  integrations: [
    UnoCSS({
      injectReset: "@unocss/reset/tailwind-compat.css",
    }),
    vue(),
  ],
});
