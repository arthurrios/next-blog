'use client'

import { Button } from '@/components/ui/button'
import { useShare } from '@/hooks'

type ShareButtonsProps = {
  url: string
  title: string
  description: string
}

export function ShareButtons({ description, title, url }: ShareButtonsProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  })

  return (
    <div className="flex items-center gap-2 lg:flex-col lg:items-start">
      {shareButtons.map((provider) => (
        <Button
          key={provider.key}
          onClick={() => provider.action()}
          className="action-sm flex size-10 gap-2 rounded-lg md:py-3 lg:w-56 lg:justify-start"
          variant="outline"
          size="sm"
        >
          {provider.icon}
          <span className="hidden lg:flex">{provider.name}</span>
        </Button>
      ))}
    </div>
  )
}
