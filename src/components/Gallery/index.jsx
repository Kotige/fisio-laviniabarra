import { useRef } from "react";
import "./styles.scss";
import fisio1 from '../../assets/images/fisio1.jpg';
import fisio2 from '../../assets/images/fisio2.jpg';
import pilates from '../../assets/images/pilates.jpg';


export default function Gallery() {
    const scrollRef = useRef(null);

    const scrollTo = (index) => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.children[0].offsetWidth;
        const gap = 16; // mesmo gap do CSS
        const position = index * (cardWidth + gap);
        scrollRef.current.scrollTo({ left: position, behavior: "smooth" });
    };

    const items = [
        {
        img: fisio1,
        title: "Fisioterapia",
        text: "Ajuda a reduzir dores, aumenta a flexibilidade, corrige posturas e fortalece os músculos para evitar lesões."
        },
        {
        img: pilates,
        title: "Pilates",
        text: "Ajuda a melhorar a resistência e flexibilidade muscular, reduzir a dor crônica e diminuir a ansiedade e depressão."
        },
        {
        img: fisio2,
        title: "Reabilitação em Traumatologia",
        text: "Restaura a força, mobilidade e a função após fraturas, entorses, luxações, cirurgias ortopédicas ou traumas musculares."
        }
    ];

    return (
        <div className="w-full d-flex flex-column align-items-center py-5">
            <div className="gallery-container" ref={scrollRef}>
                {items.map((item, i) => (
                <div className="gallery-card" key={i}>
                    <img src={item.img} alt={item.title} />
                    <div className="card-text">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
