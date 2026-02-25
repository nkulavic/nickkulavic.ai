'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig, heroStats, heroDescription, availability } from '@/app/data/siteConfig';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 w-full section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-display text-lg mb-4 tracking-wide"
          >
            Hey, I&apos;m
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-[0.95] tracking-tight">
            {siteConfig.name.split(' ')[0]}
            <br />
            {siteConfig.name.split(' ')[1]}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/70 font-display font-light mb-6">
            {siteConfig.title}
          </p>
          <p className="text-lg text-primary-foreground/55 max-w-xl leading-relaxed mb-10 font-body">
            {heroDescription.primary} From $0 to $1.7M+ revenue with zero security breaches.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-display font-semibold text-sm hover:brightness-110 transition-all amber-glow"
            >
              Let&apos;s Talk &rarr;
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-xl font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-all"
            >
              LinkedIn &rarr;
            </a>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/40 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Availability Badge */}
        {availability.status === 'available' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16 inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl px-6 py-4"
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse-glow"
              style={{ backgroundColor: 'hsl(142 71% 55%)' }}
            />
            <span className="text-primary-foreground/70 text-sm font-body">
              Open to opportunities —{' '}
              <span className="text-primary-foreground/90 font-medium">
                {availability.roles.join(' · ')}
              </span>
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
