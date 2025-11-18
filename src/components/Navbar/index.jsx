import { Navbar, Nav, Container } from 'react-bootstrap'
import './styles.scss'
import logo from '../../assets/images/logo-lavinia.png';

export default function NavbarComponent() {
    return (
        <Navbar className='navbar-custom' expand="lg" >
        <Container>
            <Navbar.Brand href="#home">
                <img
                    className='w-25 mt-1 d-none d-md-block'
                    src={logo} 
                    alt="Lavinia Barra - Fisioterapeuta" 
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='nav-link me-4' href='#home'>Início</Nav.Link>
                <Nav.Link className='nav-link me-4' href='#about'>Sobre</Nav.Link>
                <Nav.Link className='nav-link me-4' href='#services'>Serviços</Nav.Link>
                <Nav.Link className='nav-link' href='#contact'>Contato</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
