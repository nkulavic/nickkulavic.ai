// Recent achievements for home page display

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  metrics: string[];
}

export const recentAchievements: Achievement[] = [
  {
    id: 'loanmaps',
    icon: '🚀',
    title: 'Launched LoanMaps',
    description: 'Enterprise loan origination system serving 500+ loan officers with AI-powered document processing',
    date: '2025',
    metrics: ['500+ users', '99.9% uptime', 'SOC 2']
  },
  {
    id: 'ruletool',
    icon: '⚡',
    title: 'Built RuleTool AI',
    description: 'Achieved 80% faster PDF processing with AWS Bedrock and Claude AI for mortgage lending rules',
    date: '2025',
    metrics: ['80% faster', '98% accuracy', 'Real-time']
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Enterprise Security',
    description: 'Building within SOC 2 compliant environment, maintaining zero security breaches across all applications',
    date: '2025',
    metrics: ['Zero breaches', 'Enterprise-grade', 'SOC 2 workflow']
  }
];

// Subtitle for the achievements section
export const achievementsSubtitle = 'Latest wins in AI development and enterprise solutions (2025)';
