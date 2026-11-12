# Legal & Policies implementation

> **Important:** The legal pages generated for Digital Catholic are **drafts for transparency and site structure**. They are **not** a substitute for professional legal advice. They should be reviewed by an **Australian legal professional** (and, where relevant, someone familiar with ecclesiastical publishing norms) before being relied upon as formal terms, privacy notices, or compliance certifications. Adding these documents does **not** guarantee immunity from legal claims.

---

## Pages created

| Route | File | Purpose |
| --- | --- | --- |
| `/legal/` | `src/pages/legal/index.astro` | Landing directory for all legal documents |
| `/legal/terms-of-use/` | `src/pages/legal/terms-of-use.astro` | Terms of Use |
| `/legal/privacy-policy/` | `src/pages/legal/privacy-policy.astro` | Privacy Policy |
| `/legal/disclaimer/` | `src/pages/legal/disclaimer.astro` | Religious & Educational Disclaimer |
| `/legal/copyright/` | `src/pages/legal/copyright.astro` | Copyright & Intellectual Property Policy |
| `/legal/external-links/` | `src/pages/legal/external-links.astro` | External Links Disclaimer |
| `/legal/corrections/` | `src/pages/legal/corrections.astro` | Content Corrections & Copyright Requests |

Shared metadata and helpers live in `src/lib/legal.ts` (`LEGAL_LAST_UPDATED`, `legalPages`, `legalHref`, `legalContactMailto`).

Document chrome:

- `src/layouts/LegalLayout.astro` — BaseLayout + PageHeader + sidebar nav + prose body
- `src/components/LegalDocNav.astro` — in-section navigation and last-updated stamp

---

## Navigation

- **Footer:** New “Legal & Policies” column linking to all six documents; “Legal & Policies” also listed under the Digital Catholic column; independence statement and copyright line in the footer legal strip (`src/components/SiteFooter.astro`).
- **In-section:** Sticky sidebar on large screens listing every legal page.
- **Breadcrumbs:** Home → Legal & Policies → [document].
- **Search index:** All legal pages registered in `src/lib/searchIndex.ts`.
- **Sitemap:** `@astrojs/sitemap` picks up new pages automatically at build time (no special filter change required beyond existing exclusions for JSON/404).

---

## Privacy-related technologies discovered

Verified against the repository and deployment configuration at implementation time:

| Technology | Present? | Notes |
| --- | --- | --- |
| Google Analytics / tag managers / Meta Pixel | **No** | Not in source |
| First-party tracking cookies | **No** | No cookie consent UI added |
| Remote font CDNs (e.g. Google Fonts) | **No** | System font stacks in `global.css` |
| Client search | **Yes** | Fetches same-origin `search-index.json` only |
| Contact | **Yes** | Mailto / Gmail compose using `SITE.contactEmail` |
| GitHub Pages hosting | **Yes** | Production host; may process standard request logs (IP, etc.) per GitHub’s policies |
| GitHub Issues / repository | **Yes** | Public contribution and issue reporting |
| Docker/nginx mirror | Optional | Documented in project; operator logs may apply if used |

**Decision:** Do not introduce tracking. Do not add a cookie consent popup while no non-essential tracking cookies are set by the application.

---

## Copyright and attribution considerations

- Original site prose/design vs MIT-licensed build software (`LICENSE.md`) are distinguished in the Copyright Policy.
- Third-party images are credited in captions and `public/**/CREDITS.md` where recorded; Digital Catholic does not claim ownership of those works.
- Scripture translations, modern prayers, and many Church-related texts may remain under copyright; the policy avoids treating them as public domain by default.
- Infringement and attribution corrections route through `/legal/corrections/` and `srikanthfernando3@gmail.com` (from `SITE.contactEmail` in `src/lib/seo.ts`).

---

## Australian legal framing (draft)

Documents were drafted with awareness of:

- Australian Consumer Law (non-excludable guarantees; no blanket zero-liability wording)
- Privacy Act 1988 (Cth) / APPs — **without** asserting that the Act does or does not apply
- Copyright Act 1968 (Cth)
- Governing law: Western Australia / Commonwealth of Australia

They intentionally **do not** claim GDPR compliance, Privacy Act exemption, ecclesiastical approval, or lawsuit immunity.

---

## Assumptions

1. Contact email `srikanthfernando3@gmail.com` remains the correct public maintainer address.
2. The project remains a static Astro site on GitHub Pages without analytics unless later added.
3. No separate legal entity name beyond “Digital Catholic” / repository copyright holder was confirmed for the privacy “organisation” identity.
4. “Last updated” dates use **12 November 2026** for the initial publication of this section.

---

## Information requiring owner confirmation

1. Preferred legal entity / trading name to list as the publisher (individual maintainer vs organisation).
2. Whether any diocesan, parish, or other ecclesiastical affiliation should ever be claimed (currently: none).
3. Whether a postal address should be published for formal copyright notices (email-only is used now).
4. Confirmation that MIT `LICENSE.md` copyright holder naming matches the intended rights holder for original article prose.
5. Any planned analytics, forms, or newsletters that would require updating the Privacy Policy and possibly consent UI.
6. Scripture translation editions actually quoted site-wide (for more specific copyright notices if desired).

---

## Issues requiring professional legal review

1. Whether the Privacy Act 1988 applies to the maintainer’s circumstances and what APP obligations follow.
2. Adequacy of Terms of Use liability wording for Australian Consumer Law.
3. Whether additional notices are needed for international visitors.
4. Formal DMCA / Australian copyright notice agent details if desired beyond email procedure.
5. Alignment between MIT software licence and intended licence for educational article text.

---

## Components and conventions reused

- `BaseLayout`, `PageHeader`, `Breadcrumbs`, `SEOHead` (via BaseLayout)
- `Disclaimer` (existing short pastoral disclaimer in footer brand area — retained)
- `SITE` / `PAGE_DESCRIPTIONS` / `withBase()` / search index patterns
- Existing `.prose`, `.callout`, `.contact-options` visual language; new legal-specific styles appended in `src/styles/global.css`
