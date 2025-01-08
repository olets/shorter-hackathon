import presetCSS from "@olets/unocss-preset-css";
import { defineConfig } from "unocss";

export default defineConfig({
  preflights: [
    {
      // @TODO color theme switcher
      getCSS: () => `
        :root {
          --border-width: 1px;
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
  safelist: [
    "{background:var(--color-background)}",
    "{color:var(--color-foreground)}",
  ],
});
