import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ComponentProps } from 'react'

type AvatarSize = 'xs' | 'sm'

type AvatarImageProps = Omit<
  ComponentProps<typeof Image>,
  'height' | 'width'
> & {
  size?: AvatarSize
}

const avatarSize = {
  xs: 'size-5',
  sm: 'size-9',
}

export const AvatarImage = ({
  src,
  alt,
  size = 'sm',
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border border-blue-200',
        avatarSize[size],
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center"
        {...rest}
      />
    </div>
  )
}
