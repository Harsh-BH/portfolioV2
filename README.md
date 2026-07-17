# Portfolio V2

Personal portfolio site (Next.js) with Sanity CMS integration.

## Overview

Portfolio V2 is a single-page personal portfolio built with the Next.js App Router, React, and TypeScript. It presents a hero introduction, a projects/works grid, a skills-and-experience section, and a contact section, all wrapped in a playful, hand-drawn "doodle" aesthetic with animated decorations. The project ships with a Sanity CMS integration layer — a configured client, GROQ queries, and Studio schemas for profile and project content — along with incremental static regeneration (ISR), light/dark theming, and built-in SEO metadata.

## Features

- **Section-based landing page** composed of Hero, Works, Case Studies (skills/toolkit), Contact, and a decorative Flower Garden section (`app/page.tsx`, `app/(sections)/`).
- **Sanity CMS integration** — a configured `@sanity/client`, image URL builder, and GROQ queries for profile, all projects, featured projects, and single projects (`lib/sanity.client.ts`, `lib/sanity.queries.ts`).
- **Sanity Studio schemas** for `profile` and `project` document types, ready to drop into a Sanity Studio (`sanity/`).
- **Incremental Static Regeneration (ISR)** — the home page revalidates hourly, and the `sanityFetch` helper supports per-query revalidation (`app/page.tsx`, `lib/sanity.client.ts`).
- **Animations** powered by Framer Motion, including staggered reveals, hover effects, reduced-motion support, and shared motion wrappers (`components/MotionWrapper.tsx`, `lib/constants.ts`).
- **Custom flower cursor** that follows the pointer with spring physics and selectable color presets (`components/FlowerCursor.tsx`).
- **Hand-drawn doodle decorations** and decorative SVGs across sections (`components/DoodleBackground.tsx`, `DoodleCaseStudies.tsx`, `DoodleContact.tsx`, `HeadingDoodles.tsx`, `DecorativeSVG.tsx`, `Flower.tsx`).
- **Light/dark theme** with class-based Tailwind dark mode, a theme toggle, `localStorage` persistence, system-preference detection, and a no-flash inline theme script (`components/ThemeToggle.tsx`, `app/layout.tsx`).
- **SEO** — centralized metadata, Open Graph and Twitter cards, JSON-LD structured data helpers, plus generated `robots.txt` and `sitemap.xml` (`lib/seo.ts`, `app/robots.ts`, `app/sitemap.ts`).
- **Google Fonts** via `next/font` (Inter for body, Playfair Display for display headings).

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack dev)
- **UI:** React 18, TypeScript 5
- **Styling:** Tailwind CSS 3 (class-based dark mode) with PostCSS and Autoprefixer
- **Animation:** Framer Motion
- **CMS:** Sanity — `@sanity/client`, `@sanity/image-url`, `next-sanity`
- **Tooling:** ESLint (`eslint-config-next`)

## Getting Started

### Prerequisites

- Node.js (a version compatible with Next.js 15)
- A package manager (npm, pnpm, or yarn)
- A Sanity project (only required if you want to fetch content from a live CMS)

### Installation

```bash
git clone https://github.com/Harsh-BH/portfolioV2.git
cd portfolioV2
npm install
```

### Environment Variables

The Sanity client reads the following variables (see `lib/sanity.client.ts`). It falls back to placeholder defaults (`"your-project-id"` and the `"production"` dataset) if they are not set, so the site runs without them but will not fetch real CMS content:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Add these to a `.env.local` file at the project root.

### Running

```bash
# Start the development server (with Turbopack)
npm run dev

# Create a production build
npm run build

# Start the production server
npm run start

# Lint the project
npm run lint
```

The dev server runs at http://localhost:3000.

## Project Structure

```
app/
  (sections)/        # Page sections: hero, works, case-studies, contact, flower-garden
  layout.tsx         # Root layout: fonts, theme script, Navbar, FlowerCursor, SEO
  page.tsx           # Home page composing the sections (ISR enabled)
  globals.css        # Global styles
  robots.ts          # robots.txt route
  sitemap.ts         # sitemap.xml route
components/          # UI + decorative components (Navbar, Footer, ThemeToggle,
                     # FlowerCursor, Doodle*, MotionWrapper, SEO, etc.)
lib/
  sanity.client.ts   # Sanity client, image URL builder, revalidated fetch helper
  sanity.queries.ts  # GROQ queries + TypeScript interfaces
  seo.ts             # Metadata + JSON-LD helpers
  constants.ts       # Site config, nav links, animation variants
sanity/
  schema.ts          # Aggregates Studio schemas
  profile.schema.ts  # Profile document schema
  project.schema.ts  # Project document schema
```
