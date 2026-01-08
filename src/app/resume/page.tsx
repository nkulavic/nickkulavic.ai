'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section - Dark */}
      <div className="bg-black py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <header className="border-b border-gray-800 pb-8 mb-8">
            <h1 className="text-h1 font-bold text-cream mb-2">Nick Kulavic</h1>
            <p className="text-body-lg text-gray-400 mb-4">
              AI Engineer & Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-6 text-body-sm text-gray-500">
              <span>Denver, CO</span>
              <span>•</span>
              <a
                href="mailto:contact@nickkulavic.ai"
                className="hover:text-accent transition-colors"
              >
                Email
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/nickkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/nkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section>
            <h2 className="text-h4 font-semibold text-cream mb-4">Professional Summary</h2>
            <p className="text-body text-gray-300 leading-relaxed">
              AI & Full-Stack Developer with 14+ years building enterprise applications and profitable SaaS ventures.
              Expertise in AWS, serverless architecture, and AI integration. Founded multiple companies generating $1.2M+
              in revenue. Currently developing AI-powered solutions at Take3Tech serving 500+ users with SOC 2 compliance.
              Proven track record in scaling SaaS products, API integrations, and delivering business value through technology.
            </p>
          </section>
        </div>
      </div>

      {/* Key Achievements - Cream Section */}
      <div className="py-12 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-h4 font-semibold text-gray-900 mb-6">Key Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { value: '$1.2M+', label: 'Total Revenue' },
                { value: '500+', label: 'Enterprise Users' },
                { value: '2M+', label: 'Monthly API Requests' },
                { value: '30+', label: 'Integrations' },
                { value: '0', label: 'Security Breaches' },
                { value: '14+', label: 'Years Experience' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                >
                  <div className="text-h3 font-bold text-accent">{stat.value}</div>
                  <div className="text-body-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Experience - White Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-h4 font-semibold text-gray-900 mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, expIdx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: expIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-l-4 border-accent/30 hover:border-accent pl-6 transition-colors"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <h3 className="text-body-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-body text-gray-600">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-body-sm text-gray-500 whitespace-nowrap ml-4">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <p className="text-body-sm text-gray-600 mb-3 italic">
                    {exp.description}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <motion.li
                        key={achievement}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: expIdx * 0.1 + achIdx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-body-sm text-gray-700 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.metrics.map((metric, metricIdx) => (
                        <motion.span
                          key={metric}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: expIdx * 0.1 + metricIdx * 0.05 }}
                          viewport={{ once: true }}
                          className="text-caption text-gray-700 px-3 py-1 bg-cream border border-gray-200 rounded hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          {metric}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 text-body-sm text-gray-500">
                    <span className="font-medium text-gray-700">Technologies:</span>{' '}
                    <span className="text-gray-600">{exp.technologies.join(', ')}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Skills - Cream Section */}
      <div className="py-16 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-h4 font-semibold text-gray-900 mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}
                  className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer transition-all"
                >
                  <h3 className="text-body font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <motion.span
                      className="text-xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {category.icon}
                    </motion.span>
                    {category.name}
                  </h3>
                  <div className="space-y-1">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-body-sm text-gray-600 hover:text-accent transition-colors"
                      >
                        {skill.name}
                        {skill.yearsExperience && (
                          <span className="text-accent ml-1 font-medium">({skill.yearsExperience}y)</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Education & Certifications - White Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-h4 font-semibold text-gray-900 mb-6">Education & Certifications</h2>
            <div className="space-y-4">
              <div className="bg-cream border border-gray-200 rounded-xl p-5">
                <h3 className="text-body font-semibold text-gray-900">AWS Certified Solutions Architect</h3>
                <p className="text-body-sm text-gray-600">Amazon Web Services • Professional Level</p>
              </div>
              <div className="bg-cream border border-gray-200 rounded-xl p-5">
                <h3 className="text-body font-semibold text-gray-900">Infusionsoft Certified Partner</h3>
                <p className="text-body-sm text-gray-600">Keap • Expert Level</p>
              </div>
            </div>
          </section>

          {/* Target Roles */}
          <section className="mb-8">
            <h2 className="text-h4 font-semibold text-gray-900 mb-4">Target Roles</h2>
            <div className="flex flex-wrap gap-3">
              {['AI Engineer', 'Full-Stack Developer', 'Technical Lead', 'SaaS Founder/CTO'].map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-body-sm font-medium rounded-lg"
                >
                  {role}
                </span>
              ))}
            </div>
          </section>

          {/* Download Button */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-cream hover:bg-gray-900 transition-colors rounded-lg text-body font-medium shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
              Download PDF Resume
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-body-sm text-gray-500 mt-4"
            >
              Available for immediate opportunities in AI Engineering and Full-Stack Development
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
