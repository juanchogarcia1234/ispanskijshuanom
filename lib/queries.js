import { client } from './apollo'
import { gql } from '@apollo/client'

export const getPosts = gql`
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
export const pageSize = 3

export const getPaginatedPostSummaries = async (page) => {
	const skipMultiplier = page === 1 ? 0 : page - 1
	const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0

	const query = gql`{
		query blogPostCollection(limit: ${pageSize}, skip: ${skip}, order: date_DESC) {
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
    }
	`

	// const query = gql`
	// {
	//     blogPostCollection(limit: ${pageSize}, skip: ${skip}, order: date_DESC) {
	//         posts {
	// 			nodes {
	// 				featuredImage {
	// 					node {
	// 						sourceUrl(size: LARGE)
	// 						srcSet(size: LARGE)
	// 					}
	// 				}
	// 				title
	// 				content
	// 				uri
	// 				date
	// 				excerpt
	// 			}
	// 		}
	//     }
	//   }`

	const response = await client.query({
		query: query,
	})

	console.log('la response de ', response.data)

	return paginatedPostSummaries
}

export const getTotalPosts = async () => {
	const getAllPosts = gql`
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
		query: getAllPosts,
	})
	return response?.data?.posts?.nodes?.length
}
