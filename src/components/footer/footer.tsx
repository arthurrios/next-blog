import Link from 'next/link'
import { Logo } from '../logo'

export function Footer() {
  return (
    <footer className="border-white/10 bg-gray-500">
      <div className="y-8 mx-auto max-w-7xl px-6 md:px-4">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />

          <nav className="flex flex-col items-start gap-4 text-sm text-blue-100 md:flex-row">
            <Link href="/terms-of-use" className="hover:text-blue-200">
              Terms of use
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-200">
              Privacy policy
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
