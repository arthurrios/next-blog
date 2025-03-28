import Image from 'next/image'
import Link from 'next/link'

type Author = {
  name: string
  avatar: string
}

type PostCardProps = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  author: Author
}

export function PostCard({
  slug,
  title,
  description,
  date,
  image,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="relative overflow-hidden p-2">
        {/* Date Container */}
        <div className="absolute top-0 right-0 rounded-bl-[10px] bg-gray-600 pt-2.5 pr-[14px] pb-1.5 pl-2.5 backdrop-blur-sm">
          <span className="body-xs text-gray-300">{date}</span>
        </div>
        <Image
          src={image}
          alt={title}
          width={288}
          height={144}
          className="h-36 w-full rounded-md object-cover object-center"
        />

        {/* Post Info */}
        <div className="px-2 pt-4">
          <h2 className="heading-xs mb-2 line-clamp-3 text-gray-100">
            {title}
          </h2>

          <p className="body-xs text-gray-300">{description}</p>

          <div className="mt-3 flex items-center gap-2 border-t border-gray-400 pt-3 pb-2">
            <div className="relative size-5 overflow-hidden rounded-full border border-blue-200">
              <Image
                src={author?.avatar}
                alt={author?.name}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <span className="body-sm text-gray-300">{author?.name}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
