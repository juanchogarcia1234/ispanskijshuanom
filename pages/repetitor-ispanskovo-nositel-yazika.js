import Head from 'next/head'
import Image from 'next/image'
import PostCard from '../components/PostCard'
import { getAllPosts } from '../lib/test-data'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'
import { Raleway } from '@next/font/google'
import ImageFill from '../components/ImageFill'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function Uroki({ posts }) {
	return (
		<div className="container rounded-white">
			<Head>
				<title>Репетитор испанского носитель языка</title>
			</Head>
			<main className="pt-5">
				<h1 className={raleway.className + ' pb-3'}>Репетитор испанского носитель языка</h1>
				<div>
					<p>
						Привет! Меня зовут Хуан. Я испанец из Мадрида. Я увлекаюсь языками и говорю на испанском,
						английском, немецком и русском языках. В 2018 году я начал преподавать испанский язык русским и
						с тех пор не перестаю. Мне нравится преподавать испанский язык русским на их родном языке.
						Однако, я считаю, что важно постоянно прислушиваться к языку, который вы учите. Поэтому, когда
						мои студенты достигают определенного уровня, я стараюсь говорить только по-испански. Я всегда
						стараюсь сделать свои занятия веселыми и информативными одновременно. У меня есть
						университетская степень по журналистике. Получил степень магистра преподавателя испанского языка
						как иностранного в Университете Карлоса III в Мадриде. На сегодняшний день я преподаю испанский
						язык онлайн и сотрудничаю с Центром Пикассо в Риге. Хотите начать говорить по-испански?
						Записывайтесь на мои занятия!
					</p>
					<ImageFill
						alt="test"
						src="/images/ispanskijshuanom-urok.jpeg"
						aspectRatio="4 / 3"
						className="mb-3 mx-auto"
					/>
					<h2 className={raleway.className + ' mb-2 mt-4'}>Уроки испанского онлайн со мной</h2>
					<p>
						В любом месте и в удобное время —Занимайтесь из дома, на работе, в путешествии — с компьютера
						или с планшета.
					</p>
					<ul className="text-center list-unstyled">
						<li>✔️ Персональный подход к каждому ученику</li>
						<li>✔️ Практика с помощью живых диалогов</li>
						<li>✔️ Индивидуально или в небольших группах</li>
						<li>✔️ Персональный подход к каждому ученику</li>
					</ul>
					<p>
						Обучение испанскому языку с нуля Уроки проводятся через предложение Zoom, Skype или Google
						Hangouts.
					</p>
					<h3 className={raleway.className}>Цены</h3>
					<p>1 урок - 25€. 8 уроков - 160€</p>

					{/* <h3 className={raleway.className}>Книги, с которыми я работаю</h3> */}

					<h3 className={raleway.className}>Отзывы</h3>
					<br />
					<div className="wrapper-reviews">
						<div className="review">
							<iframe
								src="https://www.youtube.com/embed/ZV8NcULLwNo"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div className="review">
							<iframe
								src="https://www.youtube.com/embed/zIjEMxZoZDM"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div className="review">
							<iframe
								src="https://www.youtube.com/embed/FdvMrTH2hoU"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div className="review">
							<iframe
								src="https://www.youtube.com/embed/WxNvBgEy-Wo"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div className="review">
							<iframe
								src="https://www.youtube.com/embed/pv3hiD38DMw"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>
					<br />

					<h3 className={raleway.className}>Дипломы</h3>
					<ImageFill alt="test" src="/images/diploma.jpeg" aspectRatio="4 / 3" className="mb-3 mx-auto" />
					<ImageFill alt="test" src="/images/ruso.jpeg" aspectRatio="4 / 3" className="mb-3 mx-auto" />
					<h3 className={raleway.className}>Записаться на первый урок</h3>
					<p>
						Начните изучать испанский Познакомимся, определим уровень, поставим цели и пройдем вводное
						занятие. Напишите мне на: ispanskijshuanom@mail.ru
					</p>
				</div>
			</main>
		</div>
	)
}
