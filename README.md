# Digital Catholic

A static Catholic digital library for learning and sharing the faith — clear resources for Scripture, saints, sacraments, prayer, and the liturgical year, made for quiet reading and everyday growth.

**Live site:** [https://axcel-blade.github.io/Digital-Catholic/](https://axcel-blade.github.io/Digital-Catholic/)

---

## What it covers

The library has thirteen content areas, grouped into three pathways. The same grouping drives the site navigation, the homepage, and the About page (see `src/lib/sections.ts`).

### Learn

| Section | What you'll find |
| --- | --- |
| **Holy Bible** | Summaries of all 73 books of the Catholic canon, including the deuterocanonical books |
| **Saints** | Biographies of holy men and women with life dates and feast days |
| **Sacraments** | All seven sacraments in Catechism order — initiation, healing, and service of communion |
| **Ten Commandments** | The text and meaning of each commandment |

### Pray

| Section | What you'll find |
| --- | --- |
| **Prayers** | The Our Father and Hail Mary — full text and explanation |
| **Rosary** | How to pray it, the traditional prayers, all twenty mysteries, and its origin |
| **Items Used at Mass** | Sacred vessels, altar linens, liturgical books, vestments, and liturgical colors |
| **Liturgical Calendar** | Seasons, solemnities, feasts, and memorials by year, with a “today” view |

### Explore

| Section | What you'll find |
| --- | --- |
| **Disciples of Jesus** | The Twelve Apostles in traditional order — life, Gospel accounts, death, and feast days |
| **Miracles of Jesus** | Gospel accounts with Scripture references, filterable by kind of sign |
| **Eucharistic Miracles** | Accounts from Lanciano to modern events, each labeled with its Church status |
| **Marian Apparitions** | Guadalupe, Lourdes, Fátima, Knock, Velankanni, and others, each labeled with its Church status |
| **Parables of Jesus** | Stories of the Kingdom, filterable by theme |

### Features

- **Guided homepage** with Learn / Pray / Explore pathways, a featured liturgical-calendar panel, and a full library index.
- **Article pages** with breadcrumbs, metadata, an “On this page” list for longer articles, previous/next links, related reading, and a copy-link button.
- **Church status labels** for apparitions and Eucharistic miracles (approved for devotion, recognized or permitted, under investigation, historical tradition, or reported). Labels reflect only what each article states.
- **Site search** from any page (press `/`), with category labels, highlighted excerpts, and full keyboard support.
- **Light and dark themes**, a responsive layout, and accessibility built in: skip link, visible focus, 44px touch targets, and ARIA on every interactive control.
- **SEO**: a unique description per page, canonical URLs, Open Graph and Twitter cards with a branded social image, JSON-LD (WebSite, Organization, Article, BreadcrumbList), and a sitemap.

Content is offered for knowledge and devotion, not as a substitute for the Magisterium, your parish, or spiritual direction.

---

## Built with

- [Astro 6](https://astro.build) — static site generation
- Plain CSS with design tokens — no UI framework or web fonts (see [docs/DESIGN.md](docs/DESIGN.md))
- Client-side search — a static `search-index.json` is generated at build time and fetched on first use; no external service
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap for SEO

All content lives in TypeScript modules under `src/data/` — one file per article, loaded automatically by each section's `index.ts`.

---

## Running locally

**Requires:** Node.js 22.12 or newer

```sh
git clone https://github.com/axcel-blade/Digital-Catholic.git
cd Digital-Catholic
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |

### GitHub Pages base path

The live site is served from `/Digital-Catholic/`. The deploy workflow sets `ASTRO_SITE` and `ASTRO_BASE` automatically. To reproduce the production build:

```sh
ASTRO_SITE=https://axcel-blade.github.io ASTRO_BASE=/Digital-Catholic/ npm run build
```

> **Windows note:** with Astro 6.3.3, building with a non-root `ASTRO_BASE` on Windows fails with `Missing parameter: slug`. The same build succeeds on Linux (including CI). On Windows, build at the root path, or run the base-path build in Docker (below) or WSL.

All internal links go through `withBase()` in `src/lib/paths.ts`, so pages work under any base path.

---

## Running with Docker

**Requires:** Docker (with Docker Compose)

```sh
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080).

The image is a multi-stage build: Node 22 runs `npm ci` and `npm run build`, and the static output in `dist/` is served by nginx (config in `docker/nginx.conf`). To build and run the image without Compose:

```sh
docker build -t digital-catholic .
docker run --rm -p 8080:80 digital-catholic
```

The optional build argument `ASTRO_SITE` sets the site URL used for canonical links and the sitemap (for example `--build-arg ASTRO_SITE=https://example.org`). The container serves the site from the root path, so leave `ASTRO_BASE` at its default of `/`.

---

## Project structure

```
public/               Static assets — favicon, social image (og-image.png), robots.txt, article images
scripts/              One-off maintenance scripts (content file splitter)
src/
  components/         Header, footer, search, cards, filters, breadcrumbs, trust panel, SEO head
  data/               Content files — one .ts per article per section
    lib/              Shared loaders and the optional trust/source fields (trust.ts)
  layouts/            BaseLayout, SectionLayout (landing pages), ArticleLayout (articles)
  lib/                Section registry, navigation, SEO, search index, image and path helpers
  pages/              Routes — home, about, contact, 404, all section pages, search-index.json
  styles/             global.css — design tokens, light and dark themes
docs/                 ARCHITECTURE.md (how the site is built and deployed) and DESIGN.md (design system)
docker/               nginx config for the Docker image
Dockerfile            Multi-stage build (Node build, nginx serve)
docker-compose.yml    Local container setup on port 8080
.github/workflows/    CI (build check) and CD (deploy to GitHub Pages)
```

- How the site is built and deployed: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Add or edit content: [src/data/README.md](src/data/README.md)
- Section names, pathways, and menu descriptions: `src/lib/sections.ts`
- Page titles and meta descriptions: `src/lib/seo.ts`
- Design tokens and component rules: [docs/DESIGN.md](docs/DESIGN.md)

---

## Contributing and support

- Contribution workflow: [CONTRIBUTING.md](CONTRIBUTING.md)
- Bug reports and content requests: [GitHub Issues](https://github.com/axcel-blade/Digital-Catholic/issues)
- Help and contact: [SUPPORT.md](SUPPORT.md)
- Security: [SECURITY.md](SECURITY.md)
- Change history: [CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE.md)
