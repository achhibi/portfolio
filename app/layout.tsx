import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/app/providers'

export const metadata: Metadata = {
  title: 'Amor Chhibi - Senior Java/Spring Developer | Technical Leader',
  description: 'Expert technical leader in Java, Spring Boot, Cloud Architecture, Microservices, and AI. Specialized in enterprise solutions with 13+ years of experience. Based in Île-de-France.',
  keywords: 'Java, Spring Boot, Cloud, AWS, GCP, Microservices, Technical Leader, AI, LLMs, Claude AI, Backend Development, Enterprise Architecture',
  authors: [{ name: 'Amor Chhibi', url: 'https://github.com/achhibi' }],
  creator: 'Amor Chhibi',
  metadataBase: new URL('https://portfolio-achhibi.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://portfolio-achhibi.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-achhibi.vercel.app',
    siteName: 'Amor Chhibi Portfolio',
    title: 'Amor Chhibi - Senior Java/Spring Developer & Technical Leader',
    description: 'Expert in Java, Spring Boot, Cloud Architecture, Microservices, and AI with 13+ years of experience',
    images: [
      {
        url: 'https://portfolio-achhibi.vercel.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Amor Chhibi - Senior Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amor Chhibi - Senior Java Developer',
    description: 'Expert Technical Leader in Spring Boot, Cloud, and Microservices',
    creator: '@achhibi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://portfolio-achhibi.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F172A" />
        <StructuredData />
        {/* Dark is the default and is already on <html>, so this only has to
            strip it when the visitor explicitly chose light. Running before
            paint keeps the theme from flashing. */}
        <script dangerouslySetInnerHTML={{__html: `
          try {
            if (localStorage.getItem('theme') === 'light') {
              document.documentElement.classList.remove('dark');
            }
          } catch (e) {}
        `}} />
      </head>
      <body className="bg-primary text-gray-100">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
