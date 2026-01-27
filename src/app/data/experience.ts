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
    description: 'Leading AI infrastructure and platform engineering for enterprise mortgage SaaS serving 500+ loan officers. Architected AI-powered document processing pipeline (AWS Bedrock + Claude) achieving 80% performance improvement. Full ownership of serverless AWS stack, CI/CD pipelines, and SOC 2 compliance—zero security breaches.',
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
      'Maintained SOC 2 compliant development workflows with zero security breaches',
      'Leveraged Claude Code and advanced AI tooling daily for accelerated development',
      'Maintained and enhanced legacy .NET codebase while modernizing architecture incrementally',
      'Established robust CI/CD pipelines with GitHub Actions for automated deployments',
      'Implemented real-time collaboration features with WebSocket architecture'
    ],
    technologies: ['.NET', 'C#', '.NET Framework 4.6+', 'SvelteKit', 'PostgreSQL', 'Better Auth', 'Database Migrations', 'Groq', 'Gemini', 'AWS Bedrock', 'Claude AI', 'PDF Processing', 'Node.js', 'TypeScript', 'React', 'AWS Lambda', 'DynamoDB', 'Next.js', 'WebSockets', 'GitHub Actions', 'MLOps', 'CI/CD', 'DevOps', 'Infrastructure as Code', 'SOC 2 Compliance'],
    metrics: ['2,000 users', 'SOC 2 compliant', '99.9% uptime', '80% faster processing', 'Full mortgage lifecycle'],
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
      imagePath: '/images/companies/listbackup.ico'
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
    description: 'Founded and scaled profitable SaaS business built entirely on AWS infrastructure, creating deep API integrations with 30+ platforms including Salesforce, HubSpot, Twilio, SendGrid, Google Sheets, Stripe, Zoom, Calendly, and every major CRM.',
    logo: {
      initials: 'MF',
      color: '#0891B2',
      bgColor: '#0891B215',
      imagePath: '/images/companies/myfusion.png'
    },
    achievements: [
      'Generated $1.7M+ in cumulative revenue through sustainable SaaS model built entirely on AWS since 2015',
      'Architected production AWS infrastructure using 12+ services: Lambda, API Gateway, DynamoDB, S3, Cognito, Athena, Glue, CloudFront, Route53, SES, SNS, CloudWatch, Elastic Beanstalk',
      'Developed MyFusion Helper with 60+ helper integrations for Infusionsoft/Keap, serving 2,000+ active users',
      'Built "Google Sheet It" - flagship helper syncing CRM data to Google Sheets with automated refresh and scheduling',
      'Integrated extensive Salesforce API connections for data synchronization and workflow automation (since 2015)',
      'Created deep integrations with communication platforms: Twilio (SMS/Voice), SendGrid (email delivery), Slack (notifications), Zoom (meetings)',
      'Developed productivity integrations: Google Sheets API, Calendly (scheduling), Trello (tasks), Dropbox (files)',
      'Built webinar platform integrations: GoToWebinar registration and attendance tracking',
      'Implemented video platform integrations: YouTube, Wistia, Vimeo for engagement tracking',
      'Engineered payment integrations: Stripe for subscription billing and payment processing',
      'Built Facebook Lead Ads and Custom Audiences integration for marketing automation',
      'Processed transactions across six continents with serverless AWS Lambda functions',
      'Engineered REST API handling 2M+ monthly requests with 99.9% uptime',
      'Created webhook processing system for real-time data synchronization across all platforms',
      'Built custom workflow builder for non-technical users to create complex automation'
    ],
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'Athena', 'Glue', 'CloudFront', 'Route53', 'SES', 'SNS', 'CloudWatch', 'Elastic Beanstalk', 'Node.js', 'React', 'Salesforce API', 'Google Sheets API', 'Twilio', 'SendGrid', 'Stripe', 'Slack', 'Zoom', 'Calendly', 'Trello', 'Facebook API', 'GoToWebinar', 'Infusionsoft/Keap', 'Webhooks', 'OAuth', 'REST API'],
    metrics: ['$1.7M+ revenue', '2M+ monthly API requests', '60+ helper integrations', '30+ platform APIs', '12+ AWS services', '2,000+ active users'],
    category: 'entrepreneurship'
  },
  {
    id: 'alignlife',
    company: 'AlignLife Franchise',
    role: 'Director of Automation & Lead Developer',
    location: 'Peoria, IL',
    startDate: 'January 2011',
    endDate: 'December 2016',
    description: 'Scaled franchise technology infrastructure from 3 to 30 locations during tenure. Built complete technology stack integrating Teamwork.com, WordPress, Zendesk, and e-commerce platforms to support Five Star Services: Chiropractic, Toxin Elimination, Nutrition Enhancement, Hormone Balance, and Weight Loss programs.',
    logo: {
      initials: 'AL',
      color: '#10B981',
      bgColor: '#10B98115',
      imagePath: '/images/companies/alignlife.svg'
    },
    achievements: [
      'Scaled franchise technology infrastructure supporting growth from 3 to 30 locations across multiple states',
      'Architected deeply integrated Teamwork.com project management system connecting WordPress, Zendesk, Magento, and Shopify',
      'Built unified technology platform supporting Five Star Services: Chiropractic, Toxin Elimination, Nutrition Enhancement, Hormone Balance, and Weight Loss',
      'Designed automated workflows bridging patient management (WordPress), support tickets (Zendesk), and e-commerce (Magento/Shopify)',
      'Developed franchise-wide technology infrastructure enabling rapid location expansion with standardized systems',
      'Created WordPress-based patient websites with custom scheduling integration and Teamwork.com task tracking for each location',
      'Implemented Zendesk support system integrated with Teamwork.com for seamless ticket-to-task conversion across all franchises',
      'Built Infusionsoft automation workflows for drip campaigns, patient recalls, and multi-location staff task management',
      'Led ACEVA.com e-commerce platform migration and integration with franchise operations',
      'Engineered cross-platform API layer connecting CRM, scheduling, billing, support, and e-commerce systems',
      'Established operational procedures and standardized technology playbook enabling 10x franchise growth'
    ],
    technologies: ['Teamwork.com API', 'WordPress', 'Zendesk API', 'Magento', 'Shopify', 'Infusionsoft API', 'PHP', 'JavaScript', 'MySQL', 'REST API', 'OAuth', 'Webhooks'],
    metrics: ['3→30 locations', '10x growth', '5+ platform integrations', 'Multi-state expansion'],
    category: 'full-stack'
  },
  {
    id: 'aceva',
    company: 'ACEVA (Nutraceutical E-Commerce)',
    role: 'Operations Director & Lead Developer',
    location: 'Peoria, IL',
    startDate: 'January 2011',
    endDate: 'December 2016',
    description: 'Built end-to-end e-commerce platform for nutraceutical company serving 100+ wholesale practitioner locations nationwide. Architected recurring subscription system, wholesale pricing tiers, and complete platform migration from Magento to Shopify.',
    logo: {
      initials: 'AC',
      color: '#059669',
      bgColor: '#05966915',
      imagePath: '/images/companies/aceva.png'
    },
    achievements: [
      'Built end-to-end e-commerce platform serving 100+ wholesale practitioner locations across the country',
      'Architected recurring subscription system for nutraceutical auto-ship programs with flexible scheduling',
      'Developed wholesale/practitioner pricing tier system with custom discount structures and volume pricing',
      'Led complete platform migration from Magento to Shopify, improving performance and reducing maintenance overhead',
      'Implemented multi-tier customer hierarchy: retail customers, wholesale practitioners, and franchise locations',
      'Built automated inventory management system syncing across e-commerce and wholesale channels',
      'Created practitioner portal for wholesale ordering, patient recommendations, and commission tracking',
      'Engineered integration between ACEVA e-commerce and AlignLife franchise CRM systems',
      'Developed automated fulfillment workflows with third-party logistics providers',
      'Implemented subscription billing with Stripe including failed payment recovery and dunning management',
      'Optimized checkout flows and product pages resulting in improved conversion rates'
    ],
    technologies: ['Magento', 'Shopify', 'Shopify Liquid', 'E-commerce', 'Subscription Billing', 'Stripe', 'Inventory Management', 'Wholesale Pricing', 'PHP', 'JavaScript', 'REST API'],
    metrics: ['100+ wholesale locations', 'Recurring subscriptions', 'Nationwide distribution', 'Platform migration'],
    category: 'full-stack'
  }
  // Additional roles to be extracted from resume HTML files
];
