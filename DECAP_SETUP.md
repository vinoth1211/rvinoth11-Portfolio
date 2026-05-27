# Decap CMS setup (visual admin at `/admin`)

The portfolio admin lives at **`/admin`** on your deployed site (e.g. `https://rvinoth11-portfolio.vercel.app/admin`).

## What it does

- Edit content in **`public/content/*.json`** through web forms
- Save → commits to GitHub → Vercel rebuilds (~1–3 minutes)
- Upload images to **`public/uploads/`**

## One-time GitHub OAuth setup (Vercel)

1. **Create a GitHub OAuth App**
   - GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
   - Application name: `Portfolio CMS`
   - Homepage URL: `https://rvinoth11-portfolio.vercel.app` (your live URL)
   - Authorization callback URL: `https://rvinoth11-portfolio.vercel.app/api/callback`

2. **Add environment variables in Vercel**
   - Project → Settings → Environment Variables:
     - `GITHUB_CLIENT_ID` — from the OAuth app
     - `GITHUB_CLIENT_SECRET` — from the OAuth app
     - `SITE_URL` — `https://rvinoth11-portfolio.vercel.app` (no trailing slash)

3. **Redeploy** after adding env vars.

4. Open `/admin`, click **Login with GitHub**, and edit content.

## Local admin (optional)

For local testing without GitHub OAuth:

1. In [`public/admin/config.yml`](public/admin/config.yml), uncomment:
   ```yaml
   local_backend: true
   ```
2. Run in a second terminal:
   ```bash
   npx decap-server
   ```
3. Run `npm run dev` and open `http://localhost:5173/admin`

Comment out `local_backend` before deploying to production.

## Security

- Only you should have write access to the GitHub repository
- Do not commit `GITHUB_CLIENT_SECRET` to the repo
- `/admin` is excluded from search engines via `noindex` headers
- Consider a **private** repository if the admin URL is public

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Failed to load config.yml (404)` | Hard-refresh (Ctrl+Shift+R). Open `/admin` or `/admin/` — config must load from `/admin/config.yml` (check Network tab). |
| Login fails | Check OAuth callback URL matches `/api/callback` exactly |
| Save fails | Confirm GitHub token has `repo` scope; repo name in `config.yml` is correct |
| Site shows old content | Wait for Vercel deploy; hard-refresh the portfolio |
| Images broken | Paths should start with `/images/` or `/uploads/` |

See also [CONTENT_UPDATES.md](CONTENT_UPDATES.md).
