import { Raleway } from '@next/font/google'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Viewer from '../components/Viewer'
import Link from 'next/link'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function Spravochnik({ posts }) {
	return (
		<div className="container rounded-white">
			<Container>
				<Row>
					<Col>
						{' '}
						<Viewer />
					</Col>
					<Col>
						<h1 className={raleway.className + ' pt-5 pb-3'}>
							СПРАВОЧНИК ПО НЕПРАВИЛЬНЫМ ГЛАГОЛАМ НАСТОЯЩЕГО В ИСПАНСКОМ (PDF)
						</h1>
						<h2 className={raleway.className} style={{ color: '#00A98A' }}>
							999,99 ₽
						</h2>
						<p>
							Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
							Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение
							шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при
							простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы
							электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию,
							так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё
							ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много
							версий. Некоторые версии появились по ошибке, некоторые - намеренно (например,
							юмористические варианты).
						</p>
						<Button
							size="lg"
							style={{ backgroundColor: '#00A98A', border: 'none', width: '100%' }}
							className={raleway.className + ' rounded-4'}
						>
							<Link href="/spravochnik-po-nepravilnym-glagolam-nastoyasshego-v-ispanskom">Купить</Link>
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
