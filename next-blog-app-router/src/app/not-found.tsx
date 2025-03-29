import { Button } from '@/components/ui/button'
import { FileQuestion, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <FileQuestion className="mx-auto mb-6 size-1/6 text-gray-100" />
      </div>

      <div className="relative mb-3 inline-block font-sans">
        <span className="inline-block -translate-x-1 -translate-y-2 -rotate-12 transform text-8xl text-gray-100">
          4
        </span>
        <span className="inline-block text-8xl text-gray-100">0</span>
        <span className="inline-block text-8xl text-gray-100">4</span>
      </div>

      <p className="body-md font-sans text-gray-300">Page not found</p>

      <div className="mt-6 flex justify-center gap-4">
        <Button variant="primary" asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/blog?q=">
            <Search />
            Search posts
          </Link>
        </Button>
      </div>
    </div>
  )
}
