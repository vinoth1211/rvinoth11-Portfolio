# Post-deployment content updates

This portfolio loads content from **`public/content/*.json`** at runtime. After you save changes, Vercel rebuilds and the live site updates in ~1–3 minutes.

## Visual admin (recommended)

Use the **Decap CMS** admin panel — no code required:

1. Open **`https://your-domain.com/admin`** (e.g. `/admin` on your Vercel URL)
2. Log in with GitHub (one-time setup: [DECAP_SETUP.md](DECAP_SETUP.md))
3. Edit forms for site copy, projects, skills, and experience
4. Click **Publish** — changes commit to GitHub and trigger a deploy

## Quick workflow (manual JSON)

1. Edit files in [`public/content/`](public/content/) (or use `/admin`)
2. Preview: `npm run dev`
3. Verify: `npm run build`
4. Push to `main`:
   ```bash
   git add .
   git commit -m "Update: describe your change"
   git push origin main
   ```
5. Wait for Vercel deploy; hard-refresh the live site (Ctrl+Shift+R)

## Content map

| What to change | File or admin section |
|----------------|------------------------|
| **Hero, about, contact, section titles** | `public/content/site.json` → **Site (Hero, About, Contact)** |
| **Projects** | `public/content/projects.json` → **Projects** |
| **Skills** | `public/content/skills.json` → **Skills** |
| **Experience timeline** | `public/content/history.json` → **Experience** |
| **Hero portrait** | `profile.heroImage` in site.json, or upload in admin (stored under `/uploads/` or `/images/hero/`) |
| **CV PDF** | Replace `public/assets/cv/Vinoth_Rasamanickam_CV.pdf` |
| **SEO** | [`index.html`](index.html) |
| **Nav labels** | [`src/components/Navbar/Navbar.jsx`](src/components/Navbar/Navbar.jsx) |

## Image paths

- Default images live under **`public/images/`** (projects, skills, history, hero)
- Admin uploads go to **`public/uploads/`** and are served at `/uploads/...`
- JSON fields use web paths, e.g. `/images/projects/project1.png`

## Playbooks

### Update hero or bio

1. Admin → **Site content** → edit **Profile** / **About**
2. Or edit `public/content/site.json`
3. Push → redeploy

### Add a project

1. Admin → **Projects** → add row (one `featured: true` only)
2. Or append to `projects` array in `public/content/projects.json` with `image` path
3. Push → redeploy

### Replace CV

1. Overwrite `public/assets/cv/Vinoth_Rasamanickam_CV.pdf`
2. Push → redeploy

## Security

- `/admin` requires GitHub login (see [DECAP_SETUP.md](DECAP_SETUP.md))
- Keep the repository private or limit collaborators
- Never commit `GITHUB_CLIENT_SECRET` — use Vercel environment variables only
- Admin is marked `noindex` in [`vercel.json`](vercel.json)

## Post-update checklist

- [ ] `npm run build` passes locally
- [ ] Demo/source links work
- [ ] CV downloads correctly
- [ ] Contact email is correct in `site.json`
- [ ] Vercel deployment succeeded

## Architecture

```
/admin (Decap)  →  commits  →  public/content/*.json
                                      ↓
                              fetch at runtime
                                      ↓
                              React portfolio
```

See [README.md](README.md) for install and deployment.
