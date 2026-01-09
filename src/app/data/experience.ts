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
    imagePath?: string;
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
    description: 'Building enterprise AI-powered applications for the mortgage industry, working across .NET, SvelteKit, and serverless AWS architectures with focus on scalability, security, and compliance.',
    logo: {
      initials: 'T3',
      color: '#0066FF',
      bgColor: '#0066FF15',
      imagePath: '/images/companies/take3tech.png'
    },
    achievements: [
      'Architected and maintained LoanMaps, a comprehensive .NET loan origination system built across multiple .NET versions (4.6+) serving 500+ loan officers, handling the entire mortgage process end-to-end',
      'Built the engine for RuleTool using SvelteKit and PostgreSQL, processing overlay guidelines and investor PDFs to enable AI-powered querying of agency guidelines and lending requirements',
      'Integrated multiple AI models (Groq, Gemini, AWS Bedrock/Claude) for intelligent document processing and natural language queries, achieving 80% faster processing times',
      'Implemented Better Auth authentication system for RuleTool with secure user management',
      'Developed PDF parsing and data extraction pipeline for mortgage investor guidelines and agency requirements',
      'Created AI query system allowing users to ask questions about complex lending guidelines in natural language',
      'Developed database migration workflows for PostgreSQL, ensuring zero-downtime schema updates',
      'Achieved SOC 2 compliance with zero security breaches across all applications',
      'Leveraged Claude Code and advanced AI tooling daily for accelerated development',
      'Maintained and enhanced legacy .NET codebase while modernizing architecture incrementally',
      'Established robust CI/CD pipelines with GitHub Actions for automated deployments',
      'Implemented real-time collaboration features with WebSocket architecture'
    ],
    technologies: ['.NET', 'C#', '.NET Framework 4.6+', 'SvelteKit', 'PostgreSQL', 'Better Auth', 'Database Migrations', 'Groq', 'Gemini', 'AWS Bedrock', 'Claude AI', 'PDF Processing', 'Node.js', 'TypeScript', 'React', 'AWS Lambda', 'DynamoDB', 'Next.js', 'WebSockets', 'GitHub Actions'],
    metrics: ['500+ active users', 'SOC 2 compliant', '99.9% uptime', '80% faster processing', 'Full mortgage lifecycle'],
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
      bgColor: '#8B5CF615',
      imagePath: '/images/companies/listbackup.svg'
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
    description: 'Founded and scaled profitable SaaS business on comprehensive AWS infrastructure, leveraging 12+ AWS services since 2015 for API integration and automation solutions.',
    logo: {
      initials: 'MF',
      color: '#0891B2',
      bgColor: '#0891B215',
      imagePath: '/images/companies/myfusion.png'
    },
    achievements: [
      'Generated $1.2M+ in cumulative revenue through sustainable SaaS model built entirely on AWS',
      'Architected production AWS infrastructure using Lambda, API Gateway, DynamoDB, S3, Cognito, and 7+ additional services',
      'Processed 33,000+ recurring orders across six continents with serverless AWS Lambda functions',
      'Engineered REST API handling 2M+ monthly requests with 99.9% uptime using API Gateway and Lambda',
      'Implemented AWS Cognito for user authentication and authorization across 2,000+ active users',
      'Built data analytics pipeline with AWS Athena and Glue for business intelligence and reporting',
      'Leveraged CloudFront CDN and Route53 for global content delivery and DNS management',
      'Integrated SES for transactional emails and SNS for real-time notifications and alerts',
      'Deployed monitoring and logging with CloudWatch for operational visibility across all services',
      'Utilized Elastic Beanstalk for scalable application hosting and automatic deployments',
      'Built comprehensive API ecosystem connecting 30+ platforms (Salesforce, HubSpot, Twilio, SendGrid, Stripe)',
      'Developed MyFusion Helper, a React-based CRM extension with 50+ helper applets',
      'Created webhook processing system for real-time data synchronization',
      'Built custom workflow builder for non-technical users'
    ],
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'Athena', 'Glue', 'CloudFront', 'Route53', 'SES', 'SNS', 'CloudWatch', 'Elastic Beanstalk', 'Node.js', 'React', 'REST API', 'Infusionsoft/Keap', 'Stripe', 'Webhooks', 'OAuth'],
    metrics: ['$1.2M+ revenue', '33,000+ orders', '2M+ monthly API requests', '30+ integrations', '12+ AWS services', '2,000+ active users'],
    category: 'entrepreneurship'
  },
  {
    id: 'alignlife',
    company: 'AlignLife Franchise',
    role: 'Director of Automation & Lead Developer',
    location: 'Peoria, IL',
    startDate: 'January 2011',
    endDate: 'December 2016',
    description: 'Built complete franchise technology stack with deep platform integrations connecting Teamwork.com, WordPress, Zendesk, Magento, and Shopify for chiropractic practice management.',
    logo: {
      initials: 'AL',
      color: '#10B981',
      bgColor: '#10B98115',
      imagePath: '/images/companies/alignlife.svg'
    },
    achievements: [
      'Architected deeply integrated Teamwork.com project management system connecting WordPress, Zendesk, Magento, and Shopify',
      'Built custom Teamwork.com API integrations for franchise operations, task automation, and cross-platform synchronization',
      'Designed automated workflows bridging patient management (WordPress), support tickets (Zendesk), and e-commerce (Magento/Shopify)',
      'Developed unified franchise technology infrastructure serving 20+ chiropractic locations with real-time data flow',
      'Created WordPress-based patient websites with custom scheduling integration and Teamwork.com task tracking',
      'Implemented Zendesk support system integrated with Teamwork.com for seamless ticket-to-task conversion',
      'Built Infusionsoft automation workflows for drip campaigns, patient recalls, and staff task management',
      'Led ACEVA.com migration from Magento to Shopify with integrated order tracking in Teamwork.com',
      'Engineered cross-platform API layer connecting CRM, scheduling, billing, support, and e-commerce systems',
      'Established operational procedures and standardized systems for franchise scalability'
    ],
    technologies: ['Teamwork.com API', 'WordPress', 'Zendesk API', 'Magento', 'Shopify', 'Infusionsoft API', 'PHP', 'JavaScript', 'MySQL', 'REST API', 'OAuth', 'Webhooks'],
    metrics: ['20+ locations supported', '5+ platform integrations', '1000+ practitioners', 'Real-time sync'],
    category: 'full-stack'
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
      bgColor: '#05966915',
      imagePath: '/images/companies/aceva.png'
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
