# Portfolio Deployment Guide

## Deploying to GitHub Pages

This portfolio uses a monorepo structure with both web and mobile apps. The web app can be deployed to GitHub Pages.

### Prerequisites

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

### Automatic Deployment

The portfolio automatically deploys to GitHub Pages when you push to the `main` branch, thanks to the GitHub Actions workflow.

### Manual Deployment

To deploy manually:

```bash
# Build the web app
cd apps/web
npm run build

# The build output will be in build/client/
# GitHub Actions will handle the deployment automatically
```

### Important Notes

- **Server-side features**: This deployment only includes the client-side build. Server-side features (API routes, authentication, database) won't work on GitHub Pages.
- **Environment variables**: Some features may require backend services that aren't available in the static deployment.
- **Mobile app**: The mobile app in `apps/mobile/` needs to be deployed separately through app stores or Expo.

### Local Development

```bash
# Web app
cd apps/web
npm run dev

# Mobile app
cd apps/mobile
npm run start
```

### Troubleshooting

If the deployment fails:
1. Check the GitHub Actions logs
2. Ensure all dependencies are properly installed
3. Verify that the build produces the expected output in `build/client/`

Your portfolio will be available at: `https://[username].github.io/[repository-name]/`