import { Card, Button } from 'react-bootstrap'
import './styles.scss';

export default function Services() {
    return (
        <section id='services' className='container-fluid'> 
        <div className="py-5">
            <div id='service-h2'><h2>Como posso ajudar você?</h2></div>
            <div className='d-flex flex-row row justify-content-around mt-5 '>
                <Card style={{ width: '18rem' }} className='col col-4'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Fisioterapia</Card.Title>
                        <Card.Text>
                            Ajuda a reduzir dores, melhora a flexibilidade, corrige posturas e fortalece os 
                            músculos para evitar lesões.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='col col-4'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Pilates</Card.Title>
                        <Card.Text>
                            Ajuda a melhorar a resistência e flexibilidade muscular,
                            reduzir a dor crônica e diminuir a ansiedade e a depressão.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='col col-4'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Reabilitação em Traumatologia</Card.Title>
                        <Card.Text>
                            Restaura a força, a mobilidade e a função após fraturas, entorses, 
                            luxações, cirurgias ortopédicas ou traumas musculares.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </section>
    )
}
