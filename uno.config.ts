import presetCSS from "@olets/unocss-preset-css";
import { defineConfig } from "unocss";
import { ids } from "./src/constants";

const fediversePurple = "#9500ff";

export default defineConfig({
  preflights: [
    {
      getCSS: () =>
        [
          `
          :root {
            --color-light: white;
            --color-dark: black;
            --color-background: var(--color-light);
            --color-foreground: var(--color-dark);

            background-color: var(--color-background);
            color: var(--color-foreground);
            color-scheme: var(--color-scheme, light);
            transition-duration: var(--transition-duration, 200ms);
            transition-property: background-color, color;
          
            &[data-initial-color-scheme="dark"],
            &:has(#${ids.colorSchemeSelector} option[value="dark"]:checked) {
              --color-background: var(--color-dark);
              --color-foreground: var(--color-light);
              --color-scheme: dark;
            }
          
            @media (prefers-color-scheme: dark) {
              &[data-initial-color-scheme="light dark"],
              &:has(#${ids.colorSchemeSelector} option[value="light dark"]:checked) {
                --color-background: var(--color-dark);
                --color-foreground: var(--color-light);
                --color-scheme: dark;
              }
            }
          
            @media screen and (prefers-reduced-motion: reduce), (update: slow) {
              --transition-duration: none;
            }
          }`,
          `
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
        ].join(" "),
    },
  ],
  // @ts-ignore
  presets: [presetCSS()],
  safelist: [
    "{background:var(--color-background)}",
    "{color:var(--color-foreground)}",
  ],
});
