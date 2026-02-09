export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nick Kulavic",
    jobTitle: "Senior AI & Platform Engineer",
    description: "Senior AI & Platform Engineer with 14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated.",
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
      "AWS",
      "AI Engineering",
      "Serverless Architecture",
      "SaaS",
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
    description: "Professional portfolio of Nick Kulavic, Senior AI & Platform Engineer",
    author: {
      "@type": "Person",
      name: "Nick Kulavic"
    }
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
    </>
  );
}
