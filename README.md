# Yein Jeong — Dreamcash-focused Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion. The site is tailored to show how Yein's software, cloud, security and community background can connect with product-led Web3 teams such as Dreamcash, without claiming professional Web3 experience that has not yet been earned.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository (for example `dreamcash-portfolio`).
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Push to `main` again if needed. The included workflow will build and deploy the site.

The Vite config uses relative asset paths, so it works as a GitHub project page without hard-coding the repository name.

## Content notes

- Phone number is intentionally not published on the website.
- Email, LinkedIn and GitHub are included as contact methods.
- The Dreamcash section is explicitly framed as a product study / exploration, not employment or affiliation.
- The next high-value update is to replace the “next step” copy with a real Dreamcash-focused prototype or case study after it is built.

## Main files to edit

- `src/App.tsx` — page layout and primary copy
- `src/data/content.ts` — projects, capabilities and skill lists
- `src/index.css` — global styling
