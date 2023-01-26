import Head from 'next/head'

export default function Home({ posts }) {
	return (
		<div className="container">
			<Head>
				<title>Испанский с Хуаном</title>
			</Head>
			<main>
				<h1 className="title">Home</h1>
			</main>
		</div>
	)
}
