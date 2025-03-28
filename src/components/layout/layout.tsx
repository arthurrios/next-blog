import { inter, sansCaption } from '@/styles/fonts'
import { Header } from './header'
import { Footer } from './footer'
import { CallToAction } from '@/templates/landing-page/sections'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.variable} ${sansCaption.variable} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="flex flex-1 flex-col pt-25 md:pt-40 lg:pt-40">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}
