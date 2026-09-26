# Changelog

All notable changes to Digital Catholic are documented here.

---

## [Unreleased]

### Added
- Site-wide redesign as a warm, editorial Catholic digital library: paper background, burgundy and gold accents, serif headings and reading text, and matching dark theme
- Learn / Pray / Explore information architecture, defined once in `src/lib/sections.ts` and used by navigation, homepage, About, and footer
- Header with grouped dropdown menus, grouped mobile menu (Escape to close, focus management), skip-to-content link, and a new site footer
- Homepage hero, guided pathways, featured liturgical-calendar panel (with a “today” view computed in the visitor's browser), and a library index of all thirteen sections
- Shared section landing layout: breadcrumbs, category label, intro, item count, and link back to its pathway
- Category filters on Miracles and Parables; Church status filters and legend on Eucharistic Miracles and Marian Apparitions
- Article layout: breadcrumbs, metadata, “On this page” list (sticky on large screens), copy-link button, previous/next links, related reading, and back link
- Optional trust fields on every article type (`churchStatus`, `statusNote`, `sources`, `primaryReferences`, `furtherReading`, `lastReviewed`) and an “About this article” panel that shows them only when present
- Church status for all Marian apparitions and Eucharistic miracles, based only on what each article states
- Search: Bible books, prayers, and Contact added to the index; category labels, highlighted excerpts, combobox keyboard support, no-results message, and `/` shortcut. The index is now a static `search-index.json` fetched on first use instead of being inlined into every page
- SEO: dedicated descriptions for every page (including Contact, Holy Bible, and Prayers), branded 1200×630 social image, BreadcrumbList JSON-LD, and image alt text in social cards
- Branded favicon, 404 page, and `docs/DESIGN.md` rewritten to match the new design tokens
- Docker support: multi-stage `Dockerfile` (Node build, nginx serve), `docker-compose.yml`, `.dockerignore`, and `docker/nginx.conf`
- Prayers section expanded with additional common Catholic prayers
- Prayer page improvements (slug routing, intro text, type system)
- Items Used at Mass section (`/mass`) — sacred vessels, altar linens, liturgical books, vestments, liturgical colors, and other sacred items, with images under `public/mass/`
- Images for all 26 Items Used at Mass entries (every item except the liturgical colors), from Wikimedia Commons and resized to at most 960px, with alt text describing each image and attribution in `public/mass/CREDITS.md`
- Origin of the Rosary moved to its own page at `/rosary/origin`
- Saints: St. Charbel and Archbishop Fulton J. Sheen added
- Design system documentation moved to `docs/DESIGN.md`
- Architecture documentation added at `docs/ARCHITECTURE.md`
- `ROADMAP.md` and `TODO.md` removed

### Changed
- Sacraments are listed in Catechism order (initiation, healing, service of communion)
- Images now use their intrinsic width and height, read at build time
- Keyword meta tag removed; homepage title and description rewritten
- Search index and 404 page excluded from the sitemap

### Fixed
- Undefined CSS variables (`--radius`, `--color-text-muted`, `--color-heading`, `--radius-md`)
- Items Used at Mass no longer shows broken images for files missing from `public/mass/`
- `public/mass/candles.jpg` and `public/mass/crucifix.jpg` were saved Wikimedia error pages rather than images; replaced with real photos
- `public/mass/corporal.jpg` reduced from 1.9 MB to under 50 KB
- Disciples now appear in traditional order (they were sorted by a field that did not exist)
- Christmas season dates in the liturgical calendar: the season now runs to the Baptism of the Lord in the following January, and early January is included
- About page showed 10 content areas instead of 13
- Contact, Holy Bible, and Prayers pages fell back to the homepage meta description

### Removed
- Old header components (`SiteNavPrimary`, `SiteNavExplore`, `SiteNavLink`, `SiteHeaderMenu`, `SiteHeaderMenuToggle`) and `PageBack`, replaced by `SiteHeader` and breadcrumbs

---

## [0.9.0] — 2026-05-26

### Added
- Contact page with email and GitHub links
- Navigation updated to include Contact link

## [0.8.0] — 2026-05-24

### Added
- Holy Bible section covering all 73 books of the Catholic canon (Old and New Testament)
- Per-book summary pages with abbreviations, testament, and category metadata

## [0.7.0] — 2026-05-23

### Added
- Prayers section with the Our Father and Hail Mary (full text and explanation)
- Prayer article pages with related-prayers navigation

## [0.6.0] — 2026-05-21

### Added
- Disciple portraits and full biographies for all twelve apostles
- Portrait images under `public/disciples/`

## [0.5.0] — 2026-05-19

### Added
- Liturgical Calendar section with solemnities, feasts, and memorials
- Year-based routing (`/liturgical-calendar/[year]`)
- Moveable feast calculations from Easter
- Liturgical colour legend

## [0.4.0] — 2026-05-17

### Added
- Rosary section — how to pray, traditional prayers, and all four sets of mysteries
- Commandments section with full text and meaning for each of the Ten Commandments

## [0.3.0] — 2026-05-15

### Added
- Marian Apparitions section (Guadalupe, Lourdes, Fátima, Velankanni, Knock, and others)
- Eucharistic Miracles section (Lanciano, Bolsena, and modern shrines)
- Parables of Jesus section

## [0.2.0] — 2026-05-12

### Added
- Saints section with biographies including Blessed Virgin Mary, St. Joseph, St. Nicholas, St. Anthony, and St. Carlo Acutis
- Disciples of Jesus section (Twelve Apostles with full life stories)
- Sacraments section (all seven sacraments)
- Miracles of Jesus section (Gospel accounts)
- Client-side search across all sections
- Light/dark theme toggle (preference persisted in browser)

## [0.1.0] — 2026-05-08

### Added
- Initial Astro 6 project setup
- Base layout, header navigation, SEO component
- Home page, About page
- Per-item content file structure under `src/data/`
- GitHub Pages CI/CD workflow
