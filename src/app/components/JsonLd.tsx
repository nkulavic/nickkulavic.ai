export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nick Kulavic",
    jobTitle: "AI Engineer & Full-Stack Developer",
    description: "AI & Full-Stack Developer with 14+ years building scalable SaaS solutions. Expert in AWS, React, TypeScript, and AI integration.",
    url: "https://nickkulavic.ai",
    sameAs: [
      "https://linkedin.com/in/nickkulavic",
      "https://github.com/nkulavic"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver",
      addressRegion: "CO",
      addressCountry: "US"
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AWS",
      "React",
      "TypeScript",
      "Node.js",
      "Serverless Architecture",
      "Full-Stack Development",
      "SaaS Development",
      "API Integration"
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "AWS Certified Solutions Architect"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "AWS Certified Developer"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nick Kulavic Portfolio",
    url: "https://nickkulavic.ai",
    description: "Professional portfolio of Nick Kulavic, AI Engineer & Full-Stack Developer",
    author: {
      "@type": "Person",
      name: "Nick Kulavic"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nick Kulavic - Software Development",
    description: "AI Engineering, Full-Stack Development, and SaaS Solutions",
    areaServed: {
      "@type": "Place",
      name: "United States"
    },
    serviceType: [
      "AI Engineering",
      "Full-Stack Development",
      "SaaS Development",
      "AWS Cloud Solutions",
      "API Integration"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
