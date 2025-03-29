import { Avatar } from '@/components/avatar'

export function CustomerStorySection() {
  const customerStories = [
    {
      content:
        'Creating my store with site.set was the best decision for my business. The platform is super intuitive, and I was able to put my products up for sale in just a few minutes.',
      author: {
        name: 'Annette Bones',
        role: 'CEO at Anne Corp',
        avatar: '/customer-01.png',
      },
    },
    {
      content:
        'Turning my idea into an online store was quick and easy. I loved the customization options and the ease of managing orders. I can already see my products reaching more people!',
      author: {
        name: 'Jacob Jones',
        role: 'CEO at JJ Org',
        avatar: '/customer-02.png',
      },
    },
  ]

  return (
    <section className="main-container py-20 md:pt-32 md:pb-42">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        <h2 className="heading-md text-gray-100 md:text-heading-xl">
          Who uses it, approves it!
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {customerStories.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-8 rounded-xl border border-gray-400 bg-gray-600 p-6 md:gap-10 md:p-10"
            >
              <p className="body-md text-balance text-gray-200 italic">
                {customerStory.content}
              </p>

              <div className="flex items-center gap-3">
                <Avatar.Container>
                  <Avatar.Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                  />
                  <Avatar.Content>
                    <Avatar.Title>{customerStory.author.name}</Avatar.Title>
                    <Avatar.Description>
                      {customerStory.author.role}
                    </Avatar.Description>
                  </Avatar.Content>
                </Avatar.Container>
                {/* <div className="relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="action-sm text-gray-200">
                    {customerStory.author.name}
                  </strong>
                  <span className="body-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
