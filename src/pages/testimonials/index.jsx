import './styles.scss';
import Carousel from '../../components/Carousel';
import PrimaryButton from '../../components/PrimaryButton';
import detalheVerde from '../../assets/images/detalhe-verde.png';

export default function Testimonials() {
    return (
        <section id='testimonials' className='container-fluid '>     
            <Carousel />
            <div className='div-btn'>
                <PrimaryButton />
            </div>
            <div className='img-bg'>
                <img 
                    // id='logo-md'
                    className='d-none'
                    src={detalheVerde} 
                    alt="Imagem de fundo verde com opacidade reduzida." 
                />
            </div>
        </section>
    )
}
