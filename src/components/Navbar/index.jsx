import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './styles.scss'

export default function NavbarComponent() {
    return (
        <Navbar className='navbar-custom' expand="lg" sticky="top">
        <Container>
            <Navbar.Brand href="#home">Lavinia Barra - Fisioterapeuta</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='nav-link' href='#home'>Início</Nav.Link>
                <Nav.Link className='nav-link' href='#about'>Sobre</Nav.Link>
                <Nav.Link className='nav-link' href='#services'>Serviços</Nav.Link>
                <Nav.Link className='nav-link' href='#contact'>Contato</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
