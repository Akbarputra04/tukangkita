import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tukang Kita - Layanan tukang bangunan jogja',
  description: 'layanan jasa renovasi dan bangun rumah dari mendesain, merencanakan, merenovasi dan membangun dengan teliti, hati-hati, sepenuh hati, dan bermutu tinggi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <CTA/>
      <Footer/>
      </body>
    </html>
  )
}
