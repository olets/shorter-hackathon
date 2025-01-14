import presetCSS from "@olets/unocss-preset-css";
import { defineConfig } from "unocss";
import { ids } from "./src/constants";

/**
 * Fediverse logo's dark purple, with lightness reduced for color contrast accessibility
 */
const colorAccent = "#8100D6";

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
            --color-accent: ${colorAccent};
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

          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }
          
          .unfocused-sr-only:not(:focus) {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
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
