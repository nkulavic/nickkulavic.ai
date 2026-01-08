export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
  metrics?: string[];
  category: 'ai-engineering' | 'full-stack' | 'entrepreneurship' | 'leadership';
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'take3tech',
    company: 'Take3Tech.com',
    role: 'AI & Full-Stack Developer',
    location: 'Denver, CO',
    startDate: 'March 2025',
    endDate: 'Present',
    description: 'Building enterprise AI-powered applications for the mortgage industry with focus on scalability, security, and compliance.',
    achievements: [
      'Architected LoanMaps, a comprehensive loan origination system serving 500+ loan officers',
      'Developed RuleTool, an AI-driven PDF processing platform achieving 80% faster processing times',
      'Achieved SOC 2 compliance with zero security breaches across all applications',
      'Leveraged Claude Code and advanced AI tooling daily for accelerated development',
      'Established robust CI/CD pipelines with GitHub Actions for automated deployments',
      'Implemented real-time collaboration features with WebSocket architecture',
      'Designed serverless architecture handling thousands of concurrent users'
    ],
    technologies: ['Node.js', 'TypeScript', 'React', 'AWS Lambda', 'DynamoDB', 'AWS Bedrock', 'Claude AI', 'Next.js', 'WebSockets', 'GitHub Actions'],
    metrics: ['500+ active users', 'SOC 2 compliant', '99.9% uptime', '80% faster processing'],
    category: 'ai-engineering'
  },
  {
    id: 'listbackup',
    company: 'ListBackup.ai',
    role: 'Founder & Lead Developer',
    location: 'Denver, CO',
    startDate: 'January 2023',
    endDate: 'Present',
    description: 'Founded serverless SaaS platform for email list backup and protection, ensuring business continuity for email marketing operations.',
    achievements: [
      'Architected fully serverless solution using AWS Cognito, DynamoDB, and Lambda',
      'Implemented AI capabilities using AWS Bedrock and Claude/ChatGPT APIs for intelligent classification',
      'Achieved zero security breaches with robust JWT authentication and encryption',
      'Built automated ETL AI pipeline for data processing and transformation',
      'Designed multi-provider integration supporting major email marketing platforms',
      'Implemented real-time backup scheduling with automated notifications'
    ],
    technologies: ['AWS', 'React', 'DynamoDB', 'Material UI', 'AWS Bedrock', 'Claude AI', 'Serverless', 'JWT', 'REST API'],
    metrics: ['10K+ backups processed', '0 security breaches', 'Multi-provider support'],
    category: 'entrepreneurship'
  },
  {
    id: 'myfusion',
    company: 'MyFusion Solutions',
    role: 'Founder, Owner, Lead Developer',
    location: 'Denver, CO',
    startDate: 'January 2015',
    endDate: 'Present',
    description: 'Founded and scaled profitable SaaS business providing API integration and automation solutions for CRM platforms.',
    achievements: [
      'Generated $1.2M+ in cumulative revenue through sustainable SaaS model',
      'Processed 33,000+ recurring orders across six continents',
      'Built comprehensive API ecosystem connecting 30+ platforms (Salesforce, HubSpot, Twilio, SendGrid, Stripe, etc.)',
      'Engineered REST API handling 2M+ monthly requests with 99.9% uptime',
      'Developed MyFusion Helper, a React-based CRM extension with 50+ helper applets',
      'Implemented automated billing system with Stripe integration',
      'Created webhook processing system for real-time data synchronization',
      'Built custom workflow builder for non-technical users'
    ],
    technologies: ['Node.js', 'AWS Lambda', 'API Gateway', 'REST API', 'React', 'Infusionsoft/Keap', 'Stripe', 'Webhooks', 'OAuth'],
    metrics: ['$1.2M+ revenue', '33,000+ orders', '2M+ monthly API requests', '30+ integrations', '2,000+ active users'],
    category: 'entrepreneurship'
  },
  {
    id: 'infusionsoft',
    company: 'Infusionsoft',
    role: 'Senior Integration Specialist',
    location: 'Chandler, AZ (Remote)',
    startDate: 'January 2011',
    endDate: 'December 2014',
    description: 'Led API integration initiatives and provided expert consultation for enterprise CRM implementations.',
    achievements: [
      'Managed complex API integrations for enterprise clients',
      'Developed custom automation solutions using Infusionsoft API',
      'Provided technical consultation for Fortune 500 companies',
      'Created training materials and documentation for API usage',
      'Collaborated with product team on API improvements and features',
      'Mentored junior developers on best practices'
    ],
    technologies: ['Infusionsoft API', 'REST API', 'XML-RPC', 'PHP', 'JavaScript', 'MySQL'],
    metrics: ['100+ enterprise integrations', 'API usage optimization'],
    category: 'full-stack'
  }
  // Additional roles to be extracted from resume HTML files
];
