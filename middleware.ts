// Enhanced middleware.ts with better structure and analytics
import { NextResponse, NextRequest } from 'next/server';
import linksData from './messages/links.json';

// Enhanced type definitions
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

interface LinksConfig {
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
}

interface LinksData {
  links: Record<string, LinkConfig>;
  config: LinksConfig;
}

const linksDataTyped = linksData as LinksData;

// Analytics tracking function
function trackRedirect(slug: string, country: string, targetUrl: string, userAgent: string) {
  if (!linksDataTyped.config.trackingEnabled) return;
  
  // Log to console for development
  console.log(`[REDIRECT] ${slug} -> ${country} -> ${targetUrl}`);
  
  // In production, you can send to analytics service
  // Example: send to Vercel Analytics, Google Analytics, etc.
  if (process.env.NODE_ENV === 'production') {
    // Add your analytics tracking code here
    // Example: await fetch('/api/analytics', { method: 'POST', body: JSON.stringify({...}) })
  }
}

// Get country code with fallback strategy
function getCountryCode(req: NextRequest): string {
  // Priority order: Vercel -> Cloudflare -> Default
  const vercelCountry = req.headers.get('x-vercel-ip-country');
  const cloudflareCountry = req.headers.get('cf-ipcountry');
  
  if (vercelCountry) return vercelCountry.toUpperCase();
  if (cloudflareCountry) return cloudflareCountry.toUpperCase();
  
  return linksDataTyped.config.defaultCountry;
}

// Get redirect URL with fallback strategy
function getRedirectUrl(slug: string, country: string): string | null {
  const linkConfig = linksDataTyped.links[slug];
  
  if (!linkConfig) return null;
  
  // Check if link is enabled
  if (!linkConfig.metadata.enabled) return null;
  
  // Try country-specific URL first
  if (linkConfig.countries[country]) {
    return linkConfig.countries[country];
  }
  
  // Fallback to global URL
  if (linkConfig.global) {
    return linkConfig.global;
  }
  
  return null;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/out/')) {
    const slug = pathname.slice(5); // "/out/" → 5 chars
    
    if (!slug) {
      return new NextResponse('Invalid link', { status: 400 });
    }

    // Get country code
    const country = getCountryCode(req);
    
    // Get redirect URL
    const targetUrl = getRedirectUrl(slug, country);
    
    if (targetUrl) {
      // Track the redirect
      trackRedirect(slug, country, targetUrl, req.headers.get('user-agent') || '');
      
      // Create redirect response
      const response = NextResponse.redirect(targetUrl, { status: 302 });
      
      // Add cache headers if enabled
      if (linksDataTyped.config.cache.enabled) {
        response.headers.set('Cache-Control', `public, max-age=${linksDataTyped.config.cache.ttl}`);
      }
      
      return response;
    }

    // 404 fallback
    return new NextResponse('Link not found', { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/out/:path*',
};