import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPostByUri } from '../../lib/test-data'
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'
import { faUser, faCalendar, faTag } from '@fortawesome/free-solid-svg-icons'
import { Raleway } from '@next/font/google'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function SlugPage({ post }) {
	console.log('YES', post)
	return (
		<div>
			<Head>
				<title>Headless WP Next Starter</title>
			</Head>

			<main style={{ fontSize: '17px' }} className="container rounded-white">
				<div className="siteHeader container" style={{ textAlign: 'center' }}>
					<h1 className={`title text-left ${raleway.className}`}>{post.title}</h1>
					<p>
						✍️ &nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;
						{new Date(post.date).toLocaleDateString()}
					</p>
					<Image
						src={post.featuredImage.node.sourceUrl}
						width={770}
						height={385}
						alt="Your Name"
						sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
					/>
				</div>

				<article dangerouslySetInnerHTML={{ __html: post.content }}></article>
			</main>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const GET_POST_BY_URI = gql`
		query GetPostsByURI($id: ID!) {
			post(id: $id, idType: URI) {
				title
				content
				date
				uri
				featuredImage {
					node {
						sourceUrl(size: LARGE)
						srcSet(size: LARGE)
					}
				}
				author {
					node {
						firstName
						lastName
					}
				}
			}
		}
	`
	const response = await client.query({
		query: GET_POST_BY_URI,
		variables: {
			id: params.uri,
		},
	})
	const post = response?.data?.post
	console.log('post', post)
	return {
		props: {
			post,
		},
	}
}
//This will run only during build in production
// With npm run dev (next dev) it will run on every request
export async function getStaticPaths() {
	const paths = [] //Defers generating all pages on-demand
	return {
		paths,
		fallback: 'blocking',
	}
}
