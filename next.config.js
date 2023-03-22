// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs')

// next.config.js
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'one2oner.com',
			},
		],
	},
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru',
	},
	async redirects() {
		return [
			{
				source: '/blog-ispanskovo/spryazhenie-pravilnykh-glagolov-v-ispanskom.html',
				destination: '/blog-ispanskovo/spryazhenie-pravilnykh-glagolov-v-ispanskom',
				permanent: true,
			},
			{
				source: '/blog-ispanskovo/glagoly-individualnogo-spryazheniya-ser-i-est.html',
				destination: '/blog-ispanskovo/glagoly-individualnogo-spryazheniya-ser-i-est',
				permanent: true,
			},
			{
				source: '/blog-ispanskovo/voprositelnye-slova-v-ispanskom-yazyke.html',
				destination: '/blog-ispanskovo/voprositelnye-slova-v-ispanskom-yazyke',
				permanent: true,
			},
			{
				source: '/blog-ispanskovo/kolichestvennye-i-poryadkovye-chislitelnye-v-.html',
				destination: '/blog-ispanskovo/kolichestvennye-i-poryadkovye-chislitelnye-v-',
				permanent: true,
			},
		]
	},
}

module.exports = withSentryConfig(module.exports, { silent: true }, { hideSourcemaps: true })
