import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" title="Home page">
      <Image src="/logo.svg" alt="Site logo" width={116} height={32} />
    </Link>
  )
}
