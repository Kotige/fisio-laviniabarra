import Icon from '../../components/Bicon/index'
import './styles.scss';

import './styles.scss';

export default function Contact() {
    return (
        <section id='contact' className='container-fluid'> 
        <h2>Fale comigo:</h2>
        <div className="py-5 map-div">
            <iframe
                title="localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.962288530089!2d-44.19516372557083!3d-21.46999628810485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f3.1!3m3!1m2!1s0x9f6394eb01ffb7%3A0x80f4449f52ad990c!2sR.%20Don%C3%A1%20Geraldina%2C%2045%20-%20Piedade%20do%20Rio%20Grande%2C%20MG%2C%2036227-000!5e0!3m2!1spt-BR!2sbr!4v1764195786321!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                className='d-none d-lg-block map-lg'
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="py-5 row d-flex contact-lg">
                <div className='col col-12 col-md-6 d-flex flex-column links'>
                    <a href="https://wa.me/5532998148706?      text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio%20com%20voc%C3%AA." 
                    className="d-inline-flex align-items-center" target='_blank'>
                        <Icon name="whatsapp" className="me-2 fs-4 icon" />
                        (32) 99814-8706
                    </a>
                    <a href="mailto:contatofisiolavinia@gmail.com" className='d-inline-flex align-items-center' target='_blank'>
                        <Icon name="instagram" className="me-2 fs-4 icon" /> @fisiolaviniabarra
                    </a>
                    <a href="mailto:contatofisiolavinia@gmail.com" className='d-inline-flex align-items-center'>
                        <Icon name="envelope" className="me-2 fs-4 icon" /> contatofisiolavinia@gmail.com
                    </a>
                    <a href="" className=''>
                        <Icon name="geo-alt" className="me-2 fs-4 icon" /> Rua Dona Geraldina, 45 - Sala XX
                            Centro 
                            Piedade do Rio Grande - MG 
                            CEP 36227-000
                    </a>
                </div>
                <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <iframe
                        title="localização"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.962288530089!2d-44.19516372557083!3d-21.46999628810485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f7.1!3m3!1m2!1s0x9f6394eb01ffb7%3A0x80f4449f52ad990c!2sR.%20Don%C3%A1%20Geraldina%2C%2045%20-%20Piedade%20do%20Rio%20Grande%2C%20MG%2C%2036227-000!5e0!3m2!1spt-BR!2sbr!4v1764195786321!5m2!1spt-BR!2sbr"
                        allowFullScreen=""
                        className='d-block d-lg-none map-mobile'
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>

        <div className='wave-container' aria-hidden="true">
        
            <svg className='wave' viewBox="0 0 1440 320" preserveAspectRatio="none">
                <defs>
                    <linearGradient id='waveGradient-contact' x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#43F2DE" />
                        <stop offset="100%" stopColor="#1BB8A6" />
                    </linearGradient>
                </defs>
                            
                <path 
                    className='wave-path' 
                    d="M0,200 C300,250 600,150 900,200 C1200,250 1440,200 1440,200 L1440,320 L0,320 Z"
                    fill='url(#waveGradient)'
                />
            </svg>
        </div>

        </section>
    )
}
