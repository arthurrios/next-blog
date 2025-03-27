import { Inter, PT_Sans_Caption } from 'next/font/google'

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const sansCaption = PT_Sans_Caption({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})
