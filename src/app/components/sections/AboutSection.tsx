'use client'

import { motion } from 'framer-motion';
import { Rocket, DollarSign, Bot, Shield } from 'lucide-react';
import { valuePropositions } from '@/app/data/valuePropositions';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'ship-fast': Rocket,
  'revenue-focused': DollarSign,
  'ai-first': Bot,
  'aws-expert': Shield,
};

// Use first 4 value propositions for the card grid
const featureCards = valuePropositions.slice(0, 4);

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I&apos;m a Senior AI &amp; Platform Engineer who architects enterprise-grade systems
              and profitable SaaS ventures. With deep expertise in AWS infrastructure, DevOps/MLOps,
              and AI integration, I&apos;ve founded multiple companies that have generated over $1.7M in revenue.
            </p>
            <p>
              Currently at Take3Tech, I lead AI infrastructure for mortgage solutions serving 500+ loan officers.
              I also run MyFusion Solutions — a platform with 60+ integrations processing 2M+ API requests monthly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featureCards.map((item) => {
              const Icon = iconMap[item.id] || Rocket;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-5 hover:border-accent/30 transition-colors"
                >
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description.split('.')[0]}.</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
