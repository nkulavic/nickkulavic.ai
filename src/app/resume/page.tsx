import type { Metadata } from 'next';
import ResumeContent from '@/app/components/ResumeContent';
import ResumeJsonLd from '@/app/components/ResumeJsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Resume — Nick Kulavic | AI & Platform Engineer' },
  description: 'Full resume for Nick Kulavic. AWS serverless architect, AI integration engineer, SaaS founder. 14+ years experience, SOC 2 compliant enterprise systems.',
  openGraph: {
    title: 'Resume — Nick Kulavic | AI & Platform Engineer',
    description: 'Full resume for Nick Kulavic. AWS serverless architect, AI integration engineer, SaaS founder. 14+ years experience.',
    url: 'https://nickkulavic.ai/resume',
  },
  twitter: {
    title: 'Resume — Nick Kulavic | AI & Platform Engineer',
    description: 'Full resume for Nick Kulavic. AWS serverless architect, AI integration engineer, SaaS founder. 14+ years experience.',
  },
  alternates: {
    canonical: 'https://nickkulavic.ai/resume',
  },
};

export default function ResumePage() {
  return (
    <>
      <ResumeJsonLd />
      <ResumeContent />
    </>
  );
}
