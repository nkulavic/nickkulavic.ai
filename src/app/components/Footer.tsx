'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Stats & CTA */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-h3 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text mb-4">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-body text-gray-600 mb-6 leading-loose">
                Looking for an AI Engineer or Full-Stack Developer who delivers results?
                I&apos;m available for full-time opportunities.
              </p>
              <motion.a
                href="mailto:contact@nickkulavic.ai"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-semibold rounded-xl shadow-lg transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(0, 102, 255, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right - Key Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '14+', label: 'Years Experience', icon: '⏱️' },
                { value: '$1.2M+', label: 'Revenue Generated', icon: '💰' },
                { value: '500+', label: 'Enterprise Users', icon: '👥' },
                { value: '0', label: 'Security Breaches', icon: '🔒' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08, type: 'spring', stiffness: 150 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white border border-gray-200 rounded-xl p-5 text-center group cursor-pointer shadow-md"
                >
                  <motion.div
                    className="text-3xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-h3 font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-caption text-gray-600 group-hover:text-gray-800 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Middle Section - Navigation & Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h4 font-bold text-gray-900 mb-3">Nick Kulavic</h3>
            <p className="text-body-sm text-gray-600 mb-4">AI Developer & SaaS Entrepreneur</p>
            <p className="text-body-sm text-gray-500 leading-loose">
              Building enterprise AI applications and scaling SaaS solutions with 14+ years of proven results.
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-center"
          >
            <h4 className="text-body font-semibold text-gray-700 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '/', icon: '🏠' },
                { name: 'Resume', href: '/resume', icon: '📄' },
                { name: 'Projects', href: '/#projects', icon: '💼' },
                { name: 'Contact', href: 'mailto:contact@nickkulavic.ai', icon: '✉️' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-body-sm group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <h4 className="text-body font-semibold text-gray-700 mb-4">Get Started</h4>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <motion.a
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-accent/50 text-gray-700 hover:text-gray-900 rounded-lg transition-all text-body-sm font-medium"
                whileHover={{ scale: 1.02, x: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Resume
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nickkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all text-body-sm font-medium"
                whileHover={{ scale: 1.02, x: -2, boxShadow: '0 8px 20px rgba(10, 102, 194, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-body-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nick Kulavic. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {[
              { href: 'https://github.com/nkulavic', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { href: 'https://linkedin.com/in/nickkulavic', label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
