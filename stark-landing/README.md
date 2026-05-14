# STARK Foundation — Website

Next.js 16 + React 19 + Tailwind 4 + TypeScript site for [starkfoundation.in](https://www.starkfoundation.in), exported as static HTML for GitHub Pages.

## Setup

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build for deployment

```bash
npm run build        # outputs static site to ./out/
```

`next.config.mjs` is set to `output: 'export'` — the entire site builds to `./out/` and can be deployed to any static host.

## Structure

```
app/
├── page.tsx                          # Home
├── about-us/
├── vocational-training-program/      # Programs
├── digital-literacy-program/
├── education-for-all/
├── covid-relief-initiatives/
├── get-involved/                     # Get Involved hub
├── volunteer-your-time/
├── donate-now/
├── partner-with-us/
├── gallery/
└── contact/
components/
├── site/                             # Navbar, Footer, PageHeader
└── ui/                               # shadcn primitives
lib/
├── nav.ts                            # nav structure (single source for header/footer)
└── utils.ts
public/images/                        # scraped assets from current Wix site
```

## v1 status

- [x] All 11 pages from current Wix site mirrored
- [x] Mobile-responsive nav with submenus (Programs, Get Involved)
- [x] Scraped images from live site
- [ ] Donate (Razorpay/UPI) — placeholder buttons; v1.1
- [ ] Forms (volunteer, contact) — non-submitting; v1.1 (Formspree or API)
- [ ] Real content review with team
- [ ] Logo cleanup / new hero photography

## Theme

- Primary: deep blue `#1e3a8a` (trust)
- Accent: saffron `#ea580c` (Donate CTA)
- Fonts: Inter (sans), Fraunces (serif headings)
- Tokens live in `app/globals.css`
