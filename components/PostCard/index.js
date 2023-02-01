import Link from 'next/link'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import { Raleway } from '@next/font/google'
import styles from './index.module.css'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function PostCard({ post }) {
	return (
		<>
			<div className={styles.authorImageWrapper + ' mb-5'}>
				<Link href={`/blog-ispanskovo${post.uri}`}>
					<div className={styles.authorImageWrapper + ' mb-3'}>
						<Image
							fill
							alt={post.authorName}
							src={post.featuredImage?.node.sourceUrl}
							className={styles.authorImage + ' d-block mb-3'}
						/>
					</div>

					<h2 className={raleway.className}>{post.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
					<Button
						size="lg"
						style={{ backgroundColor: '#3cb9d7', border: 'none' }}
						className={raleway.className}
					>
						Читать
					</Button>
				</Link>
			</div>
		</>
	)
}
