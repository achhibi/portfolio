import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-achhibi.vercel.app',
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://portfolio-achhibi.vercel.app/privacy',
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
