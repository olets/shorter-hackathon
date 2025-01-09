interface Window {
  // SEEALSO src/components/ColorSchemeManager.astro, src/env.d.ts
  colorScheme: {
    get: () => string;
    set: (scheme: string) => void;
  };
}

/**
 * https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
 */
interface ImportMetaEnv {
  readonly LINK_TRANSFORM_MIDDLEWARE_LOG_LEVEL?: 0 | 1 | 2;
  readonly LINK_TRANSFORM_MIDDLEWARE_TRUSTED_HOSTNAMES?: string; // comma-separated list
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
