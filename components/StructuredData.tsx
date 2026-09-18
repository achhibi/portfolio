export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://portfolio-achhibi.vercel.app/#person',
    name: 'Amor Chhibi',
    jobTitle: [
      'Senior Java Developer',
      'Keycloak Expert',
      'IAM Specialist',
      'Cloud Architect'
    ],
    url: 'https://portfolio-achhibi.vercel.app/',
    sameAs: [
      'https://github.com/achhibi',
      'https://www.linkedin.com/in/chhibiamor/',
      'https://stackoverflow.com/users/2867361/chhibi-amor',
    ],
    description:
      'Senior Java Developer specializing in IAM, Keycloak, Spring Boot, Cloud Architecture, Microservices, and AI. 13+ years of experience with expertise in enterprise software modernization.',
    worksFor: {
      '@type': 'Organization',
      name: 'Groupe AGRICA',
      url: 'https://www.agrica.fr/',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    knowsAbout: [
      'Java SE',
      'Spring Boot',
      'Spring Security',
      'Microservices',
      'Cloud Architecture',
      'AWS',
      'Google Cloud Platform',
      'Docker',
      'Kubernetes',
      'Keycloak',
      'OAuth2',
      'OpenID Connect',
      'AI',
      'LLMs',
      'Claude AI',
      'Software Architecture',
      'Enterprise Solutions',
      'IAM',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'École Nationale des Sciences de l\'Informatique (ENSI)',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'SAFe 6 Practitioner',
        credentialCategory: 'Certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Google Cloud Digital Leader',
        credentialCategory: 'Certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Pivotal Certified Professional Core Spring 5 Developer',
        credentialCategory: 'Certification',
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://portfolio-achhibi.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://portfolio-achhibi.vercel.app/#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Skills',
        item: 'https://portfolio-achhibi.vercel.app/#skills',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Experience',
        item: 'https://portfolio-achhibi.vercel.app/#experience',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Projects',
        item: 'https://portfolio-achhibi.vercel.app/#projects',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
