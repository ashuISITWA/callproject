// lib/linkUtils.ts - Utility functions for link management
import linksData from '../messages/links.json';

interface LinkMetadata {
  title: string;
  description: string;
  category: string;
  enabled: boolean;
  tracking: boolean;
}

interface LinkConfig {
  global: string;
  countries: Record<string, string>;
  metadata: LinkMetadata;
}

interface LinksData {
  links: Record<string, LinkConfig>;
  config: {
    defaultCountry: string;
    fallbackStrategy: 'global' | 'default';
    trackingEnabled: boolean;
    analytics: {
      enabled: boolean;
      provider: string;
    };
    cache: {
      enabled: boolean;
      ttl: number;
    };
  };
}

const linksDataTyped = linksData as LinksData;

// Get all available links
export function getAllLinks(): Record<string, LinkConfig> {
  return linksDataTyped.links;
}

// Get link by slug
export function getLinkBySlug(slug: string): LinkConfig | null {
  return linksDataTyped.links[slug] || null;
}

// Get redirect URL for a specific country
export function getRedirectUrl(slug: string, country: string): string | null {
  const linkConfig = linksDataTyped.links[slug];
  
  if (!linkConfig || !linkConfig.metadata.enabled) {
    return null;
  }
  
  // Try country-specific URL first
  if (linkConfig.countries[country]) {
    return linkConfig.countries[country];
  }
  
  // Fallback to global URL
  return linkConfig.global || null;
}

// Get all countries for a specific link
export function getCountriesForLink(slug: string): string[] {
  const linkConfig = linksDataTyped.links[slug];
  return linkConfig ? Object.keys(linkConfig.countries) : [];
}

// Check if a link exists
export function linkExists(slug: string): boolean {
  return slug in linksDataTyped.links;
}

// Check if a link is enabled
export function isLinkEnabled(slug: string): boolean {
  const linkConfig = linksDataTyped.links[slug];
  return linkConfig ? linkConfig.metadata.enabled : false;
}

// Get links by category
export function getLinksByCategory(category: string): Record<string, LinkConfig> {
  const filteredLinks: Record<string, LinkConfig> = {};
  
  Object.entries(linksDataTyped.links).forEach(([slug, config]) => {
    if (config.metadata.category === category) {
      filteredLinks[slug] = config;
    }
  });
  
  return filteredLinks;
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  
  Object.values(linksDataTyped.links).forEach(config => {
    categories.add(config.metadata.category);
  });
  
  return Array.from(categories);
}

// Generate short URL
export function generateShortUrl(slug: string, baseUrl: string = ''): string {
  return `${baseUrl}/out/${slug}`;
}

// Validate link configuration
export function validateLinkConfig(config: Partial<LinkConfig>): string[] {
  const errors: string[] = [];
  
  if (!config.global) {
    errors.push('Global URL is required');
  }
  
  if (!config.countries || Object.keys(config.countries).length === 0) {
    errors.push('At least one country-specific URL is required');
  }
  
  if (!config.metadata) {
    errors.push('Metadata is required');
  } else {
    if (!config.metadata.title) {
      errors.push('Title is required');
    }
    if (!config.metadata.description) {
      errors.push('Description is required');
    }
    if (!config.metadata.category) {
      errors.push('Category is required');
    }
  }
  
  return errors;
}

// Get link statistics (mock function - you can implement real stats)
export function getLinkStats(slug: string): {
  totalRedirects: number;
  countries: Record<string, number>;
  lastRedirect?: Date;
} {
  // This is a mock implementation
  // In a real app, you'd query your analytics database
  return {
    totalRedirects: Math.floor(Math.random() * 1000),
    countries: {
      'US': Math.floor(Math.random() * 100),
      'IN': Math.floor(Math.random() * 100),
      'CA': Math.floor(Math.random() * 100),
    },
    lastRedirect: new Date()
  };
}

// Search links by title or description
export function searchLinks(query: string): Record<string, LinkConfig> {
  const filteredLinks: Record<string, LinkConfig> = {};
  const searchTerm = query.toLowerCase();
  
  Object.entries(linksDataTyped.links).forEach(([slug, config]) => {
    const title = config.metadata.title.toLowerCase();
    const description = config.metadata.description.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      filteredLinks[slug] = config;
    }
  });
  
  return filteredLinks;
}

// Get configuration
export function getConfig() {
  return linksDataTyped.config;
}
