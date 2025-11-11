import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
        <Container className="text-center">
            <div>
                <p>modv logo</p>
            </div>
            <div>
                <small> © {new Date().getFullYear()} 2025. Todos os direitos reservados.</small>
            </div>
        </Container>
        </footer>
    )
}
