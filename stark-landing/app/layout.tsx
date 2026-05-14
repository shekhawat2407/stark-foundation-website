import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'STARK Foundation — Skill Development & Education in Bikaner',
  description:
    'S.T.A.R.K. Foundation (Stratifying And Advancing Rural Knowledge) is a Bikaner-based Section-8 non-profit working in skill development, education and disaster relief.',
  icons: {
    icon: '/images/ebeb61_602706572e3e4b1f9343ca4d617325fb_mv2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
