# AI Coding Agent Instructions for Jason Howes Astro Site

## Project Overview
This is an Astro-based static website for Jason Howes' sales recruiting consultancy. It uses Tailwind CSS v4 for styling with a custom color palette (brand blues, accent cyans) and Raleway/Inter fonts. The site features sections like Hero, Author bio, Book features, and commented-out components for Resources, Services, etc.

## Architecture
- **Framework**: Astro for static site generation
- **Styling**: Tailwind CSS v4 with custom theme in `src/styles/global.css`
- **Components**: `.astro` files in `src/components/`, imported into pages like `src/pages/index.astro`
- **Layout**: `src/layouts/Layout.astro` provides HTML structure, meta tags, and global styles
- **Assets**: Images in `public/`, build output to `dist/`

## Key Patterns
- **Component Structure**: Components are self-contained with `<style>` blocks for scoped CSS when needed (e.g., Hero's shape SVG)
- **Color Usage**: Use `brand-900` for dark backgrounds, `accent-400` for highlights; defined in global.css theme
- **Typography**: Headings are uppercase Raleway (light weight), body text Inter; responsive fluid sizing via calc()
- **Layout Grid**: Responsive grids with Tailwind classes, often `lg:grid-cols-2` for desktop splits
- **Section IDs**: Add `id="section-name"` for navigation (e.g., `id="author"` in Author.astro)
- **Image Handling**: Images in `public/` referenced with absolute paths like `/jason-howes.webp`

## Development Workflow
- **Start Dev**: `npm run dev` (serves at localhost:4321)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview` (local preview of build)
- **TypeScript**: Strict config via `astro/tsconfigs/strict`; types auto-generated in `.astro/types.d.ts`

## Conventions
- **File Naming**: PascalCase for components (e.g., `FreeChapterCTA.astro`), kebab-case for multi-word (e.g., `book-feature.astro`)
- **Imports**: Relative paths from components to other components/pages
- **Styling**: Prefer Tailwind utility classes; custom CSS only for complex layouts (e.g., SVG shapes)
- **Responsiveness**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints; fluid typography for headings
- **Animations**: Use AOS library for scroll animations (imported globally)
- **Icons**: Boxicons via CDN for icons

## Examples
- **Adding a Section**: Import component in `index.astro`, place between `<Layout>` tags
- **Custom Colors**: Use `text-accent-600` for secondary headings, `bg-brand-900` for hero backgrounds
- **Responsive Text**: Headings auto-scale; use `text-lg` class for larger body text with fluid sizing
- **Image Optimization**: Place in `public/`, use `<img>` with responsive classes like `max-w-sm md:max-w-md`

## Dependencies
- **UI**: FlyonUI for components, AOS for animations
- **Fonts**: Google Fonts (Inter, Raleway) loaded in Layout
- **Analytics**: Google Analytics script placeholder in Layout (replace G-XXXXXXXXXX)

Focus on static content delivery; no server-side rendering or dynamic data currently implemented.