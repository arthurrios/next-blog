'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

type ErrorBoundaryProps = {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex min-h-100 items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="relative mb-6 inline-block">
          <AlertTriangle className="size-16" />

          <div className="absolute top-1/2 left-1/2 h-1 w-16 -translate-1/2 -rotate-12 transform bg-red-500 opacity-80" />
        </div>

        <h2 className="heading-xl mb-2 font-sans text-white">
          Something went wrong!
        </h2>
        {error.message && (
          <p className="body-md mb-2 max-h-24 overflow-hidden px-4 text-ellipsis text-gray-200">
            {error.message}
          </p>
        )}

        <Button variant="primary" onClick={reset} className="mt-4">
          Try again
        </Button>
      </div>
    </div>
  )
}
