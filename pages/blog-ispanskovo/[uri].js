import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPostByUri } from '../../lib/test-data'
import { client } from '../../lib/apollo'
import { gql } from '@apollo/client'
import { faUser, faCalendar, faTag } from '@fortawesome/free-solid-svg-icons'
import { Raleway } from '@next/font/google'
import RelatedCard from '../../components/RelatedCard'
import ImageFill from '../../components/ImageFill'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function SlugPage({ post }) {
	console.log('YES', post)
	return (
		<div>
			<Head>
				<title>{post?.title} - Испанский с Хуаном</title>
				<meta name="description" content={post.seo.metaDesc} />
			</Head>

			<main style={{ fontSize: '17px' }} className="container rounded-white">
				<div className="siteHeader mb-0 container" style={{ textAlign: 'center', maxWidth: '850px' }}>
					<h1 className={`title text-left ${raleway.className}`}>{post?.title}</h1>
					<p>
						✍️ &nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;
						{new Date(post.date).toLocaleDateString()}
					</p>
					<ImageFill
						alt="test"
						src={post.featuredImage.node.sourceUrl}
						aspectRatio="2 / 1"
						className="mb-3 mx-auto"
					/>
				</div>

				<article className="mb-5" dangerouslySetInnerHTML={{ __html: post.content }}></article>
				<hr />
				<h3 className={`text-center mt-5 ${raleway.className}`}>Похожие статьи</h3>

				<div className="d-flex flex-wrap flex-md-nowrap flex-row justify-content-around">
					<RelatedCard />
					<RelatedCard />
					<RelatedCard />
				</div>
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
				seo {
					canonical
					metaDesc
					title
					fullHead
				}
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
