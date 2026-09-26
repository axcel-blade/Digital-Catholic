# Contributing to Digital Catholic

Thank you for helping improve this site. This project follows **Git Flow** — please read the branch model below before opening a pull request.

---

## Branch model

| Branch | Purpose |
|---|---|
| `main` | Always reflects production-ready code. Deployed to GitHub Pages. |
| `develop` | Latest development work for the next release. All features merge here. |
| `feature/*` | New features; branched from `develop`, merged back when complete. |
| `release/*` | Prepares a production release; allows final testing and minor bug fixes. |
| `hotfix/*` | Quickly patches production issues; branched from `main`. |

### Process

1. Create a `feature/*` branch from `develop` to build new functionality.
2. When `develop` is ready for a release, cut a `release/*` branch from `develop`. Development continues on `develop` uninterrupted.
3. Bug fixes go into the release branch; major features wait for a future release.
4. Merge the release branch into `main` and tag with a version number.
5. Merge the same release branch back into `develop` to keep branches in sync.
6. For critical production bugs, create a `hotfix/*` branch from `main`. Merge it into both `main` and `develop` when fixed.

---

## First-time setup

```sh
git clone https://github.com/axcel-blade/Digital-Catholic.git
cd Digital-Catholic
git fetch origin
git checkout develop   # create locally if needed: git checkout -b develop origin/develop
```

---

## Making a change

```sh
git checkout develop
git pull origin develop
git checkout -b feature/your-topic
# edit src/data/, src/pages/, etc.
npm run build
git add <files>
git commit -m "feat: describe your change"
git push -u origin feature/your-topic
```

Open a pull request on GitHub with base **`develop`** and compare **`feature/your-topic`**.

If you change the build setup or the `Dockerfile`, also check that the container builds and serves the site:

```sh
docker compose up --build   # then open http://localhost:8080
```

---

## Maintainers: cutting a release

```sh
git checkout develop
git pull origin develop
git checkout -b release/1.x.0

# final testing and minor fixes only
git add <files>
git commit -m "chore: bump version to 1.x.0"

# merge into main and tag
git checkout main
git merge release/1.x.0
git tag v1.x.0
git push origin main --tags

# keep develop in sync
git checkout develop
git merge release/1.x.0
git push origin develop

# clean up
git branch -d release/1.x.0
git push origin --delete release/1.x.0
```

---

## Maintainers: hotfix

```sh
git checkout main
git pull origin main
git checkout -b hotfix/describe-issue
# fix the bug
git checkout main
git merge hotfix/describe-issue
git tag v1.x.1
git checkout develop
git merge hotfix/describe-issue
git push origin main develop --tags
```

---

## What to change

For an overview of how content, pages, search, and deployment fit together, read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) first.

- **Content:** add one file per article under `src/data/<section>/items/` (see [src/data/README.md](src/data/README.md)) — do not append to a giant shared list.
- **Sources and Church status:** the optional trust fields (`churchStatus`, `statusNote`, `sources`, `lastReviewed`, and others) are described in [src/data/README.md](src/data/README.md). Only add a status or source that the article text or a checked reference supports. Never label an apparition or Eucharistic miracle as approved unless a Church authority's approval is stated in the article.
- **Images:** saint photos in `public/saints/{slug}.jpg`; disciple portraits in `public/disciples/{slug}.jpg`; sacrament art in `public/sacraments/{slug}.jpg`; Eucharistic miracle photos in `public/eucharistic-miracles/{slug}.jpg`; Marian apparition photos in `public/marian-apparitions/{slug}.jpg`; Mass item photos in `public/mass/{name}.jpg` (add the source, author, and license to `public/mass/CREDITS.md`). Prefer Wikimedia Commons–licensed images, resized to at most 960px. Width and height are read from the file at build time, and a missing image is skipped rather than shown broken.
- **New section:** add it to `siteSections` in `src/lib/sections.ts` (this updates the menus, homepage, About page, and footer), add a meta description to `PAGE_DESCRIPTIONS` in `src/lib/seo.ts`, build its pages with `SectionLayout` and `ArticleLayout`, and add it to `src/lib/searchIndex.ts`.
- **Layout & styles:** `src/layouts/`, `src/components/`, `src/styles/global.css`. Use the design tokens only — no hard-coded colors — and follow [docs/DESIGN.md](docs/DESIGN.md). Update that document when you add or change a token.
- **Links:** build every internal URL with `withBase()` from `src/lib/paths.ts` so pages work under the GitHub Pages base path.
- **Search:** new items in existing sections are picked up automatically. Update `src/lib/searchIndex.ts` only if you add a wholly new section or page type.
- **Markdown files:** always update relevant `.md` files (README, CHANGELOG, etc.) when making structural or content changes.

Keep copy accurate, respectful, and aligned with Catholic teaching. Run `npm run build` before submitting a pull request, and check new pages with the keyboard and in both light and dark themes.

> **Windows:** building with `ASTRO_BASE=/Digital-Catholic/` fails locally with Astro 6.3.3 (`Missing parameter: slug`) but works on Linux and in CI. Build at the root path, or use Docker or WSL for a base-path build.

---

## Code style

- Match existing naming and file structure.
- Do not use open-source libraries — all functionality must be implemented natively.
- Avoid drive-by refactors unrelated to your change.
- Do not add co-contributors to commits.

---

## Questions

Open an issue on GitHub if something is unclear about the workflow or content scope.
