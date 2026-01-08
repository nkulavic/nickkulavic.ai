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
      <section className="pt-32 pb-20 px-8 bg-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-display font-bold text-cream mb-6 bg-gradient-to-r from-cream via-cream to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Nick Kulavic
            </motion.h1>
            <motion.p
              className="text-h3 text-transparent bg-gradient-to-r from-gray-400 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI Engineer & Full-Stack Developer
            </motion.p>
            <motion.p
              className="text-body-lg text-gray-500 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building enterprise AI applications and scaling SaaS solutions.
              14+ years experience, $1.2M+ revenue, zero security breaches.
            </motion.p>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: '$1.2M+', label: 'Revenue Generated' },
                { value: '500+', label: 'Enterprise Users' },
                { value: '30+', label: 'Integrations' },
                { value: '14+', label: 'Years Experience' }
              ].map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.08, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="text-h2 font-bold text-accent group-hover:text-accent-light transition-colors"
                    whileHover={{ textShadow: "0 0 8px rgba(0, 102, 255, 0.5)" }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-body-sm text-gray-500 group-hover:text-gray-400 transition-colors">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently Seeking Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <motion.h3
                    className="text-body-lg font-semibold text-cream mb-2 flex items-center justify-center md:justify-start gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🎯
                    </motion.span>
                    Currently Seeking Opportunities
                  </motion.h3>
                  <p className="text-body-sm text-gray-400">
                    AI Engineer • Full-Stack Developer • Technical Lead • Remote or Denver-based
                  </p>
                </div>
                <motion.a
                  href="mailto:contact@nickkulavic.ai"
                  className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl shadow-lg whitespace-nowrap"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 102, 255, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let&apos;s Talk →
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About - Light Section */}
      <section className="py-20 px-8 bg-cream relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:w-1 before:h-1 before:bg-accent before:rounded-full"
              >
                <p className="text-body-lg text-gray-700 leading-relaxed">
                  I&apos;m an AI & Full-Stack Developer who builds enterprise-grade applications and profitable SaaS ventures.
                  With deep expertise in AWS, serverless architecture, and AI integration, I&apos;ve founded multiple companies
                  that have generated over $1.2M in revenue while serving thousands of users globally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:w-1 before:h-1 before:bg-accent before:rounded-full"
              >
                <p className="text-body-lg text-gray-700 leading-relaxed">
                  Currently at Take3Tech, I&apos;m building AI-powered mortgage solutions serving 500+ loan officers with
                  SOC 2 compliance. I specialize in turning complex technical challenges into scalable, secure solutions
                  that deliver real business value.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Bring - White Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Sets Me Apart
            </motion.h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              The rare combination that delivers both technical excellence and business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Ship Fast, Ship Right',
                description: 'From zero to production in weeks, not months. Built entire SaaS platforms single-handedly while maintaining enterprise-grade security (SOC 2, zero breaches).'
              },
              {
                icon: '💰',
                title: 'Revenue-Focused Engineering',
                description: '$1.2M+ generated across 3 ventures. I build products that customers pay for, not just impressive tech demos. Every line of code drives business value.'
              },
              {
                icon: '🤖',
                title: 'AI-First Mindset',
                description: 'Daily user of Claude Code, AWS Bedrock, and modern AI tooling. I leverage AI to 10x productivity while building AI products that solve real problems.'
              },
              {
                icon: '☁️',
                title: 'AWS Architecture Expert',
                description: '8+ years with AWS Lambda, DynamoDB, Bedrock. I design serverless systems that handle 2M+ monthly requests while keeping costs low and scaling automatically.'
              },
              {
                icon: '🔧',
                title: 'Full-Stack Versatility',
                description: 'React (7y), Node.js (10y), TypeScript (6y). Backend, frontend, infrastructure - I handle the entire stack so your team moves faster.'
              },
              {
                icon: '🎯',
                title: 'Startup to Enterprise',
                description: 'Founded companies AND worked in enterprise environments. I understand both moving fast AND building systems that scale to thousands of users with compliance requirements.'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0, 102, 255, 0.12)' }}
                className="bg-gradient-to-br from-cream to-white border border-gray-200 rounded-2xl p-6 hover:border-accent/40 transition-all group cursor-pointer"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-body-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
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
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.1)' }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-accent/50 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Logo in corner */}
                {exp.logo && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.15, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-sm border border-opacity-30"
                      style={{
                        backgroundColor: exp.logo.bgColor,
                        color: exp.logo.color,
                        borderColor: exp.logo.color
                      }}
                    >
                      {exp.logo.initials}
                    </div>
                  </motion.div>
                )}

                <div className="flex items-start justify-between mb-4 pr-16">
                  <div>
                    <h3 className="text-body-lg font-semibold text-cream mb-1">{exp.role}</h3>
                    <p className="text-body text-gray-400">{exp.company}</p>
                  </div>
                  {exp.endDate === 'Present' && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-caption rounded-full absolute top-20 right-4"
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <p className="text-body-sm text-gray-500 mb-4">
                  {exp.startDate} – {exp.endDate} • {exp.location}
                </p>
                <p className="text-body-sm text-gray-300 mb-4">{exp.description}</p>

                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.metrics.map((metric, metricIdx) => (
                      <motion.span
                        key={metric}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + metricIdx * 0.05 }}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-caption rounded-lg"
                      >
                        {metric}
                      </motion.span>
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
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}
                className="bg-cream border border-gray-200 rounded-2xl p-6 hover:border-accent/50 transition-all group cursor-pointer"
              >
                <motion.h4
                  className="text-h4 font-semibold text-gray-900 mb-2 transition-colors"
                  whileHover={{ color: '#0066FF' }}
                >
                  {project.title}
                </motion.h4>
                <p className="text-body-sm text-gray-600 mb-3">{project.subtitle}</p>
                <p className="text-body-sm text-gray-700 mb-4">{project.description}</p>

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.slice(0, 2).map((metric, metricIdx) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + metricIdx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="text-center p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-body-lg font-bold text-accent">{metric.value}</div>
                        <div className="text-caption text-gray-600">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-body-sm font-medium"
                    whileHover={{ x: 4 }}
                  >
                    View Live
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ x: 2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Dark Section */}
      <section className="py-20 px-8 bg-black relative overflow-hidden">
        {/* Animated background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -right-40 -bottom-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-cream to-accent bg-clip-text mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive skill set spanning AI, cloud infrastructure, and full-stack development
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.slice(0, 4).map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.15)' }}
                className="p-5 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950 hover:from-gray-800 hover:to-gray-900 border border-gray-800/50 hover:border-accent/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.25, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h4 className="text-body font-semibold text-gray-300 group-hover:text-cream transition-colors">
                    {category.name}
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {category.skills.slice(0, 5).map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + skillIdx * 0.04 }}
                      className="flex items-center justify-between text-body-sm text-gray-500 group-hover:text-gray-400 transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.yearsExperience && skill.yearsExperience >= 5 && (
                        <motion.span
                          className="text-accent font-medium text-caption"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.yearsExperience}y
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Light Section */}
      <section className="py-24 px-8 bg-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Connect?
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Looking for an experienced AI Engineer or Full-Stack Developer who can deliver results?
              Let&apos;s talk about how I can help your team.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="/resume"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-cream hover:bg-gray-900 transition-all duration-300 rounded-xl text-body font-semibold shadow-lg hover:shadow-xl group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📄
                </motion.span>
                View Resume
              </motion.a>

              <motion.a
                href="mailto:contact@nickkulavic.ai"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white hover:bg-accent-light transition-all duration-300 rounded-xl text-body font-semibold shadow-lg hover:shadow-2xl group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✉️
                </motion.span>
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Optional: Add a subtle text below */}
            <motion.p
              className="text-body-sm text-gray-600 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Available for full-time roles, consulting, and project-based work
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
