import { ArrowRight, Clock, Store } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative">
      <div className="main-container z-10 flex flex-col pt-24 md:flex-row md:pt-40 md:pb-20 lg:flex-row lg:pt-40">
        <div className="flex max-w-[640px] flex-col items-center justify-center gap-10 md:items-start md:gap-14 lg:items-start lg:gap-14">
          <div className="flex flex-col items-center justify-center gap-6 md:items-start md:gap-8 lg:items-start lg:gap-8">
            <h1 className="heading-lg text-center text-gray-100 md:text-start md:text-heading-hg lg:text-start lg:text-heading-hg">
              Sell your products as an affiliate in one place only
            </h1>

            <div className="flex flex-col items-start justify-center gap-2 md:items-start md:gap-3 lg:items-start lg:gap-3">
              <div className="flex items-center gap-2 md:gap-3 lg:gap-3">
                <Clock className="size-4 text-cyan-100" />
                <span className="body-sm text-gray-200 md:text-body-md lg:text-body-md">
                  Create your site in less than 5 minutes
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 lg:gap-3">
                <Store className="size-4 text-cyan-100" />
                <span className="body-sm text-gray-200 md:text-body-md lg:text-body-md">
                  Track and optimize your business online
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-white md:items-start lg:items-start">
            <Button className="w-fit rounded-full" asChild>
              <Link href="/create-store">
                <span className="action-md">Create store for free</span>
                <ArrowRight className="size-6" />
              </Link>
            </Button>

            <p className="body-xs text-gray-300">No need for credit card</p>
          </div>
        </div>
      </div>
      <div className="absolute top-16 hidden md:right-0 md:flex 2xl:right-80">
        <Image
          src="/hero-section.svg"
          alt="Icons illustrations of store, tag and bag"
          width={400}
          height={491}
          className="h-[491px] w-[400px] object-cover"
        />
      </div>
    </section>
  )
}
