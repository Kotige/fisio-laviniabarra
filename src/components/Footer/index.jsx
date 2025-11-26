import './styles.scss';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5 container-fluid" id="footer">
        <div className="text-center">
            <div>
                <p>modv logo</p>
            </div>
            <div>
                <small> © {new Date().getFullYear()}. Todos os direitos reservados.</small>
            </div>
        </div>
        </footer>
    )
}
