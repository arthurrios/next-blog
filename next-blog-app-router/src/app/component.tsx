'use client'

import { useEffect } from 'react'

export function ErrorComponent() {
  useEffect(() => {
    throw new Error('Component throwing error')
  }, [])
  return <h2 className="mt-20">ErrorComponent</h2>
}
