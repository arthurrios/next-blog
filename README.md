# Next.js Blog with App Router

[View Live Demo](https://next-blog-blue-one.vercel.app/) - Check out the deployed application

This is a modern blog application built with Next.js App Router, featuring a clean design and powerful content management capabilities.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Rendering**: Hybrid rendering with SSG (Static Site Generation) via `generateStaticParams`
- **Content Management**: [Contentlayer](https://contentlayer.dev) for type-safe Markdown content
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with custom theme
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com) primitives
- **Icons**: [Lucide React](https://lucide.dev) for beautiful icons
- **Markdown Rendering**: React Markdown with remark-gfm
- **Animation**: Custom animations with tw-animate-css
- **Fonts**: Next.js optimized fonts with Geist from Vercel

## Features

- **Modern UI Design**: Clean, responsive interface built with Tailwind CSS
- **Content Management**: Markdown-based blog posts with frontmatter for metadata
- **SEO Optimized**: Built-in SEO best practices with Next.js metadata API
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Fast Performance**: Optimized for speed with Next.js App Router
- **Social Sharing**: Easy social media sharing for blog posts

## Getting Started

### Setup Instructions for next-blog-app-router

Follow these steps to set up and run the Next.js blog with App Router:

1. Navigate to the next-blog-app-router directory:

```bash
cd next-blog-app-router
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. The application uses [Contentlayer](https://contentlayer.dev) to manage blog content. All blog posts are stored as Markdown files in the `posts/` directory. You can edit existing posts or add new ones by creating `.md` files with the proper frontmatter.

6. To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

You can start editing the page by modifying files in the `src/app` directory. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
