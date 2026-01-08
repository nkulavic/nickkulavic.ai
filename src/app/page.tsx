'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from './data/experience';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Hero - Dark Section */}
      <section className="pt-32 pb-20 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display font-bold text-cream mb-6">
              Nick Kulavic
            </h1>
            <p className="text-h3 text-gray-400 mb-8">
              AI Engineer & Full-Stack Developer
            </p>
            <p className="text-body-lg text-gray-500 max-w-2xl leading-relaxed">
              Building enterprise AI applications and scaling SaaS solutions.
              14+ years experience, $1.2M+ revenue, zero security breaches.
            </p>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <div className="text-h2 font-bold text-accent">$1.2M+</div>
                <div className="text-body-sm text-gray-500">Revenue Generated</div>
              </div>
              <div>
                <div className="text-h2 font-bold text-accent">500+</div>
                <div className="text-body-sm text-gray-500">Enterprise Users</div>
              </div>
              <div>
                <div className="text-h2 font-bold text-accent">30+</div>
                <div className="text-body-sm text-gray-500">Integrations</div>
              </div>
              <div>
                <div className="text-h2 font-bold text-accent">14+</div>
                <div className="text-body-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About - Light Section */}
      <section className="py-20 px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-h2 font-bold text-gray-900 mb-6">About</h2>
            <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m an AI & Full-Stack Developer who builds enterprise-grade applications and profitable SaaS ventures.
              With deep expertise in AWS, serverless architecture, and AI integration, I&apos;ve founded multiple companies
              that have generated over $1.2M in revenue while serving thousands of users globally.
            </p>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              Currently at Take3Tech, I&apos;m building AI-powered mortgage solutions serving 500+ loan officers with
              SOC 2 compliance. I specialize in turning complex technical challenges into scalable, secure solutions
              that deliver real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience - Dark Section */}
      <section className="py-20 px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-h2 font-bold text-cream mb-4">Experience</h2>
            <p className="text-body-lg text-gray-500">
              14+ years building scalable solutions across AI, SaaS, and enterprise applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-body-lg font-semibold text-cream mb-1">{exp.role}</h3>
                    <p className="text-body text-gray-400">{exp.company}</p>
                  </div>
                  {exp.endDate === 'Present' && (
                    <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-caption rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-body-sm text-gray-500 mb-4">
                  {exp.startDate} – {exp.endDate} • {exp.location}
                </p>
                <p className="text-body-sm text-gray-300 mb-4">{exp.description}</p>

                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-caption rounded-lg"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Light Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-h2 font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-body-lg text-gray-700">
              Real-world applications showcasing AI integration and scalable architecture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => p.featured).slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-cream border border-gray-200 rounded-2xl p-6 hover:border-accent/50 transition-all group"
              >
                <h4 className="text-h4 font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-body-sm text-gray-600 mb-3">{project.subtitle}</p>
                <p className="text-body-sm text-gray-700 mb-4">{project.description}</p>

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="text-body-lg font-bold text-accent">{metric.value}</div>
                        <div className="text-caption text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-body-sm font-medium"
                  >
                    View Live
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Dark Section */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-h2 font-bold text-cream mb-4">Technical Expertise</h2>
            <p className="text-body-lg text-gray-500">
              Comprehensive skill set spanning AI, cloud infrastructure, and full-stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.slice(0, 4).map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-body font-semibold text-gray-400 mb-3 flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  {category.name}
                </h4>
                <div className="space-y-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <div key={skill.name} className="text-body-sm text-gray-500">
                      {skill.name}
                      {skill.yearsExperience && skill.yearsExperience >= 5 && (
                        <span className="text-accent ml-1">({skill.yearsExperience}y)</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Light Section */}
      <section className="py-20 px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-bold text-gray-900 mb-6">Ready to Connect?</h2>
            <p className="text-body-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Looking for an experienced AI Engineer or Full-Stack Developer who can deliver results?
              Let&apos;s talk about how I can help your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-cream hover:bg-gray-900 transition-colors rounded-lg text-body font-medium"
              >
                View Resume
              </a>
              <a
                href="mailto:contact@nickkulavic.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white hover:bg-accent-light transition-colors rounded-lg text-body font-medium"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
