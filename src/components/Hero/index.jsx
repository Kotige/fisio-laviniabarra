import PrimaryButton from '../PrimaryButton';
import './styles.scss';
import laviniaLogo from '../../assets/images/lavinia-logo.png';
import logo from '../../assets/images/logo-lavinia.png';
import detalheVerde from '../../assets/images/detalhe-verde.png';
import detalheBranco from '../../assets/images/detalhe-branco.png';

export default function Hero() {
    return (
        <section id='home' className="pt-1 text-center row d-flex justify-content-center align-items-center container-fluid">
            <div id='frontHero' className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center container-content'>
                <img 
                    id='logo-md'
                    className='w-75 d-block d-md-none'
                    src={logo} 
                    alt="Lavínia Barra - Físioterapeuta" 
                />
                <h1 id='home-h1' className='mb-5'>Te ajudo a tratar sua dor através do <span>movimento!</span></h1>
                <PrimaryButton id="home-btn" />
            </div>
            <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center container-content'>
                <img 
                    id='home-img'
                    src={laviniaLogo} 
                    alt="Fisioterapeuta Lavínia Barra." 
                />

                <img 
                    id='green-detail'
                    className='d-none d-lg-block'
                    src={detalheVerde}
                    alt="detalhe do background do site da fisioterapeuta Lavínia Barra" 
                />
            </div>

            <div className='wave-container' aria-hidden="true">

                <img
                    src={detalheBranco} 
                    className='wave-img d-none d-lg-block'
                    alt="detalhe do background do site da fisioterapeuta Lavínia Barra" 
                />

                <svg className='wave' viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id='waveGradient' x1="0%" y1="0%" x2="100%" y2="0%">
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
