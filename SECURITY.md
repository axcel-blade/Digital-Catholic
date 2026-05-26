# Security Policy

## About this project

Digital Catholic is a **static website** (Astro 6, no server, no database, no user accounts). There is no backend to compromise, no authentication system, and no user data collected or stored.

The surface area for security vulnerabilities is therefore very limited.

## Supported versions

Only the latest version of the site (deployed from the `main` branch) is actively maintained.

## Reporting a vulnerability

If you discover a security issue — for example, a dependency vulnerability, a problem with the GitHub Actions workflow, or a concern about the GitHub Pages deployment configuration — please report it responsibly:

1. **Do not open a public GitHub issue** for security-sensitive findings.
2. Send a description of the issue to the maintainer at **srikanthfernando3@gmail.com** with the subject line `[SECURITY] Digital Catholic`.
3. Include: a description of the issue, steps to reproduce, and the potential impact.

The maintainer will acknowledge your report within 7 days and aim to resolve confirmed issues within 30 days.

## Dependency policy

This project intentionally uses minimal dependencies. No open-source UI libraries, authentication packages, or data-fetching libraries are included. The only runtime dependencies are `astro` and `@astrojs/sitemap`.

Keep dependencies up to date by running `npm audit` periodically and updating `package.json` as needed.
