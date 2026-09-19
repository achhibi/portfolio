import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Amor Chhibi - Senior Java/Spring Developer | Technical Leader',
  description: 'Expert technical leader in Java, Spring Boot, Cloud Architecture, Microservices, and AI. Specialized in enterprise solutions with 13+ years of experience. Based in Île-de-France.',
  keywords: 'Java, Spring Boot, Cloud, AWS, GCP, Microservices, Technical Leader, AI, LLMs, Claude AI, Backend Development, Enterprise Architecture',
  authors: [{ name: 'Amor Chhibi', url: 'https://github.com/achhibi' }],
  creator: 'Amor Chhibi',
  metadataBase: new URL('https://amorchhibi.dev'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://amorchhibi.dev',
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
    url: 'https://amorchhibi.dev',
    siteName: 'Amor Chhibi Portfolio',
    title: 'Amor Chhibi - Senior Java/Spring Developer & Technical Leader',
    description: 'Expert in Java, Spring Boot, Cloud Architecture, Microservices, and AI with 13+ years of experience',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amor Chhibi - Senior Developer',
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
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://amorchhibi.dev" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F172A" />
        <StructuredData />
        <script dangerouslySetInnerHTML={{__html: `
          try {
            const theme = localStorage.getItem('theme') || 'dark';
            if (theme === 'light') document.documentElement.classList.add('light');
          } catch (e) {}
        `}} />
      </head>
      <body className="bg-primary text-gray-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
