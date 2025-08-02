# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based web application integrated with Sanity CMS, Tailwind CSS v4, React, and TypeScript. The project follows Astro's file-based routing system with React components for interactive elements.

## Essential Commands

```bash
# Development
npm run dev          # Start development server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro        # Access Astro CLI commands

# Type checking
npm run astro check  # Run Astro's built-in type checker
```

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with React integration
- **CMS**: Sanity (configured but requires project setup)
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **Language**: TypeScript

### Project Structure
- `src/pages/` - File-based routing (`.astro` and `.md` files)
- `src/layouts/` - Shared page layouts
- `src/styles/` - Global CSS and Tailwind imports
- `public/` - Static assets

### Key Configuration
- **Astro Config**: `astro.config.mjs` includes Sanity and React integrations
- **Sanity**: Currently configured with placeholder project ID ("your-project-id")
- **Tailwind**: Integrated via Vite plugin, not traditional PostCSS

## Development Notes

- Astro pages use frontmatter for component logic and imports
- React components can be used within Astro files for client-side interactivity
- Tailwind v4 is configured through Vite, not traditional CSS imports
- Sanity integration requires updating project ID and dataset in `astro.config.mjs`