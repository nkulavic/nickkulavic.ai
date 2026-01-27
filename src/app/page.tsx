'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences, ExperienceEntry } from './data/experience';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';
import { siteConfig, availability, heroStats, heroDescription, trustIndicators } from './data/siteConfig';
import { valuePropositions, valuePropositionsSubtitle } from './data/valuePropositions';
import { recentAchievements, achievementsSubtitle } from './data/achievements';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyModal from './components/CompanyModal';
import PlatformShowcase from './components/PlatformShowcase';

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

      {/* Hero - Light Section */}
      <section className="pt-40 pb-32 px-8 bg-gradient-to-b from-cream to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
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
              className="text-display font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              className="text-h3 text-transparent bg-gradient-to-r from-gray-600 to-accent bg-clip-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {siteConfig.title}
            </motion.p>
            <motion.p
              className="text-h4 text-gray-900 max-w-2xl leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroDescription.primary}
            </motion.p>
            <motion.p
              className="text-body-lg text-gray-600 max-w-2xl leading-loose mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {heroDescription.secondary}
            </motion.p>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {heroStats.map((metric, idx) => (
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
                  <div className="text-body-sm text-gray-500 group-hover:text-gray-600 transition-colors">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently Seeking Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 bg-white border border-accent/30 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <motion.h3
                    className="text-body-lg font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start gap-2"
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
                  <p className="text-body-sm text-gray-600">
                    {availability.roles.join(' • ')} • {availability.location}
                  </p>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={`mailto:${siteConfig.email}`}
                    className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl shadow-lg whitespace-nowrap"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 102, 255, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Let&apos;s Talk →
                  </motion.a>
                  <motion.a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-xl shadow-lg whitespace-nowrap flex items-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(10, 102, 194, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies - Light Section */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Core Competencies
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: '☁️',
                title: 'Cloud & Infrastructure',
                items: ['AWS (Lambda, DynamoDB, Bedrock, S3, Cognito, API Gateway)', 'Serverless Architecture', 'Infrastructure as Code']
              },
              {
                icon: '🛠️',
                title: 'DevOps & MLOps',
                items: ['CI/CD Pipelines', 'GitHub Actions', 'Automated Deployments', 'Production Monitoring', 'MLOps']
              },
              {
                icon: '🤖',
                title: 'AI & Machine Learning',
                items: ['AWS Bedrock', 'Claude AI', 'Document Processing', 'LLM Integration']
              },
              {
                icon: '🔒',
                title: 'Security & Compliance',
                items: ['SOC 2', 'Enterprise Security', 'Zero-Breach Track Record']
              },
              {
                icon: '⚡',
                title: 'Full Stack',
                items: ['React', 'Next.js', 'SvelteKit', 'Node.js', 'Go', 'TypeScript', 'REST APIs']
              }
            ].map((competency, idx) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0, 102, 255, 0.12)' }}
                className="bg-cream border border-gray-200 rounded-xl p-6 hover:border-accent/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {competency.icon}
                  </motion.span>
                  <h3 className="text-body font-bold text-gray-900 group-hover:text-accent transition-colors">
                    {competency.title}
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
        </div>
      </section>

      {/* About - Light Section */}
      <section className="py-32 px-8 bg-cream relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.h2>

            <div className="space-y-8 mt-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-body-lg text-gray-700 leading-loose"
              >
                I&apos;m a Senior AI & Platform Engineer who architects enterprise-grade systems and profitable SaaS ventures. With deep expertise in AWS infrastructure, DevOps/MLOps, and AI integration, I&apos;ve founded multiple companies that have generated over $1.2M in revenue while serving thousands of users globally.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-body-lg text-gray-700 leading-loose"
              >
                Currently at Take3Tech, I lead AI infrastructure and platform engineering for mortgage solutions serving 500+ loan officers. I own the full DevOps lifecycle—CI/CD pipelines, automated deployments, production monitoring—while maintaining SOC 2 compliance with zero security breaches.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-body-lg text-gray-700 leading-loose"
              >
                I also continue to run <span className="font-semibold text-accent">MyFusion Solutions</span>, where I built MyFusion Helper — a platform with 60+ integrations connecting Infusionsoft/Keap with Salesforce, Google Sheets, Twilio, and 30+ other platforms. It processes 2M+ API requests monthly and serves 2,000+ active users.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Achievements - Light Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-green-600 bg-clip-text"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Recent Achievements
            </motion.h2>
            <p className="text-body-lg text-gray-600 mt-4">
              {achievementsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentAchievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(0, 102, 255, 0.15)'
                }}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent/60 transition-all duration-500 group cursor-pointer overflow-hidden shadow-lg"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-3/4 transition-all duration-500" />

                <motion.div
                  className="relative text-5xl mb-5"
                  whileHover={{ scale: 1.25, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {achievement.icon}
                </motion.div>
                <div className="relative flex items-center justify-between mb-3">
                  <h3 className="text-body-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="text-caption text-gray-500 font-medium">{achievement.date}</span>
                </div>
                <p className="relative text-body-sm text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="relative flex flex-wrap gap-2 mt-6">
                  {achievement.metrics.map((metric, metricIdx) => (
                    <motion.span
                      key={metric}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + metricIdx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-caption rounded-lg font-medium"
                    >
                      {metric}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring - Light Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Sets Me Apart
            </motion.h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto mt-4" style={{ textAlign: 'center' }}>
              {valuePropositionsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropositions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(0, 102, 255, 0.15)'
                }}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent/60 transition-all duration-500 group cursor-pointer flex flex-col items-center text-center overflow-hidden shadow-lg"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-3/4 transition-all duration-500" />

                <motion.div
                  className="relative text-5xl mb-5"
                  whileHover={{ scale: 1.25, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="relative text-body-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="relative text-body-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience - Light Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-h2 font-bold text-gray-900">Experience</h2>
            <p className="text-body-lg text-gray-600 mt-4">
              14+ years building scalable solutions across AI, SaaS, and enterprise applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 25px 50px rgba(0, 102, 255, 0.1)' }}
                onClick={() => openModal(exp)}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent/50 transition-all cursor-pointer relative overflow-hidden group shadow-lg"
              >
                {/* Click hint */}
                <motion.div
                  className="absolute top-4 left-4 flex items-center gap-2 text-caption text-gray-400 group-hover:text-accent transition-colors"
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
                    className="absolute top-4 right-4 bg-gray-50 rounded-xl p-3 shadow-md border border-gray-100"
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
                    <h3 className="text-body-lg font-semibold text-gray-900 mb-2">{exp.role}</h3>
                    <p className="text-body text-gray-600">{exp.company}</p>
                  </div>
                  {exp.endDate === 'Present' && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-600 text-caption rounded-full absolute top-20 right-4"
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <p className="text-body-sm text-gray-500 mb-5">
                  {exp.startDate} – {exp.endDate} • {exp.location}
                </p>
                <p className="text-body-sm text-gray-700 leading-relaxed">{exp.description}</p>

                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
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
      <section className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 to-accent bg-clip-text">Featured Projects</h2>
            <p className="text-body-lg text-gray-600 mt-4">
              Real-world applications showcasing AI integration and scalable architecture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.15)'
                }}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-500 group cursor-pointer overflow-hidden shadow-lg"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-3/4 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.h4
                    className="text-h4 font-semibold text-gray-900 mb-3 transition-colors group-hover:text-purple-600"
                  >
                    {project.title}
                  </motion.h4>
                  <p className="text-body-sm text-gray-500 mb-4">{project.subtitle}</p>
                  <p className="text-body-sm text-gray-700 leading-relaxed">{project.description}</p>

                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {project.metrics.slice(0, 2).map((metric, metricIdx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + metricIdx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                        >
                          <div className="text-body-lg font-bold text-purple-600">{metric.value}</div>
                          <div className="text-caption text-gray-500">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-500 transition-colors text-body-sm font-medium mt-6"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Light Section */}
      <section className="py-32 px-8 bg-white relative overflow-hidden">
        {/* Animated background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -right-40 -bottom-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive skill set spanning AI, cloud infrastructure, and full-stack development
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillCategories.slice(0, 4).map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.15)' }}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-accent/40 transition-all duration-300 cursor-pointer group shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.25, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h4 className="text-body font-semibold text-gray-800 group-hover:text-accent transition-colors">
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
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {/* Level Badge */}
                          <motion.span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide ${
                              skill.level === 'expert'
                                ? 'bg-accent/20 text-accent'
                                : skill.level === 'advanced'
                                ? 'bg-purple-500/20 text-purple-500'
                                : 'bg-gray-200 text-gray-600'
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
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
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
                className="bg-white border border-gray-200 rounded-xl p-4 text-center group cursor-pointer shadow-md"
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
                <div className="text-caption text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Showcase - Light Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-600 mt-4"
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
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0, 102, 255, 0.15)' }}
                className="bg-white border border-gray-200 hover:border-accent/50 rounded-3xl overflow-hidden transition-all duration-300 group shadow-lg"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
                  <h3 className="text-h4 font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-gray-500 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-body text-gray-600 leading-relaxed mb-6">
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
                          className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200"
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
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-[11px] rounded-full border border-gray-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[11px] rounded-full">
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

      {/* Trust Indicators / Social Proof - Light Section */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
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
            className="text-center mb-12"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Proven Track Record
            </motion.h2>
            <motion.p
              className="text-body-lg text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Results that speak for themselves
            </motion.p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600"
          >
            {trustIndicators.map((indicator, idx) => (
              <React.Fragment key={indicator.text}>
                {idx > 0 && <div className="w-px h-6 bg-gray-300" />}
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: '#00FF88' }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: indicator.animationDelay, repeat: Infinity }}
                  >
                    {indicator.icon}
                  </motion.span>
                  <span className="text-body-sm">{indicator.text}</span>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GitHub Activity Section - Light */}
      <section className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-h2 font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-green-600 bg-clip-text"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              GitHub Activity
            </motion.h2>
            <p className="text-body-lg text-gray-600 mt-4">
              Active contributor and builder
            </p>
          </motion.div>

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <h3 className="text-body-lg font-semibold text-gray-900">Contribution Activity</h3>
                <p className="text-body-sm text-gray-500">@{siteConfig.github}</p>
              </div>
              <motion.a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-body-sm font-medium rounded-lg transition-colors flex items-center gap-2 border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Profile
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>

            {/* Contribution Calendar */}
            <div className="overflow-x-auto pb-2">
              <img
                src="https://ghchart.rshah.org/0066FF/nkulavic"
                alt="GitHub Contribution Chart"
                className="w-full min-w-[700px] rounded-lg"
              />
            </div>
          </motion.div>

          {/* GitHub Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Public Repos', icon: '📦', color: 'accent' },
              { label: 'Contributions', icon: '🔥', color: 'green-400' },
              { label: 'Pull Requests', icon: '🔀', color: 'purple-400' },
              { label: 'Years Active', icon: '⏱️', value: '10+', color: 'yellow-400' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center group cursor-pointer shadow-md"
              >
                <motion.div
                  className="text-2xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-caption text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View on GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <motion.a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Explore My GitHub
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA - Light Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-700 font-semibold text-body-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              Open to Opportunities
            </motion.div>

            <motion.h2
              className="text-h1 font-bold text-transparent bg-gradient-to-r from-gray-900 via-accent to-gray-900 bg-clip-text mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Build Something Exceptional
            </motion.h2>
            <motion.p
              className="text-h4 text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Need an engineer who ships enterprise-grade AI solutions while driving revenue?
            </motion.p>
            <motion.p
              className="text-body-lg text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              I bring technical depth, business acumen, and a track record of delivering results that matter.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white hover:bg-accent-light transition-all duration-300 rounded-2xl text-body-lg font-bold shadow-2xl hover:shadow-accent/50 group relative overflow-hidden"
                whileHover={{ scale: 1.08, y: -4, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✉️
                </motion.span>
                Schedule a Conversation
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>

              <motion.a
                href="/resume"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 hover:border-accent transition-all duration-300 rounded-2xl text-body-lg font-bold shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📄
                </motion.span>
                View Full Resume
              </motion.a>
            </motion.div>

            {/* Role Tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {['Senior AI Engineer', 'Staff Platform Engineer', 'DevOps/MLOps Engineer', 'Technical Lead', 'Solutions Architect'].map((role, idx) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-body-sm font-semibold rounded-lg"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] transition-colors text-body-sm font-medium"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </motion.a>
              <span className="text-gray-400">•</span>
              <motion.a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-body-sm font-medium"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Integrations Showcase */}
      <PlatformShowcase />

      <Footer />
    </div>
  );
}
