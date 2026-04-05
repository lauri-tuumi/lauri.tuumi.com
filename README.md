# lauri.tuumi.com

Personal CV site, available in English and Finnish.

**Live:** https://lauri.tuumi.com

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

The build pipeline:
1. Generates favicon files from `favicon.svg`
2. Generates bilingual PDFs with QR codes (`public/lauri-tuumi-cv-en.pdf`, `public/lauri-tuumi-cv-fi.pdf`)
3. Refreshes generated Open Graph assets in `src/app/`
4. Exports a static Next.js site to `out/`

Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Stack

- [Next.js](https://nextjs.org) — static export
- [Tailwind CSS v4](https://tailwindcss.com)
- [@react-pdf/renderer](https://react-pdf.org) — build-time PDF generation
- [Zod](https://zod.dev) — data validation
