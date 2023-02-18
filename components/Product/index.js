import ImageFill from '../ImageFill'
import { Raleway } from '@next/font/google'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})
const Product = () => {
	return (
		<div className="my-5 p-3 rounded-5" style={{ backgroundColor: '#334a52', height: '', color: 'white' }}>
			<div style={{ height: '200px' }}>
				<ImageFill
					src="/images/СПРАВОЧНИК-ПО-НЕПРАВИЛЬНЫМ-ГЛАГОЛАМ-НАСТОЯЩЕГО-В-ИСПАНСКОМ.jpg"
					alt="СПРАВОЧНИК ПО НЕПРАВИЛЬНЫМ ГЛАГОЛАМ НАСТОЯЩЕГО В ИСПАНСКОМ"
					aspectRatio="1 / 0"
				/>
			</div>

			<h5 className={raleway.className + ' pt-3'}>Приобретай сейчас!</h5>
			<p>Нет ли у тебя способа выучить неправильные глаголы? Тогда приобрети этот справочник</p>
			<Button
				size="lg"
				style={{ backgroundColor: '#00A98A', border: 'none', width: '100%' }}
				className={raleway.className + ' rounded-4'}
			>
				<Link href="/spravochnik-po-nepravilnym-glagolam-nastoyasshego-v-ispanskom">Смотреть</Link>
			</Button>
		</div>
	)
}

export default Product
