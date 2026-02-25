'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/5">
      {/* Stats & CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 pb-12 border-b border-primary-foreground/10">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-h3 font-bold text-primary-foreground mb-4">
              Let&apos;s Build Something <span className="text-accent">Great</span>
            </h3>
            <p className="text-body text-primary-foreground/60 mb-6 leading-loose">
              Looking for an AI Engineer or Full-Stack Developer who delivers results?
              I&apos;m available for full-time opportunities.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:brightness-110 transition-all amber-glow"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>

          {/* Right - Key Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '14+', label: 'Years Experience' },
              { value: '$1.7M+', label: 'Revenue Generated' },
              { value: '500+', label: 'Enterprise Users' },
              { value: '0', label: 'Security Breaches' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-5 text-center"
              >
                <div className="text-2xl font-display font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-caption text-primary-foreground/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation & Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-display font-bold text-primary-foreground mb-3">Nick Kulavic</h4>
            <p className="text-body-sm text-primary-foreground/50 mb-2">AI Developer &amp; SaaS Entrepreneur</p>
            <p className="text-body-sm text-primary-foreground/40 leading-loose">
              Building enterprise AI applications and scaling SaaS solutions with 14+ years of proven results.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-body font-semibold text-primary-foreground/70 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Resume', href: '/resume' },
                { name: 'Projects', href: '/#projects' },
                { name: 'Contact', href: `mailto:${siteConfig.email}` }
              ].map((item) => (
                item.href.startsWith('mailto:') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary-foreground/50 hover:text-accent transition-colors text-body-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-primary-foreground/50 hover:text-accent transition-colors text-body-sm"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-body font-semibold text-primary-foreground/70 mb-4">Get Started</h4>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-foreground/20 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all text-body-sm font-medium"
              >
                View Full Resume
              </Link>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:brightness-110 transition-all text-body-sm font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/30 text-body-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nick Kulavic. Built in Colorado.
          </p>
          <div className="flex space-x-6">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/30 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/30 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
