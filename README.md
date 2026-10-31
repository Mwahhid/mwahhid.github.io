# mwahhid.github.io

Personal site of Mwahhid Majeed, Cloud Infrastructure Engineer: https://mwahhid.github.io/

Single page built with React, Vite, and three.js. The header animation is a hub-and-spoke network with one node per Azure subscription supported.

## Develop

```sh
npm ci --ignore-scripts
npm run dev
```

All copy lives in `src/content.js`.

## Security

- Every dependency and font is self-hosted; a Content Security Policy (`vite.config.js`) blocks anything from other origins.
- Deploys (`.github/workflows/deploy.yml`) fail on any `npm audit` finding, skip install scripts, and use actions pinned to commit SHAs.
- Dependabot opens weekly update PRs for npm packages and actions.

The previous 3D island version is archived at [Mwahhid/portfolio-3d-v1](https://github.com/Mwahhid/portfolio-3d-v1).
