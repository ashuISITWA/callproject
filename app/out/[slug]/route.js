export async function GET(req, { params }) {
    const headerCountry =
      req.headers.get('x-vercel-ip-country') ||
      req.headers.get('cf-ipcountry') ||
      'default';
    const country = (headerCountry || 'default').toUpperCase();
    const rawSlug = params.slug;
    const decoded = decodeURIComponent(rawSlug || '');

    // If the slug is actually a fully-qualified URL, redirect to it directly
    if (decoded.startsWith('http://') || decoded.startsWith('https://')) {
      return Response.redirect(decoded, 302);
    }

    const links = await import('../../../messages/links.json');
    // Support either keys shaped as "/out/{slug}" or just "{slug}"
    const byPrefixedKey = links.default[`/out/${decoded}`];
    const byBareKey = links.default[decoded];
    const linkConfig = byPrefixedKey || byBareKey;

    if (!linkConfig) {
      return new Response('Not found', { status: 404 });
    }

    const redirectUrl = linkConfig[country] || linkConfig.default;
    return Response.redirect(redirectUrl, 302);
  }
  


