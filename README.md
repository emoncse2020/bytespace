# ByteSpace

A pixel-faithful implementation of the ByteSpace course-platform design, built from the Figma source file.

**Live:** _(Vercel URL)_

## What's included

| Route | Status | Description |
|---|---|---|
| `/` | Required | Full landing page — 8 sections, hero through footer |
| `/signup` | Bonus | Registration screen |
| `/login` | Bonus | Sign-in screen with social options |

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens declared in `@theme`
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Project structure

```
src/
  app/                  routes: /, /login, /signup
  components/
    ui/                 Button, Chip, Input, Logo, Ornament, forms
    layout/             Header, Footer, AuthLayout
    cards/              CourseCard, CategoryCard, TestimonialCard
    sections/           the eight landing-page sections
  data/content.ts       all copy and content, lifted from the design
public/assets/          images, icons and 3D ornaments exported from Figma
```

## Design system

Every token is taken from the Figma variables rather than eyeballed, and declared once in `src/app/globals.css`.

**Colour**

| Token | Value | Use |
|---|---|---|
| `blue-800` | `#003BE2` | Brand, hero, links, prices |
| `lime-400` | `#D4FB20` | Primary CTA, accents |
| `lime-accent` | `#C1E338` | "View More" pill |
| `violet-600` | `#7F30F7` | Section eyebrows |
| `gray-50…950` | `#F5F5F6` → `#242528` | Surfaces, borders, text |

**Type**

- **Poppins** (500/600) — headings and display
- **Satoshi** (400/500/700) — body and UI
- **Clash Display** (700) — the logo wordmark

Satoshi and Clash Display are Fontshare faces, loaded from the Fontshare CDN; Poppins comes from `next/font/google`.

> Figma records letter-spacing as `-1`, which is **percent**, not pixels. It is implemented as `-0.01em` so tracking scales correctly with font size.

**Layout** — 1440 canvas, 1200 content column, 120px gutters, 12 × 120px grid.

**Elevation** — one shared token (`--shadow-a`), an eight-layer stacked drop shadow.

## Implementation notes

**3D ornaments.** The decorative shapes are not flat images. Each is a greyscale PNG with a colour layer masked to its silhouette and composited in `mix-blend-mode: hard-light` — the same construction the design file uses, which preserves the 3D shading while re-tinting each shape lime or off-white.

**Responsive behaviour.** The Figma file contains desktop frames only (all nine screens are 1440px wide; there are no tablet or mobile frames). Desktop reproduces the design exactly. Below 1440px the layout degrades sensibly — fluid container, grids collapsing 3 → 2 → 1, decorative ornaments hidden — which is an extension beyond the source rather than something taken from it.

**Fidelity to the source.** The design file is reproduced as drawn, including details that look like mistakes but are what the design specifies: the footer newsletter button is labelled "Search", and the three footer link columns carry no headings.

One genuine gap in the source is left alone: the `Black/50` colour variable has no value defined in Figma, and nothing references it.

**Accessibility.** Semantic landmarks and headings, labelled form controls, `aria-label` on icon-only buttons, visible focus rings, and alt text on meaningful images with decorative ones marked `aria-hidden`.
