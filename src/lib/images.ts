import fs from 'node:fs';
import path from 'node:path';
import { withBase } from './paths';

export interface PublicImage {
	/** URL with the site base applied */
	src: string;
	width: number;
	height: number;
	alt: string;
}

const publicDir = path.join(process.cwd(), 'public');
const sizeCache = new Map<string, { width: number; height: number } | null>();

function readJpegSize(buf: Buffer): { width: number; height: number } | null {
	if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
	let offset = 2;
	while (offset < buf.length) {
		if (buf[offset] !== 0xff) {
			offset += 1;
			continue;
		}
		const marker = buf[offset + 1];
		// Standalone markers carry no length.
		if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
			offset += 2;
			continue;
		}
		const length = buf.readUInt16BE(offset + 2);
		const isStartOfFrame =
			marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
		if (isStartOfFrame) {
			return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
		}
		offset += 2 + length;
	}
	return null;
}

function readPngSize(buf: Buffer): { width: number; height: number } | null {
	if (buf.toString('ascii', 1, 4) !== 'PNG') return null;
	return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readSize(publicPath: string) {
	if (sizeCache.has(publicPath)) return sizeCache.get(publicPath) ?? null;
	const file = path.join(publicDir, publicPath.replace(/^\//, ''));
	let size: { width: number; height: number } | null = null;
	if (fs.existsSync(file)) {
		const buf = fs.readFileSync(file);
		size = readJpegSize(buf) ?? readPngSize(buf);
	}
	sizeCache.set(publicPath, size);
	return size;
}

/**
 * Resolve an image in /public with its intrinsic dimensions.
 * Returns null when the file does not exist, so pages can skip missing art
 * instead of rendering a broken image.
 */
export function getPublicImage(publicPath: string, alt: string): PublicImage | null {
	const normalized = publicPath.startsWith('/') ? publicPath : `/${publicPath}`;
	const size = readSize(normalized);
	if (!size) return null;
	return { src: withBase(normalized), alt, ...size };
}

/** Article art stored as `/public/{folder}/{slug}.jpg`. */
export function getCollectionImage(folder: string, slug: string, alt: string): PublicImage | null {
	return getPublicImage(`/${folder}/${slug}.jpg`, alt);
}
