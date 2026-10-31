import type { CSSProperties } from 'react';

/** Variabel CSS kustom (mis. `--r`, `--d`) untuk atribut `style` React. */
export function cssVars(vars: Record<string, string | number>): CSSProperties {
  return vars as unknown as CSSProperties;
}
