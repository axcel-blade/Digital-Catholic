# Design — Design System & Principles

This document is the single source of truth for the visual language and interaction design of Digital Catholic. Every value in `src/styles/global.css` comes from the tokens below; components never hard-code colours.

The site should feel like a **calm, reverent, trustworthy Catholic digital library**: warm paper, editorial serif headings, restrained colour, and the reading experience first.

Logos, the social card, and brand usage rules live in [`docs/assets/`](assets/README.md).

---

## Information architecture

All content areas are defined once in `src/lib/sections.ts`. Navigation, the homepage library, the About page, breadcrumbs, and the footer read from that registry, so names, descriptions, and counts never drift.

Each pathway is split into subgroups so the dropdown menus stay short: desktop panels show one column per subgroup, and the mobile menu shows each subgroup under a small heading.

| Pathway | Subgroup | Sections |
|---|---|---|
| **Learn** | Foundations | Holy Bible, Core Catholic Beliefs, Holy Trinity, Sacraments, The Sacraments in Depth, Ten Commandments |
| **Study** | Church & Tradition | The Bible and Catholic Tradition, The Catholic Church, Catholic Church History, Catholic Apologetics and FAQ, Church History Timeline, Compare Christian Traditions |
| | Christian living | Catholic Moral Teaching, Catholic Social Teaching, Living the Catholic Faith |
| | Study tools | Catholic Glossary, Ask a Catholic Question, Catholic Study Paths |
| | Holy Spirit | Gifts of the Holy Spirit, Fruits of the Holy Spirit |
| | Holy lives | Saints, Mary and the Communion of Saints |
| **Pray** | Prayer & devotion | Prayers, Rosary, Catholic Prayer and Devotions, Daily Gospel and Reflection |
| | Liturgy | Holy Mass, Liturgical Calendar, Catholic Liturgy and Worship |
| **Explore** | Life of Jesus | Disciples of Jesus, Miracles of Jesus, Parables of Jesus |
| | Signs & wonders | Eucharistic Miracles, Marian Apparitions |

Top-level navigation: Home · Learn ▾ · Study ▾ · Pray ▾ · Explore ▾ · About · Contact · Search · Theme toggle.

To add a section: add it to `siteSections`, add a description to `PAGE_DESCRIPTIONS` in `src/lib/seo.ts`, and create its pages with `SectionLayout` / `ArticleLayout`.

---

## Typography

| Token | Value | Usage |
|---|---|---|
| `--font-serif` | `'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif` | Headings, titles, prayers, quotations |
| `--font-reading` | `var(--font-serif)` | Long-form article prose (`.prose`) |
| `--font-sans` | `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` | Navigation, descriptions, metadata, controls |

No web fonts are loaded; all stacks are local system fonts.

| Token | Value | Typical use |
|---|---|---|
| `--text-xs` | `0.78rem` | Eyebrow labels, badges (uppercase, `letter-spacing: 0.08–0.1em`) |
| `--text-sm` | `0.875rem` | Metadata, captions |
| `--text-base` | `1rem` | Card excerpts, buttons |
| `--text-md` | `1.0625rem` | Body default |
| `--text-lg` | `1.1875rem` | Article prose, intros |
| `--text-xl` | `1.4rem` | Card titles |
| `--text-2xl` | `clamp(1.6rem, 3vw, 2rem)` | Section headings (h2) |
| `--text-3xl` | `clamp(2rem, 4.5vw, 2.85rem)` | Page titles (h1) |
| `--text-display` | `clamp(2.2rem, 4.6vw, 3.4rem)` | Homepage hero |

---

## Colour

### Dark theme (`:root`)

The site ships a single dark theme; there is no light mode or theme toggle.

| Token | Value |
|---|---|
| `--color-bg` / `--color-bg-alt` | `#1b1614` / `#221c19` |
| `--color-surface` / `--color-surface-muted` | `#262019` / `#2c2520` |
| `--color-text` / `--color-text-muted` | `#f3ece4` / `#c4b7ab` |
| `--color-accent` / `-strong` / `-soft` | `#e6a9b6` / `#f3cbd3` / `#3a2329` |
| `--color-on-accent` | `#1b1614` |
| `--color-brand-fill` / `--color-brand-on` | `#8a3b4f` / `#f7f1ea` |
| `--color-gold` / `--color-gold-text` / `--color-gold-soft` | `#d4ae6e` / `#e2c07f` / `#3a2f1e` |
| `--color-scripture` / `-soft` | `#a4c6e2` / `#1f2b35` |
| `--color-liturgy` / `-soft` | `#a3d1ad` / `#1f2c23` |
| `--color-border` / `-strong` | `#3b312b` / `#54473f` |
| `--color-focus` | `#f0bfca` |

