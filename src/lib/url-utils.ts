/** Add a trailing slash to a path, preserving root, query strings and fragments. */
export function withTrailingSlash(path: string): string {
  if (!path) return "/";
  if (path === "/") return "/";
  if (path.includes("?") || path.includes("#")) return path;
  return path.endsWith("/") ? path : path + "/";
}

/** Remove a trailing slash from a path, but never produce an empty string.
 *  Used to normalize pathname before lookup in FR↔EN route maps whose keys
 *  do not include trailing slashes. */
export function stripTrailingSlash(path: string): string {
  if (!path) return "/";
  if (path === "/") return "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/** Normalize an internal href to its canonical form (trailing slash before any
 *  query string or fragment). External URLs, mailto:/tel:/sms:, anchors and
 *  file paths (anything with an extension) are returned untouched.
 *  Every canonical URL on yanisgauthier.com ends with "/", and Netlify 301s
 *  the slash-less form, so a Link without the slash costs a redirect. */
export function canonicalPath(href: string): string {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return href;
  const m = href.match(/^([^?#]*)([?#].*)?$/);
  if (!m) return href;
  const [, path, suffix = ""] = m;
  if (path === "/" || /\.[a-z0-9]{2,5}$/i.test(path)) return href;
  return (path.endsWith("/") ? path : path + "/") + suffix;
}
