import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hungary Görkorcsolyázás — Gördülj Tovább',
  description:
    'Magyarország görkorcsolyás közössége. Ismerj meg minden görkorcsolya-sportágat, technikát, felszerelést és biztonságos görgetési környezetet.',
  keywords: [
    'görkorcsolya',
    'inline skating',
    'művészi görkorcsolya',
    'gyorskorcsolya',
    'urbán görgetés',
    'Magyarország',
  ],
  openGraph: {
    title: 'Hungary Görkorcsolyázás',
    description: 'A görkorcsolyázás szíve Magyarországon',
    type: 'website',
    locale: 'hu_HU',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0d0d14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${barlowCondensed.variable} bg-background`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
