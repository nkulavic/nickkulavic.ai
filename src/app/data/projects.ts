export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'ai' | 'saas' | 'api' | 'full-stack';
  featured: boolean;
  group?: string; // Optional grouping for related projects (e.g., "mortgage-tech")
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  image: string;
  metrics?: { label: string; value: string }[];
  highlights: string[];
}

// Project group display names
export const projectGroups: Record<string, string> = {
  'mortgage-tech': 'Mortgage Tech Suite'
};

export const projects: Project[] = [
  {
    id: 'loanmaps',
    title: 'LoanMaps',
    subtitle: 'Enterprise Loan Origination System',
    description: 'AI-powered mortgage application platform serving 500+ loan officers with SOC 2 compliance',
    longDescription: 'Enterprise-grade loan origination system built with Next.js, AWS Lambda, and Claude AI. Features real-time collaboration, document processing, and compliance tracking for mortgage lending operations.',
    technologies: ['Next.js', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Claude AI', 'AWS Bedrock', 'WebSockets', 'S3'],
    category: 'ai',
    featured: true,
    group: 'mortgage-tech',
    links: {},
    image: '/projects/loanmaps-placeholder.png',
    metrics: [
      { label: 'Active Users', value: '500+' },
      { label: 'Compliance', value: 'SOC 2' },
      { label: 'Uptime', value: '99.9%' }
    ],
    highlights: [
      'AI-driven document processing with AWS Bedrock',
      'Real-time collaboration features',
      'Enterprise security and compliance',
      'Scalable serverless architecture',
      'Automated workflow management',
      'Integration with major mortgage platforms'
    ]
  },
  {
    id: 'ruletool',
    title: 'RuleTool',
    subtitle: 'AI-Driven PDF Processing Platform',
    description: 'Intelligent rule processing for mortgage lending with 80% faster processing times',
    longDescription: 'AI system using AWS Bedrock and Claude for automated guideline interpretation and rule processing. Processes complex mortgage lending rules from PDF documents with natural language understanding.',
    technologies: ['Node.js', 'AWS Bedrock', 'S3', 'Lambda', 'PDF.js', 'Claude AI', 'TypeScript'],
    category: 'ai',
    featured: true,
    group: 'mortgage-tech',
    links: {},
    image: '/projects/ruletool-placeholder.png',
    metrics: [
      { label: 'Processing Speed', value: '80% faster' },
      { label: 'Accuracy', value: '98%+' }
    ],
    highlights: [
      'Natural language rule interpretation',
      'Automated guideline updates',
      'PDF overlay generation',
      'Integration with existing systems',
      'Real-time processing',
      'Version control for rules'
    ]
  },
  {
    id: 'listbackup',
    title: 'ListBackup.ai',
    subtitle: 'AI-Powered Data Backup Platform',
    description: 'AI-powered backup platform connecting 50+ business tools with intelligent automation and enterprise security',
    longDescription: 'AI-powered data backup and integration platform for modern businesses. Connects to 50+ business tools across CRM, payments, email marketing, and e-commerce. Features intelligent data mapping, predictive analytics, smart alerts, enterprise hierarchy, and AES-256 encryption with multi-region storage.',
    technologies: ['Go', 'Node.js', 'Next.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'TypeScript', 'AWS Bedrock', 'Claude AI'],
    category: 'saas',
    featured: true,
    links: { live: 'https://listbackup.ai' },
    image: '/projects/listbackup-placeholder.png',
    metrics: [
      { label: 'Integrations', value: '50+' },
      { label: 'Security Breaches', value: '0' },
      { label: 'Storage', value: 'Multi-region' }
    ],
    highlights: [
      '50+ platform integrations (Keap, HubSpot, Salesforce, Stripe, Shopify, Mailchimp, ActiveCampaign)',
      'AI-powered intelligent data mapping and predictive analytics',
      'Go & Node.js Lambda microservices with delta sync optimization',
      'Enterprise hierarchy with unlimited nesting and role-based access',
      'AES-256 encryption with multi-region storage redundancy',
      'Point-in-time recovery with version control and audit trails',
      'Real-time webhook synchronization with smart anomaly alerts'
    ]
  },
  {
    id: 'myfusion-helper',
    title: 'MyFusion Helper',
    subtitle: 'CRM Extension Platform',
    description: '50+ helper applets extending Infusionsoft with API integrations',
    longDescription: 'Industry-leading CRM extension processing 2M+ monthly API requests. Features custom workflow builder, webhook processing, and integrations with 30+ third-party platforms.',
    technologies: ['React', 'Node.js', 'REST API', 'AWS Lambda', 'API Gateway', 'OAuth', 'Webhooks'],
    category: 'api',
    featured: true,
    links: { live: 'https://myfusionhelper.com' },
    image: '/projects/myfusion-helper-placeholder.png',
    metrics: [
      { label: 'Active Users', value: '2,000+' },
      { label: 'API Requests', value: '2M+/month' },
      { label: 'Revenue', value: '$1.7M+' }
    ],
    highlights: [
      '30+ third-party integrations (Salesforce, HubSpot, Twilio, etc.)',
      'Real-time webhook processing',
      'Custom workflow builder for non-technical users',
      'Enterprise billing system with Stripe',
      'OAuth authentication for secure connections',
      'Comprehensive API documentation'
    ]
  },
  {
    id: 'myfusion-solutions',
    title: 'MyFusion Solutions',
    subtitle: 'API Integration Platform',
    description: 'Comprehensive API ecosystem connecting 30+ platforms with 2M+ monthly requests',
    longDescription: 'Scalable API integration platform built on AWS serverless infrastructure. Processes millions of API requests monthly with 99.9% uptime.',
    technologies: ['Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'REST API', 'OAuth', 'Stripe'],
    category: 'api',
    featured: true,
    links: { live: 'https://myfusionsolutions.com' },
    image: '/projects/myfusion-solutions-placeholder.png',
    metrics: [
      { label: 'Revenue', value: '$1.7M+' },
      { label: 'Active Users', value: '2,000+' },
      { label: 'Integrations', value: '60+' }
    ],
    highlights: [
      'Serverless architecture with AWS Lambda',
      'Multi-platform API integration',
      'Automated billing and subscription management',
      'Real-time data synchronization',
      'Webhook-based event processing',
      'Comprehensive error handling and logging'
    ]
  }
];
