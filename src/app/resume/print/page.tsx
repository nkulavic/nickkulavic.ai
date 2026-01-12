'use client';

import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';
import { education, certifications, careerStats } from '@/app/data/education';
import { projects } from '@/app/data/projects';

export default function PrintResumePage() {
  const handlePrint = () => {
    window.print();
  };

  // Get top skills for each priority category
  const prioritySkills = [
    { name: 'AI & Machine Learning', shortName: 'AI/ML' },
    { name: 'Cloud & Infrastructure', shortName: 'Cloud' },
    { name: 'Backend Development', shortName: 'Backend' },
    { name: 'Frontend Development', shortName: 'Frontend' },
    { name: 'Platform Integration & E-commerce', shortName: 'Platforms' },
    { name: 'CRM & Marketing Platforms', shortName: 'CRM/APIs' },
  ].map(cat => {
    const found = skillCategories.find(c => c.name === cat.name);
    if (!found) return null;
    return {
      name: cat.shortName,
      skills: found.skills
        .filter(s => s.level === 'expert' || s.level === 'advanced')
        .slice(0, 5)
        .map(s => s.name)
    };
  }).filter(Boolean);

  // Prioritize MyFusion Helper and key projects
  const featuredProjects = [
    projects.find(p => p.id === 'myfusion-helper'),
    projects.find(p => p.id === 'loanmaps'),
    projects.find(p => p.id === 'ruletool'),
  ].filter((p): p is NonNullable<typeof p> => p !== undefined);
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
      <div className="print-resume max-w-[8.5in] mx-auto">

        {/* Header Section - Light background for print-friendly output */}
        <header className="resume-header bg-white px-8 py-6 border-b-4 border-accent">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                NICK KULAVIC
              </h1>
              <p className="text-xl text-accent mt-1 font-semibold">
                AI Engineer & Full-Stack Developer
              </p>
            </div>
            <div className="text-right text-sm text-gray-600 space-y-0.5">
              <p className="font-medium">Denver, CO</p>
              <p>contact@nickkulavic.ai</p>
              <p className="text-accent">linkedin.com/in/nickkulavic</p>
              <p className="text-accent font-medium">nickkulavic.ai</p>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full print-green-dot"></span>
            Available for AI Engineer, Full-Stack Developer & Technical Lead roles
          </div>
        </header>

        {/* Career Highlights Bar */}
        <div className="bg-gray-100 px-8 py-4 border-b border-gray-200 print:bg-gray-100">
          <div className="flex justify-between items-center gap-4 text-center">
            {careerStats.slice(0, 5).map((stat) => (
              <div key={stat.label} className="flex-1">
                <div className="text-xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="px-8 py-6 space-y-6">

          {/* Professional Summary */}
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-accent pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI Engineer & Full-Stack Developer with <strong>14+ years</strong> building enterprise applications and profitable SaaS ventures
              generating <strong>$1.2M+ in revenue</strong>. Expert in REST APIs (Go, Node.js) on AWS API Gateway v2 with streaming,
              serverless architecture (Lambda, Bedrock, DynamoDB), and AI integration (Claude, Gemini, ChatGPT). Deep experience with
              <strong> 30+ platform integrations</strong> including Salesforce, HubSpot, Infusionsoft, Twilio, and project management tools.
              Founded 3 successful SaaS companies processing <strong>2M+ monthly API requests</strong> with 99.9% uptime.
            </p>
          </section>

          {/* Technical Expertise */}
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-accent pb-1 mb-3">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-6 gap-3">
              {prioritySkills.map((category) => (
                category && (
                  <div key={category.name} className="text-xs">
                    <h3 className="font-bold text-accent mb-1">{category.name}</h3>
                    <ul className="text-gray-700 space-y-0.5">
                      {category.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-accent pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {relevantExperiences.map((exp) => (
                <div key={exp.id} className="no-break">
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-sm text-gray-600">{exp.company} | {exp.location}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="text-xs text-gray-700 space-y-1 mt-2">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-accent before:font-bold">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    <span className="font-medium not-italic text-gray-600">Tech:</span> {exp.technologies.slice(0, 8).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-accent pb-1 mb-3">
              Featured Projects
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="no-break">
                  <h3 className="font-bold text-gray-900 text-sm">{project.title}</h3>
                  <p className="text-xs text-gray-600 mb-1">{project.subtitle}</p>
                  <p className="text-xs text-gray-700">{project.description}</p>
                  {project.metrics && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span key={metric.label} className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded font-medium">
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-accent pb-1 mb-3">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Education */}
              <div>
                {education.slice(0, 1).map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
                    <p className="text-xs text-gray-600">{edu.institution} | {edu.year}</p>
                    {edu.description && (
                      <p className="text-xs text-gray-500 mt-1">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                {certifications.slice(0, 3).map((cert) => (
                  <div key={cert.id} className="flex items-start gap-2">
                    <span className="text-accent font-bold">*</span>
                    <div>
                      <p className="text-xs font-medium text-gray-900">{cert.title}</p>
                      <p className="text-xs text-gray-500">{cert.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="px-8 py-3 border-t border-gray-200 text-center text-xs text-gray-500">
          References available upon request | Full portfolio at <span className="text-accent font-medium">nickkulavic.ai</span>
        </footer>

      </div>
    </div>
  );
}
