export interface Certification {
  id: string;
  title: string;
  organization: string;
  level: string;
  year?: string;
  icon: string;
  color: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    level: 'Professional Level',
    icon: '☁️',
    color: '#FF9900',
    description: '10+ years hands-on AWS experience with Lambda, DynamoDB, S3, Cognito, and enterprise architecture'
  },
  {
    id: 'aws-developer',
    title: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    level: 'Associate Level',
    icon: '⚙️',
    color: '#FF9900',
    description: 'Expertise in serverless applications, CI/CD, and AWS SDK integration'
  },
  {
    id: 'infusionsoft-partner',
    title: 'Infusionsoft Certified Partner',
    organization: 'Keap',
    level: 'Expert Level',
    year: '2015',
    icon: '🎓',
    color: '#73C41D',
    description: '10+ years building CRM automations and integrations for 2,000+ users'
  },
  {
    id: 'ai-ml-practitioner',
    title: 'AI/ML Practitioner',
    organization: 'AWS & Anthropic',
    level: 'Production Experience',
    year: '2023',
    icon: '🤖',
    color: '#0066FF',
    description: 'Hands-on experience with AWS Bedrock, Claude AI, and multi-model AI integration in production'
  },
  {
    id: 'soc2-compliance',
    title: 'SOC 2 Compliant Development',
    organization: 'Take3Tech',
    level: 'Current',
    icon: '🛡️',
    color: '#10B981',
    description: 'Working within SOC 2 compliant environment with zero security breaches'
  }
];

export const education: Education[] = [
  {
    id: 'illinois-state',
    degree: 'Double Major: Entrepreneurship & Marketing',
    institution: 'Illinois State University',
    location: 'Normal, IL',
    year: '2008 - 2012',
    description: 'Minor in Organizational Leadership (business psychology). Entrepreneurship focus on small business consulting and development. Foundation in project management, team leadership, and strategic business operations.',
    icon: '🎓'
  },
  {
    id: 'self-taught',
    degree: 'Self-Taught Software Engineer',
    institution: 'Continuous Learning',
    location: 'Denver, CO',
    year: '2011 - Present',
    description: '14+ years of hands-on development, building production systems and profitable SaaS companies. Combining technical skills with business acumen.',
    icon: '💻'
  }
];

// Career highlights / stats for the stats section
export interface CareerStat {
  value: string;
  label: string;
  icon: string;
}

export const careerStats: CareerStat[] = [
  { value: '$1.2M+', label: 'Total Revenue', icon: '💰' },
  { value: '500+', label: 'Enterprise Users', icon: '👥' },
  { value: '2M+', label: 'Monthly API Requests', icon: '⚡' },
  { value: '30+', label: 'Integrations', icon: '🔗' },
  { value: '0', label: 'Security Breaches', icon: '🛡️' },
  { value: '14+', label: 'Years Experience', icon: '⭐' }
];

// Summary highlights
export const summaryHighlights = [
  '🚀 Founded 3 SaaS companies generating $1.2M+ revenue',
  '☁️ 10+ years AWS expert (Lambda, Bedrock, DynamoDB)',
  '🤖 AI-first development with Claude, AWS Bedrock, ChatGPT',
  '🛡️ SOC 2 compliant systems with zero security breaches',
  '⚡ 2M+ monthly API requests across 30+ integrations',
  '👥 Serving 500+ enterprise users with 99.9% uptime'
];
