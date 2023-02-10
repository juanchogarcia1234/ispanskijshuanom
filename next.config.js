// next.config.js
module.exports = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'one2oner.com',
			},
		],
	},
}
