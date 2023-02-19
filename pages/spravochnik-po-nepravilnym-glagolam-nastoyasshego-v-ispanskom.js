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
						<h2 style={{ color: '#00A98A' }}>12,61 €</h2>
						<p>
							Хотите быстро и легко выучить неправильные глаголы в настоящем времени испанского языка?
							Тогда маленький справочник "Неправильные глаголы в настоящем времени" - идеальный выбор для
							вас!
						</p>
						<p>
							Эта справочник содержит список{' '}
							<strong>
								всех видов неправильностей, которые могут возникнуть в настоящем времени испанского
								языка.
							</strong>{' '}
							Вы сможете узнать, как правильно произносить и использовать эти глаголы в своей речи.
							Благодаря этой книге вы сможете с легкостью общаться на испанском языке и избежать ошибок в
							грамматике.
						</p>
						<p>
							{' '}
							Справочник "Неправильные глаголы в настоящем времени" идеальна для начинающих, которые хотят
							быстро и эффективно изучить испанский язык. Она также пригодится и тем, кто уже изучает
							испанский, но хочет улучшить свои знания в грамматике.
						</p>
						<p>
							{' '}
							Не упустите возможность купить эту книгу и сделать первый шаг к изучению испанского языка!.
						</p>
						<Link href="/api/checkout">
							<Button
								size="lg"
								style={{ backgroundColor: '#00A98A', border: 'none', width: '100%' }}
								className={raleway.className + ' rounded-4'}
							>
								Купить
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
