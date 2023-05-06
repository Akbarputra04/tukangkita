import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: 'Tukangkita',
  authors: [{name: 'Akbar putra', url: 'https://akbarputra04.github.com'}],
  category: 'construction & building services',
  themeColor: '#f97316',
  colorScheme: 'normal',
  creator: 'creathings.id',
  generator: 'Next.js',
  verification: {
    google: 'TiDBZbnmJcgFTP05qSBg5bcBCEHmbR3t6cgBMG_ve_I',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  keywords: ['tukangkita', 'tukang', 'jasa', 'konstruksi', 'renovasi', 'rumah', 'jogja', ],
  publisher: 'Netlify',
  openGraph: {
    title: {
      default: 'Tukangkita - Layanan tukang bangunan jogja',
      template: 'Tukangkita - %s'
    },
    description: 'layanan jasa renovasi dan bangun rumah daerah dari mendesain, merencanakan, merenovasi dan membangun dengan teliti, hati-hati, sepenuh hati, dan bermutu tinggi.',
    url: 'https://tukangkita.com',
    siteName: 'Tukangkita',
    images: [
      {
        url: 'https://tukangkita.com/images/logo.png',
        width: 388,
        height: 387,
      },
    ],
    locale: 'id',
    type: 'website',
  },
  title: {
    default: 'Tukangkita - Layanan tukang bangunan jogja',
    template: 'Tukangkita - %s'
  },
  description: 'layanan jasa renovasi dan bangun rumah daerah dari mendesain, merencanakan, merenovasi dan membangun dengan teliti, hati-hati, sepenuh hati, dan bermutu tinggi.',
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
