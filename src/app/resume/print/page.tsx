import type { Metadata } from 'next';
import PrintResumeContent from '@/app/components/PrintResumeContent';

export const metadata: Metadata = {
  title: { absolute: 'Nick Kulavic Resume — Printable Version' },
  description: 'Printable resume for Nick Kulavic, Senior AI & Platform Engineer.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://nickkulavic.ai/resume',
  },
};

export default function PrintResumePage() {
  return <PrintResumeContent />;
}
