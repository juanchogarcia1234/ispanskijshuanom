import Head from 'next/head'
import PostCard from '../../components/PostCard'
import { getAllPosts } from '../../lib/test-data'
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'
import { Raleway } from '@next/font/google'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function Blog({ posts }) {
	return (
		<div className="container">
			<Head>
				<title>Блог испанского</title>
			</Head>
			<main className="pt-5">
				<h1 className={raleway.className + ' pb-3'}>Блог испанского</h1>
				<div>
					{posts.map((post) => {
						return <PostCard key={post.uri} post={post}></PostCard>
					})}
				</div>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const GET_POSTS = gql`
		query GetAllPosts {
			posts {
				nodes {
					featuredImage {
						node {
							sourceUrl(size: LARGE)
							srcSet(size: LARGE)
						}
					}
					title
					content
					uri
					date
					excerpt
				}
			}
		}
	`
	const response = await client.query({
		query: GET_POSTS,
	})
	const posts = response?.data?.posts?.nodes
	return {
		props: {
			posts,
		},
	}
}
