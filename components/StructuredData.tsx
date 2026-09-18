export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amor Chhibi',
    jobTitle: 'Senior Java Developer & Technical Leader',
    url: 'https://amorchhibi.dev',
    sameAs: [
      'https://github.com/achhibi',
      'https://www.linkedin.com/in/chhibiamor/',
      'https://stackoverflow.com/users/2867361/chhibi-amor',
    ],
    image: '/avatar.jpg',
    description:
      'Expert technical leader in Java, Spring Boot, Cloud Architecture, Microservices, and AI with 13+ years of experience',
    worksFor: {
      '@type': 'Organization',
      name: 'Groupe AGRICA',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Microservices',
      'Cloud Architecture',
      'AWS',
      'Google Cloud Platform',
      'Docker',
      'Kubernetes',
      'AI',
      'LLMs',
      'Software Architecture',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
