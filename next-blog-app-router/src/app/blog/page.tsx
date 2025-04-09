import { BlogList } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips and strategies to boost your business',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog',
    description: 'Tips and strategies to boost your business',
    url: 'https://next-blog-blue-one.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://next-blog-blue-one.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set',
      },
    ],
  },
}

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <BlogList posts={sortedPosts} />
}
