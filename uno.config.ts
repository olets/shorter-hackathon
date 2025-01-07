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
          &:has(#color-scheme option[value="dark"]:checked) {
            --color-background: var(--color-dark);
            --color-foreground: var(--color-light);
            --color-scheme: dark;
          }
        
          @media (prefers-color-scheme: dark) {
            &[data-initial-color-scheme="light dark"],
            &:has(#color-scheme option[value="light dark"]:checked) {
              --color-background: var(--color-dark);
              --color-foreground: var(--color-light);
              --color-scheme: dark;
            }
          }
        
          @media screen and (prefers-reduced-motion: reduce), (update: slow) {
            --transition-duration: none;
          }
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
