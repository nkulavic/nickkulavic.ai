'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, getSkillCounts, getProductionSkills } from '@/app/data/skills';

export default function TechnicalExpertise() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const skillCounts = getSkillCounts();
  const productionSkills = getProductionSkills();

  // Get top priority categories for initial display
  const topCategories = skillCategories
    .filter(cat => cat.priority <= 6)
    .sort((a, b) => a.priority - b.priority);

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="space-y-12">
      {/* Skills Overview Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 via-blue-50 to-white rounded-2xl p-8 border-2 border-accent/20 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-h4 font-bold text-gray-900">Technical Expertise Overview</h3>
          <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-bold">
            Full-Stack • Multi-Cloud • AI/ML
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Skills', value: skillCounts.total, icon: '🎯', color: 'from-blue-500 to-blue-600' },
            { label: 'Expert Level', value: skillCounts.expert, icon: '⭐', color: 'from-amber-500 to-amber-600' },
            { label: 'Production Proven', value: productionSkills.length, icon: '🚀', color: 'from-green-500 to-green-600' },
            { label: 'Cloud Platforms', value: '2+', icon: '☁️', color: 'from-purple-500 to-purple-600' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 cursor-pointer group"
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {stat.icon}
              </motion.div>
              <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Competencies - Top Categories */}
      <div>
        <motion.h3
          className="text-h4 font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Core Competencies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCategories.map((category, idx) => {
            const isExpanded = expandedCategories.has(category.name);
            const displaySkills = isExpanded
              ? category.skills
              : category.skills.filter(s => s.level === 'expert').slice(0, 5);
            const hasMore = category.skills.length > displaySkills.length;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0, 102, 255, 0.15)' }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-accent/50 transition-all shadow-md group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {category.icon}
                    </motion.span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                        {category.name}
                      </h4>
                      {category.description && (
                        <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <AnimatePresence mode="wait">
                    {displaySkills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: skillIdx * 0.03 }}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <span className={`w-2 h-2 rounded-full ${
                            skill.level === 'expert' ? 'bg-green-500' :
                            skill.level === 'advanced' ? 'bg-blue-500' :
                            'bg-gray-400'
                          }`} />
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          {skill.badge && (
                            <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-bold">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                        {skill.yearsExperience && (
                          <span className="text-xs text-gray-500 font-semibold">
                            {skill.yearsExperience}y
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {hasMore && (
                  <motion.button
                    onClick={() => toggleCategory(category.name)}
                    className="mt-4 text-sm text-accent hover:text-accent-light font-bold flex items-center gap-1 group/btn"
                    whileHover={{ x: 4 }}
                  >
                    {isExpanded ? 'Show less' : `Show ${category.skills.length - displaySkills.length} more`}
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▼
                    </motion.span>
                  </motion.button>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
                  <span className="font-semibold">
                    {category.skills.filter(s => s.level === 'expert').length} Expert •{' '}
                    {category.skills.filter(s => s.level === 'advanced').length} Advanced
                  </span>
                  <span className="text-accent font-bold">{category.skills.length} total</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* All Categories - Expandable */}
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <h3 className="text-h4 font-bold text-gray-900">Additional Expertise</h3>
          <span className="text-sm text-gray-600">
            {skillCategories.length - topCategories.length} more categories
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories
            .filter(cat => cat.priority > 6)
            .sort((a, b) => a.priority - b.priority)
            .map((category, idx) => {
              const isExpanded = expandedCategories.has(category.name);
              const expertSkills = category.skills.filter(s => s.level === 'expert');

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:border-accent/30 transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div className="text-left">
                        <h4 className="text-base font-bold text-gray-900 group-hover:text-accent transition-colors">
                          {category.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {expertSkills.length} expert • {category.skills.length} total
                        </p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-accent text-xl"
                    >
                      ▼
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {category.skills.map((skill, skillIdx) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIdx * 0.02 }}
                              className="flex items-center justify-between text-sm"
                            >
                              <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  skill.level === 'expert' ? 'bg-green-500' :
                                  skill.level === 'advanced' ? 'bg-blue-500' :
                                  'bg-gray-400'
                                }`} />
                                <span className="text-gray-700">{skill.name}</span>
                                {skill.badge && (
                                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-bold">
                                    {skill.badge}
                                  </span>
                                )}
                              </div>
                              {skill.yearsExperience && (
                                <span className="text-xs text-gray-500 font-semibold">
                                  {skill.yearsExperience}y
                                </span>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </div>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pt-8 border-t border-gray-200"
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="font-semibold">Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="font-semibold">Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-400" />
          <span className="font-semibold">Intermediate</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-bold">Production</span>
          <span className="font-semibold">= Production Experience</span>
        </div>
      </motion.div>
    </div>
  );
}
