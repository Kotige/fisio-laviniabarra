import { Card, Button } from 'react-bootstrap'
import './styles.scss';

export default function Testimonials() {
    return (
        <section id='testimonials' className='container-fluid'> 
        <div className="py-5">
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
