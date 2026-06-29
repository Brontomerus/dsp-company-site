# DSP Company Site

A simple React static site with Home and About pages, deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to GitHub Pages

All development happens on **`master`**. Every push to `master` triggers a build and deploy — no separate branch is required.

### One-time GitHub setup

1. Push this repository to GitHub on the `master` branch.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch").
4. Push to `master` (or run the workflow manually from the **Actions** tab).

The workflow checks out `master`, runs `npm run build`, and publishes the compiled `dist/` folder.

### Important

| Setting | Correct | Wrong |
|---------|---------|-------|
| Pages source | **GitHub Actions** | Deploy from a branch |
| Branch you edit | **`master`** | `gh-pages` |
| What gets served | Built `dist/` output | Raw source files |

If Pages is set to **Deploy from a branch → master**, visitors get unbuilt `.jsx` files and the site breaks with a MIME type error. You still only use `master` for code — GitHub Actions builds it before serving.

## Custom domain

1. Edit `public/CNAME` and replace `www.example.com` with your domain (e.g. `www.yourcompany.com` or `yourcompany.com`).
2. Commit and push to `master`.
3. In **Settings → Pages → Custom domain**, enter the same domain and save.
4. Configure DNS with your registrar:
   - **Apex domain** (`yourcompany.com`): add `A` records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Subdomain** (`www.yourcompany.com`): add a `CNAME` record pointing to `<username>.github.io`.

GitHub will provision HTTPS once DNS is verified.

## Project pages (optional)

If you host at `https://<username>.github.io/<repo-name>/` instead of a custom domain, update `base` in `vite.config.js`:

```js
base: '/<repo-name>/',
```

## Customize content

- Home page: `src/pages/Home.jsx`
- About page: `src/pages/About.jsx`
- Site name and navigation: `src/components/Layout.jsx`
