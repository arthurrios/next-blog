import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight, Store } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat" />
      <div className="relative z-0 py-14 md:pt-22 md:pb-18">
        <div className="main-container flex flex-col items-center">
          <div className="absolute -top-7 flex size-14 items-center justify-center rounded-full bg-cyan-300 md:-top-8 md:size-16">
            <Store className="text-cyan-100" />
          </div>
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <h2 className="heading-md text-center text-balance text-gray-200 md:text-heading-xl">
              Create an online store for free and start your sales today
            </h2>
            <Button variant="primary" asChild>
              <Link href="/create-store">
                <span className="action-md">Create store for free</span>
                <ArrowRight className="size-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
