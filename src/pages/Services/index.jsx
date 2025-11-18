import { Container, Card, Button } from 'react-bootstrap'

export default function Services() {
    return (
        <section id='services' className='container-fluid'> 
        <div className="py-5">
            <h2>Como posso ajudar você?</h2>
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
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <Button>Quero agendar o meu atendimento</Button>
            </div>
            <div className="py-5 row d-flex">
                <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <h2>Imagem</h2>
                </div>
                <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <p>
                        Sou <span>Lavínia Barra</span>, fisioterapeuta apaixonada por movimento
                        e pela arte de reabilitar vidas. Sou natural de Piedade do Rio Grande (MG).
                        Sou formada pelo Centro Universitário de Lavras (Unilavras) e pós-graduada em 
                        Ortopedia e Traumatologia, área que me encanta por permitir acompanhar de perto
                        a recuperação e evolução dos meus pacientes.
                    </p>
                    <p>
                        Durante minha trajetória acadêmica e profissional, participei de diversos cursos, 
                        estágios e iniciações científicas, sempre com o objetivo de me tornar uma profissional
                        mais completa e atualizada, buscando o que há de melhor na fisioterapia baseada em
                        evidências científicas. Acredito que <span>o movimento é a melhor forma de cuidar da 
                            dor e promover qualidade de vida</span>.
                    </p>
                    <p>
                        Mais do que tratar, meu propósito é devolver autonomia, confiança e bem-estar a cada 
                        pessoa que passa por mim. Sou comunicativa, adoro conversar e trocar experiências, e 
                        vejo na fisioterapia uma vocação que me escolheu tanto quanto eu a escolhi. <span>O
                        movimento cura!</span>
                    </p>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-2'>
                    <Button>Quero agendar uma avaliação</Button>
                </div>
            </div>
        </section>
    )
}
