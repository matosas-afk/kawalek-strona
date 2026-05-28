# kawalek-strona

Next.js website for Kawiarnia Kawałek (Zielonka). Single-page (App Router), client: Pani Kasia.

## Tech stack

- **Next.js** 16.2.4 (App Router, React Server Components)
- **React** 19.2.4
- **TypeScript** 5
- **Tailwind CSS** v4 (via PostCSS) — theme tokens in `src/app/globals.css`
- **Fonts:** Playfair Display (headings, serif), Inter (body)
- **Image handling:** `next/image` with lazy loading + `sizes` props

## Commands

```bash
npm run dev          # localhost:3000
npm run build        # production build
npm run lint         # eslint
npm run optimize-images   # batch-optimize public/images/ via sharp (after adding new photos)
```

## Project structure

```
src/
├── app/
│   ├── page.tsx          # Home — orchestrates all sections in order
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── globals.css       # Tailwind + theme tokens
│   ├── robots.ts, sitemap.ts, favicon, icon
├── components/
│   ├── Navbar.tsx        # Sticky header, mobile hamburger
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── SpecialOffers.tsx # 2-column: Seniors (Wed) + Donuts (Thu)
│   ├── DeseryNaCieplo.tsx# Hot desserts (30 zł flat)
│   ├── Menu.tsx          # 3 tabs: Desery, Lody, Kawa i napoje
│   ├── TortySection.tsx  # 3 tabs: Urodzinowe, Okolicznościowe, Weselne
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── Contact.tsx       # Address, phone, hours, embedded Google Maps
│   ├── Footer.tsx
│   └── JsonLd.tsx        # CafeOrCoffeeShop + LocalBusiness structured data
public/
├── images/
│   ├── K1.jpg–K9.jpg, K00.jpg   # original hero/about/gallery images
│   ├── marketing/                # plakaty (cennik, desery na ciepło, pączki, senior)
│   ├── cakes/{birthday,occasion,wedding}/  # portfolio tortów
│   ├── drinks/                   # kawa mrożona, lemoniady, koktajl
│   └── logo.png
```

## Design tokens (Tailwind, custom colors)

| Color | Hex | Usage |
|-------|-----|-------|
| Dark brown | `#3D2817` | Headers, dark sections, primary text on light bg |
| Medium brown | `#6B3A1F` | Secondary text |
| Caramel/tan | `#C9956B` | Accent, buttons, badges, decorative |
| Cream | `#F5E6D3` | Light text on dark, section bg |
| Off-white | `#FDF8F4` | Body bg, light sections |
| Deep dark | `#2A1A0E` | Footer |

Rounded corners: `rounded-2xl` (sections), `rounded-xl` (cards), `rounded-full` (pills/chips).
Shadows: `shadow-md` (cards), `shadow-lg` (highlighted), `shadow-2xl` (price callouts).

## Conventions

- **Server Components by default.** Add `"use client"` only when needed (state, interactivity): `Navbar.tsx`, `Menu.tsx`, `TortySection.tsx`.
- **Section ids:** every `<section>` has `id="kebab-case"` for anchor scrolling; add `scroll-mt-16` to offset for sticky navbar.
- **Polish content.** All user-facing strings in Polish. Refer to owner as „Pani Kasia".
- **Images:** always use `next/image`, always provide `alt`, always set `sizes` for responsive grids.
- **No prop drilling for trivial state** — local `useState` is fine for tab switchers.

## Adding a new section (pattern)

1. Create `src/components/MySection.tsx` (server component unless interactive)
2. Wrap content in `<section id="my-section" className="... scroll-mt-16" aria-label="...">`
3. Use design tokens above for colors
4. Import + place in `src/app/page.tsx` in desired order
5. Add nav link in `Navbar.tsx` (both desktop and mobile menus)
6. If business-relevant, add `Offer` entry to `JsonLd.tsx`

## Browser MCP (Playwright) — on-demand

Configured in `.claude/settings.local.json` as **disabled by default** to save tokens. Enable manually only when needed (visual iteration sessions, automated screenshots):

```bash
# Enable for this session
claude mcp enable playwright
# Or edit .claude/settings.local.json: remove "playwright" from disabledMcpjsonServers
```

Use cases worth enabling: client feedback iteration, responsive testing, post-deploy visual verification.

## Preview deploys (Vercel)

Pattern for showing changes to Kasia:
1. Commit changes on a feature branch
2. Push → Vercel auto-generates `kawalek-strona-git-<branch>.vercel.app`
3. Send link to Kasia (she opens on phone, reviews, approves)

This avoids needing live demos or screenshots.
