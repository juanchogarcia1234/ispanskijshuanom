import { Button } from 'react-bootstrap'
import { Raleway } from '@next/font/google'
import ImageFill from '../components/ImageFill'
import Link from 'next/link'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function Success() {
	return (
		<div className="container rounded-white text-center p-4">
			<h1 className={raleway.className + ' mb-3'}>Спасибо за покупкуы</h1>

			<Button className={raleway.className}>
				<a
					href="/assets/неправильные_глаголы_испанского_настоящего.pdf"
					alt="alt text"
					target="_blank"
					rel="noopener noreferrer"
					download
				>
					Скачать книгу ⬇️
				</a>
			</Button>
		</div>
	)
}
