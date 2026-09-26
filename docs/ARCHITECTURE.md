# Architecture

Digital Catholic is a fully static website. Every page is rendered to HTML at build time by [Astro](https://astro.build); there is no server, database, or external API at runtime. Client-side JavaScript is limited to progressive enhancements: search, the theme toggle, navigation menus, list filters, the copy-link button, and the “today” view of the liturgical calendar.

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
        │               src/layouts/             BaseLayout / SectionLayout / ArticleLayout
        │                     │                  (navigation from src/lib/sections.ts)
        └──► src/lib/searchIndex.ts ──► /search-index.json ──► SiteSearch (fetched on first use)
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
  - Sections with a fixed order re-sort after loading: disciples by their `order` field, sacraments in Catechism order, prayers and Rosary mystery sets by a fixed slug list
- Adding a file to `items/` is enough — no manual registration.
- Every article type extends `TrustInfo` from `src/data/lib/trust.ts`: optional `churchStatus`, `statusNote`, `sources`, `primaryReferences`, `furtherReading`, and `lastReviewed`. Pages render each field only when it is present.
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

Other routes: `index.astro` (home), `about.astro`, `contact.astro`, `404.astro`, `commandments/index.astro`, `mass/index.astro`, `rosary/origin.astro`, `liturgical-calendar/[year].astro`, and `search-index.json.ts` (a static JSON endpoint for search).

Listing pages use `SectionLayout`; item pages use `ArticleLayout`.

The Liturgical Calendar computes the current year on `/liturgical-calendar` and pre-renders one year back and two years ahead at `/liturgical-calendar/<year>`. Because pages are built ahead of time, the "current year" is the year of the last build.

### 3. Layouts and components

| Path | Role |
| --- | --- |
| `src/layouts/BaseLayout.astro` | HTML shell: theme script, `SEOHead`, skip link, `SiteHeader`, `<main>`, `SiteFooter`; adds `BreadcrumbList` JSON-LD |
| `src/layouts/SectionLayout.astro` | Section listing pages: breadcrumbs, category label, title, intro, count, and a link back to the Learn/Pray/Explore pathway |
| `src/layouts/ArticleLayout.astro` | Article pages: breadcrumbs, metadata, image, “On this page” list, copy link, trust panel, previous/next, related reading, `Article` JSON-LD |
| `src/components/SiteHeader.astro` | Brand, grouped Learn/Pray/Explore dropdowns, mobile menu, search and theme buttons |
| `src/components/SiteFooter.astro` | Pathway links, disclaimer, About/Contact/GitHub |
| `src/components/SiteSearch.astro` | Search panel (ARIA combobox) that fetches and queries `search-index.json` |
| `src/components/SEOHead.astro` | Description, canonical URL, Open Graph/Twitter tags, WebSite/Organization JSON-LD |
| `src/components/EntryCard.astro`, `CardFilter.astro` | Clickable article cards and progressive-enhancement filters |
| `src/components/Breadcrumbs.astro`, `PageHeader.astro` | Breadcrumb trail and section page header |
| `src/components/StatusBadge.astro`, `StatusLegend.astro`, `TrustPanel.astro` | Church status labels and the “About this article” panel |
| `src/components/SectionList.astro` | Article sections with anchor ids shared with the “On this page” list |
| `src/components/ShareLink.astro` | Copy-link button |
| `src/components/LiturgicalCalendarView.astro` | Year navigation, season summary, “today” card, and monthly listings |

### 4. Shared logic — `src/lib/`

| File | Role |
| --- | --- |
| `paths.ts` | `withBase()` / `stripBase()` — prefix and strip the deploy base path (`/Digital-Catholic/` on GitHub Pages, `/` in Docker) |
| `seo.ts` | Site-wide metadata (`SITE`), per-section `PAGE_DESCRIPTIONS`, canonical/absolute URL helpers |
| `sections.ts` | Registry of the thirteen content areas and their Learn/Pray/Explore grouping — used by navigation, homepage, About, footer, and breadcrumbs |
| `siteNav.ts` | Builds the navigation from `sections.ts` and resolves active states |
| `searchIndex.ts` | `buildSearchIndex()` — flattens every section into `{ title, url, category, excerpt, body }` entries |
| `images.ts` | Reads JPEG/PNG dimensions from `public/` at build time; returns `null` for missing files so pages skip them |
| `article.ts` | Heading anchors for the “On this page” list, previous/next neighbors, and related-article selection |

Internal links and asset URLs must go through `withBase()` (or `import.meta.env.BASE_URL`) so the site works under any base path.

### 5. Styling — `src/styles/global.css`

One global stylesheet built on CSS custom properties (design tokens) for a single dark theme. No CSS framework and no web fonts. The tokens, components, and principles are documented in [DESIGN.md](DESIGN.md).

### 6. Static assets — `public/`

Copied to the output as-is. Images are stored per section, named after the item slug: `public/saints/`, `public/disciples/`, `public/eucharistic-miracles/`, `public/marian-apparitions/`, `public/sacraments/`, `public/mass/`. Also holds the favicon, the 1200×630 social image (`og-image.png`), and `robots.txt`.

---

## Client-side behaviour

All content is readable without JavaScript. Scripts add:

- **Search.** `src/pages/search-index.json.ts` writes the output of `buildSearchIndex()` to a static JSON file at build time. `SiteSearch` fetches it the first time the search panel opens (button or `/` key), then scores each query's terms against titles, categories, excerpts, and body text in the browser. Results support arrow keys, Enter, and Escape. Nothing is sent to a server, and new items are indexed on the next build without code changes. A new *section* needs an entry in `searchIndex.ts`.
- **Navigation.** Learn/Pray/Explore dropdowns on desktop and a grouped menu on small screens; both close on Escape or an outside click and manage focus.
- **Filters.** `CardFilter` shows or hides cards by category or Church status. It is hidden without JavaScript, so every card stays visible.
- **Copy link.** Copies the page's canonical URL to the clipboard.
- **Liturgical “today”.** The calendar and homepage panels compare the visitor's own date with the build-time calendar data to show the current season and celebration. Nothing about “today” is baked into the HTML.

---

## Liturgical calendar

`src/data/liturgical-calendar/compute.ts` generates the calendar instead of storing it:

1. `getEasterSunday(year)` computes Easter.
2. Moveable feasts and seasons (Ash Wednesday, Pentecost, Advent, etc.) are derived from Easter and Christmas.
3. Fixed solemnities, feasts, and memorials come from `fixed-feasts.ts`.
4. `buildLiturgicalYear(year)` merges them into a sorted year with seasons and liturgical colours.

---

## SEO

- `SEOHead` emits the meta description, canonical URL, Open Graph and Twitter cards, and JSON-LD: `WebSite` and `Organization` on every page, `BreadcrumbList` on section and article pages, and `Article` on article pages.
- Every page has its own description, from `PAGE_DESCRIPTIONS` in `src/lib/seo.ts` or the article excerpt.
- The default social image is `public/og-image.png`; article pages use their own image when they have one.
- `@astrojs/sitemap` writes `sitemap-index.xml` during the build, excluding the search index and the 404 page.
- Canonical URLs are built from `site` + `base` in `astro.config.mjs`, which read the `ASTRO_SITE` and `ASTRO_BASE` environment variables (defaults: `https://axcel-blade.github.io` and `/`).

---

## Build and development

- `npm run dev` — Astro dev server. A small Vite plugin in `astro.config.mjs` restarts the server whenever `src/data/` changes, so new items get their `getStaticPaths()` routes without a manual restart.
- `npm run build` — static output in `dist/`.
- `npm run preview` — serve `dist/` locally.
- On Windows, a build with a non-root `ASTRO_BASE` fails with Astro 6.3.3 (`Missing parameter: slug`); the same build succeeds on Linux and in CI. Use Docker or WSL to reproduce the GitHub Pages build locally.
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
