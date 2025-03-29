# Next.js Blog with Pages Router

A modern, feature-rich blog platform built with Next.js using the Pages Router architecture. This project combines a beautiful landing page with a fully functional blog system that uses Markdown for content management.

## Features

- **Modern UI Design**: Clean, responsive interface built with Tailwind CSS
- **Content Management**: Markdown-based blog posts with frontmatter for metadata
- **SEO Optimized**: Built-in SEO best practices
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Fast Performance**: Optimized for speed with Next.js
- **Search Functionality**: Built-in search for blog posts
- **Sharing Capabilities**: Easy social media sharing for blog posts

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with Pages Router
- **Content Management**: [Contentlayer](https://contentlayer.dev) for type-safe content
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom theme
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com) primitives
- **Icons**: [Lucide React](https://lucide.dev) for beautiful icons
- **Markdown Rendering**: React Markdown with remark-gfm
- **Fonts**: Next.js optimized fonts with Geist

## Project Structure

```
├── posts/                # Markdown blog posts
├── public/               # Static assets
│   └── assets/           # Blog post images
├── src/
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Next.js pages
│   │   ├── api/          # API routes
│   │   ├── blog/         # Blog pages
│   │   └── index.tsx     # Landing page
│   ├── styles/           # Global styles
│   └── templates/        # Page templates
│       ├── blog/         # Blog page templates
│       └── landing-page/ # Landing page sections
└── contentlayer.config.ts # Content schema definition
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

Blog posts are stored as Markdown files in the `posts` directory. Each post has frontmatter metadata:

```md
---
title: Your Post Title
description: A brief description of your post
date: 2024-01-01 12:00:00
image: /assets/your-image.png
author: 
  name: Author Name
  avatar: /path-to-avatar.png
---

# Your Markdown Content Here
```

Contentlayer automatically processes these files and makes them available as typed data in your components.

## Customization

### Styling

The project uses Tailwind CSS with a custom theme defined in `src/styles/globals.css`. You can modify the theme variables to customize the look and feel of your site.

### Components

UI components are organized in the `src/components` directory. The project uses a component-based architecture for easy customization and reuse.

### Landing Page

The landing page is composed of sections defined in `src/templates/landing-page/sections`. You can modify these sections or add new ones to customize your landing page.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
