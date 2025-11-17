import { Container} from 'react-bootstrap';
import PrimaryButton from '../PrimaryButton';
import './styles.scss';
import laviniaLogo from '../../assets/images/lavinia-logo.png';

export default function Hero() {
    return (
        <section id='home' className="py-5 text-center d-flex justify-content-center align-items-center">
        <Container className='row d-flex'>
            <div className='col col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
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
        </Container>
        </section>
    )
}
