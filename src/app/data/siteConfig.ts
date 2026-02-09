// Centralized site configuration - Single source of truth for contact info, metadata, and hero content

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  website: string;
  websiteUrl: string;
}

export interface Availability {
  status: 'available' | 'limited' | 'unavailable';
  roles: string[];
  location: string;
}

export interface HeroStat {
  value: string;
  label: string;
  icon?: string;
}

export interface TrustIndicator {
  icon: string;
  text: string;
  animationDelay: number;
}

export const siteConfig: SiteConfig = {
  name: 'Nick Kulavic',
  title: 'Senior AI & Platform Engineer',
  tagline: 'I architect AI-powered enterprise systems that drive revenue and scale securely.',
  location: 'Denver, CO',
  email: 'nick@nickkulavic.com',
  linkedin: 'linkedin.com/in/nickkulavic',
  linkedinUrl: 'https://linkedin.com/in/nickkulavic',
  github: 'nkulavic',
  githubUrl: 'https://github.com/nkulavic',
  website: 'nickkulavic.ai',
  websiteUrl: 'https://nickkulavic.ai'
};

export const availability: Availability = {
  status: 'available',
  roles: ['Senior AI Integration Engineer', 'Platform Engineer', 'Staff Full-Stack Engineer'],
  location: 'Remote or Denver-based'
};

export const heroStats: HeroStat[] = [
  { value: '$1.7M+', label: 'Revenue Generated', icon: '💰' },
  { value: '500+', label: 'Enterprise Users', icon: '👥' },
  { value: '30+', label: 'Platform APIs', icon: '🔗' },
  { value: '14+', label: 'Years Experience', icon: '⭐' }
];

export const heroDescription = {
  primary: 'I architect AI-powered enterprise systems that drive revenue and scale securely.',
  secondary: '14+ years turning complex technical challenges into profitable solutions. From $0 to $1.7M+ revenue. SOC 2 compliant systems serving 500+ enterprise users. Zero security breaches.'
};

export const trustIndicators: TrustIndicator[] = [
  { icon: '✓', text: '14+ Years Experience', animationDelay: 0 },
  { icon: '✓', text: '$1.7M+ Revenue Generated', animationDelay: 0.5 },
  { icon: '✓', text: 'Zero Security Breaches', animationDelay: 1 },
  { icon: '✓', text: 'SOC 2 Compliant', animationDelay: 1.5 }
];
