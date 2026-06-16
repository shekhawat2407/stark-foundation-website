# STARK Foundation website

Source code for **https://starkfoundation.in**.

STARK Foundation (Stratifying And Advancing Rural Knowledge) is a Section-8
non-profit based in Bikaner, Rajasthan. Registered 2019. Programs span
vocational training, children's education, higher-ed partnerships, community
camps, and disaster relief.

## Tech stack

- **Next.js 16** (App Router) with `output: 'export'` static export
- **TypeScript** + **Tailwind 4**
- Hosted on **GitHub Pages** with a custom apex domain (HTTPS via Let's Encrypt)
- Forms via **Formspree**; donations via **Razorpay** (hosted page)
- A stakeholder PDF is pre-rendered by **Puppeteer** on every deploy

## Repository layout

```
.
├── .github/workflows/deploy.yml   CI: build, generate PDF, deploy to Pages
├── stark-landing/                 The Next.js project (the actual site)
│   ├── app/                       App Router pages
│   ├── components/site/           Navbar, Footer, page header, activity card
│   ├── lib/                       programs.ts (activity data), nav.ts, utils.ts
│   ├── public/images/             All website images
│   ├── scripts/                   Build helpers (PDF generator, basepath fix)
│   ├── next.config.mjs            output: 'export'
│   └── package.json               build = next build + fix-basepath + PDF gen
├── CNAME                          Custom domain config for GitHub Pages
└── README.md                      You are here
```

## Local development

```bash
cd stark-landing
npm install
npm run dev          # http://localhost:3000
```

To produce a production build locally (including the PDF report):

```bash
npm run build        # writes stark-landing/out/ including the PDF
```

## Deploys

`git push` to `main` triggers `.github/workflows/deploy.yml`.

End-to-end deploy time is around 2 to 3 minutes. The workflow:

1. Installs dependencies
2. Restores Puppeteer's bundled Chromium from cache (or downloads if missing)
3. Runs `npm run build` — Next.js static export, then PDF regeneration
4. Writes `.nojekyll` and `CNAME` to the output
5. Publishes `stark-landing/out/` to GitHub Pages

## Content data model

The single source of truth for activities, centres, and partners is
`stark-landing/lib/programs.ts`. To add a new event or project, edit that file
and follow the JSDoc comments at the top.

Photos go in `stark-landing/public/images/gallery/<kebab-name>.jpg`. Compress
new photos with `sharp` before committing (see
`stark-landing/scripts/optimize-hero.mjs` for the pattern).

## Reports

Two stakeholder-facing reports live on the site:

| URL | Style | Purpose |
| --- | ----- | ------- |
| `/the-foundation` | Editorial, year-agnostic | "What we do, in general." Auto-renders to `/stark-foundation-overview.pdf` on every build. |
| `/report-2026` | Data dossier | Numbers-led stakeholder report. |

For maintainers iterating on these year over year, see `docs/REPORTS.md`
(local-only handoff notes).

## Forms

Four Formspree-backed forms are wired in:

- Contact form on `/contact`
- Volunteer application on `/volunteer-your-time`
- Bilingual student application on `/vocational-training`
- Device donation pledge on `/digital-pahel`

## License and attribution

Source code is the property of STARK Foundation. Logo, photographs, and
copywriting are reserved.
