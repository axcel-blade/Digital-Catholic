/** Prefix a root-relative path with the site base (GitHub Pages subpath). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL;

	if (path === '/' || path === '') {
		return base.endsWith('/') ? base : `${base}/`;
	}

	const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
	const normalized = path.startsWith('/') ? path.slice(1) : path;
	return `${baseWithSlash}${normalized}`;
}

/** Strip the site base from a pathname for route matching. */
export function stripBase(pathname: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	if (base && base !== '/' && pathname.startsWith(base)) {
		const rest = pathname.slice(base.length);
		return rest || '/';
	}
	return pathname;
}
