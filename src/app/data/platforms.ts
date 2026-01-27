export interface Platform {
  id: string;
  name: string;
  category: 'crm' | 'marketing' | 'communication' | 'productivity' | 'ecommerce' | 'webinar' | 'support' | 'payment' | 'video' | 'project-management';
  logo?: string;
  yearsExperience: number;
  integrationLevel: 'deep' | 'moderate' | 'basic';
  description?: string;
}

export const platforms: Platform[] = [
  // CRM Platforms
  {
    id: 'infusionsoft',
    name: 'Infusionsoft/Keap',
    category: 'crm',
    logo: '/images/platforms/keap.png',
    yearsExperience: 10,
    integrationLevel: 'deep',
    description: 'Built 60+ helper integrations, 2M+ monthly API requests'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    logo: '/images/platforms/salesforce.png',
    yearsExperience: 10,
    integrationLevel: 'deep',
    description: 'Extensive custom integration work since 2015'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    logo: '/images/platforms/hubspot.png',
    yearsExperience: 5,
    integrationLevel: 'deep'
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    category: 'crm',
    logo: '/images/platforms/activecampaign.png',
    yearsExperience: 4,
    integrationLevel: 'moderate'
  },
  {
    id: 'mailchimp',
    name: 'MailChimp',
    category: 'marketing',
    logo: '/images/platforms/mailchimp.png',
    yearsExperience: 6,
    integrationLevel: 'moderate'
  },

  // Communication & Messaging
  {
    id: 'twilio',
    name: 'Twilio',
    category: 'communication',
    logo: '/images/platforms/twilio.png',
    yearsExperience: 6,
    integrationLevel: 'deep',
    description: 'SMS helper integration with MyFusion Helper'
  },
  {
    id: 'sendgrid',
    name: 'SendGrid',
    category: 'communication',
    logo: '/images/platforms/sendgrid.png',
    yearsExperience: 7,
    integrationLevel: 'deep',
    description: 'Email delivery API integration'
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'communication',
    logo: '/images/platforms/slack.png',
    yearsExperience: 4,
    integrationLevel: 'moderate',
    description: 'Slack It helper for notifications'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'communication',
    logo: '/images/platforms/zoom.png',
    yearsExperience: 3,
    integrationLevel: 'moderate',
    description: 'Meeting and webinar integrations'
  },

  // Productivity Tools
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    category: 'productivity',
    logo: '/images/platforms/google-sheets.png',
    yearsExperience: 7,
    integrationLevel: 'deep',
    description: 'Google Sheet It - flagship helper for CRM data export'
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'productivity',
    logo: '/images/platforms/trello.png',
    yearsExperience: 5,
    integrationLevel: 'moderate',
    description: 'Trello It helper for task management'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    category: 'productivity',
    logo: '/images/platforms/dropbox.png',
    yearsExperience: 11,
    integrationLevel: 'moderate',
    description: 'Dropbox It helper for file storage'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    category: 'productivity',
    logo: '/images/platforms/calendly.png',
    yearsExperience: 4,
    integrationLevel: 'moderate',
    description: 'Scheduling and appointment API integration'
  },

  // E-commerce Platforms
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'ecommerce',
    logo: '/images/platforms/shopify.png',
    yearsExperience: 8,
    integrationLevel: 'deep',
    description: 'Led ACEVA migration, order processing integration'
  },
  {
    id: 'magento',
    name: 'Magento',
    category: 'ecommerce',
    logo: '/images/platforms/magento.png',
    yearsExperience: 6,
    integrationLevel: 'deep',
    description: 'E-commerce platform development and migration'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'ecommerce',
    logo: '/images/platforms/woocommerce.png',
    yearsExperience: 12,
    integrationLevel: 'moderate'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payment',
    logo: '/images/platforms/stripe.png',
    yearsExperience: 11,
    integrationLevel: 'deep',
    description: 'Payment processing and subscription billing'
  },

  // Webinar & Video Platforms
  {
    id: 'gotowebinar',
    name: 'GoToWebinar',
    category: 'webinar',
    logo: '/images/platforms/gotowebinar.png',
    yearsExperience: 6,
    integrationLevel: 'moderate',
    description: 'Registration and attendance tracking'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'video',
    logo: '/images/platforms/youtube.png',
    yearsExperience: 11,
    integrationLevel: 'moderate',
    description: 'Video engagement tracking'
  },
  {
    id: 'wistia',
    name: 'Wistia',
    category: 'video',
    logo: '/images/platforms/wistia.png',
    yearsExperience: 11,
    integrationLevel: 'moderate'
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    category: 'video',
    logo: '/images/platforms/vimeo.png',
    yearsExperience: 11,
    integrationLevel: 'moderate'
  },

  // Support & Project Management
  {
    id: 'zendesk',
    name: 'Zendesk',
    category: 'support',
    logo: '/images/platforms/zendesk.png',
    yearsExperience: 13,
    integrationLevel: 'deep',
    description: 'Support ticket integration with AlignLife'
  },
  {
    id: 'teamwork',
    name: 'Teamwork.com',
    category: 'project-management',
    logo: '/images/platforms/teamwork.png',
    yearsExperience: 14,
    integrationLevel: 'deep',
    description: 'Deep integrations with WordPress, Zendesk, Magento, Shopify at AlignLife'
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'productivity',
    logo: '/images/platforms/wordpress.png',
    yearsExperience: 10,
    integrationLevel: 'deep',
    description: 'Custom plugin development and API integrations'
  },

  // Social & Advertising
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'marketing',
    logo: '/images/platforms/facebook.png',
    yearsExperience: 11,
    integrationLevel: 'moderate',
    description: 'Lead Ads and Custom Audiences integration'
  }
];

export const platformCategories = {
  crm: { label: 'CRM & Marketing', color: '#0066FF' },
  communication: { label: 'Communication', color: '#10B981' },
  productivity: { label: 'Productivity', color: '#8B5CF6' },
  ecommerce: { label: 'E-commerce', color: '#F59E0B' },
  payment: { label: 'Payment', color: '#EF4444' },
  webinar: { label: 'Webinar', color: '#3B82F6' },
  video: { label: 'Video', color: '#EC4899' },
  support: { label: 'Support', color: '#14B8A6' },
  'project-management': { label: 'Project Management', color: '#6366F1' },
  marketing: { label: 'Marketing', color: '#F97316' }
};

// Get platforms by category
export function getPlatformsByCategory(category: string) {
  return platforms.filter(p => p.category === category);
}

// Get deep integration platforms
export function getDeepIntegrations() {
  return platforms.filter(p => p.integrationLevel === 'deep');
}

// Count total platforms
export function getTotalPlatformCount() {
  return platforms.length;
}
