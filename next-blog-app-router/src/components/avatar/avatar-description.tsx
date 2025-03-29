type AvatarDescriptionProps = {
  children: React.ReactNode
}

export const AvatarDescription = ({ children }: AvatarDescriptionProps) => {
  return <div className="body-xs text-gray-300">{children}</div>
}
