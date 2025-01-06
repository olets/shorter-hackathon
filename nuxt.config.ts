import presetCSS from "@olets/unocss-preset-css";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  unocss: {
    preflights: [
      {
        getCSS: () => `
          :root {
            --border-width: 1px;
            --color-background: #000;
            --color-foreground: #fff;
            --width-fancy-corners: 20px;
          }
          a {
            cursor: pointer;
          }
        `,
      },
    ],
    // @ts-ignore
    presets: [presetCSS()],
    nuxtLayers: true,
    safelist: [
      "{background:var(--color-background)}",
      "{color:var(--color-foreground)}",
    ],
  },
});
