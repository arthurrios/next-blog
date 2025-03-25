import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Link href="/">
            <Image src="/logo.svg" alt="Site logo" width={116} height={32} />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms-of-use">Terms of use</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/feedback">Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
