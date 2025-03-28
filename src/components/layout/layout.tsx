import { inter, sansCaption } from '@/styles/fonts'
import { Header } from './header'
import { Footer } from './footer'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.variable} ${sansCaption.variable} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
