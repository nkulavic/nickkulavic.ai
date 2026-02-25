'use client'

import { motion } from 'framer-motion';
import { Code2, Building2, Briefcase, Users } from 'lucide-react';
import { experiences, ExperienceEntry } from '@/app/data/experience';

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'ai-engineering': Code2,
  'full-stack': Code2,
  'entrepreneurship': Building2,
  'leadership': Users,
};

interface ExperienceSectionProps {
  onOpenModal?: (exp: ExperienceEntry) => void;
}

const ExperienceSection = ({ onOpenModal }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const Icon = roleIcons[exp.category] || Briefcase;
              const isCurrent = exp.endDate === 'Present';
              const period = `${exp.startDate} – ${exp.endDate}`;
              // Pick top 4 highlights from achievements
              const highlights = exp.achievements?.slice(0, 4).map(a => {
                // Extract short highlight text (first sentence or first ~60 chars)
                const short = a.split(',')[0].split(' - ')[0];
                return short.length > 50 ? short.substring(0, 47) + '...' : short;
              }) || [];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-7">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        isCurrent
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted border border-border text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div
                    className={`glass-card p-7 relative overflow-hidden flex-1 ${onOpenModal ? 'cursor-pointer' : ''}`}
                    onClick={() => onOpenModal?.(exp)}
                  >
                    {isCurrent && (
                      <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-display font-semibold px-4 py-1.5 rounded-bl-xl">
                        Current
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-display font-bold text-foreground">{exp.role}</h3>
                        <p className="text-accent font-display font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground font-body shrink-0">
                        <div>{period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description.length > 200
                        ? exp.description.substring(0, 200) + '...'
                        : exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics?.slice(0, 4).map((m) => (
                        <span
                          key={m}
                          className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground font-medium"
                        >
                          {m}
                        </span>
                      ))}
                      {(!exp.metrics || exp.metrics.length === 0) && highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
