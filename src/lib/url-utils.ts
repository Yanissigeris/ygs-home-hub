/** Add a trailing slash to a path, preserving root, query strings and fragments. */
export function withTrailingSlash(path: string): string {
  if (!path) return "/";
  if (path === "/") return "/";
  if (path.includes("?") || path.includes("#")) return path;
  return path.endsWith("/") ? path : path + "/";
}
