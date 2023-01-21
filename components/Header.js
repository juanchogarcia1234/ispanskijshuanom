import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  weight: "700",
});

export default function Header() {
  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
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
            <Nav.Link href="#home">БЛОГ</Nav.Link>
            <Nav.Link href="#home">ГРАММАТИКА</Nav.Link>
            <Nav.Link href="#link">УРОКИ</Nav.Link>
            <Nav.Link href="#link">ПЕРЕВОДЫ</Nav.Link>
            <Nav.Link href="#link">ПОДКАСТЫ</Nav.Link>
            <Nav.Link href="#link">КУРСЫ</Nav.Link>
            <Nav.Link href="#link">МАТЕРИАЛЫ</Nav.Link>
            <Nav.Link href="#link">УЧЕБА В ИСПАНИИ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
