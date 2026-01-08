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
  logo?: {
    initials: string;
    color: string;
    bgColor: string;
  };
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
    logo: {
      initials: 'T3',
      color: '#0066FF',
      bgColor: '#0066FF15'
    },
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
    logo: {
      initials: 'LB',
      color: '#8B5CF6',
      bgColor: '#8B5CF615'
    },
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
    logo: {
      initials: 'MF',
      color: '#0891B2',
      bgColor: '#0891B215'
    },
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
    id: 'alignlife',
    company: 'AlignLife Franchise',
    role: 'Director of Automation & Lead Developer',
    location: 'Peoria, IL',
    startDate: 'January 2011',
    endDate: 'December 2016',
    description: 'Built complete franchise technology stack for chiropractic practices, enabling multi-location management and operational automation.',
    logo: {
      initials: 'AL',
      color: '#10B981',
      bgColor: '#10B98115'
    },
    achievements: [
      'Architected and built entire franchise technology infrastructure serving 20+ chiropractic locations',
      'Designed automated workflows for patient management, scheduling, and billing systems',
      'Implemented multi-location management platform with real-time operational oversight',
      'Built Infusionsoft automation workflows for drip campaigns, patient recalls, and staff task management',
      'Developed patient websites and online scheduling systems for individual franchise locations',
      'Managed ACEVA.com (nutraceutical e-commerce platform) operationally and technologically',
      'Led migration of ACEVA from Magento to Shopify, optimizing performance and user experience',
      'Integrated CRM, scheduling, billing, and patient management systems into unified platform',
      'Established operational procedures and standardized systems for franchise scalability'
    ],
    technologies: ['Infusionsoft API', 'PHP', 'JavaScript', 'MySQL', 'Magento', 'Shopify', 'REST API', 'HTML/CSS', 'CMS'],
    metrics: ['20+ locations supported', 'Multi-location operations', '1000+ practitioners', 'E-commerce platform'],
    category: 'entrepreneurship'
  },
  {
    id: 'aceva',
    company: 'ACEVA (Nutraceutical E-Commerce)',
    role: 'Operations Director & Lead Developer',
    location: 'Peoria, IL',
    startDate: 'January 2011',
    endDate: 'December 2016',
    description: 'Managed operational and technical aspects of nutraceutical e-commerce platform, including platform architecture and migration.',
    logo: {
      initials: 'AC',
      color: '#059669',
      bgColor: '#05966915'
    },
    achievements: [
      'Maintained and optimized Magento-based e-commerce platform for nutraceutical products',
      'Led complete platform migration from Magento to Shopify for improved performance',
      'Implemented inventory management and order fulfillment automation',
      'Configured product catalogs, customer accounts, and payment processing',
      'Optimized checkout flows and user experience for e-commerce conversions',
      'Managed customer data, subscription programs, and recurring billing',
      'Integrated with third-party fulfillment and shipping providers'
    ],
    technologies: ['Magento', 'Shopify', 'E-commerce', 'Inventory Management', 'Payment Processing', 'Liquid', 'PHP'],
    metrics: ['Successful platform migration', 'Improved page load times', 'Increased conversion rates'],
    category: 'full-stack'
  }
  // Additional roles to be extracted from resume HTML files
];
