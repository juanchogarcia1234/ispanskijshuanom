import { useState } from 'react'
import { Raleway } from '@next/font/google'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

function WordCounter() {
	const [state, setState] = useState({
		wordCount: 0,
		charCount: 0,
	})

	const handleKeyPress = (e) => {
		const count = e.target.value

		const countWords = (count) => {
			if (count.length === 0) {
				return 0
			} else {
				count = count.replace(/(^\s*)|(\s*$)/gi, '')
				count = count.replace(/[ ]{2,}/gi, ' ')
				count = count.replace(/\n /, '\n')
				return count.split(' ').length
			}
		}

		setState({
			wordCount: countWords(count),
			charCount: count.length,
		})
	}

	return (
		<div id="container">
			<h2 className={raleway.className + ' pt-3'}>Расчет стоимости документа</h2>
			<p>
				Если вы хотите получить перевод на испанский язык, пожалуйста, напишите мне по адресу
				<strong> ispanskijshuanom@mail.ru</strong>.
			</p>{' '}
			<p>💰 Цена: 0,10€/слово</p>
			<textarea
				placeholder="Type here"
				style={{ width: '100%', borderRadius: '25px', padding: '10px' }}
				onChange={handleKeyPress}
			></textarea>
			<h4 className={raleway.className + ' pt-3'}>
				Количество слов:
				<span> {state.wordCount}</span>
			</h4>
			<h4 className={raleway.className + ' pb-3'}>
				Стоимость:
				<span> {state.wordCount * 0.1}€</span>
			</h4>
		</div>
	)
}

export default WordCounter
