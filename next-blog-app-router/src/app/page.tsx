import { LandingPage } from '@/templates/landing-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Sell your products as an affiliate in one place only',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.Set',
    description: 'Sell your products as an affiliate in one place only',
    url: 'https://next-blog-blue-one.vercel.app/og-image.jpg',
  },
}

export default function Home() {
  return <LandingPage />
}
