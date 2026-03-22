# Archi-Maquette — React + Vite

A production-grade architectural studio website built with React 18, Vite 5, and vanilla CSS. Features a dark industrial aesthetic with gold accents, 3D motion effects, and full responsive layout.

## Tech Stack

- **React 18** + **React Router DOM v6**
- **Vite 5** — lightning-fast dev server and build
- **Vanilla CSS** — one `.css` file per component (no Tailwind, no CSS-in-JS)
- **Google Fonts** — Bebas Neue (display) + DM Sans (body) + DM Mono (code)
- **Vercel** — zero-config deployment

---

## Project Structure

```
src/
├── components/
│   ├── Cursor/         # Custom animated cursor (desktop only)
│   ├── Navbar/         # Fixed nav with mobile drawer
│   └── Footer/         # 4-column footer
├── hooks/
│   ├── useTilt.js      # 3D mouse-tilt effect for cards
│   └── useInView.js    # IntersectionObserver scroll reveal
├── pages/
│   ├── HomePage/       # Hero, stats, services preview
│   ├── AboutPage/      # Mission, values, team grid
│   ├── GalleryPage/    # Masonry CSS grid with filter bar
│   └── ContactPage/    # Two-column form with animations
└── styles/
    └── globals.css     # Design tokens, resets, utilities
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build → ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — Git Integration
1. Push this repo to GitHub / GitLab
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no configuration needed
4. `vercel.json` handles SPA routing rewrites automatically

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a0a` | Page background |
| `--gold-500` | `#c8a96e` | Primary accent |
| `--font-display` | Bebas Neue | Headlines, numbers |
| `--font-body` | DM Sans | Body copy |
| `--font-mono` | DM Mono | Labels, tags, UI |

---

## 3D & Motion Features

- **Hero image** — slow Ken Burns zoom
- **Animated grid overlay** — subtle parallax movement
- **Scroll reveal** — `useInView` hook with staggered delays
- **Custom cursor** — dot + ring with lag, hover state
- **Marquee** — infinite scrolling service ticker
- **Card hover** — image desaturation → color transition
- **Form panel** — 3D perspective tilt on scroll-enter
- **Navbar logo** — 45° → 90° rotation on hover

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, stats, services |
| `/studio` | About — mission, values, team |
| `/gallery` | Gallery — masonry grid, filter bar |
| `/contact` | Contact — form with success state |

---

© 2024 Archi-Maquette Studio
