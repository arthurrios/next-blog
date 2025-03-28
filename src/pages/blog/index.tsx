export default function BlogPage() {
  return (
    <div className="flex h-full flex-col pt-25 md:px-0 md:pt-44">
      <div className="main-container">
        <header className="flex w-full flex-col items-start md:flex-row md:justify-between">
          <div className="flex w-full flex-col gap-3">
            <span className="body-tag w-fit rounded-sm bg-cyan-300 px-3 py-1.5 text-center text-cyan-100 uppercase md:text-left">
              Blog
            </span>
            <h1 className="heading-lg max-w-2xl text-start text-balance text-gray-100 md:text-left md:text-heading-xl">
              Tips and strategies to boost your business
            </h1>
          </div>
          <div className="w-full"></div>
        </header>
      </div>
    </div>
  )
}
