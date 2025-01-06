import presetCSS from "@olets/unocss-preset-css";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
    // @ts-ignore
    presets: [presetCSS()],
  },
});
