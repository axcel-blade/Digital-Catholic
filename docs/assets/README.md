# Brand assets

Logos and images for presenting Digital Catholic outside the site itself — in the README, social posts, slides, app stores, or press. The live site uses its own copies in `public/` (favicon and social card) and draws the header mark inline from `src/components/BrandMark.astro`.

## The mark

A cross set within an arched window, standing on a gold line: a doorway into the Church's tradition. It is drawn on a 32×32 grid and stays legible down to 16px.

| File | Use |
| --- | --- |
| `logo-mark.svg` | Primary mark, for light backgrounds. Same colours as `public/favicon.svg` |
| `logo-mark-on-dark.svg` | Mark in the site's dark-theme tokens, for dark backgrounds |
| `logo-mark-512.png`, `logo-mark-192.png`, `logo-mark-32.png` | Transparent PNGs of the primary mark (app icons, avatars, small UI) |
| `logo-mark-on-dark-512.png` | Transparent PNG of the dark-background mark |

## The lockup

The mark beside the name “Digital Catholic” in the site's serif.

| File | Use |
| --- | --- |
| `logo-lockup.svg` / `logo-lockup.png` | For light backgrounds (transparent PNG, 960px wide) |
| `logo-lockup-on-dark.svg` / `logo-lockup-on-dark.png` | For dark backgrounds (PNG on the site background `#1b1614`) |

The SVG lockups set the name as live text in the site's serif stack (`Iowan Old Style`, `Palatino Linotype`, `Book Antiqua`, Palatino, Georgia), so the result depends on the fonts installed where it is opened. Use the PNGs when the exact appearance matters.

## Social card

`social-card.png` (1200×630) is a copy of `public/og-image.png`, the default Open Graph and Twitter image for every page that has no image of its own.

## Colours

| Role | Light backgrounds | Dark backgrounds (site tokens) |
| --- | --- | --- |
| Arch | `#6f2f3f` | `#8a3b4f` (`--color-brand-fill`) |
| Cross | `#fbf8f3` | `#f7f1ea` (`--color-brand-on`) |
| Base line | `#b88b46` | `#d4ae6e` (`--color-gold`) |
| Name (lockup) | `#2a1f1b` | `#f3ece4` (`--color-text`) |

See `docs/DESIGN.md` for the full colour system.

## Usage

- Keep clear space around the mark of at least a quarter of its height.
- Don't recolor, stretch, rotate, or add effects to the mark, and don't separate the cross from the arch.
- Use the light versions on light backgrounds and the dark versions on dark ones. On photographs, place the mark on a solid panel.
- The name is always written “Digital Catholic” — two words, both capitalised.

## Regenerating the PNGs

The PNGs are rendered from the SVGs with `sharp` (already installed as a dependency of Astro):

```bash
node -e "const s=require('sharp'),d='docs/assets/';(async()=>{for(const n of [512,192,32])await s(d+'logo-mark.svg',{density:384}).resize(n,n).png().toFile(d+'logo-mark-'+n+'.png');await s(d+'logo-mark-on-dark.svg',{density:384}).resize(512,512).png().toFile(d+'logo-mark-on-dark-512.png');await s(d+'logo-lockup.svg',{density:288}).resize(960).png().toFile(d+'logo-lockup.png');await s(d+'logo-lockup-on-dark.svg',{density:288}).resize(960).flatten({background:'#1b1614'}).png().toFile(d+'logo-lockup-on-dark.png')})()"
```

If the mark changes, update `public/favicon.svg`, `public/favicon.ico`, `src/components/BrandMark.astro`, and these files together.
