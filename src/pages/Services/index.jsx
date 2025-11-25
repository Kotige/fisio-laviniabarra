import { Card, Button } from 'react-bootstrap'
import './styles.scss';
import Gallery from '../../components/Gallery';
import detalheVerde from '../../assets/images/detalhe-verde.png';
import detalheBranco from '../../assets/images/detalhe-branco.png';

export default function Services() {
    return (
        <section id='services' className='container-fluid'> 
        <div className="py-5">
            <div id='service-h2'><h2>Como posso ajudar você?</h2></div>
            <div className='d-flex flex-row row justify-content-around mt-5 '>
                <Gallery />
            </div>

            <img 
                id='white-detail'
                className='d-none d-lg-block'
                src={detalheBranco}
                alt="detalhe do background do site da fisioterapeuta Lavínia Barra" 
            />
        </div>

        <div className='wave-container' aria-hidden="true">
            <img
                src={detalheVerde} 
                className='wave-img d-none d-lg-block'
                alt="detalhe do background do site da fisioterapeuta Lavínia Barra" 
            />
        
            <svg className='wave' viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path 
                    className='wave-path' 
                    d="M0,200 C300,250 600,150 900,200 C1200,250 1440,200 1440,200 L1440,320 L0,320 Z"
                    fill='#FEFEFE'
                />
            </svg>
        </div>
        </section>
    )
}
