import { cn } from '@/lib/utils'
import { CircleX, SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'

export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? ''

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router],
  )

  const resetSearch = () => {
    router.push('/blog', { scroll: false })
  }

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, { scroll: false })
  }

  return (
    <form onSubmit={handleSearch} className="group relative">
      <SearchIcon
        className={cn(
          `absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-200`,
          query && 'text-blue-300',
        )}
      />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        title="Search"
        className="body-sm h-10 w-full rounded-lg border border-gray-400 bg-transparent pl-9 text-gray-100 transition-all duration-200 outline-none placeholder:text-body-sm focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 md:w-60"
      />

      {query && (
        <CircleX
          className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-gray-300"
          onClick={resetSearch}
        />
      )}
    </form>
  )
}
