export default function RouteForwardSlash(path: string): string {
  const slashSymbolRegex = new RegExp("^/[a-zA-Z0-9]");

  if (path === "/") return path;

  return (slashSymbolRegex.test(path) ? path : `/${path}`).toLowerCase();
}
