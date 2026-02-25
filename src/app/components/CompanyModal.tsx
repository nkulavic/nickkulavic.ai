'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceEntry } from '../data/experience';
import Image from 'next/image';
import Link from 'next/link';

interface CompanyModalProps {
  experience: ExperienceEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyModal({ experience, isOpen, onClose }: CompanyModalProps) {
  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full max-w-4xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header with Logo */}
                <div className="bg-muted/50 p-8 border-b border-border">
                  {/* Top CTA Bar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border pr-8">
                    <span className="text-body-sm text-muted-foreground">Interested in working together?</span>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/resume"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:brightness-110 text-accent-foreground text-body-sm font-medium rounded-lg transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Resume
                      </Link>
                    </motion.div>
                  </div>

                  <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    {experience.logo && experience.logo.imagePath && (
                      <div className="flex-shrink-0 bg-background rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg border border-border">
                        <Image
                          src={experience.logo.imagePath}
                          alt={`${experience.company} logo`}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <h2 className="text-h3 font-bold text-foreground mb-2">{experience.role}</h2>
                      <p className="text-body-lg text-accent font-semibold mb-1">{experience.company}</p>
                      <p className="text-body-sm text-muted-foreground">
                        {experience.startDate} – {experience.endDate} &bull; {experience.location}
                      </p>
                      {experience.endDate === 'Present' && (
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-caption rounded-full font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[70vh] overflow-y-auto">
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-body-lg font-semibold text-foreground mb-3">Role Overview</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">{experience.description}</p>
                  </div>

                  {/* Metrics */}
                  {experience.metrics && experience.metrics.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-body-lg font-semibold text-foreground mb-4">Impact &amp; Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {experience.metrics.map((metric, idx) => (
                          <motion.div
                            key={metric}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center"
                          >
                            <div className="text-h4 font-bold text-accent mb-1">{metric}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h3 className="text-body-lg font-semibold text-foreground mb-4">Key Achievements</h3>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 text-body text-muted-foreground leading-relaxed"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold mt-0.5">
                            &#10003;
                          </div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-body-lg font-semibold text-foreground mb-4">Technologies &amp; Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-muted text-muted-foreground text-body-sm rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-muted/50 p-6 border-t border-border flex justify-end gap-3">
                  <motion.button
                    onClick={onClose}
                    className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/resume"
                      className="inline-block px-6 py-3 bg-accent hover:brightness-110 text-accent-foreground rounded-lg font-medium transition-all"
                    >
                      View Full Resume
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
