import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vedjx.netlify.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any paths you want to block
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
