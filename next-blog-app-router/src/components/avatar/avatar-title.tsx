type AvatarTitleProps = {
  children: React.ReactNode
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className="body-sm text-gray-200">{children}</strong>
}
