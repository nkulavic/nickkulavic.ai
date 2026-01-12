import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { experiences } from '@/app/data/experience';
import { skillCategories } from '@/app/data/skills';
import { education, certifications } from '@/app/data/education';
import { projects } from '@/app/data/projects';

// ATS-friendly styles - single column, clear hierarchy, using built-in Helvetica
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.4,
    color: '#1a1a1a',
  },
  // Header styles
  header: {
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 2,
    color: '#000',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: '#333',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    color: '#444',
  },
  contactItem: {
    marginRight: 16,
  },
  // Section styles
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#000',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 3,
  },
  // Summary styles
  summaryText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#333',
    textAlign: 'justify',
  },
  // Skills styles
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryName: {
    fontSize: 9,
    fontWeight: 600,
    color: '#000',
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 8,
    color: '#444',
    lineHeight: 1.4,
  },
  // Experience styles
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  companyRole: {
    fontSize: 10,
    fontWeight: 600,
    color: '#000',
  },
  companyName: {
    fontSize: 9,
    color: '#333',
  },
  dateLocation: {
    fontSize: 8,
    color: '#666',
    textAlign: 'right',
  },
  experienceDescription: {
    fontSize: 8,
    color: '#444',
    marginBottom: 4,
  },
  achievementsList: {
    paddingLeft: 10,
  },
  achievement: {
    fontSize: 8,
    color: '#333',
    marginBottom: 2,
    lineHeight: 1.4,
  },
  techStack: {
    fontSize: 7,
    color: '#666',
    marginTop: 4,
  },
  // Project styles
  projectItem: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: '#000',
  },
  projectSubtitle: {
    fontSize: 8,
    color: '#666',
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 8,
    color: '#444',
    marginBottom: 2,
  },
  projectMetrics: {
    fontSize: 7,
    color: '#333',
    fontWeight: 600,
  },
  // Education styles
  educationItem: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 9,
    fontWeight: 600,
    color: '#000',
  },
  institution: {
    fontSize: 8,
    color: '#444',
  },
  // Certification styles
  certItem: {
    marginBottom: 4,
  },
  certTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: '#000',
  },
  certOrg: {
    fontSize: 7,
    color: '#666',
  },
  // Bullet point
  bullet: {
    width: 8,
    fontSize: 8,
  },
  bulletText: {
    flex: 1,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
});

// Get top skills across all categories
const getTopSkills = () => {
  const priorityCategories = [
    'AI & Machine Learning',
    'Cloud & Infrastructure',
    'Frontend Development',
    'Backend Development',
    'Databases',
    'DevOps & Tools',
  ];

  return priorityCategories.map(catName => {
    const cat = skillCategories.find(c => c.name === catName);
    if (!cat) return null;
    const skills = cat.skills
      .filter(s => s.level === 'expert' || s.level === 'advanced')
      .slice(0, 6)
      .map(s => s.yearsExperience ? `${s.name} (${s.yearsExperience}y)` : s.name);
    return { name: catName.replace(' & Machine Learning', '/ML').replace(' & Infrastructure', '').replace(' Development', ''), skills };
  }).filter(Boolean);
};

// Get relevant experiences (most recent 4)
const getRelevantExperiences = () => {
  return experiences.slice(0, 4);
};

// Get featured projects
const getFeaturedProjects = () => {
  return projects.filter(p => p.featured).slice(0, 3);
};

export const ResumePDF = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>NICK KULAVIC</Text>
        <Text style={styles.title}>AI Engineer & Full-Stack Developer</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>Denver, CO</Text>
          <Text style={styles.contactItem}>contact@nickkulavic.ai</Text>
          <Text style={styles.contactItem}>linkedin.com/in/nickkulavic</Text>
          <Text style={styles.contactItem}>nickkulavic.ai</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          AI Engineer & Full-Stack Developer with 14+ years building enterprise applications and profitable SaaS ventures
          generating $1.2M+ in revenue. Expert in AWS serverless architecture (Lambda, Bedrock, DynamoDB), AI integration
          (Claude, Gemini, ChatGPT), and modern web development (React, Next.js, TypeScript). Currently building AI-powered
          mortgage technology serving 500+ users with SOC 2 compliance. Founded 3 successful SaaS companies processing
          2M+ monthly API requests with 99.9% uptime. Strong technical leadership with proven ability to deliver
          scalable, secure solutions from concept to production.
        </Text>
      </View>

      {/* Core Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {getTopSkills().map((category, idx) => (
          category && (
            <View key={idx} style={styles.skillCategory}>
              <Text style={styles.skillCategoryName}>{category.name}:</Text>
              <Text style={styles.skillsList}>{category.skills.join(' | ')}</Text>
            </View>
          )
        ))}
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {getRelevantExperiences().map((exp) => (
          <View key={exp.id} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.companyRole}>{exp.role}</Text>
                <Text style={styles.companyName}>{exp.company}</Text>
              </View>
              <View>
                <Text style={styles.dateLocation}>{exp.startDate} - {exp.endDate}</Text>
                <Text style={styles.dateLocation}>{exp.location}</Text>
              </View>
            </View>
            <View style={styles.achievementsList}>
              {exp.achievements.slice(0, 4).map((achievement, aidx) => (
                <View key={aidx} style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={[styles.achievement, styles.bulletText]}>{achievement}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.techStack}>
              Technologies: {exp.technologies.slice(0, 10).join(', ')}
            </Text>
          </View>
        ))}
      </View>

      {/* Featured Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        {getFeaturedProjects().map((project) => (
          <View key={project.id} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.title} - {project.subtitle}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            {project.metrics && (
              <Text style={styles.projectMetrics}>
                {project.metrics.map(m => `${m.label}: ${m.value}`).join(' | ')}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Education & Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education & Certifications</Text>
        {education.slice(0, 1).map((edu) => (
          <View key={edu.id} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.institution}>{edu.institution} | {edu.location} | {edu.year}</Text>
          </View>
        ))}
        <View style={{ marginTop: 6 }}>
          {certifications.slice(0, 4).map((cert) => (
            <View key={cert.id} style={styles.certItem}>
              <Text style={styles.certTitle}>{cert.title} - {cert.level}</Text>
              <Text style={styles.certOrg}>{cert.organization}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
