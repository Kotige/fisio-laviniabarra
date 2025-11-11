import Icon from '../../components/Bicon/index'
import { Container } from 'react-bootstrap'

export default function Contact() {
    return (
        <section id='contact'> 
        <Container className="py-5">
            <h2>Fale comigo:</h2>
            <Container className="py-5 row d-flex">
                <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <h2>Mapa</h2>
                </div>
                <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <a href="https://wa.me/553298148706" className="d-inline-flex align-items-center">
                        <Icon name="whatsapp" className="me-2 fs-4" />
                        (32) 9814-8706
                    </a>
                    <a href="mailto:contatofisiolavinia@gmail.com" className='d-inline-flex align-items-center'>
                        <Icon name="instagram" className="me-2 fs-4" /> @fisiolaviniabarra
                    </a>
                    <a href="mailto:contatofisiolavinia@gmail.com" className='d-inline-flex align-items-center'>
                        <Icon name="envelope" className="me-2 fs-4" /> contatofisiolavinia@gmail.com
                    </a>
                    <a href="" className='d-inline-flex align-items-center'>
                        <Icon name="geo-alt" className="me-2 fs-4" /> Rua Dona Geraldina, 45 - Sala XX
                        <br />
                        Centro 
                        Piedade do Rio Grande - MG 
                        <br />
                        CEP 36227-000
                    </a>
                </div>
            </Container>
        </Container>
        </section>
    )
}
