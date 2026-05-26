# Roadmap

This document outlines the planned direction for Digital Catholic. Items move from here to [CHANGELOG.md](CHANGELOG.md) when shipped.

---

## Near-term (next release)

- Complete Prayers section with all major Catholic prayers
- Accessibility audit and fixes (ARIA labels, heading hierarchy)
- Define missing `--radius` CSS variable in design tokens
- Structured data (JSON-LD) for article pages

---

## Medium-term

- **More saints** — St. Teresa of Ávila, St. Francis of Assisi, St. Thérèse of Lisieux, St. Padre Pio, St. Augustine, St. Thomas Aquinas
- **Complete miracles list** — all canonical Gospel miracles of Jesus
- **Marian apparitions** — additional approved sites (Akita, Champion/Wisconsin)
- **Pagination** for long section listings (Saints, Bible)
- **Print styles** for prayers and commandments

---

## Long-term

- **Novenas** — nine-day devotional prayers
- **Lives of the Popes** — brief historical summaries
- **Church Councils** — key councils and their definitions
- **Catholic Glossary** — terms and definitions
- **Open Graph images** — per-section social sharing images
- **Multilingual support** — Spanish, Portuguese, Filipino (Tagalog)

---

## Principles for new features

- Content must be accurate and aligned with Catholic teaching
- No external libraries or frameworks
- Every new section must follow the one-file-per-article pattern in `src/data/`
- Every new section must be indexed in the client-side search
- Navigation and SEO metadata must be updated when a new section ships
