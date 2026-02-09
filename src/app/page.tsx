import type { Metadata } from 'next';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  title: { absolute: 'Nick Kulavic | Senior AI & Platform Engineer — Denver, CO' },
  description: '14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated. Currently seeking senior remote engineering roles.',
  openGraph: {
    title: 'Nick Kulavic | Senior AI & Platform Engineer — Denver, CO',
    description: '14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated.',
    url: 'https://nickkulavic.ai',
  },
  twitter: {
    title: 'Nick Kulavic | Senior AI & Platform Engineer — Denver, CO',
    description: '14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated.',
  },
  alternates: {
    canonical: 'https://nickkulavic.ai',
  },
};

export default function Home() {
  return <HomeContent />;
}
