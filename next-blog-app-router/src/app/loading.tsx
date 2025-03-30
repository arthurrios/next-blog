import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center px-4">
      <div className="relative">
        <Loader2 className="size-16 animate-spin text-cyan-300" />
        <div className="absolute top-0 left-0 h-full w-full animate-[spin_3s_linear_infinite] rounded-full border-t-2 border-cyan-100"></div>
      </div>
    </div>
  )
}
