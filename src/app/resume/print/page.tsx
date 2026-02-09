'use client';

import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';
import { education, certifications, careerStats } from '@/app/data/education';
import { projects, projectGroups } from '@/app/data/projects';
import { siteConfig, availability } from '@/app/data/siteConfig';

export default function PrintResumePage() {
  const handlePrint = () => {
    window.print();
  };

  // Get top skills for each priority category using shortName and priority from data
  const prioritySkills = skillCategories
    .filter(c => c.priority && c.priority <= 6) // Top 6 priorities for print layout
    .sort((a, b) => (a.priority || 99) - (b.priority || 99))
    .map(category => ({
      name: category.shortName,
      skills: category.skills
        .filter(s => s.level === 'expert' || s.level === 'advanced')
        .slice(0, 5)
        .map(s => s.name)
    }));

  // Get specific projects for custom layout
  const myfusionHelper = projects.find(p => p.id === 'myfusion-helper');
  const listbackup = projects.find(p => p.id === 'listbackup');
  const relevantExperiences = experiences.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-bold shadow-lg hover:bg-accent-light transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / Save PDF
        </button>
      </div>

      {/* Resume Content - Optimized for print */}
      <div className="print-resume max-w-[8.5in] mx-auto bg-white shadow-2xl">

        {/* Header Section - Professional and clean */}
        <header className="resume-header bg-gradient-to-r from-gray-50 to-white px-10 py-8 border-b-2 border-accent/30">
          <div className="flex justify-between items-start gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-2 leading-tight">
                {siteConfig.name.toUpperCase()}
              </h1>
              <p className="text-2xl text-accent font-bold mb-3">
                {siteConfig.title}
              </p>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-300 rounded-lg text-green-700 text-sm font-bold">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse print-green-dot"></span>
                Available for {availability.roles[0]} roles
              </div>
            </div>
            <div className="text-right text-sm text-gray-700 space-y-1.5 bg-white rounded-lg p-5 shadow-sm border border-gray-200">
              <div className="flex items-center justify-end gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <p className="font-semibold">{siteConfig.location}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-accent font-semibold">{siteConfig.email}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <p className="text-accent font-semibold">{siteConfig.linkedin}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <p className="text-accent font-bold">{siteConfig.website}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary - Lead section */}
        <div className="bg-gradient-to-br from-accent/5 to-blue-50 px-10 py-6 border-b-2 border-accent/20">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-800 leading-relaxed font-medium">
            AI Engineer & Full-Stack Developer with <strong className="text-accent">14+ years</strong> building enterprise applications and profitable SaaS ventures
            generating <strong className="text-accent">$1.7M+ in revenue</strong>. Expert in REST APIs (Go, Node.js) on AWS API Gateway v2 with streaming,
            serverless architecture (Lambda, Bedrock, DynamoDB), and AI integration (Claude, Gemini, ChatGPT). Deep experience with
            <strong className="text-accent"> 30+ platform integrations</strong> including Salesforce, HubSpot, Infusionsoft, Twilio, and project management tools.
            Founded 3 successful SaaS companies processing <strong className="text-accent">2M+ monthly API requests</strong> with 99.9% uptime.
          </p>
        </div>

        {/* Career Highlights - Refined stats display */}
        <div className="bg-white px-10 py-6 border-b border-gray-200">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 text-center">Career Highlights</h2>
          <div className="grid grid-cols-5 gap-4">
            {careerStats.slice(0, 5).map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-extrabold text-accent mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide font-semibold leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="px-10 py-6 space-y-8">

          {/* Technical Expertise - Enhanced layout */}
          <section className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              Technical Expertise
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {prioritySkills.map((category) => (
                category && (
                  <div key={category.name} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-wide border-b border-accent/30 pb-1">{category.name}</h3>
                    <ul className="text-xs text-gray-700 space-y-1.5 leading-relaxed">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">▪</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              ))}
            </div>
          </section>

          {/* Professional Experience - Enhanced design */}
          <section>
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              Professional Experience
            </h2>
            <div className="space-y-5">
              {relevantExperiences.map((exp) => (
                <div key={exp.id} className="no-break bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border-l-4 border-accent shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base">{exp.role}</h3>
                      <p className="text-sm text-accent font-semibold">{exp.company}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{exp.location}</p>
                    </div>
                    <div className="bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/30">
                      <span className="text-xs text-accent font-bold whitespace-nowrap">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>
                  <ul className="text-xs text-gray-800 space-y-2 mt-3 leading-relaxed">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      <span className="font-bold text-gray-800">Technologies:</span>{' '}
                      <span className="text-gray-700">{exp.technologies.slice(0, 10).join(' • ')}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects - Redesigned cards */}
          <section>
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              Featured Projects
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {/* MyFusion Helper */}
              {myfusionHelper && (
                <div className="no-break bg-white rounded-xl p-4 border-2 border-accent/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">{myfusionHelper.title}</h3>
                    <span className="text-lg">🚀</span>
                  </div>
                  <p className="text-xs text-accent font-semibold mb-2">{myfusionHelper.subtitle}</p>
                  <p className="text-xs text-gray-700 leading-relaxed">{myfusionHelper.description}</p>
                  {myfusionHelper.metrics && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-200">
                      {myfusionHelper.metrics.slice(0, 2).map((metric) => (
                        <span key={metric.label} className="text-xs px-2.5 py-1 bg-accent text-white rounded-full font-bold">
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* LoanMaps + RuleTool grouped */}
              <div className="no-break bg-white rounded-xl p-4 border-2 border-accent/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{projectGroups['mortgage-tech']}</h3>
                  <span className="text-lg">🏦</span>
                </div>
                <p className="text-xs text-accent font-semibold mb-2">LoanMaps & RuleTool</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Enterprise loan origination system with AI-powered PDF processing for mortgage guidelines.
                  SOC 2 compliant platform serving 500+ loan officers.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-200">
                  <span className="text-xs px-2.5 py-1 bg-accent text-white rounded-full font-bold">500+ Users</span>
                  <span className="text-xs px-2.5 py-1 bg-accent text-white rounded-full font-bold">80% Faster</span>
                </div>
              </div>

              {/* ListBackup.ai */}
              {listbackup && (
                <div className="no-break bg-white rounded-xl p-4 border-2 border-accent/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">{listbackup.title}</h3>
                    <span className="text-lg">📊</span>
                  </div>
                  <p className="text-xs text-accent font-semibold mb-2">{listbackup.subtitle}</p>
                  <p className="text-xs text-gray-700 leading-relaxed">{listbackup.description}</p>
                  {listbackup.metrics && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-200">
                      {listbackup.metrics.slice(0, 2).map((metric) => (
                        <span key={metric.label} className="text-xs px-2.5 py-1 bg-accent text-white rounded-full font-bold">
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Education & Certifications - Modern grid layout */}
          <section className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              Education & Certifications
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Education */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-accent shadow-sm">
                <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Education</h3>
                {education.slice(0, 1).map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{edu.degree}</h4>
                    <p className="text-xs text-gray-600 font-semibold">{edu.institution}</p>
                    <p className="text-xs text-accent font-medium mt-0.5">{edu.year}</p>
                    {edu.description && (
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed italic">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-accent shadow-sm">
                <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Certifications</h3>
                <div className="space-y-3">
                  {certifications.slice(0, 3).map((cert) => (
                    <div key={cert.id} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 leading-tight">{cert.title}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{cert.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer - Professional and clean */}
        <footer className="px-10 py-4 border-t-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex justify-between items-center text-xs text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">References available upon request</span>
            </p>
            <p className="flex items-center gap-2">
              Full portfolio at
              <span className="text-accent font-bold text-sm">{siteConfig.website}</span>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
