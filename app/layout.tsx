import type { Metadata, Viewport } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: 'KL16GARAGE & INFINITY DETAILING STUDIO | Premium Car & Bike Detailing',
  description: 'Premium car and motorcycle detailing services in Kuala Lumpur. Expert ceramic coating, PPF installation, paint correction, interior detailing, and more. Where shine meets precision.',
  keywords: ['car detailing', 'bike detailing', 'ceramic coating', 'PPF', 'paint correction', 'KL16GARAGE', 'Kuala Lumpur', 'Malaysia'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'KL16GARAGE & INFINITY DETAILING STUDIO',
    description: 'Premium car and motorcycle detailing services. Ceramic coating, PPF, paint correction & more.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#D50000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable} bg-[#050505]`}>
      <body className="font-sans antialiased bg-[#050505]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
