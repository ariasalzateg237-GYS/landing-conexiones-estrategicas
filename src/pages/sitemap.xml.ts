import type { APIRoute } from 'astro';

// One-pager: a single URL. Generated at build time so the domain comes
// from `site` in astro.config.mjs and lastmod tracks each deploy.
export const GET: APIRoute = ({ site }) => {
  const loc = new URL('/', site).href;
  const lastmod = new Date().toISOString().split('T')[0];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
