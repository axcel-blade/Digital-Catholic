# Design — Design System & Principles

This document is the single source of truth for the visual language and interaction design of Digital Catholic. Every value in `src/styles/global.css` comes from the tokens below; components never hard-code colors.

The site should feel like a **calm, reverent, trustworthy Catholic digital library**: warm paper, editorial serif headings, restrained color, and the reading experience first.

---

## Information architecture

All content areas are defined once in `src/lib/sections.ts`. Navigation, the homepage library, the About page, breadcrumbs, and the footer read from that registry, so names, descriptions, and counts never drift.

| Pathway | Sections |
|---|---|
| **Learn** | Holy Bible, Saints, Sacraments, Ten Commandments |
| **Pray** | Prayers, Rosary, Items Used at Mass, Liturgical Calendar |
| **Explore** | Disciples of Jesus, Miracles of Jesus, Eucharistic Miracles, Marian Apparitions, Parables of Jesus |

Top-level navigation: Home · Learn ▾ · Pray ▾ · Explore ▾ · About · Contact · Search · Theme toggle.

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

## Color

### Light theme (`:root`)

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#fbf8f3` | Warm paper background |
| `--color-bg-alt` | `#f4eee4` | Alternate bands, footer |
| `--color-surface` | `#ffffff` | Cards, panels |
| `--color-surface-muted` | `#fdfaf5` | Header, trust panel |
| `--color-text` / `--color-heading` | `#28201e` | Primary text |
| `--color-text-muted` (alias `--color-muted`) | `#62564f` | Secondary text |
| `--color-accent` | `#6f2f3f` | Burgundy — links, CTAs, active states |
| `--color-accent-strong` | `#4d1f2b` | Hover / pressed accent |
| `--color-accent-soft` | `#f4e8ea` | Hover fills, active menu items |
| `--color-on-accent` | `#ffffff` | Text on accent fills |
| `--color-brand-fill` / `--color-brand-on` | `#6f2f3f` / `#fbf8f3` | Logo mark, hero art, “Today” panels (burgundy in both themes) |
| `--color-gold` | `#b88b46` | Decorative rules and lines only |
| `--color-gold-text` | `#80581b` | Eyebrow labels (AA on paper) |
| `--color-gold-soft` | `#f6eddd` | Prayer text, callouts, counts |
| `--color-scripture` / `-soft` | `#2f5573` / `#e6eef4` | Bible content |
| `--color-liturgy` / `-soft` | `#3b6647` / `#e5efe6` | Liturgical and Rosary content |
| `--color-border` / `-strong` | `#e7ddd0` / `#d3c3ae` | Thin warm lines |
| `--color-focus` | `#6f2f3f` | Focus outline |

### Dark theme (`html[data-theme='dark']`)

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

### Liturgical and status colors

`--liturgical-{white,red,green,purple,rose}` are used only for small swatches, always next to a text label.

Church status uses `--status-{approved,recognized,investigation,tradition,reported}` with `-soft` fills. Each status also has a distinct icon (check, cross, magnifier, bookmark, exclamation), and “reported” uses a dashed border, so meaning never depends on color.

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
| `52rem` | Hero art appears; pathways and library become three columns |
| `56rem` | Featured calendar becomes two columns |
| `60rem` | Desktop navigation replaces the menu button; article sidebar (image + sticky “On this page”) appears; About/Contact become two columns |
| `64rem` | Footer brand column sits beside the link columns |

---

## Components

| Component | File | Notes |
|---|---|---|
| Header | `SiteHeader.astro` | Disclosure menus (`aria-expanded`, `aria-controls`), close on Escape/outside click/focus leaving; mobile panel with grouped links, focus moves in on open and back to the button on Escape |
| Search | `SiteSearch.astro` | Panel + ARIA combobox/listbox; index fetched lazily from `/search-index.json`; arrow keys, Home/End, Enter, Escape; `/` opens it; live result count and no-results state |
| Page header | `PageHeader.astro` | Breadcrumbs, eyebrow, h1, intro, count, link back to its pathway |
| Card | `EntryCard.astro` | Whole card clickable via a stretched link; focus ring on `:focus-within`; hover changes border **and** shadow |
| Card filter | `CardFilter.astro` | Toggle buttons with `aria-pressed`; hidden without JavaScript so all cards remain visible |
| Status badge / legend | `StatusBadge.astro`, `StatusLegend.astro` | Church status with icon + text |
| Article layout | `layouts/ArticleLayout.astro` | Breadcrumbs, metadata list, copy-link, image, “On this page” (3+ sections), trust panel, previous/next, related reading, back link |
| Trust panel | `TrustPanel.astro` | Shows Church status, sources, references, further reading, last reviewed — each only when data exists — plus the devotional disclaimer |
| Footer | `SiteFooter.astro` | Pathway links, disclaimer, GitHub |

---

## Principles

1. **Content first.** Prose is set in the reading serif at `--content-width`. Chrome recedes.
2. **Guided entry.** Visitors start from Learn, Pray, or Explore rather than a flat grid.
3. **Honest trust signals.** Church status, sources, and review dates appear only when the underlying content supports them. Nothing is labeled “approved” unless the article text says so.
4. **Accessible by default.** One h1 per page, logical heading order, skip link, visible `:focus-visible` outline, 44px targets, labeled icon buttons, `aria-current` on active navigation, and no meaning conveyed by color alone.
5. **Theme parity.** Every color token has a dark counterpart; the brand burgundy stays recognizable in both.
6. **Restraint in motion.** Short color/border/shadow transitions only; `prefers-reduced-motion` disables them and smooth scrolling.
7. **Static and fast.** No framework or web fonts. Images are local, carry intrinsic `width`/`height` (read at build time by `src/lib/images.ts`), and lazy-load below the fold. Missing images are skipped instead of rendering broken.
8. **Base-path safe.** Every internal URL goes through `withBase()` so the site works under `/Digital-Catholic/` on GitHub Pages.
