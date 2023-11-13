import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import Header from 'components/Header'
import Footer from 'components/Footer'

// const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
