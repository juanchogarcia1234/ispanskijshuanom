import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
	console.log('el post', post)
	return (
		<Link href={post.uri}>
			<Image
				src={post.featuredImage?.node.sourceUrl}
				width={770}
				height={385}
				alt="Your Name"
				sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
			/>
			<h3>{post.title} &rarr;</h3>
		</Link>
	)
}
