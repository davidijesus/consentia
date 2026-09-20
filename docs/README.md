# Consentia documentation

This directory contains the Docusaurus site for the [Consentia concept](../README.md). The research pages are in Portuguese and describe a proposed human-supervised ethical review workflow. They do not document a running agent service.

## Local development

Use Node.js 20 or newer and npm from this directory:

```bash
npm ci
npm run start
```

## Verify the static site

```bash
npm run build
npm run serve
```

The built files are written to `build/`. The configured public base path is `/consentia/`; keep it when checking local routes. Publishing to GitHub Pages is a separate release action and is not required for README-only changes.

The [root README](../README.md) describes the repository scope and limitations. Research pages are under `docs/`, and images are under `static/`.
