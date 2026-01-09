export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: 'expert' | 'advanced' | 'intermediate';
    yearsExperience?: number
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'AWS Bedrock', level: 'expert', yearsExperience: 2 },
      { name: 'Claude AI', level: 'expert', yearsExperience: 2 },
      { name: 'ChatGPT API', level: 'expert', yearsExperience: 2 },
      { name: 'Prompt Engineering', level: 'expert', yearsExperience: 2 },
      { name: 'Machine Learning', level: 'advanced' },
      { name: 'Natural Language Processing', level: 'advanced' },
      { name: 'AI Integration', level: 'expert', yearsExperience: 2 }
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: [
      { name: 'AWS Lambda', level: 'expert', yearsExperience: 10 },
      { name: 'API Gateway', level: 'expert', yearsExperience: 10 },
      { name: 'DynamoDB', level: 'expert', yearsExperience: 10 },
      { name: 'S3', level: 'expert', yearsExperience: 10 },
      { name: 'Cognito', level: 'expert', yearsExperience: 10 },
      { name: 'CloudFront', level: 'expert', yearsExperience: 10 },
      { name: 'Route53', level: 'expert', yearsExperience: 10 },
      { name: 'SES', level: 'expert', yearsExperience: 10 },
      { name: 'SNS', level: 'expert', yearsExperience: 10 },
      { name: 'CloudWatch', level: 'expert', yearsExperience: 10 },
      { name: 'Elastic Beanstalk', level: 'expert', yearsExperience: 10 },
      { name: 'Athena', level: 'advanced', yearsExperience: 8 },
      { name: 'Glue', level: 'advanced', yearsExperience: 7 },
      { name: 'RDS', level: 'advanced', yearsExperience: 10 },
      { name: 'EC2', level: 'advanced', yearsExperience: 10 },
      { name: 'Serverless Architecture', level: 'expert', yearsExperience: 10 }
    ]
  },
  {
    name: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React', level: 'expert', yearsExperience: 7 },
      { name: 'Next.js', level: 'expert', yearsExperience: 4 },
      { name: 'TypeScript', level: 'expert', yearsExperience: 6 },
      { name: 'JavaScript', level: 'expert', yearsExperience: 14 },
      { name: 'Tailwind CSS', level: 'advanced', yearsExperience: 3 },
      { name: 'Material UI', level: 'advanced', yearsExperience: 4 },
      { name: 'HTML5/CSS3', level: 'expert', yearsExperience: 14 },
      { name: 'Responsive Design', level: 'expert', yearsExperience: 12 },
      { name: 'Framer Motion', level: 'advanced', yearsExperience: 2 }
    ]
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 'expert', yearsExperience: 10 },
      { name: 'Express.js', level: 'expert', yearsExperience: 9 },
      { name: 'REST API Design', level: 'expert', yearsExperience: 12 },
      { name: 'GraphQL', level: 'advanced', yearsExperience: 3 },
      { name: 'Serverless Functions', level: 'expert', yearsExperience: 8 },
      { name: 'Microservices', level: 'advanced', yearsExperience: 6 },
      { name: 'WebSockets', level: 'advanced', yearsExperience: 5 }
    ]
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'DynamoDB', level: 'expert', yearsExperience: 8 },
      { name: 'MySQL', level: 'expert', yearsExperience: 12 },
      { name: 'PostgreSQL', level: 'advanced', yearsExperience: 6 },
      { name: 'MongoDB', level: 'advanced', yearsExperience: 5 },
      { name: 'Redis', level: 'intermediate', yearsExperience: 3 }
    ]
  },
  {
    name: 'Platform Integration & E-commerce',
    icon: '🔗',
    skills: [
      { name: 'Teamwork.com API', level: 'expert', yearsExperience: 6 },
      { name: 'WordPress', level: 'expert', yearsExperience: 10 },
      { name: 'Zendesk', level: 'advanced', yearsExperience: 5 },
      { name: 'Magento', level: 'advanced', yearsExperience: 6 },
      { name: 'Shopify', level: 'expert', yearsExperience: 7 },
      { name: 'WooCommerce', level: 'advanced', yearsExperience: 6 },
      { name: 'Payment Gateways', level: 'expert', yearsExperience: 8 }
    ]
  },
  {
    name: 'CRM & Marketing Platforms',
    icon: '📊',
    skills: [
      { name: 'Infusionsoft/Keap', level: 'expert', yearsExperience: 9 },
      { name: 'Salesforce', level: 'advanced', yearsExperience: 5 },
      { name: 'HubSpot', level: 'advanced', yearsExperience: 4 },
      { name: 'ActiveCampaign', level: 'advanced', yearsExperience: 3 },
      { name: 'MailChimp', level: 'advanced', yearsExperience: 5 }
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 'expert', yearsExperience: 12 },
      { name: 'GitHub Actions', level: 'advanced', yearsExperience: 3 },
      { name: 'CI/CD', level: 'advanced', yearsExperience: 6 },
      { name: 'Docker', level: 'intermediate', yearsExperience: 4 },
      { name: 'Vercel', level: 'advanced', yearsExperience: 3 },
      { name: 'AWS CloudFormation', level: 'intermediate', yearsExperience: 5 }
    ]
  },
  {
    name: 'Security & Compliance',
    icon: '🔒',
    skills: [
      { name: 'SOC 2 Compliance', level: 'advanced', yearsExperience: 2 },
      { name: 'JWT Authentication', level: 'expert', yearsExperience: 6 },
      { name: 'OAuth', level: 'expert', yearsExperience: 8 },
      { name: 'Data Encryption', level: 'advanced', yearsExperience: 8 },
      { name: 'API Security', level: 'expert', yearsExperience: 10 }
    ]
  },
  {
    name: 'Business & Leadership',
    icon: '💼',
    skills: [
      { name: 'SaaS Product Development', level: 'expert', yearsExperience: 10 },
      { name: 'Technical Leadership', level: 'expert', yearsExperience: 8 },
      { name: 'Entrepreneurship', level: 'expert', yearsExperience: 10 },
      { name: 'Project Management', level: 'advanced', yearsExperience: 12 },
      { name: 'Client Communication', level: 'expert', yearsExperience: 14 }
    ]
  }
];

// Utility function to get skills by category
export function getSkillsByCategory(category: string): SkillCategory | undefined {
  return skillCategories.find(cat => cat.name === category);
}

// Utility function to get all expert-level skills
export function getExpertSkills() {
  return skillCategories.flatMap(category =>
    category.skills
      .filter(skill => skill.level === 'expert')
      .map(skill => ({ ...skill, category: category.name }))
  );
}

// Utility function to get skills with 5+ years experience
export function getExperiencedSkills(minYears: number = 5) {
  return skillCategories.flatMap(category =>
    category.skills
      .filter(skill => skill.yearsExperience && skill.yearsExperience >= minYears)
      .map(skill => ({ ...skill, category: category.name }))
  );
}
