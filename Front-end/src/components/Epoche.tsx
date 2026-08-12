import { useEffect, useState } from "react";
import { epoche } from "../data/epoche";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AnimationIntro } from "./AnimationIntro";
import { AnimatedSection } from "./AnimatedSection";

const Epoche = () => {

    const { id } = useParams();

    const [openCards, setOpenCards] = useState<number[]>([]);

    useEffect(() => {
    if (!id) return;

    setOpenCards([Number(id)]);

        setTimeout(() => {
            const card = document.getElementById(
                `card-${epoche[1].content2
                    ?.find(item => item.id === Number(id))
                    ?.title.toLowerCase()
                    .replace(/\s+/g, "-")}`
            );

            card?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 0);
    }, [id]);

    const toggleCard = (id: number) => {
        
        setOpenCards((prev) =>
            prev.includes(id)
                ? prev.filter((cardId) => cardId !== id)
                : [...prev, id]
        );
    };

    return(
        <>
            <AnimationIntro>
                <h1 className = "title_epoche">Epoche Storiche</h1>

                <article className = "intro_epoche_destra">
                    <p>
                        Ogni generazione ha creduto di vivere nel tempo più avanzato della storia. 
                        Gli uomini dell'antichità osservavano il proprio presente come il punto più alto raggiunto dall'umanità, 
                        proprio come facciamo noi oggi. Ma esiste davvero un'epoca che possa definirsi "moderna", 
                        oppure la modernità è soltanto un'illusione che accompagna ogni tempo?
                    </p>
                </article>
            </AnimationIntro>

            <AnimatedSection>
                <article className = "intro_epoche_sinistra">
                    <p>
                        I nomi delle epoche non nascono mentre vengono vissute. 
                        Nessun abitante del Medioevo sapeva di trovarsi nel Medioevo, così come nessun cittadino dell'Età Antica si definiva antico. 
                        Sono gli storici, osservando il passato da lontano, a tracciare confini nel flusso del tempo attraverso un processo chiamato periodizzazione. 
                        Le epoche sono quindi mappe create a posteriori: tentativi di dare un ordine a ciò che, mentre accade, appare caotico e indefinito.
                    </p>
                </article>
            </AnimatedSection>

            <AnimatedSection>
                <article className = "intro_epoche_destra">
                    <p>
                        E allora, in quale epoca viviamo davvero? 
                        Siamo ancora nell'Età Contemporanea, oppure stiamo attraversando una trasformazione così profonda da meritare un nuovo nome? 
                        L'era digitale, l'età dell'informazione, l'epoca dell'intelligenza artificiale... forse sono soltanto indizi di qualcosa che non riusciamo ancora a vedere nella sua interezza.
                    </p>
                </article>
            </AnimatedSection>
            
            <AnimatedSection>
                <article className = "intro_epoche_sinistra">
                    <p>
                        Forse il vero mistero è questo: nessuna generazione può sapere come verrà ricordata. 
                        Solo i secoli futuri potranno dare un nome al nostro tempo e decidere quale eredità avremo lasciato. 
                        Fino ad allora rimaniamo sospesi in un'epoca senza nome, protagonisti inconsapevoli di una storia che deve ancora essere scritta.
                    </p>
                </article>
            </AnimatedSection>
            
            <AnimatedSection>
                <section className = "macro_epoche">
                    {epoche[1]?.content2?.map((item) => (
                        <div key={item.id}>
                            <div 
                                id={`card-${item.title}`.toLowerCase().replace(/\s+/g, '-')}
                                className = {openCards.includes(item.id) ? "macro_epoche_card_active" : "macro_epoche_card"}
                                onClick={() => toggleCard(item.id)}
                            >
                                <h3 className = " mt-auto mb-auto">{item.title}</h3>
                            </div>
                            
                            {openCards.includes(item.id) && (
                                <div className = "card_epoche_subitem_container">
                                    {item.content?.map((subItem) => (
                                        <div
                                            key={subItem.id}
                                            className="card_epoche_subitem_div "
                                            onClick={() => toggleCard(subItem.id)}
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
            </AnimatedSection>
        </>
    );
}

export default Epoche;