import { Search } from '@/components/search'
import { useRouter } from 'next/router'
import { PostCard } from './components/post-card'
import { PostCardGrid } from './components/post-grid-card'
import { allPosts } from 'contentlayer/generated'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Search results for "${query}"`
    : 'Tips and strategies to boost your business'

  const posts = allPosts

  return (
    <div className="flex h-full flex-col pt-25 pb-20 md:px-0 md:pt-44 md:pb-34">
      <div className="main-container flex w-full flex-col gap-6 md:gap-14">
        <div className="flex w-full flex-col items-start md:flex-row md:justify-between">
          <header className="flex w-full flex-col gap-3">
            <span className="body-tag w-fit rounded-sm bg-cyan-300 px-3 py-1.5 text-center text-cyan-100 uppercase md:text-left">
              Blog
            </span>
            <h1 className="heading-lg max-w-2xl text-start text-balance text-gray-100 md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </header>
          <div className="mt-6 w-full md:mt-auto md:flex md:items-end md:justify-end">
            <Search />
          </div>
        </div>
        <PostCardGrid>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              slug={post.slug}
              image={post.image}
              date={new Date(post.date).toLocaleDateString('en-US')}
              author={{ avatar: post.author?.avatar, name: post.author?.name }}
            />
          ))}
        </PostCardGrid>
      </div>
    </div>
  )
}
