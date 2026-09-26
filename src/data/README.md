# Site content data

Content is split into **one file per article** so contributors can add entries without editing large shared files.

## Folder layout

| Folder | Add a file in | Example |
| --- | --- | --- |
| Saints | `saints/items/{slug}.ts` | `st-joseph.ts` |
| Disciples of Jesus | `disciples/items/NN-{slug}.ts` | `01-peter.ts` (order field sets list order) |
| Prayers | `prayers/items/NN-{slug}.ts` | `01-our-father.ts` |
| Holy Bible | `bible/books/old-testament.ts`, `new-testament.ts` | `genesis` slug per book (73 books) |
| Sacraments | `sacraments/items/{slug}.ts` | `baptism.ts` |
| Miracles of Jesus | `miracles/items/{slug}.ts` | `wedding-at-cana.ts` |
| Eucharistic miracles | `eucharistic-miracles/items/{slug}.ts` | `lanciano.ts` |
| Marian apparitions | `marian-apparitions/items/{slug}.ts` | `lourdes.ts` |
| Parables | `parables/items/{slug}.ts` | `the-prodigal-son.ts` |
| Commandments | `commandments/items/NN-short-name.ts` | `03-keep-the-lord-s-day-holy.ts` |
| Rosary mystery sets | `rosary/mystery-sets/NN-{slug}.ts` | `01-joyful.ts` (order fixed in `rosary/index.ts`) |
| Liturgical calendar | `liturgical-calendar/fixed-feasts.ts`, `compute.ts` | fixed solemnities plus Easter-derived dates |
| Holy Mass | `mass/index.ts` | add an entry to the relevant group in `massSections` (Items Used at Mass); the Order of Mass text lives in `mass/order.ts`; a new Mass sub-page also needs an entry in `massPages` |

Images live under `public/`: saints in `public/saints/{slug}.jpg`, disciple portraits in `public/disciples/{slug}.jpg`, and Mass items in `public/mass/{name}.jpg` (Wikimedia Commons–licensed art preferred). Record the source, author, and license of each Mass image in `public/mass/CREDITS.md`.

Each folder has:

- `types.ts` — TypeScript types for that section
- `intro.ts` or `shared.ts` — section intro text (where applicable)
- `index.ts` — loads all items automatically (do not list slugs by hand)
- `items/*.ts` — one default export per article

## Adding a saint (example)

1. Copy an existing file in `saints/items/`, e.g. `st-joseph.ts`, and rename it to your slug: `st-francis-of-assisi.ts`.
2. Edit the object: `slug`, `title`, `excerpt`, optional `status` (`Servant of God`, `Venerable`, `Blessed`, or `Saint`; defaults to `Saint`), `lifeDates`, `feastDays`, and `sections` (include **Full biography** and **Death and legacy** before any closing lesson section).
3. Add a photo at `public/saints/st-francis-of-assisi.jpg`.
4. Run `npm run build`.

The new saint appears on `/saints` and in search automatically—no need to edit `index.ts`. Do not use the slug `path-to-sainthood`; it is reserved for the page explaining each stage, whose text lives in `saints/path.ts`.

## Trust and source fields (optional)

Every article type accepts the optional fields in `lib/trust.ts`. Pages show each one only when it is present:

| Field | Use |
| --- | --- |
| `churchStatus` | Marian apparitions and Eucharistic miracles: `approved`, `recognized`, `under-investigation`, `historical-tradition`, or `reported` |
| `statusNote` | One sentence, taken from the article itself, explaining the status |
| `sources`, `primaryReferences`, `furtherReading` | Lists of `{ label, url? }` for real, checked references |
| `lastReviewed` | ISO date (`YYYY-MM-DD`) of the last content review |

Only add a status or a source when the article text or a checked reference supports it. Never mark an apparition or miracle as approved unless the article says a Church authority approved it.

## Slug rules

- Use lowercase letters, numbers, and hyphens only.
- Match the filename: `slug: 'st-francis-of-assisi'` → `st-francis-of-assisi.ts`.
- Keep slugs unique within the same section.

## Imports in pages

Pages may keep importing from the short paths (re-export shims):

```ts
import { saints, getSaint } from '../../data/saints';
```

Same for `miracles`, `parables`, `sacraments`, `eucharisticMiracles`, `marianApparitions`, `commandments`, `bible`, `prayers`, and `rosary`.

## Regenerating from old single files

If you ever need to re-split monolithic files, run:

```sh
npx tsx scripts/split-data.ts
```

(Requires the old combined `.ts` files to still exist.)
