# Post-deployment content updates

This portfolio is a **static site** (React + Vite). The live site updates only after Vercel builds a new version from your Git repo. There is no CMS or database.

## Quick workflow

1. Edit the file listed in the [content map](#content-map) below.
2. Preview: `npm run dev`
3. Verify: `npm run build`
4. Commit and push to `main` (or your Vercel production branch):
   ```bash
   git add .
   git commit -m "Update: describe your change"
   git push origin main
   ```
5. Wait for the Vercel deployment to finish (~1–3 minutes).
6. Hard-refresh the live site (Ctrl+Shift+R) to clear cached assets.

## Content map

| What to change | File |
|----------------|------|
| **Name, hero text, CV path** | [`src/data/site.js`](src/data/site.js) → `profile` |
| **About story & bento tiles** | [`src/data/site.js`](src/data/site.js) → `about` |
| **Contact email, social links, footer** | [`src/data/site.js`](src/data/site.js) → `contact` |
| **Projects** | [`src/data/projects.js`](src/data/projects.js) |
| **Skills** | [`src/data/skills.js`](src/data/skills.js) |
| **Experience timeline** | [`src/data/history.js`](src/data/history.js) |
| **Hero portrait** | Replace `assets/hero/heroImage.png` |
| **CV PDF** | Replace `public/assets/cv/Vinoth_Rasamanickam_CV.pdf` |
| **SEO (title, OG tags)** | [`index.html`](index.html) |
| **Nav link labels** | [`src/components/Navbar/Navbar.jsx`](src/components/Navbar/Navbar.jsx) → `NAV_LINKS` |

**Rule of thumb:** All copy and links for Hero, About, and Contact live in **`src/data/site.js`**. Lists (projects, skills, jobs) live in the other `src/data/*.js` files.

---

## Playbooks

### Update hero headline or bio

1. Open [`src/data/site.js`](src/data/site.js).
2. Edit `profile.eyebrow`, `profile.firstName`, `profile.tagline`, and/or `profile.taglineShort`.
3. Push → redeploy.

### Update about paragraphs or bento cards

1. Open [`src/data/site.js`](src/data/site.js).
2. Edit `about.paragraphs` (plain strings) or `about.paragraphWithHighlights` (text with **bold** project names).
3. Edit `about.bento` array (`icon` must be one of: `layers`, `code2`, `users`, `mapPin`).
4. Push → redeploy.

### Update email or social links

1. Open [`src/data/site.js`](src/data/site.js).
2. Set `contact.email` and update `contact.links` (`type`: `email` | `linkedin` | `github`).
3. Optionally sync `sameAs` URLs in [`index.html`](index.html) JSON-LD.
4. Push → redeploy.

### Replace CV (no code change)

1. Overwrite [`public/assets/cv/Vinoth_Rasamanickam_CV.pdf`](public/assets/cv/Vinoth_Rasamanickam_CV.pdf).
2. If you rename the file, update `profile.cvPath` and `profile.cvFilename` in [`src/data/site.js`](src/data/site.js).
3. Push → redeploy.

### Add a project

1. Add screenshot to `assets/projects/` (e.g. `project4.png`).
2. In [`src/data/projects.js`](src/data/projects.js): import the image and append an entry with `title`, `description`, `skills`, `demo`, `source`, and `featured` (only one project should have `featured: true`).
3. Push → redeploy.

### Change project demo or repo URL only

1. Edit `demo` or `source` in [`src/data/projects.js`](src/data/projects.js).
2. Push → redeploy.

### Add or remove a skill

1. Add icon PNG to `assets/skills/`.
2. Import it in [`src/data/skills.js`](src/data/skills.js) and add/remove an object `{ title, imageSrc }`.
3. Push → redeploy.

### Add experience entry

1. Add logo to `assets/history/` if needed.
2. Append an entry in [`src/data/history.js`](src/data/history.js) with `role`, `organization`, dates, `experiences` bullets, and `imageSrc`.
3. Push → redeploy.

### Edit on GitHub only (no local Node)

You can edit `src/data/site.js` or `src/data/projects.js` in the GitHub web UI and commit directly. Vercel will deploy automatically. For **new images**, upload files into `assets/` via GitHub’s “Add file” or clone the repo locally.

---

## Post-update checklist

- [ ] `npm run build` succeeds
- [ ] Project demo/source links work (prefer live site URLs over LinkedIn when possible)
- [ ] CV downloads from the path in `profile.cvPath`
- [ ] Contact email opens the correct `mailto:` address
- [ ] If name or role changed: update [`index.html`](index.html) meta tags and JSON-LD
- [ ] Vercel deployment succeeded; spot-check the live site

---

## What you cannot do without a rebuild

On static Vite hosting, visitors always get the last deployed build. To change the live site you must **push a new commit** (or trigger a manual redeploy in Vercel). Runtime-only edits (no deploy) would require a headless CMS or fetching `public/content.json` — not set up in this project.

---

## Further reading

See [README.md](README.md) for install, scripts, and deployment setup.
