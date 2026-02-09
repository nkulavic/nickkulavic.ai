export default function ResumeJsonLd() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Resume — Nick Kulavic | AI & Platform Engineer",
    description: "Full resume for Nick Kulavic. AWS serverless architect, AI integration engineer, SaaS founder. 14+ years experience, SOC 2 compliant enterprise systems.",
    url: "https://nickkulavic.ai/resume",
    mainEntity: {
      "@type": "Person",
      name: "Nick Kulavic",
      jobTitle: "Senior AI & Platform Engineer",
      url: "https://nickkulavic.ai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
    />
  );
}
