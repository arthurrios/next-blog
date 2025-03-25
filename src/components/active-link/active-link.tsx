import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const router = useRouter()
  const isCurrentPath = router.asPath === href || router.asPath === props.as || router.asPath.startsWith(String(props.as))

  return (
    <Link href={href} className={cn('text-sm font-medium transition-colors hover:text-blue-500', isCurrentPath ? 'text-blue-500' : 'text-muted-foreground')}>{children}</Link>

  )
}