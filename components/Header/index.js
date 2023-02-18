import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import styles from './index.module.css'

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: '800',
})

export default function Header() {
	return (
		<Navbar
			expand="lg"
			bg="white"
			variant="light"
			sticky="top"
			style={{ color: 'black' }}
			className={raleway.className}
		>
			<Container>
				<Navbar.Brand href="/">
					<Image
						src="/images/web.png" // Route of the image file
						height={38} // Desired size with correct aspect ratio
						width={50} // Desired size with correct aspect ratio
						alt="Your Name"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/blog-ispanskovo" className={styles.navLink}>
							БЛОГ ИСПАНСКОГО
						</Nav.Link>
						<Nav.Link href="/repetitor-ispanskovo-nositel-yazika" className={styles.navLink}>
							УРОКИ С НОСИТЕЛЕМ
						</Nav.Link>
						<Nav.Link href="/zakazat-perevod-na-ispanskij" className={styles.navLink}>
							ЗАКАЗАТЬ ПЕРЕВОД НА ИСПАНСКИЙ
						</Nav.Link>
						{/* <Nav.Link href="/zakazat-perevod-na-ispanskij" className={styles.navLink}>
							РАЗГОВОРНЫЙ КЛУБ
						</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
