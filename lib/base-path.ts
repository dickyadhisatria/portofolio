const BASE_PATH =
  typeof window !== 'undefined' && window.location.pathname.startsWith('/portofolio')
    ? '/portofolio'
    : '';

export function withBasePath(path: string): string {
  if (path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path}`;
}
