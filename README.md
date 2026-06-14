# Dicky Adhi Satria — Engineering Scalable Backends, Spatial Systems, and AI Pipelines

> Backend Developer specializing in scalable APIs, geospatial systems, and ML-assisted data pipelines.

## Overview

This is a Next.js 16 portfolio application showcasing my professional experience, projects, and technical capabilities. Built with a minimalist luxury aesthetic, featuring advanced animations and real-time telemetry visualization.

## Tech Stack

**Framework & Runtime**

- Next.js 16.3 (App Router)
- React 19.0 (RC)
- TypeScript 6.0

**Styling & Animation**

- Tailwind CSS 4.0
- Framer Motion 12.4
- Lucide React (icons)

**UI Utilities**

- clsx / tailwind-merge
- Custom design system components

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- pnpm (package manager)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Runs the development server at http://localhost:3000

### Build

```bash
pnpm build    # Production build
pnpm start    # Preview production build
pnpm lint     # Code linting
```

## Project Structure

```
portofolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── components/        # UI components
│       ├── hero.tsx       # Main hero section with parallax
│       ├── telemetry-card.tsx
│       ├── metrics-ribbon.tsx
│       ├── site-header.tsx
│       ├── profile-rail.tsx
│       ├── tech-stack-matrix.tsx
│       └── experience-switcher.tsx
├── lib/
│   ├── data.ts            # Portfolio data (experience, projects, certifications)
│   ├── types.ts           # TypeScript definitions
│   └── cn.ts              # Tailwind class merging utility
└── public/                # Static assets
```

## Features

- **Minimalist Luxury Design** — Clean, professional aesthetic with subtle gradients and micro-interactions
- **Scroll-Triggered Animations** — Framer Motion animations on viewport entry
- **Spatial Systems Highlight** — PostGIS, geospatial query optimization showcase
- **Backend Engineering Focus** — Microservices, API contracts, performance metrics
- **ML Pipeline Integration** — CNN inference, TensorFlow/Keras experience
- **Real-time Telemetry** — Live system log visualization
- **Tech Stack Matrix** — Categorized skills with proficiency levels
- **Interactive Experience Switcher** — Filter between Backend, Spatial, and ML categories

## Professional Focus

- **Backend Systems**: 2+ years experience with NestJS, Express, Golang microservices
- **Spatial Systems**: PostGIS, GeoJSON, geospatial query design, routing engines
- **ML Pipelines**: TensorFlow/Keras, CNN classification, FastAPI deployment

## Contact

- Email: dicky2ux@gmail.com
- LinkedIn: linkedin.com/in/dickyadhisatria
- GitHub: github.com/dickyadhisatria

## Deployment

Deploy to Vercel:

```bash
npm i -g vercel
vercel --prod
```

## License

ISC
