import presetCSS from "@olets/unocss-preset-css";
import { defineConfig } from "unocss";

const fediversePurple = "#9500ff";

export default defineConfig({
  preflights: [
    {
      // @TODO color theme switcher
      getCSS: () => `
        :root {
          --border-width: 1px;
          --color-accent: ${fediversePurple};
          --width-fancy-corners: 20px;

          accent-color: var(--color-accent);
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
