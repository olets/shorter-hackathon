import presetCSS from "@olets/unocss-preset-css";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  runtimeConfig: {
    public: {
      cdnURL: "https://shorter-hackathon.vercel.app/",
    },
  },
  unocss: {
    preflights: [
      {
        // @TODO color theme switcher
        getCSS: () => `
          :root {
            --border-width: 1px;
            --color-background: #000;
            --color-foreground: #fff;
            --width-fancy-corners: 20px;
          }
          a {
            cursor: pointer;
            text-decoration: underline !important;
            text-decoration-color: currentColor !important;
            transition: background-color 200ms, color 200ms, text-decoration-color 200ms;

            &:focus-visible,
            &:hover {
              text-decoration-color: transparent !important;
            }
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
