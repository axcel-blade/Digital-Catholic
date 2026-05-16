# Contributing to Digital Catholic

Thank you for helping improve this site. Please follow the branch workflow below so changes are reviewed before they go live.

## Branch workflow

| Branch | Purpose |
| --- | --- |
| **`contribution`** | Default target for all pull requests. Integrate community changes here. |
| **`main`** | Production branch. Deploys to GitHub Pages. Updated by merging `contribution` when ready. |

Do **not** open pull requests directly into `main` from feature branches. CI will fail those PRs automatically.

### First-time setup

```sh
git clone https://github.com/axcel-blade/Digital-Catholic.git
cd Digital-Catholic
git fetch origin
git checkout contribution   # create locally if needed: git checkout -b contribution origin/main
```

If the `contribution` branch does not exist on the remote yet, a maintainer can create it from `main`:

```sh
git checkout main
git pull
git checkout -b contribution
git push -u origin contribution
```

Then set **contribution** as the repository default branch under GitHub → **Settings** → **General** → **Default branch**.

### Making a change

```sh
git checkout contribution
git pull origin contribution
git checkout -b your-topic-branch
# edit src/data/, src/pages/, etc.
npm run build
git add .
git commit -m "Describe your change"
git push -u origin your-topic-branch
```

Open a pull request on GitHub with base **`contribution`** and compare **`your-topic-branch`**.

### Maintainers: releasing to production

When `contribution` is ready to go live:

```sh
git checkout main
git pull origin main
git merge contribution
git push origin main
```

Pushes to `main` trigger deployment to GitHub Pages.

## What to change

- **Content:** `src/data/` (saints, sacraments, miracles, eucharistic miracles, parables, commandments, rosary) and related pages under `src/pages/`
- **Images:** saint photos in `public/saints/{slug}.jpg`; Eucharistic miracle photos in `public/eucharistic-miracles/{slug}.jpg` (prefer Wikimedia Commons–licensed images)
- **Layout & styles:** `src/layouts/`, `src/components/`, `src/styles/global.css`
- **Search:** update `src/lib/searchIndex.ts` if you add new indexable pages

Keep copy accurate, respectful, and aligned with Catholic teaching. Run `npm run build` before submitting a pull request.

## Code style

- Match existing naming and file structure
- Avoid drive-by refactors unrelated to your change
- Do not add co-contributors to commits unless agreed with maintainers

## Questions

Open an issue on GitHub if something is unclear about the workflow or content scope.
