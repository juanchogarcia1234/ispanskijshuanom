// components/layout.js

import Header from '../Header'
import Footer from '../Footer'
import Head from 'next/head'
import { Manrope } from '@next/font/google'

const manrope = Manrope({
	subsets: ['cyrillic'],
	weight: 'variable',
})

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="icon" href="favicon.ico"></link>
			</Head>
			<Header />
			<main className={manrope.className}>{children}</main>
			<Footer />
		</>
	)
}
