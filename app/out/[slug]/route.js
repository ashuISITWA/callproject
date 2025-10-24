import { NextResponse } from 'next/server';
import linksData from '../../../messages/links.json';

// Enhanced type definitions
const linksDataTyped = linksData;

// Get country code with fallback strategy
function getCountryCode(req) {
  // Priority order: Vercel -> Cloudflare -> Default
  const vercelCountry = req.headers.get('x-vercel-ip-country');
  const cloudflareCountry = req.headers.get('cf-ipcountry');
  
  if (vercelCountry) return vercelCountry.toUpperCase();
  if (cloudflareCountry) return cloudflareCountry.toUpperCase();
  
  return linksDataTyped.config.defaultCountry || 'US';
}

// Get redirect URL with fallback strategy
function getRedirectUrl(slug, country) {
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

// Analytics tracking function
function trackRedirect(slug, country, targetUrl, userAgent) {
  if (!linksDataTyped.config.trackingEnabled) return;
  
  // Log to console for development
  console.log(`[REDIRECT] ${slug} -> ${country} -> ${targetUrl}`);
  
  // In production, you can send to analytics service
  if (process.env.NODE_ENV === 'production') {
    // Add your analytics tracking code here
    // Example: await fetch('/api/analytics', { method: 'POST', body: JSON.stringify({...}) })
  }
}

export async function GET(req, { params }) {
  try {
    const slug = params.slug;
    
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
  } catch (error) {
    console.error('Redirect error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
  


