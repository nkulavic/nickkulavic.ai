'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';
import { projects } from '@/app/data/projects';
import { certifications, education, careerStats, summaryHighlights } from '@/app/data/education';

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
            className="pb-10 mb-10 border-b border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <motion.h1
                  className="text-h1 font-bold text-transparent bg-gradient-to-r from-cream to-accent bg-clip-text mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  Nick Kulavic
                </motion.h1>
                <motion.p
                  className="text-h4 text-transparent bg-gradient-to-r from-gray-400 to-accent bg-clip-text mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  AI Engineer & Full-Stack Developer
                </motion.p>
              </div>

              <motion.a
                href="/resume/print"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white hover:bg-accent-light rounded-xl font-bold text-body-sm shadow-lg whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 24px rgba(0, 102, 255, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </motion.a>
            </div>

            {/* Contact Info - Prominent */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-3 text-body-sm text-gray-400 bg-gray-900/50 rounded-lg p-4 border border-gray-800/50"
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 102, 255, 0.5)' }}
              >
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Denver, CO</span>
              </motion.div>

              <motion.a
                href="mailto:contact@nickkulavic.ai"
                className="flex items-center gap-3 text-body-sm text-gray-400 bg-gray-900/50 rounded-lg p-4 border border-gray-800/50 hover:text-accent hover:border-accent/50 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@nickkulavic.ai</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/nickkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-sm text-gray-400 bg-gray-900/50 rounded-lg p-4 border border-gray-800/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>

            {/* Currently Seeking */}
            <motion.div
              className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 text-green-400 font-semibold text-body-sm">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                Available for AI Engineer, Full-Stack Developer, and Technical Lead roles
              </div>
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
            <p className="text-body text-gray-300 leading-loose mb-6">
              AI & Full-Stack Developer with 14+ years building enterprise applications and profitable SaaS ventures.
              Proven track record of technical excellence combined with business results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summaryHighlights.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3 text-body-sm text-gray-300 bg-gray-900/50 rounded-lg p-3 border border-gray-800/50"
                >
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Core Competencies - Cream Section */}
      <div className="py-24 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2
              className="text-h4 font-semibold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Core Competencies
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: '🤖', label: 'AI/ML Engineering', items: ['AWS Bedrock', 'Claude AI', 'ChatGPT API', 'Prompt Engineering'] },
                { icon: '☁️', label: 'Cloud Architecture', items: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Serverless'] },
                { icon: '⚛️', label: 'Frontend Development', items: ['React (7y)', 'Next.js', 'TypeScript (6y)', 'Tailwind'] },
                { icon: '⚙️', label: 'Backend Development', items: ['Node.js (10y)', 'REST APIs', 'Express.js', 'WebSockets'] },
                { icon: '🔐', label: 'Security & Compliance', items: ['SOC 2', 'OAuth', 'JWT', 'Zero Breaches'] },
                { icon: '💼', label: 'Business & Leadership', items: ['SaaS Founder', '$1.2M+ Revenue', 'Product Dev', 'API Strategy'] }
              ].map((competency, idx) => (
                <motion.div
                  key={competency.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0, 102, 255, 0.12)' }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <motion.span
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {competency.icon}
                    </motion.span>
                    <h3 className="text-body font-bold text-gray-900 group-hover:text-accent transition-colors">
                      {competency.label}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {competency.items.map((item, itemIdx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 + itemIdx * 0.03 }}
                        className="text-body-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Achievements */}
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
              Career Highlights
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {careerStats.map((stat, idx) => (
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
      <div className="py-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-h4 font-semibold text-gray-900 mb-12">Professional Experience</h2>
            <div className="space-y-12">
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

      {/* Featured Projects - Cream Section */}
      <div className="py-24 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h4 font-semibold text-gray-900 mb-12">Featured Projects</h2>
            <div className="space-y-8">
              {projects.filter(p => p.featured).map((project, projIdx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: projIdx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 102, 255, 0.1)' }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:border-accent/40 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-body-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-body-sm text-gray-600 font-medium">{project.subtitle}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      project.category === 'ai'
                        ? 'bg-accent/20 text-accent'
                        : project.category === 'saas'
                        ? 'bg-purple-500/20 text-purple-600'
                        : 'bg-green-500/20 text-green-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-body-sm text-gray-700 leading-relaxed mb-4">{project.longDescription}</p>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {project.metrics.map((metric, metricIdx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: projIdx * 0.1 + metricIdx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100"
                        >
                          <div className="text-body font-bold text-accent">{metric.value}</div>
                          <div className="text-[10px] text-gray-600 uppercase tracking-wide">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: projIdx * 0.1 + techIdx * 0.03 }}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-[11px] rounded-full border border-gray-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-body-sm font-medium"
                      whileHover={{ x: 4 }}
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Skills - White Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-h4 font-semibold text-gray-900 mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}
                  className="bg-cream border border-gray-200 rounded-xl p-6 cursor-pointer transition-all"
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
      <div className="py-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Education Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-h4 font-semibold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
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
                    {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-gray-900 group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-body-sm text-gray-600">
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="text-body-sm text-gray-500 mt-1">{edu.year}</p>
                    {edu.description && (
                      <p className="text-body-sm text-gray-500 mt-2 italic">{edu.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-h4 font-semibold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Certifications & Credentials
            </motion.h2>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
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
                    {cert.description && (
                      <p className="text-body-sm text-gray-500 mt-2 italic">{cert.description}</p>
                    )}
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
          <section className="mb-12">
            <h2 className="text-h4 font-semibold text-gray-900 mb-6">Target Roles</h2>
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

          {/* Download & Contact CTA */}
          <div id="download" className="border-t border-gray-200 pt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3
                className="text-h4 font-bold text-gray-900 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Ready to connect?
              </motion.h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="/resume/print"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-black text-cream hover:bg-gray-900 transition-all rounded-2xl text-body-lg font-bold shadow-2xl hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                  Download PDF Resume
                </motion.a>

                <motion.a
                  href="mailto:contact@nickkulavic.ai"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white hover:bg-accent-light transition-all rounded-2xl text-body-lg font-bold shadow-2xl hover:shadow-accent/50"
                  whileHover={{ scale: 1.05, y: -3, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                  Get in Touch
                </motion.a>
              </div>

              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {['Remote', 'Denver-based', 'Full-time', 'Contract'].map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-body-sm font-medium rounded-lg border border-gray-200"
                  >
                    {type}
                  </span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-body text-gray-600"
              >
                Available for immediate opportunities • Authorized to work in the United States
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
