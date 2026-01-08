'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section - Dark */}
      <div className="bg-black py-20 px-8 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.header
            className="border-b border-gray-800 pb-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-h1 font-bold text-transparent bg-gradient-to-r from-cream to-accent bg-clip-text mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Nick Kulavic
            </motion.h1>
            <motion.p
              className="text-body-lg text-transparent bg-gradient-to-r from-gray-400 to-accent bg-clip-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              AI Engineer & Full-Stack Developer
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6 text-body-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span>Denver, CO</span>
              <span className="text-gray-700">•</span>
              <motion.a
                href="mailto:contact@nickkulavic.ai"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.05, color: '#0066FF' }}
              >
                Email
              </motion.a>
              <span className="text-gray-700">•</span>
              <motion.a
                href="https://linkedin.com/in/nickkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.05, color: '#0066FF' }}
              >
                LinkedIn
              </motion.a>
              <span className="text-gray-700">•</span>
              <motion.a
                href="https://github.com/nkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.05, color: '#0066FF' }}
              >
                GitHub
              </motion.a>
            </motion.div>
          </motion.header>

          {/* Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.h2
              className="text-h4 font-semibold text-transparent bg-gradient-to-r from-cream to-accent bg-clip-text mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Professional Summary
            </motion.h2>
            <p className="text-body text-gray-300 leading-loose">
              AI & Full-Stack Developer with 14+ years building enterprise applications and profitable SaaS ventures.
              Expertise in AWS, serverless architecture, and AI integration. Founded multiple companies generating $1.2M+
              in revenue. Currently developing AI-powered solutions at Take3Tech serving 500+ users with SOC 2 compliance.
              Proven track record in scaling SaaS products, API integrations, and delivering business value through technology.
            </p>
          </motion.section>
        </div>
      </div>

      {/* Key Achievements - Cream Section */}
      <div className="py-16 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <motion.h2
              className="text-h4 font-semibold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Achievements
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { value: '$1.2M+', label: 'Total Revenue', icon: '💰' },
                { value: '500+', label: 'Enterprise Users', icon: '👥' },
                { value: '2M+', label: 'Monthly API Requests', icon: '⚡' },
                { value: '30+', label: 'Integrations', icon: '🔗' },
                { value: '0', label: 'Security Breaches', icon: '🛡️' },
                { value: '14+', label: 'Years Experience', icon: '⭐' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.06, duration: 0.5, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0, 102, 255, 0.12)' }}
                  className="p-5 bg-white border border-gray-100 rounded-xl hover:border-accent/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <motion.span
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {stat.icon}
                    </motion.span>
                  </div>
                  <div className="text-h4 font-bold text-accent group-hover:text-accent-light transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-gray-600 group-hover:text-gray-700 transition-colors mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Experience - White Section */}
      <div className="py-20 px-8 bg-white">
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
                  className="group border-l-4 border-accent/30 hover:border-accent pl-6 transition-colors relative"
                >
                  {/* Logo */}
                  {exp.logo && exp.logo.imagePath && (
                    <motion.div
                      className="absolute -left-14 top-0 bg-white rounded-xl p-2 shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: expIdx * 0.1 + 0.1, type: "spring", stiffness: 150 }}
                      whileHover={{ scale: 1.15, rotate: 3 }}
                    >
                      <div className="w-10 h-10 relative">
                        <Image
                          src={exp.logo.imagePath}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between items-baseline mb-4">
                    <div>
                      <h3 className="text-body-lg font-semibold text-gray-900 group-hover:text-accent transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-body text-gray-600">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-body-sm text-gray-500 whitespace-nowrap ml-4">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <p className="text-body-sm text-gray-600 mb-4 italic leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
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
                    <div className="mt-4 flex flex-wrap gap-2">
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

                  <div className="mt-4 text-body-sm text-gray-500 leading-relaxed">
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
      <div className="py-20 px-8 bg-cream">
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
                  className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer transition-all"
                >
                  <h3 className="text-body font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <motion.span
                      className="text-xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {category.icon}
                    </motion.span>
                    {category.name}
                  </h3>
                  <div className="space-y-2">
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
      <div className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-h4 font-semibold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education & Certifications
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  title: 'AWS Certified Solutions Architect',
                  organization: 'Amazon Web Services',
                  level: 'Professional Level',
                  icon: '☁️',
                  color: '#FF9900'
                },
                {
                  title: 'Infusionsoft Certified Partner',
                  organization: 'Keap',
                  level: 'Expert Level',
                  icon: '🎓',
                  color: '#73C41D'
                }
              ].map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4, boxShadow: '0 8px 20px rgba(0, 102, 255, 0.1)' }}
                  className="bg-cream border border-gray-200 rounded-xl p-6 hover:border-accent/30 transition-all cursor-pointer group flex items-start gap-4"
                >
                  <motion.div
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-gray-900 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-body-sm text-gray-600">
                      {cert.organization} • {cert.level}
                    </p>
                  </div>
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cert.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

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
