# Architecture

Digital Catholic is a fully static website. Every page is rendered to HTML at build time by [Astro](https://astro.build); there is no server, database, or external API at runtime. The only client-side JavaScript is for search, the theme toggle, and the mobile menu.

---

## Overview

```
 src/data/**/*.ts          content (one module per article)
        │
        ▼
 section index.ts          import.meta.glob → sorted collection + getX(slug)
        │
        ├──────────────► src/pages/**            routes; getStaticPaths() per item
        │                     │
        │                     ▼
        │               src/layouts/             BaseLayout / ArticleLayout
        │                     │
        └──► src/lib/searchIndex.ts ──► SiteSearch (index inlined into the page)
                              │
                              ▼
                     astro build → dist/        static HTML, CSS, JS, sitemap
                              │
             ┌────────────────┴────────────────┐
             ▼                                 ▼
     GitHub Pages (CD)                  nginx container (Docker)
```

---

## Layers

### 1. Content — `src/data/`

All site content is written as TypeScript objects, not Markdown or a CMS.

- Each section has its own folder (`saints/`, `miracles/`, `parables/`, …) containing:
  - `types.ts` — the shape of an article in that section
  - `intro.ts` or `shared.ts` — section intro text and shared content
  - `items/*.ts` — one default-exported object per article
  - `index.ts` — loads every item and exports the collection plus lookup helpers
- `index.ts` uses Vite's `import.meta.glob('./items/*.ts', { eager: true })` and the helpers in `src/data/lib/loadCollection.ts`:
  - `loadCollection` sorts items by `slug`
  - `loadCollectionByNumber` sorts by a numeric field (Commandments)
  - Sections with a fixed order (disciples, Rosary mystery sets) re-sort after loading
- Adding a file to `items/` is enough — no manual registration.
- Flat files such as `src/data/saints.ts` are re-export shims so pages can import from short paths (`../../data/saints`).
- Some sections are not item collections:
  - **Holy Bible** — `bible/books/old-testament.ts` and `new-testament.ts` hold all 73 books
  - **Items Used at Mass** — `mass/index.ts` exports grouped `massSections`
  - **Liturgical Calendar** — `liturgical-calendar/compute.ts` calculates the year (see below)

See [src/data/README.md](../src/data/README.md) for the contributor guide.

### 2. Routing — `src/pages/`

Astro's file-based routing. Each section has:

| File | Output |
| --- | --- |
| `<section>/index.astro` | Section listing page, e.g. `/saints` |
| `<section>/[slug].astro` | One page per item; `getStaticPaths()` maps the collection to slugs |

Other routes: `index.astro` (home), `about.astro`, `contact.astro`, `commandments/index.astro`, `mass/index.astro`, `rosary/origin.astro`, and `liturgical-calendar/[year].astro`.

The Liturgical Calendar computes the current year on `/liturgical-calendar` and pre-renders one year back and two years ahead at `/liturgical-calendar/<year>`. Because pages are built ahead of time, the "current year" is the year of the last build.

### 3. Layouts and components

| Path | Role |
| --- | --- |
| `src/layouts/BaseLayout.astro` | HTML shell: `<head>` via `SEOHead`, header, navigation, search, theme toggle, footer |
| `src/layouts/ArticleLayout.astro` | Wraps `BaseLayout` for article pages: back link, category, optional image, `Article` JSON-LD |
| `src/components/SEOHead.astro` | Title, description, canonical URL, Open Graph/Twitter tags, JSON-LD |
| `src/components/SiteNav*.astro`, `SiteHeaderMenu*.astro` | Primary nav, "Explore" section menu, mobile menu toggle |
| `src/components/SiteSearch.astro` | Search box and results |
| `src/components/ThemeToggle.astro` | Light/dark switch |
| `src/components/LiturgicalCalendarView.astro` | Calendar table for a liturgical year |
| `src/components/PageBack.astro` | Back link to the parent section |

### 4. Shared logic — `src/lib/`

| File | Role |
| --- | --- |
| `paths.ts` | `withBase()` / `stripBase()` — prefix and strip the deploy base path (`/Digital-Catholic/` on GitHub Pages, `/` in Docker) |
| `seo.ts` | Site-wide metadata (`SITE`), per-section `PAGE_DESCRIPTIONS`, canonical/absolute URL helpers |
| `siteNav.ts` | Navigation items and active-state resolution |
| `searchIndex.ts` | `buildSearchIndex()` — flattens every section into `{ title, url, category, excerpt, body }` entries |

Internal links and asset URLs must go through `withBase()` (or `import.meta.env.BASE_URL`) so the site works under any base path.

### 5. Styling — `src/styles/global.css`

One global stylesheet with CSS custom properties for both themes. No CSS framework. The design tokens and principles are documented in [DESIGN.md](DESIGN.md).

### 6. Static assets — `public/`

Copied to the output as-is. Images are stored per section, named after the item slug: `public/saints/`, `public/disciples/`, `public/eucharistic-miracles/`, `public/marian-apparitions/`, `public/sacraments/`, `public/mass/`. Also holds the favicon and `robots.txt`.

---

## Client-side behaviour

The site works without JavaScript, apart from these three features:

- **Search.** At build time, `SiteSearch.astro` calls `buildSearchIndex()` and inlines the index into the page with `define:vars`. Queries are split into terms, scored against each entry's title and lowercased `body` text, and ranked in the browser. Nothing is sent to a server, and new items are indexed on the next build without code changes. A new *section* needs an entry in `searchIndex.ts`.
- **Theme.** An inline script in `BaseLayout` reads the saved preference from `localStorage` (falling back to the OS setting) and sets `data-theme` on `<html>` before first paint, which avoids a flash of the wrong theme. `ThemeToggle` updates the attribute and stores the choice.
- **Mobile menu.** The header menu toggle opens and closes the navigation on small screens.

---

## Liturgical calendar

`src/data/liturgical-calendar/compute.ts` generates the calendar instead of storing it:

1. `getEasterSunday(year)` computes Easter.
2. Moveable feasts and seasons (Ash Wednesday, Pentecost, Advent, etc.) are derived from Easter and Christmas.
3. Fixed solemnities, feasts, and memorials come from `fixed-feasts.ts`.
4. `buildLiturgicalYear(year)` merges them into a sorted year with seasons and liturgical colours.

---

## SEO

- `SEOHead` emits the title, meta description, canonical URL, Open Graph and Twitter cards, and JSON-LD (`Article` on article pages).
- `@astrojs/sitemap` writes `sitemap-index.xml` during the build.
- Canonical URLs are built from `site` + `base` in `astro.config.mjs`, which read the `ASTRO_SITE` and `ASTRO_BASE` environment variables (defaults: `https://axcel-blade.github.io` and `/`).

---

## Build and development

- `npm run dev` — Astro dev server. A small Vite plugin in `astro.config.mjs` restarts the server whenever `src/data/` changes, so new items get their `getStaticPaths()` routes without a manual restart.
- `npm run build` — static output in `dist/`.
- `npm run preview` — serve `dist/` locally.
- `scripts/split-data.ts` — one-off script that split the old single-file data modules into per-item files. It is not part of the build.

---

## Deployment

### GitHub Pages (production)

`.github/workflows/cd.yml` runs on every push to `main`:

1. `npm ci`
2. `npm run build` with `ASTRO_SITE=https://<owner>.github.io` and `ASTRO_BASE=/<repo>/`
3. Upload `dist/` as a Pages artifact and deploy it

`.github/workflows/ci.yml` runs the same build as a check. `.github/workflows/pr-base-branch.yml` rejects pull requests into `main` that do not come from the integration branch.

### Docker

A multi-stage `Dockerfile`:

1. **Build stage** (`node:22-alpine`): `npm ci` and `npm run build`. The build arguments `ASTRO_SITE` and `ASTRO_BASE` (default `/`) are passed through.
2. **Runtime stage** (`nginx:1.27-alpine`): serves `dist/` using `docker/nginx.conf`:
   - `try_files $uri $uri/ $uri.html` resolves Astro's directory-style routes
   - gzip for text assets
   - one-year immutable cache for hashed files in `/_astro/`
   - a container healthcheck against `/`

`docker-compose.yml` publishes the container on port 8080.

---

## Design constraints

- **Static only.** No runtime server code, API routes, or databases.
- **Minimal dependencies.** Only `astro` and `@astrojs/sitemap`. Features are implemented natively rather than by adding libraries.
- **Content as code.** Articles are type-checked TypeScript, so a malformed entry fails the build instead of rendering incorrectly.
- **Base-path agnostic.** All URLs go through `withBase()`, so the same code serves `/Digital-Catholic/` on GitHub Pages and `/` in Docker.
