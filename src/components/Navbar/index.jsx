import { Navbar, Nav, Container } from 'react-bootstrap'
import './styles.scss'
import logo from '../../assets/images/logo-lavinia.png';

export default function NavbarComponent() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({behavior: 'smooth'});

        window.history.replaceState(null, '', window.location.pathname);
    };

    return (
        <Navbar className='navbar-custom' expand="lg" >
        <Container>
            <Navbar.Brand onClick={() => scrollToSection('home')}>
                <img
                    className='w-25 mt-1 d-none d-md-block'
                    src={logo} 
                    alt="Lavinia Barra - Fisioterapeuta" 
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='nav-link me-4'  onClick={() => scrollToSection('home')}>Início</Nav.Link>
                <Nav.Link className='nav-link me-4' onClick={() => scrollToSection('about')}>Sobre</Nav.Link>
                <Nav.Link className='nav-link me-4' onClick={() => scrollToSection('services')}>Serviços</Nav.Link>
                <Nav.Link className='nav-link' onClick={() => scrollToSection('contact')}>Contato</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
