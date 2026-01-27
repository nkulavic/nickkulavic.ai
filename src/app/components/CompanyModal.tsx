'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceEntry } from '../data/experience';
import Image from 'next/image';

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
          {/* Backdrop - Keep dark for contrast */}
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
                className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header with Logo */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b border-gray-200">
                  {/* Top CTA Bar - visible immediately on mobile */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 pr-8">
                    <span className="text-body-sm text-gray-500">Interested in working together?</span>
                    <motion.a
                      href="/resume"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-white text-body-sm font-medium rounded-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Resume
                    </motion.a>
                  </div>

                  <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    {experience.logo && experience.logo.imagePath && (
                      <div className="flex-shrink-0 bg-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg border border-gray-200">
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
                      <h2 className="text-h3 font-bold text-gray-900 mb-2">{experience.role}</h2>
                      <p className="text-body-lg text-accent font-semibold mb-1">{experience.company}</p>
                      <p className="text-body-sm text-gray-500">
                        {experience.startDate} – {experience.endDate} • {experience.location}
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
                    <h3 className="text-body-lg font-semibold text-gray-900 mb-3">Role Overview</h3>
                    <p className="text-body text-gray-600 leading-relaxed">{experience.description}</p>
                  </div>

                  {/* Metrics */}
                  {experience.metrics && experience.metrics.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-body-lg font-semibold text-gray-900 mb-4">Impact & Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {experience.metrics.map((metric, idx) => (
                          <motion.div
                            key={metric}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-4 text-center"
                          >
                            <div className="text-h4 font-bold text-accent mb-1">{metric}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h3 className="text-body-lg font-semibold text-gray-900 mb-4">Key Achievements</h3>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 text-body text-gray-600 leading-relaxed"
                        >
                          <motion.div
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold mt-0.5"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            ✓
                          </motion.div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-body-lg font-semibold text-gray-900 mb-4">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 text-body-sm rounded-lg border border-gray-200 hover:border-accent/50 hover:text-accent transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-end gap-3">
                  <motion.button
                    onClick={onClose}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900 rounded-lg font-medium transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                  <motion.a
                    href="/resume"
                    className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white rounded-lg font-medium transition-all"
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0, 102, 255, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Full Resume
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
