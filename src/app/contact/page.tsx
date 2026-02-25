import type { Metadata } from 'next';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact | Nick Kulavic',
  description: 'Get in touch with Nick Kulavic for Senior AI Integration Engineer, Platform Engineer, or Staff Full-Stack Engineer opportunities. Available for remote or Denver-based roles.',
  openGraph: {
    title: 'Contact | Nick Kulavic',
    description: 'Get in touch for Senior AI Integration Engineer, Platform Engineer, or Staff Full-Stack Engineer opportunities.',
    url: 'https://nickkulavic.ai/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display font-bold text-gradient mb-6">
            Get In Touch
          </h1>
          <p className="text-h4 text-muted-foreground mb-12 leading-relaxed">
            Open to Senior AI Integration Engineer, Platform Engineer, and Staff Full-Stack Engineer opportunities.
            Let&apos;s discuss how I can help your team build exceptional products.
          </p>
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
