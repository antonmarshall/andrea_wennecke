
# Deploying to GitHub Pages

This website is configured to be easily deployed to GitHub Pages. Follow these steps to get your site live:

## Setup

1. Create a GitHub repository for your project
2. Push your code to the repository
3. In your repository settings, navigate to "Pages"
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The included workflow file will automatically build and deploy your site

## Manual Deployment

If you prefer to deploy manually:

1. Run `npm run build` to create the production build
2. The build output will be in the `dist` folder
3. Enable GitHub Pages in your repository settings
4. Choose "Deploy from a branch" and select either:
   - The `gh-pages` branch if you're using a deployment tool like `gh-pages`
   - Or the `/docs` folder in your main branch (you'll need to rename `dist` to `docs`)

## URL Structure

This application uses HashRouter for compatibility with GitHub Pages, so your URLs will look like:
- `https://username.github.io/repo-name/#/`
- `https://username.github.io/repo-name/#/impressum`
- `https://username.github.io/repo-name/#/datenschutz`

## Custom Domain

If you want to use a custom domain:

1. Add your domain in the GitHub Pages settings
2. Create a CNAME file in the `public` folder with your domain name
3. The build process will include this file in the deployment

## Troubleshooting

- If images don't appear, check that they're being referenced with relative paths
- If you see a 404 page, make sure you're using the HashRouter (which is configured in this project)
- For other routing issues, remember that all routes must be preceded by `/#/` in GitHub Pages
