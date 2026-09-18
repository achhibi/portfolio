import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Amor Chhibi - Senior Java/Spring Developer',
  description: 'Expert technical leader in Java, Spring Boot, Cloud Architecture, and Microservices. Specialized in enterprise solutions with 13+ years of experience.',
  keywords: 'Java, Spring Boot, Cloud, AWS, GCP, Microservices, Technical Leader',
  authors: [{ name: 'Amor Chhibi' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://amorchhibi.dev',
    title: 'Amor Chhibi - Senior Java/Spring Developer',
    description: 'Expert technical leader in Java, Spring Boot, Cloud Architecture, and Microservices',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary text-gray-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
