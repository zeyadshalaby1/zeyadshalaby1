/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zeyadshalaby.cloud',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/dashboard/*', '/admin/*'], // Exclude private pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://zeyadshalaby.cloud/server-sitemap.xml', // If you have dynamic routes
    ],
  },
}
