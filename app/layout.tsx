import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

// ---- HEADING FONT ----
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-heading-next', // CSS variable exposed to Tailwind
  display: 'swap',
})

// ---- BODY FONT ----
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body-next',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SSL Bellagio — Luxury 1 & 2 BHK Homes in Dombivli East | Smart Living',
  description: 'SSL Bellagio offers premium 1 & 2 BHK residences starting at 429 sq.ft. in Sonar Pada, Dombivli East. Smart home automation, 25+ amenities, MahaRERA registered. Book a site visit today.',
  keywords: [
    'SSL Bellagio Dombivli', '1 BHK Dombivli East', '2 BHK Dombivli East',
    'luxury flats Dombivli', 'Sonar Pada apartments', 'smart home Dombivli',
    'SSL Life Spaces', 'MahaRERA PM1330002600001', 'new launch Dombivli 2024',
    'Kalyan Shil Road property', 'buy flat Dombivli',
  ],
  authors: [{ name: 'SSL Life Spaces' }],
  creator: 'SSL Life Spaces',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sslbellagio.com',
    siteName: 'SSL Bellagio',
    title: 'SSL Bellagio — An Unequalled Lifestyle at an Unrivalled Location',
    description: 'Premium 1 & 2 BHK smart homes in Dombivli East. Starting ₹ on request. MahaRERA No: PM1330002600001.',
    images: [{ url: '/images/hero-1.jpg', width: 1200, height: 630, alt: 'SSL Bellagio Dombivli' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSL Bellagio — Smart Living, Dombivli East',
    description: 'Premium 1 & 2 BHK homes with smart automation. Enquire now.',
    images: ['/images/hero-1.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://sslbellagio.com' },
  metadataBase: new URL('https://sslbellagio.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'SSL Bellagio',
    description: 'Premium 1 & 2 BHK smart homes in Sonar Pada, Dombivli East',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kalyan Shil Road, Sonar Pada',
      addressLocality: 'Dombivli East',
      addressRegion: 'Maharashtra',
      postalCode: '421203',
      addressCountry: 'IN',
    },
    telephone: '+917208310999',
    url: 'https://sslbellagio.com',
    image: 'https://sslbellagio.com/images/hero-1.jpg',
    offers: {
      '@type': 'Offer',
      name: '1 & 2 BHK Apartments',
      description: 'Starting at 429 sq.ft.',
      areaServed: 'Dombivli, Maharashtra',
    },
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#1A1208" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
        <WhatsAppButton />
      </body>
    </html>
  )
}
