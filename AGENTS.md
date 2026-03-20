# AGENTS.md - Developer Guide for fioreale

This document provides guidance for agentic coding agents working on this codebase.

---

## Project Overview

Astro-based portfolio website for Alessio Fiorentino (Cloud Native Architect). Built with Astro 5, Tailwind CSS v4, and TypeScript. Deployed to GitHub Pages.

---

## Commands

### Development
```bash
npm run dev          # Start dev server at http://localhost:4321
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
```

### Single Test
N/A - This is a static portfolio site with no test framework.

---

## Code Style Guidelines

### General Principles
- Keep components modular and reusable
- Use semantic HTML elements
- Prefer Astro components (.astro) over React for static content
- Use Tailwind CSS utility classes for styling (no custom CSS unless necessary)

### TypeScript
- Uses strict TypeScript mode via `astro/tsconfigs/strict`
- All TypeScript rules follow Astro's strict configuration
- Define types in `src/config.ts` for site data (skills, projects, experience, education)
- Use explicit return types for utility functions

### Import Conventions
```typescript
// Relative imports for local modules
import Header from "../components/Header.astro";
import { siteConfig } from "../config";
import "../styles/global.css";

// Absolute-style for Node modules
import { defineConfig } from "astro/config";
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Header.astro`, `Projects.astro`)
- **Config**: camelCase for objects/properties (e.g., `siteConfig`, `social.linkedin`)
- **Variables**: camelCase
- **CSS Classes**: Tailwind utility classes (kebab-case when using arbitrary values)

### Astro Components
- Frontmatter section (---) at top for imports and logic
- Conditional rendering with `{condition && (<Component />)}`
- Iteration with `.map()` for lists
- Template expressions: `{variable}` or `{expression}`

### Tailwind CSS
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Use CSS custom properties for theme colors (e.g., `var(--color-accent)`)
- Keep classes organized by category (layout, spacing, typography, colors)
- Example: `class="grid grid-cols-1 lg:grid-cols-12 gap-8"`

### Error Handling
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safe property access
- Check array existence before mapping: `{array && array.length > 0 && array.map(...)}`
- Use conditional rendering to avoid rendering undefined values

### File Organization
```
src/
├── components/      # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Projects.astro
│   ├── Experience.astro
│   └── Education.astro
├── config.ts        # Site configuration and data
├── pages/          # Astro pages
│   └── index.astro  # Main page
└── styles/          # Global styles
    └── global.css
```

### Configuration Files
- `astro.config.mjs` - Astro configuration with Tailwind plugin
- `tsconfig.json` - TypeScript configuration (extends Astro strict)
- `package.json` - Dependencies and scripts

---

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** to components or config
3. **Verify locally** with dev server
4. **Build for production**: `npm run build`
5. **Preview production build**: `npm run preview`

---

## Adding Content

### Update Skills/Projects/Experience/Education
Edit `src/config.ts` - all site data is centralized there.

### Add New Component
1. Create `src/components/NewComponent.astro`
2. Import and use in `src/pages/index.astro`
3. Follow existing component patterns

---

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` automatically deploys to GitHub Pages on push to main. The site is available at `https://fioreale.github.io/fioreale`.

---

## Notes for Agents

- This is a static site - no backend or API routes
- All content is managed via `src/config.ts` - avoid hardcoding content in components
- Use the accent color `#E4672E` (from config) for highlights
- Ensure responsive design works on mobile, tablet, and desktop
- No linting or formatting tools configured - follow the style patterns in existing files
