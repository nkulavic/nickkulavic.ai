'use client'

import React from 'react';
import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section - Dark */}
      <div className="bg-black py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <header className="border-b border-gray-800 pb-8 mb-8">
            <h1 className="text-h1 font-bold text-cream mb-2">Nick Kulavic</h1>
            <p className="text-body-lg text-gray-400 mb-4">
              AI Engineer & Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-6 text-body-sm text-gray-500">
              <span>Denver, CO</span>
              <span>•</span>
              <a
                href="mailto:contact@nickkulavic.ai"
                className="hover:text-accent transition-colors"
              >
                Email
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/nickkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/nkulavic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section>
            <h2 className="text-h4 font-semibold text-cream mb-4">Professional Summary</h2>
            <p className="text-body text-gray-300 leading-relaxed">
              AI & Full-Stack Developer with 14+ years building enterprise applications and profitable SaaS ventures.
              Expertise in AWS, serverless architecture, and AI integration. Founded multiple companies generating $1.2M+
              in revenue. Currently developing AI-powered solutions at Take3Tech serving 500+ users with SOC 2 compliance.
              Proven track record in scaling SaaS products, API integrations, and delivering business value through technology.
            </p>
          </section>
        </div>
      </div>

      {/* Key Achievements - Cream Section */}
      <div className="py-12 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-h4 font-semibold text-gray-900 mb-6">Key Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="text-h3 font-bold text-accent">$1.2M+</div>
                <div className="text-body-sm text-gray-600">Total Revenue</div>
              </div>
              <div>
                <div className="text-h3 font-bold text-accent">500+</div>
                <div className="text-body-sm text-gray-600">Enterprise Users</div>
              </div>
              <div>
                <div className="text-h3 font-bold text-accent">2M+</div>
                <div className="text-body-sm text-gray-600">Monthly API Requests</div>
              </div>
              <div>
                <div className="text-h3 font-bold text-accent">30+</div>
                <div className="text-body-sm text-gray-600">Integrations</div>
              </div>
              <div>
                <div className="text-h3 font-bold text-accent">0</div>
                <div className="text-body-sm text-gray-600">Security Breaches</div>
              </div>
              <div>
                <div className="text-h3 font-bold text-accent">14+</div>
                <div className="text-body-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Experience - White Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-h4 font-semibold text-gray-900 mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="group border-l-4 border-accent/30 hover:border-accent pl-6 transition-colors">
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <h3 className="text-body-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-body text-gray-600">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-body-sm text-gray-500 whitespace-nowrap ml-4">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <p className="text-body-sm text-gray-600 mb-3 italic">
                    {exp.description}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-body-sm text-gray-700 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="text-caption text-gray-700 px-3 py-1 bg-cream border border-gray-200 rounded"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 text-body-sm text-gray-500">
                    <span className="font-medium text-gray-700">Technologies:</span>{' '}
                    {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Skills - Cream Section */}
      <div className="py-16 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-h4 font-semibold text-gray-900 mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div key={category.name} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="text-body font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    {category.name}
                  </h3>
                  <div className="space-y-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="text-body-sm text-gray-600"
                      >
                        {skill.name}
                        {skill.yearsExperience && (
                          <span className="text-gray-500"> ({skill.yearsExperience} years)</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Education & Certifications - White Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-h4 font-semibold text-gray-900 mb-6">Education & Certifications</h2>
            <div className="space-y-4">
              <div className="bg-cream border border-gray-200 rounded-xl p-5">
                <h3 className="text-body font-semibold text-gray-900">AWS Certified Solutions Architect</h3>
                <p className="text-body-sm text-gray-600">Amazon Web Services • Professional Level</p>
              </div>
              <div className="bg-cream border border-gray-200 rounded-xl p-5">
                <h3 className="text-body font-semibold text-gray-900">Infusionsoft Certified Partner</h3>
                <p className="text-body-sm text-gray-600">Keap • Expert Level</p>
              </div>
            </div>
          </section>

          {/* Target Roles */}
          <section className="mb-8">
            <h2 className="text-h4 font-semibold text-gray-900 mb-4">Target Roles</h2>
            <div className="flex flex-wrap gap-3">
              {['AI Engineer', 'Full-Stack Developer', 'Technical Lead', 'SaaS Founder/CTO'].map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-body-sm font-medium rounded-lg"
                >
                  {role}
                </span>
              ))}
            </div>
          </section>

          {/* Download Button */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-cream hover:bg-gray-900 transition-colors rounded-lg text-body font-medium shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </button>
            <p className="text-body-sm text-gray-500 mt-4">
              Available for immediate opportunities in AI Engineering and Full-Stack Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
