import { JSX, useCallback, useMemo } from 'react'
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from './social-providers'
import { useClipboard } from '../use-clipboard'
import { Check, Link } from 'lucide-react'

export type ShareButtonProps = {
  key: string
  name: string
  icon: JSX.Element
  action: () => Promise<boolean | undefined>
}

export type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout })

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text],
  )

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url)
        }

        const providerConfig = SOCIAL_PROVIDERS[provider]

        if (!providerConfig) {
          throw new Error(`Provider not supported: ${provider}`)
        }

        const shareUrl = providerConfig.shareUrl(shareConfig)
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600,height=600,location=yes,status=yes',
        )

        return !!shareWindow
      } catch (error) {
        console.error(error)
        return false
      }
    },
    [shareConfig, handleCopy, url],
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        key: 'clipboard',
        name: isCopied ? 'Link copied!' : 'Copy link',
        icon: isCopied ? (
          <Check className="size-4" />
        ) : (
          <Link className="size-4" />
        ),
        action: () => share('clipboard'),
      },
    ],
    [share, isCopied],
  )

  return { shareButtons }
}
