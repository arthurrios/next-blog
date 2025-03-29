import { Avatar } from '@/components/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Markdown } from '@/components/markdown'
import { useShare } from '@/hooks'
import { ShareButtons } from '@/templates/blog/components/share-buttons'

export function PostDetails() {
  const router = useRouter()

  const slug = router.query.slug as string
  const post = allPosts.find(
    (post) => post.slug?.toLowerCase() === slug.toLowerCase(),
  )!

  const postUrl = `https://site.set/blog/${slug}`

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.description,
  })
  const publishedDate = new Date(post.date).toLocaleDateString('en-US')

  return (
    <main className="main-container">
      <div className="flex items-center justify-between gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-300" />

            <BreadcrumbItem>
              <span className="action-sm text-blue-200">{post?.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="lg:hidden">
          <ShareButtons shareButtons={shareButtons} />
        </div>
      </div>

      <div className="grid grid-cols-1 pt-5 pb-20 md:gap-6 md:pt-8 lg:grid-cols-[1fr_300px] lg:pb-34">
        <article className="overflow-hidden rounded-xl border border-gray-400 bg-gray-600">
          <figure className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={post?.image ?? ''}
              alt={post?.title ?? ''}
              fill
              className="object-cover"
            />
          </figure>

          <div className="p-6 pt-8 md:p-16 md:pt-12">
            <header>
              <h1 className="heading-md mb-6 text-balance md:mb-8 md:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar ?? ''}
                  alt={post?.author.name ?? ''}
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Published at{' '}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none pt-8 md:pt-12">
              <Markdown content={post.body.raw} />
            </div>
          </div>
        </article>

        <aside className="space-y-5">
          <div className="rounded-xl bg-gray-700">
            <h2 className="heading-xs hidden text-gray-100 md:mb-5 md:flex">
              Share
            </h2>

            <ShareButtons shareButtons={shareButtons} />
          </div>
        </aside>
      </div>
    </main>
  )
}
