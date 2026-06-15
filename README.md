# Portfolio — Konakalla Teja Venkatesh

Personal portfolio built with React, Vite, and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

## Run locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

## Production build

```bash
# Build for production (output in dist/)
npm run build

# Preview production build locally
npm run preview
```

## Deploy

The project is ready to deploy as a static site.

**Vercel (recommended)**

1. Push the repo to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Use the default settings: build command `npm run build`, output directory `dist`.
4. `vercel.json` is included for client-side routing (`/about`, `/projects`, etc.).

**Netlify**

1. Connect the repo on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. `public/_redirects` is included for SPA routing.

**Manual**

Upload the contents of the `dist` folder after running `npm run build`.
