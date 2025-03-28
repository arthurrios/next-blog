import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const router = useRouter()

  const isCurrentPath = router.asPath === href || router.asPath === props.as

  return (
    <Link
      href={href}
      className={cn(
        'action-sm font-medium transition-colors hover:text-blue-200',
        isCurrentPath ? 'text-blue-200' : 'text-gray-100',
      )}
    >
      {children}
    </Link>
  )
}
