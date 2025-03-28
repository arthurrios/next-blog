import Link from 'next/link'
import { Button } from '../../../../components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function FeatureSection() {
  return (
    <section className="main-container grid gap-6 bg-gray-700 pt-10 pb-18 md:grid-cols-2 md:pt-20 md:pb-30">
      <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12">
        <span className="body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 uppercase">
          Simple
        </span>
        <h2 className="heading-sm md:text-heading-lg">
          Create a online product catalog in a few minutes
        </h2>
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12">
        <span className="body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 uppercase">
          Practical
        </span>
        <h2 className="heading-sm md:text-heading-lg">
          Sell to your public in one platform only
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 rounded-xl bg-gray-500 p-6 md:col-span-2 md:h-[423px] md:grid-cols-2 md:gap-4 md:p-12">
        <div className="flex flex-col gap-4">
          <span className="body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 uppercase">
            Custom
          </span>
          <h2 className="heading-sm md:text-heading-lg">
            Have a custom online store with your own brand
          </h2>

          <Button
            className="mt-4 hidden w-fit self-center rounded-full md:mt-auto md:flex md:self-start"
            asChild
          >
            <Link href="/create-store">
              <span className="action-md">Create store for free</span>
              <ArrowRight className="size-6" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center self-end">
          <Image
            src="/feature-section.svg"
            alt="Features"
            width={440}
            height={330}
            className="-mb-8 w-full max-w-[440px] object-cover sm:h-[320px] md:-mb-10 md:h-[327px]"
          />
        </div>
        <Button
          className="w-full self-center rounded-full md:hidden md:self-start"
          asChild
        >
          <Link href="/create-store">
            <span className="action-md">Create store for free</span>
            <ArrowRight className="size-6" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
