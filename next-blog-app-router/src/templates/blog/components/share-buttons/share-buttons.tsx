import { Button } from '@/components/ui/button'
import { ShareButtonProps } from '@/hooks'

type ShareButtonsProps = {
  shareButtons: ShareButtonProps[]
}

export function ShareButtons({ shareButtons }: ShareButtonsProps) {
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