All text/background pairs meet WCAG AA (≥ 4.5:1); the lowest pair is gold text on gold-soft at 5.4:1.

### Liturgical and status colours

`--liturgical-{white,red,green,purple,rose}` are used only for small swatches, always next to a text label.

Church status uses `--status-{approved,recognized,investigation,tradition,reported}` with `-soft` fills. Each status also has a distinct icon (check, cross, magnifier, bookmark, exclamation), and “reported” uses a dashed border, so meaning never depends on colour.

---

## Space, layout, shape, depth

| Token | Value |
|---|---|
| `--space-1` … `--space-8` | `0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4.5rem` |
| `--content-width` | `42rem` — reading measure |
| `--layout-width` | `76rem` — page container |
| `--gutter` | `clamp(1rem, 4vw, 2rem)` |
| `--header-height` | `4rem` — also used for `scroll-padding-top` |
| `--touch-target` | `2.75rem` (44px) minimum control size |
| `--radius-sm` / `--radius` (= `--radius-md`) / `--radius-lg` / `--radius-pill` | `4px` / `8px` / `14px` / `999px` |
| `--shadow-sm` / `--shadow-card` / `--shadow-elevated` | subtle / card hover / menus and panels (stronger in dark mode) |
| `--transition-fast` / `--transition-base` | `0.15s ease` / `0.25s ease` |

### Breakpoints

| Width | Change |
|---|---|
| `36rem` | Previous/next article links side by side |
| `48rem` | Footer shows four columns; calendar summary cards side by side |
| `52rem` | Hero art appears; pathways become two columns and the library three |
| `56rem` | Featured calendar becomes two columns |
| `60rem` | Desktop navigation replaces the menu button; article sidebar (image + sticky “On this page”) appears; About/Contact become two columns |
| `64rem` | Footer brand column sits beside the link columns |

---

## Components

| Component | File | Notes |
|---|---|---|
| Header | `SiteHeader.astro` | Disclosure menus (`aria-expanded`, `aria-controls`), close on Escape/outside click/focus leaving; dropdown panels lay subgroups out as columns (centred under the nav, never wider than the viewport); mobile panel with links under subgroup headings, focus moves in on open and back to the button on Escape |
| Search | `SiteSearch.astro` | Panel + ARIA combobox/listbox; index fetched lazily from `/search-index.json`; arrow keys, Home/End, Enter, Escape; `/` opens it; live result count and no-results state |
| Page header | `PageHeader.astro` | Breadcrumbs, eyebrow, h1, intro, count, link back to its pathway |
| Card | `EntryCard.astro` | Whole card clickable via a stretched link; focus ring on `:focus-within`; hover changes border **and** shadow |
| Card filter | `CardFilter.astro` | Toggle buttons with `aria-pressed`; hidden without JavaScript so all cards remain visible |
| Status badge / legend | `StatusBadge.astro`, `StatusLegend.astro` | Church status with icon + text |
| Article layout | `layouts/ArticleLayout.astro` | Breadcrumbs, metadata list, copy-link, image, “On this page” (3+ sections), trust panel, previous/next, related reading, back link |
| Section list | `SectionList.astro` | Article sections with anchor ids; a section with an `image` gets a captioned figure (`.article-figure.section-figure`) after its paragraphs |
| Trust panel | `TrustPanel.astro` | Shows Church status, sources, references, further reading, last reviewed — each only when data exists — plus the devotional disclaimer |
| Footer | `SiteFooter.astro` | Pathway links, disclaimer, GitHub |

---

## Principles

1. **Content first.** Prose is set in the reading serif at `--content-width`. Chrome recedes.
2. **Guided entry.** Visitors start from Learn, Study, Pray, or Explore rather than a flat grid.
3. **Honest trust signals.** Church status, sources, and review dates appear only when the underlying content supports them. Nothing is labelled “approved” unless the article text says so.
4. **Accessible by default.** One h1 per page, logical heading order, skip link, visible `:focus-visible` outline, 44px targets, labelled icon buttons, `aria-current` on active navigation, and no meaning conveyed by colour alone.
5. **Theme parity.** Every colour token has a dark counterpart; the brand burgundy stays recognisable in both.
6. **Restraint in motion.** Short colour/border/shadow transitions only; `prefers-reduced-motion` disables them and smooth scrolling.
7. **Static and fast.** No framework or web fonts. Images are local, carry intrinsic `width`/`height` (read at build time by `src/lib/images.ts`), and lazy-load below the fold. Missing images are skipped instead of rendering broken.
8. **Base-path safe.** Every internal URL goes through `withBase()` so the site works under `/Digital-Catholic/` on GitHub Pages.
