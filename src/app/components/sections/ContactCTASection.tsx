'use client'

import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/app/data/siteConfig';

const ContactCTASection = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="bg-primary section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-5">
              Let&apos;s Build Something
              <br />
              <span className="text-accent">Exceptional</span>
            </h2>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10 font-body">
              Need an engineer who ships enterprise-grade AI solutions while driving revenue?
              I bring technical depth, business acumen, and a track record of delivering results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display font-semibold hover:brightness-110 transition-all amber-glow"
              >
                <Mail className="w-4 h-4" /> Schedule a Conversation
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-display font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                <FileText className="w-4 h-4" /> View Full Resume
              </Link>
            </div>
            <div className="flex justify-center gap-6 text-primary-foreground/40 text-sm font-body">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                LinkedIn
              </a>
              <span>&bull;</span>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                GitHub
              </a>
              <span>&bull;</span>
              <span>{siteConfig.email}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
