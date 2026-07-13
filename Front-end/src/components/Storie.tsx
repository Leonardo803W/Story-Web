import { useState, useEffect } from "react";
import { categorie } from "../data/categorie";
import { useParams } from "react-router-dom";

const Storie = () => {

    const { parametroId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [openEvent, setOpenEvent] = useState<number[]>([]);


    useEffect(() => {
        if (parametroId) {
            setSelectedCategory(Number(parametroId));
        }
    }, [parametroId]);

    const toggleCategory = (id: number) => {
        setSelectedCategory(prev => prev === id ? null : id);
    };

    const selectedData = categorie[1].content2?.find((item) => item.id === selectedCategory);

    const toggleEvents = (id: number) => {
        setOpenEvent((prev) =>
            prev.includes(id)
                ? prev.filter((cardId) => cardId !== id)
                : [...prev, id]
        );
    };

    return(
        <>
            <section className = "text-center">
                <h3>Che cosa vuoi scoprire oggi?</h3>

                <div className = "group_button_story">
                    {categorie[0].content1?.map((item) => (
                        <button
                            className={
                                selectedCategory === item.id
                                    ? "button_active_story"
                                    : "button_story"
                            }
                            key = {item.id} 
                            onClick={() => toggleCategory(item.id)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </section>


            {selectedData && (
                <section className = "big_section_story">
                    <h3>{selectedData.title}</h3>

                    {selectedData.content?.map((subItem) => (
                        <article 
                            key={subItem.id}
                            onClick={() => toggleEvents(subItem.id)}
                        >
                            <div
                                id={`card-${subItem.epoca}`.toLowerCase().replace(/\s+/g, '-')}
                                className = {openEvent.includes(subItem.id) ? "macro_epoche_card_active" : "macro_epoche_card"}
                                >
                                    <h3>{subItem.epoca}</h3>
                                </div>

                            {openEvent.includes(subItem.id) && (
                                <section className = "group_cards_story">
                                    {subItem.eventi?.map((event) => (
                                        <div key={event.id} className = "card_story">
                                            <h3>{event.title}</h3>
                                            <p>{event.text}</p>
                                        </div>
                                    ))}
                                </section>
                            )}
                        </article>
                    ))}
                </section>
            )}

            <section className = {selectedCategory ? "d-none" : "d-block"}>
                    <div className = "story_introduction text-center">
                        <p>
                            Ogni evento della storia lascia un segno. Le battaglie non modificano soltanto
                            i confini delle nazioni, ma lasciano cicatrici profonde nelle persone e nelle
                            società.
                        </p>

                        <p>
                            Le invenzioni trasformano il nostro modo di vivere, lavorare e comunicare.
                            Le religioni hanno guidato, ispirato e unito intere civiltà, offrendo a
                            milioni di persone valori, speranza e un senso di appartenenza.
                        </p>

                        <p>
                            Le tattiche militari raccontano il modo di pensare delle diverse epoche:
                            riflettono la tecnologia disponibile, la cultura e la mentalità di chi le ha
                            ideate.
                        </p>

                        <p>
                            Allo stesso tempo, i grandi misteri della storia continuano ad alimentare la
                            nostra curiosità, ricordandoci che il passato conserva ancora molte domande
                            senza una risposta definitiva.
                        </p>

                        <p>
                            L'eredità culturale e storica di ogni popolo nasce dall'intreccio di tutti
                            questi elementi.
                        </p>

                        <p>
                            <strong>
                            Ma la domanda più importante riguarda il presente: quale eredità stiamo
                            costruendo oggi per le generazioni future?
                            </strong>
                        </p>
                    </div>
            </section>
        </>
    )
}

export default Storie;
