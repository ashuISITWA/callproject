import { NextRequest, NextResponse } from 'next/server';

interface AnalyticsData {
  slug: string;
  country: string;
  targetUrl: string;
  userAgent: string;
  timestamp: number;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: AnalyticsData = await request.json();
    
    // Validate required fields
    if (!data.slug || !data.country || !data.targetUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = Date.now();
    }

    // Add IP address
    data.ip = request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              'unknown';

    // Log to console for development
    console.log('[ANALYTICS]', {
      slug: data.slug,
      country: data.country,
      targetUrl: data.targetUrl,
      timestamp: new Date(data.timestamp).toISOString(),
      ip: data.ip
    });

    // In production, you can store this data in a database
    // Example: await db.analytics.create({ data });
    
    // Or send to external analytics service
    // Example: await fetch('https://analytics-service.com/track', { ... });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Analytics endpoint is working',
    timestamp: new Date().toISOString()
  });
}
