import { useState } from "react";
import { epoche } from "../data/epoche";
import { Link } from "react-router-dom";

const Epoche = () => {

    const [openCards, setOpenCards] = useState<number[]>([]);

    const toggleCard = (id: number) => {
        setOpenCards((prev) =>
            prev.includes(id)
                ? prev.filter((cardId) => cardId !== id)
                : [...prev, id]
        );
    };

    return(
        <>
            <h1 className = "text-center">Epoche Storiche</h1>
            <hr className = "text-light"/>
            
            <article id = "intro-epoche">        
                <p>
                    Ogni generazione ha creduto di vivere nel tempo più avanzato della storia. 
                    Gli uomini dell'antichità osservavano il proprio presente come il punto più alto raggiunto dall'umanità, 
                    proprio come facciamo noi oggi. Ma esiste davvero un'epoca che possa definirsi "moderna", 
                    oppure la modernità è soltanto un'illusione che accompagna ogni tempo?
                </p>

                <p>
                    I nomi delle epoche non nascono mentre vengono vissute. 
                    Nessun abitante del Medioevo sapeva di trovarsi nel Medioevo, così come nessun cittadino dell'Età Antica si definiva antico. 
                    Sono gli storici, osservando il passato da lontano, a tracciare confini nel flusso del tempo attraverso un processo chiamato periodizzazione. 
                    Le epoche sono quindi mappe create a posteriori: tentativi di dare un ordine a ciò che, mentre accade, appare caotico e indefinito.
                </p>

                <p>
                    E allora, in quale epoca viviamo davvero? 
                    Siamo ancora nell'Età Contemporanea, oppure stiamo attraversando una trasformazione così profonda da meritare un nuovo nome? 
                    L'era digitale, l'età dell'informazione, l'epoca dell'intelligenza artificiale... forse sono soltanto indizi di qualcosa che non riusciamo ancora a vedere nella sua interezza.
                </p>

                <p>
                    Forse il vero mistero è questo: nessuna generazione può sapere come verrà ricordata. 
                    Solo i secoli futuri potranno dare un nome al nostro tempo e decidere quale eredità avremo lasciato. 
                    Fino ad allora rimaniamo sospesi in un'epoca senza nome, protagonisti inconsapevoli di una storia che deve ancora essere scritta.
                </p>
            </article>
            <section>
                {epoche[1]?.content2?.map((item) => (
                    <div key={item.id}>
                        <div 
                            id={`card-${item.title}`.toLowerCase().replace(/\s+/g, '-')}
                            onClick={() => toggleCard(item.id)}
                        >
                            <h3>{item.title}</h3>
                        </div>
                        
                        {openCards.includes(item.id) && (
                            <div>
                                {item.content?.map((subItem) => (
                                    <div
                                        key={subItem.id}
                                        className="card_epoche_subitem_div"
                                    >
                                        <h4>{subItem.title}</h4>
                                        <p>{subItem.text}</p>
                                        
                                        <Link to = {`/epoca/${item.id}/${subItem.id}`}>
                                            <button className = "button_epoche">Approfondisci</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </>
    );
}

export default Epoche;