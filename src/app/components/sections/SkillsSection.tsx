'use client'

import { motion } from 'framer-motion';
import { Cloud, Bot, Zap, Wrench, Shield, Link } from 'lucide-react';
import { skillCategories } from '@/app/data/skills';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'AI/ML': Bot,
  'AWS': Cloud,
  'Frontend': Zap,
  'Backend': Wrench,
  'DevOps': Wrench,
  'Security': Shield,
  'Databases': Cloud,
  'Platform': Link,
};

// Pick the icon based on category short name or name keywords
function getIcon(name: string, shortName: string) {
  if (iconMap[shortName]) return iconMap[shortName];
  if (name.toLowerCase().includes('ai') || name.toLowerCase().includes('machine')) return Bot;
  if (name.toLowerCase().includes('cloud') || name.toLowerCase().includes('aws')) return Cloud;
  if (name.toLowerCase().includes('front') || name.toLowerCase().includes('full stack')) return Zap;
  if (name.toLowerCase().includes('devops') || name.toLowerCase().includes('mlops')) return Wrench;
  if (name.toLowerCase().includes('security') || name.toLowerCase().includes('compliance')) return Shield;
  if (name.toLowerCase().includes('platform') || name.toLowerCase().includes('integration')) return Link;
  return Zap;
}

// Show top 6 categories sorted by priority
const topCategories = [...skillCategories]
  .sort((a, b) => a.priority - b.priority)
  .slice(0, 6);

const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);
const expertSkills = skillCategories.reduce(
  (sum, cat) => sum + cat.skills.filter(s => s.level === 'expert').length, 0
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Core <span className="text-gradient">Competencies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          {totalSkills}+ technologies across {skillCategories.length} categories, with {expertSkills} expert-level skills
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topCategories.map((group, i) => {
            const Icon = getIcon(group.name, group.shortName);
            // Show top 7 skills per category
            const displaySkills = group.skills.slice(0, 7);
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 hover:border-accent/30 transition-all group"
              >
                <Icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-3">{group.shortName || group.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {displaySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium group-hover:bg-accent/10 group-hover:text-accent-foreground transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {group.skills.length > 7 && (
                    <span className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                      +{group.skills.length - 7} more
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
