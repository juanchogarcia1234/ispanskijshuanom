import Link from 'next/link'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import { Raleway } from '@next/font/google'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function PostCard({ post }) {
	console.log('el post', post)
	return (
		<div className="mb-5" style={{ maxWidth: '775px' }}>
			<Link href={`/blog-ispanskovo${post.uri}`}>
				<Image
					src={post.featuredImage?.node.sourceUrl}
					width={770}
					height={385}
					alt="Your Name"
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
					className="d-block mb-3"
				/>
				<h2 className={raleway.className}>{post.title}</h2>
				<div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
				<Button href="#">Читать</Button>
			</Link>
		</div>
	)
}
