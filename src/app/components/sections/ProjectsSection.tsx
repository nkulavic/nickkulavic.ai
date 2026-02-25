'use client'

import { motion } from 'framer-motion';
import { Landmark, Zap, ShieldCheck, Link as LinkIcon } from 'lucide-react';
import { projects } from '@/app/data/projects';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  ai: Landmark,
  saas: ShieldCheck,
  api: LinkIcon,
  'full-stack': Zap,
};

// Show featured projects (max 4)
const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg mb-12 max-w-2xl"
      >
        Real-world applications with AI integration, scalable architecture, and measurable business impact
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, i) => {
          const Icon = categoryIcons[project.category] || Zap;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-7 flex flex-col hover:border-accent/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-7 h-7 text-accent" />
                <span className="text-xs font-display font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>

              {project.metrics && project.metrics.length > 0 && (
                <div className="flex gap-6 mb-5">
                  {project.metrics.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-display font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-display font-semibold text-accent hover:underline mt-auto"
                >
                  View Project &rarr;
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
