import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ideadora | Brand-as-a-Service para Marketplaces en México',
  description:
    'Ideadora construye tu marca, tus productos y tus tiendas en línea en marketplaces como Amazon, Mercado Libre y Walmart Marketplace. Todo hecho para ti.',
  generator: 'Ideadora',

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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ideadora',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}
