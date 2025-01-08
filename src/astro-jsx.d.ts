/**
 * https://github.com/withastro/astro/issues/6205#issuecomment-2331201637
 */
declare namespace astroHTML.JSX {
  export interface IntrinsicAttributes {
    class?: string;
    id?: string;
  }
}
