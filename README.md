# DSP Company Site

A simple React static site with Home and About pages, deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `master` branch — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

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
