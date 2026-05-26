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

- **Content:** add one file per article under `src/data/<section>/items/` (see [src/data/README.md](src/data/README.md)) — do not append to a giant shared list.
- **Images:** saint photos in `public/saints/{slug}.jpg`; disciple portraits in `public/disciples/{slug}.jpg`; Eucharistic miracle photos in `public/eucharistic-miracles/{slug}.jpg`; Marian apparition photos in `public/marian-apparitions/{slug}.jpg`. Prefer Wikimedia Commons–licensed images.
- **Layout & styles:** `src/layouts/`, `src/components/`, `src/styles/global.css`. Follow the tokens and principles in [frontend/README.md](frontend/README.md).
- **Search:** new items in existing sections are picked up automatically. Update `src/lib/searchIndex.ts` only if you add a wholly new section or page type.
- **Markdown files:** always update relevant `.md` files (README, CHANGELOG, etc.) when making structural or content changes.

Keep copy accurate, respectful, and aligned with Catholic teaching. Run `npm run build` before submitting a pull request.

---

## Code style

- Match existing naming and file structure.
- Do not use open-source libraries — all functionality must be implemented natively.
- Avoid drive-by refactors unrelated to your change.
- Do not add co-contributors to commits.

---

## Questions

Open an issue on GitHub if something is unclear about the workflow or content scope.
