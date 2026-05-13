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
