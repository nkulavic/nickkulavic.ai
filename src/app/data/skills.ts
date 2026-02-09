export interface SkillCategory {
  name: string;
  shortName: string;
  priority: number;
  icon: string;
  description?: string; // Optional brief description
  skills: {
    name: string;
    level: 'expert' | 'advanced' | 'intermediate';
    yearsExperience?: number;
    badge?: string; // Optional badge like "Certified", "Production", etc.
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Machine Learning Systems',
    shortName: 'AI/ML',
    priority: 1,
    icon: '🤖',
    description: 'Production AI/ML systems, LLM integration, and intelligent automation',
    skills: [
      { name: 'AWS Bedrock', level: 'expert', yearsExperience: 2 },
      { name: 'Claude AI (Anthropic)', level: 'expert', yearsExperience: 3 },
      { name: 'OpenAI GPT-4/ChatGPT', level: 'expert', yearsExperience: 3 },
      { name: 'Google Gemini', level: 'expert', yearsExperience: 1 },
      { name: 'Groq (LPU Inference)', level: 'advanced', yearsExperience: 1 },
      { name: 'Cohere', level: 'advanced' },
      { name: 'Hugging Face', level: 'advanced', yearsExperience: 2 },
      { name: 'LangChain', level: 'expert', yearsExperience: 2 },
      { name: 'Prompt Engineering', level: 'expert', yearsExperience: 3 },
      { name: 'Multi-Model AI Orchestration', level: 'expert', yearsExperience: 2 },
      { name: 'RAG (Retrieval-Augmented Generation)', level: 'expert', yearsExperience: 2 },
      { name: 'Vector Databases (Pinecone, Weaviate)', level: 'advanced', yearsExperience: 2 },
      { name: 'PDF Processing & Document AI', level: 'expert', yearsExperience: 3 },
      { name: 'Natural Language Processing', level: 'advanced', yearsExperience: 3 },
      { name: 'AI Agent Development', level: 'expert', yearsExperience: 2 },
      { name: 'Function Calling & Tool Use', level: 'expert', yearsExperience: 2 }
    ]
  },
  {
    name: 'AWS Cloud Platform (Serverless Solutions Architect)',
    shortName: 'AWS',
    priority: 2,
    icon: '☁️',
    description: 'Expert in modern serverless architecture, infrastructure as code, and production-scale AWS systems',
    skills: [
      // Core Serverless Stack (Most Used)
      { name: 'Lambda (Serverless Functions)', level: 'expert', yearsExperience: 10 },
      { name: 'API Gateway (v1 & v2 - HTTP/WebSocket)', level: 'expert', yearsExperience: 10 },
      { name: 'DynamoDB (NoSQL Database)', level: 'expert', yearsExperience: 10 },
      { name: 'S3 (Object Storage)', level: 'expert', yearsExperience: 10 },
      { name: 'IAM (Identity & Access Management)', level: 'expert', yearsExperience: 10 },
      { name: 'CloudWatch (Monitoring & Logs)', level: 'expert', yearsExperience: 10 },
      { name: 'Serverless Framework', level: 'expert', yearsExperience: 10 },

      // Event-Driven Architecture
      { name: 'EventBridge (Event Bus)', level: 'expert', yearsExperience: 5 },
      { name: 'SQS (Message Queues)', level: 'expert', yearsExperience: 8 },
      { name: 'SNS (Pub/Sub Notifications)', level: 'expert', yearsExperience: 10 },
      { name: 'Step Functions (State Machines)', level: 'advanced', yearsExperience: 4 },
      { name: 'Kinesis (Real-time Streaming)', level: 'advanced', yearsExperience: 5 },

      // Security & Authentication
      { name: 'Cognito (User Authentication)', level: 'expert', yearsExperience: 10 },
      { name: 'Secrets Manager', level: 'expert', yearsExperience: 7 },
      { name: 'WAF (Web Application Firewall)', level: 'advanced', yearsExperience: 5 },
      { name: 'Certificate Manager (SSL/TLS)', level: 'expert', yearsExperience: 8 },
      { name: 'CloudTrail (Audit Logging)', level: 'expert', yearsExperience: 8 },

      // Infrastructure as Code & DevOps
      { name: 'CloudFormation (IaC)', level: 'expert', yearsExperience: 8 },
      { name: 'CDK (Cloud Development Kit)', level: 'advanced', yearsExperience: 4 },
      { name: 'SAM (Serverless Application Model)', level: 'expert', yearsExperience: 6 },
      { name: 'Systems Manager (Parameter Store)', level: 'expert', yearsExperience: 6 },

      // Networking & CDN
      { name: 'CloudFront (CDN)', level: 'expert', yearsExperience: 10 },
      { name: 'Route53 (DNS)', level: 'expert', yearsExperience: 10 },
      { name: 'VPC (Virtual Private Cloud)', level: 'expert', yearsExperience: 8 },
      { name: 'Load Balancers (ALB/NLB)', level: 'expert', yearsExperience: 9 },

      // Container Orchestration
      { name: 'Kubernetes (EKS)', level: 'advanced', yearsExperience: 4 },
      { name: 'ECS (Elastic Container Service)', level: 'intermediate', yearsExperience: 3 },

      // Databases & Storage
      { name: 'RDS (PostgreSQL/MySQL)', level: 'expert', yearsExperience: 10 },
      { name: 'Aurora Serverless', level: 'advanced', yearsExperience: 5 },
      { name: 'ElastiCache (Redis)', level: 'advanced', yearsExperience: 5 },
      { name: 'DocumentDB', level: 'intermediate', yearsExperience: 2 },

      // Data & Analytics
      { name: 'Athena (SQL on S3)', level: 'advanced', yearsExperience: 8 },
      { name: 'Glue (ETL & Data Catalog)', level: 'advanced', yearsExperience: 7 },

      // AI/ML Services
      { name: 'Bedrock (Managed AI/LLM)', level: 'expert', yearsExperience: 2 },
      { name: 'Textract (Document AI)', level: 'advanced', yearsExperience: 3 },
      { name: 'Comprehend (NLP)', level: 'advanced', yearsExperience: 3 },

      // Additional Services
      { name: 'SES (Email Service)', level: 'expert', yearsExperience: 10 },
      { name: 'X-Ray (Distributed Tracing)', level: 'advanced', yearsExperience: 5 },
      { name: 'AppSync (GraphQL API)', level: 'advanced', yearsExperience: 3 },
      { name: 'CodePipeline (CI/CD)', level: 'advanced', yearsExperience: 6 },
      { name: 'Elastic Beanstalk', level: 'advanced', yearsExperience: 8 },
      { name: 'EC2 (When needed)', level: 'advanced', yearsExperience: 10 }
    ]
  },
  {
    name: 'Google Cloud Platform',
    shortName: 'GCP',
    priority: 3,
    icon: '🌩️',
    description: 'Google Cloud services, AI/ML, and data analytics',
    skills: [
      { name: 'Cloud Functions', level: 'expert', yearsExperience: 5 },
      { name: 'Cloud Run', level: 'advanced', yearsExperience: 3 },
      { name: 'Compute Engine', level: 'advanced', yearsExperience: 5 },
      { name: 'App Engine', level: 'advanced', yearsExperience: 4 },
      { name: 'Cloud Storage', level: 'expert', yearsExperience: 6 },
      { name: 'Firestore', level: 'advanced', yearsExperience: 4 },
      { name: 'Cloud SQL', level: 'advanced', yearsExperience: 5 },
      { name: 'BigQuery (Data Warehouse)', level: 'advanced', yearsExperience: 5 },
      { name: 'Pub/Sub (Messaging)', level: 'advanced', yearsExperience: 4 },
      { name: 'Cloud Tasks', level: 'advanced', yearsExperience: 3 },
      { name: 'Cloud Scheduler', level: 'expert', yearsExperience: 5 },
      { name: 'Vertex AI', level: 'advanced', yearsExperience: 2 },
      { name: 'Gemini API', level: 'expert', yearsExperience: 1 },
      { name: 'Firebase', level: 'advanced', yearsExperience: 5 },
      { name: 'Identity Platform', level: 'advanced', yearsExperience: 4 },
      { name: 'API Gateway', level: 'advanced', yearsExperience: 4 },
      { name: 'Cloud CDN', level: 'advanced', yearsExperience: 4 },
      { name: 'Cloud Load Balancing', level: 'advanced', yearsExperience: 4 }
    ]
  },
  {
    name: 'Backend Development & APIs',
    shortName: 'Backend',
    priority: 4,
    icon: '⚙️',
    description: 'Server-side development, API design, and microservices',
    skills: [
      { name: 'Go (Golang)', level: 'expert', yearsExperience: 3 },
      { name: 'Node.js', level: 'expert', yearsExperience: 10 },
      { name: 'Python', level: 'advanced', yearsExperience: 5 },
      { name: 'TypeScript', level: 'expert', yearsExperience: 6 },
      { name: 'REST API Design', level: 'expert', yearsExperience: 12 },
      { name: 'GraphQL', level: 'advanced', yearsExperience: 4 },
      { name: 'API Gateway v2 (WebSocket & HTTP)', level: 'expert', yearsExperience: 5 },
      { name: 'Express.js', level: 'expert', yearsExperience: 10 },
      { name: 'Streaming APIs (SSE)', level: 'expert', yearsExperience: 3 },
      { name: 'WebSockets (Real-time)', level: 'advanced', yearsExperience: 5 },
      { name: 'Serverless Functions', level: 'expert', yearsExperience: 10 },
      { name: 'Microservices Architecture', level: 'expert', yearsExperience: 7 },
      { name: 'Event-Driven Architecture', level: 'expert', yearsExperience: 6 },
      { name: 'API Rate Limiting & Throttling', level: 'expert', yearsExperience: 8 },
      { name: 'API Versioning', level: 'expert', yearsExperience: 9 },
      { name: 'Webhook Systems', level: 'expert', yearsExperience: 8 }
    ]
  },
  {
    name: 'Frontend Development',
    shortName: 'Frontend',
    priority: 5,
    icon: '🎨',
    description: 'Modern web interfaces, responsive design, and user experience',
    skills: [
      { name: 'React', level: 'expert', yearsExperience: 7 },
      { name: 'Next.js (App Router & Pages)', level: 'expert', yearsExperience: 4 },
      { name: 'SvelteKit', level: 'advanced', yearsExperience: 2 },
      { name: 'TypeScript', level: 'expert', yearsExperience: 6 },
      { name: 'JavaScript (ES6+)', level: 'expert', yearsExperience: 14 },
      { name: 'Tailwind CSS', level: 'expert', yearsExperience: 3 },
      { name: 'Material UI', level: 'advanced', yearsExperience: 4 },
      { name: 'Framer Motion (Animations)', level: 'advanced', yearsExperience: 2 },
      { name: 'HTML5/CSS3', level: 'expert', yearsExperience: 14 },
      { name: 'Responsive Design', level: 'expert', yearsExperience: 12 },
      { name: 'Progressive Web Apps (PWA)', level: 'advanced', yearsExperience: 4 },
      { name: 'Server-Side Rendering (SSR)', level: 'expert', yearsExperience: 5 },
      { name: 'Static Site Generation (SSG)', level: 'expert', yearsExperience: 5 },
      { name: 'State Management (Redux, Zustand)', level: 'advanced', yearsExperience: 6 }
    ]
  },
  {
    name: 'CRM & Marketing Automation Platforms',
    shortName: 'CRM/Marketing',
    priority: 6,
    icon: '📊',
    description: 'All major CRM systems and marketing automation platforms',
    skills: [
      // Major CRMs
      { name: 'Salesforce (Sales Cloud, Service Cloud)', level: 'expert', yearsExperience: 10 },
      { name: 'Infusionsoft/Keap', level: 'expert', yearsExperience: 10 },
      { name: 'HubSpot (CRM, Marketing, Sales)', level: 'expert', yearsExperience: 6 },
      { name: 'Zoho CRM', level: 'advanced', yearsExperience: 4 },
      { name: 'Pipedrive', level: 'advanced', yearsExperience: 3 },
      { name: 'Microsoft Dynamics 365', level: 'advanced', yearsExperience: 3 },
      { name: 'Freshsales', level: 'intermediate', yearsExperience: 2 },

      // Marketing Automation
      { name: 'ActiveCampaign', level: 'expert', yearsExperience: 5 },
      { name: 'Marketo', level: 'advanced', yearsExperience: 3 },
      { name: 'Pardot', level: 'advanced', yearsExperience: 3 },
      { name: 'MailChimp', level: 'expert', yearsExperience: 7 },
      { name: 'Constant Contact', level: 'advanced', yearsExperience: 5 },
      { name: 'Drip', level: 'advanced', yearsExperience: 3 },
      { name: 'ConvertKit', level: 'advanced', yearsExperience: 3 },

      // Sales & Lead Management
      { name: 'Close.com', level: 'advanced', yearsExperience: 2 },
      { name: 'Outreach.io', level: 'intermediate', yearsExperience: 2 }
    ]
  },
  {
    name: 'Business & Productivity Platforms',
    shortName: 'Business',
    priority: 7,
    icon: '🔗',
    description: 'Project management, collaboration, and business automation tools',
    skills: [
      // Project Management
      { name: 'Teamwork.com', level: 'expert', yearsExperience: 6 },
      { name: 'Asana', level: 'expert', yearsExperience: 5 },
      { name: 'Monday.com', level: 'advanced', yearsExperience: 4 },
      { name: 'ClickUp', level: 'advanced', yearsExperience: 3 },
      { name: 'Jira', level: 'advanced', yearsExperience: 6 },
      { name: 'Trello', level: 'expert', yearsExperience: 8 },
      { name: 'Basecamp', level: 'advanced', yearsExperience: 5 },

      // Data & Spreadsheets
      { name: 'Airtable', level: 'expert', yearsExperience: 5 },
      { name: 'Google Sheets API', level: 'expert', yearsExperience: 8 },
      { name: 'Notion API', level: 'advanced', yearsExperience: 3 },

      // Automation
      { name: 'Zapier', level: 'expert', yearsExperience: 7 },
      { name: 'Make (Integromat)', level: 'advanced', yearsExperience: 4 },
      { name: 'n8n', level: 'advanced', yearsExperience: 2 },

      // Document Management
      { name: 'DocuSign', level: 'advanced', yearsExperience: 4 },
      { name: 'PandaDoc', level: 'advanced', yearsExperience: 3 },

      // Support & Helpdesk
      { name: 'Zendesk', level: 'expert', yearsExperience: 6 },
      { name: 'Intercom', level: 'advanced', yearsExperience: 4 },
      { name: 'Help Scout', level: 'advanced', yearsExperience: 3 },
      { name: 'Freshdesk', level: 'advanced', yearsExperience: 3 }
    ]
  },
  {
    name: 'E-commerce & Payment Platforms',
    shortName: 'E-commerce',
    priority: 8,
    icon: '🛒',
    description: 'Online stores, payment processing, and subscription management',
    skills: [
      // E-commerce Platforms
      { name: 'Shopify (Plus)', level: 'expert', yearsExperience: 7 },
      { name: 'WooCommerce', level: 'expert', yearsExperience: 7 },
      { name: 'Magento', level: 'advanced', yearsExperience: 6 },
      { name: 'BigCommerce', level: 'advanced', yearsExperience: 4 },
      { name: 'WordPress', level: 'expert', yearsExperience: 10 },

      // Payment Gateways
      { name: 'Stripe', level: 'expert', yearsExperience: 8 },
      { name: 'PayPal', level: 'expert', yearsExperience: 10 },
      { name: 'Square', level: 'advanced', yearsExperience: 5 },
      { name: 'Authorize.net', level: 'advanced', yearsExperience: 6 },
      { name: 'Braintree', level: 'advanced', yearsExperience: 4 },

      // Subscription & Billing
      { name: 'Stripe Billing', level: 'expert', yearsExperience: 6 },
      { name: 'Chargebee', level: 'advanced', yearsExperience: 3 },
      { name: 'Recurly', level: 'intermediate', yearsExperience: 2 }
    ]
  },
  {
    name: 'Communication & Messaging APIs',
    shortName: 'Comms',
    priority: 9,
    icon: '💬',
    description: 'SMS, email, video, and real-time communication',
    skills: [
      // SMS & Voice
      { name: 'Twilio (SMS, Voice, Video)', level: 'expert', yearsExperience: 7 },
      { name: 'Plivo', level: 'advanced', yearsExperience: 3 },

      // Email
      { name: 'SendGrid', level: 'expert', yearsExperience: 8 },
      { name: 'AWS SES', level: 'expert', yearsExperience: 10 },
      { name: 'Postmark', level: 'advanced', yearsExperience: 4 },
      { name: 'Mandrill', level: 'advanced', yearsExperience: 5 },

      // Collaboration
      { name: 'Slack API', level: 'expert', yearsExperience: 5 },
      { name: 'Microsoft Teams', level: 'advanced', yearsExperience: 3 },
      { name: 'Discord API', level: 'intermediate', yearsExperience: 2 },

      // Video & Webinars
      { name: 'Zoom API', level: 'advanced', yearsExperience: 4 },
      { name: 'GoToWebinar', level: 'expert', yearsExperience: 6 },
      { name: 'Calendly', level: 'expert', yearsExperience: 5 }
    ]
  },
  {
    name: 'Databases & Data Storage',
    shortName: 'Databases',
    priority: 10,
    icon: '🗄️',
    description: 'SQL, NoSQL, and specialized data stores',
    skills: [
      // NoSQL
      { name: 'DynamoDB', level: 'expert', yearsExperience: 10 },
      { name: 'MongoDB', level: 'expert', yearsExperience: 6 },
      { name: 'Firestore', level: 'advanced', yearsExperience: 4 },
      { name: 'Redis', level: 'advanced', yearsExperience: 5 },

      // SQL
      { name: 'PostgreSQL', level: 'expert', yearsExperience: 8 },
      { name: 'MySQL', level: 'expert', yearsExperience: 12 },
      { name: 'Aurora (AWS)', level: 'advanced', yearsExperience: 6 },

      // Specialized
      { name: 'Elasticsearch', level: 'advanced', yearsExperience: 4 },
      { name: 'Vector Databases (Pinecone)', level: 'advanced', yearsExperience: 2 },
      { name: 'Database Design & Optimization', level: 'expert', yearsExperience: 12 },
      { name: 'Database Migrations', level: 'expert', yearsExperience: 10 }
    ]
  },
  {
    name: 'DevOps, CI/CD & Infrastructure',
    shortName: 'DevOps',
    priority: 11,
    icon: '🛠️',
    description: 'Deployment automation, monitoring, and infrastructure as code',
    skills: [
      { name: 'GitHub Actions', level: 'expert', yearsExperience: 5 },
      { name: 'GitLab CI/CD', level: 'advanced', yearsExperience: 4 },
      { name: 'Jenkins', level: 'advanced', yearsExperience: 5 },
      { name: 'CircleCI', level: 'advanced', yearsExperience: 4 },
      { name: 'AWS CodePipeline', level: 'advanced', yearsExperience: 6 },
      { name: 'Terraform', level: 'advanced', yearsExperience: 4 },
      { name: 'CloudFormation', level: 'expert', yearsExperience: 8 },
      { name: 'Docker', level: 'advanced', yearsExperience: 5 },
      { name: 'Kubernetes', level: 'intermediate', yearsExperience: 3 },
      { name: 'Git', level: 'expert', yearsExperience: 12 },
      { name: 'Vercel', level: 'expert', yearsExperience: 4 },
      { name: 'Netlify', level: 'advanced', yearsExperience: 5 },
      { name: 'Production Monitoring', level: 'expert', yearsExperience: 12 },
      { name: 'Automated Testing', level: 'expert', yearsExperience: 10 },
      { name: 'Infrastructure as Code', level: 'expert', yearsExperience: 8 }
    ]
  },
  {
    name: 'Security & Compliance',
    shortName: 'Security',
    priority: 12,
    icon: '🔒',
    description: 'Security best practices, compliance, and data protection',
    skills: [
      { name: 'SOC 2 Compliance', level: 'expert', yearsExperience: 3 },
      { name: 'JWT Authentication', level: 'expert', yearsExperience: 8 },
      { name: 'OAuth 2.0', level: 'expert', yearsExperience: 10 },
      { name: 'Data Encryption (at rest & in transit)', level: 'expert', yearsExperience: 10 },
      { name: 'API Security', level: 'expert', yearsExperience: 12 },
      { name: 'GDPR Compliance', level: 'advanced', yearsExperience: 5 },
      { name: 'HIPAA Compliance', level: 'intermediate', yearsExperience: 2 },
      { name: 'Penetration Testing', level: 'intermediate', yearsExperience: 4 },
      { name: 'Security Audits', level: 'advanced', yearsExperience: 6 },
      { name: 'Zero-Trust Architecture', level: 'advanced', yearsExperience: 4 }
    ]
  },
  {
    name: 'Business & Leadership',
    shortName: 'Leadership',
    priority: 13,
    icon: '💼',
    description: 'Product strategy, team leadership, and business development',
    skills: [
      { name: 'SaaS Product Development', level: 'expert', yearsExperience: 10, badge: 'Founder' },
      { name: 'Technical Architecture', level: 'expert', yearsExperience: 12 },
      { name: 'Solutions Architecture', level: 'expert', yearsExperience: 10 },
      { name: 'Technical Leadership', level: 'expert', yearsExperience: 8 },
      { name: 'Entrepreneurship', level: 'expert', yearsExperience: 10, badge: '3 Companies' },
      { name: 'Project Management', level: 'expert', yearsExperience: 12 },
      { name: 'Client Communication', level: 'expert', yearsExperience: 14 },
      { name: 'Requirements Gathering', level: 'expert', yearsExperience: 12 },
      { name: 'Technical Documentation', level: 'expert', yearsExperience: 12 },
      { name: 'API Strategy & Design', level: 'expert', yearsExperience: 10 }
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

// Get skills with Production badge
export function getProductionSkills() {
  return skillCategories.flatMap(category =>
    category.skills
      .filter(skill => skill.badge === 'Production')
      .map(skill => ({ ...skill, category: category.name }))
  );
}

// Get count of skills by level
export function getSkillCounts() {
  const counts = {
    expert: 0,
    advanced: 0,
    intermediate: 0,
    total: 0
  };

  skillCategories.forEach(category => {
    category.skills.forEach(skill => {
      counts[skill.level]++;
      counts.total++;
    });
  });

  return counts;
}
