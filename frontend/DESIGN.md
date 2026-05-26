# Frontend — Style Foundations & Design Principles

This document is the single source of truth for the visual language and interaction design of Digital Catholic. All styling decisions in `src/styles/global.css` and component files must be consistent with the tokens and principles defined here.

---

## Typography

| Token | Value | Usage |
|---|---|---|
| `--font-serif` | `"Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif` | Headings (`h1`–`h3`), article titles, pull quotes, prayer text |
| `--font-sans` | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | Body copy, navigation, UI labels, metadata |

### Scale

| Element | Size | Weight | Line-height |
|---|---|---|---|
| `h1` | `clamp(2rem, 5vw, 2.75rem)` | 600 | 1.25 |
| `h2` | `1.5rem` | 600 | 1.25 |
| `h3` | Inherits serif scale | 600 | 1.25 |
| Body | `1.0625rem` (17 px base) | 400 | 1.65 |
| Lead / intro | `1.15–1.2rem` | 400 | 1.6 |
| Small / meta | `0.85–0.95rem` | 400–500 | 1.4–1.5 |
| Label / badge | `0.7–0.8rem` | 600 | — |

Letter-spacing on all-caps labels: `0.04–0.06em`.

---

## Colour Palette

### Light theme (`:root`)

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#faf8f5` | Page background — warm off-white |
| `--color-surface` | `#ffffff` | Card / panel background |
| `--color-text` | `#1c1a17` | Primary text — near black |
| `--color-muted` | `#5c574f` | Secondary text, nav links, metadata |
| `--color-accent` | `#6b2d3c` | Brand crimson — CTAs, active states, links |
| `--color-accent-soft` | `#f3e8eb` | Accent tint — hover backgrounds, tag fills |
| `--color-border` | `#e5dfd6` | Dividers, card outlines |

### Dark theme (`html[data-theme='dark']`)

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#1a1816` | Page background |
| `--color-surface` | `#252220` | Card / panel background |
| `--color-text` | `#f5f2ed` | Primary text |
| `--color-muted` | `#b5aea3` | Secondary text |
| `--color-accent` | `#e8a4b4` | Brand rose — lighter for dark contrast |
| `--color-accent-soft` | `#3a2a30` | Accent tint |
| `--color-border` | `#3d3834` | Dividers |

---

## Spacing

No single spacing scale token; spacing is defined contextually. The recurring values are:

| Purpose | Value |
|---|---|
| Inline gap (tight) | `0.35–0.5rem` |
| Component padding (small) | `0.65–0.85rem` |
| Component padding (standard) | `1rem–1.25rem` |
| Component padding (generous) | `1.35–1.5rem` |
| Section vertical gap | `2rem–2.75rem` |
| Page horizontal padding (mobile) | `1rem–1.5rem` |
| Page max reading width | `--max-width: 42rem` |
| Page max layout width | `--page-width: 72rem` |

---

## Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.5rem` | Cards, panels, figure wrappers, dropdowns |
| Pill / full round | `999px` | Badges, toggles, pill buttons, search input |
| Circle | `50%` | Numbered step badges |
| Small (inline badge) | `0.25rem` | Bible book badges |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-elevated` | `0 8px 24px rgb(28 26 23 / 0.12)` | Dropdowns, search results panel |
| `--shadow-card` | `0 4px 20px rgb(107 45 60 / 0.08)` | Card hover state |

Dark mode overrides:
- `--shadow-elevated`: `0 8px 24px rgb(0 0 0 / 0.45)`
- `--shadow-card`: `0 4px 20px rgb(0 0 0 / 0.35)`

---

## Motion

All transitions are short, ease-based, and apply only to visual properties — never to layout.

| Property | Duration | Easing | Applied to |
|---|---|---|---|
| Colour, border, background | `0.15s` | `ease` | Nav links, buttons, toggles, card outlines |
| Image scale | `0.25s` | `ease` | Card thumbnail on hover |
| Chevron rotation | `0.15s` | `ease` | Dropdown arrow |

`scroll-behavior: smooth` is set globally on `html`.

No animation keyframes are defined — the site avoids decorative animation in keeping with its devotional character.

---

## Responsive Breakpoints

| Breakpoint | Width | Behaviour change |
|---|---|---|
| Small | `24rem` | Search bar grows |
| Medium | `40rem` | Card grids switch to 2-column |
| Tablet | `42rem` | Sacrament cards go side-by-side |
| Desktop | `52rem` | Mobile menu hidden; toolbar and Explore dropdown appear; sticky aside activates |
| Wide | `56rem` | About/Contact layout goes two-column |
| Full | `64rem` | Nav gaps increase |
| Max layout | `72rem` | Page content constrained |

---

## HCI Design Principles

These principles guide every UI decision in the project.

### 1. Content first
The reading experience is the product. Maximum line-length (`--max-width: 42rem`) keeps prose comfortable. Serif headings and body text honour the weight of the subject matter. UI chrome is minimal and recedes.

### 2. Progressive disclosure
Secondary navigation (Explore dropdown, mobile menu) is hidden until the user requests it. Complexity is revealed on demand, never upfront. Long content sections are scanned via cards before the user commits to an article.

### 3. Clear visual hierarchy
Every screen has one dominant heading (`h1`), supporting labels above it (category tag), and body below. Accent colour (`--color-accent`) is reserved for interactive and branded elements only — it never decorates non-interactive content.

### 4. Accessible focus and interactivity
All interactive elements have a `:focus-visible` outline using `box-shadow: 0 0 0 3px var(--color-accent-soft)` — no native outline is suppressed without a replacement. Hover and active states are always communicated through at least two cues (colour + border or colour + underline).

### 5. Theme parity
Light and dark themes are first-class. Every colour token has a dark counterpart. Shadow opacity increases in dark mode (ambient shadows are stronger against dark surfaces). No hardcoded colours appear in components — all values come from CSS custom properties.

### 6. Consistent component language
Cards share the same border (`1px solid var(--color-border)`), radius (`var(--radius)`), background (`var(--color-surface)`), and hover transition (border accent + `--shadow-card`). This creates predictable affordances: anything with this treatment is navigable.

### 7. Restraint in animation
Transitions are limited to 0.15–0.25 s on visual properties only. No layout animation, no entrance effects, no looping motion. The site's devotional tone calls for stillness over dynamism.

### 8. Spatial economy
Spacing is generous within components (content breathes) but efficient between sections (users see context). Sticky header keeps navigation reachable without consuming reading space.

### 9. Semantic HTML
Components use the correct HTML element for their meaning (`article`, `section`, `nav`, `figure`, `figcaption`, `time`). CSS classes augment semantics; they do not replace them.

### 10. Mobile first
All layout defaults are single-column. Grid and flex multi-column layouts are added at breakpoints via `@media (min-width: ...)`, not subtracted for mobile.
