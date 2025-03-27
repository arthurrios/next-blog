import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react'
import Image from 'next/image'

export function SupportSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-500 to-gray-700 py-12 md:py-30">
      <Image
        src="/background-support.svg"
        alt="Background with line graphics"
        width={500}
        height={500}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="main-container relative z-10 flex flex-col items-center gap-12">
        <h2 className="heading-md md:text-heading-xl">
          Your affiliates store, simple, the way it should be
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-xl bg-blue-400 p-6 text-left">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-300">
              <PaintbrushVertical className="size-6 text-white" />
            </div>
            <strong className="heading-sm text-gray-100">
              Make your custom site
            </strong>
            <p className="body-sm text-gray-200">
              Add your logo, favicon, colors to your catalog e have everything
              with your touch.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-cyan-300 p-6 text-left">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-cyan-200">
              <Store className="size-6 text-white" />
            </div>
            <strong className="heading-sm text-gray-100">
              Sell from any store
            </strong>
            <p className="body-sm text-gray-200">
              No matter the store, Site.Set allows you to insert any affiliate
              link.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-blue-400 p-6 text-left">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-300">
              <HeartHandshake className="size-6 text-white" />
            </div>
            <strong className="heading-sm text-gray-100">
              Friendly support
            </strong>
            <p className="body-sm text-gray-200">
              Our team will always be ready to assist you with whatever you
              need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
