# TODO

Active tasks and known improvements. Move items to [CHANGELOG.md](CHANGELOG.md) once completed.

---

## Content

- [ ] Expand Prayers section — add Glory Be, Act of Contrition, Apostles' Creed, Angelus
- [ ] Add more saint biographies (St. Teresa of Ávila, St. Francis of Assisi, St. Thérèse of Lisieux, St. Padre Pio)
- [ ] Add more Gospel miracles (complete the full canonical list)
- [ ] Add more Marian apparition entries (Akita, Medjugorje note, Champion/Wisconsin)
- [ ] Add more Eucharistic miracle entries
- [ ] Add an introduction article for each section (not just index listing)

## Features

- [ ] Pagination for large sections (Saints, Bible)
- [ ] Filter / category browse within sections
- [ ] Print-friendly styles for prayer and commandment pages
- [ ] Structured data (JSON-LD) for article pages to improve SEO
- [ ] Open Graph images per section for social sharing

## Technical

- [ ] Define `--radius` CSS variable in `:root` (currently referenced but not declared)
- [ ] Add `aria-label` to icon-only buttons (theme toggle, menu toggle)
- [ ] Audit heading hierarchy on all article pages
- [ ] Lighthouse / accessibility audit pass

## Documentation

- [ ] Add contribution examples to `src/data/README.md` for each section type
- [ ] Document the `scripts/split-data.ts` utility in project docs
