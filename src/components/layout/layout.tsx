import { Inter, PT_Sans_Caption } from 'next/font/google'

import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const sansCaption = PT_Sans_Caption({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
