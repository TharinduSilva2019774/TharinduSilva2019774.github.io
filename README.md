# Portfolio

Static Next.js portfolio geared for deployment on GitHub Pages.

## Local development

1. Install dependencies with `npm install`.
2. Run `npm run dev` and open `http://localhost:3000`.

## Build and preview the static export

- Create the production build with `npm run build:static` (or `npm run build`).
- Serve the generated `out` directory locally with `npm start` (uses `npx serve`).

## GitHub Pages deployment

The repository includes `.github/workflows/deploy.yml`, which outputs the static site and publishes it to GitHub Pages.

1. Push changes to the `main` branch.
2. In the repository settings, open **Pages** and ensure the source is set to **GitHub Actions**.
3. Each push to `main` runs the workflow, uploading the `out` directory and deploying to Pages.

Manual deployment runs can be triggered from the **Actions** tab via the *Deploy to GitHub Pages* workflow dispatch.
