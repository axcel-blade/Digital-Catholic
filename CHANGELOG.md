# Changelog

All notable changes to Digital Catholic are documented here.

---

## [Unreleased]

### Added
- Public-domain artwork at the top of each of the ten topic guides (Caravaggio, Perugino, Raphael, Bosch, Millet, Breton, Murillo, van Eyck, and a painting of the Council of Trent), credited in `public/guides/CREDITS.md`
- Catholic Glossary (`/glossary`): 47 terms from absolution to viaticum, grouped A–Z, with Catechism references, links to fuller explanations, and a search entry per term
- Daily Gospel and Reflection (`/daily-gospel`): 32 Gospel scenes, each with the passage in brief, an explanation, and a reflection question; the page shows a different one each day, with previous/next navigation and a link to the day’s Mass readings
- Ask a Catholic Question (`/ask-a-catholic-question`): a searchable FAQ of 24 questions organised by doctrine, worship, morality, and Church history
- Catholic Study Paths (`/study-paths`): guided learning plans for beginners, people preparing to become Catholic through OCIA, and practising Catholics
- Church History Timeline (`/church-history-timeline`): 43 milestones from Pentecost to the present, filterable by era
- Compare Christian Traditions (`/compare-christian-traditions`): a sourced comparison of Catholic, Eastern Orthodox, Oriental Orthodox, Anglican, and Protestant beliefs on twelve topics
- References on every article: the “About this article” panel now lists Catechism paragraphs, linked Scripture citations, and links to official Church documents on vatican.va (`src/lib/references.ts`); Scripture citations on topic pages, Core Beliefs, the Ten Commandments (now with Catechism paragraphs), and the Gifts and Fruits of the Holy Spirit are linked too
- New Study menu (between Learn and Pray) holding the Church & Tradition, Christian living, and Study tools subgroups, so no dropdown has more than three columns; the homepage now shows four pathways
- Ten topic guides, each a single page of numbered topics with Scripture and Catechism references, jump links, and search entries per topic, built on a shared guide format (`src/data/guides/`, `GuidePage` component):
  - The Bible and Catholic Tradition (`/bible-and-tradition`): Scripture and Tradition, the Magisterium, the 73 books, the Deuterocanonical books, interpreting Scripture, faith and reason, and the development of doctrine
  - The Catholic Church (`/the-church`): the four marks, the papacy, bishops, priests, deacons and laity, apostolic succession, the Orthodox Churches, Eastern Catholic Churches, Catholic, Orthodox, Anglican and Protestant differences, and ecumenism
  - Catholic Church History (`/church-history`): the early Church and Apostolic Fathers, the Church Fathers, the seven ecumenical councils, the Great Schism, the Reformation and Counter-Reformation, Trent and Vatican II, the papacy and religious orders
  - Catholic Apologetics and FAQ (`/apologetics`): nine common questions, from Confession and the Real Presence to science and faith and popular misconceptions
  - Catholic Moral Teaching (`/moral-teaching`), Catholic Social Teaching (`/social-teaching`), and Living the Catholic Faith (`/living-the-faith`), listed under Study → Christian living
  - Mary and the Communion of Saints (`/mary-and-the-saints`), listed under Learn → Holy lives
  - Catholic Prayer and Devotions (`/prayer-and-devotions`) and Catholic Liturgy and Worship (`/liturgy-and-worship`), listed under Pray
