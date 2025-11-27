import './styles.scss';
import modv from '../../assets/images/modv.png';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5 container-fluid" id="footer">
        <div className="text-center">
            <div>
                <a href="https://modvestudio.com.br/" target='_blank'>
                    <img 
                        src={modv} 
                        alt="" 
                        className='modv'
                    />
                </a>
            </div>
            <div>
                <small> © {new Date().getFullYear()}. Todos os direitos reservados.</small>
            </div>
        </div>
        </footer>
    )
}
