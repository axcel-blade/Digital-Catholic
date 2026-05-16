# Digital Catholic

A static website for learning and sharing the Catholic faith—saint biographies, the sacraments, the Ten Commandments, and the Holy Rosary—presented in clear language for prayer, formation, and everyday reading.

**Live site:** [https://axcel-blade.github.io/Digital-Catholic/](https://axcel-blade.github.io/Digital-Catholic/)

## What’s on the site

| Section | Description |
| --- | --- |
| **Saints** | Biographies of holy men and women, with feast days and lessons for daily life. |
| **Sacraments** | Articles on all seven sacraments—what the Church teaches, how they are celebrated, and why they matter. |
| **Ten Commandments** | The moral law with each commandment’s text and a brief explanation. |
| **Rosary** | How to recite the Rosary, the traditional prayers, and the twenty mysteries (Joyful, Sorrowful, Glorious, Luminous). |

The header includes **site-wide search** across all of the above content.

## Tech stack

- [Astro](https://astro.build) 6 — static site generation
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap for SEO
- Plain CSS — no UI framework
- Client-side search — built at compile time from site content (no external search service)

Content lives in TypeScript data modules under `src/data/` and is rendered through Astro pages and layouts.

## Getting started

**Requirements:** Node.js 22.12 or newer

```sh
git clone https://github.com/axcel-blade/Digital-Catholic.git
cd Digital-Catholic
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Paths respect `BASE_URL` when you build for GitHub Pages (see below).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |

### Build for GitHub Pages (project site)

For a repository named `Digital-Catholic` under a user/org Pages host:

```sh
ASTRO_SITE=https://<your-username>.github.io ASTRO_BASE=/Digital-Catholic/ npm run build
```

For a `username.github.io` repository, use `ASTRO_BASE=/` instead.

## Project structure

```text
public/                 Static assets (favicon, robots.txt, images)
src/
  components/           SEO head, site search
  data/                 Saints, sacraments, commandments, rosary content
  layouts/              Base and article layouts
  lib/                  Paths, SEO helpers, search index
  pages/                Routes (home, about, saints, sacraments, etc.)
  styles/               Global CSS
.github/workflows/      CI build and CD deploy to GitHub Pages
```

## Deployment

- **CI** runs on pushes to `main` and `contribution`, and on pull requests targeting those branches.
- **CD** deploys the `dist/` folder to **GitHub Pages** only when `main` is updated. The workflow sets `ASTRO_SITE` and `ASTRO_BASE` automatically for project vs. user Pages sites.

## Contributing

All pull requests should target the **`contribution`** branch, not `main`. Maintainers merge `contribution` into `main` when a release is ready to deploy.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow, branch setup, and content guidelines.

## License

See [LICENSE](LICENSE).
