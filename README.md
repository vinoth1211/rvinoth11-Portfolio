# Vinoth Rasamanickam — Portfolio

A modern, responsive portfolio built with React 19, Vite, Tailwind CSS v4, and Framer Motion. Content is loaded from JSON and editable through a visual admin at `/admin`.

## Features

- **Visual CMS**: Decap CMS admin at `/admin` (GitHub login)
- **Runtime content**: `public/content/*.json` — update copy without changing components
- **Modern UI**: Glass navbar, bento about section, featured projects, scroll animations
- **Accessible**: Skip link, semantic HTML, reduced-motion support
- **SEO**: Meta tags and JSON-LD in `index.html`

## Tech stack

- React 19 + Vite 6
- Tailwind CSS v4
- Framer Motion + Lucide React
- Decap CMS (admin)
- Vercel (deploy + OAuth API routes)

## Project structure

```
public/
├── admin/           # Decap CMS (config.yml, index.html)
├── content/         # site.json, projects.json, skills.json, history.json
├── images/          # Static images for CMS paths
├── uploads/         # Images uploaded via admin
└── assets/cv/       # CV PDF

src/
├── context/ContentContext.jsx   # Fetches JSON content
├── components/
└── hooks/

api/
├── auth.js          # GitHub OAuth for Decap (Vercel)
└── callback.js
```

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` for the portfolio.

### Local admin (optional)

See [DECAP_SETUP.md](DECAP_SETUP.md) for GitHub OAuth on Vercel, or use `npx decap-server` with `local_backend: true` in `public/admin/config.yml`.

## Updating content

| Method | When to use |
|--------|-------------|
| **`/admin`** | Visual forms, no code ([DECAP_SETUP.md](DECAP_SETUP.md)) |
| **Edit JSON** | Direct edits in `public/content/` ([CONTENT_UPDATES.md](CONTENT_UPDATES.md)) |

After any change: push to `main` → Vercel redeploys (~1–3 min).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run lint` | ESLint |

## Deployment (Vercel)

1. Connect the GitHub repo to Vercel
2. Set environment variables (see [DECAP_SETUP.md](DECAP_SETUP.md)):
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `SITE_URL` (your production URL)
3. Deploy — visit `/admin` to manage content

## Contact

- **Email**: [vino6810403@gmail.com](mailto:vino6810403@gmail.com)
- **LinkedIn**: [vinoth-rasamanickam](https://www.linkedin.com/in/vinoth-rasamanickam-537597302/)
- **GitHub**: [vinoth1211](https://github.com/vinoth1211)

## License

MIT — see [LICENSE](LICENSE).
