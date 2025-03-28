import { Search } from '@/components/search'
import { useRouter } from 'next/router'
import { PostCard } from './components/post-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Search results for "${query}"`
    : 'Tips and strategies to boost your business'

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
        <PostCard
          title="Transformando seu negócio em uma loja virtual"
          description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
          slug="/transforming-your-business-into-an-online-store"
          image="/assets/first-post.png"
          date="12/20/2024"
          author={{ avatar: '/customer-01.png', name: 'Aspen Dokidis' }}
        />
      </div>
    </div>
  )
}
