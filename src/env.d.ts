interface Window {
  // SEEALSO src/components/ColorSchemeManager.astro, src/env.d.ts
  colorScheme: {
    get: () => string;
    set: (scheme: string) => void;
  };
}
