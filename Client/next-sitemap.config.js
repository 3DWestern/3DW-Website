/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://3dwestern.ca',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/admin-dashboard", "/dashboard"],
			},
		],
	},
	//sitemapSize: 7000, // fewer than 5000 URLs so we do not need this
}
