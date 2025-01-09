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
            --color-border: var(--color-foreground);
            --DynamicBox-color-background: var(--color-background);
            --DynamicBox-corner-width: 1.25rem;
            --transition-duration: 200ms;
            --transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            
            transition-property: var(--transition-property);
          }

          a,
          input,
          select {
            cursor: pointer;

            &:focus-visible {
              outline-offset: 0.5rem;
            }
          }

          a {
            text-decoration: underline;
            text-decoration-color: var(--color-accent);
            transition-duration: var(--transition-duration);
            transition-property: var(--transition-property);

            &:focus-visible,
            &:hover {
              text-decoration-color: transparent;
            }

            &:hover {
              color: var(--color-accent);
              text-decoration-color: transparent;
            }
          }

          select {
            transition-duration: var(--transition-duration);
            transition-property: var(--transition-property);

            &:focus-visible,
            &:hover {
              border-color: var(--color-accent);
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
