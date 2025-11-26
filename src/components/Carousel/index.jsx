import React, { useState } from "react";
import "./styles.scss";
import img1 from "../../assets/images/fisio1.jpg";
import img2 from "../../assets/images/fisio2.jpg";
import img3 from "../../assets/images/pilates.jpg";
import img4 from "../../assets/images/fisioterapiapic.jpg";

export default function Carousel() {
    const items = [
        {   img: img1, 
            text: "Cuidando do movimento para transformar vidas. Quando passamos por uma lesão ou trauma, não recuperamos apenas o corpo; recuperamos rotina, autonomia e bem-estar. Na reabilitação traumato-ortopédica, trabalhamos juntos para devolver ao seu corpo a segurança de se mover novamente, respeitando seus limites e celebrando cada conquista. Com técnicas atualizadas e uma abordagem acolhedora, meu foco é fazer com que você recupere sua funcionalidade completa, diminua a dor e volte a viver com qualidade e liberdade." 
        },
        {   img: img2, 
            text: "Segundo parágrafo longo. Testando quebra e altura de coluna. Deve ficar do lado direito da imagem em desktop." 
        },
        {   img: img3, 
            text: "Terceiro parágrafo, ainda mais texto para ver o comportamento das bolinhas e do scroll interno quando necessário." 
        },
        {   img: img4, 
            text: "Quarto parágrafo, ainda mais texto para ver o comportamento das bolinhas e do scroll interno quando necessário." 
        }
    ];

    const [index, setIndex] = useState(0);

    return (
        <section className="my-carousel mx-lg-5" aria-label="Carousel de imagem e texto">
        <div className="carousel-inner">
            <div className="carousel-left">
                <img src={items[index].img} alt={`item-${index + 1}`} />
            </div>

                <div className="carousel-right">
                    <div className="dots d-flex justify-content-center" role="tablist" aria-label="Controles do carrossel">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                                aria-pressed={i === index}
                                aria-label={`Mostrar item ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="text-wrap mx-lg-5">
                        <p className="text">{items[index].text}</p>
                    </div>
                </div>
        </div>
    </section>
    );
}
