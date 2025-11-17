import PrimaryButton from '../PrimaryButton';
import './styles.scss';
import laviniaLogo from '../../assets/images/lavinia-logo.png';
import logo from '../../assets/images/logo-lavinia.png'

export default function Hero() {
    return (
        <section id='home' className="pt-5 text-center row d-flex justify-content-center align-items-center">
            <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                <img 
                    id='logo-md'
                    className='w-75 d-block d-md-none'
                    src={logo} 
                    alt="Lavínia Barra - Físioterapeuta" 
                />
                <h1 className='my-5'>Te ajudo a tratar sua dor através do <span>movimento!</span></h1>
                <PrimaryButton />
            </div>
            <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                <img 
                    className='w-75'
                    src={laviniaLogo} 
                    alt="Fisioterapeuta Lavínia Barra a frente de seu logo." 
                />
            </div>

        <div class="wave-container">
                <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path d="" class="wave-path"></path>
                </svg>
        </div>
        </section>
    )
}