- The Sacraments in Depth: eight guides at `/sacraments/guides/{slug}`—Baptism and Confirmation, the Real Presence, Transubstantiation, Confession and absolution, Marriage, Holy Orders, Anointing of the Sick and Viaticum, and the state of grace and worthy reception of Holy Communion—with Catechism, Scripture, and Canon Law sources, each with an image (credited in `public/sacraments/guides/CREDITS.md`), listed on the Sacraments page, linked from each related sacrament, and included in search
- Core Catholic Beliefs page (`/core-beliefs`) introducing the fundamental doctrines—the Holy Trinity, the Incarnation and two natures of Christ, the Resurrection and Ascension, original sin, grace and salvation, heaven, hell, purgatory and the resurrection of the dead, the Apostles' and Nicene Creeds (with the text of the Apostles' Creed), and the Four Last Things—with Scripture and Catechism references, listed under Learn → Foundations and included in search
- Holy Trinity page (`/holy-trinity`, Matthew 28:19, CCC 232–267) covering God the Father, the Son, and the Holy Spirit, with separate articles on the Trinity in the Old Testament (`/holy-trinity/old-testament`) and New Testament (`/holy-trinity/new-testament`), listed under Learn → Foundations and included in search
- Gifts of the Holy Spirit page (`/gifts-of-the-holy-spirit`, Isaiah 11:2, CCC 1830–1831) and Fruits of the Holy Spirit page (`/fruits-of-the-holy-spirit`, Galatians 5:22–23, CCC 1832), listed under Learn and included in search
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
- Items Used at Mass page (`/mass/items-used-at-mass`) — sacred vessels, altar linens, liturgical books, vestments, liturgical colours, and other sacred items, with images under `public/mass/`
- Images for all 26 Items Used at Mass entries (every item except the liturgical colours), from Wikimedia Commons and resized to at most 960px, with alt text describing each image and attribution in `public/mass/CREDITS.md`
- Origin of the Rosary moved to its own page at `/rosary/origin`
- Holy Bible: “How the Bible Was Formed” page at `/bible/how-the-bible-was-formed` covering inspiration, oral tradition, the Septuagint, the writing of the New Testament, the canon, St. Jerome and the Vulgate, and the Council of Trent; linked from the Holy Bible page and included in search, with Caravaggio’s *Saint Jerome Writing* (public domain) credited in `public/bible/CREDITS.md`
- Saints: St. Charbel and Archbishop Fulton J. Sheen added
- Saints: “The Path to Sainthood” page at `/saints/path-to-sainthood` explaining Servant of God, Venerable, Blessed, and Saint, linked from the Saints listing and every biography, and included in search
- Mass: “The Order of Mass” page at `/mass/order-of-mass` walking through the Introductory Rites, Liturgy of the Word, Liturgy of the Eucharist, and Concluding Rites, linked from Items Used at Mass and included in search
- Mass: `/mass` is now a “Holy Mass” hub linking to its two sub-pages, “The Order of Mass” and “Items Used at Mass” (moved to `/mass/items-used-at-mass`)
- Parables and Miracles of Jesus: public-domain artwork from Wikimedia Commons for all 12 parables and 11 miracles, shown on listing cards and article pages, with alt text and attribution in `public/parables/CREDITS.md` and `public/miracles/CREDITS.md`
- Saints: St. John Bosco added, with a “Prophetic dreams and visions” section covering his recorded dreams (the dream at nine, the Pergola of Roses, the Two Columns, the Ten Diamonds, and his 1883 South America dream)
- Saints and Disciples: “Miracles” and “Relics” sections, added only where a saint or apostle has documented miracles or known relics, each fact checked against a cited source
- Saints and Disciples: images for Miracles and Relics sections (public-domain paintings and freely licensed photos of relics and tombs from Wikimedia Commons), with captions crediting each photographer and licence, stored in `public/saints/sections/` and `public/disciples/sections/`
- Article sections accept an optional `image` (`SectionImage` in `src/lib/article.ts`), rendered by `SectionList` as a captioned figure
- Sources and a review date on every article: Catechism and Scripture references for sacraments and prayers; USCCB New American Bible links for parables, Gospel miracles, Judas, and all 73 Bible books (generated from each book's slug); Wikipedia and Church sources for Marian apparitions; the Carlo Acutis Eucharistic miracles exhibition for Eucharistic miracles; and the Shroud of Turin and Veil of Veronica pages
- Image attribution in `public/saints/CREDITS.md` and `public/disciples/CREDITS.md`
- Brand assets in `docs/assets/`: the mark and the mark-plus-name lockup as SVG and PNG for light and dark backgrounds, the social card, and a usage guide
- Design system documentation moved to `docs/DESIGN.md`
- Architecture documentation added at `docs/ARCHITECTURE.md`
- `ROADMAP.md` and `TODO.md` removed

### Changed
- Navigation menus organised into subgroups (Learn: Foundations, Holy Spirit, Holy lives; Pray: Prayer & devotion, Liturgy; Explore: Life of Jesus, Signs & wonders) so dropdowns stay short; desktop panels show subgroups as columns and the mobile menu shows subgroup headings
- Sacraments are listed in Catechism order (initiation, healing, service of communion)
- Images now use their intrinsic width and height, read at build time
- Saint portraits of St. Anthony of Padua and St. Joseph replaced with public-domain paintings (Murillo and Guido Reni), since the originals had no known source
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
