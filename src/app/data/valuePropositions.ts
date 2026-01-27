// "What Sets Me Apart" section data

export interface ValueProposition {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export const valuePropositions: ValueProposition[] = [
  {
    id: 'ship-fast',
    icon: '🚀',
    title: 'Ship Fast, Ship Right',
    description: 'From zero to production in weeks, not months. Architected complete CI/CD pipelines and infrastructure for enterprise SaaS platforms while maintaining SOC 2 compliance and zero security breaches.',
    gradient: 'from-gray-800/80 via-gray-900/90 to-black'
  },
  {
    id: 'revenue-focused',
    icon: '💰',
    title: 'Revenue-Focused Engineering',
    description: '$1.7M+ generated across 3 ventures. I build products that customers pay for, not just impressive tech demos. Every line of code drives business value.',
    gradient: 'from-gray-800/80 via-gray-900/90 to-black'
  },
  {
    id: 'ai-first',
    icon: '🤖',
    title: 'AI-First Mindset',
    description: 'Daily user of Claude Code, AWS Bedrock, and modern AI tooling. I leverage AI to 10x productivity while building AI products that solve real problems.',
    gradient: 'from-gray-800/80 via-gray-900/90 to-black'
  },
  {
    id: 'aws-expert',
    icon: '☁️',
    title: 'AWS Architecture Expert',
    description: '10+ years building production AWS infrastructure—Lambda, DynamoDB, Bedrock, API Gateway, Cognito. I architect serverless systems handling 2M+ monthly requests with full CI/CD automation, monitoring, and cost optimization.',
    gradient: 'from-gray-800/80 via-gray-900/90 to-black'
  },
  {
    id: 'full-stack',
    icon: '🔧',
    title: 'Full-Stack Versatility',
    description: 'React (7y), Node.js (10y), TypeScript (6y). Backend, frontend, infrastructure - I handle the entire stack so your team moves faster.',
    gradient: 'from-gray-800/80 via-gray-900/90 to-black'
  },
  {
    id: 'business-minded',
    icon: '🎯',
    title: 'Business-Minded Engineer',
    description: 'Double major in Entrepreneurship & Marketing from Illinois State, with a minor in Organizational Leadership. I bring formal business training in project management, delegation, and strategic thinking — not just code.',
    gradient: 'from-gray-800/80 via-gray-900/90 to-black'
  }
];

// Section subtitle
export const valuePropositionsSubtitle = 'The rare combination that delivers both technical excellence and business results';
