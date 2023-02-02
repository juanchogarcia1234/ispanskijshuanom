import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'
import { Manrope, Raleway } from '@next/font/google'
import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

const manrope = Manrope({
	subsets: ['cyrillic'],
	weight: '400',
})

export default function Footer() {
	return (
		<div className={`container-fluid ${manrope.className}`} style={{ backgroundColor: 'white' }}>
			<div className="container">
				<footer className="py-5">
					<div className="row">
						<div className="col-6 col-md-2 mb-3">
							<h5 className={raleway.className}> Полезные ссылки</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="https://ru.espantodo.es/" className="nav-link p-0 text-muted">
										Туризм в Испании
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="https://ru.espantodo.es/" className="nav-link p-0 text-muted">
										Гид в Гранаде для туристов
									</a>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h5 className={raleway.className}>Контакты</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-muted">
										<FontAwesomeIcon icon={faPhone} /> +34662269306
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="#" className="nav-link p-0 text-muted">
										<FontAwesomeIcon icon={faEnvelope} /> ispanskijshuanom@mail.ru
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
						<p>© 2023 Испанский с Хуаном.</p>
						<ul className="list-unstyled d-flex">
							<li className="ms-3">
								<a className="link-dark" href="#">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li className="ms-3">
								<a className="link-dark" href="#">
									<FontAwesomeIcon icon={faTelegram} />
								</a>
							</li>
							<li className="ms-3">
								<a className="link-dark" href="#">
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>
							<li className="ms-3">
								<a className="link-dark" href="#">
									<FontAwesomeIcon icon={faVk} />
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
			<WhatsAppWidget
				companyName="Испанский с Хуаном"
				replyTimeText="Отвечаю быстро"
				message="¡Hola! 👋🏼 Как я могу вам помочь?"
				phoneNumber="+34662269306"
				sendButton="Отправить"
			/>
		</div>
	)
}
