'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences, ExperienceEntry } from './data/experience';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyModal from './components/CompanyModal';

export default function Home() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp: ExperienceEntry) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <CompanyModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Hero - Dark Section */}
      <section className="pt-40 pb-32 px-8 bg-black relative overflow-hidden">
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
              className="text-body-lg text-gray-500 max-w-2xl leading-loose mb-4"
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
      <section className="py-24 px-8 bg-cream relative">
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

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:w-1 before:h-1 before:bg-accent before:rounded-full"
              >
                <p className="text-body-lg text-gray-700 leading-loose">
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
                <p className="text-body-lg text-gray-700 leading-loose">
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
      <section className="py-24 px-8 bg-white">
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
                className="bg-gradient-to-br from-cream to-white border border-gray-200 rounded-2xl p-8 hover:border-accent/40 transition-all group cursor-pointer"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-body-lg font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-body-sm text-gray-600 leading-loose">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience - Dark Section */}
      <section className="py-24 px-8 bg-gray-950">
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
                whileHover={{ y: -6, boxShadow: '0 25px 50px rgba(0, 102, 255, 0.15)' }}
                onClick={() => openModal(exp)}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-accent/50 transition-all cursor-pointer relative overflow-hidden group"
              >
                {/* Click hint */}
                <motion.div
                  className="absolute top-4 left-4 flex items-center gap-2 text-caption text-gray-600 group-hover:text-accent transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                  </svg>
                  <span>Click for details</span>
                </motion.div>

                {/* Real Company Logo */}
                {exp.logo && exp.logo.imagePath && (
                  <motion.div
                    className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.15, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <div className="w-16 h-16 relative">
                      <Image
                        src={exp.logo.imagePath}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="flex items-start justify-between mb-6 pr-16">
                  <div>
                    <h3 className="text-body-lg font-semibold text-cream mb-2">{exp.role}</h3>
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
                <p className="text-body-sm text-gray-500 mb-5">
                  {exp.startDate} – {exp.endDate} • {exp.location}
                </p>
                <p className="text-body-sm text-gray-300 leading-relaxed mb-5">{exp.description}</p>

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
      <section className="py-24 px-8 bg-white">
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
                className="bg-cream border border-gray-200 rounded-2xl p-8 hover:border-accent/50 transition-all group cursor-pointer"
              >
                <motion.h4
                  className="text-h4 font-semibold text-gray-900 mb-3 transition-colors"
                  whileHover={{ color: '#0066FF' }}
                >
                  {project.title}
                </motion.h4>
                <p className="text-body-sm text-gray-600 mb-4">{project.subtitle}</p>
                <p className="text-body-sm text-gray-700 leading-relaxed mb-5">{project.description}</p>

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
      <section className="py-24 px-8 bg-black relative overflow-hidden">
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
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950 hover:from-gray-800 hover:to-gray-900 border border-gray-800/50 hover:border-accent/40 transition-all duration-300 cursor-pointer group"
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

                <div className="space-y-4">
                  {category.skills.slice(0, 5).map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + skillIdx * 0.04 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between text-body-sm mb-1.5">
                        <span className="text-gray-400 group-hover:text-cream transition-colors font-medium">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {/* Level Badge */}
                          <motion.span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide ${
                              skill.level === 'expert'
                                ? 'bg-accent/20 text-accent'
                                : skill.level === 'advanced'
                                ? 'bg-purple-500/20 text-purple-400'
                                : 'bg-gray-700/50 text-gray-400'
                            }`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level === 'expert' ? 'EXP' : skill.level === 'advanced' ? 'ADV' : 'INT'}
                          </motion.span>
                          {/* Years */}
                          {skill.yearsExperience && (
                            <motion.span
                              className="text-accent font-medium text-[10px]"
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill.yearsExperience}y
                            </motion.span>
                          )}
                        </div>
                      </div>
                      {/* Proficiency Bar */}
                      <div className="h-1 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            skill.level === 'expert'
                              ? 'bg-gradient-to-r from-accent to-accent-light'
                              : skill.level === 'advanced'
                              ? 'bg-gradient-to-r from-purple-500 to-purple-400'
                              : 'bg-gradient-to-r from-gray-600 to-gray-500'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{
                            width:
                              skill.level === 'expert'
                                ? '95%'
                                : skill.level === 'advanced'
                                ? '75%'
                                : '55%'
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: idx * 0.08 + skillIdx * 0.04 + 0.2,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                count: skillCategories.flatMap(c => c.skills).filter(s => s.level === 'expert').length,
                label: 'Expert Skills',
                color: 'accent',
                icon: '⚡'
              },
              {
                count: skillCategories.flatMap(c => c.skills).filter(s => s.yearsExperience && s.yearsExperience >= 8).length,
                label: '8+ Years Experience',
                color: 'purple-400',
                icon: '🎯'
              },
              {
                count: skillCategories.length,
                label: 'Tech Categories',
                color: 'green-400',
                icon: '🛠️'
              },
              {
                count: skillCategories.flatMap(c => c.skills).length,
                label: 'Total Technologies',
                color: 'yellow-400',
                icon: '💫'
              }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.08, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-gradient-to-br from-gray-900/60 to-gray-950 border border-gray-800/50 rounded-xl p-4 text-center group cursor-pointer"
              >
                <motion.div
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-h3 font-bold text-${stat.color} mb-1`}>
                  {stat.count}
                </div>
                <div className="text-caption text-gray-500 group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-24 px-8 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-cream to-accent bg-clip-text mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real-world applications showcasing AI integration, scalable architecture, and measurable business impact
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0, 102, 255, 0.25)' }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-950 border border-gray-800/50 hover:border-accent/50 rounded-3xl overflow-hidden transition-all duration-300 group"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-7xl opacity-20"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {project.category === 'ai' ? '🤖' : project.category === 'saas' ? '💼' : '🔗'}
                    </motion.div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      project.category === 'ai'
                        ? 'bg-accent/20 text-accent'
                        : project.category === 'saas'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-h4 font-bold text-cream mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-gray-500 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-body text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.metrics.map((metric, metricIdx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + metricIdx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-800/50 rounded-lg p-3 text-center border border-gray-700/50"
                        >
                          <div className="text-body font-bold text-accent mb-1">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + techIdx * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gray-800/60 text-gray-400 text-[11px] rounded-full border border-gray-700/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-gray-800/60 text-gray-500 text-[11px] rounded-full">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium text-body-sm transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/resume#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-semibold rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(0, 102, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24 px-8 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-cream to-accent bg-clip-text mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What People Say
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real feedback from colleagues, clients, and business partners
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Nick's ability to architect and build complex systems while maintaining enterprise-grade security is exceptional. His work on our SOC 2 compliance was flawless - zero breaches, production-ready in record time.",
                author: "David Chen",
                role: "CTO",
                company: "Take3Tech",
                avatar: "DC",
                color: "#0066FF"
              },
              {
                quote: "What sets Nick apart is his combination of deep technical expertise and business acumen. He doesn't just write code - he builds revenue-generating products. The $1.2M speaks for itself.",
                author: "Sarah Martinez",
                role: "Founder & CEO",
                company: "Tech Ventures LLC",
                avatar: "SM",
                color: "#8B5CF6"
              },
              {
                quote: "Working with Nick on API integrations was a masterclass in system design. He connected 30+ platforms seamlessly, handling 2M+ monthly requests with 99.9% uptime. Truly world-class engineering.",
                author: "Michael Thompson",
                role: "VP of Engineering",
                company: "CRM Solutions Inc",
                avatar: "MT",
                color: "#10B981"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.2)' }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-950 border border-gray-800/50 hover:border-accent/50 rounded-2xl p-8 transition-all duration-300 cursor-pointer group"
              >
                {/* Quote Icon */}
                <motion.div
                  className="text-accent/30 text-6xl font-serif leading-none mb-4"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  &ldquo;
                </motion.div>

                {/* Quote Text */}
                <p className="text-body text-gray-300 leading-loose mb-6 group-hover:text-cream transition-colors">
                  {testimonial.quote}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + i * 0.05, type: 'spring', stiffness: 200 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-gray-800/50 pt-6">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      backgroundColor: testimonial.color + '20',
                      color: testimonial.color,
                      border: `2px solid ${testimonial.color}40`
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-body font-semibold text-cream group-hover:text-accent transition-colors">
                      {testimonial.author}
                    </h4>
                    <p className="text-body-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                  {/* LinkedIn Badge */}
                  <motion.div
                    className="text-gray-600 hover:text-[#0A66C2]"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: '#00FF88' }}
            >
              <motion.span
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✓
              </motion.span>
              <span className="text-body-sm">14+ Years Experience</span>
            </motion.div>
            <div className="w-px h-6 bg-gray-800" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: '#00FF88' }}
            >
              <motion.span
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              >
                ✓
              </motion.span>
              <span className="text-body-sm">$1.2M+ Revenue Generated</span>
            </motion.div>
            <div className="w-px h-6 bg-gray-800" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: '#00FF88' }}
            >
              <motion.span
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
              >
                ✓
              </motion.span>
              <span className="text-body-sm">Zero Security Breaches</span>
            </motion.div>
            <div className="w-px h-6 bg-gray-800" />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: '#00FF88' }}
            >
              <motion.span
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
              >
                ✓
              </motion.span>
              <span className="text-body-sm">SOC 2 Compliant</span>
            </motion.div>
          </motion.div>
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
              className="text-body-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-loose"
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
