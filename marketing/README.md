# Marketing Website

  

## Project Overview

This is the marketing website for our product, built with Next.js, TypeScript, and TailwindCSS. The website serves as our primary landing page and marketing platform, showcasing our product features, pricing, and company information.

  

## Technology Stack

- Next.js with TypeScript

- TailwindCSS for styling

  

## Prerequisites

- Node.js

- pnpm (package manager)

  

## Getting Started

  

### Local Development Setup

1. Install dependencies:

```bash

pnpm install

```

  

2. Run the development server:

```bash

pnpm dev:mock

```

  

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Mock API Server

The project uses json-server to provide mock API endpoints during development. When you run `pnpm dev:mock`, it starts both:
- The Next.js development server on port 3000
- A mock API server on port 3001

The mock API data is defined in `src/mock/db.json`. You can access the mock API at `http://localhost:3001`.

## Project Structure

```

marketing/

├── src/ # Source code directory

│ ├── app/ # Next.js app directory

│ ├── components/ # Reusable UI components

│ ├── styles/ # Global styles and Tailwind config

│ └── types/ # TypeScript type definitions

├── public/ # Static assets

└── tailwind.config.ts # Tailwind CSS configuration

```

  

## Development Guidelines

  

### Code Style

- Use TypeScript for all code

- Follow ESLint configuration for code formatting

- Use TailwindCSS for styling

- Keep components modular and reusable

  