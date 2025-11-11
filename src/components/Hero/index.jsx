import { Container, Button } from 'react-bootstrap'

export default function Hero() {
    return (
        <section id='home' className="bg-light text-primary py-5 text-center vh-100 d-flex justify-content-center align-items-center">
        <Container className='row d-flex'>
            <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mb-5'>Te ajudo a tratar sua dor através do movimento!</h1>
                <Button variant="primary" size="lg">Quero agendar um horário</Button>
            </div>
            <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                <h2>Imagem</h2>
            </div>
        </Container>
        </section>
    )
}
