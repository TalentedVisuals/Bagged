# Bagged. — Handcrafted Nigerian Leather & Crochet Bags

A luxury e-commerce experience for custom and ready-to-wear artisanal leather and crochet bags made in Nigeria. Featuring bespoke 3D interactive preview cards, audio voice-note and image commission studios, multi-currency pricing (NGN, USD, GBP, EUR), and direct WhatsApp & email checkout workflows.

---

## 🚀 Deploying to Vercel

This project is pre-configured and ready to deploy to **Vercel** with zero extra setup.

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Vercel will automatically detect the settings from `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. (Optional) Add any environment variables if using server-side Gemini features (see `.env.example`).
6. Click **Deploy**.

---

### Option 2: Deploy via Vercel CLI

If you have the Vercel CLI installed:

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Log in to Vercel
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Key Files for Vercel

- `vercel.json` — Pre-configured Vite SPA routes, single-page application deep-link rewrites (`/(.*) -> /index.html`), and cache control headers for `/assets/*`.
- `.gitignore` — Ignores `.vercel`, `dist`, `node_modules`, and local `.env` files.
- `public/favicon.svg` — Handcrafted artisanal brand favicon.
