import Head from 'next/head'
import PostCard from '../../components/PostCard'
import { getAllPosts } from '../../lib/test-data'
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'

export default function Blog({ posts }) {
	return (
		<div className="container">
			<Head>
				<title>Блог испанского</title>
			</Head>
			<main>
				<h1>Блог испанского</h1>

				<p className="description">
					Get started by editing <code>pages/index.js</code>
				</p>

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
