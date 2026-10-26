<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-lockup-on-dark.svg">
    <img src="docs/assets/logo-lockup.svg" alt="Digital Catholic" width="360">
  </picture>
</p>

# Digital Catholic

[![CI](https://img.shields.io/github/actions/workflow/status/axcel-blade/Digital-Catholic/ci.yml?branch=main&label=CI&logo=astro)](https://github.com/axcel-blade/Digital-Catholic/actions/workflows/ci.yml)
[![CD](https://img.shields.io/github/actions/workflow/status/axcel-blade/Digital-Catholic/cd.yml?branch=main&label=CD&logo=githubpages)](https://github.com/axcel-blade/Digital-Catholic/actions/workflows/cd.yml)
[![Live site](https://img.shields.io/badge/live%20site-GitHub%20Pages-8a3b4f)](https://axcel-blade.github.io/Digital-Catholic/)
[![License: MIT](https://img.shields.io/badge/license-MIT-d4ae6e)](LICENSE.md)
[![Astro](https://img.shields.io/github/package-json/dependency-version/axcel-blade/Digital-Catholic/astro?logo=astro&label=Astro)](https://astro.build)
[![Node](https://img.shields.io/badge/node-%E2%89%A522.12-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Stars](https://img.shields.io/github/stars/axcel-blade/Digital-Catholic?style=flat)](https://github.com/axcel-blade/Digital-Catholic/stargazers)
[![Forks](https://img.shields.io/github/forks/axcel-blade/Digital-Catholic?style=flat)](https://github.com/axcel-blade/Digital-Catholic/forks)
[![Issues](https://img.shields.io/github/issues/axcel-blade/Digital-Catholic)](https://github.com/axcel-blade/Digital-Catholic/issues)
[![Last commit](https://img.shields.io/github/last-commit/axcel-blade/Digital-Catholic)](https://github.com/axcel-blade/Digital-Catholic/commits/main)

A static Catholic digital library for learning and sharing the faith — clear resources for Scripture, saints, sacraments, prayer, and the liturgical year, made for quiet reading and everyday growth.

**Live site:** [https://axcel-blade.github.io/Digital-Catholic/](https://axcel-blade.github.io/Digital-Catholic/)

---

## What it covers

The library has three content areas, grouped into three pathways. The same grouping drives the site navigation, the homepage, and the About page (see `src/lib/sections.ts`).

### Learn

| Section | What you'll find |
| --- | --- |
| **Scripture, Doctrine, and the Saints** | The Holy Bible — summaries of all 73 books of the Catholic canon, including the deuterocanonical books, and how the Bible was formed; core Catholic beliefs — the fundamental doctrines: the Trinity, the Incarnation, the Resurrection and Ascension, original sin and grace, heaven, hell, and purgatory, the Creeds, and the Four Last Things; the Holy Trinity — one God in three Persons — the Father, the Son, and the Holy Spirit — and how the Trinity appears across the Old and New Testaments; the seven gifts and the twelve fruits of the Holy Spirit, and what each means for the Christian life; the Twelve Apostles in traditional order — life, Gospel accounts, miracles, relics, death, and feast days; the parables, filterable by theme; and the miracles, filterable by kind of sign, with the Shroud of Turin and the Veil of Veronica; and marian apparitions (Guadalupe, Lourdes, Fátima, Knock, Velankanni, and others) and Eucharistic miracles from Lanciano to modern events, each labelled with its Church status; and Mary and the saints — biographies of holy men and women with life dates, feast days, miracles, and relics, plus the path to sainthood (Servant of God, Venerable, Blessed, Saint); the Marian doctrines, the intercession and veneration of saints, relics and sacramentals, and angels; and the Sacraments — all seven sacraments in Catechism order — initiation, healing, and service of communion — plus eight in-depth guides on Baptism and Confirmation, the Real Presence, Transubstantiation, Confession, Marriage, Holy Orders, Anointing and Viaticum, and worthy reception of Holy Communion; and the Ten Commandments — the text and meaning of each commandment |

### Study

| Section | What you'll find |
| --- | --- |
| **Study the Faith** | Scripture and Tradition, the Magisterium, the 73 books and the Deuterocanonical books, how Catholics interpret Scripture, faith and reason, and the development of doctrine; and the Church — the four marks, the Pope, bishops, priests, deacons and laity, apostolic succession, the Orthodox and Eastern Catholic Churches, and ecumenism; and Church history — the early Church and Church Fathers, the seven ecumenical councils, the Great Schism, the Reformation and Counter-Reformation, Trent and Vatican II, the papacy, and religious orders; and a timeline of milestones from Pentecost to the present, filterable by era; answers to common questions — Confession, the Real Presence, Mary and the saints, infant baptism, salvation, faith and works, the Pope, science and faith, and misconceptions; and a sourced, side-by-side comparison of Catholic, Eastern Orthodox, Oriental Orthodox, Anglican, and Protestant beliefs; plus a searchable FAQ on doctrine, worship, morality, and Church history; and a glossary — plain-language definitions of Catholic terms, from absolution to viaticum, with Catechism references; and Christian living — the capital sins and virtues, the theological and cardinal virtues, the Commandments, the Beatitudes, mortal and venial sin, conscience, mercy, and the Works of Mercy; and social teaching — human dignity, the common good, solidarity and subsidiarity, the poor, the dignity of work, family, stewardship of creation, and peace and citizenship; and living the faith — first Communion and Confirmation, Confession step by step, OCIA, vocations, dating and marriage, Mass for beginners, daily prayer, and faith at university and work; and study paths — guided learning plans for beginners, people becoming Catholic, and practising Catholics |

### Pray

| Section | What you'll find |
| --- | --- |
| **Prayer and Liturgy** | The Our Father and Hail Mary with full text and explanation; the Rosary — how to pray it, the traditional prayers, all twenty mysteries, and its origin; a Daily Gospel passage with a short explanation and a question for reflection; the Liturgy of the Hours, Lectio Divina, adoration and Benediction, the Divine Mercy Chaplet, the Angelus, the Stations of the Cross, novenas and litanies, and fasting; the Holy Mass — the order of Mass step by step and the items used at Mass; the Liturgical Calendar — seasons, solemnities, feasts, and memorials by year, with a “today” view; the parts of the Mass, Sunday and holy days of obligation, the liturgical year and its colours, the Real Presence, sacred music, sacred signs, Eastern liturgies, and reverence at Mass |

### Features

- **Guided homepage** with Learn / Study / Pray pathways, a featured liturgical-calendar panel, and a full library index.
- **Article pages** with breadcrumbs, metadata, an “On this page” list for longer articles, previous/next links, related reading, and a copy-link button.
- **Sources on every article** in an “About this article” panel: Scripture (linked to the USCCB New American Bible), the Catechism, Church documents, and other cited references, with the date each article was last reviewed.
- **Church status labels** for apparitions and Eucharistic miracles (approved for devotion, recognised or permitted, under investigation, historical tradition, or reported). Labels reflect only what each article states.
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
docs/                 ARCHITECTURE.md (how the site is built and deployed), DESIGN.md (design system), and assets/ (logos and brand guide)
docker/               nginx config for the Docker image
Dockerfile            Multi-stage build (Node build, nginx serve)
docker-compose.yml    Local container setup on port 8080
.github/workflows/    CI (build check) and CD (deploy to GitHub Pages)
```

- How the site is built and deployed: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Add or edit content: [src/data/README.md](src/data/README.md)
- Section names, pathways, menu subgroups, and menu descriptions: `src/lib/sections.ts`
- Page titles and meta descriptions: `src/lib/seo.ts`
- Design tokens and component rules: [docs/DESIGN.md](docs/DESIGN.md)
- Logos and brand usage: [docs/assets/](docs/assets/README.md)

---

## Contributing and support

- Contribution workflow: [CONTRIBUTING.md](CONTRIBUTING.md)
- Bug reports and content requests: [GitHub Issues](https://github.com/axcel-blade/Digital-Catholic/issues)
- Help and contact: [SUPPORT.md](SUPPORT.md)
- Security: [SECURITY.md](SECURITY.md)
- Community standards: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- Change history: [CHANGELOG.md](CHANGELOG.md)

## Sources and image credits

Each article lists its sources — Scripture, the Catechism, Church documents, and other checked references — in its “About this article” panel. Images come from Wikimedia Commons; most are public domain, and some photos are under Creative Commons licences that require attribution. The source, author, and licence of every image is recorded in the `CREDITS.md` file of its folder (for example [public/saints/CREDITS.md](public/saints/CREDITS.md)), and attribution-required photos are also credited in their captions.

## Licence

The code is released under the [MIT License](LICENSE.md). Images keep their own licences, as listed in each folder's `CREDITS.md`.
