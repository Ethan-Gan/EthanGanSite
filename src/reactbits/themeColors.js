/**
 * themeColors.js — bridge between the CSS theme (theme.css) and canvas/JS code.
 *
 * Canvas APIs (ctx.strokeStyle, ctx.fillStyle, gradient stops) need concrete
 * color strings and cannot consume CSS `var(--token)` directly. This helper
 * reads a semantic token off the document root and returns its resolved value,
 * so reactbits components can keep the theme as their single source of truth
 * instead of hardcoding literals.
 *
 * getComputedStyle resolves the full var() chain (semantic -> palette) down to
 * a concrete color string, which is what the canvas needs.
 */

/**
 * Read a CSS custom property from :root and return its resolved value.
 *
 * @param {string} token   CSS custom property name, e.g. '--color-grid-line'.
 * @param {string} [fallback='']  Value to return if unavailable (e.g. non-browser env).
 * @returns {string} The trimmed resolved color string, or the fallback.
 */
export function getThemeColor(token, fallback = '') {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return fallback;
  }
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  return value || fallback;
}
