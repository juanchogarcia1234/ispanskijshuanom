// components/layout.js

import Header from '../Header'
import Footer from '../Footer'
import Head from 'next/head'
import { Manrope } from '@next/font/google'

const manrope = Manrope({
	subsets: ['cyrillic', 'latin'],
	weight: 'variable',
})

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="icon" href="favicon.ico"></link>
				<meta name="robots" content="noindex"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2356493060345810"
					crossOrigin="anonymous"
				></script>
			</Head>
			<Header />
			<main className={manrope.className}>{children}</main>
			<Footer />
		</>
	)
}
