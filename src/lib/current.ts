/**
 * Mirrors how Webflow marks the current page in exported markup (`w--current`, aria-current="page"):
 * a link is current when it points at the page being rendered (hash links are never marked).
 */
const normalize = (p: string) => {
  let out = p.split(/[?#]/)[0].replace(/\.html$/, '').replace(/\/index$/, '/');
  if (out.length > 1) out = out.replace(/\/+$/, '');
  return out || '/';
};

export function isCurrentPath(href: string, pathname: string): boolean {
  if (href.includes('#')) return false;
  return normalize(href) === normalize(pathname);
}
