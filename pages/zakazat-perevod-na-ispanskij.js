import Head from 'next/head'
import Image from 'next/image'
import PostCard from '../components/PostCard'
import { getAllPosts } from '../lib/test-data'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'
import { Raleway } from '@next/font/google'
import { useEffect } from 'react'
import WordCounter from '../components/WordCounter'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function Perevod({ posts }) {
	return (
		<div className="container rounded-white">
			<Head>
				<title>Заказать перевод на испанский</title>
			</Head>
			<main className="pt-5">
				<h1 className={raleway.className + ' pb-3'}>Заказать перевод на испанский</h1>
				<div>
					<p>
						В наше время глобализация и международные коммуникации являются ключевыми факторами успеха в
						бизнесе и других областях жизни. Одним из важных инструментов, позволяющих связаться с людьми в
						разных странах, является язык. И в этом отношении переводы с русского на испанский играют важную
						роль.
					</p>
					<p>
						Я понимаю, что качество перевода имеет критическое значение для вашего бизнеса или проекта.
						Поэтому я использую только надежные и проверенные методы, чтобы обеспечить точность и
						соответствие оригиналу. Владею испанским и русским языками на совершенном уровне, имею опыт
						работы в различных областях, таких как технические переводы и маркетинговые материалы.
					</p>
					<p>
						Я также обеспечиваю быстрые сроки выполнения, чтобы вы могли получить свои переводы в
						максимально короткие сроки. Моя цель - сделать процесс перевода максимально простым и удобным
						для вас. Не задерживайтесь, обратитесь ко мне сейчас и получите качественный перевод с русского
						на испанский. Я гарантирую удовлетворение и результаты, которые превышают ваши ожидания.
					</p>
					<h2 className={raleway.className + ' pb-3'}>Мои клиенты</h2>
					<div className="d-flex justify-content-center flex-wrap">
						<Image width={235} height={60} src="/images/br.png" />
						<Image width={235} height={60} src="/images/legalbet.png" />
						<Image width={235} height={60} src="/images/estv.png" />
					</div>
					<WordCounter />
				</div>
			</main>
		</div>
	)
}
