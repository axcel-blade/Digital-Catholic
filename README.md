# Digital Catholic

A static website for learning and sharing the Catholic faith — presented in clear language for prayer, formation, and everyday reading.

**Live site:** [https://axcel-blade.github.io/Digital-Catholic/](https://axcel-blade.github.io/Digital-Catholic/)

---

## What it covers

| Section | What you'll find |
| --- | --- |
| **Saints** | Biographies of holy men and women with feast days and legacies |
| **Disciples of Jesus** | The Twelve Apostles — life stories, deaths, Gospel accounts, and feast days |
| **Sacraments** | All seven sacraments — what the Church teaches and how each is celebrated |
| **Miracles of Jesus** | Gospel accounts with Scripture references and reflections |
| **Eucharistic Miracles** | Events witnessing to the Real Presence, from Lanciano to modern shrines |
| **Marian Apparitions** | Approved apparition sites — Guadalupe, Lourdes, Fátima, Knock, and others |
| **Parables of Jesus** | Stories of the Kingdom from the Gospels |
| **Ten Commandments** | The moral law with the text and meaning of each commandment |
| **Holy Bible** | Summaries of all 73 books of the Catholic canon |
| **Prayers** | The Our Father and Hail Mary — full text and explanation |
| **Rosary** | How to pray the Rosary, the traditional prayers, and all twenty mysteries |
| **Liturgical Calendar** | Solemnities, feasts, memorials, and liturgical seasons by year |

The site also includes full-text search across all sections, a light/dark theme, and a responsive layout for mobile and desktop.

---

## Built with

- [Astro 6](https://astro.build) — static site generation
- Plain CSS — no UI framework (see [DESIGN.md](DESIGN.md) for the design system)
- Client-side search — index built at compile time, no external service
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap for SEO

All content lives in TypeScript modules under `src/data/` — one file per article, loaded automatically via each section's `index.ts`.

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

---

## Project structure

```
public/               Static assets — favicon, robots.txt, images
src/
  components/         SEO head, search, theme toggle, navigation
  data/               Content files — one .ts per article per section
  layouts/            Base and article page layouts
  lib/                Path helpers, SEO config, search index builder
  pages/              Routes — home, about, contact, and all section pages
  styles/             global.css — light and dark themes
frontend/             Design system documentation
.github/workflows/    CI (build check) and CD (deploy to GitHub Pages)
```

See [src/data/README.md](src/data/README.md) for how to add or edit content. SEO titles and descriptions are centralized in `src/lib/seo.ts`.

---

## Contributing and support

- Contribution workflow: [CONTRIBUTING.md](CONTRIBUTING.md)
- Bug reports and content requests: [GitHub Issues](https://github.com/axcel-blade/Digital-Catholic/issues)
- Help and contact: [SUPPORT.md](SUPPORT.md)
- Planned work: [ROADMAP.md](ROADMAP.md) · [TODO.md](TODO.md)
- Change history: [CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE.md)
