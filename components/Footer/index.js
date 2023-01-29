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
				<footer class="py-5">
					<div class="row">
						<div class="col-6 col-md-2 mb-3">
							<h5 className={raleway.className}> Полезные ссылки</h5>
							<ul class="nav flex-column">
								<li class="nav-item mb-2">
									<a href="#" class="nav-link p-0 text-muted">
										Полезные ссылки
									</a>
								</li>
							</ul>
						</div>

						<div class="col-6 col-md-2 mb-3">
							<h5 className={raleway.className}>Контакты</h5>
							<ul class="nav flex-column">
								<li class="nav-item mb-2">
									<a href="#" class="nav-link p-0 text-muted">
										<FontAwesomeIcon icon={faPhone} /> +34662269306
									</a>
								</li>
								<li class="nav-item mb-2">
									<a href="#" class="nav-link p-0 text-muted">
										<FontAwesomeIcon icon={faEnvelope} /> ispanskijshuanom@mail.ru
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
						<p>© 2023 Испанский с Хуаном.</p>
						<ul class="list-unstyled d-flex">
							<li class="ms-3">
								<a class="link-dark" href="#">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li class="ms-3">
								<a class="link-dark" href="#">
									<FontAwesomeIcon icon={faTelegram} />
								</a>
							</li>
							<li class="ms-3">
								<a class="link-dark" href="#">
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>
							<li class="ms-3">
								<a class="link-dark" href="#">
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
